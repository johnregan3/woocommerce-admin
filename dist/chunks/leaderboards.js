(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[32],{506:function(e,t,a){"use strict";var r=a(0),o=a(2),s=a(1),l=a.n(s),n=a(21);function c({className:e}){const t=Object(o.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),a=Object(o.__)("Reload","woocommerce-admin");return Object(r.createElement)(n.EmptyContent,{className:e,title:t,actionLabel:a,actionCallback:()=>{window.location.reload()}})}c.propTypes={className:l.a.string},t.a=c},511:function(e,t,a){"use strict";var r=a(53);const o=["a","b","em","i","strong","p","br"],s=["target","href","rel","name","download"];t.a=e=>({__html:Object(r.sanitize)(e,{ALLOWED_TAGS:o,ALLOWED_ATTR:s})})},615:function(e,t,a){},616:function(e,t,a){},636:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a(2),s=a(14),l=a(1),n=a.n(l),c=a(3),d=a(7),i=a(21),m=a(11),b=a(13),u=a(16),g=a(12),p=a(17),w=a(506),O=a(511);a(615);class _ extends r.Component{getFormattedHeaders(){return this.props.headers.map((e,t)=>({isLeftAligned:0===t,hiddenByDefault:!1,isSortable:!1,key:e.label,label:e.label}))}getFormattedRows(){return this.props.rows.map(e=>e.map(e=>({display:Object(r.createElement)("div",{dangerouslySetInnerHTML:Object(O.a)(e.display)}),value:e.value})))}render(){const{isRequesting:e,isError:t,totalRows:a,title:s}=this.props,l="woocommerce-leaderboard";if(t)return Object(r.createElement)(w.a,{className:l});const n=this.getFormattedRows();return e||0!==n.length?Object(r.createElement)(i.TableCard,{className:l,headers:this.getFormattedHeaders(),isLoading:e,rows:n,rowsPerPage:a,showMenu:!1,title:s,totalRows:a}):Object(r.createElement)(c.Card,{className:l},Object(r.createElement)(c.CardHeader,null,Object(r.createElement)(p.Text,{size:16,weight:600,as:"h3",color:"#23282d"},s)),Object(r.createElement)(c.CardBody,{size:null},Object(r.createElement)(i.EmptyTable,null,Object(o.__)("No data recorded for the selected time period.","woocommerce-admin"))))}}_.propTypes={headers:n.a.arrayOf(n.a.shape({label:n.a.string})),id:n.a.string.isRequired,query:n.a.object,rows:n.a.arrayOf(n.a.arrayOf(n.a.shape({display:n.a.node,value:n.a.oneOfType([n.a.string,n.a.number,n.a.bool])}))).isRequired,title:n.a.string.isRequired,totalRows:n.a.number.isRequired},_.defaultProps={rows:[],isError:!1,isRequesting:!1};var h=Object(s.compose)(Object(d.withSelect)((e,t)=>{const{id:a,query:r,totalRows:o,filters:s}=t,{woocommerce_default_date_range:l}=e(m.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),n=Object(m.getFilterQuery)({filters:s,query:r}),c={id:a,per_page:o,persisted_query:Object(g.getPersistedQuery)(r),query:r,select:e,defaultDateRange:l,filterQuery:n};return Object(m.getLeaderboard)(c)}))(_);a(616);const j=e=>{const{allLeaderboards:t,controls:a,isFirst:s,isLast:l,hiddenBlocks:n,onMove:d,onRemove:b,onTitleBlur:g,onTitleChange:p,onToggleHiddenBlock:w,query:O,title:_,titleInput:j,filters:E}=e,{updateUserPreferences:y,...f}=Object(m.useUserPreferences)(),[T,R]=Object(r.useState)(parseInt(f.dashboard_leaderboard_rows||5,10)),k=e=>{R(parseInt(e,10));const t={dashboard_leaderboard_rows:parseInt(e,10)};y(t)};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"woocommerce-dashboard__dashboard-leaderboards"},Object(r.createElement)(i.SectionHeader,{title:_||Object(o.__)("Leaderboards","woocommerce-admin"),menu:Object(r.createElement)(i.EllipsisMenu,{label:Object(o.__)("Choose which leaderboards to display and other settings","woocommerce-admin"),renderContent:({onToggle:e})=>Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.MenuTitle,null,Object(o.__)("Leaderboards","woocommerce-admin")),(({allLeaderboards:e,hiddenBlocks:t,onToggleHiddenBlock:a})=>e.map(e=>{const o=!t.includes(e.id);return Object(r.createElement)(i.MenuItem,{checked:o,isCheckbox:!0,isClickable:!0,key:e.id,onInvoke:()=>{a(e.id)(),Object(u.recordEvent)("dash_leaderboards_toggle",{status:o?"off":"on",key:e.id})}},e.label)}))({allLeaderboards:t,hiddenBlocks:n,onToggleHiddenBlock:w}),Object(r.createElement)(c.SelectControl,{className:"woocommerce-dashboard__dashboard-leaderboards__select",label:Object(o.__)("Rows per table","woocommerce-admin"),value:T,options:Array.from({length:20},(e,t)=>({v:t+1,label:t+1})),onChange:k}),Object(r.createElement)(a,{onToggle:e,onMove:d,onRemove:b,isFirst:s,isLast:l,onTitleBlur:g,onTitleChange:p,titleInput:j}))})}),Object(r.createElement)("div",{className:"woocommerce-dashboard__columns"},(({allLeaderboards:e,hiddenBlocks:t,query:a,rowsPerTable:o,filters:s})=>e.map(e=>{if(!t.includes(e.id))return Object(r.createElement)(h,{headers:e.headers,id:e.id,key:e.id,query:a,title:e.label,totalRows:o,filters:s})}))({allLeaderboards:t,hiddenBlocks:n,query:O,rowsPerTable:T,filters:E}))))};j.propTypes={query:n.a.object.isRequired};t.default=Object(s.compose)(Object(d.withSelect)(e=>{const{getItems:t,getItemsError:a}=e(m.ITEMS_STORE_NAME),{leaderboards:r}=Object(b.f)("dataEndpoints",{leaderboards:[]});return{allLeaderboards:r,getItems:t,getItemsError:a}}))(j)}}]);