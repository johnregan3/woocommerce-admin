<?php
/**
 * REST API Admin Notes controller
 *
 * Handles requests to the admin notes endpoint.
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Notes\Note;
use Automattic\WooCommerce\Admin\Notes\Notes as NotesRepository;

/**
 * REST API Admin Notes controller class.
 *
 * @extends WC_REST_CRUD_Controller
 */
class Notes extends \WC_REST_CRUD_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-analytics';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'admin/notes';

	/**
	 * Register the routes for admin notes.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => $this->get_collection_params(),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<id>[\d-]+)',
			array(
				'args'   => array(
					'id' => array(
						'description' => __( 'Unique ID for the resource.', 'woocommerce-admin' ),
						'type'        => 'integer',
					),
				),
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_item' ),
					'permission_callback' => array( $this, 'update_items_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/delete/(?P<id>[\d-]+)',
			array(
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'update_items_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/delete/all',
			array(
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_all_items' ),
					'permission_callback' => array( $this, 'update_items_permissions_check' ),
					'args'                => array(
						'status' => array(
							'description'       => __( 'Status of note.', 'woocommerce-admin' ),
							'type'              => 'array',
							'sanitize_callback' => 'wp_parse_slug_list',
							'validate_callback' => 'rest_validate_request_arg',
							'items'             => array(
								'enum' => Note::get_allowed_statuses(),
								'type' => 'string',
							),
						),
					),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/tracker/(?P<note_id>[\d-]+)/user/(?P<user_id>[\d-]+)',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'track_opened_email' ),
					'permission_callback' => '__return_true',
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/update',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'batch_update_items' ),
					'permission_callback' => array( $this, 'update_items_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

	/**
	 * Get a single note.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response|WP_Error
	 */
	public function get_item( $request ) {
		$note = NotesRepository::get_note( $request->get_param( 'id' ) );

		if ( ! $note ) {
			return new \WP_Error(
				'woocommerce_note_invalid_id',
				__( 'Sorry, there is no resource with that ID.', 'woocommerce-admin' ),
				array( 'status' => 404 )
			);
		}

		if ( is_wp_error( $note ) ) {
			return $note;
		}

		$data = $this->prepare_note_data_for_response( $note, $request );

		return rest_ensure_response( $data );
	}

	/**
	 * Get all notes.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response
	 */
	public function get_items( $request ) {
		$query_args = $this->prepare_objects_query( $request );

		$notes = NotesRepository::get_notes( 'edit', $query_args );

		$is_tasklist_experiment_assigned_treatment = $this->is_tasklist_experiment_assigned_treatment();

		$data = array();
		foreach ( (array) $notes as $note_obj ) {
			// Hide selected notes for users not in experiment.
			if ( ! $is_tasklist_experiment_assigned_treatment ) {
				if ( 'wc-admin-complete-store-details' === $note_obj['name'] ) {
					continue;
				}

				if ( 'wc-admin-update-store-details' === $note_obj['name'] ) {
					continue;
				}
			}
			$note   = $this->prepare_item_for_response( $note_obj, $request );
			$note   = $this->prepare_response_for_collection( $note );
			$data[] = $note;
		}

		$response = rest_ensure_response( $data );
		$response->header( 'X-WP-Total', count( $data ) );

		return $response;
	}

	/**
	 * Checks if user is in tasklist experiment.
	 *
	 * @return bool Whether remote inbox notifications are enabled.
	 */
	private function is_tasklist_experiment_assigned_treatment() {
		$anon_id        = isset( $_COOKIE['tk_ai'] ) ? sanitize_text_field( wp_unslash( $_COOKIE['tk_ai'] ) ) : '';
		$allow_tracking = 'yes' === get_option( 'woocommerce_allow_tracking' );
		$abtest         = new \WooCommerce\Admin\Experimental_Abtest(
			$anon_id,
			'woocommerce',
			$allow_tracking
		);

		$date = new \DateTime();
		$date->setTimeZone( new \DateTimeZone( 'UTC' ) );

		$experiment_name = sprintf(
			'woocommerce_tasklist_progression_headercard_%s_%s',
			$date->format( 'Y' ),
			$date->format( 'm' )
		);

		$experiment_name_2col = sprintf(
			'woocommerce_tasklist_progression_headercard_2col_%s_%s',
			$date->format( 'Y' ),
			$date->format( 'm' )
		);

		return $abtest->get_variation( $experiment_name ) === 'treatment' ||
			$abtest->get_variation( $experiment_name_2col ) === 'treatment';
	}

	/**
	 * Prepare objects query.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return array
	 */
	protected function prepare_objects_query( $request ) {
		$args               = array();
		$args['order']      = $request['order'];
		$args['orderby']    = $request['orderby'];
		$args['per_page']   = $request['per_page'];
		$args['page']       = $request['page'];
		$args['type']       = isset( $request['type'] ) ? $request['type'] : array();
		$args['status']     = isset( $request['status'] ) ? $request['status'] : array();
		$args['source']     = isset( $request['source'] ) ? $request['source'] : array();
		$args['is_deleted'] = 0;

		if ( 'date' === $args['orderby'] ) {
			$args['orderby'] = 'date_created';
		}

		/**
		 * Filter the query arguments for a request.
		 *
		 * Enables adding extra arguments or setting defaults for a post
		 * collection request.
		 *
		 * @param array           $args    Key value array of query var to query value.
		 * @param WP_REST_Request $request The request used.
		 */
		$args = apply_filters( 'woocommerce_rest_notes_object_query', $args, $request );

		return $args;
	}

	/**
	 * Check whether a given request has permission to read a single note.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function get_item_permissions_check( $request ) {
		if ( ! wc_rest_check_manager_permissions( 'system_status', 'read' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

	/**
	 * Check whether a given request has permission to read notes.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function get_items_permissions_check( $request ) {
		if ( ! wc_rest_check_manager_permissions( 'system_status', 'read' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

	/**
	 * Update a single note.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Request|WP_Error
	 */
	public function update_item( $request ) {
		$note = NotesRepository::get_note( $request->get_param( 'id' ) );

		if ( ! $note ) {
			return new \WP_Error(
				'woocommerce_note_invalid_id',
				__( 'Sorry, there is no resource with that ID.', 'woocommerce-admin' ),
				array( 'status' => 404 )
			);
		}

		NotesRepository::update_note( $note, $this->get_requested_updates( $request ) );
		return $this->get_item( $request );
	}

	/**
	 * Delete a single note.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Request|WP_Error
	 */
	public function delete_item( $request ) {
		$note = NotesRepository::get_note( $request->get_param( 'id' ) );

		if ( ! $note ) {
			return new \WP_Error(
				'woocommerce_note_invalid_id',
				__( 'Sorry, there is no note with that ID.', 'woocommerce-admin' ),
				array( 'status' => 404 )
			);
		}

		NotesRepository::delete_note( $note );
		$data = $this->prepare_note_data_for_response( $note, $request );
		return rest_ensure_response( $data );
	}

	/**
	 * Delete all notes.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Request|WP_Error
	 */
	public function delete_all_items( $request ) {
		$args = array();
		if ( isset( $request['status'] ) ) {
			$args['status'] = $request['status'];
		}
		$notes = NotesRepository::delete_all_notes( $args );
		$data  = array();
		foreach ( (array) $notes as $note_obj ) {
			$data[] = $this->prepare_note_data_for_response( $note_obj, $request );
		}

		$response = rest_ensure_response( $data );
		$response->header( 'X-WP-Total', NotesRepository::get_notes_count( array( 'info', 'warning' ), array() ) );
		return $response;
	}

	/**
	 * Prepare note data.
	 *
	 * @param Note            $note     Note data.
	 * @param WP_REST_Request $request  Request object.
	 *
	 * @return WP_REST_Response $response Response data.
	 */
	public function prepare_note_data_for_response( $note, $request ) {
		$note = $note->get_data();
		$note = $this->prepare_item_for_response( $note, $request );
		return $this->prepare_response_for_collection( $note );
	}

	/**
	 * Prepare an array with the the requested updates.
	 *
	 * @param WP_REST_Request $request  Request object.
	 * @return array A list of the requested updates values.
	 */
	public function get_requested_updates( $request ) {
		$requested_updates = array();
		if ( ! is_null( $request->get_param( 'status' ) ) ) {
			$requested_updates['status'] = $request->get_param( 'status' );
		}

		if ( ! is_null( $request->get_param( 'date_reminder' ) ) ) {
			$requested_updates['date_reminder'] = $request->get_param( 'date_reminder' );
		}

		if ( ! is_null( $request->get_param( 'is_deleted' ) ) ) {
			$requested_updates['is_deleted'] = $request->get_param( 'is_deleted' );
		}

		if ( ! is_null( $request->get_param( 'is_read' ) ) ) {
			$requested_updates['is_read'] = $request->get_param( 'is_read' );
		}

		return $requested_updates;
	}

	/**
	 * Batch update a set of notes.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Request|WP_Error
	 */
	public function undoremove_items( $request ) {
		wc_deprecated_function( 'undoremove_items', '4.4', '\Automattic\WooCommerce\Admin\API\Notes()->undoremove_items' );
		return self::batch_update_items( $request );
	}

	/**
	 * Batch update a set of notes.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Request|WP_Error
	 */
	public function batch_update_items( $request ) {
		$data     = array();
		$note_ids = $request->get_param( 'noteIds' );

		if ( ! isset( $note_ids ) || ! is_array( $note_ids ) ) {
			return new \WP_Error(
				'woocommerce_note_invalid_ids',
				__( 'Please provide an array of IDs through the noteIds param.', 'woocommerce-admin' ),
				array( 'status' => 422 )
			);
		}

		foreach ( (array) $note_ids as $note_id ) {
			$note = NotesRepository::get_note( (int) $note_id );
			if ( $note ) {
				NotesRepository::update_note( $note, $this->get_requested_updates( $request ) );
				$data[] = $this->prepare_note_data_for_response( $note, $request );
			}
		}

		$response = rest_ensure_response( $data );
		$response->header( 'X-WP-Total', NotesRepository::get_notes_count( array( 'info', 'warning' ), array() ) );
		return $response;
	}

	/**
	 * Makes sure the current user has access to WRITE the settings APIs.
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function update_items_permissions_check( $request ) {
		if ( ! wc_rest_check_manager_permissions( 'settings', 'edit' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_edit', __( 'Sorry, you cannot edit this resource.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}
		return true;
	}

	/**
	 * Prepare a path or query for serialization to the client.
	 *
	 * @param string $query The query, path, or URL to transform.
	 * @return string A fully formed URL.
	 */
	public function prepare_query_for_response( $query ) {
		if ( empty( $query ) ) {
			return $query;
		}
		if ( 'https://' === substr( $query, 0, 8 ) ) {
			return $query;
		}
		if ( 'http://' === substr( $query, 0, 7 ) ) {
			return $query;
		}
		if ( '?' === substr( $query, 0, 1 ) ) {
			return admin_url( 'admin.php' . $query );
		}

		return admin_url( $query );
	}

	/**
	 * Maybe add a nonce to a URL.
	 *
	 * @link https://codex.wordpress.org/WordPress_Nonces
	 *
	 * @param string $url The URL needing a nonce.
	 * @param string $action The nonce action.
	 * @param string $name The nonce anme.
	 * @return string A fully formed URL.
	 */
	private function maybe_add_nonce_to_url( string $url, string $action = '', string $name = '' ) : string {
		if ( empty( $action ) ) {
			return $url;
		}

		if ( empty( $name ) ) {
			// Default paramater name.
			$name = '_wpnonce';
		}

		return add_query_arg( $name, wp_create_nonce( $action ), $url );
	}

	/**
	 * Prepare a note object for serialization.
	 *
	 * @param array           $data Note data.
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response $response Response data.
	 */
	public function prepare_item_for_response( $data, $request ) {
		$context                   = ! empty( $request['context'] ) ? $request['context'] : 'view';
		$data                      = $this->add_additional_fields_to_object( $data, $request );
		$data['date_created_gmt']  = wc_rest_prepare_date_response( $data['date_created'] );
		$data['date_created']      = wc_rest_prepare_date_response( $data['date_created'], false );
		$data['date_reminder_gmt'] = wc_rest_prepare_date_response( $data['date_reminder'] );
		$data['date_reminder']     = wc_rest_prepare_date_response( $data['date_reminder'], false );
		$data['title']             = stripslashes( $data['title'] );
		$data['content']           = stripslashes( $data['content'] );
		$data['is_snoozable']      = (bool) $data['is_snoozable'];
		$data['is_deleted']        = (bool) $data['is_deleted'];
		$data['is_read']           = (bool) $data['is_read'];
		foreach ( (array) $data['actions'] as $key => $value ) {
			$data['actions'][ $key ]->label  = stripslashes( $data['actions'][ $key ]->label );
			$data['actions'][ $key ]->url    = $this->maybe_add_nonce_to_url(
				$this->prepare_query_for_response( $data['actions'][ $key ]->query ),
				(string) $data['actions'][ $key ]->nonce_action,
				(string) $data['actions'][ $key ]->nonce_name
			);
			$data['actions'][ $key ]->status = stripslashes( $data['actions'][ $key ]->status );
		}
		$data = $this->filter_response_by_context( $data, $context );

		// Wrap the data in a response object.
		$response = rest_ensure_response( $data );
		$response->add_links(
			array(
				'self'       => array(
					'href' => rest_url( sprintf( '/%s/%s/%d', $this->namespace, $this->rest_base, $data['id'] ) ),
				),
				'collection' => array(
					'href' => rest_url( sprintf( '%s/%s', $this->namespace, $this->rest_base ) ),
				),
			)
		);
		/**
		 * Filter a note returned from the API.
		 *
		 * Allows modification of the note data right before it is returned.
		 *
		 * @param WP_REST_Response $response The response object.
		 * @param array            $data The original note.
		 * @param WP_REST_Request  $request  Request used to generate the response.
		 */
		return apply_filters( 'woocommerce_rest_prepare_note', $response, $data, $request );
	}


	/**
	 * Track opened emails.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	public function track_opened_email( $request ) {
		$note = NotesRepository::get_note( $request->get_param( 'note_id' ) );
		if ( ! $note ) {
			return;
		}

		NotesRepository::record_tracks_event_with_user( $request->get_param( 'user_id' ), 'email_note_opened', array( 'note_name' => $note->get_name() ) );
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params             = array();
		$params['context']  = $this->get_context_param( array( 'default' => 'view' ) );
		$params['order']    = array(
			'description'       => __( 'Order sort attribute ascending or descending.', 'woocommerce-admin' ),
			'type'              => 'string',
			'default'           => 'desc',
			'enum'              => array( 'asc', 'desc' ),
			'validate_callback' => 'rest_validate_request_arg',
		);
		$params['orderby']  = array(
			'description'       => __( 'Sort collection by object attribute.', 'woocommerce-admin' ),
			'type'              => 'string',
			'default'           => 'date',
			'enum'              => array(
				'note_id',
				'date',
				'type',
				'title',
				'status',
			),
			'validate_callback' => 'rest_validate_request_arg',
		);
		$params['page']     = array(
			'description'       => __( 'Current page of the collection.', 'woocommerce-admin' ),
			'type'              => 'integer',
			'default'           => 1,
			'sanitize_callback' => 'absint',
			'validate_callback' => 'rest_validate_request_arg',
			'minimum'           => 1,
		);
		$params['per_page'] = array(
			'description'       => __( 'Maximum number of items to be returned in result set.', 'woocommerce-admin' ),
			'type'              => 'integer',
			'default'           => 10,
			'minimum'           => 1,
			'maximum'           => 100,
			'sanitize_callback' => 'absint',
			'validate_callback' => 'rest_validate_request_arg',
		);
		$params['type']     = array(
			'description'       => __( 'Type of note.', 'woocommerce-admin' ),
			'type'              => 'array',
			'sanitize_callback' => 'wp_parse_slug_list',
			'validate_callback' => 'rest_validate_request_arg',
			'items'             => array(
				'enum' => Note::get_allowed_types(),
				'type' => 'string',
			),
		);
		$params['status']   = array(
			'description'       => __( 'Status of note.', 'woocommerce-admin' ),
			'type'              => 'array',
			'sanitize_callback' => 'wp_parse_slug_list',
			'validate_callback' => 'rest_validate_request_arg',
			'items'             => array(
				'enum' => Note::get_allowed_statuses(),
				'type' => 'string',
			),
		);
		$params['source']   = array(
			'description'       => __( 'Source of note.', 'woocommerce-admin' ),
			'type'              => 'array',
			'sanitize_callback' => 'wp_parse_list',
			'validate_callback' => 'rest_validate_request_arg',
			'items'             => array(
				'type' => 'string',
			),
		);
		return $params;
	}

	/**
	 * Get the note's schema, conforming to JSON Schema.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'note',
			'type'       => 'object',
			'properties' => array(
				'id'                => array(
					'description' => __( 'ID of the note record.', 'woocommerce-admin' ),
					'type'        => 'integer',
					'context'     => array( 'view' ),
					'readonly'    => true,
				),
				'name'              => array(
					'description' => __( 'Name of the note.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'type'              => array(
					'description' => __( 'The type of the note (e.g. error, warning, etc.).', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'locale'            => array(
					'description' => __( 'Locale used for the note title and content.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'title'             => array(
					'description' => __( 'Title of the note.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'content'           => array(
					'description' => __( 'Content of the note.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'content_data'      => array(
					'description' => __( 'Content data for the note. JSON string. Available for re-localization.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'status'            => array(
					'description' => __( 'The status of the note (e.g. unactioned, actioned).', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
				),
				'source'            => array(
					'description' => __( 'Source of the note.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'date_created'      => array(
					'description' => __( 'Date the note was created.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'date_created_gmt'  => array(
					'description' => __( 'Date the note was created (GMT).', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'date_reminder'     => array(
					'description' => __( 'Date after which the user should be reminded of the note, if any.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true, // @todo Allow date_reminder to be updated.
				),
				'date_reminder_gmt' => array(
					'description' => __( 'Date after which the user should be reminded of the note, if any (GMT).', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'is_snoozable'      => array(
					'description' => __( 'Whether or not a user can request to be reminded about the note.', 'woocommerce-admin' ),
					'type'        => 'boolean',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'actions'           => array(
					'description' => __( 'An array of actions, if any, for the note.', 'woocommerce-admin' ),
					'type'        => 'array',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'layout'            => array(
					'description' => __( 'The layout of the note (e.g. banner, thumbnail, plain).', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'image'             => array(
					'description' => __( 'The image of the note, if any.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'is_deleted'        => array(
					'description' => __( 'Registers whether the note is deleted or not', 'woocommerce-admin' ),
					'type'        => 'boolean',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
			),
		);
		return $this->add_additional_fields_schema( $schema );
	}
}
