(self.webpackChunktour_project=self.webpackChunktour_project||[]).push([[112],{5112:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>j});var r=o(2791),n=o(2007),s=o.n(n);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function w(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=d(t);if(e){var n=d(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return function(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?f(t):e}(this,o)}}var h={return:13,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,space:32};h.keyCodes=Object.keys(h).reduce((function(t,e){return t[h[e]]=e,t}),{});var v={"faq-row-wrapper":"styles_faq-row-wrapper__3vA1D","faq-row":"styles_faq-row__2YF3c","row-body":"styles_row-body__1NvUo","row-title":"styles_row-title__1YiiY","no-tabfocus":"styles_no-tabfocus__1HmyD","row-title-text":"styles_row-title-text__1MuhU","icon-wrapper":"styles_icon-wrapper__2cftw",closed:"styles_closed__39w54","row-content":"styles_row-content__QOGZd",animate:"styles_animate__3ecdr",static:"styles_static__3chYW",expanded:"styles_expanded__3elPy",expanding:"styles_expanding__2OAFB","row-content-text":"styles_row-content-text__2sgAB"};!function(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(".styles_faq-row-wrapper__3vA1D {\n  background-color: var(--faq-bg-color, white); }\n  .styles_faq-row-wrapper__3vA1D h2 {\n    margin: 0;\n    color: var(--title-text-color, black);\n    font-size: var(--title-text-size, 30px); }\n  .styles_faq-row-wrapper__3vA1D .styles_faq-row__2YF3c {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n    border-bottom: 1px solid #ccc; }\n  .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c {\n    flex-direction: column;\n    position: relative; }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      color: var(--row-title-color, black);\n      font-size: var(--row-title-text-size, large);\n      cursor: pointer;\n      align-items: center; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_no-tabfocus__1HmyD {\n        outline: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_row-title-text__1MuhU {\n        padding-right: 3em; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw {\n        max-width: 25px;\n        max-height: 25px;\n        margin: 0;\n        padding: 0;\n        color: var(--arrow-color, black);\n        transform: rotate(0deg);\n        transition: transform var(--transition-duration, 0.3s);\n        position: absolute;\n        top: 13px;\n        right: 12px; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          width: 100%;\n          height: 100%; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          fill: var(--arrow-color, black); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd {\n        visibility: hidden; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_animate__3ecdr {\n          opacity: 0;\n          transition: height var(--transition-duration, 0.3s); }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd {\n        visibility: visible; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: block; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanding__2OAFB .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd {\n      overflow: hidden;\n      transition: height var(--transition-duration, 0.3s);\n      transition-timing-function: var(--timing-function, ease); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd .styles_row-content-text__2sgAB {\n        color: var(--row-content-color, black);\n        font-size: var(--row-content-text-size, medium);\n        padding: var(--row-content-padding-top, 0) var(--row-content-padding-right, 0) var(--row-content-padding-bottom, 0) var(--row-content-padding-left, 0); }\n");var g=function(t){w(o,r.PureComponent);var e=u(o);function o(){var t;a(this,o);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return c(f(t=e.call.apply(e,[this].concat(s))),"state",{isExpanded:!1,ref:r.createRef(),rowRef:r.createRef(),height:0,rowClassName:"closed"}),c(f(t),"finishTransition",(function(){var e=t.state.isExpanded;t.setState({rowClassName:e?"expanded":"closed"})})),c(f(t),"toggle",(function(e){t.setState((function(){return{isExpanded:e}}))})),c(f(t),"expand",(function(){t.setState((function(t){return{isExpanded:!t.isExpanded}}))})),c(f(t),"keyPress",(function(e){var o=e.keyCode?e.keyCode:e.which;switch(h.keyCodes[o]){case"space":case"return":e.preventDefault(),e.stopPropagation(),t.expand()}})),c(f(t),"setHeight",(function(){var e=t.state,o=e.ref,r=e.isExpanded,n=o.current.scrollHeight;t.setState({height:r?n:0})})),t}return l(o,[{key:"getSnapshotBeforeUpdate",value:function(t,e){var o=e.isExpanded,r=this.state.isExpanded,n=this.props.config,s=(n=void 0===n?{}:n).animate,a=void 0===s||s;return r!==o?{rowClassName:r?a?"expanding":"expanded":a?"closing":"closed"}:null}},{key:"componentDidUpdate",value:function(t,e,o){var r=this.props.config,n=(r=void 0===r?{}:r).animate,s=void 0===n||n;null!==o&&this.setState(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach((function(e){c(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},o),s?this.setHeight:void 0)}},{key:"componentDidMount",value:function(){var t=this,e=this.state.rowRef;if(this.props.openOnload&&this.expand(),this.props.getRowOptions){var o={expand:function(){t.toggle(!0)},close:function(){t.toggle(!1)},scrollIntoView:function(t){t?e.current.scrollIntoView(t):e.current.scrollIntoView()}};this.props.getRowOptions(o)}}},{key:"render",value:function(){var t=this.props,e=t.data,o=e.title,n=e.content,s=t.config,a=(s=void 0===s?{}:s).animate,i=void 0===a||a,l=s.arrowIcon,c=s.expandIcon,p=s.collapseIcon,w=s.tabFocus,d=void 0!==w&&w,y=this.state,f=y.isExpanded,u=y.ref,h=y.height,g=y.rowClassName,m=y.rowRef,b={onClick:this.expand,role:"button","aria-expanded":f,"aria-controls":"react-faq-rowcontent-".concat(this.props.rowid),onKeyPress:this.keyPress,onKeyDown:this.keyPress};d&&(b.tabIndex=0);var x={role:"region",id:"react-faq-rowcontent-".concat(this.props.rowid),"aria-expanded":f,"aria-hidden":!f,onTransitionEnd:this.finishTransition};i&&(x.style={height:h});var O,q=["row-title",g,v["row-title"],v[g],d?"":v["no-tabfocus"]].filter(Boolean).join(" ");O=c&&p?f?p:c:l||r.createElement("div",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'},className:"arrow-image ".concat(v["arrow-image"]),alt:"Expand arrow"});var Y=[v["row-content"],"row-content",i?v.animate:v.static].join(" "),C=[v["row-content-text"],"row-content-text"].join(" "),j=n&&"string"==typeof n?r.createElement("div",{className:C,dangerouslySetInnerHTML:{__html:n}}):r.createElement("div",{className:C},n);return r.createElement("section",{className:"faq-row ".concat(v["faq-row"]),role:"listitem",ref:m},r.createElement("div",_({className:q},b),r.createElement("div",{className:"row-title-text ".concat(v["row-title-text"]),id:"react-faq-rowtitle-".concat(this.props.rowid)},o),r.createElement("span",{className:"icon-wrapper ".concat(v["icon-wrapper"]),"aria-hidden":"true"},O)),r.createElement("div",_({className:Y},x,{ref:u}),j))}}]),o}();c(g,"propTypes",{config:s().object,data:s().object,rowid:s().number,getRowOptions:s().func,openOnload:s().bool});var m=function(t){w(o,r.PureComponent);var e=u(o);function o(){var t;a(this,o);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return c(f(t=e.call.apply(e,[this].concat(n))),"state",{rowsOption:[]}),t}return l(o,[{key:"componentDidMount",value:function(){this.props.getRowOptions&&this.props.getRowOptions(this.state.rowsOption)}},{key:"render",value:function(){var t=this,e=this.props.data||{},o=e.title,n=e.rows,s=void 0===n?[]:n,a=this.props,i=a.styles,l=void 0===i?{}:i,c=a.config,_=((c=void 0===c?{}:c).animate,c.openOnload),p={"--faq-bg-color":l.bgColor,"--title-text-color":l.titleTextColor,"--title-text-size":l.titleTextSize,"--row-title-color":l.rowTitleColor,"--row-title-text-size":l.rowTitleTextSize,"--row-content-color":l.rowContentColor,"--row-content-text-size":l.rowContentTextSize,"--row-content-padding-top":l.rowContentPaddingTop,"--row-content-padding-bottom":l.rowContentPaddingBottom,"--row-content-padding-right":l.rowContentPaddingRight,"--row-content-padding-left":l.rowContentPaddingLeft,"--arrow-color":l.arrowColor,"--transition-duration":l.transitionDuration,"--timing-function":l.timingFunc},w="faq-row-wrapper ".concat(v["faq-row-wrapper"]),d="faq-title ".concat(v["faq-row"]),y="faq-body ".concat(v["row-body"]);return r.createElement("div",{className:w,style:p},o?r.createElement("section",{className:d},r.createElement("h2",null,o)):null,s.length?r.createElement("section",{className:y,role:"list"},s.map((function(e,o){return r.createElement(g,{openOnload:_===o,data:e,key:o,rowid:o+1,config:t.props.config,getRowOptions:function(e){return t.state.rowsOption[o]=e}})}))):null)}}]),o}();c(m,"propTypes",{data:s().object,styles:s().object,config:s().object,getRowOptions:s().func});const b=m,x={rows:[{title:"Is It Save ?",content:"Iraq has an unfortunate reputation, which will take a long time to resolve. However, that\u2019s why I\u2019m here! I\u2019ll show you Iraq today, a land inhabited by beautiful Iraqis who carry on with their lives and show nothing but kindness to any foreign guest they may bump into. Despite trouble in the past, safety in Iraq has significantly improved. Please note: Iraqi Kurdistan has always been relatively safe and has separate borders with the rest of the country."},{title:"How Do I Get A Visa For Iraq ? ",content:"Iraq has now introduced a visa on arrival scheme for citizens of the EU, UK, US, Canada, Australia, New Zealand, Switzerland, Russia, China Japan & South Korea. If you are not from one of these countries then we will apply for a visa on your behalf. An invitation letter is issued and you can bring this to your local embassy to apply for the visa."},{title:"What Is The Group Size ?",content:"Our groups are capped at 10 people for added flexibility and comfort."},{title:"Do I Need Travel Insurance?  ",content:"The security situation in Iraq has improved significantly in recent years. However, I recommend you speak with a reputable travel insurance provider in your home country before you travel to Iraq. Travel insurance provides financial protection if you face certain problems when you're travelling. It covers a range of possibilities, from lost luggage to the cost of medical care if you become ill or have an accident."}]};var O=o(184);const q=function(t){let{title:e,bgColor:o,titleColor:r}=t;return(0,O.jsxs)("div",{className:"flex justify-center items-center place-content-start py-20 w-4/5 mx-auto",children:[(0,O.jsx)("div",{className:" h-1 w-10 md:w-48",style:{backgroundColor:o}}),(0,O.jsx)("h3",{className:"text-center text-lg md:text-2xl font-bold w-4/6 md:w-2/5 mx-5 md:mx-10",style:{color:r},children:e}),(0,O.jsx)("div",{className:" h-1 w-10 md:w-48",style:{backgroundColor:o}})]})},Y={bgColor:"#E3D5CB",titleTextColor:"#804216",rowTitleColor:"#804216",rowContentColor:"#A0836E",arrowColor:"#804216",transitionDuration:"1s",timingFunc:"ease"},C={animate:!0,arrowIcon:"+",tabFocus:!0};const j=function(){return(0,O.jsxs)("section",{className:"bg-lightBrown p-10 md:px-40",children:[(0,O.jsx)(q,{titleColor:"#804216",bgColor:"#804216",title:"Frequently Asked Questions"}),(0,O.jsx)(b,{data:x,styles:Y,config:C})]})}},888:(t,e,o)=>{"use strict";var r=o(9047);function n(){}function s(){}s.resetWarningCache=n,t.exports=function(){function t(t,e,o,n,s,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:n};return o.PropTypes=o,o}},2007:(t,e,o)=>{t.exports=o(888)()},9047:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=112.f04747a3.chunk.js.map