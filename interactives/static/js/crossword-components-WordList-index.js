/*! For license information please see crossword-components-WordList-index.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{235:function(e,t,r){"use strict";r.r(t);var n=r(31),o=r(32),u=r(254),c=r(252),i=r(253),f=r(251),a=r.n(f),l=r(357),s=r.n(l),p=r(258),y=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(u.a)(this,Object(c.a)(t).call(this))).words=[],e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"focusWord",value:function(e){this.words[e].focus()}},{key:"render",value:function(){var e=this,t=this.props,r=t.title,n=t.list,o=t.onFocus,u=t.onBlur,c=t.onKeyUp,i=t.completeWords,f=t.isPreview,l=t.complete;return a.a.createElement("div",{className:s.a.wordList},a.a.createElement("span",{className:s.a.title},r),a.a.createElement("ul",null,n.map((function(t,n){return a.a.createElement("li",{ref:function(t){t&&-1===e.words.indexOf(t)&&e.words.push(t)},key:"li".concat(n),onKeyUp:function(e){e.preventDefault(),c(t.itemsWordIndex,e)},onKeyDown:function(e){[p.a.DOWN,p.a.UP,p.a.RIGHT,p.a.LEFT,p.a.BACKSPACE,p.a.DELETE,p.a.SPACEBAR].indexOf(e.keyCode)>-1&&e.preventDefault()},onBlur:function(){u()},onFocus:function(e){return o(e,t.itemsWordIndex,r)},tabIndex:i.indexOf(t.itemsWordIndex)>-1&&!l?-1:0,className:i.indexOf(t.itemsWordIndex)>-1&&!f?s.a.correct:""},a.a.createElement("p",{key:"p".concat(n)},a.a.createElement("span",{key:"span".concat(n)},"".concat(t.number,"."))," ".concat(t.clue)))}))))}}]),t}(a.a.Component),d=function(e){function t(){return Object(n.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"focusWord",value:function(e,t){"across"===e?this.refs.across.focusWord(t):"down"===e&&this.refs.down.focusWord(t)}},{key:"render",value:function(){var e=this.props,t=e.downList,r=e.acrossList,n=e.onFocus,o=e.onBlur,u=e.onWordKeyUp,c=e.completeWords,i=e.isPreview,f=e.complete;return a.a.createElement("div",{className:s.a.wordListContainer},a.a.createElement(y,{ref:"across",isPreview:i,completeWords:c,onKeyUp:u,onBlur:o,onFocus:n,list:r,title:"Across",complete:f}),a.a.createElement(y,{ref:"down",isPreview:i,completeWords:c,onKeyUp:u,onBlur:o,onFocus:n,list:t,title:"Down",complete:f}))}}]),t}(a.a.Component);t.default=d},251:function(e,t,r){"use strict";e.exports=r(371)},252:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},253:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(363);function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(n.a)(e,t)}},254:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}var u=r(256);function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(u.a)(e):t}r.d(t,"a",(function(){return c}))},256:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},258:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_ADD:107,NUMPAD_ENTER:108,NUMPAD_SUBTRACT:109,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,COLON:186,EQUALS:187,UNDERSCORE:189,QUESTION_MARK:191,TILDE:192,OPEN_BRACKET:219,BACKWARD_SLASH:220,CLOSED_BRACKET:221,QUOTES:222,LESS_THAN:188,GREATER_THAN:190,BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,CAPS_LOCK:20,ESC:27,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,HELP:47,NUM_LOCK:144}},330:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,f=c(e),a=1;a<arguments.length;a++){for(var l in r=Object(arguments[a]))o.call(r,l)&&(f[l]=r[l]);if(n){i=n(r);for(var s=0;s<i.length;s++)u.call(r,i[s])&&(f[i[s]]=r[i[s]])}}return f}},357:function(e,t,r){e.exports={cardContentWidth:"800px",primaryColor:"#000",secondaryColor:"#c0c0c0",wordListContainer:"WordList_wordListContainer__2pE11",wordList:"WordList_wordList__1OMGN",correct:"WordList_correct__3UrNz",title:"WordList_title__TpS2A"}},363:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"a",(function(){return n}))},371:function(e,t,r){"use strict";var n=r(330),o="function"===typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var b="function"===typeof Symbol&&Symbol.iterator;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function h(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||v}function O(){}function S(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||v}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(E(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=h.prototype;var w=S.prototype=new O;w.constructor=S,n(w,h.prototype),w.isPureReactComponent=!0;var P={current:null},A={current:null},C=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var a=Array(f),l=0;l<f;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:A.current}}function R(e){return"object"===typeof e&&null!==e&&e.$$typeof===u}var U=/\/+/g,D=[];function g(e,t,r,n){if(D.length){var o=D.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function k(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function L(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var f=!1;if(null===t)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case u:case c:f=!0}}if(f)return n(o,t,""===r?"."+T(t,0):r),1;if(f=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var l=r+T(i=t[a],a);f+=e(i,l,n,o)}else if(null===t||"object"!==typeof t?l=null:l="function"===typeof(l=b&&t[b]||t["@@iterator"])?l:null,"function"===typeof l)for(t=l.call(t),a=0;!(i=t.next()).done;)f+=e(i=i.value,l=r+T(i,a++),n,o);else if("object"===i)throw n=""+t,Error(E(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return f}(e,"",t,r)}function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function x(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(U,"$&/")+"/")+r)),n.push(e))}function I(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(U,"$&/")+"/"),L(e,F,t=g(t,u,n,o)),k(t)}function M(){var e=P.current;if(null===e)throw Error(E(321));return e}var W={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;L(e,x,t=g(null,null,t,r)),k(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw Error(E(143));return e}},createRef:function(){return{current:null}},Component:h,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return M().useCallback(e,t)},useContext:function(e,t){return M().useContext(e,t)},useEffect:function(e,t){return M().useEffect(e,t)},useImperativeHandle:function(e,t,r){return M().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return M().useLayoutEffect(e,t)},useMemo:function(e,t){return M().useMemo(e,t)},useReducer:function(e,t,r){return M().useReducer(e,t,r)},useRef:function(e){return M().useRef(e)},useState:function(e){return M().useState(e)},Fragment:i,Profiler:a,StrictMode:f,Suspense:y,createElement:N,cloneElement:function(e,t,r){if(null===e||void 0===e)throw Error(E(267,e));var o=n({},e.props),c=e.key,i=e.ref,f=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,f=A.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)C.call(t,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){a=Array(l);for(var s=0;s<l;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:f}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:A,IsSomeRendererActing:{current:!1},assign:n}},$={default:W},B=$&&W||$;e.exports=B.default||B}}]);
//# sourceMappingURL=crossword-components-WordList-index.js.map