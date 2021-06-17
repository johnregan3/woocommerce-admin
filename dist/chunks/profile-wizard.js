(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[49,54],{

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronDown = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronUp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronUp);
//# sourceMappingURL=chevron-up.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/**
 * External dependencies
 */




var appCurrency = _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* CURRENCY */ "b"]);
var getFilteredCurrencyInstance = function getFilteredCurrencyInstance(query) {
  var config = appCurrency.getCurrencyConfig();
  var filteredConfig = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])('woocommerce_admin_report_currency', config, query);
  return _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(filteredConfig);
};
var CurrencyContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(appCurrency // default value
);

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNoticesFromResponse; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function createNoticesFromResponse(response) {
  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices'),
      createNotice = _dispatch.createNotice;

  if (response.error_data && response.errors && Object.keys(response.errors).length) {
    // Loop over multi-error responses.
    Object.keys(response.errors).forEach(function (errorKey) {
      createNotice('error', response.errors[errorKey].join(' '));
    });
  } else if (response.message) {
    // Handle generic messages.
    createNotice(response.code ? 'error' : 'success', response.message);
  }
}

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile_wizard_steps_usage_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(575);



/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var WCPayUsageModal = function WCPayUsageModal() {
  var query = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getQuery"])();
  var shouldDisplayModal = query['wcpay-connection-success'] === '1';

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(shouldDisplayModal),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  if (!isOpen) {
    return null;
  }

  var closeModal = function closeModal() {
    setIsOpen(false);
    Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["updateQueryString"])({
      'wcpay-connection-success': undefined
    });
  };

  var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Help us build a better WooCommerce Payments experience', 'woocommerce-admin');

  var trackingMessage = interpolate_components__WEBPACK_IMPORTED_MODULE_4___default()({
    mixedString: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.', 'woocommerce-admin'),
    components: {
      link: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        href: "https://woocommerce.com/usage-tracking",
        target: "_blank",
        type: "external"
      })
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_profile_wizard_steps_usage_modal__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    isDismissible: false,
    title: title,
    message: trackingMessage,
    acceptActionText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('I agree', 'woocommerce-admin'),
    dismissActionText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No thanks', 'woocommerce-admin'),
    onContinue: closeModal,
    onClose: closeModal
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WCPayUsageModal);

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(162);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_15__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










var UsageModal = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(UsageModal, _Component);

  var _super = _createSuper(UsageModal);

  function UsageModal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UsageModal);

    _this = _super.call(this, props);
    _this.state = {
      isLoadingScripts: false,
      isRequestStarted: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UsageModal, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(prevProps, prevState) {
        var _this$props, hasErrors, isRequesting, onClose, onContinue, createNotice, _this$state, isLoadingScripts, isRequestStarted, isRequestSuccessful, isRequestError;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, hasErrors = _this$props.hasErrors, isRequesting = _this$props.isRequesting, onClose = _this$props.onClose, onContinue = _this$props.onContinue, createNotice = _this$props.createNotice;
                _this$state = this.state, isLoadingScripts = _this$state.isLoadingScripts, isRequestStarted = _this$state.isRequestStarted; // We can't rely on isRequesting props only because option update might be triggered by other component.

                if (isRequestStarted) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                isRequestSuccessful = !isRequesting && !isLoadingScripts && (prevProps.isRequesting || prevState.isLoadingScripts) && !hasErrors;
                isRequestError = !isRequesting && prevProps.isRequesting && hasErrors;

                if (isRequestSuccessful) {
                  onClose();
                  onContinue();
                }

                if (isRequestError) {
                  createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('There was a problem updating your preferences', 'woocommerce-admin'));
                  onClose();
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x, _x2) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "updateTracking",
    value: function updateTracking(_ref) {
      var _this2 = this;

      var allowTracking = _ref.allowTracking;
      var updateOptions = this.props.updateOptions;

      if (allowTracking && typeof window.wcTracks.enable === 'function') {
        this.setState({
          isLoadingScripts: true
        });
        window.wcTracks.enable(function () {
          // Don't update state if component is unmounted already
          if (!_this2._isMounted) {
            return;
          }

          Object(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_15__["initializeExPlat"])();

          _this2.setState({
            isLoadingScripts: false
          });
        });
      } else if (!allowTracking) {
        window.wcTracks.isEnabled = false;
      }

      var trackingValue = allowTracking ? 'yes' : 'no';
      this.setState({
        isRequestStarted: true
      });
      updateOptions({
        woocommerce_allow_tracking: trackingValue
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // Bail if site has already opted in to tracking
      if (this.props.allowTracking) {
        var _this$props2 = this.props,
            onClose = _this$props2.onClose,
            onContinue = _this$props2.onContinue;
        onClose();
        onContinue();
        return null;
      }

      var _this$props3 = this.props,
          isRequesting = _this$props3.isRequesting,
          _this$props3$title = _this$props3.title,
          title = _this$props3$title === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Build a better WooCommerce', 'woocommerce-admin') : _this$props3$title,
          _this$props3$message = _this$props3.message,
          message = _this$props3$message === void 0 ? interpolate_components__WEBPACK_IMPORTED_MODULE_11___default()({
        mixedString: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} ' + 'that shows us how WooCommerce is used. No personal data is tracked or stored.', 'woocommerce-admin'),
        components: {
          link: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["Link"], {
            href: "https://woocommerce.com/usage-tracking",
            target: "_blank",
            type: "external"
          })
        }
      }) : _this$props3$message,
          _this$props3$dismissA = _this$props3.dismissActionText,
          dismissActionText = _this$props3$dismissA === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('No thanks', 'woocommerce-admin') : _this$props3$dismissA,
          _this$props3$acceptAc = _this$props3.acceptActionText,
          acceptActionText = _this$props3$acceptAc === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Yes, count me in!', 'woocommerce-admin') : _this$props3$acceptAc;
      var isRequestStarted = this.state.isRequestStarted;
      var isBusy = isRequestStarted && isRequesting;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        title: title,
        isDismissible: this.props.isDismissible,
        onRequestClose: function onRequestClose() {
          return _this3.props.onClose();
        },
        className: "woocommerce-usage-modal"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-usage-modal__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-usage-modal__message"
      }, message), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-usage-modal__actions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        isSecondary: true,
        isBusy: isBusy,
        onClick: function onClick() {
          return _this3.updateTracking({
            allowTracking: false
          });
        }
      }, dismissActionText), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        isPrimary: true,
        isBusy: isBusy,
        onClick: function onClick() {
          return _this3.updateTracking({
            allowTracking: true
          });
        }
      }, acceptActionText))));
    }
  }]);

  return UsageModal;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_14__["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption,
      getOptionsUpdatingError = _select.getOptionsUpdatingError,
      isOptionsUpdating = _select.isOptionsUpdating;

  var allowTracking = getOption('woocommerce_allow_tracking') === 'yes';
  var isRequesting = Boolean(isOptionsUpdating());
  var hasErrors = Boolean(getOptionsUpdatingError());
  return {
    allowTracking: allowTracking,
    isRequesting: isRequesting,
    hasErrors: hasErrors
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(_woocommerce_data__WEBPACK_IMPORTED_MODULE_14__["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(UsageModal));

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ isWCPaySupported; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ installActivateAndConnectWcpay; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ wcpay; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ wcpay_usage_modal["default"]; });

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/wcpay/wcpay-usage-modal.js
var wcpay_usage_modal = __webpack_require__(574);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(14);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(22);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/wcpay.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





var wcpay_WCPay = /*#__PURE__*/function (_Component) {
  inherits_default()(WCPay, _Component);

  var _super = _createSuper(WCPay);

  function WCPay() {
    classCallCheck_default()(this, WCPay);

    return _super.apply(this, arguments);
  }

  createClass_default()(WCPay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          createNotice = _this$props.createNotice,
          markConfigured = _this$props.markConfigured;
      var query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from WCPay on-boarding

      if (query['wcpay-connection-success']) {
        createNotice('success', Object(external_wp_i18n_["__"])('WooCommerce Payments connected successfully.', 'woocommerce-admin'));
        markConfigured('wcpay', {
          'wcpay-connection-success': '1'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return WCPay;
}(external_wp_element_["Component"]);

/* harmony default export */ var wcpay = (Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
})(wcpay_WCPay));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/is-supported.js
function isWCPaySupported(countryCode) {
  var supportedCountries = ['US', 'PR'];

  if (window.wcAdminFeatures && window.wcAdminFeatures['wcpay/support-international-countries']) {
    supportedCountries.push('AU', 'CA', 'DE', 'ES', 'FR', 'GB', 'IE', 'IT', 'NZ');
  }

  return supportedCountries.includes(countryCode);
}
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(31);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(29);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(571);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/install-activate-and-connect.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


function installActivateAndConnectWcpay(reject, createNotice, installAndActivatePlugins) {
  var errorMessage = Object(external_wp_i18n_["__"])('There was an error connecting to WooCommerce Payments. Please try again or connect later in store settings.', 'woocommerce-admin');

  var connect = function connect() {
    external_wp_apiFetch_default()({
      path: external_wc_data_["WC_ADMIN_NAMESPACE"] + '/plugins/connect-wcpay',
      method: 'POST'
    }).then(function (response) {
      window.location = response.connectUrl;
    }).catch(function () {
      createNotice('error', errorMessage);
      reject();
    });
  };

  installAndActivatePlugins(['woocommerce-payments']).then(function () {
    Object(external_wc_tracks_["recordEvent"])('woocommerce_payments_install', {
      context: 'tasklist'
    });
    connect();
  }).catch(function (error) {
    Object(notices["a" /* createNoticesFromResponse */])(error);
    reject();
  });
}
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/index.js
/**
 * Internal dependencies
 */






/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupListOfObjectsBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setAllPropsToValue; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Returns an object with items grouped by the sent key.
 *
 * @param {Array} array array of objects.
 * @param {string} key the object prop that will be used to group elements.
 * @param {string} defaultKey if the key is not found in the object, it will use this value.
 * @return {Object} Object that contains the grouped elements.
 */
var groupListOfObjectsBy = function groupListOfObjectsBy(array, key) {
  var defaultKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';

  if (array && Array.isArray(array) && array.length) {
    if (!key) {
      return array;
    }

    return array.reduce(function (result, currentValue) {
      if (!currentValue[key]) {
        currentValue[key] = defaultKey;
      }

      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
  }

  return {};
};
/**
 * Returns a (shallow) copy of an object with all its props set to the specified value
 *
 * @param {*} obj the Object to copy.
 * @param {*} value the value to set all props on the object to.
 */

var setAllPropsToValue = function setAllPropsToValue(obj, value) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 1),
        key = _ref2[0];

    return _objectSpread(_objectSpread({}, acc), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
  }, {});
};

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateStoreAddress; });
/* unused harmony export getCountryStateOptions */
/* unused harmony export useGetCountryStateAutofill */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAddress; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__);





/**
 * External dependencies
 */







var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__[/* getSetting */ "h"])('dataEndpoints', {
  countries: {}
}),
    countries = _getSetting.countries;
/**
 * Form validation.
 *
 * @param {Object} values Keyed values of all fields in the form.
 * @return {Object} Key value of fields and error messages, { myField: 'This field is required' }
 */


function validateStoreAddress(values) {
  var errors = {};

  if (!values.addressLine1.trim().length) {
    errors.addressLine1 = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please add an address', 'woocommerce-admin');
  }

  if (!values.countryState.trim().length) {
    errors.countryState = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please select a country / region', 'woocommerce-admin');
  }

  if (!values.city.trim().length) {
    errors.city = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please add a city', 'woocommerce-admin');
  }

  if (!values.postCode.trim().length) {
    errors.postCode = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please add a post code', 'woocommerce-admin');
  }

  return errors;
}
/**
 * Get all country and state combinations used for select dropdowns.
 *
 * @return {Object} Select options, { value: 'US:GA', label: 'United States - Georgia' }
 */

function getCountryStateOptions() {
  var countryStateOptions = countries.reduce(function (acc, country) {
    if (!country.states.length) {
      acc.push({
        key: country.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(country.name)
      });
      return acc;
    }

    var countryStates = country.states.map(function (state) {
      return {
        key: country.code + ':' + state.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(country.name) + ' — ' + Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(state.name)
      };
    });
    acc.push.apply(acc, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(countryStates));
    return acc;
  }, []);
  return countryStateOptions;
}
/**
 * Get the autofill countryState fields and set value from filtered options.
 *
 * @param {Array} options Array of filterable options.
 * @param {string} countryState The value of the countryState field.
 * @param {Function} setValue Set value of the countryState input.
 * @return {Object} React component.
 */

function useGetCountryStateAutofill(options, countryState, setValue) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      autofillCountry = _useState2[0],
      setAutofillCountry = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      autofillState = _useState4[0],
      setAutofillState = _useState4[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var filteredOptions = [];
    var countrySearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["escapeRegExp"])(autofillCountry), 'i');

    if (autofillState.length || autofillCountry.length) {
      filteredOptions = options.filter(function (option) {
        return countrySearch.test(option.label);
      });
    }

    if (autofillCountry.length && autofillState.length) {
      var stateSearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["escapeRegExp"])(autofillState.replace(/\s/g, '')), 'i');
      filteredOptions = filteredOptions.filter(function (option) {
        return stateSearch.test(option.label.replace('-', '').replace(/\s/g, ''));
      });

      if (filteredOptions.length > 1) {
        var countryKeyOptions = [];
        countryKeyOptions = filteredOptions.filter(function (option) {
          return countrySearch.test(option.key);
        });

        if (countryKeyOptions.length > 0) {
          filteredOptions = countryKeyOptions;
        }
      }

      if (filteredOptions.length > 1) {
        var stateKeyOptions = [];
        stateKeyOptions = filteredOptions.filter(function (option) {
          return stateSearch.test(option.key);
        });

        if (stateKeyOptions.length === 1) {
          filteredOptions = stateKeyOptions;
        }
      }
    }

    if (filteredOptions.length === 1 && countryState !== filteredOptions[0].key) {
      setValue('countryState', filteredOptions[0].key);
    }
  }, [autofillCountry, autofillState, countryState, options, setValue]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", {
    onChange: function onChange(event) {
      return setAutofillCountry(event.target.value);
    },
    value: autofillCountry,
    name: "country",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "country"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", {
    onChange: function onChange(event) {
      return setAutofillState(event.target.value);
    },
    value: autofillState,
    name: "state",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "address-level1"
  }));
}
/**
 * Store address fields.
 *
 * @param {Object} props Props for input components.
 * @return {Object} -
 */

function StoreAddress(props) {
  var getInputProps = props.getInputProps,
      setValue = props.setValue;
  var countryStateOptions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return getCountryStateOptions();
  }, []);
  var countryStateAutofill = useGetCountryStateAutofill(countryStateOptions, getInputProps('countryState').value, setValue);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "woocommerce-store-address-fields"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Address line 1', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line1"
  }, getInputProps('addressLine1'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Address line 2 (optional)', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line2"
  }, getInputProps('addressLine2'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Country / Region', 'woocommerce-admin'),
    required: true,
    options: countryStateOptions,
    excludeSelectedOptions: false,
    showAllOnFocus: true,
    isSearchable: true
  }, getInputProps('countryState'), {
    controlClassName: getInputProps('countryState').className
  }), countryStateAutofill), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('City', 'woocommerce-admin'),
    required: true
  }, getInputProps('city'), {
    autoComplete: "address-level2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post code', 'woocommerce-admin'),
    required: true,
    autoComplete: "postal-code"
  }, getInputProps('postCode'))));
}

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-info',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'})))};var _react=__webpack_require__(7),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-cloud-upload',f,!1,!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 9c-.01 0-.017.002-.025.003C17.72 5.646 14.922 3 11.5 3 7.91 3 5 5.91 5 9.5c0 .524.07 1.03.186 1.52C5.123 11.015 5.064 11 5 11c-2.21 0-4 1.79-4 4 0 1.202.54 2.267 1.38 3h18.593C22.196 17.09 23 15.643 23 14c0-2.76-2.24-5-5-5zm-5 4v3h-2v-3H8l4-5 4 5h-3z'})))};var _react=__webpack_require__(7),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-phone',f,!1,!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z'})))};var _react=__webpack_require__(7),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-tablet',f,!1,!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 2H6c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-5 19h-2v-1h2v1zm5-2H6V5h12v14z'})))};var _react=__webpack_require__(7),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-computer',f,!1,!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z'})))};var _react=__webpack_require__(7),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642);
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(_ref);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, "Settings page");
});

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(38);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(14);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(49);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(25);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(22);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(29);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(23);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(34);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(564);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(571);

// CONCATENATED MODULE: ./client/profile-wizard/steps/business-details/data/platform-options.js
/**
 * External dependencies
 */

var platformOptions = [{
  key: 'shopify',
  label: Object(external_wp_i18n_["__"])('Shopify', 'woocommerce-admin')
}, {
  key: 'bigcommerce',
  label: Object(external_wp_i18n_["__"])('BigCommerce', 'woocommerce-admin')
}, {
  key: 'magento',
  label: Object(external_wp_i18n_["__"])('Magento', 'woocommerce-admin')
}, {
  key: 'wix',
  label: Object(external_wp_i18n_["__"])('Wix', 'woocommerce-admin')
}, {
  key: 'amazon',
  label: Object(external_wp_i18n_["__"])('Amazon', 'woocommerce-admin')
}, {
  key: 'ebay',
  label: Object(external_wp_i18n_["__"])('eBay', 'woocommerce-admin')
}, {
  key: 'etsy',
  label: Object(external_wp_i18n_["__"])('Etsy', 'woocommerce-admin')
}, {
  key: 'squarespace',
  label: Object(external_wp_i18n_["__"])('Squarespace', 'woocommerce-admin')
}, {
  key: 'other',
  label: Object(external_wp_i18n_["__"])('Other', 'woocommerce-admin')
}];
// CONCATENATED MODULE: ./client/profile-wizard/steps/business-details/data/selling-venue-options.js
/**
 * External dependencies
 */

var sellingVenueOptions = [{
  key: 'no',
  label: Object(external_wp_i18n_["__"])('No', 'woocommerce-admin')
}, {
  key: 'other',
  label: Object(external_wp_i18n_["__"])('Yes, on another platform', 'woocommerce-admin')
}, {
  key: 'other-woocommerce',
  label: Object(external_wp_i18n_["__"])('Yes, I own a different store powered by WooCommerce', 'woocommerce-admin')
}, {
  key: 'brick-mortar',
  label: Object(external_wp_i18n_["__"])('Yes, in person at physical stores and/or events', 'woocommerce-admin')
}, {
  key: 'brick-mortar-other',
  label: Object(external_wp_i18n_["__"])('Yes, on another platform and in person at physical stores and/or events', 'woocommerce-admin')
}];
// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(92);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(161);

// CONCATENATED MODULE: ./client/profile-wizard/steps/business-details/data/product-options.js
/**
 * External dependencies
 */



var product_options_formatNumber = function formatNumber(numberConfig, value) {
  return Object(external_wc_number_["formatValue"])(numberConfig, 'number', value);
};

var product_options_getNumberRangeString = function getNumberRangeString(numberConfig, min) {
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var formatAmount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : product_options_formatNumber;

  if (!max) {
    return Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["_x"])('%s+', 'store product count or revenue', 'woocommerce-admin'), formatAmount(numberConfig, min));
  }

  return Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["_x"])('%1$s - %2$s', 'store product count or revenue range', 'woocommerce-admin'), formatAmount(numberConfig, min), formatAmount(numberConfig, max));
};
var product_options_getProductCountOptions = function getProductCountOptions(numberConfig) {
  return [{
    key: '0',
    label: Object(external_wp_i18n_["__"])("I don't have any products yet.", 'woocommerce-admin')
  }, {
    key: '1-10',
    label: product_options_getNumberRangeString(numberConfig, 1, 10)
  }, {
    key: '11-100',
    label: product_options_getNumberRangeString(numberConfig, 11, 100)
  }, {
    key: '101-1000',
    label: product_options_getNumberRangeString(numberConfig, 101, 1000)
  }, {
    key: '1000+',
    label: product_options_getNumberRangeString(numberConfig, 1000)
  }];
};
// CONCATENATED MODULE: ./client/profile-wizard/steps/business-details/data/revenue-options.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


 // These are rough exchange rates from USD.  Precision is not paramount.
// The keys here should match the keys in `getCurrencyData`.

var exchangeRates = {
  US: 1,
  EU: 0.9,
  IN: 71.24,
  GB: 0.76,
  BR: 4.19,
  VN: 23172.5,
  ID: 14031.0,
  BD: 84.87,
  PK: 154.8,
  RU: 63.74,
  TR: 5.75,
  MX: 19.37,
  CA: 1.32
};

var revenue_options_convertCurrency = function convertCurrency(value, country) {
  var region = Object(utils["c" /* getCurrencyRegion */])(country);

  if (region === 'US') {
    return value;
  }

  var exchangeRate = exchangeRates[region] || exchangeRates.US;
  var digits = exchangeRate.toString().split('.')[0].length;
  var multiplier = Math.pow(10, 2 + digits);
  return Math.round(value * exchangeRate / multiplier) * multiplier;
};

var revenue_options_getRevenueOptions = function getRevenueOptions(numberConfig, country, formatAmount) {
  return [{
    key: 'none',
    label: Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: $0 revenue amount */
    Object(external_wp_i18n_["__"])("%s (I'm just getting started)", 'woocommerce-admin'), formatAmount(0))
  }, {
    key: 'up-to-2500',
    label: Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: A given revenue amount, e.g., $2500 */
    Object(external_wp_i18n_["__"])('Up to %s', 'woocommerce-admin'), formatAmount(revenue_options_convertCurrency(2500, country)))
  }, {
    key: '2500-10000',
    label: product_options_getNumberRangeString(numberConfig, revenue_options_convertCurrency(2500, country), revenue_options_convertCurrency(10000, country), function (_, amount) {
      return formatAmount(amount);
    })
  }, {
    key: '10000-50000',
    label: product_options_getNumberRangeString(numberConfig, revenue_options_convertCurrency(10000, country), revenue_options_convertCurrency(50000, country), function (_, amount) {
      return formatAmount(amount);
    })
  }, {
    key: '50000-250000',
    label: product_options_getNumberRangeString(numberConfig, revenue_options_convertCurrency(50000, country), revenue_options_convertCurrency(250000, country), function (_, amount) {
      return formatAmount(amount);
    })
  }, {
    key: 'more-than-250000',
    label: Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: A given revenue amount, e.g., $250000 */
    Object(external_wp_i18n_["__"])('More than %s', 'woocommerce-admin'), formatAmount(revenue_options_convertCurrency(250000, country)))
  }, {
    key: 'rather-not-say',
    label: Object(external_wp_i18n_["__"])("I'd rather not say", 'woocommerce-admin')
  }];
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(18);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(20);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-up.js
var chevron_up = __webpack_require__(536);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-down.js
var chevron_down = __webpack_require__(535);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(30);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(31);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./client/profile-wizard/steps/business-details/flows/selective-bundle/app-illustration.js

var app_illustration_AppIllustration = function AppIllustration() {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "200",
    height: "148",
    viewBox: "0 0 200 148",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_wp_element_["createElement"])("path", {
    d: "M197.563 2.53875e-09H62.909C62.3961 0.000450584 61.9043 0.205742 61.5416 0.570805C61.179 0.935868 60.975 1.43087 60.9746 1.94714V50.9404H93.5623C94.4445 50.9415 95.2902 51.2947 95.9141 51.9226C96.5379 52.5505 96.8888 53.4019 96.8899 54.2899V95.7402H197.563C197.843 95.7402 198.119 95.6791 198.373 95.5612C198.627 95.4432 198.853 95.2712 199.034 95.0569C199.05 95.0402 199.064 95.0222 199.076 95.0033C199.192 94.8612 199.285 94.7024 199.354 94.5322C199.451 94.2981 199.501 94.0468 199.5 93.7931V1.94714C199.499 1.43051 199.295 0.935241 198.932 0.57014C198.569 0.20504 198.077 -2.63458e-05 197.563 2.53875e-09Z",
    fill: "#F2F2F2"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M199.222 7.80469H61.25V8.36132H199.222V7.80469Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M65.95 5.84371C66.8662 5.84371 67.609 5.09607 67.609 4.17381C67.609 3.25155 66.8662 2.50391 65.95 2.50391C65.0338 2.50391 64.291 3.25155 64.291 4.17381C64.291 5.09607 65.0338 5.84371 65.95 5.84371Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M70.72 5.84371C71.6363 5.84371 72.379 5.09607 72.379 4.17381C72.379 3.25155 71.6363 2.50391 70.72 2.50391C69.8038 2.50391 69.061 3.25155 69.061 4.17381C69.061 5.09607 69.8038 5.84371 70.72 5.84371Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M75.4896 5.84371C76.4058 5.84371 77.1486 5.09607 77.1486 4.17381C77.1486 3.25155 76.4058 2.50391 75.4896 2.50391C74.5733 2.50391 73.8306 3.25155 73.8306 4.17381C73.8306 5.09607 74.5733 5.84371 75.4896 5.84371Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M164.842 19.957H95.6295C94.8646 19.957 94.1311 20.2629 93.5903 20.8073C93.0494 21.3516 92.7456 22.09 92.7456 22.8599C92.7456 23.6298 93.0494 24.3681 93.5903 24.9125C94.1311 25.4569 94.8646 25.7627 95.6295 25.7627H164.842C165.607 25.7627 166.341 25.4569 166.882 24.9125C167.422 24.3681 167.726 23.6298 167.726 22.8599C167.726 22.09 167.422 21.3516 166.882 20.8073C166.341 20.2629 165.607 19.957 164.842 19.957ZM164.842 25.3161H95.6295C94.9823 25.3161 94.3616 25.0573 93.904 24.5967C93.4464 24.1361 93.1893 23.5113 93.1893 22.8599C93.1893 22.2084 93.4464 21.5837 93.904 21.123C94.3616 20.6624 94.9823 20.4036 95.6295 20.4036H164.842C165.489 20.4036 166.11 20.6624 166.568 21.123C167.025 21.5837 167.283 22.2084 167.283 22.8599C167.283 23.5113 167.025 24.1361 166.568 24.5967C166.11 25.0573 165.489 25.3161 164.842 25.3161Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M186.022 43.0859H116.809C116.044 43.0859 115.31 43.3918 114.769 43.9362C114.229 44.4806 113.925 45.2189 113.925 45.9888C113.925 46.7587 114.229 47.497 114.769 48.0414C115.31 48.5858 116.044 48.8916 116.809 48.8916H186.022C186.786 48.8916 187.52 48.5858 188.061 48.0414C188.602 47.497 188.905 46.7587 188.905 45.9888C188.905 45.2189 188.602 44.4806 188.061 43.9362C187.52 43.3918 186.786 43.0859 186.022 43.0859Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M186.022 53.8047H116.809C116.044 53.8047 115.31 54.1105 114.769 54.6549C114.229 55.1993 113.925 55.9376 113.925 56.7075C113.925 57.4774 114.229 58.2158 114.769 58.7601C115.31 59.3045 116.044 59.6104 116.809 59.6104H186.022C186.786 59.6104 187.52 59.3045 188.061 58.7601C188.602 58.2158 188.905 57.4774 188.905 56.7075C188.905 55.9376 188.602 55.1993 188.061 54.6549C187.52 54.1105 186.786 53.8047 186.022 53.8047Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M186.022 64.5195H116.809C116.044 64.5195 115.31 64.8254 114.769 65.3698C114.229 65.9141 113.925 66.6525 113.925 67.4224C113.925 68.1923 114.229 68.9306 114.769 69.475C115.31 70.0194 116.044 70.3252 116.809 70.3252H186.022C186.786 70.3252 187.52 70.0194 188.061 69.475C188.602 68.9306 188.905 68.1923 188.905 67.4224C188.905 66.6525 188.602 65.9141 188.061 65.3698C187.52 64.8254 186.786 64.5195 186.022 64.5195Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M105.623 38.2852H74.1183C73.4425 38.286 72.7947 38.5565 72.3168 39.0375C71.839 39.5185 71.5702 40.1706 71.5693 40.8508V50.9416H72.013V40.8508C72.0139 40.2891 72.2359 39.7506 72.6306 39.3533C73.0252 38.9561 73.5602 38.7326 74.1183 38.7317H105.623C106.182 38.7322 106.717 38.9556 107.112 39.3529C107.506 39.7502 107.728 40.289 107.729 40.8508V72.5633C107.728 73.1251 107.506 73.6638 107.112 74.0611C106.717 74.4585 106.182 74.6819 105.623 74.6824H96.8897V75.1289H105.623C106.299 75.1285 106.947 74.858 107.425 74.377C107.903 73.8959 108.172 73.2436 108.172 72.5633V40.8508C108.172 40.1705 107.903 39.5182 107.425 39.0371C106.947 38.556 106.299 38.2856 105.623 38.2852Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M23.9309 70.9116C23.8195 70.9162 19.0705 70.5847 18.9492 70.5806L19.3758 66.294L22.0808 66.212L27.2495 56.5756C26.5327 55.1996 27.4148 53.3739 28.9355 53.0925C32 52.3914 33.0526 57.2443 29.9789 57.8901L25.7036 69.6652C25.5695 70.03 25.3278 70.3449 25.011 70.5676C24.6942 70.7904 24.3174 70.9104 23.9309 70.9116Z",
    fill: "#FFB8B8"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M11.4107 73.118C6.89154 73.1291 6.49482 66.2544 11.024 65.7699C23.0006 65.0415 21.485 62.0137 22.3945 70.9448C22.4224 71.2097 22.3448 71.475 22.1787 71.6824C22.0126 71.8898 21.7715 72.0223 21.5084 72.051L11.803 73.0968C11.6727 73.1109 11.5417 73.1179 11.4107 73.118Z",
    className: "fill-theme-color"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M10.3793 51.3852C16.605 54.9512 11.494 64.3601 5.15222 61.0097C-1.0733 57.4438 4.03771 48.0349 10.3793 51.3852Z",
    fill: "#FFB8B8"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M16.0395 132.376L18.759 132.376L20.053 121.816L16.0391 121.817L16.0395 132.376Z",
    fill: "#FFB8B8"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M15.4567 134.915L24.0042 134.915C23.9716 130.476 18.2546 131.755 15.4565 131.591L15.4567 134.915Z",
    fill: "#2F2E41"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M4.28218 132.376L7.00167 132.376L8.29564 121.816L4.28174 121.817L4.28218 132.376Z",
    fill: "#FFB8B8"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M3.69937 134.915L12.2469 134.915C12.2142 130.476 6.49728 131.755 3.69922 131.591L3.69937 134.915Z",
    fill: "#2F2E41"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M7.37266 128.688C6.71536 128.507 3.14362 129.056 2.72209 128.335C1.24999 113.483 1.57722 98.9486 4.845 90.9619L16.0806 90.2695C18.5931 94.8863 24.3684 125.522 20.8847 127.385L16.4048 127.546C16.1493 127.554 15.8988 127.474 15.6952 127.318C15.4916 127.163 15.3475 126.941 15.2869 126.691L11.539 105.229C10.6057 103.916 8.77111 127.832 8.46815 127.742C8.42864 128.006 8.29626 128.247 8.09515 128.42C7.89404 128.594 7.63762 128.689 7.37266 128.688Z",
    fill: "#2F2E41"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M4.48843 92.8373C-1.18427 86.8634 2.43414 70.8475 2.25101 71.1881C2.26655 70.7958 3.55141 64.7536 6.87506 63.762C9.51196 62.886 12.4305 65.5063 12.7906 68.1566L16.7406 91.6368C16.7611 91.7646 16.7514 91.8955 16.7123 92.0188C16.6733 92.1422 16.6059 92.2546 16.5158 92.3469C16.71 92.9556 4.76613 92.7153 4.48843 92.8373Z",
    className: "fill-theme-color"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M6.32941 55.5845C6.82759 55.2675 7.07312 54.7238 7.36309 54.2285C8.89053 53.3522 10.6464 55.472 12.262 54.6809C16.8302 50.2665 12.1346 48.9642 7.92721 48.7314C6.9333 48.6081 6.08781 48.963 5.33637 49.5492C-3.06805 48.9031 0.962591 60.1519 6.26679 61.6376C7.2033 62.0505 7.90582 61.2148 7.07994 60.4551C5.93728 59.2493 4.52181 56.8221 6.32941 55.5845Z",
    fill: "#2F2E41"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M93.5621 50.4922H32.779C31.7793 50.4936 30.8209 50.894 30.1139 51.6056C29.407 52.3172 29.0092 53.2819 29.0078 54.2882V131.548C29.0092 132.555 29.407 133.52 30.1139 134.231C30.8209 134.943 31.7793 135.343 32.779 135.345H93.5621C94.5619 135.343 95.5202 134.943 96.2272 134.231C96.9341 133.52 97.3319 132.555 97.3333 131.548V54.2882C97.3319 53.2819 96.9341 52.3172 96.2272 51.6056C95.5202 50.894 94.5619 50.4936 93.5621 50.4922ZM96.8896 131.548C96.8886 132.436 96.5376 133.288 95.9138 133.916C95.29 134.544 94.4443 134.897 93.5621 134.898H32.779C31.8968 134.897 31.0511 134.544 30.4273 133.916C29.8035 133.288 29.4526 132.436 29.4515 131.548V54.2882C29.4526 53.4002 29.8035 52.5489 30.4273 51.921C31.0511 51.2931 31.8968 50.9399 32.779 50.9388H93.5621C94.4443 50.9399 95.29 51.2931 95.9138 51.921C96.5376 52.5489 96.8886 53.4002 96.8896 54.2882V131.548Z",
    fill: "#3F3D56"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M15.6527 83.0043C13.6494 83.2327 12.7698 78.5402 12.0039 77.3445L15.9936 75.7852L17.2918 78.1751L28.168 78.4472C28.2326 78.3591 28.3032 78.2755 28.3793 78.1971C30.5362 75.9238 34.0488 79.33 31.9 81.5984C31.663 81.8519 31.3752 82.0521 31.0557 82.1855C30.7362 82.319 30.3923 82.3828 30.0465 82.3727C29.7007 82.3627 29.361 82.2789 29.0497 82.1271C28.7384 81.9753 28.4626 81.7588 28.2405 81.4918C27.9719 81.5111 15.9153 83.0114 15.6527 83.0043Z",
    fill: "#FFB8B8"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M12.6985 80.7664C12.0314 81.4133 6.91061 72.3318 6.5365 72.0751C3.94893 68.0267 10.0405 64.0298 12.6727 68.0562L17.9961 76.2911C18.1402 76.5145 18.1904 76.7864 18.1356 77.047C18.0808 77.3076 17.9255 77.5357 17.7039 77.6812C17.4613 77.7956 12.8697 81.0123 12.6985 80.7664Z",
    className: "fill-theme-color"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M81.583 103.974H44.7583C40.9966 103.955 40.9809 98.1877 44.7584 98.168H81.583C85.3421 98.1857 85.3624 103.954 81.583 103.974Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M81.583 114.692H44.7583C40.9966 114.674 40.9809 108.906 44.7584 108.887H81.583C85.3421 108.904 85.3624 114.673 81.583 114.692Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M81.583 125.411H44.7583C40.9966 125.393 40.9809 119.625 44.7584 119.605H81.583C85.3421 119.623 85.3624 125.391 81.583 125.411Z",
    fill: "#CCCCCC"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M95.3371 57.6387C94.1963 57.6387 93.0812 57.2982 92.1327 56.6603C91.1842 56.0223 90.4449 55.1156 90.0084 54.0548C89.5718 52.9939 89.4576 51.8266 89.6802 50.7004C89.9027 49.5742 90.452 48.5397 91.2587 47.7278C92.0653 46.9159 93.093 46.3629 94.2118 46.1389C95.3307 45.9149 96.4904 46.0299 97.5443 46.4693C98.5982 46.9087 99.499 47.6528 100.133 48.6076C100.767 49.5623 101.105 50.6848 101.105 51.833C101.103 53.3723 100.495 54.8479 99.4136 55.9363C98.3323 57.0247 96.8662 57.637 95.3371 57.6387Z",
    className: "fill-theme-color"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M97.999 51.6121H95.5588V48.821C95.5588 48.7617 95.5355 48.7049 95.4939 48.6631C95.4523 48.6212 95.3958 48.5977 95.337 48.5977C95.2782 48.5977 95.2217 48.6212 95.1801 48.6631C95.1385 48.7049 95.1152 48.7617 95.1152 48.821V51.6121H92.675C92.6161 51.6121 92.5597 51.6357 92.5181 51.6775C92.4765 51.7194 92.4531 51.7762 92.4531 51.8354C92.4531 51.8947 92.4765 51.9515 92.5181 51.9933C92.5597 52.0352 92.6161 52.0587 92.675 52.0587H95.1152V54.8499C95.1152 54.9091 95.1385 54.9659 95.1801 55.0078C95.2217 55.0497 95.2782 55.0732 95.337 55.0732C95.3958 55.0732 95.4523 55.0497 95.4939 55.0078C95.5355 54.9659 95.5588 54.9091 95.5588 54.8499V52.0587H97.999C98.0579 52.0587 98.1143 52.0352 98.1559 51.9933C98.1975 51.9515 98.2209 51.8947 98.2209 51.8354C98.2209 51.7762 98.1975 51.7194 98.1559 51.6775C98.1143 51.6357 98.0579 51.6121 97.999 51.6121Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M80.9177 91.2002H45.424C44.4535 91.1991 43.5232 90.8105 42.837 90.1198C42.1508 89.4291 41.7648 88.4926 41.7637 87.5158V67.5086C41.7648 66.5318 42.1508 65.5953 42.837 64.9046C43.5232 64.2139 44.4535 63.8253 45.424 63.8242H80.9177C81.8882 63.8253 82.8185 64.2139 83.5047 64.9046C84.1909 65.5953 84.5769 66.5318 84.578 67.5086V87.5158C84.5769 88.4926 84.1909 89.4291 83.5047 90.1198C82.8185 90.8105 81.8882 91.1991 80.9177 91.2002Z",
    className: "fill-theme-color"
  })), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_wp_element_["createElement"])("rect", {
    width: "199",
    height: "148",
    fill: "white",
    transform: "translate(0.5)"
  }))));
};
// EXTERNAL MODULE: ./client/profile-wizard/steps/business-details/flows/selective-bundle/selective-extensions-bundle/style.scss
var selective_extensions_bundle_style = __webpack_require__(630);

// EXTERNAL MODULE: ./client/lib/collections/index.js
var collections = __webpack_require__(585);

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/wcpay/index.js + 3 modules
var wcpay = __webpack_require__(577);

// CONCATENATED MODULE: ./client/profile-wizard/steps/business-details/flows/selective-bundle/selective-extensions-bundle/index.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */







var selective_extensions_bundle_generatePluginDescriptionWithLink = function generatePluginDescriptionWithLink(description, productName, linkURL) {
  var url = linkURL !== null && linkURL !== void 0 ? linkURL : "https://woocommerce.com/products/".concat(productName);
  return lib_default()({
    mixedString: description,
    components: {
      link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        type: "external",
        target: "_blank",
        className: "woocommerce-admin__business-details__selective-extensions-bundle__link",
        href: url,
        onClick: function onClick() {
          Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_business_features_link_click', {
            extension_name: productName
          });
        }
      })
    }
  });
};

var installableExtensionsData = [{
  title: Object(external_wp_i18n_["__"])('Get the basics', 'woocommerce-admin'),
  key: 'basics',
  plugins: [{
    key: 'woocommerce-payments',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Accept credit cards with {{link}}WooCommerce Payments{{/link}}', 'woocommerce-admin'), 'woocommerce-payments'),
    isVisible: function isVisible(countryCode, industry) {
      var hasCbdIndustry = (industry || []).some(function (_ref) {
        var industrySlug = _ref.industrySlug;
        return industrySlug === 'cbd-other-hemp-derived-products';
      });
      return Object(wcpay["d" /* isWCPaySupported */])(countryCode) && !hasCbdIndustry;
    }
  }, {
    key: 'woocommerce-services:shipping',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Print shipping labels with {{link}}WooCommerce Shipping{{/link}}', 'woocommerce-admin'), 'shipping'),
    isVisible: function isVisible(countryCode, industry, productTypes) {
      // Exclude the WooCommerce Shipping mention if the user is not in the US.
      // Exclude the WooCommerce Shipping mention if the user is in the US but
      // only selected digital products in the Product Types step.
      if (countryCode !== 'US' || countryCode === 'US' && productTypes.length === 1 && productTypes[0] === 'downloads') {
        return false;
      }

      return true;
    }
  }, {
    key: 'woocommerce-services:tax',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Get automated sales tax with {{link}}WooCommerce Tax{{/link}}', 'woocommerce-admin'), 'tax'),
    isVisible: function isVisible(countryCode) {
      return ['US', 'FR', 'GB', 'DE', 'CA', 'PL', 'AU', 'GR', 'BE', 'PT', 'DK', 'SE'].includes(countryCode);
    }
  }, {
    key: 'jetpack',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Enhance speed and security with {{link}}Jetpack{{/link}}', 'woocommerce-admin'), 'jetpack')
  }]
}, {
  title: Object(external_wp_i18n_["__"])('Grow your store', 'woocommerce-admin'),
  key: 'grow',
  plugins: [{
    key: 'mailpoet',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Level up your email marketing with {{link}}MailPoet{{/link}}', 'woocommerce-admin'), 'mailpoet', 'https://wordpress.org/plugins/mailpoet/')
  }, {
    key: 'facebook-for-woocommerce',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Market on {{link}}Facebook{{/link}}', 'woocommerce-admin'), 'facebook')
  }, {
    key: 'google-listings-and-ads',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Drive sales with {{link}}Google Listings and Ads{{/link}}', 'woocommerce-admin'), 'google-listings-and-ads')
  }, {
    key: 'mailchimp-for-woocommerce',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Contact customers with {{link}}Mailchimp{{/link}}', 'woocommerce-admin'), 'mailchimp-for-woocommerce')
  }, {
    key: 'creative-mail-by-constant-contact',
    description: selective_extensions_bundle_generatePluginDescriptionWithLink(Object(external_wp_i18n_["__"])('Emails made easy with {{link}}Creative Mail{{/link}}', 'woocommerce-admin'), 'creative-mail-for-woocommerce'),
    selected: false
  }]
}];

var selective_extensions_bundle_FreeBadge = function FreeBadge() {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-admin__business-details__free-badge"
  }, Object(external_wp_i18n_["__"])('Free', 'woocommerce-admin'));
};

var selective_extensions_bundle_renderBusinessExtensionHelpText = function renderBusinessExtensionHelpText(values, isInstallingActivating) {
  var extensions = Object.keys(values).filter(function (key) {
    return values[key] && key !== 'install_extensions';
  });

  if (extensions.length === 0) {
    return null;
  }

  var extensionsList = extensions.reduce(function (uniqueExtensionList, extension) {
    var extensionName = external_wc_data_["pluginNames"][extension];
    return uniqueExtensionList.includes(extensionName) ? uniqueExtensionList : [].concat(toConsumableArray_default()(uniqueExtensionList), [extensionName]);
  }, []).join(', ');

  if (isInstallingActivating) {
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-profile-wizard__footnote"
    }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
      variant: "caption",
      as: "p"
    }, Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: a comma separated list of plugins, e.g. Jetpack, Woocommerce Shipping */
    Object(external_wp_i18n_["_n"])('Installing the following plugin: %s', 'Installing the following plugins: %s', extensions.length, 'woocommerce-admin'), extensionsList)));
  }

  var installingJetpackOrWcShipping = extensions.includes('jetpack') || extensions.includes('woocommerce-shipping');

  var accountRequiredText = Object(external_wp_i18n_["__"])('User accounts are required to use these features.', 'woocommerce-admin');

  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-profile-wizard__footnote"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "caption",
    as: "p"
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %1$s: a comma separated list of plugins, e.g. Jetpack, Woocommerce Shipping, %2$s: text: 'User accounts are required to use these features.'  */
  Object(external_wp_i18n_["_n"])('The following plugin will be installed for free: %1$s. %2$s', 'The following plugins will be installed for free: %1$s. %2$s', extensions.length, 'woocommerce-admin'), extensionsList, accountRequiredText)), installingJetpackOrWcShipping && Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "caption",
    as: "p"
  }, lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('By installing Jetpack and WooCommerce Shipping plugins for free you agree to our {{link}}Terms of Service{{/link}}.', 'woocommerce-admin'),
    components: {
      link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: "https://wordpress.com/tos/",
        target: "_blank",
        type: "external"
      })
    }
  })));
};

var selective_extensions_bundle_BundleExtensionCheckbox = function BundleExtensionCheckbox(_ref2) {
  var onChange = _ref2.onChange,
      description = _ref2.description,
      isChecked = _ref2.isChecked;
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-admin__business-details__selective-extensions-bundle__extension"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    id: "woocommerce-business-extensions__checkbox",
    checked: isChecked,
    onChange: onChange
  }), Object(external_wp_element_["createElement"])("p", {
    className: "woocommerce-admin__business-details__selective-extensions-bundle__description"
  }, description), Object(external_wp_element_["createElement"])(selective_extensions_bundle_FreeBadge, null));
};
/**
 * Returns plugins that either don't have the acceptedCountryCodes param or one defined
 * that includes the passed in country.
 *
 * @param {Array} plugins  list of plugins
 * @param {string} country  Woo store country
 * @param {Array} industry List of selected industries
 * @param {Array} productTypes List of selected product types
 *
 * @return {Array} Array of visible plugins
 */


var selective_extensions_bundle_getVisiblePlugins = function getVisiblePlugins(plugins, country, industry, productTypes) {
  var countryCode = Object(utils["b" /* getCountryCode */])(country);
  return plugins.filter(function (plugin) {
    return !plugin.isVisible || plugin.isVisible(countryCode, industry, productTypes);
  });
};
/**
 * Returns bundles that have at least 1 visible plugin.
 *
 * @param {Array} bundles  list of bundles
 * @param {string} country  Woo store country
 * @param {Array} industry List of selected industries
 * @param {Array} productTypes List of selected product types
 *
 * @return {Array} Array of visible bundles
 */


var getVisibleBundles = function getVisibleBundles(bundles, country, industry, productTypes) {
  return bundles.map(function (bundle) {
    return _objectSpread(_objectSpread({}, bundle), {}, {
      plugins: selective_extensions_bundle_getVisiblePlugins(bundle.plugins, country, industry, productTypes)
    });
  }).filter(function (bundle) {
    return bundle.plugins.length;
  });
};

var transformRemoteExtensions = function transformRemoteExtensions(extensionData) {
  return extensionData.map(function (section) {
    var plugins = section.plugins.map(function (plugin) {
      return _objectSpread(_objectSpread({}, plugin), {}, {
        description: selective_extensions_bundle_generatePluginDescriptionWithLink(plugin.description, plugin.product),
        isVisible: function isVisible() {
          return plugin.is_visible;
        }
      });
    });
    return _objectSpread(_objectSpread({}, section), {}, {
      plugins: plugins
    });
  });
};

var baseValues = {
  install_extensions: true
};
var selective_extensions_bundle_createInitialValues = function createInitialValues(extensions, country, industry, productTypes) {
  return extensions.reduce(function (acc, curr) {
    var plugins = selective_extensions_bundle_getVisiblePlugins(curr.plugins, country, industry, productTypes).reduce(function (pluginAcc, _ref3) {
      var key = _ref3.key,
          selected = _ref3.selected;
      return _objectSpread(_objectSpread({}, pluginAcc), {}, defineProperty_default()({}, key, selected !== null && selected !== void 0 ? selected : true));
    }, {});
    return _objectSpread(_objectSpread({}, acc), plugins);
  }, baseValues);
};
var selective_extensions_bundle_SelectiveExtensionsBundle = function SelectiveExtensionsBundle(_ref4) {
  var isInstallingActivating = _ref4.isInstallingActivating,
      onSubmit = _ref4.onSubmit,
      country = _ref4.country,
      industry = _ref4.industry,
      productTypes = _ref4.productTypes;

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      showExtensions = _useState2[0],
      setShowExtensions = _useState2[1];

  var _useState3 = Object(external_wp_element_["useState"])(baseValues),
      _useState4 = slicedToArray_default()(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

  var _useState5 = Object(external_wp_element_["useState"])([{
    key: 'spinner',
    plugins: []
  }]),
      _useState6 = slicedToArray_default()(_useState5, 2),
      installableExtensions = _useState6[0],
      setInstallableExtensions = _useState6[1];

  var _useState7 = Object(external_wp_element_["useState"])(true),
      _useState8 = slicedToArray_default()(_useState7, 2),
      isFetching = _useState8[0],
      setIsFetching = _useState8[1];

  var allowMarketplaceSuggestions = Object(external_wp_data_["useSelect"])(function (select) {
    return select(external_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'allowMarketplaceSuggestions');
  });
  Object(external_wp_element_["useEffect"])(function () {
    var setLocalInstallableExtensions = function setLocalInstallableExtensions() {
      var initialValues = selective_extensions_bundle_createInitialValues(installableExtensionsData, country, industry, productTypes);
      setInstallableExtensions(getVisibleBundles(installableExtensionsData, country, industry, productTypes));
      setValues(initialValues);
      setIsFetching(false);
    };

    if (window.wcAdminFeatures && window.wcAdminFeatures['remote-extensions-list'] === true && allowMarketplaceSuggestions) {
      external_wp_apiFetch_default()({
        path: '/wc-admin/onboarding/free-extensions'
      }).then(function (results) {
        if (!(results !== null && results !== void 0 && results.length)) {
          // Assuming empty array or null results is err.
          setLocalInstallableExtensions();
          return;
        }

        var transformedExtensions = transformRemoteExtensions(results);
        var initialValues = selective_extensions_bundle_createInitialValues(transformedExtensions, country, industry, productTypes);
        setInstallableExtensions(getVisibleBundles(transformedExtensions, country, industry, productTypes));
        setValues(initialValues);
        setIsFetching(false);
      }).catch(function () {
        // An error has occurred, default to local config
        setLocalInstallableExtensions();
      });
    } else {
      // Use local config
      setLocalInstallableExtensions();
    }
  }, [country, industry, productTypes, allowMarketplaceSuggestions]);

  var getCheckboxChangeHandler = function getCheckboxChangeHandler(key) {
    return function (checked) {
      var newState = _objectSpread(_objectSpread({}, values), {}, defineProperty_default()({}, key, checked));

      var allExtensionsDisabled = Object.entries(newState).filter(function (_ref5) {
        var _ref6 = slicedToArray_default()(_ref5, 2),
            val = _ref6[1];

        return val;
      }).length === 1 && newState.install_extensions;

      if (allExtensionsDisabled) {
        // If all the extensions are disabled then disable the "Install Extensions" checkbox too
        setValues(_objectSpread(_objectSpread({}, newState), {}, {
          install_extensions: false
        }));
      } else {
        var _objectSpread4;

        setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread4 = {}, defineProperty_default()(_objectSpread4, key, checked), defineProperty_default()(_objectSpread4, "install_extensions", true), _objectSpread4)));
      }
    };
  };

  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-profile-wizard__business-details__free-features"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], null, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-profile-wizard__business-details__free-features__illustration"
  }, Object(external_wp_element_["createElement"])(app_illustration_AppIllustration, null)), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-admin__business-details__selective-extensions-bundle"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-admin__business-details__selective-extensions-bundle__extension"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    checked: values.install_extensions,
    onChange: function onChange(checked) {
      setValues(Object(collections["b" /* setAllPropsToValue */])(values, checked));
    }
  }), Object(external_wp_element_["createElement"])("p", {
    className: "woocommerce-admin__business-details__selective-extensions-bundle__description"
  }, Object(external_wp_i18n_["__"])('Add recommended business features to my site')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "woocommerce-admin__business-details__selective-extensions-bundle__expand",
    onClick: function onClick() {
      setShowExtensions(!showExtensions);

      if (!showExtensions) {
        // only record the accordion click when the accordion is opened.
        Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_business_features_accordion_click');
      }
    }
  }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: showExtensions ? chevron_up["a" /* default */] : chevron_down["a" /* default */]
  }))), showExtensions && installableExtensions.map(function (_ref7) {
    var plugins = _ref7.plugins,
        title = _ref7.title,
        sectionKey = _ref7.key;
    return Object(external_wp_element_["createElement"])("div", {
      key: sectionKey
    }, Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-admin__business-details__selective-extensions-bundle__category"
    }, title), isFetching ? Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null) : plugins.map(function (_ref8) {
      var description = _ref8.description,
          key = _ref8.key;
      return Object(external_wp_element_["createElement"])(selective_extensions_bundle_BundleExtensionCheckbox, {
        key: key,
        description: description,
        isChecked: values[key],
        onChange: getCheckboxChangeHandler(key)
      });
    }));
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-profile-wizard__business-details__free-features__action"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: function onClick() {
      onSubmit(values);
    },
    isBusy: isInstallingActivating,
    disabled: isInstallingActivating,
    isPrimary: true
  }, "Continue"))), selective_extensions_bundle_renderBusinessExtensionHelpText(values, isInstallingActivating));
};
// EXTERNAL MODULE: ./client/profile-wizard/steps/business-details/flows/selective-bundle/style.scss
var selective_bundle_style = __webpack_require__(631);

// CONCATENATED MODULE: ./client/profile-wizard/steps/business-details/flows/selective-bundle/index.js











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */








/**
 * Internal dependencies
 */









var BUSINESS_DETAILS_TAB_NAME = 'business-details';
var FREE_FEATURES_TAB_NAME = 'free-features';
var filterBusinessExtensions = function filterBusinessExtensions(extensionInstallationOptions) {
  return Object.keys(extensionInstallationOptions).filter(function (key) {
    return extensionInstallationOptions[key] && key !== 'install_extensions';
  }).map(function (key) {
    // Remove anything after :
    // Please refer to selective-extensions-bundle/index.js
    // installableExtensions variable
    // this is to allow duplicate slugs (Tax & Shipping for example)
    return key.split(':')[0];
  }) // remove duplicate
  .filter(function (item, index, arr) {
    return arr.indexOf(item) === index;
  });
};

var selective_bundle_BusinessDetails = /*#__PURE__*/function (_Component) {
  inherits_default()(BusinessDetails, _Component);

  var _super = _createSuper(BusinessDetails);

  function BusinessDetails() {
    var _this;

    classCallCheck_default()(this, BusinessDetails);

    _this = _super.call(this);
    _this.state = {
      isPopoverVisible: false,
      isValid: false,
      currentTab: 'business-details',
      savedValues: null
    };
    _this.onContinue = _this.onContinue.bind(assertThisInitialized_default()(_this));
    _this.validate = _this.validate.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(BusinessDetails, [{
    key: "onContinue",
    value: function () {
      var _onContinue = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(extensionInstallationOptions) {
        var _this$props, createNotice, goToNextStep, installAndActivatePlugins, updateProfileItems, _this$state$savedValu, otherPlatform, otherPlatformName, productCount, revenue, sellingVenues, businessExtensions, updates, promises;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, createNotice = _this$props.createNotice, goToNextStep = _this$props.goToNextStep, installAndActivatePlugins = _this$props.installAndActivatePlugins, updateProfileItems = _this$props.updateProfileItems;
                _this$state$savedValu = this.state.savedValues, otherPlatform = _this$state$savedValu.other_platform, otherPlatformName = _this$state$savedValu.other_platform_name, productCount = _this$state$savedValu.product_count, revenue = _this$state$savedValu.revenue, sellingVenues = _this$state$savedValu.selling_venues;
                businessExtensions = filterBusinessExtensions(extensionInstallationOptions);
                Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_business_features_continue', {
                  all_extensions_installed: Object.values(extensionInstallationOptions).every(function (val) {
                    return val;
                  }),
                  install_woocommerce_services: extensionInstallationOptions['woocommerce-services:shipping'] || extensionInstallationOptions['woocommerce-services:tax'],
                  install_mailchimp: extensionInstallationOptions['mailchimp-for-woocommerce'],
                  install_mailpoet: extensionInstallationOptions.mailpoet,
                  install_jetpack: extensionInstallationOptions.jetpack,
                  install_google_ads: extensionInstallationOptions['google-listings-and-ads'],
                  install_facebook: extensionInstallationOptions['facebook-for-woocommerce'],
                  install_wcpay: extensionInstallationOptions['woocommerce-payments'],
                  install_creative_mail: extensionInstallationOptions['creative-mail-by-constant-contact']
                });
                updates = {
                  other_platform: otherPlatform,
                  other_platform_name: otherPlatform === 'other' ? otherPlatformName : '',
                  product_count: productCount,
                  revenue: revenue,
                  selling_venues: sellingVenues,
                  business_extensions: businessExtensions
                }; // Remove possible empty values like `revenue` and `other_platform`.

                Object.keys(updates).forEach(function (key) {
                  return updates[key] === '' && delete updates[key];
                });
                promises = [updateProfileItems(updates).catch(function () {
                  throw new Error();
                })];

                if (businessExtensions.length) {
                  promises.push(installAndActivatePlugins(businessExtensions).then(function (response) {
                    Object(notices["a" /* createNoticesFromResponse */])(response);
                  }).catch(function (error) {
                    Object(notices["a" /* createNoticesFromResponse */])(error);
                    throw new Error();
                  }));
                }

                Promise.all(promises).then(function () {
                  goToNextStep();
                }).catch(function () {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem updating your business details', 'woocommerce-admin'));
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onContinue(_x) {
        return _onContinue.apply(this, arguments);
      }

      return onContinue;
    }()
  }, {
    key: "validate",
    value: function validate(values) {
      var errors = {};

      if (!values.product_count.length) {
        errors.product_count = Object(external_wp_i18n_["__"])('This field is required', 'woocommerce-admin');
      }

      if (!values.selling_venues.length) {
        errors.selling_venues = Object(external_wp_i18n_["__"])('This field is required', 'woocommerce-admin');
      }

      if (!values.other_platform.length && ['other', 'brick-mortar-other'].includes(values.selling_venues)) {
        errors.other_platform = Object(external_wp_i18n_["__"])('This field is required', 'woocommerce-admin');
      }

      if (!values.other_platform_name && values.other_platform === 'other' && ['other', 'brick-mortar-other'].includes(values.selling_venues)) {
        errors.other_platform_name = Object(external_wp_i18n_["__"])('This field is required', 'woocommerce-admin');
      }

      if (!values.revenue.length && ['other', 'brick-mortar', 'brick-mortar-other', 'other-woocommerce'].includes(values.selling_venues)) {
        errors.revenue = Object(external_wp_i18n_["__"])('This field is required', 'woocommerce-admin');
      }

      if (Object.keys(errors).length === 0) {
        this.setState({
          isValid: true
        });
      }

      return errors;
    }
  }, {
    key: "trackBusinessDetailsStep",
    value: function trackBusinessDetailsStep(_ref) {
      var otherPlatform = _ref.other_platform,
          otherPlatformName = _ref.other_platform_name,
          productCount = _ref.product_count,
          sellingVenues = _ref.selling_venues,
          revenue = _ref.revenue;
      var getCurrencyConfig = this.context.getCurrencyConfig;
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_business_details_continue_variant', {
        already_selling: sellingVenues,
        currency: getCurrencyConfig().code,
        product_number: productCount,
        revenue: revenue,
        used_platform: otherPlatform,
        used_platform_name: otherPlatformName
      });
    }
  }, {
    key: "renderBusinessDetailsStep",
    value: function renderBusinessDetailsStep() {
      var _this2 = this;

      var _this$props2 = this.props,
          goToNextStep = _this$props2.goToNextStep,
          isInstallingActivating = _this$props2.isInstallingActivating,
          hasInstallActivateError = _this$props2.hasInstallActivateError;
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      var productCountOptions = product_options_getProductCountOptions(getCurrencyConfig());
      return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
        initialValues: this.state.savedValues || this.props.initialValues,
        onSubmit: function onSubmit(values) {
          _this2.setState({
            savedValues: values,
            currentTab: 'free-features'
          });

          _this2.trackBusinessDetailsStep(values);
        },
        onChange: function onChange(_, values, isValid) {
          _this2.setState({
            savedValues: values,
            isValid: isValid
          });
        },
        validate: this.validate
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            handleSubmit = _ref2.handleSubmit,
            values = _ref2.values,
            isValidForm = _ref2.isValidForm;
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-profile-wizard__step-header"
        }, Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
          variant: "title.small",
          as: "h2"
        }, Object(external_wp_i18n_["__"])('Tell us about your business', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
          variant: "body"
        }, Object(external_wp_i18n_["__"])("We'd love to know if you are just getting started or you already have a business in place.", 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wp_components_["Card"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["SelectControl"], extends_default()({
          excludeSelectedOptions: false,
          label: Object(external_wp_i18n_["__"])('How many products do you plan to display?', 'woocommerce-admin'),
          options: productCountOptions,
          required: true
        }, getInputProps('product_count'))), Object(external_wp_element_["createElement"])(external_wc_components_["SelectControl"], extends_default()({
          excludeSelectedOptions: false,
          label: Object(external_wp_i18n_["__"])('Currently selling elsewhere?', 'woocommerce-admin'),
          options: sellingVenueOptions,
          required: true
        }, getInputProps('selling_venues'))), ['other', 'brick-mortar', 'brick-mortar-other', 'other-woocommerce'].includes(values.selling_venues) && Object(external_wp_element_["createElement"])(external_wc_components_["SelectControl"], extends_default()({
          excludeSelectedOptions: false,
          label: Object(external_wp_i18n_["__"])("What's your current annual revenue?", 'woocommerce-admin'),
          options: revenue_options_getRevenueOptions(getCurrencyConfig(), _this2.props.settings.woocommerce_default_country, formatAmount),
          required: true
        }, getInputProps('revenue'))), ['other', 'brick-mortar-other'].includes(values.selling_venues) && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
          className: "business-competitors"
        }, Object(external_wp_element_["createElement"])(external_wc_components_["SelectControl"], extends_default()({
          excludeSelectedOptions: false,
          label: Object(external_wp_i18n_["__"])('Which platform is the store using?', 'woocommerce-admin'),
          options: platformOptions,
          required: true
        }, getInputProps('other_platform'))), values.other_platform === 'other' && Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
          label: Object(external_wp_i18n_["__"])('What is the platform name?', 'woocommerce-admin'),
          required: true
        }, getInputProps('other_platform_name')))))), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], {
          isBorderless: true,
          justify: "center"
        }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isPrimary: true,
          onClick: handleSubmit,
          disabled: !isValidForm,
          isBusy: isInstallingActivating
        }, !hasInstallActivateError ? Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('Retry', 'woocommerce-admin')), hasInstallActivateError && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          onClick: function onClick() {
            return goToNextStep();
          }
        }, Object(external_wp_i18n_["__"])('Continue without installing', 'woocommerce-admin')))));
      });
    }
  }, {
    key: "renderFreeFeaturesStep",
    value: function renderFreeFeaturesStep() {
      var _this$props3 = this.props,
          isInstallingActivating = _this$props3.isInstallingActivating,
          settings = _this$props3.settings,
          profileItems = _this$props3.profileItems;
      var country = settings.woocommerce_default_country ? settings.woocommerce_default_country : null;
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__step-header"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
        variant: "title.small",
        as: "h2"
      }, Object(external_wp_i18n_["__"])('Included business features', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
        variant: "body"
      }, Object(external_wp_i18n_["__"])('We recommend enhancing your store with these free extensions', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
        variant: "body"
      }, Object(external_wp_i18n_["__"])('No commitment required - you can remove them at any time.', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(selective_extensions_bundle_SelectiveExtensionsBundle, {
        isInstallingActivating: isInstallingActivating,
        onSubmit: this.onContinue,
        country: country,
        industry: profileItems.industry,
        productTypes: profileItems.product_types
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var initialValues = this.props.initialValues; // There is a hack here to help us manage the selected tab programatically.
      // We set the tab name "current-tab". when its the one we want selected. This tricks
      // the logic in the TabPanel and allows us to switch which tab has the name "current-tab"
      // and force it to re-render with a different tab selected.

      return Object(external_wp_element_["createElement"])(external_wp_components_["TabPanel"], {
        activeClass: "is-active",
        initialTabName: "current-tab",
        onSelect: function onSelect(tabName) {
          if (_this3.state.currentTab !== tabName) {
            _this3.setState({
              currentTab: tabName,
              savedValues: initialValues
            });
          }
        },
        tabs: [{
          name: this.state.currentTab === BUSINESS_DETAILS_TAB_NAME ? 'current-tab' : BUSINESS_DETAILS_TAB_NAME,
          id: BUSINESS_DETAILS_TAB_NAME,
          title: Object(external_wp_i18n_["__"])('Business details', 'woocommerce-admin')
        }, {
          name: this.state.currentTab === FREE_FEATURES_TAB_NAME ? 'current-tab' : FREE_FEATURES_TAB_NAME,
          id: FREE_FEATURES_TAB_NAME,
          title: Object(external_wp_i18n_["__"])('Free features', 'woocommerce-admin'),
          className: this.state.isValid ? '' : 'is-disabled'
        }]
      }, function (tab) {
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, _this3.getTab(tab.id));
      });
    }
  }, {
    key: "getTab",
    value: function getTab(tabId) {
      if (tabId === BUSINESS_DETAILS_TAB_NAME) {
        return this.renderBusinessDetailsStep();
      }

      return this.renderFreeFeaturesStep();
    }
  }]);

  return BusinessDetails;
}(external_wp_element_["Component"]);

selective_bundle_BusinessDetails.contextType = currency_context["a" /* CurrencyContext */];
var BusinessFeaturesList = Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select.getSettings,
      getSettingsError = _select.getSettingsError;

  var _select2 = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select2.getProfileItems,
      getOnboardingError = _select2.getOnboardingError;

  var _select3 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getPluginsError = _select3.getPluginsError,
      isPluginsRequesting = _select3.isPluginsRequesting;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      settings = _getSettings$general === void 0 ? {} : _getSettings$general;

  return {
    hasInstallActivateError: getPluginsError('installPlugins') || getPluginsError('activatePlugins'),
    isError: Boolean(getOnboardingError('updateProfileItems')),
    profileItems: getProfileItems(),
    isSettingsError: Boolean(getSettingsError('general')),
    settings: settings,
    isInstallingActivating: isPluginsRequesting('installPlugins') || isPluginsRequesting('activatePlugins') || isPluginsRequesting('getJetpackConnectUrl')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      updateProfileItems = _dispatch.updateProfileItems;

  var _dispatch2 = dispatch(external_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch2.installAndActivatePlugins;

  var _dispatch3 = dispatch('core/notices'),
      createNotice = _dispatch3.createNotice;

  return {
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins,
    updateProfileItems: updateProfileItems
  };
}))(selective_bundle_BusinessDetails);
// EXTERNAL MODULE: ./client/profile-wizard/steps/business-details/style.scss
var business_details_style = __webpack_require__(632);

// CONCATENATED MODULE: ./client/profile-wizard/steps/business-details/index.js



/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var business_details_BusinessDetailsStep = function BusinessDetailsStep(props) {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      isLoading: !select(external_wc_data_["ONBOARDING_STORE_NAME"]).hasFinishedResolution('getProfileItems') || !select(external_wc_data_["SETTINGS_STORE_NAME"]).hasFinishedResolution('getSettings', ['general']),
      profileItems: select(external_wc_data_["ONBOARDING_STORE_NAME"]).getProfileItems()
    };
  }),
      profileItems = _useSelect.profileItems,
      isLoading = _useSelect.isLoading;

  if (isLoading) {
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-admin__business-details__spinner"
    }, Object(external_wp_element_["createElement"])(external_wc_components_["Spinner"], null));
  }

  var initialValues = {
    other_platform: profileItems.other_platform || '',
    other_platform_name: profileItems.other_platform_name || '',
    product_count: profileItems.product_count || '',
    selling_venues: profileItems.selling_venues || '',
    revenue: profileItems.revenue || ''
  };
  return Object(external_wp_element_["createElement"])(BusinessFeaturesList, extends_default()({}, props, {
    initialValues: initialValues
  }));
};
// CONCATENATED MODULE: ./client/profile-wizard/steps/industry.js










function industry_createSuper(Derived) { var hasNativeReflectConstruct = industry_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function industry_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */


var onboarding = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {});

var industry_Industry = /*#__PURE__*/function (_Component) {
  inherits_default()(Industry, _Component);

  var _super = industry_createSuper(Industry);

  function Industry(props) {
    var _this;

    classCallCheck_default()(this, Industry);

    var profileItems = Object(external_lodash_["get"])(props, 'profileItems', {});
    var selected = profileItems.industry || [];
    /**
     * @todo Remove block on `updateProfileItems` refactor to wp.data dataStores.
     *
     * The following block is a side effect of wc-api not being truly async
     * and is a temporary fix until a refactor to wp.data can take place.
     *
     * Calls to `updateProfileItems` in the previous screen happen async
     * and won't be updated in wc-api's state when this component is initialized.
     * As such, we need to make sure cbd is not initialized as selected when a
     * user has changed location to non-US based.
     */

    var locationSettings = props.locationSettings;
    var region = Object(utils["c" /* getCurrencyRegion */])(locationSettings.woocommerce_default_country);

    if (region !== 'US') {
      var cbdSlug = 'cbd-other-hemp-derived-products';
      selected = selected.filter(function (industry) {
        return cbdSlug !== industry && cbdSlug !== industry.slug;
      });
    }
    /**
     * End block to be removed after refactor.
     */


    _this = _super.call(this);
    _this.state = {
      error: null,
      selected: selected,
      textInputListContent: {}
    };
    _this.onContinue = _this.onContinue.bind(assertThisInitialized_default()(_this));
    _this.onIndustryChange = _this.onIndustryChange.bind(assertThisInitialized_default()(_this));
    _this.onDetailChange = _this.onDetailChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Industry, [{
    key: "onContinue",
    value: function () {
      var _onContinue = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var _this$props, createNotice, goToNextStep, isError, updateProfileItems, selectedIndustriesList, industriesWithDetail;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.validateField();

              case 2:
                if (!this.state.error) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _this$props = this.props, createNotice = _this$props.createNotice, goToNextStep = _this$props.goToNextStep, isError = _this$props.isError, updateProfileItems = _this$props.updateProfileItems;
                selectedIndustriesList = this.state.selected.map(function (industry) {
                  return industry.slug;
                }); // Here the selected industries are converted to a string that is a comma separated list

                industriesWithDetail = this.state.selected.map(function (industry) {
                  return industry.detail;
                }).filter(function (n) {
                  return n;
                }).join(',');
                Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_industry_continue', {
                  store_industry: selectedIndustriesList,
                  industries_with_detail: industriesWithDetail
                });
                _context.next = 10;
                return updateProfileItems({
                  industry: this.state.selected
                });

              case 10:
                if (!isError) {
                  goToNextStep();
                } else {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem updating your industries', 'woocommerce-admin'));
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onContinue() {
        return _onContinue.apply(this, arguments);
      }

      return onContinue;
    }()
  }, {
    key: "validateField",
    value: function () {
      var _validateField = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2() {
        var error;
        return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                error = this.state.selected.length ? null : Object(external_wp_i18n_["__"])('Please select at least one industry', 'woocommerce-admin');
                this.setState({
                  error: error
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function validateField() {
        return _validateField.apply(this, arguments);
      }

      return validateField;
    }()
  }, {
    key: "onIndustryChange",
    value: function onIndustryChange(slug) {
      var _this2 = this;

      this.setState(function (state) {
        var newSelected = state.selected;
        var selectedIndustry = Object(external_lodash_["find"])(newSelected, {
          slug: slug
        });

        if (selectedIndustry) {
          var newTextInputListContent = state.textInputListContent;
          newTextInputListContent[slug] = selectedIndustry.detail;
          return {
            selected: Object(external_lodash_["filter"])(state.selected, function (value) {
              return value.slug !== slug;
            }) || [],
            textInputListContent: newTextInputListContent
          };
        }

        newSelected.push({
          slug: slug,
          detail: state.textInputListContent[slug]
        });
        return {
          selected: newSelected
        };
      }, function () {
        return _this2.validateField();
      });
    }
  }, {
    key: "onDetailChange",
    value: function onDetailChange(value, slug) {
      this.setState(function (state) {
        var newSelected = state.selected;
        var newTextInputListContent = state.textInputListContent;
        var industryIndex = Object(external_lodash_["findIndex"])(newSelected, {
          slug: slug
        });
        newSelected[industryIndex].detail = value;
        newTextInputListContent[slug] = value;
        return {
          selected: newSelected,
          textInputListContent: newTextInputListContent
        };
      });
    }
  }, {
    key: "renderIndustryLabel",
    value: function renderIndustryLabel(slug, industry, selectedIndustry) {
      var _this3 = this;

      var textInputListContent = this.state.textInputListContent;
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, industry.label, industry.use_description && selectedIndustry && Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], {
        key: "text-control-".concat(slug),
        label: industry.description_label,
        value: selectedIndustry.detail || textInputListContent[slug] || '',
        onChange: function onChange(value) {
          return _this3.onDetailChange(value, slug);
        },
        className: "woocommerce-profile-wizard__text"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var industries = onboarding.industries;
      var _this$state = this.state,
          error = _this$state.error,
          selected = _this$state.selected;
      var _this$props2 = this.props,
          locationSettings = _this$props2.locationSettings,
          isProfileItemsRequesting = _this$props2.isProfileItemsRequesting;
      var region = Object(utils["c" /* getCurrencyRegion */])(locationSettings.woocommerce_default_country);
      var industryKeys = Object.keys(industries);
      var filteredIndustryKeys = region === 'US' ? industryKeys : industryKeys.filter(function (slug) {
        return slug !== 'cbd-other-hemp-derived-products';
      });
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__step-header"
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "title.small",
        as: "h2"
      }, Object(external_wp_i18n_["__"])('In which industry does the store operate?', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "body"
      }, Object(external_wp_i18n_["__"])('Choose any that apply', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wp_components_["Card"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
        size: null
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__checkbox-group"
      }, filteredIndustryKeys.map(function (slug) {
        var selectedIndustry = Object(external_lodash_["find"])(selected, {
          slug: slug
        });
        return Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
          key: "checkbox-control-".concat(slug),
          label: _this4.renderIndustryLabel(slug, industries[slug], selectedIndustry),
          onChange: function onChange() {
            return _this4.onIndustryChange(slug);
          },
          checked: selectedIndustry || false,
          className: "woocommerce-profile-wizard__checkbox"
        });
      }), error && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-profile-wizard__error"
      }, error))), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], {
        isBorderless: true,
        justify: "center"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: this.onContinue,
        isBusy: isProfileItemsRequesting,
        disabled: !selected.length || isProfileItemsRequesting
      }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')))));
    }
  }]);

  return Industry;
}(external_wp_element_["Component"]);

/* harmony default export */ var steps_industry = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems,
      getOnboardingError = _select.getOnboardingError,
      isOnboardingRequesting = _select.isOnboardingRequesting;

  var _select2 = select(external_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      locationSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  return {
    isError: Boolean(getOnboardingError('updateProfileItems')),
    profileItems: getProfileItems(),
    locationSettings: locationSettings,
    isProfileItemsRequesting: isOnboardingRequesting('updateProfileItems')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      updateProfileItems = _dispatch.updateProfileItems;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  return {
    createNotice: createNotice,
    updateProfileItems: updateProfileItems
  };
}))(industry_Industry));
// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/info.js


/**
 * WordPress dependencies
 */

var info = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ var library_info = (info);
//# sourceMappingURL=info.js.map
// CONCATENATED MODULE: ./client/profile-wizard/steps/product-types/label.js



/**
 * External dependencies
 */







function ProductTypeLabel(_ref) {
  var annualPrice = _ref.annualPrice,
      description = _ref.description,
      isMonthlyPricing = _ref.isMonthlyPricing,
      label = _ref.label,
      moreUrl = _ref.moreUrl,
      slug = _ref.slug;

  var _useState = Object(external_wp_element_["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      isPopoverVisible = _useState2[0],
      setIsPopoverVisible = _useState2[1];

  if (!annualPrice) {
    return label;
  }
  /* eslint-disable @wordpress/i18n-no-collapsible-whitespace */


  var toolTipText = Object(external_wp_i18n_["__"])("This product type requires a paid extension.\nWe'll add this to a cart so that\nyou can purchase and install it later.", 'woocommerce-admin');
  /* eslint-enable @wordpress/i18n-no-collapsible-whitespace */


  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("span", {
    className: "woocommerce-product-wizard__product-types-label"
  }, label), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isTertiary: true,
    label: Object(external_wp_i18n_["__"])('Learn more about recommended free business features', 'woocommerce-admin'),
    onClick: function onClick() {
      setIsPopoverVisible(true);
    }
  }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_info
  })), isPopoverVisible && Object(external_wp_element_["createElement"])(external_wp_components_["Popover"], {
    focusOnMount: "container",
    position: "top center",
    onClose: function onClose() {
      return setIsPopoverVisible(false);
    }
  }, lib_default()({
    mixedString: description + (moreUrl ? ' {{moreLink/}}' : ''),
    components: {
      moreLink: moreUrl ? Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: moreUrl,
        target: "_blank",
        type: "external",
        onClick: function onClick() {
          return Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_product_type_learn_more', {
            product_type: slug
          });
        }
      }, Object(external_wp_i18n_["__"])('Learn more', 'woocommerce-admin')) : ''
    }
  })), Object(external_wp_element_["createElement"])(external_wp_components_["Tooltip"], {
    text: toolTipText,
    position: "bottom center"
  }, Object(external_wp_element_["createElement"])(external_wc_components_["Pill"], null, Object(external_wp_element_["createElement"])("span", {
    className: "screen-reader-text"
  }, toolTipText), isMonthlyPricing ? Object(external_wp_i18n_["sprintf"])(
  /* translators: Dollar amount (example: $4.08 ) */
  Object(external_wp_i18n_["__"])('$%f per month', 'woocommerce-admin'), (annualPrice / 12.0).toFixed(2)) : Object(external_wp_i18n_["sprintf"])(
  /* translators: Dollar amount (example: $49.00 ) */
  Object(external_wp_i18n_["__"])('$%f per year', 'woocommerce-admin'), annualPrice))));
}
// EXTERNAL MODULE: ./client/profile-wizard/steps/product-types/style.scss
var product_types_style = __webpack_require__(633);

// CONCATENATED MODULE: ./client/profile-wizard/steps/product-types/index.js








function product_types_createSuper(Derived) { var hasNativeReflectConstruct = product_types_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function product_types_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */



var product_types_ProductTypes = /*#__PURE__*/function (_Component) {
  inherits_default()(ProductTypes, _Component);

  var _super = product_types_createSuper(ProductTypes);

  function ProductTypes(props) {
    var _this;

    classCallCheck_default()(this, ProductTypes);

    _this = _super.call(this);
    var profileItems = Object(external_lodash_["get"])(props, 'profileItems', {});

    var _getSetting = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
        _getSetting$productTy = _getSetting.productTypes,
        productTypes = _getSetting$productTy === void 0 ? {} : _getSetting$productTy;

    var defaultProductTypes = Object.keys(productTypes).filter(function (key) {
      return !!productTypes[key].default;
    });
    _this.state = {
      error: null,
      isMonthlyPricing: true,
      selected: profileItems.product_types || defaultProductTypes
    };
    _this.onContinue = _this.onContinue.bind(assertThisInitialized_default()(_this));
    _this.onChange = _this.onChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ProductTypes, [{
    key: "validateField",
    value: function validateField() {
      var error = this.state.selected.length ? null : Object(external_wp_i18n_["__"])('Please select at least one product type', 'woocommerce-admin');
      this.setState({
        error: error
      });
      return !error;
    }
  }, {
    key: "onContinue",
    value: function onContinue() {
      if (!this.validateField()) {
        return;
      }

      var _this$props = this.props,
          createNotice = _this$props.createNotice,
          goToNextStep = _this$props.goToNextStep,
          updateProfileItems = _this$props.updateProfileItems;
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_product_type_continue', {
        product_type: this.state.selected
      });
      updateProfileItems({
        product_types: this.state.selected
      }).then(function () {
        return goToNextStep();
      }).catch(function () {
        return createNotice('error', Object(external_wp_i18n_["__"])('There was a problem updating your product types', 'woocommerce-admin'));
      });
    }
  }, {
    key: "onChange",
    value: function onChange(slug) {
      var _this2 = this;

      this.setState(function (state) {
        if (Object(external_lodash_["includes"])(state.selected, slug)) {
          return {
            selected: Object(external_lodash_["filter"])(state.selected, function (value) {
              return value !== slug;
            }) || []
          };
        }

        var newSelected = state.selected;
        newSelected.push(slug);
        return {
          selected: newSelected
        };
      }, function () {
        return _this2.validateField();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _getSetting2 = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
          _getSetting2$productT = _getSetting2.productTypes,
          productTypes = _getSetting2$productT === void 0 ? {} : _getSetting2$productT;

      var _this$state = this.state,
          error = _this$state.error,
          isMonthlyPricing = _this$state.isMonthlyPricing,
          selected = _this$state.selected;
      var isProfileItemsRequesting = this.props.isProfileItemsRequesting;
      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__product-types"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__step-header"
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "title.small",
        as: "h2"
      }, Object(external_wp_i18n_["__"])('What type of products will be listed?', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "body"
      }, Object(external_wp_i18n_["__"])('Choose any that apply', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wp_components_["Card"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
        size: null
      }, Object.keys(productTypes).map(function (slug) {
        return Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
          key: slug,
          label: Object(external_wp_element_["createElement"])(ProductTypeLabel, {
            description: productTypes[slug].description,
            label: productTypes[slug].label,
            annualPrice: productTypes[slug].yearly_price,
            isMonthlyPricing: isMonthlyPricing,
            moreUrl: productTypes[slug].more_url,
            slug: slug
          }),
          onChange: function onChange() {
            return _this3.onChange(slug);
          },
          checked: selected.includes(slug),
          className: "woocommerce-profile-wizard__checkbox"
        });
      }), error && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-profile-wizard__error"
      }, error)), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], {
        isBorderless: true,
        justify: "center"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: this.onContinue,
        isBusy: isProfileItemsRequesting,
        disabled: !selected.length || isProfileItemsRequesting
      }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')))), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__card-help-footnote"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__product-types-pricing-toggle woocommerce-profile-wizard__checkbox"
      }, Object(external_wp_element_["createElement"])("label", {
        htmlFor: "woocommerce-product-types__pricing-toggle"
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "body"
      }, Object(external_wp_i18n_["__"])('Display monthly prices', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["FormToggle"], {
        id: "woocommerce-product-types__pricing-toggle",
        checked: isMonthlyPricing,
        onChange: function onChange() {
          return _this3.setState({
            isMonthlyPricing: !isMonthlyPricing
          });
        }
      }))), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "caption"
      }, Object(external_wp_i18n_["__"])('Billing is annual. All purchases are covered by our 30 day money back guarantee and include access to support and updates. Extensions will be added to a cart for you to purchase later.', 'woocommerce-admin'))));
    }
  }]);

  return ProductTypes;
}(external_wp_element_["Component"]);
/* harmony default export */ var product_types = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems,
      getOnboardingError = _select.getOnboardingError,
      isOnboardingRequesting = _select.isOnboardingRequesting;

  return {
    isError: Boolean(getOnboardingError('updateProfileItems')),
    profileItems: getProfileItems(),
    isProfileItemsRequesting: isOnboardingRequesting('updateProfileItems')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      updateProfileItems = _dispatch.updateProfileItems;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  return {
    createNotice: createNotice,
    updateProfileItems: updateProfileItems
  };
}))(product_types_ProductTypes));
// CONCATENATED MODULE: ./client/profile-wizard/header.js







function header_createSuper(Derived) { var hasNativeReflectConstruct = header_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function header_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





var header_ProfileWizardHeader = /*#__PURE__*/function (_Component) {
  inherits_default()(ProfileWizardHeader, _Component);

  var _super = header_createSuper(ProfileWizardHeader);

  function ProfileWizardHeader() {
    classCallCheck_default()(this, ProfileWizardHeader);

    return _super.apply(this, arguments);
  }

  createClass_default()(ProfileWizardHeader, [{
    key: "renderStepper",
    value: function renderStepper() {
      var _this$props = this.props,
          currentStep = _this$props.currentStep,
          steps = _this$props.steps;
      var visibleSteps = Object(external_lodash_["filter"])(steps, function (step) {
        return !!step.label;
      });
      var currentStepIndex = visibleSteps.findIndex(function (step) {
        return step.key === currentStep;
      });
      visibleSteps.map(function (step, index) {
        var previousStep = visibleSteps[index - 1];

        if (index < currentStepIndex) {
          step.isComplete = true;
        }

        if (!previousStep || previousStep.isComplete) {
          step.onClick = function (key) {
            return Object(external_wc_navigation_["updateQueryString"])({
              step: key
            });
          };
        }

        return step;
      });
      return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
        steps: visibleSteps,
        currentStep: currentStep
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var currentStep = this.props.steps.find(function (s) {
        return s.key === _this.props.currentStep;
      });

      if (!currentStep || !currentStep.label) {
        return null;
      }

      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__header"
      }, this.renderStepper());
    }
  }]);

  return ProfileWizardHeader;
}(external_wp_element_["Component"]);


// EXTERNAL MODULE: ./client/dashboard/components/settings/general/store-address.js
var store_address = __webpack_require__(586);

// EXTERNAL MODULE: ./client/profile-wizard/steps/usage-modal.js
var usage_modal = __webpack_require__(575);

// EXTERNAL MODULE: ./client/profile-wizard/steps/store-details/style.scss
var store_details_style = __webpack_require__(634);

// CONCATENATED MODULE: ./client/profile-wizard/steps/store-details/index.js












function store_details_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function store_details_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_details_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_details_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_details_createSuper(Derived) { var hasNativeReflectConstruct = store_details_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function store_details_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





 // FlexItem is not available until WP version 5.5. This code is safe to remove
// once the minimum WP supported version becomes 5.5.

var store_details_FlextItemSubstitute = function FlextItemSubstitute(_ref) {
  var children = _ref.children,
      align = _ref.align;
  var style = {
    display: 'flex',
    'justify-content': align ? 'center' : 'flex-start'
  };
  return Object(external_wp_element_["createElement"])("div", {
    style: style
  }, children);
};

var FlexItem = external_wp_components_["FlexItem"] || store_details_FlextItemSubstitute;

var store_details_StoreDetails = /*#__PURE__*/function (_Component) {
  inherits_default()(StoreDetails, _Component);

  var _super = store_details_createSuper(StoreDetails);

  function StoreDetails(props) {
    var _this;

    classCallCheck_default()(this, StoreDetails);

    _this = _super.call(this, props);
    var profileItems = props.profileItems,
        settings = props.settings;
    _this.state = {
      showUsageModal: false,
      skipping: false,
      isStoreDetailsPopoverVisible: false,
      isSkipSetupPopoverVisible: false
    }; // Check if a store address is set so that we don't default
    // to WooCommerce's default country of the UK.

    var countryState = settings.woocommerce_store_address && settings.woocommerce_default_country || '';
    _this.initialValues = {
      addressLine1: settings.woocommerce_store_address || '',
      addressLine2: settings.woocommerce_store_address_2 || '',
      city: settings.woocommerce_store_city || '',
      countryState: countryState,
      postCode: settings.woocommerce_store_postcode || '',
      isClient: profileItems.setup_client || false
    };
    _this.onContinue = _this.onContinue.bind(assertThisInitialized_default()(_this));
    _this.onSubmit = _this.onSubmit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(StoreDetails, [{
    key: "deriveCurrencySettings",
    value: function deriveCurrencySettings(countryState) {
      if (!countryState) {
        return null;
      }

      var Currency = this.context;
      var country = Object(utils["b" /* getCountryCode */])(countryState);

      var _getSetting = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
          _getSetting$currencyS = _getSetting.currencySymbols,
          currencySymbols = _getSetting$currencyS === void 0 ? {} : _getSetting$currencyS,
          _getSetting$localeInf = _getSetting.localeInfo,
          localeInfo = _getSetting$localeInf === void 0 ? {} : _getSetting$localeInf;

      return Currency.getDataForCountry(country, localeInfo, currencySymbols);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.setState({
        showUsageModal: true,
        skipping: false
      });
    }
  }, {
    key: "onContinue",
    value: function () {
      var _onContinue = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(values) {
        var _this$props, createNotice, goToNextStep, isSettingsError, updateProfileItems, isProfileItemsError, updateAndPersistSettingsForGroup, profileItems, settings, currencySettings, Currency, profileItemsToUpdate, region, cbdSlug, trimmedIndustries;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, createNotice = _this$props.createNotice, goToNextStep = _this$props.goToNextStep, isSettingsError = _this$props.isSettingsError, updateProfileItems = _this$props.updateProfileItems, isProfileItemsError = _this$props.isProfileItemsError, updateAndPersistSettingsForGroup = _this$props.updateAndPersistSettingsForGroup, profileItems = _this$props.profileItems, settings = _this$props.settings;
                currencySettings = this.deriveCurrencySettings(values.countryState);
                Currency = this.context;
                Currency.setCurrency(currencySettings);
                Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_details_continue', {
                  store_country: Object(utils["b" /* getCountryCode */])(values.countryState),
                  derived_currency: currencySettings.currency_code,
                  setup_client: values.isClient
                });
                _context.next = 7;
                return updateAndPersistSettingsForGroup('general', {
                  general: store_details_objectSpread(store_details_objectSpread({}, settings), {}, {
                    woocommerce_store_address: values.addressLine1,
                    woocommerce_store_address_2: values.addressLine2,
                    woocommerce_default_country: values.countryState,
                    woocommerce_store_city: values.city,
                    woocommerce_store_postcode: values.postCode,
                    woocommerce_currency: currencySettings.code,
                    woocommerce_currency_pos: currencySettings.symbolPosition,
                    woocommerce_price_thousand_sep: currencySettings.thousandSeparator,
                    woocommerce_price_decimal_sep: currencySettings.decimalSeparator,
                    woocommerce_price_num_decimals: currencySettings.precision
                  })
                });

              case 7:
                profileItemsToUpdate = {
                  setup_client: values.isClient
                };
                region = Object(utils["c" /* getCurrencyRegion */])(values.countryState);
                /**
                 * If a user has already selected cdb industry and returns to change to a
                 * non US store, remove cbd industry.
                 *
                 * NOTE: the following call to `updateProfileItems` does not respect the
                 * `await` and performs an update aysnchronously. This means the following
                 * screen may not be initialized with correct profile settings.
                 *
                 * This comment may be removed when a refactor to wp.data datatores is complete.
                 */

                if (region !== 'US' && profileItems.industry && profileItems.industry.length) {
                  cbdSlug = 'cbd-other-hemp-derived-products';
                  trimmedIndustries = profileItems.industry.filter(function (industry) {
                    return cbdSlug !== industry && cbdSlug !== industry.slug;
                  });
                  profileItemsToUpdate.industry = trimmedIndustries;
                }

                _context.next = 12;
                return updateProfileItems(profileItemsToUpdate);

              case 12:
                if (!isSettingsError && !isProfileItemsError) {
                  goToNextStep();
                } else {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your store details', 'woocommerce-admin'));
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onContinue(_x) {
        return _onContinue.apply(this, arguments);
      }

      return onContinue;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          showUsageModal = _this$state.showUsageModal,
          skipping = _this$state.skipping,
          isStoreDetailsPopoverVisible = _this$state.isStoreDetailsPopoverVisible,
          isSkipSetupPopoverVisible = _this$state.isSkipSetupPopoverVisible;
      var _this$props2 = this.props,
          skipProfiler = _this$props2.skipProfiler,
          isUpdatingProfileItems = _this$props2.isUpdatingProfileItems;
      /* eslint-disable @wordpress/i18n-no-collapsible-whitespace */

      var skipSetupText = Object(external_wp_i18n_["__"])('Manual setup is only recommended for\n experienced WooCommerce users or developers.', 'woocommerce-admin');

      var configureCurrencyText = Object(external_wp_i18n_["__"])('Your store address will help us configure currency\n options and shipping rules automatically.\n This information will not be publicly visible and can\n easily be changed later.', 'woocommerce-admin');
      /* eslint-enable @wordpress/i18n-no-collapsible-whitespace */


      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__store-details"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__step-header"
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "title.small",
        as: "h2"
      }, Object(external_wp_i18n_["__"])('Welcome to WooCommerce', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "body"
      }, Object(external_wp_i18n_["__"])("Tell us about your store and we'll get you set up in no time", 'woocommerce-admin'), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isTertiary: true,
        label: Object(external_wp_i18n_["__"])('Learn more about store details', 'woocommerce-admin'),
        onClick: function onClick() {
          return _this2.setState({
            isStoreDetailsPopoverVisible: true
          });
        }
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: library_info
      }))), isStoreDetailsPopoverVisible && Object(external_wp_element_["createElement"])(external_wp_components_["Popover"], {
        focusOnMount: "container",
        position: "top center",
        onClose: function onClose() {
          return _this2.setState({
            isStoreDetailsPopoverVisible: false
          });
        }
      }, configureCurrencyText)), Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
        initialValues: this.initialValues,
        onSubmit: this.onSubmit,
        validate: store_address["b" /* validateStoreAddress */]
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            handleSubmit = _ref2.handleSubmit,
            values = _ref2.values,
            isValidForm = _ref2.isValidForm,
            setValue = _ref2.setValue;
        return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], null, showUsageModal && Object(external_wp_element_["createElement"])(usage_modal["a" /* default */], {
          onContinue: function onContinue() {
            if (skipping) {
              skipProfiler();
            } else {
              _this2.onContinue(values);
            }
          },
          onClose: function onClose() {
            return _this2.setState({
              showUsageModal: false,
              skipping: false
            });
          }
        }), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(store_address["a" /* StoreAddress */], {
          getInputProps: getInputProps,
          setValue: setValue
        })), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], null, Object(external_wp_element_["createElement"])(FlexItem, null, Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-profile-wizard__client"
        }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], extends_default()({
          label: Object(external_wp_i18n_["__"])("I'm setting up a store for a client", 'woocommerce-admin')
        }, getInputProps('isClient')))))), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], {
          justify: "center"
        }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isPrimary: true,
          onClick: handleSubmit,
          isBusy: isUpdatingProfileItems,
          disabled: !isValidForm || isUpdatingProfileItems
        }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin'))));
      }), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__footer"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isLink: true,
        className: "woocommerce-profile-wizard__footer-link",
        onClick: function onClick() {
          _this2.setState({
            showUsageModal: true,
            skipping: true
          });

          return false;
        }
      }, Object(external_wp_i18n_["__"])('Skip setup store details', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isTertiary: true,
        label: skipSetupText,
        onClick: function onClick() {
          return _this2.setState({
            isSkipSetupPopoverVisible: true
          });
        }
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: library_info
      })), isSkipSetupPopoverVisible && Object(external_wp_element_["createElement"])(external_wp_components_["Popover"], {
        focusOnMount: "container",
        position: "top center",
        onClose: function onClose() {
          return _this2.setState({
            isSkipSetupPopoverVisible: false
          });
        }
      }, skipSetupText)));
    }
  }]);

  return StoreDetails;
}(external_wp_element_["Component"]);

store_details_StoreDetails.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var store_details = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select.getSettings,
      getSettingsError = _select.getSettingsError,
      isUpdateSettingsRequesting = _select.isUpdateSettingsRequesting;

  var _select2 = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getOnboardingError = _select2.getOnboardingError,
      getProfileItems = _select2.getProfileItems,
      isOnboardingRequesting = _select2.isOnboardingRequesting;

  var profileItems = getProfileItems();
  var isProfileItemsError = Boolean(getOnboardingError('updateProfileItems'));

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      settings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var isSettingsError = Boolean(getSettingsError('general'));
  var isUpdatingProfileItems = isOnboardingRequesting('updateProfileItems') || isUpdateSettingsRequesting('general');
  return {
    isProfileItemsError: isProfileItemsError,
    isSettingsError: isSettingsError,
    profileItems: profileItems,
    isUpdatingProfileItems: isUpdatingProfileItems,
    settings: settings
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      updateProfileItems = _dispatch2.updateProfileItems;

  var _dispatch3 = dispatch(external_wc_data_["SETTINGS_STORE_NAME"]),
      updateAndPersistSettingsForGroup = _dispatch3.updateAndPersistSettingsForGroup;

  return {
    createNotice: createNotice,
    updateProfileItems: updateProfileItems,
    updateAndPersistSettingsForGroup: updateAndPersistSettingsForGroup
  };
}))(store_details_StoreDetails));
// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/info.js
var dist_info = __webpack_require__(635);
var info_default = /*#__PURE__*/__webpack_require__.n(dist_info);

// EXTERNAL MODULE: ./client/profile-wizard/steps/theme/style.scss
var theme_style = __webpack_require__(636);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/cloud-upload.js
var cloud_upload = __webpack_require__(637);
var cloud_upload_default = /*#__PURE__*/__webpack_require__.n(cloud_upload);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/profile-wizard/steps/theme/uploader.js








function uploader_createSuper(Derived) { var hasNativeReflectConstruct = uploader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function uploader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */












var uploader_ThemeUploader = /*#__PURE__*/function (_Component) {
  inherits_default()(ThemeUploader, _Component);

  var _super = uploader_createSuper(ThemeUploader);

  function ThemeUploader() {
    var _this;

    classCallCheck_default()(this, ThemeUploader);

    _this = _super.call(this);
    _this.state = {
      isUploading: false
    };
    _this.handleFilesUpload = _this.handleFilesUpload.bind(assertThisInitialized_default()(_this));
    _this.handleFilesDrop = _this.handleFilesDrop.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ThemeUploader, [{
    key: "handleFilesDrop",
    value: function handleFilesDrop(files) {
      var file = files[0];
      this.uploadTheme(file);
    }
  }, {
    key: "handleFilesUpload",
    value: function handleFilesUpload(e) {
      var file = e.target.files[0];
      this.uploadTheme(file);
    }
  }, {
    key: "uploadTheme",
    value: function uploadTheme(file) {
      var _this2 = this;

      var _this$props = this.props,
          createNotice = _this$props.createNotice,
          onUploadComplete = _this$props.onUploadComplete;
      this.setState({
        isUploading: true
      });
      var body = new window.FormData();
      body.append('pluginzip', file);
      return external_wp_apiFetch_default()({
        path: '/wc-admin/themes',
        method: 'POST',
        body: body
      }).then(function (response) {
        onUploadComplete(response);

        _this2.setState({
          isUploading: false
        });

        createNotice(response.status, response.message);
      }).catch(function (error) {
        _this2.setState({
          isUploading: false
        });

        if (error && error.message) {
          createNotice('error', error.message);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var isUploading = this.state.isUploading;
      var classes = classnames_default()('woocommerce-theme-uploader', className, {
        'is-uploading': isUploading
      });
      return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: classes
      }, Object(external_wp_element_["createElement"])(external_wp_components_["DropZoneProvider"], null, !isUploading ? Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["FormFileUpload"], {
        accept: ".zip",
        onChange: this.handleFilesUpload
      }, Object(external_wp_element_["createElement"])(cloud_upload_default.a, null), Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
        className: "woocommerce-theme-uploader__title"
      }, Object(external_wp_i18n_["__"])('Upload a theme', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Drop a theme zip file here to upload', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wp_components_["DropZone"], {
        label: Object(external_wp_i18n_["__"])('Drop your theme zip file here', 'woocommerce-admin'),
        onFilesDrop: this.handleFilesDrop
      })) : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Spinner"], null), Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
        className: "woocommerce-theme-uploader__title"
      }, Object(external_wp_i18n_["__"])('Uploading theme', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Your theme is being uploaded', 'woocommerce-admin')))));
    }
  }]);

  return ThemeUploader;
}(external_wp_element_["Component"]);

uploader_ThemeUploader.propTypes = {
  /**
   * Additional class name to style the component.
   */
  className: prop_types_default.a.string,

  /**
   * Function called when an upload has finished.
   */
  onUploadComplete: prop_types_default.a.func
};
uploader_ThemeUploader.defaultProps = {
  onUploadComplete: external_lodash_["noop"]
};
/* harmony default export */ var uploader = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(uploader_ThemeUploader));
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__(559);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/phone.js
var phone = __webpack_require__(638);
var phone_default = /*#__PURE__*/__webpack_require__.n(phone);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/tablet.js
var tablet = __webpack_require__(639);
var tablet_default = /*#__PURE__*/__webpack_require__.n(tablet);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/computer.js
var computer = __webpack_require__(640);
var computer_default = /*#__PURE__*/__webpack_require__.n(computer);

// CONCATENATED MODULE: ./client/profile-wizard/steps/theme/preview.js








function preview_createSuper(Derived) { var hasNativeReflectConstruct = preview_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function preview_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */

var devices = [{
  key: 'mobile',
  icon: phone_default.a
}, {
  key: 'tablet',
  icon: tablet_default.a
}, {
  key: 'desktop',
  icon: computer_default.a
}];

var preview_ThemePreview = /*#__PURE__*/function (_Component) {
  inherits_default()(ThemePreview, _Component);

  var _super = preview_createSuper(ThemePreview);

  function ThemePreview() {
    var _this;

    classCallCheck_default()(this, ThemePreview);

    _this = _super.apply(this, arguments);
    _this.state = {
      device: 'desktop'
    };
    _this.handleDeviceClick = _this.handleDeviceClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ThemePreview, [{
    key: "handleDeviceClick",
    value: function handleDeviceClick(device) {
      var theme = this.props.theme;
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_theme_demo_device', {
        device: device,
        theme: theme.slug
      });
      this.setState({
        device: device
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isBusy = _this$props.isBusy,
          onChoose = _this$props.onChoose,
          onClose = _this$props.onClose,
          theme = _this$props.theme;
      var demoUrl = theme.demo_url,
          slug = theme.slug,
          title = theme.title;
      var currentDevice = this.state.device;
      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-theme-preview"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-theme-preview__toolbar"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        className: "woocommerce-theme-preview__close",
        onClick: onClose
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: library_close["a" /* default */]
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-theme-preview__theme-name"
      }, lib_default()({
        /* translators: Describing who a previewed theme is developed by. E.g., Storefront developed by WooCommerce */
        mixedString: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('{{strong}}%s{{/strong}} developed by WooCommerce', 'woocommerce-admin'), title),
        components: {
          strong: Object(external_wp_element_["createElement"])("strong", null)
        }
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-theme-preview__devices"
      }, devices.map(function (device) {
        var DeviceTag = device.icon;
        return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          key: device.key,
          className: classnames_default()('woocommerce-theme-preview__device', {
            'is-selected': device.key === currentDevice
          }),
          onClick: function onClick() {
            return _this2.handleDeviceClick(device.key);
          }
        }, Object(external_wp_element_["createElement"])(DeviceTag, null));
      })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: function onClick() {
          return onChoose(slug, 'preview');
        },
        isBusy: isBusy
      }, Object(external_wp_i18n_["__"])('Choose', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wc_components_["WebPreview"], {
        src: demoUrl,
        title: title,
        className: "is-".concat(currentDevice)
      }));
    }
  }]);

  return ThemePreview;
}(external_wp_element_["Component"]);

/* harmony default export */ var preview = (preview_ThemePreview);
// CONCATENATED MODULE: ./client/profile-wizard/steps/theme/index.js










function theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { theme_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { theme_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function theme_createSuper(Derived) { var hasNativeReflectConstruct = theme_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function theme_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */













/**
 * Internal dependencies
 */






var theme_Theme = /*#__PURE__*/function (_Component) {
  inherits_default()(Theme, _Component);

  var _super = theme_createSuper(Theme);

  function Theme() {
    var _this;

    classCallCheck_default()(this, Theme);

    _this = _super.apply(this, arguments);
    _this.state = {
      activeTab: 'all',
      chosen: null,
      demo: null,
      uploadedThemes: []
    };
    _this.handleUploadComplete = _this.handleUploadComplete.bind(assertThisInitialized_default()(_this));
    _this.onChoose = _this.onChoose.bind(assertThisInitialized_default()(_this));
    _this.onClosePreview = _this.onClosePreview.bind(assertThisInitialized_default()(_this));
    _this.onSelectTab = _this.onSelectTab.bind(assertThisInitialized_default()(_this));
    _this.openDemo = _this.openDemo.bind(assertThisInitialized_default()(_this));
    _this.skipStep = _this.skipStep.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Theme, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isError = _this$props.isError,
          isUpdatingProfileItems = _this$props.isUpdatingProfileItems,
          createNotice = _this$props.createNotice;
      var chosen = this.state.chosen;
      var isRequestSuccessful = !isUpdatingProfileItems && prevProps.isUpdatingProfileItems && !isError && chosen;
      var isRequestError = !isUpdatingProfileItems && prevProps.isRequesting && isError;

      if (isRequestSuccessful) {
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
          chosen: null
        });
        /* eslint-enable react/no-did-update-set-state */

        this.props.goToNextStep();
      }

      if (isRequestError) {
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
          chosen: null
        });
        /* eslint-enable react/no-did-update-set-state */

        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem selecting your store theme', 'woocommerce-admin'));
      }
    }
  }, {
    key: "onChoose",
    value: function onChoose(theme) {
      var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var updateProfileItems = this.props.updateProfileItems;
      var isInstalled = theme.is_installed,
          price = theme.price,
          slug = theme.slug;

      var _getSetting = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
          _getSetting$activeThe = _getSetting.activeTheme,
          activeTheme = _getSetting$activeThe === void 0 ? '' : _getSetting$activeThe;

      this.setState({
        chosen: slug
      });
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_theme_choose', {
        theme: slug,
        location: location
      });

      if (slug !== activeTheme && Object(utils["d" /* getPriceValue */])(price) <= 0) {
        if (isInstalled) {
          this.activateTheme(slug);
        } else {
          this.installTheme(slug);
        }
      } else {
        updateProfileItems({
          theme: slug
        });
      }
    }
  }, {
    key: "installTheme",
    value: function installTheme(slug) {
      var _this2 = this;

      var createNotice = this.props.createNotice;
      external_wp_apiFetch_default()({
        path: '/wc-admin/onboarding/themes/install?theme=' + slug,
        method: 'POST'
      }).then(function (response) {
        createNotice('success', Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s was installed on your site', 'woocommerce-admin'), response.name));

        _this2.activateTheme(slug);
      }).catch(function (response) {
        _this2.setState({
          chosen: null
        });

        createNotice('error', response.message);
      });
    }
  }, {
    key: "activateTheme",
    value: function activateTheme(slug) {
      var _this3 = this;

      var _this$props2 = this.props,
          createNotice = _this$props2.createNotice,
          updateProfileItems = _this$props2.updateProfileItems;
      external_wp_apiFetch_default()({
        path: '/wc-admin/onboarding/themes/activate?theme=' + slug,
        method: 'POST'
      }).then(function (response) {
        createNotice('success', Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s was activated on your site', 'woocommerce-admin'), response.name));
        Object(wc_admin_settings["i" /* setSetting */])('onboarding', theme_objectSpread(theme_objectSpread({}, Object(wc_admin_settings["h" /* getSetting */])('onboarding', {})), {}, {
          activeTheme: response.slug
        }));
        updateProfileItems({
          theme: slug
        });
      }).catch(function (response) {
        _this3.setState({
          chosen: null
        });

        createNotice('error', response.message);
      });
    }
  }, {
    key: "onClosePreview",
    value: function onClosePreview() {
      var demo = this.state.demo;
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_theme_demo_close', {
        theme: demo.slug
      });
      document.body.classList.remove('woocommerce-theme-preview-active');
      this.setState({
        demo: null
      });
    }
  }, {
    key: "openDemo",
    value: function openDemo(theme) {
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_theme_live_demo', {
        theme: theme.slug
      });
      document.body.classList.add('woocommerce-theme-preview-active');
      this.setState({
        demo: theme
      });
    }
  }, {
    key: "skipStep",
    value: function skipStep() {
      var _getSetting2 = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
          _getSetting2$activeTh = _getSetting2.activeTheme,
          activeTheme = _getSetting2$activeTh === void 0 ? '' : _getSetting2$activeTh;

      Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_theme_skip_step', {
        activeTheme: activeTheme
      });
      this.props.goToNextStep();
    }
  }, {
    key: "renderTheme",
    value: function renderTheme(theme) {
      var _this4 = this;

      var demoUrl = theme.demo_url,
          hasSupport = theme.has_woocommerce_support,
          image = theme.image,
          slug = theme.slug,
          title = theme.title;
      var chosen = this.state.chosen;

      var _getSetting3 = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
          _getSetting3$activeTh = _getSetting3.activeTheme,
          activeTheme = _getSetting3$activeTh === void 0 ? '' : _getSetting3$activeTh;

      return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: "woocommerce-profile-wizard__theme",
        key: slug
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
        size: null
      }, image && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__theme-image",
        style: {
          backgroundImage: "url(".concat(image, ")")
        },
        role: "img",
        "aria-label": title
      })), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
        className: "woocommerce-profile-wizard__theme-details"
      }, Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
        className: "woocommerce-profile-wizard__theme-name"
      }, title, !hasSupport && Object(external_wp_element_["createElement"])(external_wp_components_["Tooltip"], {
        text: Object(external_wp_i18n_["__"])('This theme does not support WooCommerce.', 'woocommerce-admin')
      }, Object(external_wp_element_["createElement"])("span", null, Object(external_wp_element_["createElement"])(info_default.a, {
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      })))), Object(external_wp_element_["createElement"])("p", {
        className: "woocommerce-profile-wizard__theme-status"
      }, this.getThemeStatus(theme))), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], null, slug === activeTheme ? Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: function onClick() {
          return _this4.onChoose(theme, 'card');
        },
        isBusy: chosen === slug,
        disabled: chosen === slug
      }, Object(external_wp_i18n_["__"])('Continue with my active theme', 'woocommerce-admin')) : Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isSecondary: true,
        onClick: function onClick() {
          return _this4.onChoose(theme, 'card');
        },
        isBusy: chosen === slug,
        disabled: chosen === slug
      }, Object(external_wp_i18n_["__"])('Choose', 'woocommerce-admin')), demoUrl && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isTertiary: true,
        onClick: function onClick() {
          return _this4.openDemo(theme);
        }
      }, Object(external_wp_i18n_["__"])('Live demo', 'woocommerce-admin'))));
    }
  }, {
    key: "getThemeStatus",
    value: function getThemeStatus(theme) {
      var isInstalled = theme.is_installed,
          price = theme.price,
          slug = theme.slug;

      var _getSetting4 = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
          _getSetting4$activeTh = _getSetting4.activeTheme,
          activeTheme = _getSetting4$activeTh === void 0 ? '' : _getSetting4$activeTh;

      if (activeTheme === slug) {
        return Object(external_wp_i18n_["__"])('Currently active theme', 'woocommerce-admin');
      }

      if (isInstalled) {
        return Object(external_wp_i18n_["__"])('Installed', 'woocommerce-admin');
      } else if (Object(utils["d" /* getPriceValue */])(price) <= 0) {
        return Object(external_wp_i18n_["__"])('Free', 'woocommerce-admin');
      }

      return Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s per year', 'woocommerce-admin'), Object(external_wp_htmlEntities_["decodeEntities"])(price));
    }
  }, {
    key: "doesActiveThemeSupportWooCommerce",
    value: function doesActiveThemeSupportWooCommerce() {
      var _getSetting5 = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
          _getSetting5$activeTh = _getSetting5.activeTheme,
          activeTheme = _getSetting5$activeTh === void 0 ? '' : _getSetting5$activeTh;

      var allThemes = this.getThemes();
      var currentTheme = allThemes.find(function (theme) {
        return theme.slug === activeTheme;
      });
      return currentTheme && currentTheme.has_woocommerce_support;
    }
  }, {
    key: "onSelectTab",
    value: function onSelectTab(tab) {
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_theme_navigate', {
        navigation: tab
      });
      this.setState({
        activeTab: tab
      });
    }
  }, {
    key: "getPriceValue",
    value: function getPriceValue(string) {
      return Number(Object(external_wp_htmlEntities_["decodeEntities"])(string).replace(/[^0-9.-]+/g, ''));
    }
  }, {
    key: "getThemes",
    value: function getThemes() {
      var activeTab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var uploadedThemes = this.state.uploadedThemes;

      var _getSetting6 = Object(wc_admin_settings["h" /* getSetting */])('onboarding', {}),
          _getSetting6$activeTh = _getSetting6.activeTheme,
          activeTheme = _getSetting6$activeTh === void 0 ? '' : _getSetting6$activeTh,
          _getSetting6$themes = _getSetting6.themes,
          themes = _getSetting6$themes === void 0 ? [] : _getSetting6$themes;

      var allThemes = [].concat(toConsumableArray_default()(themes.filter(function (theme) {
        return theme && (theme.has_woocommerce_support || theme.slug === activeTheme);
      })), toConsumableArray_default()(uploadedThemes));

      switch (activeTab) {
        case 'paid':
          return allThemes.filter(function (theme) {
            return Object(utils["d" /* getPriceValue */])(theme.price) > 0;
          });

        case 'free':
          return allThemes.filter(function (theme) {
            return Object(utils["d" /* getPriceValue */])(theme.price) <= 0;
          });

        case 'all':
        default:
          return allThemes;
      }
    }
  }, {
    key: "handleUploadComplete",
    value: function handleUploadComplete(upload) {
      if (upload.status === 'success' && upload.theme_data) {
        this.setState({
          uploadedThemes: [].concat(toConsumableArray_default()(this.state.uploadedThemes), [upload.theme_data])
        });
        Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_theme_upload', {
          theme: upload.theme_data.slug
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          activeTab = _this$state.activeTab,
          chosen = _this$state.chosen,
          demo = _this$state.demo;
      var themes = this.getThemes(activeTab);
      var activeThemeSupportsWooCommerce = this.doesActiveThemeSupportWooCommerce();
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-profile-wizard__step-header"
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "title.small",
        as: "h2"
      }, Object(external_wp_i18n_["__"])('Choose a theme', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "body"
      }, Object(external_wp_i18n_["__"])("Choose how your store appears to customers. And don't worry, you can always switch themes and edit them later.", 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wp_components_["TabPanel"], {
        className: "woocommerce-profile-wizard__themes-tab-panel",
        activeClass: "is-active",
        onSelect: this.onSelectTab,
        tabs: [{
          name: 'all',
          title: Object(external_wp_i18n_["__"])('All themes', 'woocommerce-admin')
        }, {
          name: 'paid',
          title: Object(external_wp_i18n_["__"])('Paid themes', 'woocommerce-admin')
        }, {
          name: 'free',
          title: Object(external_wp_i18n_["__"])('Free themes', 'woocommerce-admin')
        }]
      }, function () {
        return Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-profile-wizard__themes"
        }, themes && themes.map(function (theme) {
          return _this5.renderTheme(theme);
        }), Object(external_wp_element_["createElement"])(uploader, {
          onUploadComplete: _this5.handleUploadComplete
        }));
      }), demo && Object(external_wp_element_["createElement"])(preview, {
        theme: demo,
        onChoose: function onChoose() {
          return _this5.onChoose(demo, 'card');
        },
        onClose: this.onClosePreview,
        isBusy: chosen === demo.slug
      }), activeThemeSupportsWooCommerce && Object(external_wp_element_["createElement"])("p", {
        className: "woocommerce-profile-wizard__themes-skip-this-step"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isLink: true,
        className: "woocommerce-profile-wizard__skip",
        onClick: function onClick() {
          return _this5.skipStep();
        }
      }, Object(external_wp_i18n_["__"])('Skip this step', 'woocommerce-admin'))));
    }
  }]);

  return Theme;
}(external_wp_element_["Component"]);

/* harmony default export */ var steps_theme = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems,
      getOnboardingError = _select.getOnboardingError,
      isOnboardingRequesting = _select.isOnboardingRequesting;

  return {
    isError: Boolean(getOnboardingError('updateProfileItems')),
    isUpdatingProfileItems: isOnboardingRequesting('updateProfileItems'),
    profileItems: getProfileItems()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      updateProfileItems = _dispatch.updateProfileItems;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  return {
    createNotice: createNotice,
    updateProfileItems: updateProfileItems
  };
}))(theme_Theme));
// EXTERNAL MODULE: ./client/profile-wizard/style.scss
var profile_wizard_style = __webpack_require__(641);

// CONCATENATED MODULE: ./client/profile-wizard/index.js










function profile_wizard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profile_wizard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profile_wizard_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profile_wizard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function profile_wizard_createSuper(Derived) { var hasNativeReflectConstruct = profile_wizard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function profile_wizard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */








var STEPS_FILTER = 'woocommerce_admin_profile_wizard_steps';

var profile_wizard_ProfileWizard = /*#__PURE__*/function (_Component) {
  inherits_default()(ProfileWizard, _Component);

  var _super = profile_wizard_createSuper(ProfileWizard);

  function ProfileWizard(props) {
    var _this;

    classCallCheck_default()(this, ProfileWizard);

    _this = _super.call(this, props);
    _this.cachedActivePlugins = props.activePlugins;
    _this.goToNextStep = _this.goToNextStep.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ProfileWizard, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevStep = prevProps.query.step;
      var step = this.props.query.step;
      var _this$props = this.props,
          isError = _this$props.isError,
          isGetProfileItemsRequesting = _this$props.isGetProfileItemsRequesting,
          createNotice = _this$props.createNotice;
      var isRequestError = !isGetProfileItemsRequesting && prevProps.isRequesting && isError;

      if (isRequestError) {
        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem finishing the setup wizard', 'woocommerce-admin'));
      }

      if (prevStep !== step) {
        window.document.documentElement.scrollTop = 0;
        Object(external_wc_tracks_["recordEvent"])('storeprofiler_step_view', {
          step: this.getCurrentStep().key
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.remove('woocommerce-admin-is-loading');
      document.body.classList.add('woocommerce-onboarding');
      document.body.classList.add('woocommerce-profile-wizard__body');
      document.body.classList.add('woocommerce-admin-full-screen');
      document.body.classList.add('is-wp-toolbar-disabled');
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_step_view', {
        step: this.getCurrentStep().key
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove('woocommerce-onboarding');
      document.body.classList.remove('woocommerce-profile-wizard__body');
      document.body.classList.remove('woocommerce-admin-full-screen');
      document.body.classList.remove('is-wp-toolbar-disabled');
    }
  }, {
    key: "getSteps",
    value: function getSteps() {
      var profileItems = this.props.profileItems;
      var steps = [];
      steps.push({
        key: 'store-details',
        container: store_details,
        label: Object(external_wp_i18n_["__"])('Store Details', 'woocommerce-admin'),
        isComplete: profileItems.hasOwnProperty('setup_client') && profileItems.setup_client !== null
      });
      steps.push({
        key: 'industry',
        container: steps_industry,
        label: Object(external_wp_i18n_["__"])('Industry', 'woocommerce-admin'),
        isComplete: profileItems.hasOwnProperty('industry') && profileItems.industry !== null
      });
      steps.push({
        key: 'product-types',
        container: product_types,
        label: Object(external_wp_i18n_["__"])('Product Types', 'woocommerce-admin'),
        isComplete: profileItems.hasOwnProperty('product_types') && profileItems.product_types !== null
      });
      steps.push({
        key: 'business-features',
        container: business_details_BusinessDetailsStep,
        label: Object(external_wp_i18n_["__"])('Business Details', 'woocommerce-admin'),
        isComplete: profileItems.hasOwnProperty('product_count') && profileItems.product_count !== null
      });
      steps.push({
        key: 'theme',
        container: steps_theme,
        label: Object(external_wp_i18n_["__"])('Theme', 'woocommerce-admin'),
        isComplete: profileItems.hasOwnProperty('theme') && profileItems.theme !== null
      });
      return Object(external_wp_hooks_["applyFilters"])(STEPS_FILTER, steps);
    }
  }, {
    key: "getCurrentStep",
    value: function getCurrentStep() {
      var step = this.props.query.step;
      var currentStep = this.getSteps().find(function (s) {
        return s.key === step;
      });

      if (!currentStep) {
        return this.getSteps()[0];
      }

      return currentStep;
    }
  }, {
    key: "goToNextStep",
    value: function () {
      var _goToNextStep = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var _this$props2, activePlugins, dismissedTasks, updateOptions, currentStep, currentStepIndex, nextStep;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, activePlugins = _this$props2.activePlugins, dismissedTasks = _this$props2.dismissedTasks, updateOptions = _this$props2.updateOptions;
                currentStep = this.getCurrentStep();
                currentStepIndex = this.getSteps().findIndex(function (s) {
                  return s.key === currentStep.key;
                });
                Object(external_wc_tracks_["recordEvent"])('storeprofiler_step_complete', {
                  step: currentStep.key
                });

                if (dismissedTasks.length) {
                  updateOptions({
                    woocommerce_task_list_dismissed_tasks: []
                  });
                } // Update the activePlugins cache in case plugins were installed
                // in the current step that affect the visibility of the next step.


                this.cachedActivePlugins = activePlugins;
                nextStep = this.getSteps()[currentStepIndex + 1];

                if (!(typeof nextStep === 'undefined')) {
                  _context.next = 10;
                  break;
                }

                this.completeProfiler();
                return _context.abrupt("return");

              case 10:
                return _context.abrupt("return", Object(external_wc_navigation_["updateQueryString"])({
                  step: nextStep.key
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function goToNextStep() {
        return _goToNextStep.apply(this, arguments);
      }

      return goToNextStep;
    }()
  }, {
    key: "completeProfiler",
    value: function completeProfiler() {
      var _this$props3 = this.props,
          activePlugins = _this$props3.activePlugins,
          isJetpackConnected = _this$props3.isJetpackConnected,
          notes = _this$props3.notes,
          updateNote = _this$props3.updateNote,
          updateProfileItems = _this$props3.updateProfileItems,
          connectToJetpack = _this$props3.connectToJetpack;
      Object(external_wc_tracks_["recordEvent"])('storeprofiler_complete');
      var shouldConnectJetpack = activePlugins.includes('jetpack') && !isJetpackConnected;
      var profilerNote = notes.find(function (note) {
        return note.name === 'wc-admin-onboarding-profiler-reminder';
      });

      if (profilerNote) {
        updateNote(profilerNote.id, {
          status: 'actioned'
        });
      }

      updateProfileItems({
        completed: true
      }).then(function () {
        var homescreenUrl = new URL(Object(external_wc_navigation_["getNewPath"])({}, '/', {}), window.location.href).href;

        if (shouldConnectJetpack) {
          document.body.classList.add('woocommerce-admin-is-loading');
          connectToJetpack(function () {
            return homescreenUrl;
          });
        } else {
          window.location.href = homescreenUrl;
        }
      });
    }
  }, {
    key: "skipProfiler",
    value: function skipProfiler() {
      var _this$props4 = this.props,
          createNotice = _this$props4.createNotice,
          updateProfileItems = _this$props4.updateProfileItems;
      updateProfileItems({
        skipped: true
      }).then(function () {
        Object(external_wc_tracks_["recordEvent"])('storeprofiler_store_details_skip');
        Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
      }).catch(function () {
        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem skipping the setup wizard', 'woocommerce-admin'));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var query = this.props.query;
      var step = this.getCurrentStep();
      var stepKey = step.key;
      var container = Object(external_wp_element_["createElement"])(step.container, {
        query: query,
        step: step,
        goToNextStep: this.goToNextStep,
        skipProfiler: function skipProfiler() {
          _this2.skipProfiler();
        }
      });
      var steps = this.getSteps().map(function (_step) {
        return Object(external_lodash_["pick"])(_step, ['key', 'label', 'isComplete']);
      });
      var classNames = "woocommerce-profile-wizard__container ".concat(stepKey);
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(header_ProfileWizardHeader, {
        currentStep: stepKey,
        steps: steps
      }), Object(external_wp_element_["createElement"])("div", {
        className: classNames
      }, container));
    }
  }]);

  return ProfileWizard;
}(external_wp_element_["Component"]);

/* harmony default export */ var profile_wizard = __webpack_exports__["default"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["NOTES_STORE_NAME"]),
      getNotes = _select.getNotes;

  var _select2 = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption;

  var _select3 = select(external_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select3.getProfileItems,
      getOnboardingError = _select3.getOnboardingError;

  var _select4 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select4.getActivePlugins,
      getPluginsError = _select4.getPluginsError,
      isJetpackConnected = _select4.isJetpackConnected;

  var profileItems = getProfileItems();
  var notesQuery = {
    page: 1,
    per_page: external_wc_data_["QUERY_DEFAULTS"].pageSize,
    type: 'update',
    status: 'unactioned'
  };
  var notes = getNotes(notesQuery);
  var activePlugins = getActivePlugins();
  var dismissedTasks = getOption('woocommerce_task_list_dismissed_tasks') || [];
  return {
    dismissedTasks: dismissedTasks,
    getPluginsError: getPluginsError,
    isError: Boolean(getOnboardingError('updateProfileItems')),
    isJetpackConnected: isJetpackConnected(),
    notes: notes,
    profileItems: profileItems,
    activePlugins: activePlugins
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["PLUGINS_STORE_NAME"]),
      connectToJetpackWithFailureRedirect = _dispatch.connectToJetpackWithFailureRedirect,
      createErrorNotice = _dispatch.createErrorNotice;

  var _dispatch2 = dispatch(external_wc_data_["NOTES_STORE_NAME"]),
      updateNote = _dispatch2.updateNote;

  var _dispatch3 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch3.updateOptions;

  var _dispatch4 = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]),
      updateProfileItems = _dispatch4.updateProfileItems;

  var _dispatch5 = dispatch('core/notices'),
      createNotice = _dispatch5.createNotice;

  var connectToJetpack = function connectToJetpack(failureRedirect) {
    connectToJetpackWithFailureRedirect(failureRedirect, createErrorNotice, wc_admin_settings["g" /* getAdminLink */]);
  };

  return {
    connectToJetpack: connectToJetpack,
    createNotice: createNotice,
    updateNote: updateNote,
    updateOptions: updateOptions,
    updateProfileItems: updateProfileItems
  };
}), window.wcSettings.plugins ? Object(external_wc_data_["withPluginsHydration"])(profile_wizard_objectSpread(profile_wizard_objectSpread({}, window.wcSettings.plugins), {}, {
  jetpackStatus: window.wcSettings.dataEndpoints.jetpackStatus
})) : external_lodash_["identity"])(profile_wizard_ProfileWizard));

/***/ })

}]);