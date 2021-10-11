(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[44],{534:function(e,t,n){"use strict";var c=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.size,o=void 0===n?24:n,a=e.onClick,i=(e.icon,e.className),s=function(e,t){var n={};for(var c in e)0<=t.indexOf(c)||Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c]);return n}(e,["size","onClick","icon","className"]),l=["gridicon","gridicons-external",i,(t=o,!(0!=t%18)&&"needs-offset"),!1,!1].filter(Boolean).join(" ");return r.default.createElement("svg",c({className:l,height:o,width:o,onClick:a},s,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})))};var o,a=n(5),r=(o=a)&&o.__esModule?o:{default:o};e.exports=t.default},584:function(e,t,n){},60:function(e,t,n){"use strict";var c=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.size,o=void 0===n?24:n,a=e.onClick,i=(e.icon,e.className),s=function(e,t){var n={};for(var c in e)0<=t.indexOf(c)||Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c]);return n}(e,["size","onClick","icon","className"]),l=["gridicon","gridicons-notice-outline",i,(t=o,!(0!=t%18)&&"needs-offset"),!1,!1].filter(Boolean).join(" ");return r.default.createElement("svg",c({className:l,height:o,width:o,onClick:a},s,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z"})))};var o,a=n(5),r=(o=a)&&o.__esModule?o:{default:o};e.exports=t.default},608:function(e,t,n){"use strict";n.r(t),n.d(t,"getPaymentRecommendationData",(function(){return g}));var c=n(0),o=n(2),a=n(7),r=n(28),i=n(4),s=n(21),l=n(20),m=n(11),d=n(16),u=n(534),_=n.n(u),p=n(13),O=(n(584),n(59)),b=n(504),f=n(536);const w="woocommerce_setting_payments_recommendations_hidden";function g(e){const{getOption:t,isResolving:n}=e(m.OPTIONS_STORE_NAME),{getSettings:c}=e(m.SETTINGS_STORE_NAME),{getRecommendedPlugins:o}=e(m.PLUGINS_STORE_NAME),{general:a={}}=c("general"),r=t(w),i=a.woocommerce_default_country?Object(O.b)(a.woocommerce_default_country):null,s=!!i&&Object(f.c)(i),l=!n("getOption",[w])&&"yes"!==r&&s;let d;return l&&(d=o("payments")),{displayable:l,recommendedPlugins:d}}t.default=()=>{const[e,t]=Object(c.useState)(null),{updateOptions:n}=Object(a.useDispatch)(m.OPTIONS_STORE_NAME),{installAndActivatePlugins:u}=Object(a.useDispatch)(m.PLUGINS_STORE_NAME),{displayable:O,recommendedPlugins:f}=Object(a.useSelect)(g),j=Object(c.useRef)(!1),h=O&&f&&f.length>0;if(Object(c.useEffect)(()=>{h&&!j.current&&(j.current=!0,Object(d.recordEvent)("settings_payments_recommendations_pageview",{}))},[h]),!h)return null;const v=()=>{Object(d.recordEvent)("settings_payments_recommendations_dismiss",{}),n({[w]:"yes"})},y=(f||[]).map(n=>({key:n.slug,title:Object(c.createElement)(c.Fragment,null,n.title,n.recommended&&Object(c.createElement)(s.Pill,null,Object(o.__)("Recommended","woocommerce-admin"))),content:Object(r.decodeEntities)(n.copy),after:Object(c.createElement)(i.Button,{isSecondary:!0,onClick:()=>(n=>{e||(t(n.product),Object(d.recordEvent)("settings_payments_recommendations_setup",{extension_selected:n.product}),u([n.product]).then(()=>{window.location.href=Object(p.e)(n["setup-link"].replace("/wp-admin/",""))}).catch(e=>{Object(b.a)(e),t(null)}))})(n),isBusy:e===n.product,disabled:!!e},n["button-text"]),before:Object(c.createElement)("img",{src:n.icon,alt:""})}));return Object(c.createElement)(i.Card,{size:"medium",className:"woocommerce-recommended-payments-card"},Object(c.createElement)(i.CardHeader,null,Object(c.createElement)("div",{className:"woocommerce-recommended-payments-card__header"},Object(c.createElement)(l.Text,{variant:"title.small",as:"p",size:"20",lineHeight:"28px"},Object(o.__)("Recommended ways to get paid","woocommerce-admin")),Object(c.createElement)(l.Text,{className:"woocommerce-recommended-payments__header-heading",variant:"caption",as:"p",size:"12",lineHeight:"16px"},Object(o.__)('We recommend adding one of the following payment extensions to your store. The extension will be installed and activated for you when you click "Get started".',"woocommerce-admin"))),Object(c.createElement)("div",{className:"woocommerce-card__menu woocommerce-card__header-item"},Object(c.createElement)(s.EllipsisMenu,{label:Object(o.__)("Task List Options","woocommerce-admin"),renderContent:()=>Object(c.createElement)("div",{className:"woocommerce-review-activity-card__section-controls"},Object(c.createElement)(i.Button,{onClick:v},Object(o.__)("Hide this","woocommerce-admin")))}))),Object(c.createElement)(s.List,{items:y}),Object(c.createElement)(i.CardFooter,null,Object(c.createElement)(i.Button,{href:"https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations",target:"_blank",isTertiary:!0},Object(o.__)("See more options","woocommerce-admin"),Object(c.createElement)(_.a,{size:18}))))}}}]);