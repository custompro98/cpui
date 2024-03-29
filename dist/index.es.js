import we from "react";
function fr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var X = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function cr() {
  if (xe)
    return N;
  xe = 1;
  var i = we, f = Symbol.for("react.element"), v = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, w = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(g, b, C) {
    var E, x = {}, O = null, I = null;
    C !== void 0 && (O = "" + C), b.key !== void 0 && (O = "" + b.key), b.ref !== void 0 && (I = b.ref);
    for (E in b)
      R.call(b, E) && !l.hasOwnProperty(E) && (x[E] = b[E]);
    if (g && g.defaultProps)
      for (E in b = g.defaultProps, b)
        x[E] === void 0 && (x[E] = b[E]);
    return { $$typeof: f, type: g, key: O, ref: I, props: x, _owner: w.current };
  }
  return N.Fragment = v, N.jsx = h, N.jsxs = h, N;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function dr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var i = we, f = Symbol.for("react.element"), v = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), g = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), Z = Symbol.iterator, Ce = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var P = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ae = !1, Ne = !1, $e = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === l || $e || e === w || e === C || e === E || Ne || e === I || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === x || e.$$typeof === h || e.$$typeof === g || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case v:
          return "Portal";
        case l:
          return "Profiler";
        case w:
          return "StrictMode";
        case C:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ee(r) + ".Consumer";
          case h:
            var t = e;
            return ee(t._context) + ".Provider";
          case b:
            return We(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case O: {
            var s = e, u = s._payload, o = s._init;
            try {
              return T(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, re, te, ne, ae, oe, ie, se;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ye() {
      {
        if (F === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Le() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: re
            }),
            info: S({}, e, {
              value: te
            }),
            warn: S({}, e, {
              value: ne
            }),
            error: S({}, e, {
              value: ae
            }),
            group: S({}, e, {
              value: oe
            }),
            groupCollapsed: S({}, e, {
              value: ie
            }),
            groupEnd: S({}, e, {
              value: se
            })
          });
        }
        F < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = P.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, Y;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ve();
    }
    function le(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (j) {
              n = j;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (j) {
              n = j;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            n = j;
          }
          e();
        }
      } catch (j) {
        if (j && n && typeof j.stack == "string") {
          for (var a = j.stack.split(`
`), m = n.stack.split(`
`), c = a.length - 1, d = m.length - 1; c >= 1 && d >= 0 && a[c] !== m[d]; )
            d--;
          for (; c >= 1 && d >= 0; c--, d--)
            if (a[c] !== m[d]) {
              if (c !== 1 || d !== 1)
                do
                  if (c--, d--, d < 0 || a[c] !== m[d]) {
                    var _ = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, _), _;
                  }
                while (c >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = u, Le(), Error.prepareStackTrace = s;
      }
      var D = e ? e.displayName || e.name : "", Re = D ? W(D) : "";
      return typeof e == "function" && Y.set(e, Re), Re;
    }
    function Me(e, r, t) {
      return le(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ue(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case C:
          return W("Suspense");
        case E:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Me(e.render);
          case x:
            return L(e.type, r, t);
          case O: {
            var n = e, s = n._payload, u = n._init;
            try {
              return L(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, fe = {}, ce = P.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, s) {
      {
        var u = Function.call.bind(V);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (M(s), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(s), y("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var qe = Array.isArray;
    function J(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Ge(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), de(e);
    }
    var A = P.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, he, G;
    G = {};
    function He(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = T(A.current.type);
        G[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(A.current.type), e.ref), G[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          pe || (pe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          he || (he = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, s, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, s) {
      {
        var u, o = {}, a = null, m = null;
        t !== void 0 && (ve(t), a = "" + t), Ke(r) && (ve(r.key), a = "" + r.key), He(r) && (m = r.ref, Xe(r, s));
        for (u in r)
          V.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || m) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, d), m && Qe(o, d);
        }
        return er(e, a, m, s, n, A.current, o);
      }
    }
    var z = P.ReactCurrentOwner, be = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function ye() {
      {
        if (z.current) {
          var e = T(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var me = {};
    function nr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + T(e._owner.type) + "."), k(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && ge(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Pe(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              K(o.value) && ge(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var s = T(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function _e(e, r, t, n, s, u) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = tr(s);
          m ? a += m : a += ye();
          var c;
          e === null ? c = "null" : J(e) ? c = "array" : e !== void 0 && e.$$typeof === f ? (c = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var d = rr(e, r, t, s, u);
        if (d == null)
          return d;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (J(_)) {
                for (var D = 0; D < _.length; D++)
                  Ee(_[D], e);
                Object.freeze && Object.freeze(_);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(_, e);
        }
        return e === R ? or(d) : ar(d), d;
      }
    }
    function ir(e, r, t) {
      return _e(e, r, t, !0);
    }
    function sr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    $.Fragment = R, $.jsx = ur, $.jsxs = lr;
  }()), $;
}
process.env.NODE_ENV === "production" ? X.exports = cr() : X.exports = dr();
var p = X.exports;
function Oe(i) {
  throw new Error(`Unexpected object - ${i}`);
}
function vr({ children: i, type: f }) {
  switch (f) {
    case "primary":
      return /* @__PURE__ */ p.jsx("h1", { className: "col-span-full font-serif text-3xl font-extrabold", children: i });
    case "secondary":
      return /* @__PURE__ */ p.jsx("h2", { className: "pb-8 font-serif text-2xl font-bold", children: i });
    case "section":
      return /* @__PURE__ */ p.jsx("h3", { className: "pb-4 font-serif text-xl font-semibold", children: i });
    default:
      Oe(f);
  }
}
function gr({ title: i, content: f }) {
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(vr, { type: "section", children: i }),
    /* @__PURE__ */ p.jsx("article", { children: f })
  ] });
}
function pr({ children: i }) {
  return /* @__PURE__ */ p.jsx("thead", { className: "h-10 bg-black text-white", children: /* @__PURE__ */ p.jsx("tr", { children: i }) });
}
function hr({ children: i }) {
  return /* @__PURE__ */ p.jsx("tbody", { children: i });
}
var Se = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var f = {}.hasOwnProperty;
    function v() {
      for (var l = "", h = 0; h < arguments.length; h++) {
        var g = arguments[h];
        g && (l = w(l, R(g)));
      }
      return l;
    }
    function R(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return v.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var h = "";
      for (var g in l)
        f.call(l, g) && l[g] && (h = w(h, g));
      return h;
    }
    function w(l, h) {
      return h ? l ? l + " " + h : l + h : l;
    }
    i.exports ? (v.default = v, i.exports = v) : window.classNames = v;
  })();
})(Se);
var br = Se.exports;
const yr = /* @__PURE__ */ fr(br);
function je({ type: i, children: f, align: v }) {
  const R = yr({
    "p-2": !0,
    "text-left": !v || v === "left",
    "text-center": v === "center",
    "text-right": v === "right"
  });
  switch (i) {
    case "head":
      return /* @__PURE__ */ p.jsx("th", { className: R, children: f });
    case "body":
      return /* @__PURE__ */ p.jsx("td", { className: R, children: f });
    default:
      Oe(i);
  }
}
function Er({ data: i }) {
  return /* @__PURE__ */ p.jsxs("table", { className: "border border-black text-left shadow shadow-gray-300", children: [
    /* @__PURE__ */ p.jsx(pr, { children: i.columns.map((f) => /* @__PURE__ */ p.jsx(je, { type: "head", align: f.align, children: f.title }, f.key)) }),
    /* @__PURE__ */ p.jsx(hr, { children: i.rows.map((f) => /* @__PURE__ */ p.jsx(
      "tr",
      {
        className: "odd:bg-white even:bg-slate-200 hover:bg-slate-300",
        children: i.columns.map((v) => /* @__PURE__ */ p.jsx(
          je,
          {
            type: "body",
            align: v.align,
            children: f.value[v.key]
          },
          `${f.key.toString()}-${v.key}`
        ))
      },
      f.key
    )) })
  ] });
}
export {
  vr as Heading,
  gr as Section,
  Er as Table
};
//# sourceMappingURL=index.es.js.map
