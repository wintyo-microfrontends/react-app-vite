function vd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function gd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ll = {}, yd = {
  get exports() {
    return Ll;
  },
  set exports(e) {
    Ll = e;
  }
}, no = {}, P = {}, wd = {
  get exports() {
    return P;
  },
  set exports(e) {
    P = e;
  }
}, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr = Symbol.for("react.element"), Sd = Symbol.for("react.portal"), kd = Symbol.for("react.fragment"), Ed = Symbol.for("react.strict_mode"), xd = Symbol.for("react.profiler"), Cd = Symbol.for("react.provider"), Pd = Symbol.for("react.context"), _d = Symbol.for("react.forward_ref"), Rd = Symbol.for("react.suspense"), Ld = Symbol.for("react.memo"), Nd = Symbol.for("react.lazy"), ia = Symbol.iterator;
function Dd(e) {
  return e === null || typeof e != "object" ? null : (e = ia && e[ia] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Is = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Us = Object.assign, As = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = As, this.updater = n || Is;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $s() {
}
$s.prototype = Hn.prototype;
function ru(e, t, n) {
  this.props = e, this.context = t, this.refs = As, this.updater = n || Is;
}
var lu = ru.prototype = new $s();
lu.constructor = ru;
Us(lu, Hn.prototype);
lu.isPureReactComponent = !0;
var ua = Array.isArray, Bs = Object.prototype.hasOwnProperty, ou = { current: null }, Vs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hs(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      Bs.call(t, r) && !Vs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++)
      a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Vr, type: e, key: o, ref: i, props: l, _owner: ou.current };
}
function Md(e, t) {
  return { $$typeof: Vr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function iu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function zd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var aa = /\/+/g;
function Mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zd("" + e.key) : t.toString(36);
}
function vl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vr:
          case Sd:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Mo(i, 0) : r, ua(l) ? (n = "", e != null && (n = e.replace(aa, "$&/") + "/"), vl(l, t, n, "", function(s) {
      return s;
    })) : l != null && (iu(l) && (l = Md(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(aa, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ua(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Mo(o, u);
      i += vl(o, t, n, a, l);
    }
  else if (a = Dd(e), typeof a == "function")
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, a = r + Mo(o, u++), i += vl(o, t, n, a, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function br(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return vl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Td(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var _e = { current: null }, gl = { transition: null }, Od = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: gl, ReactCurrentOwner: ou };
V.Children = { map: br, forEach: function(e, t, n) {
  br(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return br(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return br(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!iu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
V.Component = Hn;
V.Fragment = kd;
V.Profiler = xd;
V.PureComponent = ru;
V.StrictMode = Ed;
V.Suspense = Rd;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Od;
V.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Us({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ou.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (a in t)
      Bs.call(t, a) && !Vs.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++)
      u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: Vr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
V.createContext = function(e) {
  return e = { $$typeof: Pd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Cd, _context: e }, e.Consumer = e;
};
V.createElement = Hs;
V.createFactory = function(e) {
  var t = Hs.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: _d, render: e };
};
V.isValidElement = iu;
V.lazy = function(e) {
  return { $$typeof: Nd, _payload: { _status: -1, _result: e }, _init: Td };
};
V.memo = function(e, t) {
  return { $$typeof: Ld, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = gl.transition;
  gl.transition = {};
  try {
    e();
  } finally {
    gl.transition = t;
  }
};
V.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function(e, t) {
  return _e.current.useCallback(e, t);
};
V.useContext = function(e) {
  return _e.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return _e.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return _e.current.useEffect(e, t);
};
V.useId = function() {
  return _e.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return _e.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return _e.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return _e.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return _e.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return _e.current.useRef(e);
};
V.useState = function(e) {
  return _e.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return _e.current.useTransition();
};
V.version = "18.2.0";
(function(e) {
  e.exports = V;
})(wd);
const Ws = /* @__PURE__ */ gd(P), ii = /* @__PURE__ */ vd({
  __proto__: null,
  default: Ws
}, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fd = P, jd = Symbol.for("react.element"), Id = Symbol.for("react.fragment"), Ud = Object.prototype.hasOwnProperty, Ad = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $d = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qs(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Ud.call(t, r) && !$d.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: jd, type: e, key: o, ref: i, props: l, _owner: Ad.current };
}
no.Fragment = Id;
no.jsx = Qs;
no.jsxs = Qs;
(function(e) {
  e.exports = no;
})(yd);
const Fe = Ll.jsx, sa = Ll.jsxs;
var ui = {}, ai = {}, Bd = {
  get exports() {
    return ai;
  },
  set exports(e) {
    ai = e;
  }
}, Ae = {}, si = {}, Vd = {
  get exports() {
    return si;
  },
  set exports(e) {
    si = e;
  }
}, Ks = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(_, j) {
    var $ = _.length;
    _.push(j);
    e:
      for (; 0 < $; ) {
        var Q = $ - 1 >>> 1, ue = _[Q];
        if (0 < l(ue, j))
          _[Q] = j, _[$] = ue, $ = Q;
        else
          break e;
      }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0)
      return null;
    var j = _[0], $ = _.pop();
    if ($ !== j) {
      _[0] = $;
      e:
        for (var Q = 0, ue = _.length, dn = ue >>> 1; Q < dn; ) {
          var rt = 2 * (Q + 1) - 1, Yn = _[rt], ct = rt + 1, pn = _[ct];
          if (0 > l(Yn, $))
            ct < ue && 0 > l(pn, Yn) ? (_[Q] = pn, _[ct] = $, Q = ct) : (_[Q] = Yn, _[rt] = $, Q = rt);
          else if (ct < ue && 0 > l(pn, $))
            _[Q] = pn, _[ct] = $, Q = ct;
          else
            break e;
        }
    }
    return j;
  }
  function l(_, j) {
    var $ = _.sortIndex - j.sortIndex;
    return $ !== 0 ? $ : _.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var a = [], s = [], h = 1, m = null, c = 3, y = !1, k = !1, w = !1, R = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var j = n(s); j !== null; ) {
      if (j.callback === null)
        r(s);
      else if (j.startTime <= _)
        r(s), j.sortIndex = j.expirationTime, t(a, j);
      else
        break;
      j = n(s);
    }
  }
  function g(_) {
    if (w = !1, p(_), !k)
      if (n(a) !== null)
        k = !0, Kn(C);
      else {
        var j = n(s);
        j !== null && ie(g, j.startTime - _);
      }
  }
  function C(_, j) {
    k = !1, w && (w = !1, d(z), z = -1), y = !0;
    var $ = c;
    try {
      for (p(j), m = n(a); m !== null && (!(m.expirationTime > j) || _ && !le()); ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          m.callback = null, c = m.priorityLevel;
          var ue = Q(m.expirationTime <= j);
          j = e.unstable_now(), typeof ue == "function" ? m.callback = ue : m === n(a) && r(a), p(j);
        } else
          r(a);
        m = n(a);
      }
      if (m !== null)
        var dn = !0;
      else {
        var rt = n(s);
        rt !== null && ie(g, rt.startTime - j), dn = !1;
      }
      return dn;
    } finally {
      m = null, c = $, y = !1;
    }
  }
  var M = !1, D = null, z = -1, Y = 5, I = -1;
  function le() {
    return !(e.unstable_now() - I < Y);
  }
  function Ye() {
    if (D !== null) {
      var _ = e.unstable_now();
      I = _;
      var j = !0;
      try {
        j = D(!0, _);
      } finally {
        j ? st() : (M = !1, D = null);
      }
    } else
      M = !1;
  }
  var st;
  if (typeof f == "function")
    st = function() {
      f(Ye);
    };
  else if (typeof MessageChannel < "u") {
    var Xr = new MessageChannel(), Po = Xr.port2;
    Xr.port1.onmessage = Ye, st = function() {
      Po.postMessage(null);
    };
  } else
    st = function() {
      R(Ye, 0);
    };
  function Kn(_) {
    D = _, M || (M = !0, st());
  }
  function ie(_, j) {
    z = R(function() {
      _(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, Kn(C));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return c;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(_) {
    switch (c) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = c;
    }
    var $ = c;
    c = j;
    try {
      return _();
    } finally {
      c = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, j) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var $ = c;
    c = _;
    try {
      return j();
    } finally {
      c = $;
    }
  }, e.unstable_scheduleCallback = function(_, j, $) {
    var Q = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Q + $ : Q) : $ = Q, _) {
      case 1:
        var ue = -1;
        break;
      case 2:
        ue = 250;
        break;
      case 5:
        ue = 1073741823;
        break;
      case 4:
        ue = 1e4;
        break;
      default:
        ue = 5e3;
    }
    return ue = $ + ue, _ = { id: h++, callback: j, priorityLevel: _, startTime: $, expirationTime: ue, sortIndex: -1 }, $ > Q ? (_.sortIndex = $, t(s, _), n(a) === null && _ === n(s) && (w ? (d(z), z = -1) : w = !0, ie(g, $ - Q))) : (_.sortIndex = ue, t(a, _), k || y || (k = !0, Kn(C))), _;
  }, e.unstable_shouldYield = le, e.unstable_wrapCallback = function(_) {
    var j = c;
    return function() {
      var $ = c;
      c = j;
      try {
        return _.apply(this, arguments);
      } finally {
        c = $;
      }
    };
  };
})(Ks);
(function(e) {
  e.exports = Ks;
})(Vd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ys = P, Ue = si;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Xs = /* @__PURE__ */ new Set(), Cr = {};
function sn(e, t) {
  jn(e, t), jn(e + "Capture", t);
}
function jn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++)
    Xs.add(t[e]);
}
var wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ci = Object.prototype.hasOwnProperty, Hd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ca = {}, fa = {};
function Wd(e) {
  return ci.call(fa, e) ? !0 : ci.call(ca, e) ? !1 : Hd.test(e) ? fa[e] = !0 : (ca[e] = !0, !1);
}
function Qd(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kd(e, t, n, r) {
  if (t === null || typeof t > "u" || Qd(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Re(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new Re(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uu = /[\-:]([a-z])/g;
function au(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    uu,
    au
  );
  ye[t] = new Re(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(uu, au);
  ye[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(uu, au);
  ye[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function su(e, t, n, r) {
  var l = ye.hasOwnProperty(t) ? ye[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kd(t, n, l, r) && (n = null), r || l === null ? Wd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = Ys.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, el = Symbol.for("react.element"), vn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), cu = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), Gs = Symbol.for("react.provider"), Zs = Symbol.for("react.context"), fu = Symbol.for("react.forward_ref"), di = Symbol.for("react.suspense"), pi = Symbol.for("react.suspense_list"), du = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), Js = Symbol.for("react.offscreen"), da = Symbol.iterator;
function bn(e) {
  return e === null || typeof e != "object" ? null : (e = da && e[da] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, zo;
function sr(e) {
  if (zo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zo = t && t[1] || "";
    }
  return `
` + zo + e;
}
var To = !1;
function Oo(e, t) {
  if (!e || To)
    return "";
  To = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var l = s.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var a = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    To = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function Yd(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr("Lazy");
    case 13:
      return sr("Suspense");
    case 19:
      return sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Oo(e.type, !1), e;
    case 11:
      return e = Oo(e.type.render, !1), e;
    case 1:
      return e = Oo(e.type, !0), e;
    default:
      return "";
  }
}
function hi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case gn:
      return "Fragment";
    case vn:
      return "Portal";
    case fi:
      return "Profiler";
    case cu:
      return "StrictMode";
    case di:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zs:
        return (e.displayName || "Context") + ".Consumer";
      case Gs:
        return (e._context.displayName || "Context") + ".Provider";
      case fu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case du:
        return t = e.displayName || null, t !== null ? t : hi(e.type) || "Memo";
      case Rt:
        t = e._payload, e = e._init;
        try {
          return hi(e(t));
        } catch {
        }
    }
  return null;
}
function Xd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hi(t);
    case 8:
      return t === cu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function Vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gd(e) {
  var t = qs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function tl(e) {
  e._valueTracker || (e._valueTracker = Gd(e));
}
function bs(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = qs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Nl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mi(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function pa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ec(e, t) {
  t = t.checked, t != null && su(e, "checked", t, !1);
}
function vi(e, t) {
  ec(e, t);
  var n = Vt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? gi(e, t.type, n) : t.hasOwnProperty("defaultValue") && gi(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ha(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || Nl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function Nn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(E(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ma(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(E(92));
      if (cr(n)) {
        if (1 < n.length)
          throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function tc(e, t) {
  var n = Vt(t.value), r = Vt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function va(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? nc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var nl, rc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (nl = nl || document.createElement("div"), nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = nl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Zd = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function(e) {
  Zd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e];
  });
});
function lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px";
}
function oc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = lc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var Jd = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Si(e, t) {
  if (t) {
    if (Jd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(E(62));
  }
}
function ki(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ei = null;
function pu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xi = null, Dn = null, Mn = null;
function ga(e) {
  if (e = Qr(e)) {
    if (typeof xi != "function")
      throw Error(E(280));
    var t = e.stateNode;
    t && (t = uo(t), xi(e.stateNode, e.type, t));
  }
}
function ic(e) {
  Dn ? Mn ? Mn.push(e) : Mn = [e] : Dn = e;
}
function uc() {
  if (Dn) {
    var e = Dn, t = Mn;
    if (Mn = Dn = null, ga(e), t)
      for (e = 0; e < t.length; e++)
        ga(t[e]);
  }
}
function ac(e, t) {
  return e(t);
}
function sc() {
}
var Fo = !1;
function cc(e, t, n) {
  if (Fo)
    return e(t, n);
  Fo = !0;
  try {
    return ac(e, t, n);
  } finally {
    Fo = !1, (Dn !== null || Mn !== null) && (sc(), uc());
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = uo(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(E(231, t, typeof n));
  return n;
}
var Ci = !1;
if (wt)
  try {
    var er = {};
    Object.defineProperty(er, "passive", { get: function() {
      Ci = !0;
    } }), window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
  } catch {
    Ci = !1;
  }
function qd(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (h) {
    this.onError(h);
  }
}
var mr = !1, Dl = null, Ml = !1, Pi = null, bd = { onError: function(e) {
  mr = !0, Dl = e;
} };
function ep(e, t, n, r, l, o, i, u, a) {
  mr = !1, Dl = null, qd.apply(bd, arguments);
}
function tp(e, t, n, r, l, o, i, u, a) {
  if (ep.apply(this, arguments), mr) {
    if (mr) {
      var s = Dl;
      mr = !1, Dl = null;
    } else
      throw Error(E(198));
    Ml || (Ml = !0, Pi = s);
  }
}
function cn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function ya(e) {
  if (cn(e) !== e)
    throw Error(E(188));
}
function np(e) {
  var t = e.alternate;
  if (!t) {
    if (t = cn(e), t === null)
      throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return ya(l), e;
        if (o === r)
          return ya(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(E(189));
      }
    }
    if (n.alternate !== r)
      throw Error(E(190));
  }
  if (n.tag !== 3)
    throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function dc(e) {
  return e = np(e), e !== null ? pc(e) : null;
}
function pc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = pc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var hc = Ue.unstable_scheduleCallback, wa = Ue.unstable_cancelCallback, rp = Ue.unstable_shouldYield, lp = Ue.unstable_requestPaint, oe = Ue.unstable_now, op = Ue.unstable_getCurrentPriorityLevel, hu = Ue.unstable_ImmediatePriority, mc = Ue.unstable_UserBlockingPriority, zl = Ue.unstable_NormalPriority, ip = Ue.unstable_LowPriority, vc = Ue.unstable_IdlePriority, ro = null, ut = null;
function up(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(ro, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var et = Math.clz32 ? Math.clz32 : cp, ap = Math.log, sp = Math.LN2;
function cp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ap(e) / sp | 0) | 0;
}
var rl = 64, ll = 4194304;
function fr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = fr(u) : (o &= i, o !== 0 && (r = fr(o)));
  } else
    i = n & ~l, i !== 0 ? r = fr(i) : o !== 0 && (r = fr(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - et(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function fp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - et(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & n) || u & r) && (l[i] = fp(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function _i(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function gc() {
  var e = rl;
  return rl <<= 1, !(rl & 4194240) && (rl = 64), e;
}
function jo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function pp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - et(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function mu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var K = 0;
function yc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var wc, vu, Sc, kc, Ec, Ri = !1, ol = [], Ot = null, Ft = null, jt = null, Rr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), Dt = [], hp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lr.delete(t.pointerId);
  }
}
function tr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Qr(t), t !== null && vu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function mp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ot = tr(Ot, e, t, n, r, l), !0;
    case "dragenter":
      return Ft = tr(Ft, e, t, n, r, l), !0;
    case "mouseover":
      return jt = tr(jt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Rr.set(o, tr(Rr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Lr.set(o, tr(Lr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function xc(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = fc(n), t !== null) {
          e.blockedOn = t, Ec(e.priority, function() {
            Sc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function yl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ei = r, n.target.dispatchEvent(r), Ei = null;
    } else
      return t = Qr(n), t !== null && vu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ka(e, t, n) {
  yl(e) && n.delete(t);
}
function vp() {
  Ri = !1, Ot !== null && yl(Ot) && (Ot = null), Ft !== null && yl(Ft) && (Ft = null), jt !== null && yl(jt) && (jt = null), Rr.forEach(ka), Lr.forEach(ka);
}
function nr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ri || (Ri = !0, Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, vp)));
}
function Nr(e) {
  function t(l) {
    return nr(l, e);
  }
  if (0 < ol.length) {
    nr(ol[0], e);
    for (var n = 1; n < ol.length; n++) {
      var r = ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ot !== null && nr(Ot, e), Ft !== null && nr(Ft, e), jt !== null && nr(jt, e), Rr.forEach(t), Lr.forEach(t), n = 0; n < Dt.length; n++)
    r = Dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && (n = Dt[0], n.blockedOn === null); )
    xc(n), n.blockedOn === null && Dt.shift();
}
var zn = Ct.ReactCurrentBatchConfig, Ol = !0;
function gp(e, t, n, r) {
  var l = K, o = zn.transition;
  zn.transition = null;
  try {
    K = 1, gu(e, t, n, r);
  } finally {
    K = l, zn.transition = o;
  }
}
function yp(e, t, n, r) {
  var l = K, o = zn.transition;
  zn.transition = null;
  try {
    K = 4, gu(e, t, n, r);
  } finally {
    K = l, zn.transition = o;
  }
}
function gu(e, t, n, r) {
  if (Ol) {
    var l = Li(e, t, n, r);
    if (l === null)
      Ko(e, t, r, Fl, n), Sa(e, r);
    else if (mp(l, e, t, n, r))
      r.stopPropagation();
    else if (Sa(e, r), t & 4 && -1 < hp.indexOf(e)) {
      for (; l !== null; ) {
        var o = Qr(l);
        if (o !== null && wc(o), o = Li(e, t, n, r), o === null && Ko(e, t, r, Fl, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Ko(e, t, r, null, n);
  }
}
var Fl = null;
function Li(e, t, n, r) {
  if (Fl = null, e = pu(r), e = Jt(e), e !== null)
    if (t = cn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = fc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Fl = e, null;
}
function Cc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (op()) {
        case hu:
          return 1;
        case mc:
          return 4;
        case zl:
        case ip:
          return 16;
        case vc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null, yu = null, wl = null;
function Pc() {
  if (wl)
    return wl;
  var e, t = yu, n = t.length, r, l = "value" in zt ? zt.value : zt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return wl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Sl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function il() {
  return !0;
}
function Ea() {
  return !1;
}
function $e(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? il : Ea, this.isPropagationStopped = Ea, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = il);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = il);
  }, persist: function() {
  }, isPersistent: il }), t;
}
var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, wu = $e(Wn), Wr = ne({}, Wn, { view: 0, detail: 0 }), wp = $e(Wr), Io, Uo, rr, lo = ne({}, Wr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Su, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (Io = e.screenX - rr.screenX, Uo = e.screenY - rr.screenY) : Uo = Io = 0, rr = e), Io);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Uo;
} }), xa = $e(lo), Sp = ne({}, lo, { dataTransfer: 0 }), kp = $e(Sp), Ep = ne({}, Wr, { relatedTarget: 0 }), Ao = $e(Ep), xp = ne({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cp = $e(xp), Pp = ne({}, Wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), _p = $e(Pp), Rp = ne({}, Wn, { data: 0 }), Ca = $e(Rp), Lp = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Np = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Dp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Mp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dp[e]) ? !!t[e] : !1;
}
function Su() {
  return Mp;
}
var zp = ne({}, Wr, { key: function(e) {
  if (e.key) {
    var t = Lp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Np[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Su, charCode: function(e) {
  return e.type === "keypress" ? Sl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Tp = $e(zp), Op = ne({}, lo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Pa = $e(Op), Fp = ne({}, Wr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Su }), jp = $e(Fp), Ip = ne({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Up = $e(Ip), Ap = ne({}, lo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $p = $e(Ap), Bp = [9, 13, 27, 32], ku = wt && "CompositionEvent" in window, vr = null;
wt && "documentMode" in document && (vr = document.documentMode);
var Vp = wt && "TextEvent" in window && !vr, _c = wt && (!ku || vr && 8 < vr && 11 >= vr), _a = String.fromCharCode(32), Ra = !1;
function Rc(e, t) {
  switch (e) {
    case "keyup":
      return Bp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Lc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function Hp(e, t) {
  switch (e) {
    case "compositionend":
      return Lc(t);
    case "keypress":
      return t.which !== 32 ? null : (Ra = !0, _a);
    case "textInput":
      return e = t.data, e === _a && Ra ? null : e;
    default:
      return null;
  }
}
function Wp(e, t) {
  if (yn)
    return e === "compositionend" || !ku && Rc(e, t) ? (e = Pc(), wl = yu = zt = null, yn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return _c && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function La(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qp[e.type] : t === "textarea";
}
function Nc(e, t, n, r) {
  ic(r), t = jl(t, "onChange"), 0 < t.length && (n = new wu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var gr = null, Dr = null;
function Kp(e) {
  $c(e, 0);
}
function oo(e) {
  var t = kn(e);
  if (bs(t))
    return e;
}
function Yp(e, t) {
  if (e === "change")
    return t;
}
var Dc = !1;
if (wt) {
  var $o;
  if (wt) {
    var Bo = "oninput" in document;
    if (!Bo) {
      var Na = document.createElement("div");
      Na.setAttribute("oninput", "return;"), Bo = typeof Na.oninput == "function";
    }
    $o = Bo;
  } else
    $o = !1;
  Dc = $o && (!document.documentMode || 9 < document.documentMode);
}
function Da() {
  gr && (gr.detachEvent("onpropertychange", Mc), Dr = gr = null);
}
function Mc(e) {
  if (e.propertyName === "value" && oo(Dr)) {
    var t = [];
    Nc(t, Dr, e, pu(e)), cc(Kp, t);
  }
}
function Xp(e, t, n) {
  e === "focusin" ? (Da(), gr = t, Dr = n, gr.attachEvent("onpropertychange", Mc)) : e === "focusout" && Da();
}
function Gp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return oo(Dr);
}
function Zp(e, t) {
  if (e === "click")
    return oo(t);
}
function Jp(e, t) {
  if (e === "input" || e === "change")
    return oo(t);
}
function qp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : qp;
function Mr(e, t) {
  if (nt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ci.call(t, l) || !nt(e[l], t[l]))
      return !1;
  }
  return !0;
}
function Ma(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function za(e, t) {
  var n = Ma(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ma(n);
  }
}
function zc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Tc() {
  for (var e = window, t = Nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Nl(e.document);
  }
  return t;
}
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function bp(e) {
  var t = Tc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && zc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Eu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = za(n, o);
        var i = za(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var eh = wt && "documentMode" in document && 11 >= document.documentMode, wn = null, Ni = null, yr = null, Di = !1;
function Ta(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Di || wn == null || wn !== Nl(r) || (r = wn, "selectionStart" in r && Eu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), yr && Mr(yr, r) || (yr = r, r = jl(Ni, "onSelect"), 0 < r.length && (t = new wu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = wn)));
}
function ul(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Sn = { animationend: ul("Animation", "AnimationEnd"), animationiteration: ul("Animation", "AnimationIteration"), animationstart: ul("Animation", "AnimationStart"), transitionend: ul("Transition", "TransitionEnd") }, Vo = {}, Oc = {};
wt && (Oc = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
function io(e) {
  if (Vo[e])
    return Vo[e];
  if (!Sn[e])
    return e;
  var t = Sn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Oc)
      return Vo[e] = t[n];
  return e;
}
var Fc = io("animationend"), jc = io("animationiteration"), Ic = io("animationstart"), Uc = io("transitionend"), Ac = /* @__PURE__ */ new Map(), Oa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  Ac.set(e, t), sn(t, [e]);
}
for (var Ho = 0; Ho < Oa.length; Ho++) {
  var Wo = Oa[Ho], th = Wo.toLowerCase(), nh = Wo[0].toUpperCase() + Wo.slice(1);
  Wt(th, "on" + nh);
}
Wt(Fc, "onAnimationEnd");
Wt(jc, "onAnimationIteration");
Wt(Ic, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Uc, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rh = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function Fa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, tp(r, t, void 0, e), e.currentTarget = null;
}
function $c(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], a = u.instance, s = u.currentTarget;
          if (u = u.listener, a !== o && l.isPropagationStopped())
            break e;
          Fa(l, u, s), o = a;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], a = u.instance, s = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped())
            break e;
          Fa(l, u, s), o = a;
        }
    }
  }
  if (Ml)
    throw e = Pi, Ml = !1, Pi = null, e;
}
function Z(e, t) {
  var n = t[Fi];
  n === void 0 && (n = t[Fi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Bc(t, e, 2, !1), n.add(r));
}
function Qo(e, t, n) {
  var r = 0;
  t && (r |= 4), Bc(n, e, r, t);
}
var al = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
  if (!e[al]) {
    e[al] = !0, Xs.forEach(function(n) {
      n !== "selectionchange" && (rh.has(n) || Qo(n, !1, e), Qo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[al] || (t[al] = !0, Qo("selectionchange", !1, t));
  }
}
function Bc(e, t, n, r) {
  switch (Cc(t)) {
    case 1:
      var l = gp;
      break;
    case 4:
      l = yp;
      break;
    default:
      l = gu;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ci || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ko(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var a = i.tag;
              if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = Jt(u), i === null)
              return;
            if (a = i.tag, a === 5 || a === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  cc(function() {
    var s = o, h = pu(n), m = [];
    e: {
      var c = Ac.get(e);
      if (c !== void 0) {
        var y = wu, k = e;
        switch (e) {
          case "keypress":
            if (Sl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = Tp;
            break;
          case "focusin":
            k = "focus", y = Ao;
            break;
          case "focusout":
            k = "blur", y = Ao;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ao;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = xa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = jp;
            break;
          case Fc:
          case jc:
          case Ic:
            y = Cp;
            break;
          case Uc:
            y = Up;
            break;
          case "scroll":
            y = wp;
            break;
          case "wheel":
            y = $p;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = _p;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Pa;
        }
        var w = (t & 4) !== 0, R = !w && e === "scroll", d = w ? c !== null ? c + "Capture" : null : c;
        w = [];
        for (var f = s, p; f !== null; ) {
          p = f;
          var g = p.stateNode;
          if (p.tag === 5 && g !== null && (p = g, d !== null && (g = _r(f, d), g != null && w.push(Tr(f, g, p)))), R)
            break;
          f = f.return;
        }
        0 < w.length && (c = new y(c, k, null, n, h), m.push({ event: c, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (c = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", c && n !== Ei && (k = n.relatedTarget || n.fromElement) && (Jt(k) || k[St]))
          break e;
        if ((y || c) && (c = h.window === h ? h : (c = h.ownerDocument) ? c.defaultView || c.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = s, k = k ? Jt(k) : null, k !== null && (R = cn(k), k !== R || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = s), y !== k)) {
          if (w = xa, g = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (w = Pa, g = "onPointerLeave", d = "onPointerEnter", f = "pointer"), R = y == null ? c : kn(y), p = k == null ? c : kn(k), c = new w(g, f + "leave", y, n, h), c.target = R, c.relatedTarget = p, g = null, Jt(h) === s && (w = new w(d, f + "enter", k, n, h), w.target = p, w.relatedTarget = R, g = w), R = g, y && k)
            t: {
              for (w = y, d = k, f = 0, p = w; p; p = mn(p))
                f++;
              for (p = 0, g = d; g; g = mn(g))
                p++;
              for (; 0 < f - p; )
                w = mn(w), f--;
              for (; 0 < p - f; )
                d = mn(d), p--;
              for (; f--; ) {
                if (w === d || d !== null && w === d.alternate)
                  break t;
                w = mn(w), d = mn(d);
              }
              w = null;
            }
          else
            w = null;
          y !== null && ja(m, c, y, w, !1), k !== null && R !== null && ja(m, R, k, w, !0);
        }
      }
      e: {
        if (c = s ? kn(s) : window, y = c.nodeName && c.nodeName.toLowerCase(), y === "select" || y === "input" && c.type === "file")
          var C = Yp;
        else if (La(c))
          if (Dc)
            C = Jp;
          else {
            C = Gp;
            var M = Xp;
          }
        else
          (y = c.nodeName) && y.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (C = Zp);
        if (C && (C = C(e, s))) {
          Nc(m, C, n, h);
          break e;
        }
        M && M(e, c, s), e === "focusout" && (M = c._wrapperState) && M.controlled && c.type === "number" && gi(c, "number", c.value);
      }
      switch (M = s ? kn(s) : window, e) {
        case "focusin":
          (La(M) || M.contentEditable === "true") && (wn = M, Ni = s, yr = null);
          break;
        case "focusout":
          yr = Ni = wn = null;
          break;
        case "mousedown":
          Di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Di = !1, Ta(m, n, h);
          break;
        case "selectionchange":
          if (eh)
            break;
        case "keydown":
        case "keyup":
          Ta(m, n, h);
      }
      var D;
      if (ku)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        yn ? Rc(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (_c && n.locale !== "ko" && (yn || z !== "onCompositionStart" ? z === "onCompositionEnd" && yn && (D = Pc()) : (zt = h, yu = "value" in zt ? zt.value : zt.textContent, yn = !0)), M = jl(s, z), 0 < M.length && (z = new Ca(z, e, null, n, h), m.push({ event: z, listeners: M }), D ? z.data = D : (D = Lc(n), D !== null && (z.data = D)))), (D = Vp ? Hp(e, n) : Wp(e, n)) && (s = jl(s, "onBeforeInput"), 0 < s.length && (h = new Ca("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: s }), h.data = D));
    }
    $c(m, t);
  });
}
function Tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = _r(e, n), o != null && r.unshift(Tr(e, o, l)), o = _r(e, t), o != null && r.push(Tr(e, o, l))), e = e.return;
  }
  return r;
}
function mn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ja(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r)
      break;
    u.tag === 5 && s !== null && (u = s, l ? (a = _r(n, o), a != null && i.unshift(Tr(n, a, u))) : l || (a = _r(n, o), a != null && i.push(Tr(n, a, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var lh = /\r\n?/g, oh = /\u0000|\uFFFD/g;
function Ia(e) {
  return (typeof e == "string" ? e : "" + e).replace(lh, `
`).replace(oh, "");
}
function sl(e, t, n) {
  if (t = Ia(t), Ia(e) !== t && n)
    throw Error(E(425));
}
function Il() {
}
var Mi = null, zi = null;
function Ti(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Oi = typeof setTimeout == "function" ? setTimeout : void 0, ih = typeof clearTimeout == "function" ? clearTimeout : void 0, Ua = typeof Promise == "function" ? Promise : void 0, uh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ua < "u" ? function(e) {
  return Ua.resolve(null).then(e).catch(ah);
} : Oi;
function ah(e) {
  setTimeout(function() {
    throw e;
  });
}
function Yo(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Nr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Nr(t);
}
function It(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Aa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qn = Math.random().toString(36).slice(2), it = "__reactFiber$" + Qn, Or = "__reactProps$" + Qn, St = "__reactContainer$" + Qn, Fi = "__reactEvents$" + Qn, sh = "__reactListeners$" + Qn, ch = "__reactHandles$" + Qn;
function Jt(e) {
  var t = e[it];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[St] || n[it]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Aa(e); e !== null; ) {
          if (n = e[it])
            return n;
          e = Aa(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Qr(e) {
  return e = e[it] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(E(33));
}
function uo(e) {
  return e[Or] || null;
}
var ji = [], En = -1;
function Qt(e) {
  return { current: e };
}
function J(e) {
  0 > En || (e.current = ji[En], ji[En] = null, En--);
}
function G(e, t) {
  En++, ji[En] = e.current, e.current = t;
}
var Ht = {}, xe = Qt(Ht), De = Qt(!1), rn = Ht;
function In(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Me(e) {
  return e = e.childContextTypes, e != null;
}
function Ul() {
  J(De), J(xe);
}
function $a(e, t, n) {
  if (xe.current !== Ht)
    throw Error(E(168));
  G(xe, t), G(De, n);
}
function Vc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(E(108, Xd(e) || "Unknown", l));
  return ne({}, n, r);
}
function Al(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, rn = xe.current, G(xe, e), G(De, De.current), !0;
}
function Ba(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(E(169));
  n ? (e = Vc(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, J(De), J(xe), G(xe, e)) : J(De), G(De, n);
}
var ht = null, ao = !1, Xo = !1;
function Hc(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function fh(e) {
  ao = !0, Hc(e);
}
function Kt() {
  if (!Xo && ht !== null) {
    Xo = !0;
    var e = 0, t = K;
    try {
      var n = ht;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ht = null, ao = !1;
    } catch (l) {
      throw ht !== null && (ht = ht.slice(e + 1)), hc(hu, Kt), l;
    } finally {
      K = t, Xo = !1;
    }
  }
  return null;
}
var xn = [], Cn = 0, $l = null, Bl = 0, Be = [], Ve = 0, ln = null, mt = 1, vt = "";
function Gt(e, t) {
  xn[Cn++] = Bl, xn[Cn++] = $l, $l = e, Bl = t;
}
function Wc(e, t, n) {
  Be[Ve++] = mt, Be[Ve++] = vt, Be[Ve++] = ln, ln = e;
  var r = mt;
  e = vt;
  var l = 32 - et(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - et(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, mt = 1 << 32 - et(t) + l | n << l | r, vt = o + e;
  } else
    mt = 1 << o | n << l | r, vt = e;
}
function xu(e) {
  e.return !== null && (Gt(e, 1), Wc(e, 1, 0));
}
function Cu(e) {
  for (; e === $l; )
    $l = xn[--Cn], xn[Cn] = null, Bl = xn[--Cn], xn[Cn] = null;
  for (; e === ln; )
    ln = Be[--Ve], Be[Ve] = null, vt = Be[--Ve], Be[Ve] = null, mt = Be[--Ve], Be[Ve] = null;
}
var Ie = null, je = null, b = !1, be = null;
function Qc(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Va(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, je = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: mt, overflow: vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, je = null, !0) : !1;
    default:
      return !1;
  }
}
function Ii(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ui(e) {
  if (b) {
    var t = je;
    if (t) {
      var n = t;
      if (!Va(e, t)) {
        if (Ii(e))
          throw Error(E(418));
        t = It(n.nextSibling);
        var r = Ie;
        t && Va(e, t) ? Qc(r, n) : (e.flags = e.flags & -4097 | 2, b = !1, Ie = e);
      }
    } else {
      if (Ii(e))
        throw Error(E(418));
      e.flags = e.flags & -4097 | 2, b = !1, Ie = e;
    }
  }
}
function Ha(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function cl(e) {
  if (e !== Ie)
    return !1;
  if (!b)
    return Ha(e), b = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ti(e.type, e.memoizedProps)), t && (t = je)) {
    if (Ii(e))
      throw Kc(), Error(E(418));
    for (; t; )
      Qc(e, t), t = It(t.nextSibling);
  }
  if (Ha(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = It(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else
    je = Ie ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function Kc() {
  for (var e = je; e; )
    e = It(e.nextSibling);
}
function Un() {
  je = Ie = null, b = !1;
}
function Pu(e) {
  be === null ? be = [e] : be.push(e);
}
var dh = Ct.ReactCurrentBatchConfig;
function Je(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Vl = Qt(null), Hl = null, Pn = null, _u = null;
function Ru() {
  _u = Pn = Hl = null;
}
function Lu(e) {
  var t = Vl.current;
  J(Vl), e._currentValue = t;
}
function Ai(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Tn(e, t) {
  Hl = e, _u = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null);
}
function Qe(e) {
  var t = e._currentValue;
  if (_u !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Pn === null) {
      if (Hl === null)
        throw Error(E(308));
      Pn = e, Hl.dependencies = { lanes: 0, firstContext: e };
    } else
      Pn = Pn.next = e;
  return t;
}
var qt = null;
function Nu(e) {
  qt === null ? qt = [e] : qt.push(e);
}
function Yc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Nu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, kt(e, r);
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Du(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Xc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, W & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, kt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Nu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, kt(e, n);
}
function kl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, mu(e, n);
  }
}
function Wa(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Wl(e, t, n, r) {
  var l = e.updateQueue;
  Lt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, i === null ? o = s : i.next = s, i = a;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = s : u.next = s, h.lastBaseUpdate = a));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, h = s = a = null, u = o;
    do {
      var c = u.lane, y = u.eventTime;
      if ((r & c) === c) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var k = e, w = u;
          switch (c = t, y = n, w.tag) {
            case 1:
              if (k = w.payload, typeof k == "function") {
                m = k.call(y, m, c);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = w.payload, c = typeof k == "function" ? k.call(y, m, c) : k, c == null)
                break e;
              m = ne({}, m, c);
              break e;
            case 2:
              Lt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, c = l.effects, c === null ? l.effects = [u] : c.push(u));
      } else
        y = { eventTime: y, lane: c, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (s = h = y, a = m) : h = h.next = y, i |= c;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        c = u, u = c.next, c.next = null, l.lastBaseUpdate = c, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (a = m), l.baseState = a, l.firstBaseUpdate = s, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    un |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Qa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var Gc = new Ys.Component().refs;
function $i(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var so = { isMounted: function(e) {
  return (e = e._reactInternals) ? cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), l = $t(e), o = gt(r, l);
  o.payload = t, n != null && (o.callback = n), t = Ut(e, o, l), t !== null && (tt(t, e, l, r), kl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), l = $t(e), o = gt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ut(e, o, l), t !== null && (tt(t, e, l, r), kl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Pe(), r = $t(e), l = gt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ut(e, l, r), t !== null && (tt(t, e, r, n), kl(t, e, r));
} };
function Ka(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, r) || !Mr(l, o) : !0;
}
function Zc(e, t, n) {
  var r = !1, l = Ht, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Qe(o) : (l = Me(t) ? rn : xe.current, r = t.contextTypes, o = (r = r != null) ? In(e, l) : Ht), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = so, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Ya(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && so.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Gc, Du(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Qe(o) : (o = Me(t) ? rn : xe.current, l.context = In(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && ($i(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && so.enqueueReplaceState(l, l.state, null), Wl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(E(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === Gc && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(E(284));
    if (!n._owner)
      throw Error(E(290, e));
  }
  return e;
}
function fl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Xa(e) {
  var t = e._init;
  return t(e._payload);
}
function Jc(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [f], d.flags |= 16) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e)
      return null;
    for (; f !== null; )
      t(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function l(d, f) {
    return d = Bt(d, f), d.index = 0, d.sibling = null, d;
  }
  function o(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, p, g) {
    return f === null || f.tag !== 6 ? (f = ti(p, d.mode, g), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function a(d, f, p, g) {
    var C = p.type;
    return C === gn ? h(d, f, p.props.children, g, p.key) : f !== null && (f.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Rt && Xa(C) === f.type) ? (g = l(f, p.props), g.ref = lr(d, f, p), g.return = d, g) : (g = Rl(p.type, p.key, p.props, null, d.mode, g), g.ref = lr(d, f, p), g.return = d, g);
  }
  function s(d, f, p, g) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = ni(p, d.mode, g), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function h(d, f, p, g, C) {
    return f === null || f.tag !== 7 ? (f = nn(p, d.mode, g, C), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function m(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return f = ti("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case el:
          return p = Rl(f.type, f.key, f.props, null, d.mode, p), p.ref = lr(d, null, f), p.return = d, p;
        case vn:
          return f = ni(f, d.mode, p), f.return = d, f;
        case Rt:
          var g = f._init;
          return m(d, g(f._payload), p);
      }
      if (cr(f) || bn(f))
        return f = nn(f, d.mode, p, null), f.return = d, f;
      fl(d, f);
    }
    return null;
  }
  function c(d, f, p, g) {
    var C = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return C !== null ? null : u(d, f, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case el:
          return p.key === C ? a(d, f, p, g) : null;
        case vn:
          return p.key === C ? s(d, f, p, g) : null;
        case Rt:
          return C = p._init, c(
            d,
            f,
            C(p._payload),
            g
          );
      }
      if (cr(p) || bn(p))
        return C !== null ? null : h(d, f, p, g, null);
      fl(d, p);
    }
    return null;
  }
  function y(d, f, p, g, C) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return d = d.get(p) || null, u(f, d, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case el:
          return d = d.get(g.key === null ? p : g.key) || null, a(f, d, g, C);
        case vn:
          return d = d.get(g.key === null ? p : g.key) || null, s(f, d, g, C);
        case Rt:
          var M = g._init;
          return y(d, f, p, M(g._payload), C);
      }
      if (cr(g) || bn(g))
        return d = d.get(p) || null, h(f, d, g, C, null);
      fl(f, g);
    }
    return null;
  }
  function k(d, f, p, g) {
    for (var C = null, M = null, D = f, z = f = 0, Y = null; D !== null && z < p.length; z++) {
      D.index > z ? (Y = D, D = null) : Y = D.sibling;
      var I = c(d, D, p[z], g);
      if (I === null) {
        D === null && (D = Y);
        break;
      }
      e && D && I.alternate === null && t(d, D), f = o(I, f, z), M === null ? C = I : M.sibling = I, M = I, D = Y;
    }
    if (z === p.length)
      return n(d, D), b && Gt(d, z), C;
    if (D === null) {
      for (; z < p.length; z++)
        D = m(d, p[z], g), D !== null && (f = o(D, f, z), M === null ? C = D : M.sibling = D, M = D);
      return b && Gt(d, z), C;
    }
    for (D = r(d, D); z < p.length; z++)
      Y = y(D, d, z, p[z], g), Y !== null && (e && Y.alternate !== null && D.delete(Y.key === null ? z : Y.key), f = o(Y, f, z), M === null ? C = Y : M.sibling = Y, M = Y);
    return e && D.forEach(function(le) {
      return t(d, le);
    }), b && Gt(d, z), C;
  }
  function w(d, f, p, g) {
    var C = bn(p);
    if (typeof C != "function")
      throw Error(E(150));
    if (p = C.call(p), p == null)
      throw Error(E(151));
    for (var M = C = null, D = f, z = f = 0, Y = null, I = p.next(); D !== null && !I.done; z++, I = p.next()) {
      D.index > z ? (Y = D, D = null) : Y = D.sibling;
      var le = c(d, D, I.value, g);
      if (le === null) {
        D === null && (D = Y);
        break;
      }
      e && D && le.alternate === null && t(d, D), f = o(le, f, z), M === null ? C = le : M.sibling = le, M = le, D = Y;
    }
    if (I.done)
      return n(
        d,
        D
      ), b && Gt(d, z), C;
    if (D === null) {
      for (; !I.done; z++, I = p.next())
        I = m(d, I.value, g), I !== null && (f = o(I, f, z), M === null ? C = I : M.sibling = I, M = I);
      return b && Gt(d, z), C;
    }
    for (D = r(d, D); !I.done; z++, I = p.next())
      I = y(D, d, z, I.value, g), I !== null && (e && I.alternate !== null && D.delete(I.key === null ? z : I.key), f = o(I, f, z), M === null ? C = I : M.sibling = I, M = I);
    return e && D.forEach(function(Ye) {
      return t(d, Ye);
    }), b && Gt(d, z), C;
  }
  function R(d, f, p, g) {
    if (typeof p == "object" && p !== null && p.type === gn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case el:
          e: {
            for (var C = p.key, M = f; M !== null; ) {
              if (M.key === C) {
                if (C = p.type, C === gn) {
                  if (M.tag === 7) {
                    n(d, M.sibling), f = l(M, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (M.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Rt && Xa(C) === M.type) {
                  n(d, M.sibling), f = l(M, p.props), f.ref = lr(d, M, p), f.return = d, d = f;
                  break e;
                }
                n(d, M);
                break;
              } else
                t(d, M);
              M = M.sibling;
            }
            p.type === gn ? (f = nn(p.props.children, d.mode, g, p.key), f.return = d, d = f) : (g = Rl(p.type, p.key, p.props, null, d.mode, g), g.ref = lr(d, f, p), g.return = d, d = g);
          }
          return i(d);
        case vn:
          e: {
            for (M = p.key; f !== null; ) {
              if (f.key === M)
                if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                  n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else
                t(d, f);
              f = f.sibling;
            }
            f = ni(p, d.mode, g), f.return = d, d = f;
          }
          return i(d);
        case Rt:
          return M = p._init, R(d, f, M(p._payload), g);
      }
      if (cr(p))
        return k(d, f, p, g);
      if (bn(p))
        return w(d, f, p, g);
      fl(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = ti(p, d.mode, g), f.return = d, d = f), i(d)) : n(d, f);
  }
  return R;
}
var An = Jc(!0), qc = Jc(!1), Kr = {}, at = Qt(Kr), Fr = Qt(Kr), jr = Qt(Kr);
function bt(e) {
  if (e === Kr)
    throw Error(E(174));
  return e;
}
function Mu(e, t) {
  switch (G(jr, t), G(Fr, e), G(at, Kr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wi(t, e);
  }
  J(at), G(at, t);
}
function $n() {
  J(at), J(Fr), J(jr);
}
function bc(e) {
  bt(jr.current);
  var t = bt(at.current), n = wi(t, e.type);
  t !== n && (G(Fr, e), G(at, n));
}
function zu(e) {
  Fr.current === e && (J(at), J(Fr));
}
var ee = Qt(0);
function Ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Go = [];
function Tu() {
  for (var e = 0; e < Go.length; e++)
    Go[e]._workInProgressVersionPrimary = null;
  Go.length = 0;
}
var El = Ct.ReactCurrentDispatcher, Zo = Ct.ReactCurrentBatchConfig, on = 0, te = null, fe = null, pe = null, Kl = !1, wr = !1, Ir = 0, ph = 0;
function Se() {
  throw Error(E(321));
}
function Ou(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n]))
      return !1;
  return !0;
}
function Fu(e, t, n, r, l, o) {
  if (on = o, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, El.current = e === null || e.memoizedState === null ? gh : yh, e = n(r, l), wr) {
    o = 0;
    do {
      if (wr = !1, Ir = 0, 25 <= o)
        throw Error(E(301));
      o += 1, pe = fe = null, t.updateQueue = null, El.current = wh, e = n(r, l);
    } while (wr);
  }
  if (El.current = Yl, t = fe !== null && fe.next !== null, on = 0, pe = fe = te = null, Kl = !1, t)
    throw Error(E(300));
  return e;
}
function ju() {
  var e = Ir !== 0;
  return Ir = 0, e;
}
function ot() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pe === null ? te.memoizedState = pe = e : pe = pe.next = e, pe;
}
function Ke() {
  if (fe === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = fe.next;
  var t = pe === null ? te.memoizedState : pe.next;
  if (t !== null)
    pe = t, fe = e;
  else {
    if (e === null)
      throw Error(E(310));
    fe = e, e = { memoizedState: fe.memoizedState, baseState: fe.baseState, baseQueue: fe.baseQueue, queue: fe.queue, next: null }, pe === null ? te.memoizedState = pe = e : pe = pe.next = e;
  }
  return pe;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jo(e) {
  var t = Ke(), n = t.queue;
  if (n === null)
    throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = fe, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, a = null, s = o;
    do {
      var h = s.lane;
      if ((on & h) === h)
        a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var m = {
          lane: h,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = m, i = r) : a = a.next = m, te.lanes |= h, un |= h;
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? i = r : a.next = u, nt(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, te.lanes |= o, un |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qo(e) {
  var t = Ke(), n = t.queue;
  if (n === null)
    throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    nt(o, t.memoizedState) || (Ne = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ef() {
}
function tf(e, t) {
  var n = te, r = Ke(), l = t(), o = !nt(r.memoizedState, l);
  if (o && (r.memoizedState = l, Ne = !0), r = r.queue, Iu(lf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pe !== null && pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ar(9, rf.bind(null, n, r, l, t), void 0, null), he === null)
      throw Error(E(349));
    on & 30 || nf(n, t, l);
  }
  return l;
}
function nf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function rf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, of(t) && uf(e);
}
function lf(e, t, n) {
  return n(function() {
    of(t) && uf(e);
  });
}
function of(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function uf(e) {
  var t = kt(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Ga(e) {
  var t = ot();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ur, lastRenderedState: e }, t.queue = e, e = e.dispatch = vh.bind(null, te, e), [t.memoizedState, e];
}
function Ar(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function af() {
  return Ke().memoizedState;
}
function xl(e, t, n, r) {
  var l = ot();
  te.flags |= e, l.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r);
}
function co(e, t, n, r) {
  var l = Ke();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var i = fe.memoizedState;
    if (o = i.destroy, r !== null && Ou(r, i.deps)) {
      l.memoizedState = Ar(t, n, o, r);
      return;
    }
  }
  te.flags |= e, l.memoizedState = Ar(1 | t, n, o, r);
}
function Za(e, t) {
  return xl(8390656, 8, e, t);
}
function Iu(e, t) {
  return co(2048, 8, e, t);
}
function sf(e, t) {
  return co(4, 2, e, t);
}
function cf(e, t) {
  return co(4, 4, e, t);
}
function ff(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function df(e, t, n) {
  return n = n != null ? n.concat([e]) : null, co(4, 4, ff.bind(null, t, e), n);
}
function Uu() {
}
function pf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ou(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function hf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ou(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function mf(e, t, n) {
  return on & 21 ? (nt(n, t) || (n = gc(), te.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n);
}
function hh(e, t) {
  var n = K;
  K = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    K = n, Zo.transition = r;
  }
}
function vf() {
  return Ke().memoizedState;
}
function mh(e, t, n) {
  var r = $t(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, gf(e))
    yf(t, n);
  else if (n = Yc(e, t, n, r), n !== null) {
    var l = Pe();
    tt(n, e, r, l), wf(n, t, r);
  }
}
function vh(e, t, n) {
  var r = $t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gf(e))
    yf(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, nt(u, i)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Nu(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Yc(e, t, l, r), n !== null && (l = Pe(), tt(n, e, r, l), wf(n, t, r));
  }
}
function gf(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function yf(e, t) {
  wr = Kl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function wf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, mu(e, n);
  }
}
var Yl = { readContext: Qe, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, gh = { readContext: Qe, useCallback: function(e, t) {
  return ot().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Qe, useEffect: Za, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xl(
    4194308,
    4,
    ff.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return xl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return xl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ot();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ot();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = mh.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ot();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ga, useDebugValue: Uu, useDeferredValue: function(e) {
  return ot().memoizedState = e;
}, useTransition: function() {
  var e = Ga(!1), t = e[0];
  return e = hh.bind(null, e[1]), ot().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, l = ot();
  if (b) {
    if (n === void 0)
      throw Error(E(407));
    n = n();
  } else {
    if (n = t(), he === null)
      throw Error(E(349));
    on & 30 || nf(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Za(lf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Ar(9, rf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ot(), t = he.identifierPrefix;
  if (b) {
    var n = vt, r = mt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = ph++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, yh = {
  readContext: Qe,
  useCallback: pf,
  useContext: Qe,
  useEffect: Iu,
  useImperativeHandle: df,
  useInsertionEffect: sf,
  useLayoutEffect: cf,
  useMemo: hf,
  useReducer: Jo,
  useRef: af,
  useState: function() {
    return Jo(Ur);
  },
  useDebugValue: Uu,
  useDeferredValue: function(e) {
    var t = Ke();
    return mf(t, fe.memoizedState, e);
  },
  useTransition: function() {
    var e = Jo(Ur)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: ef,
  useSyncExternalStore: tf,
  useId: vf,
  unstable_isNewReconciler: !1
}, wh = { readContext: Qe, useCallback: pf, useContext: Qe, useEffect: Iu, useImperativeHandle: df, useInsertionEffect: sf, useLayoutEffect: cf, useMemo: hf, useReducer: qo, useRef: af, useState: function() {
  return qo(Ur);
}, useDebugValue: Uu, useDeferredValue: function(e) {
  var t = Ke();
  return fe === null ? t.memoizedState = e : mf(t, fe.memoizedState, e);
}, useTransition: function() {
  var e = qo(Ur)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: ef, useSyncExternalStore: tf, useId: vf, unstable_isNewReconciler: !1 };
function Bn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Yd(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function bo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Sh = typeof WeakMap == "function" ? WeakMap : Map;
function Sf(e, t, n) {
  n = gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Gl || (Gl = !0, qi = r), Vi(e, t);
  }, n;
}
function kf(e, t, n) {
  n = gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Vi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Vi(e, t), typeof r != "function" && (At === null ? At = /* @__PURE__ */ new Set([this]) : At.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ja(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Oh.bind(null, e, t, n), t.then(e, e));
}
function qa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ba(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Ut(n, t, 1))), n.lanes |= 1), e);
}
var kh = Ct.ReactCurrentOwner, Ne = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? qc(t, null, n, r) : An(t, e.child, n, r);
}
function es(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Tn(t, l), r = Fu(e, t, n, r, o, l), n = ju(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (b && n && xu(t), t.flags |= 1, Ce(e, t, r, l), t.child);
}
function ts(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ku(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ef(e, t, o, r, l)) : (e = Rl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mr, n(i, r) && e.ref === t.ref)
      return Et(e, t, l);
  }
  return t.flags |= 1, e = Bt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ef(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Mr(o, r) && e.ref === t.ref)
      if (Ne = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Ne = !0);
      else
        return t.lanes = e.lanes, Et(e, t, l);
  }
  return Hi(e, t, n, r, l);
}
function xf(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(Rn, Oe), Oe |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(Rn, Oe), Oe |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, G(Rn, Oe), Oe |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, G(Rn, Oe), Oe |= r;
  return Ce(e, t, l, n), t.child;
}
function Cf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Hi(e, t, n, r, l) {
  var o = Me(n) ? rn : xe.current;
  return o = In(t, o), Tn(t, l), n = Fu(e, t, n, r, o, l), r = ju(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (b && r && xu(t), t.flags |= 1, Ce(e, t, n, l), t.child);
}
function ns(e, t, n, r, l) {
  if (Me(n)) {
    var o = !0;
    Al(t);
  } else
    o = !1;
  if (Tn(t, l), t.stateNode === null)
    Cl(e, t), Zc(t, n, r), Bi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var a = i.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Qe(s) : (s = Me(n) ? rn : xe.current, s = In(t, s));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== s) && Ya(t, i, r, s), Lt = !1;
    var c = t.memoizedState;
    i.state = c, Wl(t, r, i, l), a = t.memoizedState, u !== r || c !== a || De.current || Lt ? (typeof h == "function" && ($i(t, n, h, r), a = t.memoizedState), (u = Lt || Ka(t, n, u, r, c, a, s)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = s, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Xc(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : Je(t.type, u), i.props = s, m = t.pendingProps, c = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Qe(a) : (a = Me(n) ? rn : xe.current, a = In(t, a));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || c !== a) && Ya(t, i, r, a), Lt = !1, c = t.memoizedState, i.state = c, Wl(t, r, i, l);
    var k = t.memoizedState;
    u !== m || c !== k || De.current || Lt ? (typeof y == "function" && ($i(t, n, y, r), k = t.memoizedState), (s = Lt || Ka(t, n, s, r, c, k, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && c === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = a, r = s) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && c === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Wi(e, t, n, r, o, l);
}
function Wi(e, t, n, r, l, o) {
  Cf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Ba(t, n, !1), Et(e, t, o);
  r = t.stateNode, kh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = An(t, e.child, null, o), t.child = An(t, null, u, o)) : Ce(e, t, u, o), t.memoizedState = r.state, l && Ba(t, n, !0), t.child;
}
function Pf(e) {
  var t = e.stateNode;
  t.pendingContext ? $a(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $a(e, t.context, !1), Mu(e, t.containerInfo);
}
function rs(e, t, n, r, l) {
  return Un(), Pu(l), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _f(e, t, n) {
  var r = t.pendingProps, l = ee.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(ee, l & 1), e === null)
    return Ui(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = ho(i, r, 0, null), e = nn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ki(n), t.memoizedState = Qi, e) : Au(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Eh(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Bt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Bt(u, o) : (o = nn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ki(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Qi, r;
  }
  return o = e.child, e = o.sibling, r = Bt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Au(e, t) {
  return t = ho({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function dl(e, t, n, r) {
  return r !== null && Pu(r), An(t, e.child, null, n), e = Au(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Eh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = bo(Error(E(422))), dl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = ho({ mode: "visible", children: r.children }, l, 0, null), o = nn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && An(t, e.child, null, i), t.child.memoizedState = Ki(i), t.memoizedState = Qi, o);
  if (!(t.mode & 1))
    return dl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(E(419)), r = bo(o, r, void 0), dl(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ne || u) {
    if (r = he, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, kt(e, l), tt(r, e, l, -1));
    }
    return Qu(), r = bo(Error(E(421))), dl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, je = It(l.nextSibling), Ie = t, b = !0, be = null, e !== null && (Be[Ve++] = mt, Be[Ve++] = vt, Be[Ve++] = ln, mt = e.id, vt = e.overflow, ln = t), t = Au(t, r.children), t.flags |= 4096, t);
}
function ls(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ai(e.return, t, n);
}
function ei(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Rf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (Ce(e, t, r.children, n), r = ee.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ls(e, n, t);
          else if (e.tag === 19)
            ls(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (G(ee, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Ql(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ei(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Ql(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ei(t, !0, n, null, o);
        break;
      case "together":
        ei(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Et(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Bt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function xh(e, t, n) {
  switch (t.tag) {
    case 3:
      Pf(t), Un();
      break;
    case 5:
      bc(t);
      break;
    case 1:
      Me(t.type) && Al(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      G(Vl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _f(e, t, n) : (G(ee, ee.current & 1), e = Et(e, t, n), e !== null ? e.sibling : null);
      G(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Rf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(ee, ee.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, xf(e, t, n);
  }
  return Et(e, t, n);
}
var Lf, Yi, Nf, Df;
Lf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Yi = function() {
};
Nf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, bt(at.current);
    var o = null;
    switch (n) {
      case "input":
        l = mi(e, l), r = mi(e, r), o = [];
        break;
      case "select":
        l = ne({}, l, { value: void 0 }), r = ne({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = yi(e, l), r = yi(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Il);
    }
    Si(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Cr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = l != null ? l[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null))
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in a)
              a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
          } else
            n || (o || (o = []), o.push(
              s,
              n
            )), n = a;
        else
          s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Cr.hasOwnProperty(s) ? (a != null && s === "onScroll" && Z("scroll", e), o || u === a || (o = [])) : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Df = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!b)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ch(e, t, n) {
  var r = t.pendingProps;
  switch (Cu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(t), null;
    case 1:
      return Me(t.type) && Ul(), ke(t), null;
    case 3:
      return r = t.stateNode, $n(), J(De), J(xe), Tu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (cl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, be !== null && (tu(be), be = null))), Yi(e, t), ke(t), null;
    case 5:
      zu(t);
      var l = bt(jr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Nf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(E(166));
          return ke(t), null;
        }
        if (e = bt(at.current), cl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[it] = t, r[Or] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < dr.length; l++)
                Z(dr[l], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z(
                "error",
                r
              ), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              pa(r, o), Z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, Z("invalid", r);
              break;
            case "textarea":
              ma(r, o), Z("invalid", r);
          }
          Si(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && sl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && sl(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Cr.hasOwnProperty(i) && u != null && i === "onScroll" && Z("scroll", r);
            }
          switch (n) {
            case "input":
              tl(r), ha(r, o, !0);
              break;
            case "textarea":
              tl(r), va(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Il);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = nc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[it] = t, e[Or] = r, Lf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ki(n, r), n) {
              case "dialog":
                Z("cancel", e), Z("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < dr.length; l++)
                  Z(dr[l], e);
                l = r;
                break;
              case "source":
                Z("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                Z(
                  "error",
                  e
                ), Z("load", e), l = r;
                break;
              case "details":
                Z("toggle", e), l = r;
                break;
              case "input":
                pa(e, r), l = mi(e, r), Z("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ne({}, r, { value: void 0 }), Z("invalid", e);
                break;
              case "textarea":
                ma(e, r), l = yi(e, r), Z("invalid", e);
                break;
              default:
                l = r;
            }
            Si(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style" ? oc(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && rc(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Pr(e, a) : typeof a == "number" && Pr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Cr.hasOwnProperty(o) ? a != null && o === "onScroll" && Z("scroll", e) : a != null && su(e, o, a, i));
              }
            switch (n) {
              case "input":
                tl(e), ha(e, r, !1);
                break;
              case "textarea":
                tl(e), va(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Nn(e, !!r.multiple, o, !1) : r.defaultValue != null && Nn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Il);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null)
        Df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(E(166));
        if (n = bt(jr.current), bt(at.current), cl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (o = r.nodeValue !== n) && (e = Ie, e !== null))
            switch (e.tag) {
              case 3:
                sl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && sl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[it] = t, t.stateNode = r;
      }
      return ke(t), null;
    case 13:
      if (J(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (b && je !== null && t.mode & 1 && !(t.flags & 128))
          Kc(), Un(), t.flags |= 98560, o = !1;
        else if (o = cl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(E(317));
            o[it] = t;
          } else
            Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ke(t), o = !1;
        } else
          be !== null && (tu(be), be = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? de === 0 && (de = 3) : Qu())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
    case 4:
      return $n(), Yi(e, t), e === null && zr(t.stateNode.containerInfo), ke(t), null;
    case 10:
      return Lu(t.type._context), ke(t), null;
    case 17:
      return Me(t.type) && Ul(), ke(t), null;
    case 19:
      if (J(ee), o = t.memoizedState, o === null)
        return ke(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          or(o, !1);
        else {
          if (de !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Ql(e), i !== null) {
                for (t.flags |= 128, or(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return G(ee, ee.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && oe() > Vn && (t.flags |= 128, r = !0, or(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ql(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), or(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !b)
              return ke(t), null;
          } else
            2 * oe() - o.renderingStartTime > Vn && n !== 1073741824 && (t.flags |= 128, r = !0, or(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = oe(), t.sibling = null, n = ee.current, G(ee, r ? n & 1 | 2 : n & 1), t) : (ke(t), null);
    case 22:
    case 23:
      return Wu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Ph(e, t) {
  switch (Cu(t), t.tag) {
    case 1:
      return Me(t.type) && Ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return $n(), J(De), J(xe), Tu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zu(t), null;
    case 13:
      if (J(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(E(340));
        Un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(ee), null;
    case 4:
      return $n(), null;
    case 10:
      return Lu(t.type._context), null;
    case 22:
    case 23:
      return Wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pl = !1, Ee = !1, _h = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else
      n.current = null;
}
function Xi(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var os = !1;
function Rh(e, t) {
  if (Mi = Ol, e = Tc(), Eu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, a = -1, s = 0, h = 0, m = e, c = null;
          t:
            for (; ; ) {
              for (var y; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (a = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (y = m.firstChild) !== null; )
                c = m, m = y;
              for (; ; ) {
                if (m === e)
                  break t;
                if (c === n && ++s === l && (u = i), c === o && ++h === r && (a = i), (y = m.nextSibling) !== null)
                  break;
                m = c, c = m.parentNode;
              }
              m = y;
            }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (zi = { focusedElem: e, selectionRange: n }, Ol = !1, L = t; L !== null; )
    if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, L = e;
    else
      for (; L !== null; ) {
        t = L;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var w = k.memoizedProps, R = k.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Je(t.type, w), R);
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (g) {
          re(t, t.return, g);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, L = e;
          break;
        }
        L = t.return;
      }
  return k = os, os = !1, k;
}
function Sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Xi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Gi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Mf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Mf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[it], delete t[Or], delete t[Fi], delete t[sh], delete t[ch])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function zf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function is(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || zf(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Il));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; )
      Zi(e, t, n), e = e.sibling;
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ji(e, t, n), e = e.sibling; e !== null; )
      Ji(e, t, n), e = e.sibling;
}
var me = null, qe = !1;
function _t(e, t, n) {
  for (n = n.child; n !== null; )
    Tf(e, t, n), n = n.sibling;
}
function Tf(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(ro, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ee || _n(n, t);
    case 6:
      var r = me, l = qe;
      me = null, _t(e, t, n), me = r, qe = l, me !== null && (qe ? (e = me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null && (qe ? (e = me, n = n.stateNode, e.nodeType === 8 ? Yo(e.parentNode, n) : e.nodeType === 1 && Yo(e, n), Nr(e)) : Yo(me, n.stateNode));
      break;
    case 4:
      r = me, l = qe, me = n.stateNode.containerInfo, qe = !0, _t(e, t, n), me = r, qe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Xi(n, t, i), l = l.next;
        } while (l !== r);
      }
      _t(e, t, n);
      break;
    case 1:
      if (!Ee && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          re(n, t, u);
        }
      _t(e, t, n);
      break;
    case 21:
      _t(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, _t(e, t, n), Ee = r) : _t(e, t, n);
      break;
    default:
      _t(e, t, n);
  }
}
function us(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new _h()), t.forEach(function(r) {
      var l = jh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                me = u.stateNode, qe = !1;
                break e;
              case 3:
                me = u.stateNode.containerInfo, qe = !0;
                break e;
              case 4:
                me = u.stateNode.containerInfo, qe = !0;
                break e;
            }
            u = u.return;
          }
        if (me === null)
          throw Error(E(160));
        Tf(o, i, l), me = null, qe = !1;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (s) {
        re(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Of(t, e), t = t.sibling;
}
function Of(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ze(t, e), lt(e), r & 4) {
        try {
          Sr(3, e, e.return), fo(3, e);
        } catch (w) {
          re(e, e.return, w);
        }
        try {
          Sr(5, e, e.return);
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 1:
      Ze(t, e), lt(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (Ze(t, e), lt(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Pr(l, "");
        } catch (w) {
          re(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && ec(l, o), ki(u, i);
            var s = ki(u, o);
            for (i = 0; i < a.length; i += 2) {
              var h = a[i], m = a[i + 1];
              h === "style" ? oc(l, m) : h === "dangerouslySetInnerHTML" ? rc(l, m) : h === "children" ? Pr(l, m) : su(l, h, m, s);
            }
            switch (u) {
              case "input":
                vi(l, o);
                break;
              case "textarea":
                tc(l, o);
                break;
              case "select":
                var c = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? Nn(l, !!o.multiple, y, !1) : c !== !!o.multiple && (o.defaultValue != null ? Nn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Nn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Or] = o;
          } catch (w) {
            re(e, e.return, w);
          }
      }
      break;
    case 6:
      if (Ze(t, e), lt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(E(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Ze(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Nr(t.containerInfo);
        } catch (w) {
          re(e, e.return, w);
        }
      break;
    case 4:
      Ze(t, e), lt(e);
      break;
    case 13:
      Ze(t, e), lt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Vu = oe())), r & 4 && us(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (s = Ee) || h, Ze(t, e), Ee = s) : Ze(t, e), lt(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !h && e.mode & 1)
          for (L = e, h = e.child; h !== null; ) {
            for (m = L = h; L !== null; ) {
              switch (c = L, y = c.child, c.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Sr(4, c, c.return);
                  break;
                case 1:
                  _n(c, c.return);
                  var k = c.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    r = c, n = c.return;
                    try {
                      t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                    } catch (w) {
                      re(r, n, w);
                    }
                  }
                  break;
                case 5:
                  _n(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    ss(m);
                    continue;
                  }
              }
              y !== null ? (y.return = c, L = y) : ss(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, s ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, a = m.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = lc("display", i));
                } catch (w) {
                  re(e, e.return, w);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = s ? "" : m.memoizedProps;
                } catch (w) {
                  re(e, e.return, w);
                }
            } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
            if (m === e)
              break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === e)
                break e;
              h === m && (h = null), m = m.return;
            }
            h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
          }
      }
      break;
    case 19:
      Ze(t, e), lt(e), r & 4 && us(e);
      break;
    case 21:
      break;
    default:
      Ze(
        t,
        e
      ), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Pr(l, ""), r.flags &= -33);
          var o = is(e);
          Ji(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = is(e);
          Zi(e, u, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      re(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lh(e, t, n) {
  L = e, Ff(e);
}
function Ff(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || pl;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || Ee;
        u = pl;
        var s = Ee;
        if (pl = i, (Ee = a) && !s)
          for (L = l; L !== null; )
            i = L, a = i.child, i.tag === 22 && i.memoizedState !== null ? cs(l) : a !== null ? (a.return = i, L = a) : cs(l);
        for (; o !== null; )
          L = o, Ff(o), o = o.sibling;
        L = l, pl = u, Ee = s;
      }
      as(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, L = o) : as(e);
  }
}
function as(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Qa(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qa(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var h = s.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Nr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        Ee || t.flags & 512 && Gi(t);
      } catch (c) {
        re(t, t.return, c);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function ss(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function cs(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fo(4, t);
          } catch (a) {
            re(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              re(t, l, a);
            }
          }
          var o = t.return;
          try {
            Gi(t);
          } catch (a) {
            re(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Gi(t);
          } catch (a) {
            re(t, i, a);
          }
      }
    } catch (a) {
      re(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, L = u;
      break;
    }
    L = t.return;
  }
}
var Nh = Math.ceil, Xl = Ct.ReactCurrentDispatcher, $u = Ct.ReactCurrentOwner, We = Ct.ReactCurrentBatchConfig, W = 0, he = null, se = null, ge = 0, Oe = 0, Rn = Qt(0), de = 0, $r = null, un = 0, po = 0, Bu = 0, kr = null, Le = null, Vu = 0, Vn = 1 / 0, dt = null, Gl = !1, qi = null, At = null, hl = !1, Tt = null, Zl = 0, Er = 0, bi = null, Pl = -1, _l = 0;
function Pe() {
  return W & 6 ? oe() : Pl !== -1 ? Pl : Pl = oe();
}
function $t(e) {
  return e.mode & 1 ? W & 2 && ge !== 0 ? ge & -ge : dh.transition !== null ? (_l === 0 && (_l = gc()), _l) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Cc(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < Er)
    throw Er = 0, bi = null, Error(E(185));
  Hr(e, n, r), (!(W & 2) || e !== he) && (e === he && (!(W & 2) && (po |= n), de === 4 && Mt(e, ge)), ze(e, r), n === 1 && W === 0 && !(t.mode & 1) && (Vn = oe() + 500, ao && Kt()));
}
function ze(e, t) {
  var n = e.callbackNode;
  dp(e, t);
  var r = Tl(e, e === he ? ge : 0);
  if (r === 0)
    n !== null && wa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && wa(n), t === 1)
      e.tag === 0 ? fh(fs.bind(null, e)) : Hc(fs.bind(null, e)), uh(function() {
        !(W & 6) && Kt();
      }), n = null;
    else {
      switch (yc(r)) {
        case 1:
          n = hu;
          break;
        case 4:
          n = mc;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = vc;
          break;
        default:
          n = zl;
      }
      n = Hf(n, jf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function jf(e, t) {
  if (Pl = -1, _l = 0, W & 6)
    throw Error(E(327));
  var n = e.callbackNode;
  if (On() && e.callbackNode !== n)
    return null;
  var r = Tl(e, e === he ? ge : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Jl(e, r);
  else {
    t = r;
    var l = W;
    W |= 2;
    var o = Uf();
    (he !== e || ge !== t) && (dt = null, Vn = oe() + 500, tn(e, t));
    do
      try {
        zh();
        break;
      } catch (u) {
        If(e, u);
      }
    while (1);
    Ru(), Xl.current = o, W = l, se !== null ? t = 0 : (he = null, ge = 0, t = de);
  }
  if (t !== 0) {
    if (t === 2 && (l = _i(e), l !== 0 && (r = l, t = eu(e, l))), t === 1)
      throw n = $r, tn(e, 0), Mt(e, r), ze(e, oe()), n;
    if (t === 6)
      Mt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Dh(l) && (t = Jl(e, r), t === 2 && (o = _i(e), o !== 0 && (r = o, t = eu(e, o))), t === 1))
        throw n = $r, tn(e, 0), Mt(e, r), ze(e, oe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Zt(e, Le, dt);
          break;
        case 3:
          if (Mt(e, r), (r & 130023424) === r && (t = Vu + 500 - oe(), 10 < t)) {
            if (Tl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Pe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Oi(Zt.bind(null, e, Le, dt), t);
            break;
          }
          Zt(e, Le, dt);
          break;
        case 4:
          if (Mt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - et(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Nh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Oi(Zt.bind(null, e, Le, dt), r);
            break;
          }
          Zt(e, Le, dt);
          break;
        case 5:
          Zt(e, Le, dt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ze(e, oe()), e.callbackNode === n ? jf.bind(null, e) : null;
}
function eu(e, t) {
  var n = kr;
  return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256), e = Jl(e, t), e !== 2 && (t = Le, Le = n, t !== null && tu(t)), e;
}
function tu(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function Dh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!nt(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Mt(e, t) {
  for (t &= ~Bu, t &= ~po, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fs(e) {
  if (W & 6)
    throw Error(E(327));
  On();
  var t = Tl(e, 0);
  if (!(t & 1))
    return ze(e, oe()), null;
  var n = Jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _i(e);
    r !== 0 && (t = r, n = eu(e, r));
  }
  if (n === 1)
    throw n = $r, tn(e, 0), Mt(e, t), ze(e, oe()), n;
  if (n === 6)
    throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Le, dt), ze(e, oe()), null;
}
function Hu(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (Vn = oe() + 500, ao && Kt());
  }
}
function an(e) {
  Tt !== null && Tt.tag === 0 && !(W & 6) && On();
  var t = W;
  W |= 1;
  var n = We.transition, r = K;
  try {
    if (We.transition = null, K = 1, e)
      return e();
  } finally {
    K = r, We.transition = n, W = t, !(W & 6) && Kt();
  }
}
function Wu() {
  Oe = Rn.current, J(Rn);
}
function tn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ih(n)), se !== null)
    for (n = se.return; n !== null; ) {
      var r = n;
      switch (Cu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ul();
          break;
        case 3:
          $n(), J(De), J(xe), Tu();
          break;
        case 5:
          zu(r);
          break;
        case 4:
          $n();
          break;
        case 13:
          J(ee);
          break;
        case 19:
          J(ee);
          break;
        case 10:
          Lu(r.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      n = n.return;
    }
  if (he = e, se = e = Bt(e.current, null), ge = Oe = t, de = 0, $r = null, Bu = po = un = 0, Le = kr = null, qt !== null) {
    for (t = 0; t < qt.length; t++)
      if (n = qt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    qt = null;
  }
  return e;
}
function If(e, t) {
  do {
    var n = se;
    try {
      if (Ru(), El.current = Yl, Kl) {
        for (var r = te.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Kl = !1;
      }
      if (on = 0, pe = fe = te = null, wr = !1, Ir = 0, $u.current = null, n === null || n.return === null) {
        de = 1, $r = t, se = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, a = t;
        if (t = ge, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var c = h.alternate;
            c ? (h.updateQueue = c.updateQueue, h.memoizedState = c.memoizedState, h.lanes = c.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = qa(i);
          if (y !== null) {
            y.flags &= -257, ba(y, i, u, o, t), y.mode & 1 && Ja(o, s, t), t = y, a = s;
            var k = t.updateQueue;
            if (k === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else
              k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ja(o, s, t), Qu();
              break e;
            }
            a = Error(E(426));
          }
        } else if (b && u.mode & 1) {
          var R = qa(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), ba(R, i, u, o, t), Pu(Bn(a, u));
            break e;
          }
        }
        o = a = Bn(a, u), de !== 4 && (de = 2), kr === null ? kr = [o] : kr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = Sf(o, a, t);
              Wa(o, d);
              break e;
            case 1:
              u = a;
              var f = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (At === null || !At.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = kf(o, u, t);
                Wa(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $f(n);
    } catch (C) {
      t = C, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Uf() {
  var e = Xl.current;
  return Xl.current = Yl, e === null ? Yl : e;
}
function Qu() {
  (de === 0 || de === 3 || de === 2) && (de = 4), he === null || !(un & 268435455) && !(po & 268435455) || Mt(he, ge);
}
function Jl(e, t) {
  var n = W;
  W |= 2;
  var r = Uf();
  (he !== e || ge !== t) && (dt = null, tn(e, t));
  do
    try {
      Mh();
      break;
    } catch (l) {
      If(e, l);
    }
  while (1);
  if (Ru(), W = n, Xl.current = r, se !== null)
    throw Error(E(261));
  return he = null, ge = 0, de;
}
function Mh() {
  for (; se !== null; )
    Af(se);
}
function zh() {
  for (; se !== null && !rp(); )
    Af(se);
}
function Af(e) {
  var t = Vf(e.alternate, e, Oe);
  e.memoizedProps = e.pendingProps, t === null ? $f(e) : se = t, $u.current = null;
}
function $f(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ph(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        de = 6, se = null;
        return;
      }
    } else if (n = Ch(n, t, Oe), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function Zt(e, t, n) {
  var r = K, l = We.transition;
  try {
    We.transition = null, K = 1, Th(e, t, n, r);
  } finally {
    We.transition = l, K = r;
  }
  return null;
}
function Th(e, t, n, r) {
  do
    On();
  while (Tt !== null);
  if (W & 6)
    throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (pp(e, o), e === he && (se = he = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || hl || (hl = !0, Hf(zl, function() {
    return On(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = We.transition, We.transition = null;
    var i = K;
    K = 1;
    var u = W;
    W |= 4, $u.current = null, Rh(e, n), Of(n, e), bp(zi), Ol = !!Mi, zi = Mi = null, e.current = n, Lh(n), lp(), W = u, K = i, We.transition = o;
  } else
    e.current = n;
  if (hl && (hl = !1, Tt = e, Zl = l), o = e.pendingLanes, o === 0 && (At = null), up(n.stateNode), ze(e, oe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Gl)
    throw Gl = !1, e = qi, qi = null, e;
  return Zl & 1 && e.tag !== 0 && On(), o = e.pendingLanes, o & 1 ? e === bi ? Er++ : (Er = 0, bi = e) : Er = 0, Kt(), null;
}
function On() {
  if (Tt !== null) {
    var e = yc(Zl), t = We.transition, n = K;
    try {
      if (We.transition = null, K = 16 > e ? 16 : e, Tt === null)
        var r = !1;
      else {
        if (e = Tt, Tt = null, Zl = 0, W & 6)
          throw Error(E(331));
        var l = W;
        for (W |= 4, L = e.current; L !== null; ) {
          var o = L, i = o.child;
          if (L.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (L = s; L !== null; ) {
                  var h = L;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sr(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, L = m;
                  else
                    for (; L !== null; ) {
                      h = L;
                      var c = h.sibling, y = h.return;
                      if (Mf(h), h === s) {
                        L = null;
                        break;
                      }
                      if (c !== null) {
                        c.return = y, L = c;
                        break;
                      }
                      L = y;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var R = w.sibling;
                    w.sibling = null, w = R;
                  } while (w !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, L = i;
          else
            e:
              for (; L !== null; ) {
                if (o = L, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sr(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  d.return = o.return, L = d;
                  break e;
                }
                L = o.return;
              }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          i = L;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null)
            p.return = i, L = p;
          else
            e:
              for (i = f; L !== null; ) {
                if (u = L, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fo(9, u);
                    }
                  } catch (C) {
                    re(u, u.return, C);
                  }
                if (u === i) {
                  L = null;
                  break e;
                }
                var g = u.sibling;
                if (g !== null) {
                  g.return = u.return, L = g;
                  break e;
                }
                L = u.return;
              }
        }
        if (W = l, Kt(), ut && typeof ut.onPostCommitFiberRoot == "function")
          try {
            ut.onPostCommitFiberRoot(ro, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      K = n, We.transition = t;
    }
  }
  return !1;
}
function ds(e, t, n) {
  t = Bn(n, t), t = Sf(e, t, 1), e = Ut(e, t, 1), t = Pe(), e !== null && (Hr(e, 1, t), ze(e, t));
}
function re(e, t, n) {
  if (e.tag === 3)
    ds(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (At === null || !At.has(r))) {
          e = Bn(n, e), e = kf(t, e, 1), t = Ut(t, e, 1), e = Pe(), t !== null && (Hr(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Oh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, he === e && (ge & n) === n && (de === 4 || de === 3 && (ge & 130023424) === ge && 500 > oe() - Vu ? tn(e, 0) : Bu |= n), ze(e, t);
}
function Bf(e, t) {
  t === 0 && (e.mode & 1 ? (t = ll, ll <<= 1, !(ll & 130023424) && (ll = 4194304)) : t = 1);
  var n = Pe();
  e = kt(e, t), e !== null && (Hr(e, t, n), ze(e, n));
}
function Fh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Bf(e, n);
}
function jh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Bf(e, n);
}
var Vf;
Vf = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current)
      Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ne = !1, xh(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else
    Ne = !1, b && t.flags & 1048576 && Wc(t, Bl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Cl(e, t), e = t.pendingProps;
      var l = In(t, xe.current);
      Tn(t, n), l = Fu(null, t, r, e, l, n);
      var o = ju();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Me(r) ? (o = !0, Al(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Du(t), l.updater = so, t.stateNode = l, l._reactInternals = t, Bi(t, r, e, n), t = Wi(null, t, r, !0, o, n)) : (t.tag = 0, b && o && xu(t), Ce(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Cl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Uh(r), e = Je(r, e), l) {
          case 0:
            t = Hi(null, t, r, e, n);
            break e;
          case 1:
            t = ns(null, t, r, e, n);
            break e;
          case 11:
            t = es(null, t, r, e, n);
            break e;
          case 14:
            t = ts(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Je(r, l), Hi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Je(r, l), ns(e, t, r, l, n);
    case 3:
      e: {
        if (Pf(t), e === null)
          throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Xc(e, t), Wl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Bn(Error(E(423)), t), t = rs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Bn(Error(E(424)), t), t = rs(e, t, r, n, l);
            break e;
          } else
            for (je = It(t.stateNode.containerInfo.firstChild), Ie = t, b = !0, be = null, n = qc(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Un(), r === l) {
            t = Et(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bc(t), e === null && Ui(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Ti(r, l) ? i = null : o !== null && Ti(r, o) && (t.flags |= 32), Cf(e, t), Ce(e, t, i, n), t.child;
    case 6:
      return e === null && Ui(t), null;
    case 13:
      return _f(e, t, n);
    case 4:
      return Mu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = An(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Je(r, l), es(e, t, r, l, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, G(Vl, r._currentValue), r._currentValue = i, o !== null)
          if (nt(o.value, i)) {
            if (o.children === l.children && !De.current) {
              t = Et(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      a = gt(-1, n & -n), a.tag = 2;
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var h = s.pending;
                        h === null ? a.next = a : (a.next = h.next, h.next = a), s.pending = a;
                      }
                    }
                    o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ai(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(E(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ai(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ce(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Tn(t, n), l = Qe(l), r = r(l), t.flags |= 1, Ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Je(r, t.pendingProps), l = Je(r.type, l), ts(e, t, r, l, n);
    case 15:
      return Ef(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Je(r, l), Cl(e, t), t.tag = 1, Me(r) ? (e = !0, Al(t)) : e = !1, Tn(t, n), Zc(t, r, l), Bi(t, r, l, n), Wi(null, t, r, !0, e, n);
    case 19:
      return Rf(e, t, n);
    case 22:
      return xf(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Hf(e, t) {
  return hc(e, t);
}
function Ih(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new Ih(e, t, n, r);
}
function Ku(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Uh(e) {
  if (typeof e == "function")
    return Ku(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fu)
      return 11;
    if (e === du)
      return 14;
  }
  return 2;
}
function Bt(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Rl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Ku(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case gn:
          return nn(n.children, l, o, t);
        case cu:
          i = 8, l |= 8;
          break;
        case fi:
          return e = He(12, n, t, l | 2), e.elementType = fi, e.lanes = o, e;
        case di:
          return e = He(13, n, t, l), e.elementType = di, e.lanes = o, e;
        case pi:
          return e = He(19, n, t, l), e.elementType = pi, e.lanes = o, e;
        case Js:
          return ho(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Gs:
                i = 10;
                break e;
              case Zs:
                i = 9;
                break e;
              case fu:
                i = 11;
                break e;
              case du:
                i = 14;
                break e;
              case Rt:
                i = 16, r = null;
                break e;
            }
          throw Error(E(130, e == null ? e : typeof e, ""));
      }
  return t = He(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function nn(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function ho(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = Js, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ti(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function ni(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ah(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jo(0), this.expirationTimes = jo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Yu(e, t, n, r, l, o, i, u, a) {
  return e = new Ah(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = He(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Du(o), e;
}
function $h(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Wf(e) {
  if (!e)
    return Ht;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1)
      throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n))
      return Vc(e, n, t);
  }
  return t;
}
function Qf(e, t, n, r, l, o, i, u, a) {
  return e = Yu(n, r, !0, e, l, o, i, u, a), e.context = Wf(null), n = e.current, r = Pe(), l = $t(n), o = gt(r, l), o.callback = t ?? null, Ut(n, o, l), e.current.lanes = l, Hr(e, l, r), ze(e, r), e;
}
function mo(e, t, n, r) {
  var l = t.current, o = Pe(), i = $t(l);
  return n = Wf(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ut(l, t, i), e !== null && (tt(e, l, i, o), kl(e, l, i)), i;
}
function ql(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ps(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xu(e, t) {
  ps(e, t), (e = e.alternate) && ps(e, t);
}
function Bh() {
  return null;
}
var Kf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Gu(e) {
  this._internalRoot = e;
}
vo.prototype.render = Gu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(E(409));
  mo(e, t, null, null);
};
vo.prototype.unmount = Gu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function() {
      mo(null, e, null, null);
    }), t[St] = null;
  }
};
function vo(e) {
  this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = kc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++)
      ;
    Dt.splice(n, 0, e), n === 0 && xc(e);
  }
};
function Zu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function go(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function hs() {
}
function Vh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var s = ql(i);
        o.call(s);
      };
    }
    var i = Qf(t, r, e, 0, null, !1, !1, "", hs);
    return e._reactRootContainer = i, e[St] = i.current, zr(e.nodeType === 8 ? e.parentNode : e), an(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = ql(a);
      u.call(s);
    };
  }
  var a = Yu(e, 0, !1, null, null, !1, !1, "", hs);
  return e._reactRootContainer = a, e[St] = a.current, zr(e.nodeType === 8 ? e.parentNode : e), an(function() {
    mo(t, a, n, r);
  }), a;
}
function yo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = ql(i);
        u.call(a);
      };
    }
    mo(t, i, e, l);
  } else
    i = Vh(n, t, e, l, r);
  return ql(i);
}
wc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fr(t.pendingLanes);
        n !== 0 && (mu(t, n | 1), ze(t, oe()), !(W & 6) && (Vn = oe() + 500, Kt()));
      }
      break;
    case 13:
      an(function() {
        var r = kt(e, 1);
        if (r !== null) {
          var l = Pe();
          tt(r, e, 1, l);
        }
      }), Xu(e, 1);
  }
};
vu = function(e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      tt(t, e, 134217728, n);
    }
    Xu(e, 134217728);
  }
};
Sc = function(e) {
  if (e.tag === 13) {
    var t = $t(e), n = kt(e, t);
    if (n !== null) {
      var r = Pe();
      tt(n, e, t, r);
    }
    Xu(e, t);
  }
};
kc = function() {
  return K;
};
Ec = function(e, t) {
  var n = K;
  try {
    return K = e, t();
  } finally {
    K = n;
  }
};
xi = function(e, t, n) {
  switch (t) {
    case "input":
      if (vi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = uo(r);
            if (!l)
              throw Error(E(90));
            bs(r), vi(r, l);
          }
        }
      }
      break;
    case "textarea":
      tc(e, n);
      break;
    case "select":
      t = n.value, t != null && Nn(e, !!n.multiple, t, !1);
  }
};
ac = Hu;
sc = an;
var Hh = { usingClientEntryPoint: !1, Events: [Qr, kn, uo, ic, uc, Hu] }, ir = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Wh = { bundleType: ir.bundleType, version: ir.version, rendererPackageName: ir.rendererPackageName, rendererConfig: ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = dc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ir.findFiberByHostInstance || Bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ml.isDisabled && ml.supportsFiber)
    try {
      ro = ml.inject(Wh), ut = ml;
    } catch {
    }
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hh;
Ae.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zu(t))
    throw Error(E(200));
  return $h(e, t, null, n);
};
Ae.createRoot = function(e, t) {
  if (!Zu(e))
    throw Error(E(299));
  var n = !1, r = "", l = Kf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Yu(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, zr(e.nodeType === 8 ? e.parentNode : e), new Gu(t);
};
Ae.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = dc(t), e = e === null ? null : e.stateNode, e;
};
Ae.flushSync = function(e) {
  return an(e);
};
Ae.hydrate = function(e, t, n) {
  if (!go(t))
    throw Error(E(200));
  return yo(null, e, t, !0, n);
};
Ae.hydrateRoot = function(e, t, n) {
  if (!Zu(e))
    throw Error(E(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Kf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Qf(t, null, e, 1, n ?? null, l, !1, o, i), e[St] = t.current, zr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new vo(t);
};
Ae.render = function(e, t, n) {
  if (!go(t))
    throw Error(E(200));
  return yo(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function(e) {
  if (!go(e))
    throw Error(E(40));
  return e._reactRootContainer ? (an(function() {
    yo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[St] = null;
    });
  }), !0) : !1;
};
Ae.unstable_batchedUpdates = Hu;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!go(n))
    throw Error(E(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(E(38));
  return yo(e, t, n, !1, r);
};
Ae.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), e.exports = Ae;
})(Bd);
var ms = ai;
ui.createRoot = ms.createRoot, ui.hydrateRoot = ms.hydrateRoot;
/**
 * @remix-run/router v1.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, X.apply(this, arguments);
}
var ae;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ae || (ae = {}));
const vs = "popstate";
function Qh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let {
      pathname: o,
      search: i,
      hash: u
    } = r.location;
    return Br(
      "",
      {
        pathname: o,
        search: i,
        hash: u
      },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : xt(l);
  }
  return Xh(t, n, null, e);
}
function A(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Kh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Yh() {
  return Math.random().toString(36).substr(2, 8);
}
function gs(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Br(e, t, n, r) {
  return n === void 0 && (n = null), X({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Pt(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Yh()
  });
}
function xt(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Pt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Xh(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: l = document.defaultView,
    v5Compat: o = !1
  } = r, i = l.history, u = ae.Pop, a = null, s = h();
  s == null && (s = 0, i.replaceState(X({}, i.state, {
    idx: s
  }), ""));
  function h() {
    return (i.state || {
      idx: null
    }).idx;
  }
  function m() {
    let R = ae.Pop, d = h();
    if (d != null) {
      let f = d - s;
      u = R, s = d, a && a({
        action: u,
        location: w.location,
        delta: f
      });
    } else
      Kh(
        !1,
        // TODO: Write up a doc that explains our blocking strategy in detail
        // and link to it here so people can understand better what is going on
        // and how to avoid it.
        "You are trying to block a POP navigation to a location that was not created by @remix-run/router. The block will fail silently in production, but in general you should do all navigation with the router (instead of using window.history.pushState directly) to avoid this situation."
      );
  }
  function c(R, d) {
    u = ae.Push;
    let f = Br(w.location, R, d);
    n && n(f, R), s = h() + 1;
    let p = gs(f, s), g = w.createHref(f);
    try {
      i.pushState(p, "", g);
    } catch {
      l.location.assign(g);
    }
    o && a && a({
      action: u,
      location: w.location,
      delta: 1
    });
  }
  function y(R, d) {
    u = ae.Replace;
    let f = Br(w.location, R, d);
    n && n(f, R), s = h();
    let p = gs(f, s), g = w.createHref(f);
    i.replaceState(p, "", g), o && a && a({
      action: u,
      location: w.location,
      delta: 0
    });
  }
  function k(R) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href, f = typeof R == "string" ? R : xt(R);
    return A(d, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, d);
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(R) {
      if (a)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(vs, m), a = R, () => {
        l.removeEventListener(vs, m), a = null;
      };
    },
    createHref(R) {
      return t(l, R);
    },
    createURL: k,
    encodeLocation(R) {
      let d = k(R);
      return {
        pathname: d.pathname,
        search: d.search,
        hash: d.hash
      };
    },
    push: c,
    replace: y,
    go(R) {
      return i.go(R);
    }
  };
  return w;
}
var ve;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(ve || (ve = {}));
function Gh(e) {
  return e.index === !0;
}
function Yf(e, t, n) {
  return t === void 0 && (t = []), n === void 0 && (n = /* @__PURE__ */ new Set()), e.map((r, l) => {
    let o = [...t, l], i = typeof r.id == "string" ? r.id : o.join("-");
    return A(r.index !== !0 || !r.children, "Cannot specify children on an index route"), A(!n.has(i), 'Found a route id collision on id "' + i + `".  Route id's must be globally unique within Data Router usages`), n.add(i), Gh(r) ? X({}, r, {
      id: i
    }) : X({}, r, {
      id: i,
      children: r.children ? Yf(r.children, o, n) : void 0
    });
  });
}
function pr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Pt(t) : t, l = Zf(r.pathname || "/", n);
  if (l == null)
    return null;
  let o = Xf(e);
  Zh(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u)
    i = om(
      o[u],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      am(l)
    );
  return i;
}
function Xf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    a.relativePath.startsWith("/") && (A(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let s = yt([r, a.relativePath]), h = n.concat(a);
    o.children && o.children.length > 0 && (A(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')
    ), Xf(o.children, t, h, s)), !(o.path == null && !o.index) && t.push({
      path: s,
      score: rm(s, o.index),
      routesMeta: h
    });
  };
  return e.forEach((o, i) => {
    var u;
    if (o.path === "" || !((u = o.path) != null && u.includes("?")))
      l(o, i);
    else
      for (let a of Gf(o.path))
        l(o, i, a);
  }), t;
}
function Gf(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return l ? [o, ""] : [o];
  let i = Gf(r.join("/")), u = [];
  return u.push(...i.map((a) => a === "" ? o : [o, a].join("/"))), l && u.push(...i), u.map((a) => e.startsWith("/") && a === "" ? "/" : a);
}
function Zh(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : lm(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Jh = /^:\w+$/, qh = 3, bh = 2, em = 1, tm = 10, nm = -2, ys = (e) => e === "*";
function rm(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(ys) && (r += nm), t && (r += bh), n.filter((l) => !ys(l)).reduce((l, o) => l + (Jh.test(o) ? qh : o === "" ? em : tm), r);
}
function lm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function om(e, t) {
  let {
    routesMeta: n
  } = e, r = {}, l = "/", o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i], a = i === n.length - 1, s = l === "/" ? t : t.slice(l.length) || "/", h = im({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: a
    }, s);
    if (!h)
      return null;
    Object.assign(r, h.params);
    let m = u.route;
    o.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: yt([l, h.pathname]),
      pathnameBase: dm(yt([l, h.pathnameBase])),
      route: m
    }), h.pathnameBase !== "/" && (l = yt([l, h.pathnameBase]));
  }
  return o;
}
function im(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = um(e.path, e.caseSensitive, e.end), l = t.match(n);
  if (!l)
    return null;
  let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1);
  return {
    params: r.reduce((s, h, m) => {
      if (h === "*") {
        let c = u[m] || "";
        i = o.slice(0, o.length - c.length).replace(/(.)\/+$/, "$1");
      }
      return s[h] = sm(u[m] || "", h), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e
  };
}
function um(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), wo(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push("*"), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r];
}
function am(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return wo(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function sm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return wo(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function Zf(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function wo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function cm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = ""
  } = typeof e == "string" ? Pt(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : fm(n, t) : t,
    search: pm(r),
    hash: hm(l)
  };
}
function fm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((l) => {
    l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
  }), n.length > 1 ? n.join("/") : "/";
}
function ri(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function So(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Ju(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string" ? l = Pt(e) : (l = X({}, e), A(!l.pathname || !l.pathname.includes("?"), ri("?", "pathname", "search", l)), A(!l.pathname || !l.pathname.includes("#"), ri("#", "pathname", "hash", l)), A(!l.search || !l.search.includes("#"), ri("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
  if (r || i == null)
    u = n;
  else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let c = i.split("/");
      for (; c[0] === ".."; )
        c.shift(), m -= 1;
      l.pathname = c.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let a = cm(l, u), s = i && i !== "/" && i.endsWith("/"), h = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || h) && (a.pathname += "/"), a;
}
const yt = (e) => e.join("/").replace(/\/\/+/g, "/"), dm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), pm = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, hm = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class ws extends Error {
}
class mm {
  constructor(t, n) {
    this.pendingKeysSet = /* @__PURE__ */ new Set(), this.subscribers = /* @__PURE__ */ new Set(), this.deferredKeys = [], A(t && typeof t == "object" && !Array.isArray(t), "defer() only accepts plain objects");
    let r;
    this.abortPromise = new Promise((o, i) => r = i), this.controller = new AbortController();
    let l = () => r(new ws("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", l), this.controller.signal.addEventListener("abort", l), this.data = Object.entries(t).reduce((o, i) => {
      let [u, a] = i;
      return Object.assign(o, {
        [u]: this.trackPromise(u, a)
      });
    }, {}), this.init = n;
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise))
      return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then((l) => this.onSettle(r, t, null, l), (l) => this.onSettle(r, t, l));
    return r.catch(() => {
    }), Object.defineProperty(r, "_tracked", {
      get: () => !0
    }), r;
  }
  onSettle(t, n, r, l) {
    return this.controller.signal.aborted && r instanceof ws ? (this.unlistenAbortSignal(), Object.defineProperty(t, "_error", {
      get: () => r
    }), Promise.reject(r)) : (this.pendingKeysSet.delete(n), this.done && this.unlistenAbortSignal(), r ? (Object.defineProperty(t, "_error", {
      get: () => r
    }), this.emit(!1, n), Promise.reject(r)) : (Object.defineProperty(t, "_data", {
      get: () => l
    }), this.emit(!1, n), l));
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(), this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)), this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener("abort", r), n = await new Promise((l) => {
        this.subscribe((o) => {
          t.removeEventListener("abort", r), (o || this.done) && l(o);
        });
      });
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return A(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((t, n) => {
      let [r, l] = n;
      return Object.assign(t, {
        [r]: gm(l)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function vm(e) {
  return e instanceof Promise && e._tracked === !0;
}
function gm(e) {
  if (!vm(e))
    return e;
  if (e._error)
    throw e._error;
  return e._data;
}
class ko {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1), this.status = t, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
}
function Jf(e) {
  return e instanceof ko;
}
const qf = ["post", "put", "patch", "delete"], ym = new Set(qf), wm = ["get", ...qf], Sm = new Set(wm), km = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Em = /* @__PURE__ */ new Set([307, 308]), li = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0
}, xm = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0
}, Ss = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, bf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Cm = !bf;
function Pm(e) {
  A(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let t = Yf(e.routes), n = null, r = /* @__PURE__ */ new Set(), l = null, o = null, i = null, u = e.hydrationData != null, a = pr(t, e.history.location, e.basename), s = null;
  if (a == null) {
    let v = pt(404, {
      pathname: e.history.location.pathname
    }), {
      matches: S,
      route: x
    } = _s(t);
    a = S, s = {
      [x.id]: v
    };
  }
  let h = !a.some((v) => v.route.loader) || e.hydrationData != null, m, c = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: a,
    initialized: h,
    navigation: li,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || s,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, y = ae.Pop, k = !1, w, R = !1, d = !1, f = [], p = [], g = /* @__PURE__ */ new Map(), C = 0, M = -1, D = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), le = null, Ye = /* @__PURE__ */ new Map(), st = !1;
  function Xr() {
    return n = e.history.listen((v) => {
      let {
        action: S,
        location: x,
        delta: T
      } = v;
      if (st) {
        st = !1;
        return;
      }
      let N = ra({
        currentLocation: c.location,
        nextLocation: x,
        historyAction: S
      });
      if (N) {
        st = !0, e.history.go(T * -1), Zr(N, {
          state: "blocked",
          location: x,
          proceed() {
            Zr(N, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: x
            }), e.history.go(T);
          },
          reset() {
            Gn(N), ie({
              blockers: new Map(m.state.blockers)
            });
          }
        });
        return;
      }
      return Q(S, x);
    }), c.initialized || Q(ae.Pop, c.location), m;
  }
  function Po() {
    n && n(), r.clear(), w && w.abort(), c.fetchers.forEach((v, S) => Lo(S)), c.blockers.forEach((v, S) => Gn(S));
  }
  function Kn(v) {
    return r.add(v), () => r.delete(v);
  }
  function ie(v) {
    c = X({}, c, v), r.forEach((S) => S(c));
  }
  function _(v, S) {
    var x, T;
    let N = c.actionData != null && c.navigation.formMethod != null && Nt(c.navigation.formMethod) && c.navigation.state === "loading" && ((x = v.state) == null ? void 0 : x._isRedirect) !== !0, U;
    S.actionData ? Object.keys(S.actionData).length > 0 ? U = S.actionData : U = null : N ? U = c.actionData : U = null;
    let F = S.loaderData ? Ps(c.loaderData, S.loaderData, S.matches || [], S.errors) : c.loaderData;
    for (let [O] of Ye)
      Gn(O);
    let H = k === !0 || c.navigation.formMethod != null && Nt(c.navigation.formMethod) && ((T = v.state) == null ? void 0 : T._isRedirect) !== !0;
    ie(X({}, S, {
      actionData: U,
      loaderData: F,
      historyAction: y,
      location: v,
      initialized: !0,
      navigation: li,
      revalidation: "idle",
      restoreScrollPosition: la(v, S.matches || c.matches),
      preventScrollReset: H,
      blockers: new Map(c.blockers)
    })), R || y === ae.Pop || (y === ae.Push ? e.history.push(v, v.state) : y === ae.Replace && e.history.replace(v, v.state)), y = ae.Pop, k = !1, R = !1, d = !1, f = [], p = [];
  }
  async function j(v, S) {
    if (typeof v == "number") {
      e.history.go(v);
      return;
    }
    let {
      path: x,
      submission: T,
      error: N
    } = ks(v, S), U = c.location, F = Br(c.location, x, S && S.state);
    F = X({}, F, e.history.encodeLocation(F));
    let H = S && S.replace != null ? S.replace : void 0, O = ae.Push;
    H === !0 ? O = ae.Replace : H === !1 || T != null && Nt(T.formMethod) && T.formAction === c.location.pathname + c.location.search && (O = ae.Replace);
    let ce = S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0, B = ra({
      currentLocation: U,
      nextLocation: F,
      historyAction: O
    });
    if (B) {
      Zr(B, {
        state: "blocked",
        location: F,
        proceed() {
          Zr(B, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F
          }), j(v, S);
        },
        reset() {
          Gn(B), ie({
            blockers: new Map(c.blockers)
          });
        }
      });
      return;
    }
    return await Q(O, F, {
      submission: T,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: N,
      preventScrollReset: ce,
      replace: S && S.replace
    });
  }
  function $() {
    if (_o(), ie({
      revalidation: "loading"
    }), c.navigation.state !== "submitting") {
      if (c.navigation.state === "idle") {
        Q(c.historyAction, c.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      Q(y || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation
      });
    }
  }
  async function Q(v, S, x) {
    w && w.abort(), w = null, y = v, R = (x && x.startUninterruptedRevalidation) === !0, dd(c.location, c.matches), k = (x && x.preventScrollReset) === !0;
    let T = x && x.overrideNavigation, N = pr(t, S, e.basename);
    if (!N) {
      let q = pt(404, {
        pathname: S.pathname
      }), {
        matches: Xe,
        route: Ge
      } = _s(t);
      No(), _(S, {
        matches: Xe,
        loaderData: {},
        errors: {
          [Ge.id]: q
        }
      });
      return;
    }
    if (Dm(c.location, S)) {
      _(S, {
        matches: N
      });
      return;
    }
    w = new AbortController();
    let U = ar(e.history, S, w.signal, x && x.submission), F, H;
    if (x && x.pendingError)
      H = {
        [Ln(N).route.id]: x.pendingError
      };
    else if (x && x.submission && Nt(x.submission.formMethod)) {
      let q = await ue(U, S, x.submission, N, {
        replace: x.replace
      });
      if (q.shortCircuited)
        return;
      F = q.pendingActionData, H = q.pendingActionError, T = X({
        state: "loading",
        location: S
      }, x.submission), U = new Request(U.url, {
        signal: U.signal
      });
    }
    let {
      shortCircuited: O,
      loaderData: ce,
      errors: B
    } = await dn(U, S, N, T, x && x.submission, x && x.replace, F, H);
    O || (w = null, _(S, X({
      matches: N
    }, F ? {
      actionData: F
    } : {}, {
      loaderData: ce,
      errors: B
    })));
  }
  async function ue(v, S, x, T, N) {
    _o();
    let U = X({
      state: "submitting",
      location: S
    }, x);
    ie({
      navigation: U
    });
    let F, H = Ds(T, S);
    if (!H.route.action)
      F = {
        type: ve.error,
        error: pt(405, {
          method: v.method,
          pathname: S.pathname,
          routeId: H.route.id
        })
      };
    else if (F = await ur("action", v, H, T, m.basename), v.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (Fn(F)) {
      let O;
      return N && N.replace != null ? O = N.replace : O = F.location === c.location.pathname + c.location.search, await Xn(c, F, {
        submission: x,
        replace: O
      }), {
        shortCircuited: !0
      };
    }
    if (xr(F)) {
      let O = Ln(T, H.route.id);
      return (N && N.replace) !== !0 && (y = ae.Push), {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [O.route.id]: F.error
        }
      };
    }
    if (en(F))
      throw pt(400, {
        type: "defer-action"
      });
    return {
      pendingActionData: {
        [H.route.id]: F.data
      }
    };
  }
  async function dn(v, S, x, T, N, U, F, H) {
    let O = T;
    O || (O = X({
      state: "loading",
      location: S,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0
    }, N));
    let ce = N || (O.formMethod && O.formAction && O.formData && O.formEncType ? {
      formMethod: O.formMethod,
      formAction: O.formAction,
      formData: O.formData,
      formEncType: O.formEncType
    } : void 0), [B, q] = Es(e.history, c, x, ce, S, d, f, p, F, H, Y);
    if (No((we) => !(x && x.some((Te) => Te.route.id === we)) || B && B.some((Te) => Te.route.id === we)), B.length === 0 && q.length === 0)
      return _(S, X({
        matches: x,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: H || null
      }, F ? {
        actionData: F
      } : {})), {
        shortCircuited: !0
      };
    if (!R) {
      q.forEach((Te) => {
        let [Yt] = Te, Jn = c.fetchers.get(Yt), qn = {
          state: "loading",
          data: Jn && Jn.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0
        };
        c.fetchers.set(Yt, qn);
      });
      let we = F || c.actionData;
      ie(X({
        navigation: O
      }, we ? Object.keys(we).length === 0 ? {
        actionData: null
      } : {
        actionData: we
      } : {}, q.length > 0 ? {
        fetchers: new Map(c.fetchers)
      } : {}));
    }
    M = ++C, q.forEach((we) => {
      let [Te] = we;
      return g.set(Te, w);
    });
    let {
      results: Xe,
      loaderResults: Ge,
      fetcherResults: Zn
    } = await ea(c.matches, x, B, q, v);
    if (v.signal.aborted)
      return {
        shortCircuited: !0
      };
    q.forEach((we) => {
      let [Te] = we;
      return g.delete(Te);
    });
    let Jr = Rs(Xe);
    if (Jr)
      return await Xn(c, Jr, {
        replace: U
      }), {
        shortCircuited: !0
      };
    let {
      loaderData: qr,
      errors: hn
    } = Cs(c, x, B, Ge, H, q, Zn, I);
    I.forEach((we, Te) => {
      we.subscribe((Yt) => {
        (Yt || we.done) && I.delete(Te);
      });
    }), sd();
    let Do = na(M);
    return X({
      loaderData: qr,
      errors: hn
    }, Do || q.length > 0 ? {
      fetchers: new Map(c.fetchers)
    } : {});
  }
  function rt(v) {
    return c.fetchers.get(v) || xm;
  }
  function Yn(v, S, x, T) {
    if (Cm)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    g.has(v) && Gr(v);
    let N = pr(t, x, e.basename);
    if (!N) {
      Ro(v, S, pt(404, {
        pathname: x
      }));
      return;
    }
    let {
      path: U,
      submission: F
    } = ks(x, T, !0), H = Ds(N, U);
    if (F && Nt(F.formMethod)) {
      ct(v, S, U, H, N, F);
      return;
    }
    Y.set(v, [U, H, N]), pn(v, S, U, H, N, F);
  }
  async function ct(v, S, x, T, N, U) {
    if (_o(), Y.delete(v), !T.route.action) {
      let ft = pt(405, {
        method: U.formMethod,
        pathname: x,
        routeId: S
      });
      Ro(v, S, ft);
      return;
    }
    let F = c.fetchers.get(v), H = X({
      state: "submitting"
    }, U, {
      data: F && F.data,
      " _hasFetcherDoneAnything ": !0
    });
    c.fetchers.set(v, H), ie({
      fetchers: new Map(c.fetchers)
    });
    let O = new AbortController(), ce = ar(e.history, x, O.signal, U);
    g.set(v, O);
    let B = await ur("action", ce, T, N, m.basename);
    if (ce.signal.aborted) {
      g.get(v) === O && g.delete(v);
      return;
    }
    if (Fn(B)) {
      g.delete(v), z.add(v);
      let ft = X({
        state: "loading"
      }, U, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0
      });
      return c.fetchers.set(v, ft), ie({
        fetchers: new Map(c.fetchers)
      }), Xn(c, B, {
        isFetchActionRedirect: !0
      });
    }
    if (xr(B)) {
      Ro(v, S, B.error);
      return;
    }
    if (en(B))
      throw pt(400, {
        type: "defer-action"
      });
    let q = c.navigation.location || c.location, Xe = ar(e.history, q, O.signal), Ge = c.navigation.state !== "idle" ? pr(t, c.navigation.location, e.basename) : c.matches;
    A(Ge, "Didn't find any matches after fetcher action");
    let Zn = ++C;
    D.set(v, Zn);
    let Jr = X({
      state: "loading",
      data: B.data
    }, U, {
      " _hasFetcherDoneAnything ": !0
    });
    c.fetchers.set(v, Jr);
    let [qr, hn] = Es(
      e.history,
      c,
      Ge,
      U,
      q,
      d,
      f,
      p,
      {
        [T.route.id]: B.data
      },
      void 0,
      // No need to send through errors since we short circuit above
      Y
    );
    hn.filter((ft) => {
      let [Xt] = ft;
      return Xt !== v;
    }).forEach((ft) => {
      let [Xt] = ft, oa = c.fetchers.get(Xt), md = {
        state: "loading",
        data: oa && oa.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0
      };
      c.fetchers.set(Xt, md), g.set(Xt, O);
    }), ie({
      fetchers: new Map(c.fetchers)
    });
    let {
      results: Do,
      loaderResults: we,
      fetcherResults: Te
    } = await ea(c.matches, Ge, qr, hn, Xe);
    if (O.signal.aborted)
      return;
    D.delete(v), g.delete(v), hn.forEach((ft) => {
      let [Xt] = ft;
      return g.delete(Xt);
    });
    let Yt = Rs(Do);
    if (Yt)
      return Xn(c, Yt);
    let {
      loaderData: Jn,
      errors: qn
    } = Cs(c, c.matches, qr, we, void 0, hn, Te, I), pd = {
      state: "idle",
      data: B.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0
    };
    c.fetchers.set(v, pd);
    let hd = na(Zn);
    c.navigation.state === "loading" && Zn > M ? (A(y, "Expected pending action"), w && w.abort(), _(c.navigation.location, {
      matches: Ge,
      loaderData: Jn,
      errors: qn,
      fetchers: new Map(c.fetchers)
    })) : (ie(X({
      errors: qn,
      loaderData: Ps(c.loaderData, Jn, Ge, qn)
    }, hd ? {
      fetchers: new Map(c.fetchers)
    } : {})), d = !1);
  }
  async function pn(v, S, x, T, N, U) {
    let F = c.fetchers.get(v), H = X({
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0
    }, U, {
      data: F && F.data,
      " _hasFetcherDoneAnything ": !0
    });
    c.fetchers.set(v, H), ie({
      fetchers: new Map(c.fetchers)
    });
    let O = new AbortController(), ce = ar(e.history, x, O.signal);
    g.set(v, O);
    let B = await ur("loader", ce, T, N, m.basename);
    if (en(B) && (B = await rd(B, ce.signal, !0) || B), g.get(v) === O && g.delete(v), ce.signal.aborted)
      return;
    if (Fn(B)) {
      await Xn(c, B);
      return;
    }
    if (xr(B)) {
      let Xe = Ln(c.matches, S);
      c.fetchers.delete(v), ie({
        fetchers: new Map(c.fetchers),
        errors: {
          [Xe.route.id]: B.error
        }
      });
      return;
    }
    A(!en(B), "Unhandled fetcher deferred data");
    let q = {
      state: "idle",
      data: B.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0
    };
    c.fetchers.set(v, q), ie({
      fetchers: new Map(c.fetchers)
    });
  }
  async function Xn(v, S, x) {
    var T;
    let {
      submission: N,
      replace: U,
      isFetchActionRedirect: F
    } = x === void 0 ? {} : x;
    S.revalidate && (d = !0);
    let H = Br(
      v.location,
      S.location,
      // TODO: This can be removed once we get rid of useTransition in Remix v2
      X({
        _isRedirect: !0
      }, F ? {
        _isFetchActionRedirect: !0
      } : {})
    );
    if (A(H, "Expected a location on the redirect navigation"), bf && typeof ((T = window) == null ? void 0 : T.location) < "u") {
      let Ge = e.history.createURL(S.location).origin;
      if (window.location.origin !== Ge) {
        U ? window.location.replace(S.location) : window.location.assign(S.location);
        return;
      }
    }
    w = null;
    let O = U === !0 ? ae.Replace : ae.Push, {
      formMethod: ce,
      formAction: B,
      formEncType: q,
      formData: Xe
    } = v.navigation;
    !N && ce && B && Xe && q && (N = {
      formMethod: ce,
      formAction: B,
      formEncType: q,
      formData: Xe
    }), Em.has(S.status) && N && Nt(N.formMethod) ? await Q(O, H, {
      submission: X({}, N, {
        formAction: S.location
      }),
      // Preserve this flag across redirects
      preventScrollReset: k
    }) : await Q(O, H, {
      overrideNavigation: {
        state: "loading",
        location: H,
        formMethod: N ? N.formMethod : void 0,
        formAction: N ? N.formAction : void 0,
        formEncType: N ? N.formEncType : void 0,
        formData: N ? N.formData : void 0
      },
      // Preserve this flag across redirects
      preventScrollReset: k
    });
  }
  async function ea(v, S, x, T, N) {
    let U = await Promise.all([...x.map((O) => ur("loader", N, O, S, m.basename)), ...T.map((O) => {
      let [, ce, B, q] = O;
      return ur("loader", ar(e.history, ce, N.signal), B, q, m.basename);
    })]), F = U.slice(0, x.length), H = U.slice(x.length);
    return await Promise.all([Ls(v, x, F, N.signal, !1, c.loaderData), Ls(v, T.map((O) => {
      let [, , ce] = O;
      return ce;
    }), H, N.signal, !0)]), {
      results: U,
      loaderResults: F,
      fetcherResults: H
    };
  }
  function _o() {
    d = !0, f.push(...No()), Y.forEach((v, S) => {
      g.has(S) && (p.push(S), Gr(S));
    });
  }
  function Ro(v, S, x) {
    let T = Ln(c.matches, S);
    Lo(v), ie({
      errors: {
        [T.route.id]: x
      },
      fetchers: new Map(c.fetchers)
    });
  }
  function Lo(v) {
    g.has(v) && Gr(v), Y.delete(v), D.delete(v), z.delete(v), c.fetchers.delete(v);
  }
  function Gr(v) {
    let S = g.get(v);
    A(S, "Expected fetch controller: " + v), S.abort(), g.delete(v);
  }
  function ta(v) {
    for (let S of v) {
      let T = {
        state: "idle",
        data: rt(S).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0
      };
      c.fetchers.set(S, T);
    }
  }
  function sd() {
    let v = [];
    for (let S of z) {
      let x = c.fetchers.get(S);
      A(x, "Expected fetcher: " + S), x.state === "loading" && (z.delete(S), v.push(S));
    }
    ta(v);
  }
  function na(v) {
    let S = [];
    for (let [x, T] of D)
      if (T < v) {
        let N = c.fetchers.get(x);
        A(N, "Expected fetcher: " + x), N.state === "loading" && (Gr(x), D.delete(x), S.push(x));
      }
    return ta(S), S.length > 0;
  }
  function cd(v, S) {
    let x = c.blockers.get(v) || Ss;
    return Ye.get(v) !== S && (Ye.set(v, S), le == null ? le = v : v !== le && wo(!1, "A router only supports one blocker at a time")), x;
  }
  function Gn(v) {
    c.blockers.delete(v), Ye.delete(v), le === v && (le = null);
  }
  function Zr(v, S) {
    let x = c.blockers.get(v) || Ss;
    A(x.state === "unblocked" && S.state === "blocked" || x.state === "blocked" && S.state === "blocked" || x.state === "blocked" && S.state === "proceeding" || x.state === "blocked" && S.state === "unblocked" || x.state === "proceeding" && S.state === "unblocked", "Invalid blocker state transition: " + x.state + " -> " + S.state), c.blockers.set(v, S), ie({
      blockers: new Map(c.blockers)
    });
  }
  function ra(v) {
    let {
      currentLocation: S,
      nextLocation: x,
      historyAction: T
    } = v;
    if (le == null)
      return;
    let N = Ye.get(le);
    A(N, "Could not find a function for the active blocker");
    let U = c.blockers.get(le);
    if (!(U && U.state === "proceeding") && N({
      currentLocation: S,
      nextLocation: x,
      historyAction: T
    }))
      return le;
  }
  function No(v) {
    let S = [];
    return I.forEach((x, T) => {
      (!v || v(T)) && (x.cancel(), S.push(T), I.delete(T));
    }), S;
  }
  function fd(v, S, x) {
    if (l = v, i = S, o = x || ((T) => T.key), !u && c.navigation === li) {
      u = !0;
      let T = la(c.location, c.matches);
      T != null && ie({
        restoreScrollPosition: T
      });
    }
    return () => {
      l = null, i = null, o = null;
    };
  }
  function dd(v, S) {
    if (l && o && i) {
      let x = S.map((N) => Ns(N, c.loaderData)), T = o(v, x) || v.key;
      l[T] = i();
    }
  }
  function la(v, S) {
    if (l && o && i) {
      let x = S.map((U) => Ns(U, c.loaderData)), T = o(v, x) || v.key, N = l[T];
      if (typeof N == "number")
        return N;
    }
    return null;
  }
  return m = {
    get basename() {
      return e.basename;
    },
    get state() {
      return c;
    },
    get routes() {
      return t;
    },
    initialize: Xr,
    subscribe: Kn,
    enableScrollRestoration: fd,
    navigate: j,
    fetch: Yn,
    revalidate: $,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (v) => e.history.createHref(v),
    encodeLocation: (v) => e.history.encodeLocation(v),
    getFetcher: rt,
    deleteFetcher: Lo,
    dispose: Po,
    getBlocker: cd,
    deleteBlocker: Gn,
    _internalFetchControllers: g,
    _internalActiveDeferreds: I
  }, m;
}
function _m(e) {
  return e != null && "formData" in e;
}
function ks(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == "string" ? e : xt(e);
  if (!t || !_m(t))
    return {
      path: r
    };
  if (t.formMethod && !zm(t.formMethod))
    return {
      path: r,
      error: pt(405, {
        method: t.formMethod
      })
    };
  let l;
  if (t.formData && (l = {
    formMethod: t.formMethod || "get",
    formAction: nd(r),
    formEncType: t && t.formEncType || "application/x-www-form-urlencoded",
    formData: t.formData
  }, Nt(l.formMethod)))
    return {
      path: r,
      submission: l
    };
  let o = Pt(r);
  try {
    let i = td(t.formData);
    n && o.search && ld(o.search) && i.append("index", ""), o.search = "?" + i;
  } catch {
    return {
      path: r,
      error: pt(400)
    };
  }
  return {
    path: xt(o),
    submission: l
  };
}
function Rm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Es(e, t, n, r, l, o, i, u, a, s, h) {
  let m = s ? Object.values(s)[0] : a ? Object.values(a)[0] : void 0, c = s ? Object.keys(s)[0] : void 0, k = Rm(n, c).filter((R, d) => R.route.loader != null && (Lm(t.loaderData, t.matches[d], R) || // If this route had a pending deferred cancelled it must be revalidated
  i.some((f) => f === R.route.id) || xs(e, t.location, t.matches[d], r, l, R, o, m))), w = [];
  return h && h.forEach((R, d) => {
    let [f, p, g] = R;
    u.includes(d) ? w.push([d, f, p, g]) : o && xs(e, f, p, r, f, p, o, m) && w.push([d, f, p, g]);
  }), [k, w];
}
function Lm(e, t, n) {
  let r = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    n.route.id !== t.route.id
  ), l = e[n.route.id] === void 0;
  return r || l;
}
function ed(e, t) {
  let n = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n && n.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function xs(e, t, n, r, l, o, i, u) {
  let a = e.createURL(t), s = n.params, h = e.createURL(l), m = o.params, c = ed(n, o) || // Clicked the same link, resubmitted a GET form
  a.toString() === h.toString() || // Search params affect all loaders
  a.search !== h.search || // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  i;
  if (o.route.shouldRevalidate) {
    let y = o.route.shouldRevalidate(X({
      currentUrl: a,
      currentParams: s,
      nextUrl: h,
      nextParams: m
    }, r, {
      actionResult: u,
      defaultShouldRevalidate: c
    }));
    if (typeof y == "boolean")
      return y;
  }
  return c;
}
async function ur(e, t, n, r, l, o, i, u) {
  l === void 0 && (l = "/"), o === void 0 && (o = !1), i === void 0 && (i = !1);
  let a, s, h, m = new Promise((y, k) => h = k), c = () => h();
  t.signal.addEventListener("abort", c);
  try {
    let y = n.route[e];
    A(y, "Could not find the " + e + ' to run on the "' + n.route.id + '" route'), s = await Promise.race([y({
      request: t,
      params: n.params,
      context: u
    }), m]), A(s !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.");
  } catch (y) {
    a = ve.error, s = y;
  } finally {
    t.signal.removeEventListener("abort", c);
  }
  if (Mm(s)) {
    let y = s.status;
    if (km.has(y)) {
      let R = s.headers.get("Location");
      if (A(R, "Redirects returned/thrown from loaders/actions must have a Location header"), /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(R)) {
        if (!o) {
          let f = new URL(t.url), p = R.startsWith("//") ? new URL(f.protocol + R) : new URL(R);
          p.origin === f.origin && (R = p.pathname + p.search + p.hash);
        }
      } else {
        let f = r.slice(0, r.indexOf(n) + 1), p = So(f).map((C) => C.pathnameBase), g = Ju(R, p, new URL(t.url).pathname);
        if (A(xt(g), "Unable to resolve redirect location: " + R), l) {
          let C = g.pathname;
          g.pathname = C === "/" ? l : yt([l, C]);
        }
        R = xt(g);
      }
      if (o)
        throw s.headers.set("Location", R), s;
      return {
        type: ve.redirect,
        status: y,
        location: R,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null
      };
    }
    if (i)
      throw {
        type: a || ve.data,
        response: s
      };
    let k, w = s.headers.get("Content-Type");
    return w && /\bapplication\/json\b/.test(w) ? k = await s.json() : k = await s.text(), a === ve.error ? {
      type: a,
      error: new ko(y, s.statusText, k),
      headers: s.headers
    } : {
      type: ve.data,
      data: k,
      statusCode: s.status,
      headers: s.headers
    };
  }
  return a === ve.error ? {
    type: a,
    error: s
  } : s instanceof mm ? {
    type: ve.deferred,
    deferredData: s
  } : {
    type: ve.data,
    data: s
  };
}
function ar(e, t, n, r) {
  let l = e.createURL(nd(t)).toString(), o = {
    signal: n
  };
  if (r && Nt(r.formMethod)) {
    let {
      formMethod: i,
      formEncType: u,
      formData: a
    } = r;
    o.method = i.toUpperCase(), o.body = u === "application/x-www-form-urlencoded" ? td(a) : a;
  }
  return new Request(l, o);
}
function td(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    A(typeof r == "string", 'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'), t.append(n, r);
  return t;
}
function Nm(e, t, n, r, l) {
  let o = {}, i = null, u, a = !1, s = {};
  return n.forEach((h, m) => {
    let c = t[m].route.id;
    if (A(!Fn(h), "Cannot handle redirect results in processLoaderData"), xr(h)) {
      let y = Ln(e, c), k = h.error;
      r && (k = Object.values(r)[0], r = void 0), i = i || {}, i[y.route.id] == null && (i[y.route.id] = k), o[c] = void 0, a || (a = !0, u = Jf(h.error) ? h.error.status : 500), h.headers && (s[c] = h.headers);
    } else
      en(h) ? (l.set(c, h.deferredData), o[c] = h.deferredData.data) : o[c] = h.data, h.statusCode != null && h.statusCode !== 200 && !a && (u = h.statusCode), h.headers && (s[c] = h.headers);
  }), r && (i = r, o[Object.keys(r)[0]] = void 0), {
    loaderData: o,
    errors: i,
    statusCode: u || 200,
    loaderHeaders: s
  };
}
function Cs(e, t, n, r, l, o, i, u) {
  let {
    loaderData: a,
    errors: s
  } = Nm(t, n, r, l, u);
  for (let h = 0; h < o.length; h++) {
    let [m, , c] = o[h];
    A(i !== void 0 && i[h] !== void 0, "Did not find corresponding fetcher result");
    let y = i[h];
    if (xr(y)) {
      let k = Ln(e.matches, c.route.id);
      s && s[k.route.id] || (s = X({}, s, {
        [k.route.id]: y.error
      })), e.fetchers.delete(m);
    } else if (Fn(y))
      A(!1, "Unhandled fetcher revalidation redirect");
    else if (en(y))
      A(!1, "Unhandled fetcher deferred data");
    else {
      let k = {
        state: "idle",
        data: y.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0
      };
      e.fetchers.set(m, k);
    }
  }
  return {
    loaderData: a,
    errors: s
  };
}
function Ps(e, t, n, r) {
  let l = X({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (t.hasOwnProperty(i) ? t[i] !== void 0 && (l[i] = t[i]) : e[i] !== void 0 && (l[i] = e[i]), r && r.hasOwnProperty(i))
      break;
  }
  return l;
}
function Ln(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function _s(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: t
    }],
    route: t
  };
}
function pt(e, t) {
  let {
    pathname: n,
    routeId: r,
    method: l,
    type: o
  } = t === void 0 ? {} : t, i = "Unknown Server Error", u = "Unknown @remix-run/router error";
  return e === 400 ? (i = "Bad Request", l && n && r ? u = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? u = "defer() is not supported in actions" : u = "Cannot submit binary form data using GET") : e === 403 ? (i = "Forbidden", u = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (i = "Not Found", u = 'No route matches URL "' + n + '"') : e === 405 && (i = "Method Not Allowed", l && n && r ? u = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')), new ko(e || 500, i, new Error(u), !0);
}
function Rs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Fn(n))
      return n;
  }
}
function nd(e) {
  let t = typeof e == "string" ? Pt(e) : e;
  return xt(X({}, t, {
    hash: ""
  }));
}
function Dm(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash;
}
function en(e) {
  return e.type === ve.deferred;
}
function xr(e) {
  return e.type === ve.error;
}
function Fn(e) {
  return (e && e.type) === ve.redirect;
}
function Mm(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function zm(e) {
  return Sm.has(e);
}
function Nt(e) {
  return ym.has(e);
}
async function Ls(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i], a = t[i], s = e.find((m) => m.route.id === a.route.id), h = s != null && !ed(s, a) && (o && o[a.route.id]) !== void 0;
    en(u) && (l || h) && await rd(u, r, l).then((m) => {
      m && (n[i] = m || n[i]);
    });
  }
}
async function rd(e, t, n) {
  if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
    if (n)
      try {
        return {
          type: ve.data,
          data: e.deferredData.unwrappedData
        };
      } catch (l) {
        return {
          type: ve.error,
          error: l
        };
      }
    return {
      type: ve.data,
      data: e.deferredData.data
    };
  }
}
function ld(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ns(e, t) {
  let {
    route: n,
    pathname: r,
    params: l
  } = e;
  return {
    id: n.id,
    pathname: r,
    params: l,
    data: t[n.id],
    handle: n.handle
  };
}
function Ds(e, t) {
  let n = typeof t == "string" ? Pt(t).search : t.search;
  if (e[e.length - 1].route.index && ld(n || ""))
    return e[e.length - 1];
  let r = So(e);
  return r[r.length - 1];
}
/**
 * React Router v6.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bl() {
  return bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bl.apply(this, arguments);
}
function Tm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const Om = typeof Object.is == "function" ? Object.is : Tm, {
  useState: Fm,
  useEffect: jm,
  useLayoutEffect: Im,
  useDebugValue: Um
} = ii;
function Am(e, t, n) {
  const r = t(), [{
    inst: l
  }, o] = Fm({
    inst: {
      value: r,
      getSnapshot: t
    }
  });
  return Im(() => {
    l.value = r, l.getSnapshot = t, oi(l) && o({
      inst: l
    });
  }, [e, r, t]), jm(() => (oi(l) && o({
    inst: l
  }), e(() => {
    oi(l) && o({
      inst: l
    });
  })), [e]), Um(r), r;
}
function oi(e) {
  const t = e.getSnapshot, n = e.value;
  try {
    const r = t();
    return !Om(n, r);
  } catch {
    return !0;
  }
}
function $m(e, t, n) {
  return t();
}
const Bm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vm = !Bm, Hm = Vm ? $m : Am, Wm = "useSyncExternalStore" in ii ? ((e) => e.useSyncExternalStore)(ii) : Hm, qu = /* @__PURE__ */ P.createContext(null), bu = /* @__PURE__ */ P.createContext(null), Eo = /* @__PURE__ */ P.createContext(null), xo = /* @__PURE__ */ P.createContext(null), fn = /* @__PURE__ */ P.createContext({
  outlet: null,
  matches: []
}), od = /* @__PURE__ */ P.createContext(null);
function Qm(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Yr() || A(!1);
  let {
    basename: r,
    navigator: l
  } = P.useContext(Eo), {
    hash: o,
    pathname: i,
    search: u
  } = id(e, {
    relative: n
  }), a = i;
  return r !== "/" && (a = i === "/" ? r : yt([r, i])), l.createHref({
    pathname: a,
    search: u,
    hash: o
  });
}
function Yr() {
  return P.useContext(xo) != null;
}
function Co() {
  return Yr() || A(!1), P.useContext(xo).location;
}
function Km() {
  Yr() || A(!1);
  let {
    basename: e,
    navigator: t
  } = P.useContext(Eo), {
    matches: n
  } = P.useContext(fn), {
    pathname: r
  } = Co(), l = JSON.stringify(So(n).map((u) => u.pathnameBase)), o = P.useRef(!1);
  return P.useEffect(() => {
    o.current = !0;
  }), P.useCallback(function(u, a) {
    if (a === void 0 && (a = {}), !o.current)
      return;
    if (typeof u == "number") {
      t.go(u);
      return;
    }
    let s = Ju(u, JSON.parse(l), r, a.relative === "path");
    e !== "/" && (s.pathname = s.pathname === "/" ? e : yt([e, s.pathname])), (a.replace ? t.replace : t.push)(s, a.state, a);
  }, [e, t, l, r]);
}
const Ym = /* @__PURE__ */ P.createContext(null);
function Xm(e) {
  let t = P.useContext(fn).outlet;
  return t && /* @__PURE__ */ P.createElement(Ym.Provider, {
    value: e
  }, t);
}
function id(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    matches: r
  } = P.useContext(fn), {
    pathname: l
  } = Co(), o = JSON.stringify(So(r).map((i) => i.pathnameBase));
  return P.useMemo(() => Ju(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Gm(e, t) {
  Yr() || A(!1);
  let {
    navigator: n
  } = P.useContext(Eo), r = P.useContext(bu), {
    matches: l
  } = P.useContext(fn), o = l[l.length - 1], i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Co(), s;
  if (t) {
    var h;
    let w = typeof t == "string" ? Pt(t) : t;
    u === "/" || (h = w.pathname) != null && h.startsWith(u) || A(!1), s = w;
  } else
    s = a;
  let m = s.pathname || "/", c = u === "/" ? m : m.slice(u.length) || "/", y = pr(e, {
    pathname: c
  }), k = bm(y && y.map((w) => Object.assign({}, w, {
    params: Object.assign({}, i, w.params),
    pathname: yt([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      n.encodeLocation ? n.encodeLocation(w.pathname).pathname : w.pathname
    ]),
    pathnameBase: w.pathnameBase === "/" ? u : yt([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      n.encodeLocation ? n.encodeLocation(w.pathnameBase).pathname : w.pathnameBase
    ])
  })), l, r || void 0);
  return t && k ? /* @__PURE__ */ P.createElement(xo.Provider, {
    value: {
      location: bl({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, s),
      navigationType: ae.Pop
    }
  }, k) : k;
}
function Zm() {
  let e = rv(), t = Jf(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", l = {
    padding: "0.5rem",
    backgroundColor: r
  }, o = {
    padding: "2px 4px",
    backgroundColor: r
  };
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("h2", null, "Unhandled Thrown Error!"), /* @__PURE__ */ P.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ P.createElement("pre", {
    style: l
  }, n) : null, /* @__PURE__ */ P.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ P.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ P.createElement("code", {
    style: o
  }, "errorElement"), " props on ", /* @__PURE__ */ P.createElement("code", {
    style: o
  }, "<Route>")));
}
class Jm extends P.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ? {
      error: t.error,
      location: t.location
    } : {
      error: t.error || n.error,
      location: n.location
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ P.createElement(fn.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ P.createElement(od.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function qm(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, l = P.useContext(qu);
  return l && l.static && l.staticContext && n.route.errorElement && (l.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ P.createElement(fn.Provider, {
    value: t
  }, r);
}
function bm(e, t, n) {
  if (t === void 0 && (t = []), e == null)
    if (n != null && n.errors)
      e = n.matches;
    else
      return null;
  let r = e, l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex((i) => i.route.id && (l == null ? void 0 : l[i.route.id]));
    o >= 0 || A(!1), r = r.slice(0, Math.min(r.length, o + 1));
  }
  return r.reduceRight((o, i, u) => {
    let a = i.route.id ? l == null ? void 0 : l[i.route.id] : null, s = n ? i.route.errorElement || /* @__PURE__ */ P.createElement(Zm, null) : null, h = t.concat(r.slice(0, u + 1)), m = () => /* @__PURE__ */ P.createElement(qm, {
      match: i,
      routeContext: {
        outlet: o,
        matches: h
      }
    }, a ? s : i.route.element !== void 0 ? i.route.element : o);
    return n && (i.route.errorElement || u === 0) ? /* @__PURE__ */ P.createElement(Jm, {
      location: n.location,
      component: s,
      error: a,
      children: m(),
      routeContext: {
        outlet: null,
        matches: h
      }
    }) : m();
  }, null);
}
var Ms;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator";
})(Ms || (Ms = {}));
var eo;
(function(e) {
  e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})(eo || (eo = {}));
function ev(e) {
  let t = P.useContext(bu);
  return t || A(!1), t;
}
function tv(e) {
  let t = P.useContext(fn);
  return t || A(!1), t;
}
function nv(e) {
  let t = tv(), n = t.matches[t.matches.length - 1];
  return n.route.id || A(!1), n.route.id;
}
function rv() {
  var e;
  let t = P.useContext(od), n = ev(eo.UseRouteError), r = nv(eo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function lv(e) {
  let {
    fallbackElement: t,
    router: n
  } = e, r = Wm(
    n.subscribe,
    () => n.state,
    // We have to provide this so React@18 doesn't complain during hydration,
    // but we pass our serialized hydration data into the router so state here
    // is already synced with what the server saw
    () => n.state
  ), l = P.useMemo(() => ({
    createHref: n.createHref,
    encodeLocation: n.encodeLocation,
    go: (i) => n.navigate(i),
    push: (i, u, a) => n.navigate(i, {
      state: u,
      preventScrollReset: a == null ? void 0 : a.preventScrollReset
    }),
    replace: (i, u, a) => n.navigate(i, {
      replace: !0,
      state: u,
      preventScrollReset: a == null ? void 0 : a.preventScrollReset
    })
  }), [n]), o = n.basename || "/";
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(qu.Provider, {
    value: {
      router: n,
      navigator: l,
      static: !1,
      // Do we need this?
      basename: o
    }
  }, /* @__PURE__ */ P.createElement(bu.Provider, {
    value: r
  }, /* @__PURE__ */ P.createElement(uv, {
    basename: n.basename,
    location: n.state.location,
    navigationType: n.state.historyAction,
    navigator: l
  }, n.state.initialized ? /* @__PURE__ */ P.createElement(av, null) : t))), null);
}
function ov(e) {
  return Xm(e.context);
}
function iv(e) {
  A(!1);
}
function uv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ae.Pop,
    navigator: o,
    static: i = !1
  } = e;
  Yr() && A(!1);
  let u = t.replace(/^\/*/, "/"), a = P.useMemo(() => ({
    basename: u,
    navigator: o,
    static: i
  }), [u, o, i]);
  typeof r == "string" && (r = Pt(r));
  let {
    pathname: s = "/",
    search: h = "",
    hash: m = "",
    state: c = null,
    key: y = "default"
  } = r, k = P.useMemo(() => {
    let w = Zf(s, u);
    return w == null ? null : {
      pathname: w,
      search: h,
      hash: m,
      state: c,
      key: y
    };
  }, [u, s, h, m, c, y]);
  return k == null ? null : /* @__PURE__ */ P.createElement(Eo.Provider, {
    value: a
  }, /* @__PURE__ */ P.createElement(xo.Provider, {
    children: n,
    value: {
      location: k,
      navigationType: l
    }
  }));
}
function av(e) {
  let {
    children: t,
    location: n
  } = e, r = P.useContext(qu), l = r && !t ? r.router.routes : nu(t);
  return Gm(l, n);
}
var zs;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(zs || (zs = {}));
new Promise(() => {
});
function nu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return P.Children.forEach(e, (r, l) => {
    if (!/* @__PURE__ */ P.isValidElement(r))
      return;
    if (r.type === P.Fragment) {
      n.push.apply(n, nu(r.props.children, t));
      return;
    }
    r.type !== iv && A(!1), !r.props.index || !r.props.children || A(!1);
    let o = [...t, l], i = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      hasErrorBoundary: r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle
    };
    r.props.children && (i.children = nu(r.props.children, o)), n.push(i);
  }), n;
}
function ud(e) {
  return e.map((t) => {
    let n = bl({}, t);
    return n.hasErrorBoundary == null && (n.hasErrorBoundary = n.errorElement != null), n.children && (n.children = ud(n.children)), n;
  });
}
/**
 * React Router DOM v6.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function to() {
  return to = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, to.apply(this, arguments);
}
function sv(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), l, o;
  for (o = 0; o < r.length; o++)
    l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function cv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function fv(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !cv(e);
}
const dv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function pv(e, t) {
  return Pm({
    basename: t == null ? void 0 : t.basename,
    history: Qh({
      window: t == null ? void 0 : t.window
    }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || hv(),
    routes: ud(e)
  }).initialize();
}
function hv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = to({}, t, {
    errors: mv(t.errors)
  })), t;
}
function mv(e) {
  if (!e)
    return null;
  let t = Object.entries(e), n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new ko(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      let o = new Error(l.message);
      o.stack = "", n[r] = o;
    } else
      n[r] = l;
  return n;
}
const Ts = /* @__PURE__ */ P.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: l,
    reloadDocument: o,
    replace: i,
    state: u,
    target: a,
    to: s,
    preventScrollReset: h
  } = t, m = sv(t, dv), c = Qm(s, {
    relative: l
  }), y = vv(s, {
    replace: i,
    state: u,
    target: a,
    preventScrollReset: h,
    relative: l
  });
  function k(w) {
    r && r(w), w.defaultPrevented || y(w);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ P.createElement("a", to({}, m, {
      href: c,
      onClick: o ? r : k,
      ref: n,
      target: a
    }))
  );
});
var Os;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(Os || (Os = {}));
var Fs;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Fs || (Fs = {}));
function vv(e, t) {
  let {
    target: n,
    replace: r,
    state: l,
    preventScrollReset: o,
    relative: i
  } = t === void 0 ? {} : t, u = Km(), a = Co(), s = id(e, {
    relative: i
  });
  return P.useCallback((h) => {
    if (fv(h, n)) {
      h.preventDefault();
      let m = r !== void 0 ? r : xt(a) === xt(s);
      u(e, {
        replace: m,
        state: l,
        preventScrollReset: o,
        relative: i
      });
    }
  }, [a, u, s, r, l, n, e, o, i]);
}
const gv = "_title_7f5lv_1", yv = {
  title: gv
}, wv = () => /* @__PURE__ */ sa("div", { children: [
  /* @__PURE__ */ Fe("h1", { className: yv.title, children: "Child React App Created By Vite" }),
  /* @__PURE__ */ sa("div", { children: [
    /* @__PURE__ */ Fe(Ts, { to: "/", children: "Home" }),
    /* @__PURE__ */ Fe(Ts, { to: "/page1", children: "Page1" })
  ] }),
  /* @__PURE__ */ Fe(ov, {})
] }), js = (e) => /* @__PURE__ */ Fe(P.Suspense, { fallback: /* @__PURE__ */ Fe("div", { children: "loading..." }), children: /* @__PURE__ */ Fe(e.lazyComponent, {}) }), Sv = () => pv(
  [
    {
      path: "",
      element: /* @__PURE__ */ Fe(wv, {}),
      children: [
        {
          path: "",
          element: /* @__PURE__ */ Fe(
            js,
            {
              lazyComponent: P.lazy(() => import("./Home-8aa0c659.js"))
            }
          )
        },
        {
          path: "page1",
          element: /* @__PURE__ */ Fe(
            js,
            {
              lazyComponent: P.lazy(() => import("./Page1-5aadee54.js"))
            }
          )
        }
      ]
    }
  ],
  {
    basename: "/react-app-vite/"
  }
), ad = P.createContext(void 0), kv = ad.Provider, Ev = () => {
  const e = P.useContext(ad);
  if (e == null)
    throw new Error("No ExternalRoute, use ExternalRouteProvider to set one");
  return e;
}, xv = (e) => {
  const { externalRoute: t } = e;
  console.log("mount react-app-vite");
  const n = ui.createRoot(e.elRoot), r = Sv();
  return n.render(
    /* @__PURE__ */ Fe(Ws.StrictMode, { children: /* @__PURE__ */ Fe(kv, { value: { externalRoute: t }, children: /* @__PURE__ */ Fe(lv, { router: r }) }) })
  ), () => {
    console.log("unmount react-app-vite"), n.unmount();
  };
};
export {
  Fe as a,
  sa as j,
  xv as m,
  P as r,
  Ev as u
};
