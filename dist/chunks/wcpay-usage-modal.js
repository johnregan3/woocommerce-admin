(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[51],{106:function(e,t,n){"use strict";var o=n(10),r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=n(81),a=n(107),c=n(108),s="function"==typeof Symbol&&Symbol.iterator;function u(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,o={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return o[e]}))):t.toString(36);var n,o}function l(e,t,n,o){var i,c=typeof e;if("undefined"!==c&&"boolean"!==c||(e=null),null===e||"string"===c||"number"===c||"object"===c&&e.$$typeof===r)return n(o,e,""===t?"."+u(e,0):t),1;var p=0,f=""===t?".":t+":";if(Array.isArray(e))for(var m=0;m<e.length;m++)p+=l(i=e[m],f+u(i,m),n,o);else{var d=function(e){var t=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(d){0;for(var h,v=d.call(e),y=0;!(h=v.next()).done;)p+=l(i=h.value,f+u(i,y++),n,o)}else if("object"===c){0;var g=""+e;a(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(e).join(", ")+"}":g,"")}}return p}var p=/\/+/g;function f(e){return(""+e).replace(p,"$&/")}var m,d,h=v,v=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)},y=function(e){a(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)};function g(e,t,n,o){this.result=e,this.keyPrefix=t,this.func=n,this.context=o,this.count=0}function b(e,t,n){var r,a,c=e.result,s=e.keyPrefix,u=e.func,l=e.context,p=u.call(l,t,e.count++);Array.isArray(p)?w(p,c,n,i.thatReturnsArgument):null!=p&&(o.isValidElement(p)&&(r=p,a=s+(!p.key||t&&t.key===p.key?"":f(p.key)+"/")+n,p=o.cloneElement(r,{key:a},void 0!==r.props?r.props.children:void 0)),c.push(p))}function w(e,t,n,o,r){var i="";null!=n&&(i=f(n)+"/");var a=g.getPooled(t,i,o,r);!function(e,t,n){null==e||l(e,"",t,n)}(e,b,a),g.release(a)}g.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},m=function(e,t,n,o){if(this.instancePool.length){var r=this.instancePool.pop();return this.call(r,e,t,n,o),r}return new this(e,t,n,o)},(d=g).instancePool=[],d.getPooled=m||h,d.poolSize||(d.poolSize=10),d.release=y;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return c(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(o.isValidElement(e))return c(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;a(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)w(e[n],t,n,i.thatReturnsArgument);return t}},107:function(e,t,n){"use strict";e.exports=function(e,t,n,o,r,i,a,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,r,i,a,c],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},108:function(e,t,n){"use strict";var o=n(81);e.exports=o},109:function(e,t,n){"use strict";function o(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(o)}},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=c(n(10)),i=c(n(106)),a=c(n(109));function c(e){return e&&e.__esModule?e:{default:e}}var s=void 0;function u(e,t){var n,a,c,l,p,f,m,d,h=[],v={};for(f=0;f<e.length;f++)if("string"!==(p=e[f]).type){if(!t.hasOwnProperty(p.value)||void 0===t[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==o(t[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+s);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){n=t[p.value],c=f;break}h.push(t[p.value])}else h.push(p.value);return n&&(l=function(e,t){var n,o,r=t[e],i=0;for(o=e+1;o<t.length;o++)if((n=t[o]).value===r.value){if("componentOpen"===n.type){i++;continue}if("componentClose"===n.type){if(0===i)return o;i--}}throw new Error("Missing closing component token `"+r.value+"`")}(c,e),m=u(e.slice(c+1,l),t),a=r.default.cloneElement(n,{},m),h.push(a),l<e.length-1&&(d=u(e.slice(l+1),t),h=h.concat(d))),1===h.length?h[0]:(h.forEach((function(e,t){e&&(v["interpolation-child-"+t]=e)})),(0,i.default)(v))}t.default=function(e){var t=e.mixedString,n=e.components,r=e.throwErrors;if(s=t,!n)return t;if("object"!==(void 0===n?"undefined":o(n))){if(r)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var i=(0,a.default)(t);try{return u(i,n)}catch(e){if(r)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},508:function(e,t,n){"use strict";n.r(t);var o=n(18),r=n.n(o),i=n(0),a=n(2),c=n(21),s=n(28),u=n.n(s),l=n(46),p=n(509);t.default=function(){var e="1"===Object(c.getQuery)()["wcpay-connection-success"],t=Object(i.useState)(e),n=r()(t,2),o=n[0],s=n[1];if(!o)return null;var f=function(){s(!1),Object(c.updateQueryString)({"wcpay-connection-success":void 0})},m=Object(a.__)("Help us build a better WooCommerce Payments experience","woocommerce-admin"),d=u()({mixedString:Object(a.__)("By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.","woocommerce-admin"),components:{link:Object(i.createElement)(l.Link,{href:"https://woocommerce.com/usage-tracking",target:"_blank",type:"external"})}});return Object(i.createElement)(p.a,{isDismissible:!1,title:m,message:d,acceptActionText:Object(a.__)("I agree","woocommerce-admin"),dismissActionText:Object(a.__)("No thanks","woocommerce-admin"),onContinue:f,onClose:f})}},509:function(e,t,n){"use strict";var o=n(8),r=n.n(o),i=n(42),a=n.n(i),c=n(12),s=n.n(c),u=n(13),l=n.n(u),p=n(14),f=n.n(p),m=n(15),d=n.n(m),h=n(7),v=n.n(h),y=n(0),g=n(2),b=n(20),w=n(11),k=n(28),_=n.n(k),O=n(4),j=n(46),S=n(22);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d()(this,n)}}var R=function(e){f()(o,e);var t,n=E(o);function o(e){var t;return s()(this,o),(t=n.call(this,e)).state={isLoadingScripts:!1,isRequestStarted:!1},t}return l()(o,[{key:"componentDidUpdate",value:(t=a()(r.a.mark((function e(t,n){var o,i,a,c,s,u,l,p,f,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props,i=o.hasErrors,a=o.isRequesting,c=o.onClose,s=o.onContinue,u=o.createNotice,l=this.state,p=l.isLoadingScripts,l.isRequestStarted){e.next=4;break}return e.abrupt("return");case 4:f=!a&&!p&&(t.isRequesting||n.isLoadingScripts)&&!i,m=!a&&t.isRequesting&&i,f&&(c(),s()),m&&(u("error",Object(g.__)("There was a problem updating your preferences","woocommerce-admin")),c());case 8:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"updateTracking",value:function(e){var t=this,n=e.allowTracking,o=this.props.updateOptions;n&&"function"==typeof window.wcTracks.enable?(this.setState({isLoadingScripts:!0}),window.wcTracks.enable((function(){t._isMounted&&t.setState({isLoadingScripts:!1})}))):n||(window.wcTracks.isEnabled=!1);var r=n?"yes":"no";this.setState({isRequestStarted:!0}),o({woocommerce_allow_tracking:r})}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;if(this.props.allowTracking){var t=this.props,n=t.onClose,o=t.onContinue;return n(),o(),null}var r=this.props,i=r.isRequesting,a=r.title,c=void 0===a?Object(g.__)("Build a better WooCommerce","woocommerce-admin"):a,s=r.message,u=void 0===s?_()({mixedString:Object(g.__)("Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} that shows us how WooCommerce is used. No personal data is tracked or stored.","woocommerce-admin"),components:{link:Object(y.createElement)(j.Link,{href:"https://woocommerce.com/usage-tracking",target:"_blank",type:"external"})}}):s,l=r.dismissActionText,p=void 0===l?Object(g.__)("No thanks","woocommerce-admin"):l,f=r.acceptActionText,m=void 0===f?Object(g.__)("Yes, count me in!","woocommerce-admin"):f,d=this.state.isRequestStarted&&i;return Object(y.createElement)(O.Modal,{title:c,isDismissible:this.props.isDismissible,onRequestClose:function(){return e.props.onClose()},className:"woocommerce-usage-modal"},Object(y.createElement)("div",{className:"woocommerce-usage-modal__wrapper"},Object(y.createElement)("div",{className:"woocommerce-usage-modal__message"},u),Object(y.createElement)("div",{className:"woocommerce-usage-modal__actions"},Object(y.createElement)(O.Button,{isSecondary:!0,isBusy:d,onClick:function(){return e.updateTracking({allowTracking:!1})}},p),Object(y.createElement)(O.Button,{isPrimary:!0,isBusy:d,onClick:function(){return e.updateTracking({allowTracking:!0})}},m))))}}]),o}(y.Component);t.a=Object(b.compose)(Object(w.withSelect)((function(e){var t=e(S.OPTIONS_STORE_NAME),n=t.getOption,o=t.getOptionsUpdatingError,r=t.isOptionsUpdating;return{allowTracking:"yes"===n("woocommerce_allow_tracking"),isRequesting:Boolean(r()),hasErrors:Boolean(o())}})),Object(w.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice,updateOptions:e(S.OPTIONS_STORE_NAME).updateOptions}})))(R)},81:function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r}}]);