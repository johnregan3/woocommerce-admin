(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[12],{484:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return G}));var o,c=r(5),a=r.n(c),n=r(12),m=r.n(n),l=r(13),i=r.n(l),u=r(14),s=r.n(u),d=r(15),b=r.n(d),_=r(7),f=r.n(_),v=r(0),p=r(1),O=r.n(p),j=r(8),w=r.n(j),y=r(42),g=r.n(y),h=r(2),S=r(40),x=r(41),E=r(25),C=r(22),A=r(499),R=Object(E.g)("dataEndpoints",{countries:{}}).countries,k=Object(x.applyFilters)("woocommerce_admin_customers_report_filters",[{label:Object(h.__)("Show","woocommerce-admin"),staticParams:["paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(h.__)("All Customers","woocommerce-admin"),value:"all"},{label:Object(h.__)("Single Customer","woocommerce-admin"),value:"select_customer",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_customer",chartMode:"item-comparison",path:["select_customer"],settings:{type:"customers",param:"customers",getLabels:A.c,labels:{placeholder:Object(h.__)("Type to search for a customer","woocommerce-admin"),button:Object(h.__)("Single Customer","woocommerce-admin")}}}]},{label:Object(h.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),P=Object(x.applyFilters)("woocommerce_admin_customers_report_advanced_filters",{title:Object(h._x)("Customers Match {{select /}} Filters","A sentence describing filters for Customers. See screen shot for context: https://cloudup.com/cCsm3GeXJbE","woocommerce-admin"),filters:{name:{labels:{add:Object(h.__)("Name","woocommerce-admin"),placeholder:Object(h.__)("Search","woocommerce-admin"),remove:Object(h.__)("Remove customer name filter","woocommerce-admin"),rule:Object(h.__)("Select a customer name filter match","woocommerce-admin"),title:Object(h.__)("{{title}}Name{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(h.__)("Select customer name","woocommerce-admin")},rules:[{value:"includes",label:Object(h._x)("Includes","customer names","woocommerce-admin")},{value:"excludes",label:Object(h._x)("Excludes","customer names","woocommerce-admin")}],input:{component:"Search",type:"customers",getLabels:Object(A.e)(C.NAMESPACE+"/customers",(function(e){return{id:e.id,label:e.name}}))}},country:{labels:{add:Object(h.__)("Country / Region","woocommerce-admin"),placeholder:Object(h.__)("Search","woocommerce-admin"),remove:Object(h.__)("Remove country / region filter","woocommerce-admin"),rule:Object(h.__)("Select a country / region filter match","woocommerce-admin"),title:Object(h.__)("{{title}}Country / Region{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(h.__)("Select country / region","woocommerce-admin")},rules:[{value:"includes",label:Object(h._x)("Includes","countries","woocommerce-admin")},{value:"excludes",label:Object(h._x)("Excludes","countries","woocommerce-admin")}],input:{component:"Search",type:"countries",getLabels:(o=g()(w.a.mark((function e(t){var r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=R.map((function(e){return{key:e.code,label:Object(S.decodeEntities)(e.name)}})),o=t.split(","),e.next=4,r.filter((function(e){return o.includes(e.key)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}},username:{labels:{add:Object(h.__)("Username","woocommerce-admin"),placeholder:Object(h.__)("Search customer username","woocommerce-admin"),remove:Object(h.__)("Remove customer username filter","woocommerce-admin"),rule:Object(h.__)("Select a customer username filter match","woocommerce-admin"),title:Object(h.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(h.__)("Select customer username","woocommerce-admin")},rules:[{value:"includes",label:Object(h._x)("Includes","customer usernames","woocommerce-admin")},{value:"excludes",label:Object(h._x)("Excludes","customer usernames","woocommerce-admin")}],input:{component:"Search",type:"usernames",getLabels:A.c}},email:{labels:{add:Object(h.__)("Email","woocommerce-admin"),placeholder:Object(h.__)("Search customer email","woocommerce-admin"),remove:Object(h.__)("Remove customer email filter","woocommerce-admin"),rule:Object(h.__)("Select a customer email filter match","woocommerce-admin"),title:Object(h.__)("{{title}}Email{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(h.__)("Select customer email","woocommerce-admin")},rules:[{value:"includes",label:Object(h._x)("Includes","customer emails","woocommerce-admin")},{value:"excludes",label:Object(h._x)("Excludes","customer emails","woocommerce-admin")}],input:{component:"Search",type:"emails",getLabels:Object(A.e)(C.NAMESPACE+"/customers",(function(e){return{id:e.id,label:e.email}}))}},orders_count:{labels:{add:Object(h.__)("No. of Orders","woocommerce-admin"),remove:Object(h.__)("Remove order filter","woocommerce-admin"),rule:Object(h.__)("Select an order count filter match","woocommerce-admin"),title:Object(h.__)("{{title}}No. of Orders{{/title}} {{rule /}} {{filter /}}","woocommerce-admin")},rules:[{value:"max",label:Object(h._x)("Less Than","number of orders","woocommerce-admin")},{value:"min",label:Object(h._x)("More Than","number of orders","woocommerce-admin")},{value:"between",label:Object(h._x)("Between","number of orders","woocommerce-admin")}],input:{component:"Number"}},total_spend:{labels:{add:Object(h.__)("Total Spend","woocommerce-admin"),remove:Object(h.__)("Remove total spend filter","woocommerce-admin"),rule:Object(h.__)("Select a total spend filter match","woocommerce-admin"),title:Object(h.__)("{{title}}Total Spend{{/title}} {{rule /}} {{filter /}}","woocommerce-admin")},rules:[{value:"max",label:Object(h._x)("Less Than","total spend by customer","woocommerce-admin")},{value:"min",label:Object(h._x)("More Than","total spend by customer","woocommerce-admin")},{value:"between",label:Object(h._x)("Between","total spend by customer","woocommerce-admin")}],input:{component:"Currency"}},avg_order_value:{labels:{add:Object(h.__)("AOV","woocommerce-admin"),remove:Object(h.__)("Remove average order value filter","woocommerce-admin"),rule:Object(h.__)("Select an average order value filter match","woocommerce-admin"),title:Object(h.__)("{{title}}AOV{{/title}} {{rule /}} {{filter /}}","woocommerce-admin")},rules:[{value:"max",label:Object(h._x)("Less Than","average order value of customer","woocommerce-admin")},{value:"min",label:Object(h._x)("More Than","average order value of customer","woocommerce-admin")},{value:"between",label:Object(h._x)("Between","average order value of customer","woocommerce-admin")}],input:{component:"Currency"}},registered:{labels:{add:Object(h.__)("Registered","woocommerce-admin"),remove:Object(h.__)("Remove registered filter","woocommerce-admin"),rule:Object(h.__)("Select a registered filter match","woocommerce-admin"),title:Object(h.__)("{{title}}Registered{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(h.__)("Select registered date","woocommerce-admin")},rules:[{value:"before",label:Object(h._x)("Before","date","woocommerce-admin")},{value:"after",label:Object(h._x)("After","date","woocommerce-admin")},{value:"between",label:Object(h._x)("Between","date","woocommerce-admin")}],input:{component:"Date"}},last_active:{labels:{add:Object(h.__)("Last active","woocommerce-admin"),remove:Object(h.__)("Remove last active filter","woocommerce-admin"),rule:Object(h.__)("Select a last active filter match","woocommerce-admin"),title:Object(h.__)("{{title}}Last active{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(h.__)("Select registered date","woocommerce-admin")},rules:[{value:"before",label:Object(h._x)("Before","date","woocommerce-admin")},{value:"after",label:Object(h._x)("After","date","woocommerce-admin")},{value:"between",label:Object(h._x)("Between","date","woocommerce-admin")}],input:{component:"Date"}}}}),N=r(9),D=r.n(N),F=r(4),M=r(46),T=r(142),L=r(29),B=r(505),q=r(497);function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f()(e);if(t){var c=f()(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return b()(this,r)}}var I=Object(E.g)("dataEndpoints",{countries:{}}).countries,H=function(e){s()(r,e);var t=V(r);function r(){var e;return m()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(D()(e)),e.getRowsContent=e.getRowsContent.bind(D()(e)),e.getSummary=e.getSummary.bind(D()(e)),e}return i()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(h.__)("Name","woocommerce-admin"),key:"name",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(h.__)("Username","woocommerce-admin"),key:"username",hiddenByDefault:!0},{label:Object(h.__)("Last Active","woocommerce-admin"),key:"date_last_active",defaultSort:!0,isSortable:!0},{label:Object(h.__)("Date Registered","woocommerce-admin"),key:"date_registered",isSortable:!0},{label:Object(h.__)("Email","woocommerce-admin"),key:"email"},{label:Object(h.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},{label:Object(h.__)("Total Spend","woocommerce-admin"),key:"total_spend",isSortable:!0,isNumeric:!0},{label:Object(h.__)("AOV","woocommerce-admin"),screenReaderLabel:Object(h.__)("Average Order Value","woocommerce-admin"),key:"avg_order_value",isNumeric:!0},{label:Object(h.__)("Country / Region","woocommerce-admin"),key:"country",isSortable:!0},{label:Object(h.__)("City","woocommerce-admin"),key:"city",hiddenByDefault:!0,isSortable:!0},{label:Object(h.__)("Region","woocommerce-admin"),key:"state",hiddenByDefault:!0,isSortable:!0},{label:Object(h.__)("Postal Code","woocommerce-admin"),key:"postcode",hiddenByDefault:!0,isSortable:!0}]}},{key:"getCountryName",value:function(e){return void 0!==I[e]?I[e]:null}},{key:"getRowsContent",value:function(e){var t=this,r=Object(E.g)("dateFormat",L.defaultTableDateFormat),o=this.context,c=o.formatAmount,a=o.formatDecimal,n=o.getCurrencyConfig;return null==e?void 0:e.map((function(e){var o=e.avg_order_value,m=e.date_last_active,l=e.date_registered,i=e.email,u=e.name,s=e.user_id,d=e.orders_count,b=e.username,_=e.total_spend,f=e.postcode,p=e.city,O=e.state,j=e.country,w=t.getCountryName(j),y=s?Object(v.createElement)(M.Link,{href:Object(E.f)("user-edit.php?user_id="+s),type:"wp-admin"},u):u,g=m?Object(v.createElement)(M.Date,{date:m,visibleFormat:r}):"—",h=l?Object(v.createElement)(M.Date,{date:l,visibleFormat:r}):"—",S=Object(v.createElement)(v.Fragment,null,Object(v.createElement)(F.Tooltip,{text:w},Object(v.createElement)("span",{"aria-hidden":"true"},j)),Object(v.createElement)("span",{className:"screen-reader-text"},w));return[{display:y,value:u},{display:b,value:b},{display:g,value:m},{display:h,value:l},{display:Object(v.createElement)("a",{href:"mailto:"+i},i),value:i},{display:Object(T.formatValue)(n(),"number",d),value:d},{display:c(_),value:a(_)},{display:c(o),value:a(o)},{display:S,value:j},{display:p,value:p},{display:O,value:O},{display:f,value:f}]}))}},{key:"getSummary",value:function(e){var t=e.customers_count,r=void 0===t?0:t,o=e.avg_orders_count,c=void 0===o?0:o,a=e.avg_total_spend,n=void 0===a?0:a,m=e.avg_avg_order_value,l=void 0===m?0:m,i=this.context,u=i.formatAmount,s=(0,i.getCurrencyConfig)();return[{label:Object(h._n)("customer","customers",r,"woocommerce-admin"),value:Object(T.formatValue)(s,"number",r)},{label:Object(h._n)("average order","average orders",c,"woocommerce-admin"),value:Object(T.formatValue)(s,"number",c)},{label:Object(h.__)("average lifetime spend","woocommerce-admin"),value:u(n)},{label:Object(h.__)("average order value","woocommerce-admin"),value:u(l)}]}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.query,o=e.filters,c=e.advancedFilters;return Object(v.createElement)(B.a,{endpoint:"customers",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["customers_count","avg_orders_count","avg_total_spend","avg_avg_order_value"],isRequesting:t,itemIdField:"id",query:r,labels:{placeholder:Object(h.__)("Search by customer name","woocommerce-admin")},searchBy:"customers",title:Object(h.__)("Customers","woocommerce-admin"),columnPrefsKey:"customers_report_columns",filters:o,advancedFilters:c})}}]),r}(v.Component);H.contextType=q.a;var U=H,J=r(504);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f()(e);if(t){var c=f()(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return b()(this,r)}}var G=function(e){s()(r,e);var t=X(r);function r(){return m()(this,r),t.apply(this,arguments)}return i()(r,[{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.query,o=e.path,c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({orderby:"date_last_active",order:"desc"},r);return Object(v.createElement)(v.Fragment,null,Object(v.createElement)(J.a,{query:r,path:o,filters:k,showDatePicker:!1,advancedFilters:P,report:"customers"}),Object(v.createElement)(U,{isRequesting:t,query:c,filters:k,advancedFilters:P}))}}]),r}(v.Component);G.propTypes={query:O.a.object.isRequired}},499:function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return f})),r.d(t,"f",(function(){return v})),r.d(t,"h",(function(){return p})),r.d(t,"g",(function(){return O}));var o=r(23),c=r(26),a=r.n(c),n=r(3),m=r(21),l=r(22),i=r(25),u=r(500);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=arguments.length>1?arguments[1]:void 0,n="function"==typeof e?e(c):e,l=Object(m.getIdsFromQuery)(r);if(l.length<1)return Promise.resolve([]);var i={include:l.join(","),per_page:l.length};return a()({path:Object(o.addQueryArgs)(n,i)}).then((function(e){return e.map(t)}))}}s(l.NAMESPACE+"/products/attributes",(function(e){return{key:e.id,label:e.name}}));var d=s(l.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),b=s(l.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),_=s(l.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),f=s(l.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),v=s(l.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(u.a)(e)}}));function p(e){var t=e.attributes,r=e.name,o=Object(i.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(o)>-1)return r;var c=t.map((function(e){return e.option})).join(", ");return c?r+o+c:r}var O=s((function(e){var t=e.products;return t?l.NAMESPACE+"/products/".concat(t,"/variations"):l.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:p(e)}}))},500:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(2);function c(e){return[e.country,e.state,e.name||Object(o.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}}}]);