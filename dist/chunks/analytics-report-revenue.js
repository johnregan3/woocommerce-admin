(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[16],{485:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return G}));var a=r(12),n=r.n(a),o=r(13),i=r.n(o),s=r(14),c=r.n(s),u=r(15),l=r.n(u),m=r(7),d=r.n(m),p=r(0),y=r(1),f=r.n(y),b=r(519),v=r(502),g=r(501),h=r(503),_=r(9),O=r.n(_),j=r(2),R=r(72),w=r(11),q=r(20),D=r(3),S=r(46),C=r(142),k=r(25),E=r(22),T=r(29),F=r(48),P=r(505),x=r(497);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var A=[],V=["orders_count","gross_sales","total_sales","refunds","coupons","taxes","shipping","net_revenue"],L=function(e){c()(r,e);var t=N(r);function r(){var e;return n()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(O()(e)),e.getRowsContent=e.getRowsContent.bind(O()(e)),e.getSummary=e.getSummary.bind(O()(e)),e}return i()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(j.__)("Date","woocommerce-admin"),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:Object(j.__)("Orders","woocommerce-admin"),key:"orders_count",required:!1,isSortable:!0,isNumeric:!0},{label:Object(j.__)("Gross Sales","woocommerce-admin"),key:"gross_sales",required:!1,isSortable:!0,isNumeric:!0},{label:Object(j.__)("Returns","woocommerce-admin"),key:"refunds",required:!1,isSortable:!0,isNumeric:!0},{label:Object(j.__)("Coupons","woocommerce-admin"),key:"coupons",required:!1,isSortable:!0,isNumeric:!0},{label:Object(j.__)("Net Sales","woocommerce-admin"),key:"net_revenue",required:!1,isSortable:!0,isNumeric:!0},{label:Object(j.__)("Taxes","woocommerce-admin"),key:"taxes",required:!1,isSortable:!0,isNumeric:!0},{label:Object(j.__)("Shipping","woocommerce-admin"),key:"shipping",required:!1,isSortable:!0,isNumeric:!0},{label:Object(j.__)("Total Sales","woocommerce-admin"),key:"total_sales",required:!1,isSortable:!0,isNumeric:!0}]}},{key:"getRowsContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(k.g)("dateFormat",T.defaultTableDateFormat),r=this.context,a=r.formatAmount,n=r.render,o=r.formatDecimal,i=r.getCurrencyConfig;return e.map((function(e){var r=e.subtotals,s=r.coupons,c=r.gross_sales,u=r.total_sales,l=r.net_revenue,m=r.orders_count,d=r.refunds,y=r.shipping,f=r.taxes,b=Object(p.createElement)(S.Link,{href:"edit.php?post_type=shop_order&m="+Object(R.format)("Ymd",e.date_start),type:"wp-admin"},Object(C.formatValue)(i(),"number",m));return[{display:Object(p.createElement)(S.Date,{date:e.date_start,visibleFormat:t}),value:e.date_start},{display:b,value:Number(m)},{display:n(c),value:o(c)},{display:a(d),value:o(d)},{display:a(s),value:o(s)},{display:n(l),value:o(l)},{display:n(f),value:o(f)},{display:n(y),value:o(y)},{display:n(u),value:o(u)}]}))}},{key:"getSummary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.orders_count,a=void 0===r?0:r,n=e.gross_sales,o=void 0===n?0:n,i=e.total_sales,s=void 0===i?0:i,c=e.refunds,u=void 0===c?0:c,l=e.coupons,m=void 0===l?0:l,d=e.taxes,p=void 0===d?0:d,y=e.shipping,f=void 0===y?0:y,b=e.net_revenue,v=void 0===b?0:b,g=this.context,h=g.formatAmount,_=g.getCurrencyConfig,O=_();return[{label:Object(j._n)("day","days",t,"woocommerce-admin"),value:Object(C.formatValue)(O,"number",t)},{label:Object(j._n)("order","orders",a,"woocommerce-admin"),value:Object(C.formatValue)(O,"number",a)},{label:Object(j.__)("gross sales","woocommerce-admin"),value:h(o)},{label:Object(j.__)("returns","woocommerce-admin"),value:h(u)},{label:Object(j.__)("coupons","woocommerce-admin"),value:h(m)},{label:Object(j.__)("net sales","woocommerce-admin"),value:h(v)},{label:Object(j.__)("taxes","woocommerce-admin"),value:h(p)},{label:Object(j.__)("shipping","woocommerce-admin"),value:h(f)},{label:Object(j.__)("total sales","woocommerce-admin"),value:h(s)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.filters,a=e.tableData,n=e.query;return Object(p.createElement)(P.a,{endpoint:"revenue",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:V,query:n,tableData:a,title:Object(j.__)("Revenue","woocommerce-admin"),columnPrefsKey:"revenue_report_columns",filters:r,advancedFilters:t})}}]),r}(p.Component);L.contextType=x.a;var I=Object(D.memoize)((function(e,t,r,a){return{tableData:{items:{data:Object(D.get)(a,["data","intervals"],A),totalResults:Object(D.get)(a,["totalResults"],0)},isError:e,isRequesting:t,query:r}}}),(function(e,t,r,a){return[e,t,Object(F.stringify)(r),Object(D.get)(a,["totalResults"],0),Object(D.get)(a,["data","intervals"],A).length].join(":")})),H=Object(D.memoize)((function(e,t,r,a,n){return{interval:"day",orderby:t,order:e,page:r,per_page:a,after:Object(T.appendTimestamp)(n.primary.after,"start"),before:Object(T.appendTimestamp)(n.primary.before,"end")}}),(function(e,t,r,a,n){return[e,t,r,a,n.primary.after,n.primary.before].join(":")})),Y=Object(q.compose)(Object(w.withSelect)((function(e,t){var r=t.query,a=t.filters,n=t.advancedFilters,o=e(E.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,i=Object(T.getCurrentDates)(r,o),s=e(E.REPORTS_STORE_NAME),c=s.getReportStats,u=s.getReportStatsError,l=s.isResolving,m=H(r.order||"desc",r.orderby||"date",r.paged||1,r.per_page||E.QUERY_DEFAULTS.pageSize,i),d=Object(E.getReportTableQuery)({endpoint:"revenue",query:r,select:e,tableQuery:m,filters:a,advancedFilters:n}),p=c("revenue",d),y=Boolean(u("revenue",d)),f=l("getReportStats",["revenue",d]);return I(y,f,m,p)})))(L),M=r(504);function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var G=function(e){c()(r,e);var t=Q(r);function r(){return n()(this,r),t.apply(this,arguments)}return i()(r,[{key:"render",value:function(){var e=this.props,t=e.path,r=e.query;return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(M.a,{query:r,path:t,report:"revenue",filters:b.c,advancedFilters:b.a}),Object(p.createElement)(h.a,{charts:b.b,endpoint:"revenue",query:r,selectedChart:Object(v.a)(r.chart,b.b),filters:b.c,advancedFilters:b.a}),Object(p.createElement)(g.a,{charts:b.b,endpoint:"revenue",path:t,query:r,selectedChart:Object(v.a)(r.chart,b.b),filters:b.c,advancedFilters:b.a}),Object(p.createElement)(Y,{query:r,filters:b.c,advancedFilters:b.a}))}}]),r}(p.Component);G.propTypes={path:f.a.string.isRequired,query:f.a.object.isRequired}},501:function(e,t,r){"use strict";var a=r(5),n=r.n(a),o=r(12),i=r.n(o),s=r(13),c=r.n(s),u=r(14),l=r.n(u),m=r(15),d=r.n(m),p=r(7),y=r.n(p),f=r(0),b=r(2),v=r(20),g=r(72),h=r(11),_=r(3),O=r(1),j=r.n(O),R=r(46),w=r(22),q=r(29),D=r(497),S=r(498),C=r(21);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=y()(e);if(t){var n=y()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var F=function(e){l()(r,e);var t=T(r);function r(){return i()(this,r),t.apply(this,arguments)}return c()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(_.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),E({date:Object(g.format)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,n=e.selectedChart,o=e.defaultDateRange,i=Object(q.getIntervalForQuery)(t),s=Object(q.getCurrentDates)(t,o),c=s.primary,u=s.secondary;return r.data.intervals.map((function(e,r){var o=Object(q.getPreviousDate)(e.date_start,c.after,u.after,t.compare,i),s=a.data.intervals[r];return{date:Object(g.format)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(c.label," (").concat(c.range,")"),labelDate:e.date_start,value:e.subtotals[n.key]||0},secondary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:o.format("YYYY-MM-DD HH:mm:ss"),value:s&&s.subtotals[n.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(_.get)(t,["data","totals",a.key],null),secondary:Object(_.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var n=this.props,o=n.emptySearchResults,i=n.filterParam,s=n.interactiveLegend,c=n.itemsLabel,u=n.legendPosition,l=n.path,m=n.query,d=n.selectedChart,p=n.showHeaderControls,y=n.primaryData,v=Object(q.getIntervalForQuery)(m),g=Object(q.getAllowedIntervalsForQuery)(m),h=Object(q.getDateFormatsForInterval)(v,y.data.intervals.length),_=o?Object(b.__)("No data for the current search","woocommerce-admin"):Object(b.__)("No data for the selected date range","woocommerce-admin"),O=this.context,j=O.formatAmount,D=O.getCurrencyConfig;return Object(f.createElement)(R.Chart,{allowedIntervals:g,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:_,filterParam:i,interactiveLegend:s,interval:v,isRequesting:t,itemsLabel:c,legendPosition:u,legendTotals:a,mode:e,path:l,query:m,screenReaderFormat:h.screenReaderFormat,showHeaderControls:p,title:d.label,tooltipLabelFormat:h.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(w.getTooltipValueFormat)(d.type,j),chartType:Object(q.getChartTypeForQuery)(m),valueType:d.type,xFormat:h.xFormat,x2Format:h.x2Format,currency:D()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(f.createElement)(S.a,{isError:!0});var a=t||r.isRequesting,n=this.getItemChartData();return this.renderChart("item-comparison",a,n)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(f.createElement)(S.a,{isError:!0});var n=t||r.isRequesting||a.isRequesting,o=this.getTimeChartData(),i=this.getTimeChartTotals();return this.renderChart("time-comparison",n,o,i)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(f.Component);F.contextType=D.a,F.propTypes={filters:j.a.array,isRequesting:j.a.bool,itemsLabel:j.a.string,limitProperties:j.a.array,mode:j.a.string,path:j.a.string.isRequired,primaryData:j.a.object,query:j.a.object.isRequired,secondaryData:j.a.object,selectedChart:j.a.shape({key:j.a.string.isRequired,label:j.a.string.isRequired,order:j.a.oneOf(["asc","desc"]),orderby:j.a.string,type:j.a.oneOf(["average","number","currency"]).isRequired}).isRequired},F.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(v.compose)(Object(h.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.filters,o=t.isRequesting,i=t.limitProperties,s=t.query,c=t.advancedFilters,u=i||[a],l=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var n=t.slice(0),o=n.pop();if(o.showFilters(r,a)){var i=Object(C.flattenFilters)(o.filters),s=r[o.param]||o.defaultValue||"all";return Object(_.find)(i,{value:s})}return e(n,r,a)}(n,s),m=Object(_.get)(l,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(_.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(_.get)(e,["chartMode"])}return null}(l,s)||"time-comparison",p=e(w.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,y={mode:d,filterParam:m,defaultDateRange:p};if(o)return y;var f=u.some((function(e){return s[e]&&s[e].length}));if(s.search&&!f)return E(E({},y),{},{emptySearchResults:!0});var b=r&&r.map((function(e){return e.key})),v=Object(w.getReportChartData)({endpoint:a,dataType:"primary",query:s,select:e,limitBy:u,filters:n,advancedFilters:c,defaultDateRange:p,fields:b});if("item-comparison"===d)return E(E({},y),{},{primaryData:v});var g=Object(w.getReportChartData)({endpoint:a,dataType:"secondary",query:s,select:e,limitBy:u,filters:n,advancedFilters:c,defaultDateRange:p,fields:b});return E(E({},y),{},{primaryData:v,secondaryData:g})})))(F)},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(3);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(a.find)(t,{key:e});return r||t[0]}},503:function(e,t,r){"use strict";var a=r(12),n=r.n(a),o=r(13),i=r.n(o),s=r(14),c=r.n(s),u=r(15),l=r.n(u),m=r(7),d=r.n(m),p=r(0),y=r(2),f=r(20),b=r(11),v=r(1),g=r.n(v),h=r(21),_=r(46),O=r(142),j=r(22),R=r(29),w=r(27),q=r(498),D=r(497);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var C=function(e){c()(r,e);var t=S(r);function r(){return n()(this,r),t.apply(this,arguments)}return i()(r,[{key:"formatVal",value:function(e,t){var r=this.context,a=r.formatAmount,n=r.getCurrencyConfig;return"currency"===t?a(e):Object(O.formatValue)(n(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,a=r.emptySearchResults,n=r.summaryData.totals,o=n.primary?n.primary[e]:0,i=n.secondary?n.secondary[e]:0,s=a?0:o,c=a?0:i;return{delta:Object(O.calculateDelta)(s,c),prevValue:this.formatVal(c,t),value:this.formatVal(s,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,a=t.query,n=t.selectedChart,o=t.summaryData,i=t.endpoint,s=t.report,c=t.defaultDateRange,u=o.isError,l=o.isRequesting;if(u)return Object(p.createElement)(q.a,{isError:!0});if(l)return Object(p.createElement)(_.SummaryListPlaceholder,{numberOfItems:r.length});var m=Object(R.getDateParamsFromQuery)(a,c).compare;return Object(p.createElement)(_.SummaryList,null,(function(t){var a=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,c=t.orderby,u=t.label,l=t.type,d={chart:r};c&&(d.orderby=c),o&&(d.order=o);var f=Object(h.getNewPath)(d),b=n.key===r,v=e.getValues(r,l),g=v.delta,O=v.prevValue,j=v.value;return Object(p.createElement)(_.SummaryNumber,{key:r,delta:g,href:f,label:u,prevLabel:"previous_period"===m?Object(y.__)("Previous Period:","woocommerce-admin"):Object(y.__)("Previous Year:","woocommerce-admin"),prevValue:O,selected:b,value:j,onLinkClickCallback:function(){a&&a(),Object(w.recordEvent)("analytics_chart_tab_click",{report:s||i,key:r})}})}))}))}}]),r}(p.Component);C.propTypes={charts:g.a.array.isRequired,endpoint:g.a.string.isRequired,limitProperties:g.a.array,query:g.a.object.isRequired,selectedChart:g.a.shape({key:g.a.string.isRequired,label:g.a.string.isRequired,order:g.a.oneOf(["asc","desc"]),orderby:g.a.string,type:g.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:g.a.object,report:g.a.string},C.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},C.contextType=D.a,t.a=Object(f.compose)(Object(b.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.limitProperties,o=t.query,i=t.filters,s=t.advancedFilters,c=n||[a],u=c.some((function(e){return o[e]&&o[e].length}));if(o.search&&!u)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),m=e(j.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(j.getSummaryNumbers)({endpoint:a,query:o,select:e,limitBy:c,filters:i,advancedFilters:s,defaultDateRange:m,fields:l}),defaultDateRange:m}})))(C)},519:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s}));var a=r(2),n=r(41),o=Object(n.applyFilters)("woocommerce_admin_revenue_report_charts",[{key:"gross_sales",label:Object(a.__)("Gross Sales","woocommerce-admin"),order:"desc",orderby:"gross_sales",type:"currency"},{key:"refunds",label:Object(a.__)("Returns","woocommerce-admin"),order:"desc",orderby:"refunds",type:"currency"},{key:"coupons",label:Object(a.__)("Coupons","woocommerce-admin"),order:"desc",orderby:"coupons",type:"currency"},{key:"net_revenue",label:Object(a.__)("Net Sales","woocommerce-admin"),orderby:"net_revenue",type:"currency"},{key:"taxes",label:Object(a.__)("Taxes","woocommerce-admin"),order:"desc",orderby:"taxes",type:"currency"},{key:"shipping",label:Object(a.__)("Shipping","woocommerce-admin"),orderby:"shipping",type:"currency"},{key:"total_sales",label:Object(a.__)("Total Sales","woocommerce-admin"),order:"desc",orderby:"total_sales",type:"currency"}]),i=Object(n.applyFilters)("woocommerce_admin_revenue_report_filters",[]),s=Object(n.applyFilters)("woocommerce_admin_revenue_report_advanced_filters",{})}}]);