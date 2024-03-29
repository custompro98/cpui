(function(x,C){typeof exports=="object"&&typeof module<"u"?C(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],C):(x=typeof globalThis<"u"?globalThis:x||self,C(x["react-beautiful-timeline"]={},x.React))})(this,function(x,C){"use strict";function ke(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var q={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function De(){if(ee)return N;ee=1;var o=C,l=Symbol.for("react.element"),p=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,S=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(g,b,k){var E,T={},w=null,Y=null;k!==void 0&&(w=""+k),b.key!==void 0&&(w=""+b.key),b.ref!==void 0&&(Y=b.ref);for(E in b)R.call(b,E)&&!f.hasOwnProperty(E)&&(T[E]=b[E]);if(g&&g.defaultProps)for(E in b=g.defaultProps,b)T[E]===void 0&&(T[E]=b[E]);return{$$typeof:l,type:g,key:w,ref:Y,props:T,_owner:S.current}}return N.Fragment=p,N.jsx=h,N.jsxs=h,N}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Fe(){return re||(re=1,process.env.NODE_ENV!=="production"&&function(){var o=C,l=Symbol.for("react.element"),p=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),oe=Symbol.iterator,Le="@@iterator";function Me(e){if(e===null||typeof e!="object")return null;var r=oe&&e[oe]||e[Le];return typeof r=="function"?r:null}var D=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function y(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ve("error",e,t)}}function Ve(e,r,t){{var n=D.ReactDebugCurrentFrame,s=n.getStackAddendum();s!==""&&(r+="%s",t=t.concat([s]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ue=!1,Be=!1,qe=!1,Je=!1,Ge=!1,se;se=Symbol.for("react.module.reference");function ze(e){return!!(typeof e=="string"||typeof e=="function"||e===R||e===f||Ge||e===S||e===k||e===E||Je||e===Y||Ue||Be||qe||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===T||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b||e.$$typeof===se||e.getModuleId!==void 0))}function He(e,r,t){var n=e.displayName;if(n)return n;var s=r.displayName||r.name||"";return s!==""?t+"("+s+")":t}function ue(e){return e.displayName||"Context"}function j(e){if(e==null)return null;if(typeof e.tag=="number"&&y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case p:return"Portal";case f:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case g:var r=e;return ue(r)+".Consumer";case h:var t=e;return ue(t._context)+".Provider";case b:return He(e,e.render,"ForwardRef");case T:var n=e.displayName||null;return n!==null?n:j(e.type)||"Memo";case w:{var s=e,u=s._payload,i=s._init;try{return j(i(u))}catch{return null}}}return null}var P=Object.assign,$=0,fe,le,ce,de,ve,pe,he;function be(){}be.__reactDisabledLog=!0;function Ke(){{if($===0){fe=console.log,le=console.info,ce=console.warn,de=console.error,ve=console.group,pe=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function Xe(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:P({},e,{value:fe}),info:P({},e,{value:le}),warn:P({},e,{value:ce}),error:P({},e,{value:de}),group:P({},e,{value:ve}),groupCollapsed:P({},e,{value:pe}),groupEnd:P({},e,{value:he})})}$<0&&y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=D.ReactCurrentDispatcher,G;function L(e,r,t){{if(G===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var z=!1,M;{var Ze=typeof WeakMap=="function"?WeakMap:Map;M=new Ze}function ye(e,r){if(!e||z)return"";{var t=M.get(e);if(t!==void 0)return t}var n;z=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=J.current,J.current=null,Ke();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(O){n=O}Reflect.construct(e,[],i)}else{try{i.call()}catch(O){n=O}e.call(i.prototype)}}else{try{throw Error()}catch(O){n=O}e()}}catch(O){if(O&&n&&typeof O.stack=="string"){for(var a=O.stack.split(`
`),m=n.stack.split(`
`),c=a.length-1,d=m.length-1;c>=1&&d>=0&&a[c]!==m[d];)d--;for(;c>=1&&d>=0;c--,d--)if(a[c]!==m[d]){if(c!==1||d!==1)do if(c--,d--,d<0||a[c]!==m[d]){var _=`
`+a[c].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),typeof e=="function"&&M.set(e,_),_}while(c>=1&&d>=0);break}}}finally{z=!1,J.current=u,Xe(),Error.prepareStackTrace=s}var A=e?e.displayName||e.name:"",Ce=A?L(A):"";return typeof e=="function"&&M.set(e,Ce),Ce}function Qe(e,r,t){return ye(e,!1)}function er(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function V(e,r,t){if(e==null)return"";if(typeof e=="function")return ye(e,er(e));if(typeof e=="string")return L(e);switch(e){case k:return L("Suspense");case E:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return Qe(e.render);case T:return V(e.type,r,t);case w:{var n=e,s=n._payload,u=n._init;try{return V(u(s),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,me={},ge=D.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(t)}else ge.setExtraStackFrame(null)}function rr(e,r,t,n,s){{var u=Function.call.bind(U);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var m=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw m.name="Invariant Violation",m}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){a=c}a&&!(a instanceof Error)&&(B(s),y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),B(null)),a instanceof Error&&!(a.message in me)&&(me[a.message]=!0,B(s),y("Failed %s type: %s",t,a.message),B(null))}}}var tr=Array.isArray;function H(e){return tr(e)}function nr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ar(e){try{return Ee(e),!1}catch{return!0}}function Ee(e){return""+e}function _e(e){if(ar(e))return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",nr(e)),Ee(e)}var W=D.ReactCurrentOwner,ir={key:!0,ref:!0,__self:!0,__source:!0},Re,xe,K;K={};function or(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function sr(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ur(e,r){if(typeof e.ref=="string"&&W.current&&r&&W.current.stateNode!==r){var t=j(W.current.type);K[t]||(y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',j(W.current.type),e.ref),K[t]=!0)}}function fr(e,r){{var t=function(){Re||(Re=!0,y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function lr(e,r){{var t=function(){xe||(xe=!0,y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var cr=function(e,r,t,n,s,u,i){var a={$$typeof:l,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function dr(e,r,t,n,s){{var u,i={},a=null,m=null;t!==void 0&&(_e(t),a=""+t),sr(r)&&(_e(r.key),a=""+r.key),or(r)&&(m=r.ref,ur(r,s));for(u in r)U.call(r,u)&&!ir.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var c=e.defaultProps;for(u in c)i[u]===void 0&&(i[u]=c[u])}if(a||m){var d=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&fr(i,d),m&&lr(i,d)}return cr(e,a,m,s,n,W.current,i)}}var X=D.ReactCurrentOwner,Te=D.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function je(){{if(X.current){var e=j(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function vr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Oe={};function pr(e){{var r=je();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=pr(r);if(Oe[t])return;Oe[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+j(e._owner.type)+"."),F(e),y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),F(null)}}function we(e,r){{if(typeof e!="object")return;if(H(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Se(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var s=Me(e);if(typeof s=="function"&&s!==e.entries)for(var u=s.call(e),i;!(i=u.next()).done;)Q(i.value)&&Se(i.value,r)}}}function hr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===b||r.$$typeof===T))t=r.propTypes;else return;if(t){var n=j(r);rr(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var s=j(r);y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",s||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function br(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){F(e),y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),F(null);break}}e.ref!==null&&(F(e),y("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}function Pe(e,r,t,n,s,u){{var i=ze(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var m=vr(s);m?a+=m:a+=je();var c;e===null?c="null":H(e)?c="array":e!==void 0&&e.$$typeof===l?(c="<"+(j(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,a)}var d=dr(e,r,t,s,u);if(d==null)return d;if(i){var _=r.children;if(_!==void 0)if(n)if(H(_)){for(var A=0;A<_.length;A++)we(_[A],e);Object.freeze&&Object.freeze(_)}else y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else we(_,e)}return e===R?br(d):hr(d),d}}function yr(e,r,t){return Pe(e,r,t,!0)}function mr(e,r,t){return Pe(e,r,t,!1)}var gr=mr,Er=yr;I.Fragment=R,I.jsx=gr,I.jsxs=Er}()),I}process.env.NODE_ENV==="production"?q.exports=De():q.exports=Fe();var v=q.exports;function te(o){throw new Error(`Unexpected object - ${o}`)}function ne({children:o,type:l}){switch(l){case"primary":return v.jsx("h1",{className:"font-serif text-3xl font-extrabold",children:o});case"secondary":return v.jsx("h2",{className:"pb-8 font-serif text-2xl font-bold",children:o});case"section":return v.jsx("h3",{className:"pb-4 font-serif text-xl font-semibold",children:o});default:te(l)}}function Ae({title:o,content:l}){return v.jsxs(v.Fragment,{children:[v.jsx(ne,{type:"section",children:o}),v.jsx("article",{children:l})]})}function Ne({children:o}){return v.jsx("thead",{className:"h-10 bg-black text-white",children:v.jsx("tr",{children:o})})}function Ie({children:o}){return v.jsx("tbody",{children:o})}var ae={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var l={}.hasOwnProperty;function p(){for(var f="",h=0;h<arguments.length;h++){var g=arguments[h];g&&(f=S(f,R(g)))}return f}function R(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return p.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var h="";for(var g in f)l.call(f,g)&&f[g]&&(h=S(h,g));return h}function S(f,h){return h?f?f+" "+h:f+h:f}o.exports?(p.default=p,o.exports=p):window.classNames=p})()})(ae);var $e=ae.exports;const We=ke($e);function ie({type:o,children:l,align:p}){const R=We({"p-2":!0,"text-left":!p||p==="left","text-center":p==="center","text-right":p==="right"});switch(o){case"head":return v.jsx("th",{className:R,children:l});case"body":return v.jsx("td",{className:R,children:l});default:te(o)}}function Ye({data:o}){return v.jsxs("table",{className:"border border-black text-left shadow shadow-gray-300",children:[v.jsx(Ne,{children:o.columns.map(l=>v.jsx(ie,{type:"head",align:l.align,children:l.title},l.key))}),v.jsx(Ie,{children:o.rows.map(l=>v.jsx("tr",{className:"odd:bg-white even:bg-slate-200 hover:bg-slate-300",children:o.columns.map(p=>v.jsx(ie,{type:"body",align:p.align,children:l.value[p.key]},`${l.key.toString()}-${p.key}`))},l.key))})]})}x.Heading=ne,x.Section=Ae,x.Table=Ye,Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map