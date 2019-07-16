(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var jquery = createCommonjsModule(function (module) {
  /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
  !function (a, b) {
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
      if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
  }("undefined" != typeof window ? window : commonjsGlobal, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function n(a, b) {
      return new n.fn.init(a, b);
    },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function r(a, b) {
      return b.toUpperCase();
    };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray$$1() {
        return d.call(this);
      }, get: function get$$1(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
      }, pushStack: function pushStack(a) {
        var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
      }, each: function each(a, b) {
        return n.each(this, a, b);
      }, map: function map(a) {
        return this.pushStack(n.map(this, function (b, c) {
          return a.call(b, c, b);
        }));
      }, slice: function slice() {
        return this.pushStack(d.apply(this, arguments));
      }, first: function first() {
        return this.eq(0);
      }, last: function last() {
        return this.eq(-1);
      }, eq: function eq(a) {
        var b = this.length,
            c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      }, end: function end() {
        return this.prevObject || this.constructor(null);
      }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
      var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
        if (null != (a = arguments[h])) for (b in a) {
          c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        }
      }return g;
    }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
        throw new Error(a);
      }, noop: function noop() {}, isFunction: function isFunction(a) {
        return "function" === n.type(a);
      }, isArray: Array.isArray, isWindow: function isWindow(a) {
        return null != a && a === a.window;
      }, isNumeric: function isNumeric(a) {
        return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
      }, isPlainObject: function isPlainObject(a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
      }, isEmptyObject: function isEmptyObject(a) {
        var b;for (b in a) {
          return !1;
        }return !0;
      }, type: function type(a) {
        return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
      }, globalEval: function globalEval(a) {
        var b,
            c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
      }, camelCase: function camelCase(a) {
        return a.replace(p, "ms-").replace(q, r);
      }, nodeName: function nodeName(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      }, each: function each(a, b, c) {
        var d,
            e = 0,
            f = a.length,
            g = s(a);if (c) {
          if (g) {
            for (; f > e; e++) {
              if (d = b.apply(a[e], c), d === !1) break;
            }
          } else for (e in a) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else if (g) {
          for (; f > e; e++) {
            if (d = b.call(a[e], e, a[e]), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }return a;
      }, trim: function trim(a) {
        return null == a ? "" : (a + "").replace(o, "");
      }, makeArray: function makeArray(a, b) {
        var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
      }, inArray: function inArray(a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      }, merge: function merge(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
          a[e++] = b[d];
        }return a.length = e, a;
      }, grep: function grep(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
          d = !b(a[f], f), d !== h && e.push(a[f]);
        }return e;
      }, map: function map(a, b, c) {
        var d,
            f = 0,
            g = a.length,
            h = s(a),
            i = [];if (h) for (; g > f; f++) {
          d = b(a[f], f, c), null != d && i.push(d);
        } else for (f in a) {
          d = b(a[f], f, c), null != d && i.push(d);
        }return e.apply([], i);
      }, guid: 1, proxy: function proxy(a, b) {
        var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
          return a.apply(b || this, e.concat(d.call(arguments)));
        }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
      }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
      h["[object " + b + "]"] = b.toLowerCase();
    });function s(a) {
      var b = "length" in a && a.length,
          c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var t = function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u = "sizzle" + 1 * new Date(),
          v = a.document,
          w = 0,
          x = 0,
          y = ha(),
          z = ha(),
          A = ha(),
          B = function B(a, b) {
        return a === b && (l = !0), 0;
      },
          C = 1 << 31,
          D = {}.hasOwnProperty,
          E = [],
          F = E.pop,
          G = E.push,
          H = E.push,
          I = E.slice,
          J = function J(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
          if (a[c] === b) return c;
        }return -1;
      },
          K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          L = "[\\x20\\t\\r\\n\\f]",
          M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          N = M.replace("w", "w#"),
          O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
          P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
          Q = new RegExp(L + "+", "g"),
          R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
          S = new RegExp("^" + L + "*," + L + "*"),
          T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
          U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
          V = new RegExp(P),
          W = new RegExp("^" + N + "$"),
          X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
          Y = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          $ = /^[^{]+\{\s*\[native \w/,
          _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          aa = /[+~]/,
          ba = /'|\\/g,
          ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
          da = function da(a, b, c) {
        var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
      },
          ea = function ea() {
        m();
      };try {
        H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
      } catch (fa) {
        H = { apply: E.length ? function (a, b) {
            G.apply(a, I.call(b));
          } : function (a, b) {
            var c = a.length,
                d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
          } };
      }function ga(a, b, d, e) {
        var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
          if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
            if (9 === k) {
              if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
          }if (c.qsa && (!q || !q.test(a))) {
            if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
              o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
                o[l] = s + ra(o[l]);
              }w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
            }if (x) try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {} finally {
              r || b.removeAttribute("id");
            }
          }
        }return i(a.replace(R, "$1"), b, d, e);
      }function ha() {
        var a = [];function b(c, e) {
          return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
        }return b;
      }function ia(a) {
        return a[u] = !0, a;
      }function ja(a) {
        var b = n.createElement("div");try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null;
        }
      }function ka(a, b) {
        var c = a.split("|"),
            e = a.length;while (e--) {
          d.attrHandle[c[e]] = b;
        }
      }function la(a, b) {
        var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
          if (c === b) return -1;
        }return a ? 1 : -1;
      }function ma(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
        };
      }function na(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
        };
      }function oa(a) {
        return ia(function (b) {
          return b = +b, ia(function (c, d) {
            var e,
                f = a([], c.length, b),
                g = f.length;while (g--) {
              c[e = f[g]] && (c[e] = !(d[e] = c[e]));
            }
          });
        });
      }function pa(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a;
      }c = ga.support = {}, f = ga.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
      }, m = ga.setDocument = function (a) {
        var b,
            e,
            g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
          return a.className = "i", !a.getAttribute("className");
        }), c.getElementsByTagName = ja(function (a) {
          return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
        }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
          return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
        }), c.getById ? (d.find.ID = function (a, b) {
          if ("undefined" != typeof b.getElementById && p) {
            var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
          }
        }, d.filter.ID = function (a) {
          var b = a.replace(ca, da);return function (a) {
            return a.getAttribute("id") === b;
          };
        }) : (delete d.find.ID, d.filter.ID = function (a) {
          var b = a.replace(ca, da);return function (a) {
            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
          };
        }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
          return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
        } : function (a, b) {
          var c,
              d = [],
              e = 0,
              f = b.getElementsByTagName(a);if ("*" === a) {
            while (c = f[e++]) {
              1 === c.nodeType && d.push(c);
            }return d;
          }return f;
        }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
          return p ? b.getElementsByClassName(a) : void 0;
        }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
          o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
        }), ja(function (a) {
          var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
        })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
          c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
        }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
          var c = 9 === a.nodeType ? a.documentElement : a,
              d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
        } : function (a, b) {
          if (b) while (b = b.parentNode) {
            if (b === a) return !0;
          }return !1;
        }, B = b ? function (a, b) {
          if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
        } : function (a, b) {
          if (a === b) return l = !0, 0;var c,
              d = 0,
              e = a.parentNode,
              f = b.parentNode,
              h = [a],
              i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
            h.unshift(c);
          }c = b;while (c = c.parentNode) {
            i.unshift(c);
          }while (h[d] === i[d]) {
            d++;
          }return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
        }, g) : n;
      }, ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }, ga.matchesSelector = function (a, b) {
        if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
          var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
        } catch (e) {}return ga(b, n, null, [a]).length > 0;
      }, ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }, ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
            f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
      }, ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }, ga.uniqueSort = function (a) {
        var b,
            d = [],
            e = 0,
            f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
          while (b = a[f++]) {
            b === a[f] && (e = d.push(f));
          }while (e--) {
            a.splice(d[e], 1);
          }
        }return k = null, a;
      }, e = ga.getText = function (a) {
        var b,
            c = "",
            d = 0,
            f = a.nodeType;if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
              c += e(a);
            }
          } else if (3 === f || 4 === f) return a.nodeValue;
        } else while (b = a[d++]) {
          c += e(b);
        }return c;
      }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
            return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
          }, CHILD: function CHILD(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
          }, PSEUDO: function PSEUDO(a) {
            var b,
                c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
          } }, filter: { TAG: function TAG(a) {
            var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
              return !0;
            } : function (a) {
              return a.nodeName && a.nodeName.toLowerCase() === b;
            };
          }, CLASS: function CLASS(a) {
            var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
              return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
            });
          }, ATTR: function ATTR(a, b, c) {
            return function (d) {
              var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
            };
          }, CHILD: function CHILD(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
              return !!a.parentNode;
            } : function (b, c, i) {
              var j,
                  k,
                  l,
                  m,
                  n,
                  o,
                  p = f !== g ? "nextSibling" : "previousSibling",
                  q = b.parentNode,
                  r = h && b.nodeName.toLowerCase(),
                  s = !i && !h;if (q) {
                if (f) {
                  while (p) {
                    l = b;while (l = l[p]) {
                      if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                    }o = p = "only" === a && !o && "nextSibling";
                  }return !0;
                }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                  k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                    if (1 === l.nodeType && ++m && l === b) {
                      k[a] = [w, n, m];break;
                    }
                  }
                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                }return m -= e, m === d || m % d === 0 && m / d >= 0;
              }
            };
          }, PSEUDO: function PSEUDO(a, b) {
            var c,
                e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
              var d,
                  f = e(a, b),
                  g = f.length;while (g--) {
                d = J(a, f[g]), a[d] = !(c[d] = f[g]);
              }
            }) : function (a) {
              return e(a, 0, c);
            }) : e;
          } }, pseudos: { not: ia(function (a) {
            var b = [],
                c = [],
                d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
              var f,
                  g = d(a, null, e, []),
                  h = a.length;while (h--) {
                (f = g[h]) && (a[h] = !(b[h] = f));
              }
            }) : function (a, e, f) {
              return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
            };
          }), has: ia(function (a) {
            return function (b) {
              return ga(a, b).length > 0;
            };
          }), contains: ia(function (a) {
            return a = a.replace(ca, da), function (b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
            };
          }), lang: ia(function (a) {
            return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
              var c;do {
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
              } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
            };
          }), target: function target(b) {
            var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
          }, root: function root(a) {
            return a === o;
          }, focus: function focus(a) {
            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
          }, enabled: function enabled(a) {
            return a.disabled === !1;
          }, disabled: function disabled(a) {
            return a.disabled === !0;
          }, checked: function checked(a) {
            var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
          }, selected: function selected(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
          }, empty: function empty(a) {
            for (a = a.firstChild; a; a = a.nextSibling) {
              if (a.nodeType < 6) return !1;
            }return !0;
          }, parent: function parent(a) {
            return !d.pseudos.empty(a);
          }, header: function header(a) {
            return Z.test(a.nodeName);
          }, input: function input(a) {
            return Y.test(a.nodeName);
          }, button: function button(a) {
            var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
          }, text: function text(a) {
            var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
          }, first: oa(function () {
            return [0];
          }), last: oa(function (a, b) {
            return [b - 1];
          }), eq: oa(function (a, b, c) {
            return [0 > c ? c + b : c];
          }), even: oa(function (a, b) {
            for (var c = 0; b > c; c += 2) {
              a.push(c);
            }return a;
          }), odd: oa(function (a, b) {
            for (var c = 1; b > c; c += 2) {
              a.push(c);
            }return a;
          }), lt: oa(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) {
              a.push(d);
            }return a;
          }), gt: oa(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) {
              a.push(d);
            }return a;
          }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
        d.pseudos[b] = ma(b);
      }for (b in { submit: !0, reset: !0 }) {
        d.pseudos[b] = na(b);
      }function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
        var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
          (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
            !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
          }if (!c) break;
        }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
      };function ra(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) {
          d += a[b].value;
        }return d;
      }function sa(a, b, c) {
        var d = b.dir,
            e = c && "parentNode" === d,
            f = x++;return b.first ? function (b, c, f) {
          while (b = b[d]) {
            if (1 === b.nodeType || e) return a(b, c, f);
          }
        } : function (b, c, g) {
          var h,
              i,
              j = [w, f];if (g) {
            while (b = b[d]) {
              if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            }
          } else while (b = b[d]) {
            if (1 === b.nodeType || e) {
              if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
            }
          }
        };
      }function ta(a) {
        return a.length > 1 ? function (b, c, d) {
          var e = a.length;while (e--) {
            if (!a[e](b, c, d)) return !1;
          }return !0;
        } : a[0];
      }function ua(a, b, c) {
        for (var d = 0, e = b.length; e > d; d++) {
          ga(a, b[d], c);
        }return c;
      }function va(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        }return g;
      }function wa(a, b, c, d, e, f) {
        return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
          var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || ua(b || "*", h.nodeType ? [h] : h, []),
              q = !a || !f && b ? p : va(p, m, a, h, i),
              r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
            j = va(r, n), d(j, [], h, i), k = j.length;while (k--) {
              (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
            }
          }if (f) {
            if (e || a) {
              if (e) {
                j = [], k = r.length;while (k--) {
                  (l = r[k]) && j.push(q[k] = l);
                }e(null, r = [], j, i);
              }k = r.length;while (k--) {
                (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
              }
            }
          } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
        });
      }function xa(a) {
        for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
          return a === b;
        }, h, !0), l = sa(function (a) {
          return J(b, a) > -1;
        }, h, !0), m = [function (a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
        }]; f > i; i++) {
          if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
              for (e = ++i; f > e; e++) {
                if (d.relative[a[e].type]) break;
              }return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
            }m.push(c);
          }
        }return ta(m);
      }function ya(a, b) {
        var c = b.length > 0,
            e = a.length > 0,
            f = function f(_f, g, h, i, k) {
          var l,
              m,
              o,
              p = 0,
              q = "0",
              r = _f && [],
              s = [],
              t = j,
              u = _f || e && d.find.TAG("*", k),
              v = w += null == t ? 1 : Math.random() || .1,
              x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;while (o = a[m++]) {
                if (o(l, g, h)) {
                  i.push(l);break;
                }
              }k && (w = v);
            }c && ((l = !o && l) && p--, _f && r.push(l));
          }if (p += q, c && q !== p) {
            m = 0;while (o = b[m++]) {
              o(r, s, g, h);
            }if (_f) {
              if (p > 0) while (q--) {
                r[q] || s[q] || (s[q] = F.call(i));
              }s = va(s);
            }H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }return k && (w = v, j = t), r;
        };return c ? ia(f) : f;
      }return h = ga.compile = function (a, b) {
        var c,
            d = [],
            e = [],
            f = A[a + " "];if (!f) {
          b || (b = g(a)), c = b.length;while (c--) {
            f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
          }f = A(a, ya(e, d)), f.selector = a;
        }return f;
      }, i = ga.select = function (a, b, e, f) {
        var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
          if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
            if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
          }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
            if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
              if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
            }
          }
        }return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
      }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      }), ja(function (a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
      }) || ka("type|href|height|width", function (a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
      }), c.attributes && ja(function (a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
      }) || ka("value", function (a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
      }), ja(function (a) {
        return null == a.getAttribute("disabled");
      }) || ka(K, function (a, b, c) {
        var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
      }), ga;
    }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
      if (n.isFunction(b)) return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });if (b.nodeType) return n.grep(a, function (a) {
        return a === b !== c;
      });if ("string" == typeof b) {
        if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
      }return n.grep(a, function (a) {
        return g.call(b, a) >= 0 !== c;
      });
    }n.filter = function (a, b, c) {
      var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
        return 1 === a.nodeType;
      }));
    }, n.fn.extend({ find: function find(a) {
        var b,
            c = this.length,
            d = [],
            e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
          for (b = 0; c > b; b++) {
            if (n.contains(e[b], this)) return !0;
          }
        }));for (b = 0; c > b; b++) {
          n.find(a, e[b], d);
        }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
      }, filter: function filter(a) {
        return this.pushStack(x(this, a || [], !1));
      }, not: function not(a) {
        return this.pushStack(x(this, a || [], !0));
      }, is: function is(a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
      } });var y,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function (a, b) {
      var c, d;if (!a) return this;if ("string" == typeof a) {
        if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) {
            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          }return this;
        }return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
      }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
    };A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
        var d = [],
            e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
          if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;d.push(a);
          }
        }return d;
      }, sibling: function sibling(a, b) {
        for (var c = []; a; a = a.nextSibling) {
          1 === a.nodeType && a !== b && c.push(a);
        }return c;
      } }), n.fn.extend({ has: function has(a) {
        var b = n(a, this),
            c = b.length;return this.filter(function () {
          for (var a = 0; c > a; a++) {
            if (n.contains(this, b[a])) return !0;
          }
        });
      }, closest: function closest(a, b) {
        for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
          for (c = this[d]; c && c !== b; c = c.parentNode) {
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
              f.push(c);break;
            }
          }
        }return this.pushStack(f.length > 1 ? n.unique(f) : f);
      }, index: function index(a) {
        return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function add(a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      }, addBack: function addBack(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
      } });function D(a, b) {
      while ((a = a[b]) && 1 !== a.nodeType) {}return a;
    }n.each({ parent: function parent(a) {
        var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
      }, parents: function parents(a) {
        return n.dir(a, "parentNode");
      }, parentsUntil: function parentsUntil(a, b, c) {
        return n.dir(a, "parentNode", c);
      }, next: function next(a) {
        return D(a, "nextSibling");
      }, prev: function prev(a) {
        return D(a, "previousSibling");
      }, nextAll: function nextAll(a) {
        return n.dir(a, "nextSibling");
      }, prevAll: function prevAll(a) {
        return n.dir(a, "previousSibling");
      }, nextUntil: function nextUntil(a, b, c) {
        return n.dir(a, "nextSibling", c);
      }, prevUntil: function prevUntil(a, b, c) {
        return n.dir(a, "previousSibling", c);
      }, siblings: function siblings(a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      }, children: function children(a) {
        return n.sibling(a.firstChild);
      }, contents: function contents(a) {
        return a.contentDocument || n.merge([], a.childNodes);
      } }, function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
      };
    });var E = /\S+/g,
        F = {};function G(a) {
      var b = F[a] = {};return n.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }), b;
    }n.Callbacks = function (a) {
      a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
          c,
          d,
          e,
          f,
          g,
          h = [],
          i = !a.once && [],
          j = function j(l) {
        for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;break;
          }
        }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
      },
          k = { add: function add() {
          if (h) {
            var c = h.length;!function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
              });
            }(arguments), d ? f = h.length : b && (e = c, j(b));
          }return this;
        }, remove: function remove() {
          return h && n.each(arguments, function (a, b) {
            var c;while ((c = n.inArray(b, h, c)) > -1) {
              h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
            }
          }), this;
        }, has: function has(a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        }, empty: function empty() {
          return h = [], f = 0, this;
        }, disable: function disable() {
          return h = i = b = void 0, this;
        }, disabled: function disabled() {
          return !h;
        }, lock: function lock() {
          return i = void 0, b || k.disable(), this;
        }, locked: function locked() {
          return !i;
        }, fireWith: function fireWith(a, b) {
          return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
        }, fire: function fire() {
          return k.fireWith(this, arguments), this;
        }, fired: function fired() {
          return !!c;
        } };return k;
    }, n.extend({ Deferred: function Deferred(a) {
        var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
            c = "pending",
            d = { state: function state() {
            return c;
          }, always: function always() {
            return e.done(arguments).fail(arguments), this;
          }, then: function then() {
            var a = arguments;return n.Deferred(function (c) {
              n.each(b, function (b, f) {
                var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                  var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                });
              }), a = null;
            }).promise();
          }, promise: function promise(a) {
            return null != a ? n.extend(a, d) : d;
          } },
            e = {};return d.pipe = d.then, n.each(b, function (a, f) {
          var g = f[2],
              h = f[3];d[f[1]] = g.add, h && g.add(function () {
            c = h;
          }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
            return e[f[0] + "With"](this === e ? d : this, arguments), this;
          }, e[f[0] + "With"] = g.fireWith;
        }), d.promise(e), a && a.call(e, e), e;
      }, when: function when(a) {
        var b = 0,
            c = d.call(arguments),
            e = c.length,
            f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
            g = 1 === f ? a : n.Deferred(),
            h = function h(a, b, c) {
          return function (e) {
            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
          };
        },
            i,
            j,
            k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
          c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
        }return f || g.resolveWith(k, c), g.promise();
      } });var H;n.fn.ready = function (a) {
      return n.ready.promise().done(a), this;
    }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
        a ? n.readyWait++ : n.ready(!0);
      }, ready: function ready(a) {
        (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
      } });function I() {
      l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
    }n.ready.promise = function (b) {
      return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
      var h = 0,
          i = a.length,
          j = null == c;if ("object" === n.type(c)) {
        e = !0;for (h in c) {
          n.access(a, b, h, c[h], !0, f, g);
        }
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
        return j.call(n(a), c);
      })), b)) for (; i > h; h++) {
        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };n.acceptData = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };function K() {
      Object.defineProperty(this.cache = {}, 0, { get: function get$$1() {
          return {};
        } }), this.expando = n.expando + K.uid++;
    }K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
        if (!K.accepts(a)) return 0;var b = {},
            c = a[this.expando];if (!c) {
          c = K.uid++;try {
            b[this.expando] = { value: c }, Object.defineProperties(a, b);
          } catch (d) {
            b[this.expando] = c, n.extend(a, b);
          }
        }return this.cache[c] || (this.cache[c] = {}), c;
      }, set: function set$$1(a, b, c) {
        var d,
            e = this.key(a),
            f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
          f[d] = b[d];
        }return f;
      }, get: function get$$1(a, b) {
        var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
      }, access: function access(a, b, c) {
        var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
      }, remove: function remove(a, b) {
        var c,
            d,
            e,
            f = this.key(a),
            g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) {
            delete g[d[c]];
          }
        }
      }, hasData: function hasData(a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      }, discard: function discard(a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      } };var L = new K(),
        M = new K(),
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;function P(a, b, c) {
      var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}M.set(a, b, c);
      } else c = void 0;return c;
    }n.extend({ hasData: function hasData(a) {
        return M.hasData(a) || L.hasData(a);
      }, data: function data(a, b, c) {
        return M.access(a, b, c);
      }, removeData: function removeData(a, b) {
        M.remove(a, b);
      }, _data: function _data(a, b, c) {
        return L.access(a, b, c);
      }, _removeData: function _removeData(a, b) {
        L.remove(a, b);
      } }), n.fn.extend({ data: function data(a, b) {
        var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;if (void 0 === a) {
          if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
            c = g.length;while (c--) {
              g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
            }L.set(f, "hasDataAttrs", !0);
          }return e;
        }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
          M.set(this, a);
        }) : J(this, function (b) {
          var c,
              d = n.camelCase(a);if (f && void 0 === b) {
            if (c = M.get(f, a), void 0 !== c) return c;if (c = M.get(f, d), void 0 !== c) return c;if (c = P(f, d, void 0), void 0 !== c) return c;
          } else this.each(function () {
            var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
          });
        }, null, b, arguments.length > 1, null, !0);
      }, removeData: function removeData(a) {
        return this.each(function () {
          M.remove(this, a);
        });
      } }), n.extend({ queue: function queue(a, b, c) {
        var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
      }, dequeue: function dequeue(a, b) {
        b = b || "fx";var c = n.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = n._queueHooks(a, b),
            g = function g() {
          n.dequeue(a, b);
        };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
      }, _queueHooks: function _queueHooks(a, b) {
        var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
            L.remove(a, [b + "queue", c]);
          }) });
      } }), n.fn.extend({ queue: function queue(a, b) {
        var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
          var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
        });
      }, dequeue: function dequeue(a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      }, clearQueue: function clearQueue(a) {
        return this.queue(a || "fx", []);
      }, promise: function promise(a, b) {
        var c,
            d = 1,
            e = n.Deferred(),
            f = this,
            g = this.length,
            h = function h() {
          --d || e.resolveWith(f, [f]);
        };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
          c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        }return h(), e.promise(b);
      } });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function S(a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    },
        T = /^(?:checkbox|radio)$/i;!function () {
      var a = l.createDocumentFragment(),
          b = a.appendChild(l.createElement("div")),
          c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
      return !0;
    }function $() {
      return !1;
    }function _() {
      try {
        return l.activeElement;
      } catch (a) {}
    }n.event = { global: {}, add: function add(a, b, c, d, e) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            o,
            p,
            q,
            r = L.get(a);if (r) {
          c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
            return (typeof n === "undefined" ? "undefined" : _typeof(n)) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
          }), b = (b || "").match(E) || [""], j = b.length;while (j--) {
            h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
          }
        }
      }, remove: function remove(a, b, c, d, e) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            o,
            p,
            q,
            r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
          b = (b || "").match(E) || [""], j = b.length;while (j--) {
            if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
              l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
                k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
              }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
            } else for (o in i) {
              n.event.remove(a, o + b[j], c, d, !0);
            }
          }n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
        }
      }, trigger: function trigger(b, c, d, e) {
        var f,
            g,
            h,
            i,
            k,
            m,
            o,
            p = [d || l],
            q = j.call(b, "type") ? b.type : b,
            r = j.call(b, "namespace") ? b.namespace.split(".") : [];if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
          if (!e && !o.noBubble && !n.isWindow(d)) {
            for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
              p.push(g), h = g;
            }h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
          }f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) {
            b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
          }return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
        }
      }, dispatch: function dispatch(a) {
        a = n.event.fix(a);var b,
            c,
            e,
            f,
            g,
            h = [],
            i = d.call(arguments),
            j = (L.get(this, "events") || {})[a.type] || [],
            k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
          h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
            a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
              (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
            }
          }return k.postDispatch && k.postDispatch.call(this, a), a.result;
        }
      }, handlers: function handlers(a, b) {
        var c,
            d,
            e,
            f,
            g = [],
            h = b.delegateCount,
            i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++) {
              f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            }d.length && g.push({ elem: i, handlers: d });
          }
        }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
      }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
        } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
          var c,
              d,
              e,
              f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
        } }, fix: function fix(a) {
        if (a[n.expando]) return a;var b,
            c,
            d,
            e = a.type,
            f = a,
            g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) {
          c = d[b], a[c] = f[c];
        }return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
      }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
            return this !== _() && this.focus ? (this.focus(), !1) : void 0;
          }, delegateType: "focusin" }, blur: { trigger: function trigger() {
            return this === _() && this.blur ? (this.blur(), !1) : void 0;
          }, delegateType: "focusout" }, click: { trigger: function trigger() {
            return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
          }, _default: function _default(a) {
            return n.nodeName(a.target, "a");
          } }, beforeunload: { postDispatch: function postDispatch(a) {
            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
          } } }, simulate: function simulate(a, b, c, d) {
        var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
      } }, n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function (a, b) {
      return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
        var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
      }, stopPropagation: function stopPropagation() {
        var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
      }, stopImmediatePropagation: function stopImmediatePropagation() {
        var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
      } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
      n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
          var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
        } };
    }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
      var c = function c(a) {
        n.event.simulate(b, a.target, n.event.fix(a), !0);
      };n.event.special[b] = { setup: function setup() {
          var d = this.ownerDocument || this,
              e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
        }, teardown: function teardown() {
          var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
        } };
    }), n.fn.extend({ on: function on(a, b, c, d, e) {
        var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
          "string" != typeof b && (c = c || b, b = void 0);for (g in a) {
            this.on(g, b, c, a[g], e);
          }return this;
        }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;return 1 === e && (f = d, d = function d(a) {
          return n().off(a), f.apply(this, arguments);
        }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
          n.event.add(this, a, d, c, b);
        });
      }, one: function one(a, b, c, d) {
        return this.on(a, b, c, d, 1);
      }, off: function off(a, b, c) {
        var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
          for (e in a) {
            this.off(e, b, a[e]);
          }return this;
        }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
          n.event.remove(this, a, c, b);
        });
      }, trigger: function trigger(a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      }, triggerHandler: function triggerHandler(a, b) {
        var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
      } });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
      return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }function ka(a) {
      return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }function la(a) {
      var b = ga.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function ma(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
      }
    }function na(a, b) {
      var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
        if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
          delete g.handle, g.events = {};for (e in j) {
            for (c = 0, d = j[e].length; d > c; c++) {
              n.event.add(b, e, j[e][c]);
            }
          }
        }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
      }
    }function oa(a, b) {
      var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }function pa(a, b) {
      var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }n.extend({ clone: function clone(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.cloneNode(!0),
            i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
          pa(f[d], g[d]);
        }if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) {
          na(f[d], g[d]);
        } else na(a, h);return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
      }, buildFragment: function buildFragment(a, b, c, d) {
        for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
          if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
            f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) {
              f = f.lastChild;
            }n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
          } else l.push(b.createTextNode(e));
        }k.textContent = "", m = 0;while (e = l[m++]) {
          if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
            j = 0;while (e = f[j++]) {
              fa.test(e.type || "") && c.push(e);
            }
          }
        }return k;
      }, cleanData: function cleanData(a) {
        for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
          if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
            if (b.events) for (d in b.events) {
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            }L.cache[e] && delete L.cache[e];
          }delete M.cache[c[M.expando]];
        }
      } }), n.fn.extend({ text: function text(a) {
        return J(this, function (a) {
          return void 0 === a ? n.text(this) : this.empty().each(function () {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
          });
        }, null, a, arguments.length);
      }, append: function append() {
        return this.domManip(arguments, function (a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = ja(this, a);b.appendChild(a);
          }
        });
      }, prepend: function prepend() {
        return this.domManip(arguments, function (a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = ja(this, a);b.insertBefore(a, b.firstChild);
          }
        });
      }, before: function before() {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      }, after: function after() {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      }, remove: function remove(a, b) {
        for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
          b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
        }return this;
      }, empty: function empty() {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
        }return this;
      }, clone: function clone(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
          return n.clone(this, a, b);
        });
      }, html: function html(a) {
        return J(this, function (a) {
          var b = this[0] || {},
              c = 0,
              d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(aa, "<$1></$2>");try {
              for (; d > c; c++) {
                b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
              }b = 0;
            } catch (e) {}
          }b && this.empty().append(a);
        }, null, a, arguments.length);
      }, replaceWith: function replaceWith() {
        var a = arguments[0];return this.domManip(arguments, function (b) {
          a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
        }), a && (a.length || a.nodeType) ? this : this.remove();
      }, detach: function detach(a) {
        return this.remove(a, !0);
      }, domManip: function domManip(a, b) {
        a = e.apply([], a);var c,
            d,
            f,
            g,
            h,
            i,
            j = 0,
            l = this.length,
            m = this,
            o = l - 1,
            p = a[0],
            q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
          var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
        });if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
          for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
            h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
          }if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) {
            h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
          }
        }return this;
      } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
      n.fn[a] = function (a) {
        for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
          c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
        }return this.pushStack(d);
      };
    });var qa,
        ra = {};function sa(b, c) {
      var d,
          e = n(c.createElement(b)).appendTo(c.body),
          f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return e.detach(), f;
    }function ta(a) {
      var b = l,
          c = ra[a];return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
    }var ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function wa(b) {
      return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };function xa(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.style;return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }function ya(a, b) {
      return { get: function get$$1() {
          return a() ? void delete this.get : (this.get = b).apply(this, arguments);
        } };
    }!function () {
      var b,
          c,
          d = l.documentElement,
          e = l.createElement("div"),
          f = l.createElement("div");if (f.style) {
        var _g = function _g() {
          f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
        };

        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
            return _g(), b;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == c && _g(), c;
          }, reliableMarginRight: function reliableMarginRight() {
            var b,
                c = f.appendChild(l.createElement("div"));return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
          } });
      }
    }(), n.swap = function (a, b, c, d) {
      var e,
          f,
          g = {};for (f in b) {
        g[f] = a.style[f], a.style[f] = b[f];
      }e = c.apply(a, d || []);for (f in b) {
        a.style[f] = g[f];
      }return e;
    };var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = { position: "absolute", visibility: "hidden", display: "block" },
        Da = { letterSpacing: "0", fontWeight: "400" },
        Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
      if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
          d = b,
          e = Ea.length;while (e--) {
        if (b = Ea[e] + c, b in a) return b;
      }return d;
    }function Ga(a, b, c) {
      var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }function Ha(a, b, c, d, e) {
      for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
        "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
      }return g;
    }function Ia(a, b, c) {
      var d = !0,
          e = "width" === b ? a.offsetWidth : a.offsetHeight,
          f = wa(a),
          g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
        if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
      }return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }function Ja(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
        d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
      }for (g = 0; h > g; g++) {
        d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
      }return a;
    }n.extend({ cssHooks: { opacity: { get: function get$$1(a, b) {
            if (b) {
              var c = xa(a, "opacity");return "" === c ? "1" : c;
            }
          } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
              f,
              g,
              h = n.camelCase(b),
              i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
        }
      }, css: function css(a, b, c, d) {
        var e,
            f,
            g,
            h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
      } }), n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = { get: function get$$1(a, c, d) {
          return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
            return Ia(a, b, d);
          }) : Ia(a, b, d) : void 0;
        }, set: function set$$1(a, c, d) {
          var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
        } };
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
      return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
    }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      n.cssHooks[a + b] = { expand: function expand(c) {
          for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          }return e;
        } }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }), n.fn.extend({ css: function css(a, b) {
        return J(this, function (a, b, c) {
          var d,
              e,
              f = {},
              g = 0;if (n.isArray(b)) {
            for (d = wa(a), e = b.length; e > g; g++) {
              f[b[g]] = n.css(a, b[g], !1, d);
            }return f;
          }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
        }, a, b, arguments.length > 1);
      }, show: function show() {
        return Ja(this, !0);
      }, hide: function hide() {
        return Ja(this);
      }, toggle: function toggle(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
          S(this) ? n(this).show() : n(this).hide();
        });
      } });function Ka(a, b, c, d, e) {
      return new Ka.prototype.init(a, b, c, d, e);
    }n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
      }, cur: function cur() {
        var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
      }, run: function run(a) {
        var b,
            c = Ka.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
      } }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get$$1(a) {
          var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
        }, set: function set$$1(a) {
          n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
        } } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set$$1(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      } }, n.easing = { linear: function linear(a) {
        return a;
      }, swing: function swing(a) {
        return .5 - Math.cos(a * Math.PI) / 2;
      } }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
        Ma,
        Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = { "*": [function (a, b) {
        var c = this.createTween(a, b),
            d = c.cur(),
            e = Oa.exec(b),
            f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
            g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;do {
            h = h || ".5", g /= h, n.style(c.elem, a, g + f);
          } while (h !== (h = c.cur() / d) && 1 !== h && --i);
        }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
      }] };function Sa() {
      return setTimeout(function () {
        La = void 0;
      }), La = n.now();
    }function Ta(a, b) {
      var c,
          d = 0,
          e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
        c = R[d], e["margin" + c] = e["padding" + c] = a;
      }return b && (e.opacity = e.width = a), e;
    }function Ua(a, b, c) {
      for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) {
        if (d = e[f].call(c, b, a)) return d;
      }
    }function Va(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this,
          m = {},
          o = a.style,
          p = a.nodeType && S(a),
          q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
        h.unqueued || i();
      }), h.unqueued++, l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      }));for (d in b) {
        if (e = b[d], Na.exec(e)) {
          if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
            if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
          }m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
      }if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
        q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
          n(a).hide();
        }), l.done(function () {
          var b;L.remove(a, "fxshow");for (b in m) {
            n.style(a, b, m[b]);
          }
        });for (d in m) {
          g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
        }
      }
    }function Wa(a, b) {
      var c, d, e, f, g;for (c in a) {
        if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];for (c in f) {
            c in a || (a[c] = f[c], b[c] = e);
          }
        } else b[d] = e;
      }
    }function Xa(a, b, c) {
      var d,
          e,
          f = 0,
          g = Qa.length,
          h = n.Deferred().always(function () {
        delete i.elem;
      }),
          i = function i() {
        if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
          j.tweens[g].run(f);
        }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
      },
          j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
        }, stop: function stop(b) {
          var c = 0,
              d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
            j.tweens[c].run(1);
          }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        } }),
          k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) {
        if (d = Qa[f].call(j, a, k, j.opts)) return d;
      }return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
          c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
        }
      }, prefilter: function prefilter(a, b) {
        b ? Qa.unshift(a) : Qa.push(a);
      } }), n.speed = function (a, b, c) {
      var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
      }, d;
    }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
        return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
      }, animate: function animate(a, b, c, d) {
        var e = n.isEmptyObject(a),
            f = n.speed(b, c, d),
            g = function g() {
          var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
        };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      }, stop: function stop(a, b, c) {
        var d = function d(a) {
          var b = a.stop;delete a.stop, b(c);
        };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
          var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
            g[e] && g[e].stop && Pa.test(e) && d(g[e]);
          }for (e = f.length; e--;) {
            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          }(b || !c) && n.dequeue(this, a);
        });
      }, finish: function finish(a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
          var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          }for (b = 0; g > b; b++) {
            d[b] && d[b].finish && d[b].finish.call(this);
          }delete c.finish;
        });
      } }), n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
      };
    }), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
      n.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d);
      };
    }), n.timers = [], n.fx.tick = function () {
      var a,
          b = 0,
          c = n.timers;for (La = n.now(); b < c.length; b++) {
        a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      }c.length || n.fx.stop(), La = void 0;
    }, n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function () {
      Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function () {
      clearInterval(Ma), Ma = null;
    }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
      return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
        var d = setTimeout(b, a);c.stop = function () {
          clearTimeout(d);
        };
      });
    }, function () {
      var a = l.createElement("input"),
          b = l.createElement("select"),
          c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
    }();var Ya,
        Za,
        $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
        return J(this, n.attr, a, b, arguments.length > 1);
      }, removeAttr: function removeAttr(a) {
        return this.each(function () {
          n.removeAttr(this, a);
        });
      } }), n.extend({ attr: function attr(a, b, c) {
        var d,
            e,
            f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
      }, removeAttr: function removeAttr(a, b) {
        var c,
            d,
            e = 0,
            f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
          d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
        }
      }, attrHooks: { type: { set: function set$$1(a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
            }
          } } } }), Za = { set: function set$$1(a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
        var e, f;return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
      };
    });var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
        return J(this, n.prop, a, b, arguments.length > 1);
      }, removeProp: function removeProp(a) {
        return this.each(function () {
          delete this[n.propFix[a] || a];
        });
      } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
        var d,
            e,
            f,
            g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
      }, propHooks: { tabIndex: { get: function get$$1(a) {
            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
          } } } }), k.optSelected || (n.propHooks.selected = { get: function get$$1(a) {
        var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
      } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      n.propFix[this.toLowerCase()] = this;
    });var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = "string" == typeof a && a,
            i = 0,
            j = this.length;if (n.isFunction(a)) return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });if (h) for (b = (a || "").match(E) || []; j > i; i++) {
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
            f = 0;while (e = b[f++]) {
              d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            }g = n.trim(d), c.className !== g && (c.className = g);
          }
        }return this;
      }, removeClass: function removeClass(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = 0 === arguments.length || "string" == typeof a && a,
            i = 0,
            j = this.length;if (n.isFunction(a)) return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });if (h) for (b = (a || "").match(E) || []; j > i; i++) {
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
            f = 0;while (e = b[f++]) {
              while (d.indexOf(" " + e + " ") >= 0) {
                d = d.replace(" " + e + " ", " ");
              }
            }g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
          }
        }return this;
      }, toggleClass: function toggleClass(a, b) {
        var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
          n(this).toggleClass(a.call(this, c, this.className, b), b);
        } : function () {
          if ("string" === c) {
            var b,
                d = 0,
                e = n(this),
                f = a.match(E) || [];while (b = f[d++]) {
              e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            }
          } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
        });
      }, hasClass: function hasClass(a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
          if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
        }return !1;
      } });var bb = /\r/g;n.fn.extend({ val: function val(a) {
        var b,
            c,
            d,
            e = this[0];{
          if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
            var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
              return null == a ? "" : a + "";
            })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
          });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
        }
      } }), n.extend({ valHooks: { option: { get: function get$$1(a) {
            var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
          } }, select: { get: function get$$1(a) {
            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
              if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                if (b = n(c).val(), f) return b;g.push(b);
              }
            }return g;
          }, set: function set$$1(a, b) {
            var c,
                d,
                e = a.options,
                f = n.makeArray(b),
                g = e.length;while (g--) {
              d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            }return c || (a.selectedIndex = -1), f;
          } } } }), n.each(["radio", "checkbox"], function () {
      n.valHooks[this] = { set: function set$$1(a, b) {
          return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
        } }, k.checkOn || (n.valHooks[this].get = function (a) {
        return null === a.getAttribute("value") ? "on" : a.value;
      });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
      n.fn[b] = function (a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
      };
    }), n.fn.extend({ hover: function hover(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      }, bind: function bind(a, b, c) {
        return this.on(a, null, b, c);
      }, unbind: function unbind(a, b) {
        return this.off(a, null, b);
      }, delegate: function delegate(a, b, c, d) {
        return this.on(b, a, c, d);
      }, undelegate: function undelegate(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
      } });var cb = n.now(),
        db = /\?/;n.parseJSON = function (a) {
      return JSON.parse(a + "");
    }, n.parseXML = function (a) {
      var b, c;if (!a || "string" != typeof a) return null;try {
        c = new DOMParser(), b = c.parseFromString(a, "text/xml");
      } catch (d) {
        b = void 0;
      }return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
    };var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
      return function (b, c) {
        "string" != typeof b && (c = b, b = "*");var d,
            e = 0,
            f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) {
          "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        }
      };
    }function rb(a, b, c, d) {
      var e = {},
          f = a === mb;function g(h) {
        var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
        }), i;
      }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function sb(a, b) {
      var c,
          d,
          e = n.ajaxSettings.flatOptions || {};for (c in b) {
        void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      }return d && n.extend(!0, a, d), a;
    }function tb(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.contents,
          i = a.dataTypes;while ("*" === i[0]) {
        i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      }if (d) for (e in h) {
        if (h[e] && h[e].test(d)) {
          i.unshift(e);break;
        }
      }if (i[0] in c) f = i[0];else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;break;
          }g || (g = e);
        }f = f || g;
      }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function ub(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = {},
          k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
        j[g.toLowerCase()] = a.converters[g];
      }f = k.shift();while (f) {
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
          if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
              g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
            }
          }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
            b = g(b);
          } catch (l) {
            return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
          }
        }
      }return { state: "success", data: b };
    }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
        return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
      }, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
        "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = n.ajaxSetup({}, b),
            l = k.context || k,
            m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
            o = n.Deferred(),
            p = n.Callbacks("once memory"),
            q = k.statusCode || {},
            r = {},
            s = {},
            t = 0,
            u = "canceled",
            v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
            var b;if (2 === t) {
              if (!f) {
                f = {};while (b = gb.exec(e)) {
                  f[b[1].toLowerCase()] = b[2];
                }
              }b = f[a.toLowerCase()];
            }return null == b ? null : b;
          }, getAllResponseHeaders: function getAllResponseHeaders() {
            return 2 === t ? e : null;
          }, setRequestHeader: function setRequestHeader(a, b) {
            var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
          }, overrideMimeType: function overrideMimeType(a) {
            return t || (k.mimeType = a), this;
          }, statusCode: function statusCode(a) {
            var b;if (a) if (2 > t) for (b in a) {
              q[b] = [q[b], a[b]];
            } else v.always(a[v.status]);return this;
          }, abort: function abort(a) {
            var b = a || u;return c && c.abort(b), x(0, b), this;
          } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) {
          v.setRequestHeader(j, k.headers[j]);
        }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) {
          v[j](k[j]);
        }if (c = rb(mb, k, b, v)) {
          v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
            v.abort("timeout");
          }, k.timeout));try {
            t = 1, c.send(r, x);
          } catch (w) {
            if (!(2 > t)) throw w;x(-1, w);
          }
        } else x(-1, "No Transport");function x(a, b, f, h) {
          var j,
              r,
              s,
              u,
              w,
              x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
        }return v;
      }, getJSON: function getJSON(a, b, c) {
        return n.get(a, b, c, "json");
      }, getScript: function getScript(a, b) {
        return n.get(a, void 0, b, "script");
      } }), n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
      };
    }), n._evalUrl = function (a) {
      return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
    }, n.fn.extend({ wrapAll: function wrapAll(a) {
        var b;return n.isFunction(a) ? this.each(function (b) {
          n(this).wrapAll(a.call(this, b));
        }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;while (a.firstElementChild) {
            a = a.firstElementChild;
          }return a;
        }).append(this)), this);
      }, wrapInner: function wrapInner(a) {
        return this.each(n.isFunction(a) ? function (b) {
          n(this).wrapInner(a.call(this, b));
        } : function () {
          var b = n(this),
              c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
        });
      }, wrap: function wrap(a) {
        var b = n.isFunction(a);return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      }, unwrap: function unwrap() {
        return this.parent().each(function () {
          n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
        }).end();
      } }), n.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    };var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
      var e;if (n.isArray(b)) n.each(b, function (b, e) {
        c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
      });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
        Ab(a + "[" + e + "]", b[e], c, d);
      }
    }n.param = function (a, b) {
      var c,
          d = [],
          e = function e(a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
      };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
        e(this.name, this.value);
      });else for (c in a) {
        Ab(c, a[c], b, e);
      }return d.join("&").replace(vb, "+");
    }, n.fn.extend({ serialize: function serialize() {
        return n.param(this.serializeArray());
      }, serializeArray: function serializeArray() {
        return this.map(function () {
          var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
        }).filter(function () {
          var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
        }).map(function (a, b) {
          var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
            return { name: b.name, value: a.replace(xb, "\r\n") };
          }) : { name: b.name, value: c.replace(xb, "\r\n") };
        }).get();
      } }), n.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    };var Bb = 0,
        Cb = {},
        Db = { 0: 200, 1223: 204 },
        Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
      for (var a in Cb) {
        Cb[a]();
      }
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
      var _b2;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
          var e,
              f = a.xhr(),
              g = ++Bb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
            f[e] = a.xhrFields[e];
          }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
            f.setRequestHeader(e, c[e]);
          }_b2 = function b(a) {
            return function () {
              _b2 && (delete Cb[g], _b2 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
            };
          }, f.onload = _b2(), f.onerror = _b2("error"), _b2 = Cb[g] = _b2("abort");try {
            f.send(a.hasContent && a.data || null);
          } catch (h) {
            if (_b2) throw h;
          }
        }, abort: function abort() {
          _b2 && _b2();
        } } : void 0;
    }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
          return n.globalEval(a), a;
        } } }), n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, _c;return { send: function send(d, e) {
            b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", _c = function c(a) {
              b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
            }), l.head.appendChild(b[0]);
          }, abort: function abort() {
            _c && _c();
          } };
      }
    });var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
        var a = Fb.pop() || n.expando + "_" + cb++;return this[a] = !0, a;
      } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
          f,
          g,
          h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
        return g || n.error(e + " was not called"), g[0];
      }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
        g = arguments;
      }, d.always(function () {
        a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
      }), "script") : void 0;
    }), n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
          e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    };var Hb = n.fn.load;n.fn.load = function (a, b, c) {
      if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
          e,
          f,
          g = this,
          h = a.indexOf(" ");return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
        f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
      }).complete(c && function (a, b) {
        g.each(c, f || [a.responseText, b, a]);
      }), this;
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
      n.fn[b] = function (a) {
        return this.on(b, a);
      };
    }), n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    };var Ib = a.document.documentElement;function Jb(a) {
      return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }n.offset = { setOffset: function setOffset(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = n.css(a, "position"),
            l = n(a),
            m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
      } }, n.fn.extend({ offset: function offset(a) {
        if (arguments.length) return void 0 === a ? this : this.each(function (b) {
          n.offset.setOffset(this, a, b);
        });var b,
            c,
            d = this[0],
            e = { top: 0, left: 0 },
            f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
      }, position: function position() {
        if (this[0]) {
          var a,
              b,
              c = this[0],
              d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
        }
      }, offsetParent: function offsetParent() {
        return this.map(function () {
          var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
            a = a.offsetParent;
          }return a || Ib;
        });
      } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
      var d = "pageYOffset" === c;n.fn[b] = function (e) {
        return J(this, function (b, e, f) {
          var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
        }, b, e, arguments.length, null);
      };
    }), n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
        return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
      });
    }), n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
        n.fn[d] = function (d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
            var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
          }, b, f ? d : void 0, f, null);
        };
      });
    }), n.fn.size = function () {
      return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof undefined && undefined.amd && undefined("jquery", [], function () {
      return n;
    });var Kb = a.jQuery,
        Lb = a.$;return n.noConflict = function (b) {
      return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === U && (a.jQuery = a.$ = n), n;
  });
});

// test importing CommonJS modules from ./vendor/

// We have to manually make jQuery a global variable.
// By default it will be in a closure and renamed to lowercase.
window.jQuery = jquery;

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
(function ($, window, document, undefined) {

	/**
  * Creates a carousel.
  * @class The Owl Carousel.
  * @public
  * @param {HTMLElement|jQuery} element - The element to create the carousel for.
  * @param {Object} [options] - The options
  */
	function Owl(element, options) {

		/**
   * Current settings for the carousel.
   * @public
   */
		this.settings = null;

		/**
   * Current options set by the caller including defaults.
   * @public
   */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
   * Plugin element.
   * @public
   */
		this.$element = $(element);

		/**
   * Proxied event handlers.
   * @protected
   */
		this._handlers = {};

		/**
   * References to the running plugins of this carousel.
   * @protected
   */
		this._plugins = {};

		/**
   * Currently suppressed events to prevent them from being retriggered.
   * @protected
   */
		this._supress = {};

		/**
   * Absolute current position.
   * @protected
   */
		this._current = null;

		/**
   * Animation speed in milliseconds.
   * @protected
   */
		this._speed = null;

		/**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   * @protected
   */
		this._coordinates = [];

		/**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   * @protected
   */
		this._breakpoint = null;

		/**
   * Current width of the plugin element.
   */
		this._width = null;

		/**
   * All real items.
   * @protected
   */
		this._items = [];

		/**
   * All cloned items.
   * @protected
   */
		this._clones = [];

		/**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   * @protected
   */
		this._mergers = [];

		/**
   * Widths of all items.
   */
		this._widths = [];

		/**
   * Invalidated parts within the update process.
   * @protected
   */
		this._invalidated = {};

		/**
   * Ordered list of workers for the update process.
   * @protected
   */
		this._pipe = [];

		/**
   * Current state information for the drag operation.
   * @todo #261
   * @protected
   */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
   * Current state information and their tags.
   * @type {Object}
   * @protected
   */
		this._states = {
			current: {},
			tags: {
				'initializing': ['busy'],
				'animating': ['busy'],
				'dragging': ['interacting']
			}
		};

		$.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function (key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function (priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
  * Default options for the carousel.
  * @public
  */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
  * Enumeration for width.
  * @public
  * @readonly
  * @enum {String}
  */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
  * Enumeration for types.
  * @public
  * @readonly
  * @enum {String}
  */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
  * Contains all registered plugins.
  * @public
  */
	Owl.Plugins = {};

	/**
  * List of workers involved in the update process.
  */
	Owl.Workers = [{
		filter: ['width', 'settings'],
		run: function run() {
			this._width = this.$element.width();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: ['items', 'settings'],
		run: function run() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var margin = this.settings.margin || '',
			    grid = !this.settings.autoWidth,
			    rtl = this.settings.rtl,
			    css = {
				'width': 'auto',
				'margin-left': rtl ? margin : '',
				'margin-right': rtl ? '' : margin
			};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
			    merge = null,
			    iterator = this._items.length,
			    grid = !this.settings.autoWidth,
			    widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: ['items', 'settings'],
		run: function run() {
			var clones = [],
			    items = this._items,
			    settings = this.settings,

			// TODO: Should be computed from number of min width items in stage
			view = Math.max(settings.items * 2, 4),
			    size = Math.ceil(items.length / 2) * 2,
			    repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
			    append = '',
			    prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run() {
			var rtl = this.settings.rtl ? 1 : -1,
			    size = this._clones.length + this._items.length,
			    iterator = -1,
			    previous = 0,
			    current = 0,
			    coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run() {
			var padding = this.settings.stagePadding,
			    coordinates = this._coordinates,
			    css = {
				'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
				'padding-left': padding || '',
				'padding-right': padding || ''
			};

			this.$stage.css(css);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var iterator = this._coordinates.length,
			    grid = !this.settings.autoWidth,
			    items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: ['items'],
		run: function run() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: ['position'],
		run: function run() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: ['width', 'position', 'items', 'settings'],
		run: function run() {
			var rtl = this.settings.rtl ? 1 : -1,
			    padding = this.settings.stagePadding * 2,
			    begin = this.coordinates(this.current()) + padding,
			    end = begin + this.width() * rtl,
			    inner,
			    outer,
			    matches = [],
			    i,
			    n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if (this.op(inner, '<=', begin) && this.op(inner, '>', end) || this.op(outer, '<', begin) && this.op(outer, '>', end)) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	}];

	/**
  * Create the stage DOM element
  */
	Owl.prototype.initializeStage = function () {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap($('<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
  * Create item DOM elements
  */
	Owl.prototype.initializeItems = function () {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function (item) {
				return $(item);
			});

			this._mergers = this._items.map(function () {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
	};

	/**
  * Initializes the carousel.
  * @protected
  */
	Owl.prototype.initialize = function () {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
  * @returns {Boolean} visibility of $element
  *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
  *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
  */
	Owl.prototype.isVisible = function () {
		return this.settings.checkVisibility ? this.$element.is(':visible') : true;
	};

	/**
  * Setups the current settings.
  * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
  * @todo Support for media queries by using `matchMedia` would be nice.
  * @public
  */
	Owl.prototype.setup = function () {
		var viewport = this.viewport(),
		    overwrites = this.options.responsive,
		    match = -1,
		    settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function (breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match));
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
  * Updates option logic if necessery.
  * @protected
  */
	Owl.prototype.optionsLogic = function () {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
  * Prepares an item before add.
  * @todo Rename event parameter `content` to `item`.
  * @protected
  * @returns {jQuery|HTMLElement} - The item container.
  */
	Owl.prototype.prepare = function (item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item);
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
  * Updates the view.
  * @public
  */
	Owl.prototype.update = function () {
		var i = 0,
		    n = this._pipe.length,
		    filter = $.proxy(function (p) {
			return this[p];
		}, this._invalidated),
		    cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
  * Gets the width of the view.
  * @public
  * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
  * @returns {Number} - The width of the view in pixel.
  */
	Owl.prototype.width = function (dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
  * Refreshes the carousel primarily for adaptive purposes.
  * @public
  */
	Owl.prototype.refresh = function () {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
  * Checks window `resize` event.
  * @protected
  */
	Owl.prototype.onThrottledResize = function () {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
  * Checks window `resize` event.
  * @protected
  */
	Owl.prototype.onResize = function () {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
  * Registers event handlers.
  * @todo Check `msPointerEnabled`
  * @todo #261
  * @protected
  */
	Owl.prototype.registerEventHandlers = function () {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
				return false;
			});
		}

		if (this.settings.touchDrag) {
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
  * Handles `touchstart` and `mousedown` events.
  * @todo Horizontal swipe threshold as option
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragStart = function (event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop();
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
  * Handles the `touchmove` and `mousemove` events.
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragMove = function (event) {
		var minimum = null,
		    maximum = null,
		    pull = null,
		    delta = this.difference(this._drag.pointer, this.pointer(event)),
		    stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
  * Handles the `touchend` and `mouseup` events.
  * @todo #261
  * @todo Threshold for click event
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragEnd = function (event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
		    stage = this._drag.stage.current,
		    direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function () {
					return false;
				});
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
  * Gets absolute position of the closest item for a coordinate.
  * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
  * @protected
  * @param {Number} coordinate - The coordinate in pixel.
  * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
  * @return {Number} - The absolute position of the closest item.
  */
	Owl.prototype.closest = function (coordinate, direction) {
		var position = -1,
		    pull = 30,
		    width = this.width(),
		    coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function (index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
					// on a right pull, check on previous index
					// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
  * Animates the stage.
  * @todo #270
  * @public
  * @param {Number} coordinate - The coordinate in pixels.
  */
	Owl.prototype.animate = function (coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: this.speed() / 1000 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : '')
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
  * Checks whether the carousel is in a specific state or not.
  * @param {String} state - The state to check.
  * @returns {Boolean} - The flag which indicates if the carousel is busy.
  */
	Owl.prototype.is = function (state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
  * Sets the absolute position of the current item.
  * @public
  * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
  * @returns {Number} - The absolute position of the current item.
  */
	Owl.prototype.current = function (position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
  * Invalidates the given part of the update routine.
  * @param {String} [part] - The part to invalidate.
  * @returns {Array.<String>} - The invalidated parts.
  */
	Owl.prototype.invalidate = function (part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function (v, i) {
			return i;
		});
	};

	/**
  * Resets the absolute position of the current item.
  * @public
  * @param {Number} position - The absolute position of the new item.
  */
	Owl.prototype.reset = function (position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress(['translate', 'translated']);

		this.animate(this.coordinates(position));

		this.release(['translate', 'translated']);
	};

	/**
  * Normalizes an absolute or a relative position of an item.
  * @public
  * @param {Number} position - The absolute or relative position to normalize.
  * @param {Boolean} [relative=false] - Whether the given position is relative or not.
  * @returns {Number} - The normalized position.
  */
	Owl.prototype.normalize = function (position, relative) {
		var n = this._items.length,
		    m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
  * Converts an absolute position of an item into a relative one.
  * @public
  * @param {Number} position - The absolute position to convert.
  * @returns {Number} - The converted position.
  */
	Owl.prototype.relative = function (position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
  * Gets the maximum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
	Owl.prototype.maximum = function (relative) {
		var settings = this.settings,
		    maximum = this._coordinates.length,
		    iterator,
		    reciprocalItemsWidth,
		    elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
  * Gets the minimum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
	Owl.prototype.minimum = function (relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
	Owl.prototype.items = function (position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
	Owl.prototype.mergers = function (position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
  * Gets the absolute positions of clones for an item.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
  */
	Owl.prototype.clones = function (position) {
		var odd = this._clones.length / 2,
		    even = odd + this._items.length,
		    map = function map(index) {
			return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
		};

		if (position === undefined) {
			return $.map(this._clones, function (v, i) {
				return map(i);
			});
		}

		return $.map(this._clones, function (v, i) {
			return v === position ? map(i) : null;
		});
	};

	/**
  * Sets the current animation speed.
  * @public
  * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
  * @returns {Number} - The current animation speed in milliseconds.
  */
	Owl.prototype.speed = function (speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
  * Gets the coordinate of an item.
  * @todo The name of this method is missleanding.
  * @public
  * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
  * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
  */
	Owl.prototype.coordinates = function (position) {
		var multiplier = 1,
		    newPosition = position - 1,
		    coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function (coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
  * Calculates the speed for a translation.
  * @protected
  * @param {Number} from - The absolute position of the start item.
  * @param {Number} to - The absolute position of the target item.
  * @param {Number} [factor=undefined] - The time factor in milliseconds.
  * @returns {Number} - The time in milliseconds for the translation.
  */
	Owl.prototype.duration = function (from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
	};

	/**
  * Slides to the specified item.
  * @public
  * @param {Number} position - The position of the item.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.to = function (position, speed) {
		var current = this.current(),
		    revert = null,
		    distance = position - this.relative(current),
		    direction = (distance > 0) - (distance < 0),
		    items = this._items.length,
		    minimum = this.minimum(),
		    maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
  * Slides to the next item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.next = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
  * Slides to the previous item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.prev = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
  * Handles the end of an animation.
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onTransitionEnd = function (event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
  * Gets viewport width.
  * @protected
  * @return {Number} - The width in pixel.
  */
	Owl.prototype.viewport = function () {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
  * Replaces the current content.
  * @public
  * @param {HTMLElement|jQuery|String} content - The new content.
  */
	Owl.prototype.replace = function (content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = content instanceof jQuery ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function () {
			return this.nodeType === 1;
		}).each($.proxy(function (index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
  * Adds an item.
  * @todo Use `item` instead of `content` for the event arguments.
  * @public
  * @param {HTMLElement|jQuery|String} content - The item content to add.
  * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
  */
	Owl.prototype.add = function (content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
  * Removes an item by its position.
  * @todo Use `item` instead of `content` for the event arguments.
  * @public
  * @param {Number} position - The relative position of the item to remove.
  */
	Owl.prototype.remove = function (position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
  * Preloads images with auto width.
  * @todo Replace by a more generic approach
  * @protected
  */
	Owl.prototype.preloadAutoWidthImages = function (images) {
		images.each($.proxy(function (i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function (e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
  * Destroys the carousel.
  * @public
  */
	Owl.prototype.destroy = function () {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel');
	};

	/**
  * Operators to calculate right-to-left and left-to-right.
  * @protected
  * @param {Number} [a] - The left side operand.
  * @param {String} [o] - The operator.
  * @param {Number} [b] - The right side operand.
  */
	Owl.prototype.op = function (a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
  * Attaches to an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The event handler to attach.
  * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
  */
	Owl.prototype.on = function (element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
  * Detaches from an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The attached event handler to detach.
  * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
  */
	Owl.prototype.off = function (element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
  * Triggers a public event.
  * @todo Remove `status`, `relatedTarget` should be used instead.
  * @protected
  * @param {String} name - The event name.
  * @param {*} [data=null] - The event data.
  * @param {String} [namespace=carousel] - The event namespace.
  * @param {String} [state] - The state which is associated with the event.
  * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
  * @returns {Event} - The event arguments.
  */
	Owl.prototype.trigger = function (name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		},
		    handler = $.camelCase($.grep(['on', name, namespace], function (v) {
			return v;
		}).join('-').toLowerCase()),
		    event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({ relatedTarget: this }, status, data));

		if (!this._supress[name]) {
			$.each(this._plugins, function (name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
  * Enters a state.
  * @param name - The state name.
  */
	Owl.prototype.enter = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
  * Leaves a state.
  * @param name - The state name.
  */
	Owl.prototype.leave = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
  * Registers an event or state.
  * @public
  * @param {Object} object - The event or state to register.
  */
	Owl.prototype.register = function (object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function (e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
  * Suppresses events.
  * @protected
  * @param {Array.<String>} events - The events to suppress.
  */
	Owl.prototype.suppress = function (events) {
		$.each(events, $.proxy(function (index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
  * Releases suppressed events.
  * @protected
  * @param {Array.<String>} events - The events to release.
  */
	Owl.prototype.release = function (events) {
		$.each(events, $.proxy(function (index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
  * Gets unified pointer coordinates from event.
  * @todo #261
  * @protected
  * @param {Event} - The `mousedown` or `touchstart` event.
  * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
  */
	Owl.prototype.pointer = function (event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
  * Determines if the input is a Number or something that can be coerced to a Number
  * @protected
  * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
  * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
  */
	Owl.prototype.isNumeric = function (number) {
		return !isNaN(parseFloat(number));
	};

	/**
  * Gets the difference of two vectors.
  * @todo #261
  * @protected
  * @param {Object} - The first vector.
  * @param {Object} - The second vector.
  * @returns {Object} - The difference.
  */
	Owl.prototype.difference = function (first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
  * The jQuery Plugin for the Owl Carousel
  * @todo Navigation plugin `next` and `prev`
  * @public
  */
	$.fn.owlCarousel = function (option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function () {
			var $this = $(this),
			    data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
				$this.data('owl.carousel', data);

				$.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([event]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([event]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
  * The constructor for the jQuery Plugin
  * @public
  */
	$.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {

	/**
  * Creates the auto refresh plugin.
  * @class The Auto Refresh Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var AutoRefresh = function AutoRefresh(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Refresh interval.
   * @protected
   * @type {number}
   */
		this._interval = null;

		/**
   * Whether the element is currently visible or not.
   * @protected
   * @type {Boolean}
   */
		this._visible = null;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
  * Watches the element.
  */
	AutoRefresh.prototype.watch = function () {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
  * Refreshes the element.
  */
	AutoRefresh.prototype.refresh = function () {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && this._core.invalidate('width') && this._core.refresh();
	};

	/**
  * Destroys the plugin.
  */
	AutoRefresh.prototype.destroy = function () {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {

	/**
  * Creates the lazy plugin.
  * @class The Lazy Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Lazy = function Lazy(carousel) {

		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Already loaded items.
   * @protected
   * @type {Array.<jQuery>}
   */
		this._loaded = [];

		/**
   * Event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if (e.property && e.property.name == 'position' || e.type == 'initialized') {
					var settings = this._core.settings,
					    n = settings.center && Math.ceil(settings.items / 2) || settings.items,
					    i = settings.center && n * -1 || 0,
					    position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
					    clones = this._core.clones().length,
					    load = $.proxy(function (i, v) {
						this.load(v);
					}, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
							position -= settings.lazyLoadEager;
							n++;
						}
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
  * Loads all resources of an item at the specified position.
  * @param {Number} position - The absolute position of the item.
  * @protected
  */
	Lazy.prototype.load = function (position) {
		var $item = this._core.$stage.children().eq(position),
		    $elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function (index, element) {
			var $element = $(element),
			    image,
			    url = window.devicePixelRatio > 1 && $element.attr('data-src-retina') || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else if ($element.is('source')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function () {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Lazy.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {

	/**
  * Creates the auto height plugin.
  * @class The Auto Height Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var AutoHeight = function AutoHeight(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		this._previousHeight = null;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function () {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function () {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function () {
					refThis.update();
				}, 250);
			}
		});
	};

	/**
  * Default options.
  * @public
  */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
  * Updates the view.
  */
	AutoHeight.prototype.update = function () {
		var start = this._core._current,
		    end = start + this._core.settings.items,
		    lazyLoadEnabled = this._core.settings.lazyLoad,
		    visible = this._core.$stage.children().toArray().slice(start, end),
		    heights = [],
		    maxheight = 0;

		$.each(visible, function (index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function () {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {

	/**
  * Creates the video plugin.
  * @class The Video Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Video = function Video(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Cache all video URLs.
   * @protected
   * @type {Object}
   */
		this._videos = {};

		/**
   * Current playing item.
   * @protected
   * @type {jQuery}
   */
		this._playing = null;

		/**
   * All event handlers.
   * @todo The cloned content removale is too late
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
			this.play(e);
		}, this));
	};

	/**
  * Default options.
  * @public
  */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
  * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {jQuery} item - The item containing the video.
  */
	Video.prototype.fetch = function (target, item) {
		var type = function () {
			if (target.attr('data-vimeo-id')) {
				return 'vimeo';
			} else if (target.attr('data-vzaar-id')) {
				return 'vzaar';
			} else {
				return 'youtube';
			}
		}(),
		    id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
		    width = target.attr('data-width') || this._core.settings.videoWidth,
		    height = target.attr('data-height') || this._core.settings.videoHeight,
		    url = target.attr('href');

		if (url) {

			/*
   		Parses the id's out of the following urls (and probably more):
   		https://www.youtube.com/watch?v=:id
   		https://youtu.be/:id
   		https://vimeo.com/:id
   		https://vimeo.com/channels/:channel/:id
   		https://vimeo.com/groups/:group/videos/:id
   		https://app.vzaar.com/videos/:id
   			Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
   */

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
  * Creates video thumbnail.
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {Object} info - The video info object.
  * @see `fetch`
  */
	Video.prototype.thumbnail = function (target, video) {
		var tnLink,
		    icon,
		    path,
		    dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
		    customTn = target.find('img'),
		    srcType = 'src',
		    lazyClass = '',
		    settings = this._core.settings,
		    create = function create(path) {
			icon = '<div class="owl-video-play-icon"></div>';

			if (settings.lazyLoad) {
				tnLink = $('<div/>', {
					"class": 'owl-video-tn ' + lazyClass,
					"srcType": path
				});
			} else {
				tnLink = $('<div/>', {
					"class": "owl-video-tn",
					"style": 'opacity:1;background-image:url(' + path + ')'
				});
			}
			target.after(tnLink);
			target.after(icon);
		};

		// wrap video content into owl-video-wrapper div
		target.wrap($('<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function success(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function success(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
  * Stops the current video.
  * @public
  */
	Video.prototype.stop = function () {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
  * Starts the current video.
  * @public
  * @param {Event} event - The event arguments.
  */
	Video.prototype.play = function (event) {
		var target = $(event.target),
		    item = target.closest('.' + this._core.settings.itemClass),
		    video = this._videos[item.attr('data-video')],
		    width = video.width || '100%',
		    height = video.height || this._core.$stage.height(),
		    html,
		    iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
		html.attr('height', height);
		html.attr('width', width);
		if (video.type === 'youtube') {
			html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
		} else if (video.type === 'vimeo') {
			html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
		} else if (video.type === 'vzaar') {
			html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
		}

		iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
  * Checks whether an video is currently in full screen mode or not.
  * @todo Bad style because looks like a readonly method but changes members.
  * @protected
  * @returns {Boolean}
  */
	Video.prototype.isInFullScreen = function () {
		var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
  * Destroys the plugin.
  */
	Video.prototype.destroy = function () {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {

	/**
  * Creates the animate plugin.
  * @class The Navigation Plugin
  * @param {Owl} scope - The Owl Carousel
  */
	var Animate = function Animate(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
  * Default options.
  * @public
  */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
  * Toggles the animation classes whenever an translations starts.
  * @protected
  * @returns {Boolean|undefined}
  */
	Animate.prototype.swap = function () {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
		    clear = $.proxy(this.clear, this),
		    previous = this.core.$stage.children().eq(this.previous),
		    next = this.core.$stage.children().eq(this.next),
		    incoming = this.core.settings.animateIn,
		    outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear).css({ 'left': left + 'px' }).addClass('animated owl-animated-out').addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);
		}
	};

	Animate.prototype.clear = function (e) {
		$(e.target).css({ 'left': '' }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Animate.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {

	/**
  * Creates the autoplay plugin.
  * @class The Autoplay Plugin
  * @param {Owl} scope - The Owl Carousel
  */
	var Autoplay = function Autoplay(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * The autoplay timeout id.
   * @type {Number}
   */
		this._call = null;

		/**
   * Depending on the state of the plugin, this variable contains either
   * the start time of the timer or the current timer value if it's
   * paused. Since we start in a paused state we initialize the timer
   * value.
   * @type {Number}
   */
		this._time = 0;

		/**
   * Stores the timeout currently used.
   * @type {Number}
   */
		this._timeout = 0;

		/**
   * Indicates whenever the autoplay is paused.
   * @type {Boolean}
   */
		this._paused = true;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function (e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function (e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
  * Default options.
  * @public
  */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
  * Transition to the next slide and set a timeout for the next transition.
  * @private
  * @param {Number} [speed] - The animation speed for the animations.
  */
	Autoplay.prototype._next = function (speed) {
		this._call = window.setTimeout($.proxy(this._next, this, speed), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read());

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	};

	/**
  * Reads the current timer value when the timer is playing.
  * @public
  */
	Autoplay.prototype.read = function () {
		return new Date().getTime() - this._time;
	};

	/**
  * Starts the autoplay.
  * @public
  * @param {Number} [timeout] - The interval before the next animation starts.
  * @param {Number} [speed] - The animation speed for the animations.
  */
	Autoplay.prototype.play = function (timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
  * Stops the autoplay.
  * @public
  */
	Autoplay.prototype.stop = function () {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
  * Pauses the autoplay.
  * @public
  */
	Autoplay.prototype.pause = function () {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
  * Destroys the plugin.
  */
	Autoplay.prototype.destroy = function () {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
	'use strict';

	/**
  * Creates the navigation plugin.
  * @class The Navigation Plugin
  * @param {Owl} carousel - The Owl Carousel.
  */

	var Navigation = function Navigation(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Indicates whether the plugin is initialized or not.
   * @protected
   * @type {Boolean}
   */
		this._initialized = false;

		/**
   * The current paging indexes.
   * @protected
   * @type {Array}
   */
		this._pages = [];

		/**
   * All DOM elements of the user interface.
   * @protected
   * @type {Object}
   */
		this._controls = {};

		/**
   * Markup for an indicator.
   * @protected
   * @type {Array.<String>}
   */
		this._templates = [];

		/**
   * The carousel element.
   * @type {jQuery}
   */
		this.$element = this._core.$element;

		/**
   * Overridden methods of the carousel.
   * @protected
   * @type {Object}
   */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  * @todo Rename `slideBy` to `navBy`
  */
	Navigation.Defaults = {
		nav: false,
		navText: ['<span aria-label="' + 'Previous' + '">&#x2039;</span>', '<span aria-label="' + 'Next' + '">&#x203a;</span>'],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: ['owl-prev', 'owl-next'],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
  * Initializes the layout of the plugin and extends the carousel.
  * @protected
  */
	Navigation.prototype.initialize = function () {
		var override,
		    settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function (e) {
			this.prev(settings.navSpeed);
		}, this));
		this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function (e) {
			this.next(settings.navSpeed);
		}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [$('<button role="button">').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function (e) {
			var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
  	$(document).off(".carousel");
  		$(document).on('keydown.carousel', function(e) {
  		if(e.keyCode == 37) {
  			$el.trigger('prev.owl')
  		}
  		if(e.keyCode == 39) {
  			$el.trigger('next.owl')
  		}
  	});
  });*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
  * Destroys the plugin.
  * @protected
  */
	Navigation.prototype.destroy = function () {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
  * Updates the internal state.
  * @protected
  */
	Navigation.prototype.update = function () {
		var i,
		    j,
		    k,
		    lower = this._core.clones().length / 2,
		    upper = lower + this._core.items().length,
		    maximum = this._core.maximum(true),
		    settings = this._core.settings,
		    size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
  * Draws the user interface.
  * @todo The option `dotsData` wont work.
  * @protected
  */
	Navigation.prototype.draw = function () {
		var difference,
		    settings = this._core.settings,
		    disabled = this._core.items().length <= settings.items,
		    index = this._core.relative(this._core.current()),
		    loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
  * Extends event data.
  * @protected
  * @param {Event} event - The event object which gets thrown.
  */
	Navigation.prototype.onTrigger = function (event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
  * Gets the current page position of the carousel.
  * @protected
  * @returns {Number}
  */
	Navigation.prototype.current = function () {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function (page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
  * Gets the current succesor/predecessor position.
  * @protected
  * @returns {Number}
  */
	Navigation.prototype.getPosition = function (successor) {
		var position,
		    length,
		    settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[(position % length + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
  * Slides to the next item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
	Navigation.prototype.next = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
  * Slides to the previous item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
	Navigation.prototype.prev = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
  * Slides to the specified item or page.
  * @public
  * @param {Number} position - The position of the item or page.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
  */
	Navigation.prototype.to = function (position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
	'use strict';

	/**
  * Creates the hash plugin.
  * @class The Hash Plugin
  * @param {Owl} carousel - The Owl Carousel
  */

	var Hash = function Hash(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Hash index for the items.
   * @protected
   * @type {Object}
   */
		this._hashes = {};

		/**
   * The carousel element.
   * @type {jQuery}
   */
		this.$element = this._core.$element;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
					    hash = $.map(this._hashes, function (item, hash) {
						return item === current ? hash : null;
					}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function (e) {
			var hash = window.location.hash.substring(1),
			    items = this._core.$stage.children(),
			    position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
  * Default options.
  * @public
  */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Hash.prototype.destroy = function () {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {

	var style = $('<support>').get(0).style,
	    prefixes = 'Webkit Moz O ms'.split(' '),
	    events = {
		transition: {
			end: {
				WebkitTransition: 'webkitTransitionEnd',
				MozTransition: 'transitionend',
				OTransition: 'oTransitionEnd',
				transition: 'transitionend'
			}
		},
		animation: {
			end: {
				WebkitAnimation: 'webkitAnimationEnd',
				MozAnimation: 'animationend',
				OAnimation: 'oAnimationEnd',
				animation: 'animationend'
			}
		}
	},
	    tests = {
		csstransforms: function csstransforms() {
			return !!test('transform');
		},
		csstransforms3d: function csstransforms3d() {
			return !!test('perspective');
		},
		csstransitions: function csstransitions() {
			return !!test('transition');
		},
		cssanimations: function cssanimations() {
			return !!test('animation');
		}
	};

	function test(property, prefixed) {
		var result = false,
		    upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'));
		$.support.transition.end = events.transition.end[$.support.transition];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'));
		$.support.animation.end = events.animation.end[$.support.animation];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}
})(window.Zepto || window.jQuery, window, document);

/*
 * ScrollToFixed
 * https://github.com/bigspotteddog/ScrollToFixed
 *
 * Copyright (c) 2011 Joseph Cava-Lynch
 * MIT license
 */
(function ($) {
    $.isScrollToFixed = function (el) {
        return !!$(el).data('ScrollToFixed');
    };

    $.ScrollToFixed = function (el, options) {
        // To avoid scope issues, use 'base' instead of 'this' to reference this
        // class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element.
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object.
        base.$el.data('ScrollToFixed', base);

        // A flag so we know if the scroll has been reset.
        var isReset = false;

        // The element that was given to us to fix if scrolled above the top of
        // the page.
        var target = base.$el;

        var position;
        var originalPosition;
        var originalFloat;
        var originalOffsetTop;
        var originalZIndex;

        // The offset top of the element when resetScroll was called. This is
        // used to determine if we have scrolled past the top of the element.
        var offsetTop = 0;

        // The offset left of the element when resetScroll was called. This is
        // used to move the element left or right relative to the horizontal
        // scroll.
        var offsetLeft = 0;
        var originalOffsetLeft = -1;

        // This last offset used to move the element horizontally. This is used
        // to determine if we need to move the element because we would not want
        // to do that for no reason.
        var lastOffsetLeft = -1;

        // This is the element used to fill the void left by the target element
        // when it goes fixed; otherwise, everything below it moves up the page.
        var spacer = null;

        var spacerClass;

        var className;

        // Capture the original offsets for the target element. This needs to be
        // called whenever the page size changes or when the page is first
        // scrolled. For some reason, calling this before the page is first
        // scrolled causes the element to become fixed too late.
        function resetScroll() {
            // Set the element to it original positioning.
            target.trigger('preUnfixed.ScrollToFixed');
            setUnfixed();
            target.trigger('unfixed.ScrollToFixed');

            // Reset the last offset used to determine if the page has moved
            // horizontally.
            lastOffsetLeft = -1;

            // Capture the offset top of the target element.
            offsetTop = target.offset().top;

            // Capture the offset left of the target element.
            offsetLeft = target.offset().left;

            // If the offsets option is on, alter the left offset.
            if (base.options.offsets) {
                offsetLeft += target.offset().left - target.position().left;
            }

            if (originalOffsetLeft == -1) {
                originalOffsetLeft = offsetLeft;
            }

            position = target.css('position');

            // Set that this has been called at least once.
            isReset = true;

            if (base.options.bottom != -1) {
                target.trigger('preFixed.ScrollToFixed');
                setFixed();
                target.trigger('fixed.ScrollToFixed');
            }
        }

        function getLimit() {
            var limit = base.options.limit;
            if (!limit) return 0;

            if (typeof limit === 'function') {
                return limit.apply(target);
            }
            return limit;
        }

        // Returns whether the target element is fixed or not.
        function isFixed() {
            return position === 'fixed';
        }

        // Returns whether the target element is absolute or not.
        function isAbsolute() {
            return position === 'absolute';
        }

        function isUnfixed() {
            return !(isFixed() || isAbsolute());
        }

        // Sets the target element to fixed. Also, sets the spacer to fill the
        // void left by the target element.
        function setFixed() {
            // Only fix the target element and the spacer if we need to.
            if (!isFixed()) {
                //get REAL dimensions (decimal fix)
                //Ref. http://stackoverflow.com/questions/3603065/how-to-make-jquery-to-not-round-value-returned-by-width
                var dimensions = target[0].getBoundingClientRect();

                // Set the spacer to fill the height and width of the target
                // element, then display it.
                spacer.css({
                    'display': target.css('display'),
                    'width': dimensions.width,
                    'height': dimensions.height,
                    'float': target.css('float')
                });

                // Set the target element to fixed and set its width so it does
                // not fill the rest of the page horizontally. Also, set its top
                // to the margin top specified in the options.

                var cssOptions = {
                    'z-index': base.options.zIndex,
                    'position': 'fixed',
                    'top': base.options.bottom == -1 ? getMarginTop() : '',
                    'bottom': base.options.bottom == -1 ? '' : base.options.bottom,
                    'margin-left': '0px'
                };
                if (!base.options.dontSetWidth) {
                    cssOptions['width'] = target.css('width');
                }

                target.css(cssOptions);

                target.addClass(base.options.baseClassName);

                if (base.options.className) {
                    target.addClass(base.options.className);
                }

                position = 'fixed';
            }
        }

        function setAbsolute() {

            var top = getLimit();
            var left = offsetLeft;

            if (base.options.removeOffsets) {
                left = '';
                top = top - offsetTop;
            }

            var cssOptions = {
                'position': 'absolute',
                'top': top,
                'left': left,
                'margin-left': '0px',
                'bottom': ''
            };
            if (!base.options.dontSetWidth) {
                cssOptions['width'] = target.css('width');
            }

            target.css(cssOptions);

            position = 'absolute';
        }

        // Sets the target element back to unfixed. Also, hides the spacer.
        function setUnfixed() {
            // Only unfix the target element and the spacer if we need to.
            if (!isUnfixed()) {
                lastOffsetLeft = -1;

                // Hide the spacer now that the target element will fill the
                // space.
                spacer.css('display', 'none');

                // Remove the style attributes that were added to the target.
                // This will reverse the target back to the its original style.
                target.css({
                    'z-index': originalZIndex,
                    'width': '',
                    'position': originalPosition,
                    'left': '',
                    'top': originalOffsetTop,
                    'margin-left': ''
                });

                target.removeClass(base.options.baseClassName);

                if (base.options.className) {
                    target.removeClass(base.options.className);
                }

                position = null;
            }
        }

        // Moves the target element left or right relative to the horizontal
        // scroll position.
        function setLeft(x) {
            // Only if the scroll is not what it was last time we did this.
            if (x != lastOffsetLeft) {
                // Move the target element horizontally relative to its original
                // horizontal position.
                target.css('left', offsetLeft - x);

                // Hold the last horizontal position set.
                lastOffsetLeft = x;
            }
        }

        function getMarginTop() {
            var marginTop = base.options.marginTop;
            if (!marginTop) return 0;

            if (typeof marginTop === 'function') {
                return marginTop.apply(target);
            }
            return marginTop;
        }

        // Checks to see if we need to do something based on new scroll position
        // of the page.
        function checkScroll() {
            if (!$.isScrollToFixed(target) || target.is(':hidden')) return;
            var wasReset = isReset;
            var wasUnfixed = isUnfixed();

            // If resetScroll has not yet been called, call it. This only
            // happens once.
            if (!isReset) {
                resetScroll();
            } else if (isUnfixed()) {
                // if the offset has changed since the last scroll,
                // we need to get it again.

                // Capture the offset top of the target element.
                offsetTop = target.offset().top;

                // Capture the offset left of the target element.
                offsetLeft = target.offset().left;
            }

            // Grab the current horizontal scroll position.
            var x = $(window).scrollLeft();

            // Grab the current vertical scroll position.
            var y = $(window).scrollTop();

            // Get the limit, if there is one.
            var limit = getLimit();

            // If the vertical scroll position, plus the optional margin, would
            // put the target element at the specified limit, set the target
            // element to absolute.
            if (base.options.minWidth && $(window).width() < base.options.minWidth) {
                if (!isUnfixed() || !wasReset) {
                    postPosition();
                    target.trigger('preUnfixed.ScrollToFixed');
                    setUnfixed();
                    target.trigger('unfixed.ScrollToFixed');
                }
            } else if (base.options.maxWidth && $(window).width() > base.options.maxWidth) {
                if (!isUnfixed() || !wasReset) {
                    postPosition();
                    target.trigger('preUnfixed.ScrollToFixed');
                    setUnfixed();
                    target.trigger('unfixed.ScrollToFixed');
                }
            } else if (base.options.bottom == -1) {
                // If the vertical scroll position, plus the optional margin, would
                // put the target element at the specified limit, set the target
                // element to absolute.
                if (limit > 0 && y >= limit - getMarginTop()) {
                    if (!wasUnfixed && (!isAbsolute() || !wasReset)) {
                        postPosition();
                        target.trigger('preAbsolute.ScrollToFixed');
                        setAbsolute();
                        target.trigger('unfixed.ScrollToFixed');
                    }
                    // If the vertical scroll position, plus the optional margin, would
                    // put the target element above the top of the page, set the target
                    // element to fixed.
                } else if (y >= offsetTop - getMarginTop()) {
                    if (!isFixed() || !wasReset) {
                        postPosition();
                        target.trigger('preFixed.ScrollToFixed');

                        // Set the target element to fixed.
                        setFixed();

                        // Reset the last offset left because we just went fixed.
                        lastOffsetLeft = -1;

                        target.trigger('fixed.ScrollToFixed');
                    }
                    // If the page has been scrolled horizontally as well, move the
                    // target element accordingly.
                    setLeft(x);
                } else {
                    // Set the target element to unfixed, placing it where it was
                    // before.
                    if (!isUnfixed() || !wasReset) {
                        postPosition();
                        target.trigger('preUnfixed.ScrollToFixed');
                        setUnfixed();
                        target.trigger('unfixed.ScrollToFixed');
                    }
                }
            } else {
                if (limit > 0) {
                    if (y + $(window).height() - target.outerHeight(true) >= limit - (getMarginTop() || -getBottom())) {
                        if (isFixed()) {
                            postPosition();
                            target.trigger('preUnfixed.ScrollToFixed');

                            if (originalPosition === 'absolute') {
                                setAbsolute();
                            } else {
                                setUnfixed();
                            }

                            target.trigger('unfixed.ScrollToFixed');
                        }
                    } else {
                        if (!isFixed()) {
                            postPosition();
                            target.trigger('preFixed.ScrollToFixed');
                            setFixed();
                        }
                        setLeft(x);
                        target.trigger('fixed.ScrollToFixed');
                    }
                } else {
                    setLeft(x);
                }
            }
        }

        function getBottom() {
            if (!base.options.bottom) return 0;
            return base.options.bottom;
        }

        function postPosition() {
            var position = target.css('position');

            if (position == 'absolute') {
                target.trigger('postAbsolute.ScrollToFixed');
            } else if (position == 'fixed') {
                target.trigger('postFixed.ScrollToFixed');
            } else {
                target.trigger('postUnfixed.ScrollToFixed');
            }
        }

        var windowResize = function windowResize(event) {
            // Check if the element is visible before updating it's position, which
            // improves behavior with responsive designs where this element is hidden.
            if (target.is(':visible')) {
                isReset = false;
                checkScroll();
            } else {
                // Ensure the spacer is hidden
                setUnfixed();
            }
        };

        var windowScroll = function windowScroll(event) {
            !!window.requestAnimationFrame ? requestAnimationFrame(checkScroll) : checkScroll();
        };

        // From: http://kangax.github.com/cft/#IS_POSITION_FIXED_SUPPORTED
        var isPositionFixedSupported = function isPositionFixedSupported() {
            var container = document.body;

            if (document.createElement && container && container.appendChild && container.removeChild) {
                var el = document.createElement('div');

                if (!el.getBoundingClientRect) return null;

                el.innerHTML = 'x';
                el.style.cssText = 'position:fixed;top:100px;';
                container.appendChild(el);

                var originalHeight = container.style.height,
                    originalScrollTop = container.scrollTop;

                container.style.height = '3000px';
                container.scrollTop = 500;

                var elementTop = el.getBoundingClientRect().top;
                container.style.height = originalHeight;

                var isSupported = elementTop === 100;
                container.removeChild(el);
                container.scrollTop = originalScrollTop;

                return isSupported;
            }

            return null;
        };

        var preventDefault = function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        };

        // Initializes this plugin. Captures the options passed in, turns this
        // off for devices that do not support fixed position, adds the spacer,
        // and binds to the window scroll and resize events.
        base.init = function () {
            // Capture the options for this plugin.
            base.options = $.extend({}, $.ScrollToFixed.defaultOptions, options);

            originalZIndex = target.css('z-index');

            // Turn off this functionality for devices that do not support it.
            // if (!(base.options && base.options.dontCheckForPositionFixedSupport)) {
            //     var fixedSupported = isPositionFixedSupported();
            //     if (!fixedSupported) return;
            // }

            // Put the target element on top of everything that could be below
            // it. This reduces flicker when the target element is transitioning
            // to fixed.
            base.$el.css('z-index', base.options.zIndex);

            // Create a spacer element to fill the void left by the target
            // element when it goes fixed.
            spacer = $('<div />');

            position = target.css('position');
            originalPosition = target.css('position');
            originalFloat = target.css('float');
            originalOffsetTop = target.css('top');

            // Place the spacer right after the target element.
            if (isUnfixed()) base.$el.after(spacer);

            // Reset the target element offsets when the window is resized, then
            // check to see if we need to fix or unfix the target element.
            $(window).bind('resize.ScrollToFixed', windowResize);

            // When the window scrolls, check to see if we need to fix or unfix
            // the target element.
            $(window).bind('scroll.ScrollToFixed', windowScroll);

            // For touch devices, call checkScroll directlly rather than
            // rAF wrapped windowScroll to animate the element
            if ('ontouchmove' in window) {
                $(window).bind('touchmove.ScrollToFixed', checkScroll);
            }

            if (base.options.preFixed) {
                target.bind('preFixed.ScrollToFixed', base.options.preFixed);
            }
            if (base.options.postFixed) {
                target.bind('postFixed.ScrollToFixed', base.options.postFixed);
            }
            if (base.options.preUnfixed) {
                target.bind('preUnfixed.ScrollToFixed', base.options.preUnfixed);
            }
            if (base.options.postUnfixed) {
                target.bind('postUnfixed.ScrollToFixed', base.options.postUnfixed);
            }
            if (base.options.preAbsolute) {
                target.bind('preAbsolute.ScrollToFixed', base.options.preAbsolute);
            }
            if (base.options.postAbsolute) {
                target.bind('postAbsolute.ScrollToFixed', base.options.postAbsolute);
            }
            if (base.options.fixed) {
                target.bind('fixed.ScrollToFixed', base.options.fixed);
            }
            if (base.options.unfixed) {
                target.bind('unfixed.ScrollToFixed', base.options.unfixed);
            }

            if (base.options.spacerClass) {
                spacer.addClass(base.options.spacerClass);
            }

            target.bind('resize.ScrollToFixed', function () {
                spacer.height(target.height());
            });

            target.bind('scroll.ScrollToFixed', function () {
                target.trigger('preUnfixed.ScrollToFixed');
                setUnfixed();
                target.trigger('unfixed.ScrollToFixed');
                checkScroll();
            });

            target.bind('detach.ScrollToFixed', function (ev) {
                preventDefault(ev);

                target.trigger('preUnfixed.ScrollToFixed');
                setUnfixed();
                target.trigger('unfixed.ScrollToFixed');

                $(window).unbind('resize.ScrollToFixed', windowResize);
                $(window).unbind('scroll.ScrollToFixed', windowScroll);

                target.unbind('.ScrollToFixed');

                //remove spacer from dom
                spacer.remove();

                base.$el.removeData('ScrollToFixed');
            });

            // Reset everything.
            windowResize();
        };

        // Initialize the plugin.
        base.init();
    };

    // Sets the option defaults.
    $.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1000,
        baseClassName: 'scroll-to-fixed-fixed'
    };

    // Returns enhanced elements that will fix to the top of the page when the
    // page is scrolled.
    $.fn.scrollToFixed = function (options) {
        return this.each(function () {
            new $.ScrollToFixed(this, options);
        });
    };
})(jQuery);

/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.7.13 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2018, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
!function (a) {
  "use strict";
  function b(a, c) {
    if (!(this instanceof b)) {
      var d = new b(a, c);return d.open(), d;
    }this.id = b.id++, this.setup(a, c), this.chainCallbacks(b._callbackChain);
  }function c(a, b) {
    var c = {};for (var d in a) {
      d in b && (c[d] = a[d], delete a[d]);
    }return c;
  }function d(a, b) {
    var c = {},
        d = new RegExp("^" + b + "([A-Z])(.*)");for (var e in a) {
      var f = e.match(d);if (f) {
        var g = (f[1] + f[2].replace(/([A-Z])/g, "-$1")).toLowerCase();c[g] = a[e];
      }
    }return c;
  }if ("undefined" == typeof a) return void ("console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."));if (a.fn.jquery.match(/-ajax/)) return void ("console" in window && window.console.info("Featherlight needs regular jQuery, not the slim version."));var e = [],
      f = function f(b) {
    return e = a.grep(e, function (a) {
      return a !== b && a.$instance.closest("body").length > 0;
    });
  },
      g = { allow: 1, allowfullscreen: 1, frameborder: 1, height: 1, longdesc: 1, marginheight: 1, marginwidth: 1, mozallowfullscreen: 1, name: 1, referrerpolicy: 1, sandbox: 1, scrolling: 1, src: 1, srcdoc: 1, style: 1, webkitallowfullscreen: 1, width: 1 },
      h = { keyup: "onKeyUp", resize: "onResize" },
      i = function i(c) {
    a.each(b.opened().reverse(), function () {
      return c.isDefaultPrevented() || !1 !== this[h[c.type]](c) ? void 0 : (c.preventDefault(), c.stopPropagation(), !1);
    });
  },
      j = function j(c) {
    if (c !== b._globalHandlerInstalled) {
      b._globalHandlerInstalled = c;var d = a.map(h, function (a, c) {
        return c + "." + b.prototype.namespace;
      }).join(" ");a(window)[c ? "on" : "off"](d, i);
    }
  };b.prototype = { constructor: b, namespace: "featherlight", targetAttr: "data-featherlight", variant: null, resetCss: !1, background: null, openTrigger: "click", closeTrigger: "click", filter: null, root: "body", openSpeed: 250, closeSpeed: 250, closeOnClick: "background", closeOnEsc: !0, closeIcon: "&#10005;", loading: "", persist: !1, otherClose: null, beforeOpen: a.noop, beforeContent: a.noop, beforeClose: a.noop, afterOpen: a.noop, afterContent: a.noop, afterClose: a.noop, onKeyUp: a.noop, onResize: a.noop, type: null, contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"], setup: function setup(b, c) {
      "object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) || b instanceof a != !1 || c || (c = b, b = void 0);var d = a.extend(this, c, { target: b }),
          e = d.resetCss ? d.namespace + "-reset" : d.namespace,
          f = a(d.background || ['<div class="' + e + "-loading " + e + '">', '<div class="' + e + '-content">', '<button class="' + e + "-close-icon " + d.namespace + '-close" aria-label="Close">', d.closeIcon, "</button>", '<div class="' + d.namespace + '-inner">' + d.loading + "</div>", "</div>", "</div>"].join("")),
          g = "." + d.namespace + "-close" + (d.otherClose ? "," + d.otherClose : "");return d.$instance = f.clone().addClass(d.variant), d.$instance.on(d.closeTrigger + "." + d.namespace, function (b) {
        if (!b.isDefaultPrevented()) {
          var c = a(b.target);("background" === d.closeOnClick && c.is("." + d.namespace) || "anywhere" === d.closeOnClick || c.closest(g).length) && (d.close(b), b.preventDefault());
        }
      }), this;
    }, getContent: function getContent() {
      if (this.persist !== !1 && this.$content) return this.$content;var b = this,
          c = this.constructor.contentFilters,
          d = function d(a) {
        return b.$currentTarget && b.$currentTarget.attr(a);
      },
          e = d(b.targetAttr),
          f = b.target || e || "",
          g = c[b.type];if (!g && f in c && (g = c[f], f = b.target && e), f = f || d("href") || "", !g) for (var h in c) {
        b[h] && (g = c[h], f = b[h]);
      }if (!g) {
        var i = f;if (f = null, a.each(b.contentFilters, function () {
          return g = c[this], g.test && (f = g.test(i)), !f && g.regex && i.match && i.match(g.regex) && (f = i), !f;
        }), !f) return "console" in window && window.console.error("Featherlight: no content filter found " + (i ? ' for "' + i + '"' : " (no target specified)")), !1;
      }return g.process.call(b, f);
    }, setContent: function setContent(b) {
      return this.$instance.removeClass(this.namespace + "-loading"), this.$instance.toggleClass(this.namespace + "-iframe", b.is("iframe")), this.$instance.find("." + this.namespace + "-inner").not(b).slice(1).remove().end().replaceWith(a.contains(this.$instance[0], b[0]) ? "" : b), this.$content = b.addClass(this.namespace + "-inner"), this;
    }, open: function open(b) {
      var c = this;if (c.$instance.hide().appendTo(c.root), !(b && b.isDefaultPrevented() || c.beforeOpen(b) === !1)) {
        b && b.preventDefault();var d = c.getContent();if (d) return e.push(c), j(!0), c.$instance.fadeIn(c.openSpeed), c.beforeContent(b), a.when(d).always(function (a) {
          c.setContent(a), c.afterContent(b);
        }).then(c.$instance.promise()).done(function () {
          c.afterOpen(b);
        });
      }return c.$instance.detach(), a.Deferred().reject().promise();
    }, close: function close(b) {
      var c = this,
          d = a.Deferred();return c.beforeClose(b) === !1 ? d.reject() : (0 === f(c).length && j(!1), c.$instance.fadeOut(c.closeSpeed, function () {
        c.$instance.detach(), c.afterClose(b), d.resolve();
      })), d.promise();
    }, resize: function resize(a, b) {
      if (a && b) {
        this.$content.css("width", "").css("height", "");var c = Math.max(a / (this.$content.parent().width() - 1), b / (this.$content.parent().height() - 1));c > 1 && (c = b / Math.floor(b / c), this.$content.css("width", "" + a / c + "px").css("height", "" + b / c + "px"));
      }
    }, chainCallbacks: function chainCallbacks(b) {
      for (var c in b) {
        this[c] = a.proxy(b[c], this, a.proxy(this[c], this));
      }
    } }, a.extend(b, { id: 0, autoBind: "[data-featherlight]", defaults: b.prototype, contentFilters: { jquery: { regex: /^[#.]\w/, test: function test(b) {
          return b instanceof a && b;
        }, process: function process(b) {
          return this.persist !== !1 ? a(b) : a(b).clone(!0);
        } }, image: { regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i, process: function process(b) {
          var c = this,
              d = a.Deferred(),
              e = new Image(),
              f = a('<img src="' + b + '" alt="" class="' + c.namespace + '-image" />');return e.onload = function () {
            f.naturalWidth = e.width, f.naturalHeight = e.height, d.resolve(f);
          }, e.onerror = function () {
            d.reject(f);
          }, e.src = b, d.promise();
        } }, html: { regex: /^\s*<[\w!][^<]*>/, process: function process(b) {
          return a(b);
        } }, ajax: { regex: /./, process: function process(b) {
          var c = a.Deferred(),
              d = a("<div></div>").load(b, function (a, b) {
            "error" !== b && c.resolve(d.contents()), c.fail();
          });return c.promise();
        } }, iframe: { process: function process(b) {
          var e = new a.Deferred(),
              f = a("<iframe/>"),
              h = d(this, "iframe"),
              i = c(h, g);return f.hide().attr("src", b).attr(i).css(h).on("load", function () {
            e.resolve(f.show());
          }).appendTo(this.$instance.find("." + this.namespace + "-content")), e.promise();
        } }, text: { process: function process(b) {
          return a("<div>", { text: b });
        } } }, functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"], readElementConfig: function readElementConfig(b, c) {
      var d = this,
          e = new RegExp("^data-" + c + "-(.*)"),
          f = {};return b && b.attributes && a.each(b.attributes, function () {
        var b = this.name.match(e);if (b) {
          var c = this.value,
              g = a.camelCase(b[1]);if (a.inArray(g, d.functionAttributes) >= 0) c = new Function(c);else try {
            c = JSON.parse(c);
          } catch (h) {}f[g] = c;
        }
      }), f;
    }, extend: function extend(b, c) {
      var d = function d() {
        this.constructor = b;
      };return d.prototype = this.prototype, b.prototype = new d(), b.__super__ = this.prototype, a.extend(b, this, c), b.defaults = b.prototype, b;
    }, attach: function attach(b, c, d) {
      var e = this;"object" != (typeof c === "undefined" ? "undefined" : _typeof(c)) || c instanceof a != !1 || d || (d = c, c = void 0), d = a.extend({}, d);var f,
          g = d.namespace || e.defaults.namespace,
          h = a.extend({}, e.defaults, e.readElementConfig(b[0], g), d),
          i = function i(g) {
        var i = a(g.currentTarget),
            j = a.extend({ $source: b, $currentTarget: i }, e.readElementConfig(b[0], h.namespace), e.readElementConfig(g.currentTarget, h.namespace), d),
            k = f || i.data("featherlight-persisted") || new e(c, j);"shared" === k.persist ? f = k : k.persist !== !1 && i.data("featherlight-persisted", k), j.$currentTarget.blur && j.$currentTarget.blur(), k.open(g);
      };return b.on(h.openTrigger + "." + h.namespace, h.filter, i), { filter: h.filter, handler: i };
    }, current: function current() {
      var a = this.opened();return a[a.length - 1] || null;
    }, opened: function opened() {
      var b = this;return f(), a.grep(e, function (a) {
        return a instanceof b;
      });
    }, close: function close(a) {
      var b = this.current();return b ? b.close(a) : void 0;
    }, _onReady: function _onReady() {
      var b = this;if (b.autoBind) {
        var c = a(b.autoBind);c.each(function () {
          b.attach(a(this));
        }), a(document).on("click", b.autoBind, function (d) {
          if (!d.isDefaultPrevented()) {
            var e = a(d.currentTarget),
                f = c.length;if (c = c.add(e), f !== c.length) {
              var g = b.attach(e);(!g.filter || a(d.target).parentsUntil(e, g.filter).length > 0) && g.handler(d);
            }
          }
        });
      }
    }, _callbackChain: { onKeyUp: function onKeyUp(b, c) {
        return 27 === c.keyCode ? (this.closeOnEsc && a.featherlight.close(c), !1) : b(c);
      }, beforeOpen: function beforeOpen(b, c) {
        return a(document.documentElement).addClass("with-featherlight"), this._previouslyActive = document.activeElement, this._$previouslyTabbable = a("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")), this._$previouslyWithTabIndex = a("[tabindex]").not('[tabindex="-1"]'), this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function (b, c) {
          return a(c).attr("tabindex");
        }), this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1), document.activeElement.blur && document.activeElement.blur(), b(c);
      }, afterClose: function afterClose(c, d) {
        var e = c(d),
            f = this;return this._$previouslyTabbable.removeAttr("tabindex"), this._$previouslyWithTabIndex.each(function (b, c) {
          a(c).attr("tabindex", f._previousWithTabIndices[b]);
        }), this._previouslyActive.focus(), 0 === b.opened().length && a(document.documentElement).removeClass("with-featherlight"), e;
      }, onResize: function onResize(a, b) {
        return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), a(b);
      }, afterContent: function afterContent(a, b) {
        var c = a(b);return this.$instance.find("[autofocus]:not([disabled])").focus(), this.onResize(b), c;
      } } }), a.featherlight = b, a.fn.featherlight = function (a, c) {
    return b.attach(this, a, c), this;
  }, a(document).ready(function () {
    b._onReady();
  });
}(jQuery);

var Hamburger = function () {
    createClass(Hamburger, null, [{
        key: 'selector',
        value: function selector() {
            return '.js-hamburger';
        }
    }]);

    function Hamburger(node) {
        var openCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var closeCb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        classCallCheck(this, Hamburger);

        this.node = node;

        // Any callbacks to be called on open or close.
        this.openCb = openCb;
        this.closeCb = closeCb;

        this.state = {
            open: false
        };

        this.bindEventListeners();
    }

    createClass(Hamburger, [{
        key: 'bindEventListeners',
        value: function bindEventListeners() {
            this.node.click(this.toggle.bind(this));
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.state.open ? this.close() : this.open();
        }
    }, {
        key: 'open',
        value: function open() {
            this.node.addClass('open');
            this.openCb();

            this.state.open = true;
        }
    }, {
        key: 'close',
        value: function close() {
            this.node.removeClass('open');
            this.closeCb();

            this.state.open = false;
        }
    }]);
    return Hamburger;
}();

// Open the header callback
function openHeader() {
    jquery('.header').addClass('nav-open').find('.header__row').fadeIn(250);
}

// Close the header callback.
function closeHeader() {
    var _this = this;

    jquery('.header').removeClass('nav-open').find('.header__row').fadeOut(250, function () {
        _this.node.next().removeAttr('style');
    });
}

// Change carousel component to owl carousel
function setCarousel() {
    jquery('.js-carousel').addClass('owl-carousel');

    jquery('.js-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true
    });
}

function isMobileScreen() {
    return jquery(window).width() < 768;
}

function isOwlCarousel() {
    return jquery('.js-carousel').hasClass('owl-carousel');
}

function removeCarousel() {
    var carousel = jquery('.owl-carousel');
    carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    carousel.find('.owl-stage-outer').children().unwrap();
}

jquery(function () {
    jquery(Hamburger.selector()).each(function (index, el) {
        new Hamburger(jquery(el), openHeader, closeHeader);
    });

    // Autoplays YouTube embed in a video streamfield
    jquery('.video__button').on('click', function (ev) {
        var video = jquery(this).parent().siblings().find('iframe');
        var overlay = jquery(this).parent('.video__overlay');
        jquery(video)[0].src += '&autoplay=1&modestbranding=1&showinfo=0';
        jquery(overlay).hide();
        ev.preventDefault();
    });

    // Full width slider streamfield
    jquery('.js-carousel--full-width').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoHeight: false,
        navContainer: '.js-full-width-nav',
        navText: ['<svg class="carousel__nav-left"><use xlink:href="#arrow"></use></svg>', '<svg class="carousel__nav-right"><use xlink:href="#arrow"></use></svg>'],
        loop: jquery('.owl-carousel .carousel__item').length > 1 ? true : false
    });

    // Full width slider streamfield
    jquery('.js-slider--full-width').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoHeight: false,
        navContainer: '.js-slider__nav--full-width',
        navText: ['<svg class="slider__nav-left"></svg>', '<svg class="slider__nav-right"></svg>'],
        loop: true,
        autoplay: jquery('.slider-container').attr('data-delay') > 0,
        autoplayTimeout: jquery('.slider-container').attr('data-delay')
    });

    // Hide the carousel nav if there's only one slide - relies on the result of the loop ternary above
    if (jquery('.owl-carousel .carousel__item').length === 1) {
        jquery('.carousel__nav').hide();
    }

    // Filters articles via the category id
    jquery('.js-article-filter').on('change', function () {
        var url = jquery(this).val();

        if (url) {
            window.location = '?category=' + url;
            return false;
        }
        window.location = '/stories/';
        return false;
    });

    // Modal that autoplays a YouTube embed
    jquery('.js-modal').featherlight({
        targetAttr: 'href',
        variant: 'modal-container', // add class for custom styling
        afterOpen: function afterOpen() {
            var video = jquery('.featherlight iframe')[0];
            video.src += '&autoplay=1&modestbranding=1&showinfo=0';
        }
    });

    // Desktop search
    jquery('.js-search-desktop').on('click', function () {
        jquery(this).toggleClass('is-active');
        var headerHeight = jquery('.header').outerHeight();
        var searchBar = jquery('.header__search-bar--desktop');
        var form = jquery('.form--search');

        jquery(searchBar).css('top', headerHeight); // get the header height so the search bar displays in the correct place
        jquery(form).removeClass('visible');
        jquery(searchBar).slideToggle(250, function () {
            jquery(form).addClass('visible');
            jquery('.input--search').focus();
        });
    });

    // Mobile search open
    jquery('.js-search-mobile').on('click', function () {
        jquery('.header__search-bar--mobile').addClass('is-visible');
        jquery('.input--search').focus();
    });

    // Mobile search close
    jquery('.js-close-search-mobile').on('click', function () {
        jquery('.header__search-bar--mobile').removeClass('is-visible');
    });

    // Sticky share icons on the article page
    jquery(function () {
        if (jquery('.js-share-icons').length) {
            jquery('.js-share-icons').scrollToFixed({
                marginTop: 30,
                limit: jquery(jquery('.footer')).offset().top - jquery('.js-share-icons').outerHeight(true) - 30
            });
        }
    });

    // Desktop navigation
    if (window.matchMedia('(min-width: 1024px)').matches) {
        jquery('.header__nav-item-primary-parent, .header__nav-secondary').mouseover(function () {
            jquery(this).children('.header__link-primary').addClass('is-active');
            jquery(this).children('.header__nav-secondary').addClass('is-visible');
            jquery('.header__nav-overlay').addClass('is-visible');
        });

        jquery('.header__nav-item-primary-parent, .header__nav-overlay, .header__nav-secondary').mouseout(function () {
            jquery(this).children('.header__link-primary').removeClass('is-active');
            jquery('.header__nav-overlay, .header__nav-secondary').removeClass('is-visible');
        });
    }

    // Mobile navigation
    if (window.matchMedia('(max-width: 1024px)').matches) {
        jquery('.header__link-primary').on('click', function () {
            jquery(this).parent().toggleClass('is-open');
            jquery(this).siblings('ul').slideToggle(250);
        });

        jquery('.js-mobile-dropdown').on('click', function () {
            jquery(this).parent().toggleClass('is-open');
            jquery(this).next('ul').slideToggle(250);
        });
    }

    // Home page carousel - changes to Owl Carousel on mobile
    jquery('.carousel__panel').mouseover(function () {
        var panelNumber = jquery(this).data('panel');
        var image = document.querySelector('img[data-image="' + panelNumber + '"]');
        jquery('.carousel__panel').removeClass('is-expanded');
        jquery(this).addClass('is-expanded');

        this.addEventListener('transitionend', function (e) {
            if (e.propertyName !== 'height') return;
            jquery(this).children('.carousel__panel-content').css('opacity', 1);
        });

        jquery('.carousel__image--hidden').removeClass('is-visible');
        jquery(image).addClass('is-visible');
    });

    // Count items in carousel to set styling class
    jquery('.js-carousel').each(function (index, el) {
        jquery(el).addClass('carousel--' + jquery(el).find('.carousel__block-item').length + '-panel');
    });

    // Show carousel content & hide first overview text
    jquery('.carousel__controls').mouseover(function () {
        var panel = jquery(this).closest('.carousel__block-item');
        var panel_overview = panel.parent().find('.carousel__overview')[0];
        var panel_first = panel.parent().find('.carousel__block-item')[0];

        if (panel[0] !== panel_first) {
            jquery(panel_overview).hide();
        }

        panel.addClass('is-selected');
    });

    jquery('.carousel__controls').mouseout(function () {
        var panel = jquery(this).closest('.carousel__block-item');
        var panel_overview = panel.parent().find('.carousel__overview')[0];
        jquery(panel_overview).show();
        panel.removeClass('is-selected');
    });

    if (isMobileScreen()) {
        setCarousel();
    }

    // Change carousel to owl carousel when mobile screensize reaced
    jquery(window).on('resize', function () {
        if (isMobileScreen()) {
            if (!isOwlCarousel()) {
                setCarousel();
            }
        } else {
            if (isOwlCarousel()) {
                removeCarousel();
            }
        }
    });

    // Always show the main slide when not hovering on the home page carousel
    jquery('.carousel--home-desktop').mouseout(function () {
        jquery('.carousel__image.is-visible').removeClass('is-visible');
    });

    // Hide the carousel panels when not being hovered over
    jquery('.carousel__panel').mouseout(function () {
        jquery('.carousel__panel').removeClass('is-expanded');
    });

    // Extendable body toggleClass
    jquery('.extendable-body--toggle').on('click', function () {
        jquery('.extendable-body--collapsible').slideToggle();
        jquery('.extendable-body--open').toggle();
        jquery('.extendable-body--close').toggle();
    });

    // Article Page Filter Setup
    function constructFilter(filter) {
        filter.addClass('article-select--hidden');
        filter.wrap('<div class="article-select"></div>');
        filter.after('<div class="article-select--styled"></div>');
    }

    function defaultFilterItem(filter) {
        var styledArticleFilter = filter.next('div.article-select--styled');
        styledArticleFilter.text(jquery('option[selected]').text() || filter.children('option').eq(0).text());

        return styledArticleFilter;
    }

    function createFilterListItems(articleFilter, articleFilterOptionsCount, filterList) {
        for (var i = 0; i < articleFilterOptionsCount; i++) {
            jquery('<li />', {
                text: articleFilter.children('option').eq(i).text(),
                rel: articleFilter.children('option').eq(i).val(),
                class: articleFilter.children('option').eq(i).val() === jquery('option[selected]').val() ? 'is-selected' : null
            }).appendTo(filterList);
        }
    }

    function createFilterList(styledArticleFilter) {
        return jquery('<ul />', {
            class: 'article-select__options'
        }).insertAfter(styledArticleFilter);
    }

    function setDefaultSelectedFilterItem(filterList) {
        var selectedItems = filterList.children('.is-selected');
        if (selectedItems.length === 0) {
            jquery(filterList.children('li')[0]).addClass('is-selected');
        }
    }

    jquery('.js-article-filter').each(function () {
        var articleFilter = jquery(this);
        var articleFilterOptionsCount = articleFilter.children('option').length;
        constructFilter(articleFilter);
        var styledArticleFilter = defaultFilterItem(articleFilter);
        var filterList = createFilterList(styledArticleFilter);
        createFilterListItems(articleFilter, articleFilterOptionsCount, filterList);
        var filterListItems = filterList.children('li');
        setDefaultSelectedFilterItem(filterList);

        styledArticleFilter.click(function (e) {
            e.stopPropagation();
            jquery('div.article-select--styled.is-active').not(this).each(function () {
                jquery(this).removeClass('is-active').next('ul.select__options').hide();
            });
            jquery(this).toggleClass('is-active').next('ul.article-select__options').toggle();
        });

        filterListItems.click(function (e) {
            e.stopPropagation();
            styledArticleFilter.text(jquery(this).text()).removeClass('is-active');
            jquery(articleFilter.children('option[selected]')).attr('selected', false);
            if (jquery(this).attr('rel')) {
                jquery('option[value=' + jquery(this).attr('rel') + ']').attr('selected', 'selected');
            } else {
                jquery(filterListItems[0]).attr('selected', 'selected');
            }

            jquery('form').submit();
        });

        // NOTE Close select box if clicked anywhere else on page
        jquery(document).click(function () {
            styledArticleFilter.removeClass('is-active');
            if (isMobileScreen()) {
                filterList.hide();
            }
        });
    });
});

})));
//# sourceMappingURL=main.js.map
