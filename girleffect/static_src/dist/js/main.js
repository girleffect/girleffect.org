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

var jquery$1 = createCommonjsModule(function (module) {
	/*!
  * jQuery JavaScript Library v3.4.1
  * https://jquery.com/
  *
  * Includes Sizzle.js
  * https://sizzlejs.com/
  *
  * Copyright JS Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2019-05-01T21:04Z
  */
	(function (global, factory) {

		"use strict";

		if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}

		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : commonjsGlobal, function (window, noGlobal) {

		// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
		// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
		// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
		// enough that all such attempts are guarded in a try block.
		"use strict";

		var arr = [];

		var document = window.document;

		var getProto = Object.getPrototypeOf;

		var _slice = arr.slice;

		var concat = arr.concat;

		var push = arr.push;

		var indexOf = arr.indexOf;

		var class2type = {};

		var toString = class2type.toString;

		var hasOwn = class2type.hasOwnProperty;

		var fnToString = hasOwn.toString;

		var ObjectFunctionString = fnToString.call(Object);

		var support = {};

		var isFunction = function isFunction(obj) {

			// Support: Chrome <=57, Firefox <=52
			// In some browsers, typeof returns "function" for HTML <object> elements
			// (i.e., `typeof document.createElement( "object" ) === "function"`).
			// We don't want to classify *any* DOM node as a function.
			return typeof obj === "function" && typeof obj.nodeType !== "number";
		};

		var isWindow = function isWindow(obj) {
			return obj != null && obj === obj.window;
		};

		var preservedScriptAttributes = {
			type: true,
			src: true,
			nonce: true,
			noModule: true
		};

		function DOMEval(code, node, doc) {
			doc = doc || document;

			var i,
			    val,
			    script = doc.createElement("script");

			script.text = code;
			if (node) {
				for (i in preservedScriptAttributes) {

					// Support: Firefox 64+, Edge 18+
					// Some browsers don't support the "nonce" property on scripts.
					// On the other hand, just using `getAttribute` is not enough as
					// the `nonce` attribute is reset to an empty string whenever it
					// becomes browsing-context connected.
					// See https://github.com/whatwg/html/issues/2369
					// See https://html.spec.whatwg.org/#nonce-attributes
					// The `node.getAttribute` check was added for the sake of
					// `jQuery.globalEval` so that it can fake a nonce-containing node
					// via an object.
					val = node[i] || node.getAttribute && node.getAttribute(i);
					if (val) {
						script.setAttribute(i, val);
					}
				}
			}
			doc.head.appendChild(script).parentNode.removeChild(script);
		}

		function toType(obj) {
			if (obj == null) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		}
		/* global Symbol */
		// Defining this global in .eslintrc.json would create a danger of using the global
		// unguarded in another place, it seems safer to define global only for this module


		var version = "3.4.1",


		// Define a local copy of jQuery
		jQuery = function jQuery(selector, context) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},


		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

		jQuery.fn = jQuery.prototype = {

			// The current version of jQuery being used
			jquery: version,

			constructor: jQuery,

			// The default length of a jQuery object is 0
			length: 0,

			toArray: function toArray$$1() {
				return _slice.call(this);
			},

			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function get$$1(num) {

				// Return all the elements in a clean array
				if (num == null) {
					return _slice.call(this);
				}

				// Return just the one element from the set
				return num < 0 ? this[num + this.length] : this[num];
			},

			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function pushStack(elems) {

				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);

				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;

				// Return the newly-formed element set
				return ret;
			},

			// Execute a callback for every element in the matched set.
			each: function each(callback) {
				return jQuery.each(this, callback);
			},

			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},

			first: function first() {
				return this.eq(0);
			},

			last: function last() {
				return this.eq(-1);
			},

			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			end: function end() {
				return this.prevObject || this.constructor();
			},

			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: arr.sort,
			splice: arr.splice
		};

		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;

				// Skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !isFunction(target)) {
				target = {};
			}

			// Extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {

				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {

					// Extend the base object
					for (name in options) {
						copy = options[name];

						// Prevent Object.prototype pollution
						// Prevent never-ending loop
						if (name === "__proto__" || target === copy) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
							src = target[name];

							// Ensure proper type for the source value
							if (copyIsArray && !Array.isArray(src)) {
								clone = [];
							} else if (!copyIsArray && !jQuery.isPlainObject(src)) {
								clone = {};
							} else {
								clone = src;
							}
							copyIsArray = false;

							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);

							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		};

		jQuery.extend({

			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

			// Assume jQuery is ready without the ready module
			isReady: true,

			error: function error(msg) {
				throw new Error(msg);
			},

			noop: function noop() {},

			isPlainObject: function isPlainObject(obj) {
				var proto, Ctor;

				// Detect obvious negatives
				// Use toString instead of jQuery.type to catch host objects
				if (!obj || toString.call(obj) !== "[object Object]") {
					return false;
				}

				proto = getProto(obj);

				// Objects with no prototype (e.g., `Object.create( null )`) are plain
				if (!proto) {
					return true;
				}

				// Objects with prototype are plain iff they were constructed by a global Object function
				Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
				return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
			},

			isEmptyObject: function isEmptyObject(obj) {
				var name;

				for (name in obj) {
					return false;
				}
				return true;
			},

			// Evaluates a script in a global context
			globalEval: function globalEval(code, options) {
				DOMEval(code, { nonce: options && options.nonce });
			},

			each: function each(obj, callback) {
				var length,
				    i = 0;

				if (isArrayLike(obj)) {
					length = obj.length;
					for (; i < length; i++) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				}

				return obj;
			},

			// Support: Android <=4.0 only
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			// results is for internal usage only
			makeArray: function makeArray(arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArrayLike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function inArray(elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},

			// Support: Android <=4.0 only, PhantomJS 1 only
			// push.apply(_, arraylike) throws on ancient WebKit
			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;

				for (; j < len; j++) {
					first[i++] = second[j];
				}

				first.length = i;

				return first;
			},

			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;

				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}

				return matches;
			},

			// arg is for internal usage only
			map: function map(elems, callback, arg) {
				var length,
				    value,
				    i = 0,
				    ret = [];

				// Go through the array, translating each of the items to their new values
				if (isArrayLike(elems)) {
					length = elems.length;
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}

					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				}

				// Flatten any nested arrays
				return concat.apply([], ret);
			},

			// A global GUID counter for objects
			guid: 1,

			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});

		if (typeof Symbol === "function") {
			jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
		}

		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArrayLike(obj) {

			// Support: real iOS 8.2 only (not reproducible in simulator)
			// `in` check used to prevent JIT error (gh-2145)
			// hasOwn isn't used here due to false negatives
			// regarding Nodelist length in IE
			var length = !!obj && "length" in obj && obj.length,
			    type = toType(obj);

			if (isFunction(obj) || isWindow(obj)) {
				return false;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
   * Sizzle CSS Selector Engine v2.3.4
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2019-04-08
   */
		function (window) {

			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,


			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,


			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    nonnativeSelectorCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},


			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,

			// Use a stripped-down indexOf as it's faster than native
			// https://jsperf.com/thor-indexof-vs-for/5
			indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


			// Regular expressions

			// http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",


			// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",


			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rdescend = new RegExp(whitespace + "|>"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + identifier + ")"),
				"CLASS": new RegExp("^\\.(" + identifier + ")"),
				"TAG": new RegExp("^(" + identifier + "|[*])"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rhtml = /HTML$/i,
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,


			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,


			// CSS escapes
			// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},


			// CSS string/identifier serialization
			// https://drafts.csswg.org/cssom/#common-serializing-idioms
			rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			    fcssescape = function fcssescape(ch, asCodePoint) {
				if (asCodePoint) {

					// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
					if (ch === "\0") {
						return "\uFFFD";
					}

					// Control characters and (dependent upon position) numbers get escaped as code points
					return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
				}

				// Other potentially-special ASCII characters get backslash-escaped
				return "\\" + ch;
			},


			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function unloadHandler() {
				setDocument();
			},
			    inDisabledFieldset = addCombinator(function (elem) {
				return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
			}, { dir: "parentNode", next: "legend" });

			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?

					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :

					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var m,
				    i,
				    elem,
				    nid,
				    match,
				    groups,
				    newSelector,
				    newContext = context && context.ownerDocument,


				// nodeType defaults to 9, since context defaults to document
				nodeType = context ? context.nodeType : 9;

				results = results || [];

				// Return early from calls with invalid selector or context
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

					return results;
				}

				// Try to shortcut find operations (as opposed to filters) in HTML documents
				if (!seed) {

					if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
						setDocument(context);
					}
					context = context || document;

					if (documentIsHTML) {

						// If the selector is sufficiently simple, try using a "get*By*" DOM method
						// (excepting DocumentFragment context, where the methods don't exist)
						if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

							// ID selector
							if (m = match[1]) {

								// Document context
								if (nodeType === 9) {
									if (elem = context.getElementById(m)) {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}

									// Element context
								} else {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

										results.push(elem);
										return results;
									}
								}

								// Type selector
							} else if (match[2]) {
								push.apply(results, context.getElementsByTagName(selector));
								return results;

								// Class selector
							} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

								push.apply(results, context.getElementsByClassName(m));
								return results;
							}
						}

						// Take advantage of querySelectorAll
						if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (

						// Support: IE 8 only
						// Exclude object elements
						nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {

							newSelector = selector;
							newContext = context;

							// qSA considers elements outside a scoping root when evaluating child or
							// descendant combinators, which is not what we want.
							// In such cases, we work around the behavior by prefixing every selector in the
							// list with an ID selector referencing the scope context.
							// Thanks to Andrew Dupont for this technique.
							if (nodeType === 1 && rdescend.test(selector)) {

								// Capture the context ID, setting it first if necessary
								if (nid = context.getAttribute("id")) {
									nid = nid.replace(rcssescape, fcssescape);
								} else {
									context.setAttribute("id", nid = expando);
								}

								// Prefix every selector in the list
								groups = tokenize(selector);
								i = groups.length;
								while (i--) {
									groups[i] = "#" + nid + " " + toSelector(groups[i]);
								}
								newSelector = groups.join(",");

								// Expand context for sibling selectors
								newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							}

							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {
								nonnativeSelectorCache(selector, true);
							} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}

				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			/**
    * Create key-value caches of limited size
    * @returns {function(string, object)} Returns the Object data after storing it on itself with
    *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
    *	deleting the oldest entry
    */
			function createCache() {
				var keys = [];

				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}

			/**
    * Mark a function for special use by Sizzle
    * @param {Function} fn The function to mark
    */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			/**
    * Support testing using an element
    * @param {Function} fn Passed the created element and returns a boolean result
    */
			function assert(fn) {
				var el = document.createElement("fieldset");

				try {
					return !!fn(el);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (el.parentNode) {
						el.parentNode.removeChild(el);
					}
					// release memory in IE
					el = null;
				}
			}

			/**
    * Adds the same handler for all of the specified attrs
    * @param {String} attrs Pipe-separated list of attributes
    * @param {Function} handler The method that will be applied
    */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = arr.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			/**
    * Checks document order of two siblings
    * @param {Element} a
    * @param {Element} b
    * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
    */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}

				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			/**
    * Returns a function to use in pseudos for input types
    * @param {String} type
    */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			/**
    * Returns a function to use in pseudos for buttons
    * @param {String} type
    */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			/**
    * Returns a function to use in pseudos for :enabled/:disabled
    * @param {Boolean} disabled true for :disabled; false for :enabled
    */
			function createDisabledPseudo(disabled) {

				// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
				return function (elem) {

					// Only certain elements can match :enabled or :disabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
					if ("form" in elem) {

						// Check for inherited disabledness on relevant non-disabled elements:
						// * listed form-associated elements in a disabled fieldset
						//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
						// * option elements in a disabled optgroup
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
						// All such elements have a "form" property.
						if (elem.parentNode && elem.disabled === false) {

							// Option elements defer to a parent optgroup if present
							if ("label" in elem) {
								if ("label" in elem.parentNode) {
									return elem.parentNode.disabled === disabled;
								} else {
									return elem.disabled === disabled;
								}
							}

							// Support: IE 6 - 11
							// Use the isDisabled shortcut property to check for disabled fieldset ancestors
							return elem.isDisabled === disabled ||

							// Where there is no isDisabled, check manually
							/* jshint -W018 */
							elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
						}

						return elem.disabled === disabled;

						// Try to winnow out elements that can't be disabled before trusting the disabled property.
						// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
						// even exist on them, let alone have a boolean value.
					} else if ("label" in elem) {
						return elem.disabled === disabled;
					}

					// Remaining elements are neither :enabled nor :disabled
					return false;
				};
			}

			/**
    * Returns a function to use in pseudos for positionals
    * @param {Function} fn
    */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
    * Checks a node for validity as a Sizzle context
    * @param {Element|Object=} context
    * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
    */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}

			// Expose support vars for convenience
			support = Sizzle.support = {};

			/**
    * Detects XML nodes
    * @param {Element|Object} elem An element or a document
    * @returns {Boolean} True iff elem is a non-HTML XML node
    */
			isXML = Sizzle.isXML = function (elem) {
				var namespace = elem.namespaceURI,
				    docElem = (elem.ownerDocument || elem).documentElement;

				// Support: IE <=8
				// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
				// https://bugs.jquery.com/ticket/4833
				return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
			};

			/**
    * Sets document-related variables once based on the current document
    * @param {Element|Object} [doc] An element or document object to use to set the document
    * @returns {Object} Returns the current document
    */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    subWindow,
				    doc = node ? node.ownerDocument || node : preferredDoc;

				// Return early if doc is invalid or already selected
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				// Update global variables
				document = doc;
				docElem = document.documentElement;
				documentIsHTML = !isXML(document);

				// Support: IE 9-11, Edge
				// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
				if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

					// Support: IE 11, Edge
					if (subWindow.addEventListener) {
						subWindow.addEventListener("unload", unloadHandler, false);

						// Support: IE 9 - 10 only
					} else if (subWindow.attachEvent) {
						subWindow.attachEvent("onunload", unloadHandler);
					}
				}

				/* Attributes
    ---------------------------------------------------------------------- */

				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (el) {
					el.className = "i";
					return !el.getAttribute("className");
				});

				/* getElement(s)By*
    ---------------------------------------------------------------------- */

				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (el) {
					el.appendChild(document.createComment(""));
					return !el.getElementsByTagName("*").length;
				});

				// Support: IE<9
				support.getElementsByClassName = rnative.test(document.getElementsByClassName);

				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programmatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (el) {
					docElem.appendChild(el).id = expando;
					return !document.getElementsByName || !document.getElementsByName(expando).length;
				});

				// ID filter and find
				if (support.getById) {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var elem = context.getElementById(id);
							return elem ? [elem] : [];
						}
					};
				} else {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};

					// Support: IE 6 - 7 only
					// getElementById is not reliable as a find shortcut
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var node,
							    i,
							    elems,
							    elem = context.getElementById(id);

							if (elem) {

								// Verify the id attribute
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}

								// Fall back on getElementsByName
								elems = context.getElementsByName(id);
								i = 0;
								while (elem = elems[i++]) {
									node = elem.getAttributeNode("id");
									if (node && node.value === id) {
										return [elem];
									}
								}
							}

							return [];
						}
					};
				}

				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);

						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,

					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				/* QSA/matchesSelector
    ---------------------------------------------------------------------- */

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See https://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];

				if (support.qsa = rnative.test(document.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (el) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// https://bugs.jquery.com/ticket/12359
						docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (el.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!el.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
						if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!el.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}

						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibling-combinator selector` fails
						if (!el.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});

					assert(function (el) {
						el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						el.appendChild(input).setAttribute("name", "D");

						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (el.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (el.querySelectorAll(":enabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Support: IE9-11+
						// IE's :disabled selector does not pick up the children of disabled fieldsets
						docElem.appendChild(el).disabled = true;
						if (el.querySelectorAll(":disabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						el.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

					assert(function (el) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(el, "*");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(el, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				/* Contains
    ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);

				// Element contains another
				// Purposefully self-exclusive
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				/* Sorting
    ---------------------------------------------------------------------- */

				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {

					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}

					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

					// Otherwise we know they are disconnected
					1;

					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

						// Choose the first element that is related to our preferred document
						if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}

						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}

					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :

					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				return document;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

					try {
						var ret = matches.call(elem, expr);

						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {
						nonnativeSelectorCache(expr, true);
					}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],

				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};

			Sizzle.escape = function (sel) {
				return (sel + "").replace(rcssescape, fcssescape);
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			/**
    * Document sorting and removing duplicates
    * @param {ArrayLike} results
    */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;

				return results;
			};

			/**
    * Utility function for retrieving the text value of an array of DOM nodes
    * @param {Array|Element} elem
    */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				attrHandle: {},

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function CHILD(match) {
						/* matches from matchExpr["CHILD"]
      	1 type (only|nth|...)
      	2 what (child|of-type)
      	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
      	4 xn-component of xn+y argument ([+-]?\d*n|)
      	5 sign of xn-component
      	6 x of xn-component
      	7 sign of y-component
      	8 y of y-component
      */
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");

							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";

							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},

					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},

					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ?

						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    uniqueCache,
							    outerCache,
							    node,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType,
							    diff = false;

							if (parent) {

								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {

									// Seek `elem` from a previously-cached index

									// ...in a gzip-friendly way
									node = parent;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (

									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {

										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											uniqueCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else {
									// Use previously-cached element index if available
									if (useCache) {
										// ...in a gzip-friendly way
										node = elem;
										outerCache = node[expando] || (node[expando] = {});

										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex;
									}

									// xml :nth-child(...)
									// or :nth-last-child(...) or :nth(-last)?-of-type(...)
									if (diff === false) {
										// Use the same loop as above to seek `elem` from the start
										while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

											if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

												// Cache the index of each encountered element
												if (useCache) {
													outerCache = node[expando] || (node[expando] = {});

													// Support: IE <9 only
													// Defend against cloned attroperties (jQuery gh-1709)
													uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

													uniqueCache[type] = [dirruns, diff];
												}

												if (node === elem) {
													break;
												}
											}
										}
									}
								}

								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					"PSEUDO": function PSEUDO(pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}

						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || getText(elem)).indexOf(text) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					// Miscellaneous
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function root(elem) {
						return elem === docElem;
					},

					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					"enabled": createDisabledPseudo(false),
					"disabled": createDisabledPseudo(true),

					"checked": function checked(elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					"selected": function selected(elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					"empty": function empty(elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},

					// Element/input types
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument > length ? length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {

					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    skip = combinator.next,
				    key = skip || dir,
				    checkNonElements = base && key === "parentNode",
				    doneName = done++;

				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
					return false;
				} :

				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    uniqueCache,
					    outerCache,
					    newCache = [dirruns, doneName];

					// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

								if (skip && skip === elem.nodeName.toLowerCase()) {
									elem = elem[dir] || elem;
								} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									uniqueCache[key] = newCache;

									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
					return false;
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,


					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results : matcherIn;

					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,


				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;

					if (outermost) {
						outermostContext = context === document || context || outermost;
					}

					// Add elements passing elementMatchers directly to results
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							if (!context && elem.ownerDocument !== document) {
								setDocument(elem);
								xml = !documentIsHTML;
							}
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context || document, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}

						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					// `i` is now the count of elements visited above, and adding it to `matchedCount`
					// makes the latter nonnegative.
					matchedCount += i;

					// Apply set filters to unmatched elements
					// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
					// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
					// no element matchers and no seed.
					// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
					// case, which will result in a "00" `matchedCount` that differs from `i` but is also
					// numerically zero.
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}

						// Add matches to results
						push.apply(results, setMatched);

						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};

			/**
    * A low-level selection function that works with Sizzle's compiled
    *  selector functions
    * @param {String|Function} selector A selector or a pre-compiled
    *  selector function built with Sizzle.compile
    * @param {Element} context
    * @param {Array} [results]
    * @param {Array} [seed] A set of elements to match against
    */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);

				results = results || [];

				// Try to minimize operations if there is only one selector in the list and no seed
				// (the latter of which guarantees us context)
				if (match.length === 1) {

					// Reduce context if the leading compound selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;

							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}

						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};

			// One-time assignments

			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;

			// Initialize against the default document
			setDocument();

			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (el) {
				// Should return 1, but returns 4 (following)
				return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
			});

			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (el) {
				el.innerHTML = "<a href='#'></a>";
				return el.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (el) {
				el.innerHTML = "<input/>";
				el.firstChild.setAttribute("value", "");
				return el.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (el) {
				return el.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}

			return Sizzle;
		}(window);

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;

		// Deprecated
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
		jQuery.escapeSelector = Sizzle.escape;

		var dir = function dir(elem, _dir, until) {
			var matched = [],
			    truncate = until !== undefined;

			while ((elem = elem[_dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		};

		var _siblings = function _siblings(n, elem) {
			var matched = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}

			return matched;
		};

		var rneedsContext = jQuery.expr.match.needsContext;

		function nodeName(elem, name) {

			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		}
		var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}

			// Single element
			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}

			// Arraylike of elements (jQuery, arguments, Array)
			if (typeof qualifier !== "string") {
				return jQuery.grep(elements, function (elem) {
					return indexOf.call(qualifier, elem) > -1 !== not;
				});
			}

			// Filtered directly for both simple and complex selectors
			return jQuery.filter(qualifier, elements, not);
		}

		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			if (elems.length === 1 && elem.nodeType === 1) {
				return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
			}

			return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};

		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    ret,
				    len = this.length,
				    self = this;

				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				ret = this.pushStack([]);

				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}

				return len > 1 ? jQuery.uniqueSort(ret) : ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});

		// Initialize a jQuery object


		// A central reference to the root jQuery(document)
		var rootjQuery,


		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		    init = jQuery.fn.init = function (selector, context, root) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {

								// Properties of context are called as methods if possible
								if (isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						if (elem) {

							// Inject the element directly into the jQuery object
							this[0] = elem;
							this.length = 1;
						}
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || root).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this[0] = selector;
				this.length = 1;
				return this;

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (isFunction(selector)) {
				return root.ready !== undefined ? root.ready(selector) :

				// Execute immediately if ready is not present
				selector(jQuery);
			}

			return jQuery.makeArray(selector, this);
		};

		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;

		// Initialize central reference
		rootjQuery = jQuery(document);

		var rparentsprev = /^(?:parents|prev(?:Until|All))/,


		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.fn.extend({
			has: function has(target) {
				var targets = jQuery(target, this),
				    l = targets.length;

				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    targets = typeof selectors !== "string" && jQuery(selectors);

				// Positional selectors never match, since there's no _selection_ context
				if (!rneedsContext.test(selectors)) {
					for (; i < l; i++) {
						for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

							// Always skip document fragments
							if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

								matched.push(cur);
								break;
							}
						}
					}
				}

				return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
			},

			// Determine the position of an element within the set
			index: function index(elem) {

				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				// Index in selector
				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}

				// Locate the position of the desired element
				return indexOf.call(this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem);
			},

			add: function add(selector, context) {
				return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
			},

			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}

		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return _siblings((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return _siblings(elem.firstChild);
			},
			contents: function contents(elem) {
				if (typeof elem.contentDocument !== "undefined") {
					return elem.contentDocument;
				}

				// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
				// Treat the template element as a regular one in browsers that
				// don't support it.
				if (nodeName(elem, "template")) {
					elem = elem.content || elem;
				}

				return jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);

				if (name.slice(-5) !== "Until") {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}

				if (this.length > 1) {

					// Remove duplicates
					if (!guaranteedUnique[name]) {
						jQuery.uniqueSort(matched);
					}

					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}

				return this.pushStack(matched);
			};
		});
		var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

		// Convert String-formatted options into Object-formatted ones
		function createOptions(options) {
			var object = {};
			jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		/*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */
		jQuery.Callbacks = function (options) {

			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

			var // Flag to know if list is currently firing
			firing,


			// Last fire value for non-forgettable lists
			memory,


			// Flag to know if list was already fired
			_fired,


			// Flag to prevent firing
			_locked,


			// Actual callback list
			list = [],


			// Queue of execution data for repeatable lists
			queue = [],


			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,


			// Fire callbacks
			fire = function fire() {

				// Enforce single-firing
				_locked = _locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				_fired = firing = true;
				for (; queue.length; firingIndex = -1) {
					memory = queue.shift();
					while (++firingIndex < list.length) {

						// Run callback and check for early termination
						if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if (!options.memory) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if (_locked) {

					// Keep an empty list if we have data for future add calls
					if (memory) {
						list = [];

						// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},


			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function add() {
					if (list) {

						// If we have memory from a past run, we should fire after adding
						if (memory && !firing) {
							firingIndex = list.length - 1;
							queue.push(memory);
						}

						(function add(args) {
							jQuery.each(args, function (_, arg) {
								if (isFunction(arg)) {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && toType(arg) !== "string") {

									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);

						if (memory && !firing) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function remove() {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);

							// Handle firing indexes
							if (index <= firingIndex) {
								firingIndex--;
							}
						}
					});
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function empty() {
					if (list) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function disable() {
					_locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function disabled() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function lock() {
					_locked = queue = [];
					if (!memory && !firing) {
						list = memory = "";
					}
					return this;
				},
				locked: function locked() {
					return !!_locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function fireWith(context, args) {
					if (!_locked) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						queue.push(args);
						if (!firing) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function fired() {
					return !!_fired;
				}
			};

			return self;
		};

		function Identity(v) {
			return v;
		}
		function Thrower(ex) {
			throw ex;
		}

		function adoptValue(value, resolve, reject, noValue) {
			var method;

			try {

				// Check for promise aspect first to privilege synchronous behavior
				if (value && isFunction(method = value.promise)) {
					method.call(value).done(resolve).fail(reject);

					// Other thenables
				} else if (value && isFunction(method = value.then)) {
					method.call(value, resolve, reject);

					// Other non-thenables
				} else {

					// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
					// * false: [ value ].slice( 0 ) => resolve( value )
					// * true: [ value ].slice( 1 ) => resolve()
					resolve.apply(undefined, [value].slice(noValue));
				}

				// For Promises/A+, convert exceptions into rejections
				// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
				// Deferred#then to conditionally suppress rejection.
			} catch (value) {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				reject.apply(undefined, [value]);
			}
		}

		jQuery.extend({

			Deferred: function Deferred(func) {
				var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					"catch": function _catch(fn) {
						return _promise.then(null, fn);
					},

					// Keep pipe for back-compat
					pipe: function pipe() /* fnDone, fnFail, fnProgress */{
						var fns = arguments;

						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && isFunction(returned.promise)) {
										returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
									} else {
										newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					then: function then(onFulfilled, onRejected, onProgress) {
						var maxDepth = 0;
						function resolve(depth, deferred, handler, special) {
							return function () {
								var that = this,
								    args = arguments,
								    mightThrow = function mightThrow() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if (depth < maxDepth) {
										return;
									}

									returned = handler.apply(that, args);

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if (returned === deferred.promise()) {
										throw new TypeError("Thenable self-resolution");
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned && (

									// Support: Promises/A+ section 2.3.4
									// https://promisesaplus.com/#point-64
									// Only check objects and functions for thenability
									(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;

									// Handle a returned thenable
									if (isFunction(then)) {

										// Special processors (notify) just wait for resolution
										if (special) {
											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

											// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
										}

										// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Identity) {
											that = undefined;
											args = [returned];
										}

										// Process the value(s)
										// Default process is resolve
										(special || deferred.resolveWith)(that, args);
									}
								},


								// Only normal processors (resolve) catch and reject exceptions
								process = special ? mightThrow : function () {
									try {
										mightThrow();
									} catch (e) {

										if (jQuery.Deferred.exceptionHook) {
											jQuery.Deferred.exceptionHook(e, process.stackTrace);
										}

										// Support: Promises/A+ section 2.3.3.3.4.1
										// https://promisesaplus.com/#point-61
										// Ignore post-resolution exceptions
										if (depth + 1 >= maxDepth) {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if (handler !== Thrower) {
												that = undefined;
												args = [e];
											}

											deferred.rejectWith(that, args);
										}
									}
								};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if (depth) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if (jQuery.Deferred.getStackHook) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout(process);
								}
							};
						}

						return jQuery.Deferred(function (newDefer) {

							// progress_handlers.add( ... )
							tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

							// fulfilled_handlers.add( ... )
							tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));

							// rejected_handlers.add( ... )
							tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
						}).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};

				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[5];

					// promise.progress = list.add
					// promise.done = list.add
					// promise.fail = list.add
					_promise[tuple[1]] = list.add;

					// Handle state
					if (stateString) {
						list.add(function () {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							_state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[3 - i][2].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[3 - i][3].disable,

						// progress_callbacks.lock
						tuples[0][2].lock,

						// progress_handlers.lock
						tuples[0][3].lock);
					}

					// progress_handlers.fire
					// fulfilled_handlers.fire
					// rejected_handlers.fire
					list.add(tuple[3].fire);

					// deferred.notify = function() { deferred.notifyWith(...) }
					// deferred.resolve = function() { deferred.resolveWith(...) }
					// deferred.reject = function() { deferred.rejectWith(...) }
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
						return this;
					};

					// deferred.notifyWith = list.fireWith
					// deferred.resolveWith = list.fireWith
					// deferred.rejectWith = list.fireWith
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				// Make the deferred a promise
				_promise.promise(deferred);

				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}

				// All done!
				return deferred;
			},

			// Deferred helper
			when: function when(singleValue) {
				var

				// count of uncompleted subordinates
				remaining = arguments.length,


				// count of unprocessed arguments
				i = remaining,


				// subordinate fulfillment data
				resolveContexts = Array(i),
				    resolveValues = _slice.call(arguments),


				// the master Deferred
				master = jQuery.Deferred(),


				// subordinate callback factory
				updateFunc = function updateFunc(i) {
					return function (value) {
						resolveContexts[i] = this;
						resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (! --remaining) {
							master.resolveWith(resolveContexts, resolveValues);
						}
					};
				};

				// Single- and empty arguments are adopted like Promise.resolve
				if (remaining <= 1) {
					adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

					// Use .then() to unwrap secondary thenables (cf. gh-3000)
					if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {

						return master.then();
					}
				}

				// Multiple arguments are aggregated like Promise.all array elements
				while (i--) {
					adoptValue(resolveValues[i], updateFunc(i), master.reject);
				}

				return master.promise();
			}
		});

		// These usually indicate a programmer mistake during development,
		// warn about them ASAP rather than swallowing them by default.
		var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

		jQuery.Deferred.exceptionHook = function (error, stack) {

			// Support: IE 8 - 9 only
			// Console exists when dev tools are open, which can happen at any time
			if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
				window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
			}
		};

		jQuery.readyException = function (error) {
			window.setTimeout(function () {
				throw error;
			});
		};

		// The deferred used on DOM ready
		var readyList = jQuery.Deferred();

		jQuery.fn.ready = function (fn) {

			readyList.then(fn)

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch(function (error) {
				jQuery.readyException(error);
			});

			return this;
		};

		jQuery.extend({

			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,

			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,

			// Handle when the DOM is ready
			ready: function ready(wait) {

				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				// Remember that the DOM is ready
				jQuery.isReady = true;

				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);
			}
		});

		jQuery.ready.then = readyList.then;

		// The ready event handler and self cleanup method
		function completed() {
			document.removeEventListener("DOMContentLoaded", completed);
			window.removeEventListener("load", completed);
			jQuery.ready();
		}

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE <=9 - 10 only
		// Older IE sometimes signals "interactive" too soon
		if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout(jQuery.ready);
		} else {

			// Use the handy event callback
			document.addEventListener("DOMContentLoaded", completed);

			// A fallback to window.onload, that will always work
			window.addEventListener("load", completed);
		}

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;

			// Sets many values
			if (toType(key) === "object") {
				chainable = true;
				for (i in key) {
					access(elems, fn, i, key[i], true, emptyGet, raw);
				}

				// Sets one value
			} else if (value !== undefined) {
				chainable = true;

				if (!isFunction(value)) {
					raw = true;
				}

				if (bulk) {

					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;

						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < len; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			if (chainable) {
				return elems;
			}

			// Gets
			if (bulk) {
				return fn.call(elems);
			}

			return len ? fn(elems[0], key) : emptyGet;
		};

		// Matches dashed string for camelizing
		var rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([a-z])/g;

		// Used by camelCase as callback to replace()
		function fcamelCase(all, letter) {
			return letter.toUpperCase();
		}

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 15
		// Microsoft forgot to hump their vendor prefix (#9572)
		function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		}
		var acceptData = function acceptData(owner) {

			// Accepts only:
			//  - Node
			//    - Node.ELEMENT_NODE
			//    - Node.DOCUMENT_NODE
			//  - Object
			//    - Any
			return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
		};

		function Data() {
			this.expando = jQuery.expando + Data.uid++;
		}

		Data.uid = 1;

		Data.prototype = {

			cache: function cache(owner) {

				// Check if the owner object already has a cache
				var value = owner[this.expando];

				// If not, create one
				if (!value) {
					value = {};

					// We can accept data for non-element nodes in modern browsers,
					// but we should not, see #8335.
					// Always return an empty object.
					if (acceptData(owner)) {

						// If it is a node unlikely to be stringify-ed or looped over
						// use plain assignment
						if (owner.nodeType) {
							owner[this.expando] = value;

							// Otherwise secure it in a non-enumerable property
							// configurable must be true to allow the property to be
							// deleted when data is removed
						} else {
							Object.defineProperty(owner, this.expando, {
								value: value,
								configurable: true
							});
						}
					}
				}

				return value;
			},
			set: function set$$1(owner, data, value) {
				var prop,
				    cache = this.cache(owner);

				// Handle: [ owner, key, value ] args
				// Always use camelCase key (gh-2257)
				if (typeof data === "string") {
					cache[camelCase(data)] = value;

					// Handle: [ owner, { properties } ] args
				} else {

					// Copy the properties one-by-one to the cache object
					for (prop in data) {
						cache[camelCase(prop)] = data[prop];
					}
				}
				return cache;
			},
			get: function get$$1(owner, key) {
				return key === undefined ? this.cache(owner) :

				// Always use camelCase key (gh-2257)
				owner[this.expando] && owner[this.expando][camelCase(key)];
			},
			access: function access(owner, key, value) {

				// In cases where either:
				//
				//   1. No key was specified
				//   2. A string key was specified, but no value provided
				//
				// Take the "read" path and allow the get method to determine
				// which value to return, respectively either:
				//
				//   1. The entire cache object
				//   2. The data stored at the key
				//
				if (key === undefined || key && typeof key === "string" && value === undefined) {

					return this.get(owner, key);
				}

				// When the key is not a string, or both a key and value
				// are specified, set or extend (existing objects) with either:
				//
				//   1. An object of properties
				//   2. A key and value
				//
				this.set(owner, key, value);

				// Since the "set" path can have two possible entry points
				// return the expected data based on which path was taken[*]
				return value !== undefined ? value : key;
			},
			remove: function remove(owner, key) {
				var i,
				    cache = owner[this.expando];

				if (cache === undefined) {
					return;
				}

				if (key !== undefined) {

					// Support array or space separated string of keys
					if (Array.isArray(key)) {

						// If key is an array of keys...
						// We always set camelCase keys, so remove that.
						key = key.map(camelCase);
					} else {
						key = camelCase(key);

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
					}

					i = key.length;

					while (i--) {
						delete cache[key[i]];
					}
				}

				// Remove the expando if there's no more data
				if (key === undefined || jQuery.isEmptyObject(cache)) {

					// Support: Chrome <=35 - 45
					// Webkit & Blink performance suffers when deleting properties
					// from DOM nodes, so set to undefined instead
					// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
					if (owner.nodeType) {
						owner[this.expando] = undefined;
					} else {
						delete owner[this.expando];
					}
				}
			},
			hasData: function hasData(owner) {
				var cache = owner[this.expando];
				return cache !== undefined && !jQuery.isEmptyObject(cache);
			}
		};
		var dataPriv = new Data();

		var dataUser = new Data();

		//	Implementation Summary
		//
		//	1. Enforce API surface and semantic compatibility with 1.9.x branch
		//	2. Improve the module's maintainability by reducing the storage
		//		paths to a single mechanism.
		//	3. Use the same single mechanism to support "private" and "user" data.
		//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
		//	5. Avoid exposing implementation details on user objects (eg. expando properties)
		//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /[A-Z]/g;

		function getData(data) {
			if (data === "true") {
				return true;
			}

			if (data === "false") {
				return false;
			}

			if (data === "null") {
				return null;
			}

			// Only convert to a number if it doesn't change the string
			if (data === +data + "") {
				return +data;
			}

			if (rbrace.test(data)) {
				return JSON.parse(data);
			}

			return data;
		}

		function dataAttr(elem, key, data) {
			var name;

			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = getData(data);
					} catch (e) {}

					// Make sure we set the data so it isn't changed later
					dataUser.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}

		jQuery.extend({
			hasData: function hasData(elem) {
				return dataUser.hasData(elem) || dataPriv.hasData(elem);
			},

			data: function data(elem, name, _data) {
				return dataUser.access(elem, name, _data);
			},

			removeData: function removeData(elem, name) {
				dataUser.remove(elem, name);
			},

			// TODO: Now that all calls to _data and _removeData have been replaced
			// with direct calls to dataPriv methods, these can be deprecated.
			_data: function _data(elem, name, data) {
				return dataPriv.access(elem, name, data);
			},

			_removeData: function _removeData(elem, name) {
				dataPriv.remove(elem, name);
			}
		});

		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;

				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = dataUser.get(elem);

						if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {

								// Support: IE 11 only
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							dataPriv.set(elem, "hasDataAttrs", true);
						}
					}

					return data;
				}

				// Sets multiple values
				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						dataUser.set(this, key);
					});
				}

				return access(this, function (value) {
					var data;

					// The calling jQuery object (element matches) is not empty
					// (and therefore has an element appears at this[ 0 ]) and the
					// `value` parameter was not undefined. An empty jQuery object
					// will result in `undefined` for elem = this[ 0 ] which will
					// throw an exception if an attempt to read a data cache is made.
					if (elem && value === undefined) {

						// Attempt to get data from the cache
						// The key will always be camelCased in Data
						data = dataUser.get(elem, key);
						if (data !== undefined) {
							return data;
						}

						// Attempt to "discover" the data in
						// HTML5 custom data-* attrs
						data = dataAttr(elem, key);
						if (data !== undefined) {
							return data;
						}

						// We tried really hard, but the data doesn't exist.
						return;
					}

					// Set the data...
					this.each(function () {

						// We always store the camelCased key
						dataUser.set(this, key, value);
					});
				}, null, value, arguments.length > 1, null, true);
			},

			removeData: function removeData(key) {
				return this.each(function () {
					dataUser.remove(this, key);
				});
			}
		});

		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = dataPriv.get(elem, type);

					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || Array.isArray(data)) {
							queue = dataPriv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function dequeue(elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};

				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				if (fn) {

					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					// Clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			// Not public - generate a queueHooks object, or return the current one
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						dataPriv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// Ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},

			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = dataPriv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

		var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

		var cssExpand = ["Top", "Right", "Bottom", "Left"];

		var documentElement = document.documentElement;

		var isAttached = function isAttached(elem) {
			return jQuery.contains(elem.ownerDocument, elem);
		},
		    composed = { composed: true };

		// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
		// Check attachment across shadow DOM boundaries when possible (gh-3504)
		// Support: iOS 10.0-10.2 only
		// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
		// leading to errors. We need to check for `getRootNode`.
		if (documentElement.getRootNode) {
			isAttached = function isAttached(elem) {
				return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
			};
		}
		var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" || elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached(elem) && jQuery.css(elem, "display") === "none";
		};

		var swap = function swap(elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		};

		function adjustCSS(elem, prop, valueParts, tween) {
			var adjusted,
			    scale,
			    maxIterations = 20,
			    currentValue = tween ? function () {
				return tween.cur();
			} : function () {
				return jQuery.css(elem, prop, "");
			},
			    initial = currentValue(),
			    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


			// Starting value computation is required for potential unit mismatches
			initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

			if (initialInUnit && initialInUnit[3] !== unit) {

				// Support: Firefox <=54
				// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
				initial = initial / 2;

				// Trust units reported by jQuery.css
				unit = unit || initialInUnit[3];

				// Iteratively approximate from a nonzero starting point
				initialInUnit = +initial || 1;

				while (maxIterations--) {

					// Evaluate and update our best guess (doubling guesses that zero out).
					// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
					jQuery.style(elem, prop, initialInUnit + unit);
					if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
						maxIterations = 0;
					}
					initialInUnit = initialInUnit / scale;
				}

				initialInUnit = initialInUnit * 2;
				jQuery.style(elem, prop, initialInUnit + unit);

				// Make sure we update the tween properties later on
				valueParts = valueParts || [];
			}

			if (valueParts) {
				initialInUnit = +initialInUnit || +initial || 0;

				// Apply relative offset (+=/-=) if specified
				adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
				if (tween) {
					tween.unit = unit;
					tween.start = initialInUnit;
					tween.end = adjusted;
				}
			}
			return adjusted;
		}

		var defaultDisplayMap = {};

		function getDefaultDisplay(elem) {
			var temp,
			    doc = elem.ownerDocument,
			    nodeName = elem.nodeName,
			    display = defaultDisplayMap[nodeName];

			if (display) {
				return display;
			}

			temp = doc.body.appendChild(doc.createElement(nodeName));
			display = jQuery.css(temp, "display");

			temp.parentNode.removeChild(temp);

			if (display === "none") {
				display = "block";
			}
			defaultDisplayMap[nodeName] = display;

			return display;
		}

		function showHide(elements, show) {
			var display,
			    elem,
			    values = [],
			    index = 0,
			    length = elements.length;

			// Determine new display value for elements that need to change
			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}

				display = elem.style.display;
				if (show) {

					// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
					// check is required in this first loop unless we have a nonempty display value (either
					// inline or about-to-be-restored)
					if (display === "none") {
						values[index] = dataPriv.get(elem, "display") || null;
						if (!values[index]) {
							elem.style.display = "";
						}
					}
					if (elem.style.display === "" && isHiddenWithinTree(elem)) {
						values[index] = getDefaultDisplay(elem);
					}
				} else {
					if (display !== "none") {
						values[index] = "none";

						// Remember what we're overwriting
						dataPriv.set(elem, "display", display);
					}
				}
			}

			// Set the display of the elements in a second loop to avoid constant reflow
			for (index = 0; index < length; index++) {
				if (values[index] != null) {
					elements[index].style.display = values[index];
				}
			}

			return elements;
		}

		jQuery.fn.extend({
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}

				return this.each(function () {
					if (isHiddenWithinTree(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});
		var rcheckableType = /^(?:checkbox|radio)$/i;

		var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;

		var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

		// We have to close these tags to support XHTML (#13200)
		var wrapMap = {

			// Support: IE <=9 only
			option: [1, "<select multiple='multiple'>", "</select>"],

			// XHTML parsers do not magically insert elements in the
			// same way that tag soup parsers do. So we cannot shorten
			// this by omitting <tbody> or other required elements.
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

		// Support: IE <=9 only
		wrapMap.optgroup = wrapMap.option;

		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		function getAll(context, tag) {

			// Support: IE <=9 - 11 only
			// Use typeof to avoid zero-argument method invocation on host objects (#15151)
			var ret;

			if (typeof context.getElementsByTagName !== "undefined") {
				ret = context.getElementsByTagName(tag || "*");
			} else if (typeof context.querySelectorAll !== "undefined") {
				ret = context.querySelectorAll(tag || "*");
			} else {
				ret = [];
			}

			if (tag === undefined || tag && nodeName(context, tag)) {
				return jQuery.merge([context], ret);
			}

			return ret;
		}

		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
			}
		}

		var rhtml = /<|&#?\w+;/;

		function buildFragment(elems, context, scripts, selection, ignored) {
			var elem,
			    tmp,
			    tag,
			    wrap,
			    attached,
			    j,
			    fragment = context.createDocumentFragment(),
			    nodes = [],
			    i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (toType(elem) === "object") {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, tmp.childNodes);

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while (elem = nodes[i++]) {

				// Skip elements already in the context collection (trac-4087)
				if (selection && jQuery.inArray(elem, selection) > -1) {
					if (ignored) {
						ignored.push(elem);
					}
					continue;
				}

				attached = isAttached(elem);

				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");

				// Preserve script evaluation history
				if (attached) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			return fragment;
		}

		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");

			// Support: Android 4.0 - 4.3 only
			// Check state lost if the name is set (#11217)
			// Support: Windows Web Apps (WWA)
			// `name` and `type` must use .setAttribute for WWA (#14901)
			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");

			div.appendChild(input);

			// Support: Android <=4.1 only
			// Older WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

			// Support: IE <=11 only
			// Make sure textarea (and checkbox) defaultValue is properly cloned
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();

		var rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		// Support: IE <=9 - 11+
		// focus() and blur() are asynchronous, except when they are no-op.
		// So expect focus to be synchronous when the element is already active,
		// and blur to be synchronous when the element is not already active.
		// (focus and blur are always synchronous in other supported browsers,
		// this just defines when we can count on it).
		function expectSync(elem, type) {
			return elem === safeActiveElement() === (type === "focus");
		}

		// Support: IE <=9 only
		// Accessing document.activeElement can throw unexpectedly
		// https://bugs.jquery.com/ticket/13393
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}

		function _on(elem, types, selector, data, fn, one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

				// ( types-Object, selector, data )
				if (typeof selector !== "string") {

					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					_on(elem, type, selector, data, types[type], one);
				}
				return elem;
			}

			if (data == null && fn == null) {

				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {

					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {

					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return elem;
			}

			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {

					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};

				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return elem.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		}

		/*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
		jQuery.event = {

			global: {},

			add: function add(elem, types, handler, data, selector) {

				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.get(elem);

				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}

				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				// Ensure that invalid selectors throw exceptions at attach time
				// Evaluate against documentElement in case elem is a non-element node (e.g., document)
				if (selector) {
					jQuery.find.matchesSelector(documentElement, selector);
				}

				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {

						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}

				// Handle multiple events separated by a space
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}

					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};

					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;

					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};

					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						// Only use addEventListener if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
			},

			// Detach an event or set of events from an element
			remove: function remove(elem, types, handler, selector, mappedTypes) {

				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				// Remove data and the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					dataPriv.remove(elem, "handle events");
				}
			},

			dispatch: function dispatch(nativeEvent) {

				// Make a writable jQuery.Event from the native event object
				var event = jQuery.event.fix(nativeEvent);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue,
				    args = new Array(arguments.length),
				    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;

				for (i = 1; i < arguments.length; i++) {
					args[i] = arguments[i];
				}

				event.delegateTarget = this;

				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

						// If the event is namespaced, then each handler is only invoked if it is
						// specially universal or its namespaces are a superset of the event's.
						if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function handlers(event, _handlers) {
				var i,
				    handleObj,
				    sel,
				    matchedHandlers,
				    matchedSelectors,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;

				// Find delegate handlers
				if (delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!(event.type === "click" && event.button >= 1)) {

					for (; cur !== this; cur = cur.parentNode || this) {

						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
							matchedHandlers = [];
							matchedSelectors = {};
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];

								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";

								if (matchedSelectors[sel] === undefined) {
									matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matchedSelectors[sel]) {
									matchedHandlers.push(handleObj);
								}
							}
							if (matchedHandlers.length) {
								handlerQueue.push({ elem: cur, handlers: matchedHandlers });
							}
						}
					}
				}

				// Add the remaining (directly-bound) handlers
				cur = this;
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			addProp: function addProp(name, hook) {
				Object.defineProperty(jQuery.Event.prototype, name, {
					enumerable: true,
					configurable: true,

					get: isFunction(hook) ? function () {
						if (this.originalEvent) {
							return hook(this.originalEvent);
						}
					} : function () {
						if (this.originalEvent) {
							return this.originalEvent[name];
						}
					},

					set: function set$$1(value) {
						Object.defineProperty(this, name, {
							enumerable: true,
							configurable: true,
							writable: true,
							value: value
						});
					}
				});
			},

			fix: function fix(originalEvent) {
				return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
			},

			special: {
				load: {

					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				click: {

					// Utilize native event to ensure correct state for checkable inputs
					setup: function setup(data) {

						// For mutual compressibility with _default, replace `this` access with a local var.
						// `|| data` is dead code meant only to preserve the variable through minification.
						var el = this || data;

						// Claim the first handler
						if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {

							// dataPriv.set( el, "click", ... )
							leverageNative(el, "click", returnTrue);
						}

						// Return false to allow normal processing in the caller
						return false;
					},
					trigger: function trigger(data) {

						// For mutual compressibility with _default, replace `this` access with a local var.
						// `|| data` is dead code meant only to preserve the variable through minification.
						var el = this || data;

						// Force setup before triggering a click
						if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {

							leverageNative(el, "click");
						}

						// Return non-false to allow normal event-path propagation
						return true;
					},

					// For cross-browser consistency, suppress native .click() on links
					// Also prevent it if we're currently inside a leveraged native-event stack
					_default: function _default(event) {
						var target = event.target;
						return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
					}
				},

				beforeunload: {
					postDispatch: function postDispatch(event) {

						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			}
		};

		// Ensure the presence of an event listener that handles manually-triggered
		// synthetic events by interrupting progress until reinvoked in response to
		// *native* events that it fires directly, ensuring that state changes have
		// already occurred before other listeners are invoked.
		function leverageNative(el, type, expectSync) {

			// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
			if (!expectSync) {
				if (dataPriv.get(el, type) === undefined) {
					jQuery.event.add(el, type, returnTrue);
				}
				return;
			}

			// Register the controller as a special universal handler for all event namespaces
			dataPriv.set(el, type, false);
			jQuery.event.add(el, type, {
				namespace: false,
				handler: function handler(event) {
					var notAsync,
					    result,
					    saved = dataPriv.get(this, type);

					if (event.isTrigger & 1 && this[type]) {

						// Interrupt processing of the outer synthetic .trigger()ed event
						// Saved data should be false in such cases, but might be a leftover capture object
						// from an async native handler (gh-4350)
						if (!saved.length) {

							// Store arguments for use when handling the inner native event
							// There will always be at least one argument (an event object), so this array
							// will not be confused with a leftover capture object.
							saved = _slice.call(arguments);
							dataPriv.set(this, type, saved);

							// Trigger the native event and capture its result
							// Support: IE <=9 - 11+
							// focus() and blur() are asynchronous
							notAsync = expectSync(this, type);
							this[type]();
							result = dataPriv.get(this, type);
							if (saved !== result || notAsync) {
								dataPriv.set(this, type, false);
							} else {
								result = {};
							}
							if (saved !== result) {

								// Cancel the outer synthetic event
								event.stopImmediatePropagation();
								event.preventDefault();
								return result.value;
							}

							// If this is an inner synthetic event for an event with a bubbling surrogate
							// (focus or blur), assume that the surrogate already propagated from triggering the
							// native event and prevent that from happening again here.
							// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
							// bubbling surrogate propagates *after* the non-bubbling base), but that seems
							// less bad than duplication.
						} else if ((jQuery.event.special[type] || {}).delegateType) {
							event.stopPropagation();
						}

						// If this is a native event triggered above, everything is now in order
						// Fire an inner synthetic event with the original arguments
					} else if (saved.length) {

						// ...and capture the result
						dataPriv.set(this, type, {
							value: jQuery.event.trigger(

							// Support: IE <=9 - 11+
							// Extend with the prototype to reset the above stopImmediatePropagation()
							jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
						});

						// Abort handling of the native event
						event.stopImmediatePropagation();
					}
				}
			});
		}

		jQuery.removeEvent = function (elem, type, handle) {

			// This "if" is needed for plain objects
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle);
			}
		};

		jQuery.Event = function (src, props) {

			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ? returnTrue : returnFalse;

				// Create target properties
				// Support: Safari <=6 - 7 only
				// Target should not be a text node (#504, #13143)
				this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

				this.currentTarget = src.currentTarget;
				this.relatedTarget = src.relatedTarget;

				// Event type
			} else {
				this.type = src;
			}

			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}

			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || Date.now();

			// Mark it as fixed
			this[jQuery.expando] = true;
		};

		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			constructor: jQuery.Event,
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
			isSimulated: false,

			preventDefault: function preventDefault() {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;

				if (e && !this.isSimulated) {
					e.preventDefault();
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;

				if (e && !this.isSimulated) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;

				this.isImmediatePropagationStopped = returnTrue;

				if (e && !this.isSimulated) {
					e.stopImmediatePropagation();
				}

				this.stopPropagation();
			}
		};

		// Includes all common event props including KeyEvent and MouseEvent specific props
		jQuery.each({
			altKey: true,
			bubbles: true,
			cancelable: true,
			changedTouches: true,
			ctrlKey: true,
			detail: true,
			eventPhase: true,
			metaKey: true,
			pageX: true,
			pageY: true,
			shiftKey: true,
			view: true,
			"char": true,
			code: true,
			charCode: true,
			key: true,
			keyCode: true,
			button: true,
			buttons: true,
			clientX: true,
			clientY: true,
			offsetX: true,
			offsetY: true,
			pointerId: true,
			pointerType: true,
			screenX: true,
			screenY: true,
			targetTouches: true,
			toElement: true,
			touches: true,

			which: function which(event) {
				var button = event.button;

				// Add which for key events
				if (event.which == null && rkeyEvent.test(event.type)) {
					return event.charCode != null ? event.charCode : event.keyCode;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
					if (button & 1) {
						return 1;
					}

					if (button & 2) {
						return 3;
					}

					if (button & 4) {
						return 2;
					}

					return 0;
				}

				return event.which;
			}
		}, jQuery.event.addProp);

		jQuery.each({ focus: "focusin", blur: "focusout" }, function (type, delegateType) {
			jQuery.event.special[type] = {

				// Utilize native event if possible so blur/focus sequence is correct
				setup: function setup() {

					// Claim the first handler
					// dataPriv.set( this, "focus", ... )
					// dataPriv.set( this, "blur", ... )
					leverageNative(this, type, expectSync);

					// Return false to allow normal processing in the caller
					return false;
				},
				trigger: function trigger() {

					// Force setup before trigger
					leverageNative(this, type);

					// Return non-false to allow normal event-path propagation
					return true;
				},

				delegateType: delegateType
			};
		});

		// Create mouseenter/leave events using mouseover/out and event-time checks
		// so that event delegation works in jQuery.
		// Do the same for pointerenter/pointerleave and pointerover/pointerout
		//
		// Support: Safari 7 only
		// Safari sends mouseenter too often; see:
		// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
		// for the description of the bug (it existed in older Chrome versions as well).
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					// For mouseenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		jQuery.fn.extend({

			on: function on(types, selector, data, fn) {
				return _on(this, types, selector, data, fn);
			},
			one: function one(types, selector, data, fn) {
				return _on(this, types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {

					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {

					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			}
		});

		var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,


		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		// Prefer a tbody over its parent table for containing new rows
		function manipulationTarget(elem, content) {
			if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

				return jQuery(elem).children("tbody")[0] || elem;
			}

			return elem;
		}

		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			if ((elem.type || "").slice(0, 5) === "true/") {
				elem.type = elem.type.slice(5);
			} else {
				elem.removeAttribute("type");
			}

			return elem;
		}

		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

			if (dest.nodeType !== 1) {
				return;
			}

			// 1. Copy private data: events, handlers, etc.
			if (dataPriv.hasData(src)) {
				pdataOld = dataPriv.access(src);
				pdataCur = dataPriv.set(dest, pdataOld);
				events = pdataOld.events;

				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};

					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}

			// 2. Copy user data
			if (dataUser.hasData(src)) {
				udataOld = dataUser.access(src);
				udataCur = jQuery.extend({}, udataOld);

				dataUser.set(dest, udataCur);
			}
		}

		// Fix IE bugs, see support tests
		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();

			// Fails to persist the checked state of a cloned checkbox or radio button.
			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;

				// Fails to return the selected option to the default selected state when cloning options
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}

		function domManip(collection, args, callback, ignored) {

			// Flatten any nested arrays
			args = concat.apply([], args);

			var fragment,
			    first,
			    scripts,
			    hasScripts,
			    node,
			    doc,
			    i = 0,
			    l = collection.length,
			    iNoClone = l - 1,
			    value = args[0],
			    valueIsFunction = isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return collection.each(function (index) {
					var self = collection.eq(index);
					if (valueIsFunction) {
						args[0] = value.call(this, index, self.html());
					}
					domManip(self, args, callback, ignored);
				});
			}

			if (l) {
				fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				// Require either new content or an interest in ignored elements to invoke the callback
				if (first || ignored) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item
					// instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {

								// Support: Android <=4.0 only, PhantomJS 1 only
								// push.apply(_, arraylike) throws on ancient WebKit
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(collection[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src && (node.type || "").toLowerCase() !== "module") {

									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl && !node.noModule) {
										jQuery._evalUrl(node.src, {
											nonce: node.nonce || node.getAttribute("nonce")
										});
									}
								} else {
									DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
								}
							}
						}
					}
				}
			}

			return collection;
		}

		function _remove(elem, selector, keepData) {
			var node,
			    nodes = selector ? jQuery.filter(selector, elem) : elem,
			    i = 0;

			for (; (node = nodes[i]) != null; i++) {
				if (!keepData && node.nodeType === 1) {
					jQuery.cleanData(getAll(node));
				}

				if (node.parentNode) {
					if (keepData && isAttached(node)) {
						setGlobalEval(getAll(node, "script"));
					}
					node.parentNode.removeChild(node);
				}
			}

			return elem;
		}

		jQuery.extend({
			htmlPrefilter: function htmlPrefilter(html) {
				return html.replace(rxhtmlTag, "<$1></$2>");
			},

			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = isAttached(elem);

				// Fix IE cloning issues
				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

					// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);

					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}

				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				// Return the cloned set
				return clone;
			},

			cleanData: function cleanData(elems) {
				var data,
				    elem,
				    type,
				    special = jQuery.event.special,
				    i = 0;

				for (; (elem = elems[i]) !== undefined; i++) {
					if (acceptData(elem)) {
						if (data = elem[dataPriv.expando]) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);

										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}

							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataPriv.expando] = undefined;
						}
						if (elem[dataUser.expando]) {

							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataUser.expando] = undefined;
						}
					}
				}
			}
		});

		jQuery.fn.extend({
			detach: function detach(selector) {
				return _remove(this, selector, true);
			},

			remove: function remove(selector) {
				return _remove(this, selector);
			},

			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},

			append: function append() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},

			prepend: function prepend() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},

			before: function before() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function after() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			empty: function empty() {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {

						// Prevent memory leaks
						jQuery.cleanData(getAll(elem, false));

						// Remove any remaining nodes
						elem.textContent = "";
					}
				}

				return this;
			},

			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}

					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

						value = jQuery.htmlPrefilter(value);

						try {
							for (; i < l; i++) {
								elem = this[i] || {};

								// Remove element nodes and prevent memory leaks
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;

							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function replaceWith() {
				var ignored = [];

				// Make the changes, replacing each non-ignored context element with the new content
				return domManip(this, arguments, function (elem) {
					var parent = this.parentNode;

					if (jQuery.inArray(this, ignored) < 0) {
						jQuery.cleanData(getAll(this));
						if (parent) {
							parent.replaceChild(elem, this);
						}
					}

					// Force callback invocation
				}, ignored);
			}
		});

		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					// Support: Android <=4.0 only, PhantomJS 1 only
					// .get() because push.apply(_, arraylike) throws on ancient WebKit
					push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});
		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

		var getStyles = function getStyles(elem) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if (!view || !view.opener) {
				view = window;
			}

			return view.getComputedStyle(elem);
		};

		var rboxStyle = new RegExp(cssExpand.join("|"), "i");

		(function () {

			// Executing both pixelPosition & boxSizingReliable tests require only one layout
			// so they're executed at the same time to save the second computation.
			function computeStyleTests() {

				// This is a singleton, we need to execute it only once
				if (!div) {
					return;
				}

				container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
				div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
				documentElement.appendChild(container).appendChild(div);

				var divStyle = window.getComputedStyle(div);
				pixelPositionVal = divStyle.top !== "1%";

				// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
				reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

				// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
				// Some styles come back with percentage values, even though they shouldn't
				div.style.right = "60%";
				pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

				// Support: IE 9 - 11 only
				// Detect misreporting of content dimensions for box-sizing:border-box elements
				boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

				// Support: IE 9 only
				// Detect overflow:scroll screwiness (gh-3699)
				// Support: Chrome <=64
				// Don't get tricked when zoom affects offsetWidth (gh-4029)
				div.style.position = "absolute";
				scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;

				documentElement.removeChild(container);

				// Nullify the div so it wouldn't be stored in the memory and
				// it will also be a sign that checks already performed
				div = null;
			}

			function roundPixelMeasures(measure) {
				return Math.round(parseFloat(measure));
			}

			var pixelPositionVal,
			    boxSizingReliableVal,
			    scrollboxSizeVal,
			    pixelBoxStylesVal,
			    reliableMarginLeftVal,
			    container = document.createElement("div"),
			    div = document.createElement("div");

			// Finish early in limited (non-browser) environments
			if (!div.style) {
				return;
			}

			// Support: IE <=9 - 11 only
			// Style of cloned element affects source element cloned (#8908)
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			jQuery.extend(support, {
				boxSizingReliable: function boxSizingReliable() {
					computeStyleTests();
					return boxSizingReliableVal;
				},
				pixelBoxStyles: function pixelBoxStyles() {
					computeStyleTests();
					return pixelBoxStylesVal;
				},
				pixelPosition: function pixelPosition() {
					computeStyleTests();
					return pixelPositionVal;
				},
				reliableMarginLeft: function reliableMarginLeft() {
					computeStyleTests();
					return reliableMarginLeftVal;
				},
				scrollboxSize: function scrollboxSize() {
					computeStyleTests();
					return scrollboxSizeVal;
				}
			});
		})();

		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,


			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

			computed = computed || getStyles(elem);

			// getPropertyValue is needed for:
			//   .css('filter') (IE 9 only, #12537)
			//   .css('--customProperty) (#3144)
			if (computed) {
				ret = computed.getPropertyValue(name) || computed[name];

				if (ret === "" && !isAttached(elem)) {
					ret = jQuery.style(elem, name);
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Android Browser returns percentage for some values,
				// but width seems to be reliably pixels.
				// This is against the CSSOM draft spec:
				// https://drafts.csswg.org/cssom/#resolved-values
				if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" : ret;
		}

		function addGetHookIf(conditionFn, hookFn) {

			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function get$$1() {
					if (conditionFn()) {

						// Hook not needed (or it's not possible to use it due
						// to missing dependency), remove it.
						delete this.get;
						return;
					}

					// Hook needed; redefine it so that the support test is not executed again.
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}

		var cssPrefixes = ["Webkit", "Moz", "ms"],
		    emptyStyle = document.createElement("div").style,
		    vendorProps = {};

		// Return a vendor-prefixed property or undefined
		function vendorPropName(name) {

			// Check for vendor prefixed names
			var capName = name[0].toUpperCase() + name.slice(1),
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in emptyStyle) {
					return name;
				}
			}
		}

		// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
		function finalPropName(name) {
			var final = jQuery.cssProps[name] || vendorProps[name];

			if (final) {
				return final;
			}
			if (name in emptyStyle) {
				return name;
			}
			return vendorProps[name] = vendorPropName(name) || name;
		}

		var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rcustomProp = /^--/,
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		};

		function setPositiveNumber(elem, value, subtract) {

			// Any relative (+/-) values have already been
			// normalized at this point
			var matches = rcssNum.exec(value);
			return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
		}

		function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
			var i = dimension === "width" ? 1 : 0,
			    extra = 0,
			    delta = 0;

			// Adjustment may not be necessary
			if (box === (isBorderBox ? "border" : "content")) {
				return 0;
			}

			for (; i < 4; i += 2) {

				// Both box models exclude margin
				if (box === "margin") {
					delta += jQuery.css(elem, box + cssExpand[i], true, styles);
				}

				// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
				if (!isBorderBox) {

					// Add padding
					delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					// For "border" or "margin", add border
					if (box !== "padding") {
						delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

						// But still keep track of it otherwise
					} else {
						extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}

					// If we get here with a border-box (content + padding + border), we're seeking "content" or
					// "padding" or "margin"
				} else {

					// For "content", subtract padding
					if (box === "content") {
						delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					// For "content" or "padding", subtract border
					if (box !== "margin") {
						delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			// Account for positive content-box scroll gutter when requested by providing computedVal
			if (!isBorderBox && computedVal >= 0) {

				// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
				// Assuming integer scroll gutter, subtract the rest and round down
				delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5

				// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
				// Use an explicit zero to avoid NaN (gh-3964)
				)) || 0;
			}

			return delta;
		}

		function getWidthOrHeight(elem, dimension, extra) {

			// Start with computed style
			var styles = getStyles(elem),


			// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
			// Fake content-box until we know it's needed to know the true value.
			boxSizingNeeded = !support.boxSizingReliable() || extra,
			    isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
			    valueIsBorderBox = isBorderBox,
			    val = curCSS(elem, dimension, styles),
			    offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);

			// Support: Firefox <=54
			// Return a confounding non-pixel value or feign ignorance, as appropriate.
			if (rnumnonpx.test(val)) {
				if (!extra) {
					return val;
				}
				val = "auto";
			}

			// Fall back to offsetWidth/offsetHeight when value is "auto"
			// This happens for inline elements with no explicit setting (gh-3571)
			// Support: Android <=4.1 - 4.3 only
			// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
			// Support: IE 9-11 only
			// Also use offsetWidth/offsetHeight for when box sizing is unreliable
			// We use getClientRects() to check for hidden/disconnected.
			// In those cases, the computed value can be trusted to be border-box
			if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {

				isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

				// Where available, offsetWidth/offsetHeight approximate border box dimensions.
				// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
				// retrieved value as a content box dimension.
				valueIsBorderBox = offsetProp in elem;
				if (valueIsBorderBox) {
					val = elem[offsetProp];
				}
			}

			// Normalize "" and auto
			val = parseFloat(val) || 0;

			// Adjust for the element's box model
			return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val) + "px";
		}

		jQuery.extend({

			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function get$$1(elem, computed) {
						if (computed) {

							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"animationIterationCount": true,
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"gridArea": true,
				"gridColumn": true,
				"gridColumnEnd": true,
				"gridColumnStart": true,
				"gridRow": true,
				"gridRowEnd": true,
				"gridRowStart": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},

			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {},

			// Get and set the style property on a DOM Node
			style: function style(elem, name, value, extra) {

				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = camelCase(name),
				    isCustomProp = rcustomProp.test(name),
				    style = elem.style;

				// Make sure that we're working with the right name. We don't
				// want to query the value if it is a CSS custom property
				// since they are user-defined.
				if (!isCustomProp) {
					name = finalPropName(origName);
				}

				// Gets hook for the prefixed version, then unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);

					// Convert "+=" or "-=" to relative numbers (#7345)
					if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
						value = adjustCSS(elem, name, ret);

						// Fixes bug #9237
						type = "number";
					}

					// Make sure that null and NaN values aren't set (#7116)
					if (value == null || value !== value) {
						return;
					}

					// If a number was passed in, add the unit (except for certain CSS properties)
					// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
					// "px" to a few hardcoded values.
					if (type === "number" && !isCustomProp) {
						value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
					}

					// background-* props affect original clone's values
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

						if (isCustomProp) {
							style.setProperty(name, value);
						} else {
							style[name] = value;
						}
					}
				} else {

					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

						return ret;
					}

					// Otherwise just get the value from the style object
					return style[name];
				}
			},

			css: function css(elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = camelCase(name),
				    isCustomProp = rcustomProp.test(name);

				// Make sure that we're working with the right name. We don't
				// want to modify the value if it is a CSS custom property
				// since they are user-defined.
				if (!isCustomProp) {
					name = finalPropName(origName);
				}

				// Try prefixed name followed by the unprefixed name
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				// Convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				// Make numeric if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || isFinite(num) ? num || 0 : val;
				}

				return val;
			}
		});

		jQuery.each(["height", "width"], function (i, dimension) {
			jQuery.cssHooks[dimension] = {
				get: function get$$1(elem, computed, extra) {
					if (computed) {

						// Certain elements can have dimension info if we invisibly show them
						// but it must have a current display style that would benefit
						return rdisplayswap.test(jQuery.css(elem, "display")) && (

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, dimension, extra);
						}) : getWidthOrHeight(elem, dimension, extra);
					}
				},

				set: function set$$1(elem, value, extra) {
					var matches,
					    styles = getStyles(elem),


					// Only read styles.position if the test has a chance to fail
					// to avoid forcing a reflow.
					scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",


					// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
					boxSizingNeeded = scrollboxSizeBuggy || extra,
					    isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
					    subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;

					// Account for unreliable border-box dimensions by comparing offset* to computed and
					// faking a content-box to get border and padding (gh-3699)
					if (isBorderBox && scrollboxSizeBuggy) {
						subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
					}

					// Convert to pixels if value adjustment is needed
					if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

						elem.style[dimension] = value;
						value = jQuery.css(elem, dimension);
					}

					return setPositiveNumber(elem, value, subtract);
				}
			};
		});

		jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
			if (computed) {
				return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
					return elem.getBoundingClientRect().left;
				})) + "px";
			}
		});

		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},


					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (prefix !== "margin") {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});

		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (Array.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			}
		});

		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || jQuery.easing._default;
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function get$$1(tween) {
					var result;

					// Use a property on the element directly when it is not a DOM element,
					// or when there is no matching style property that exists.
					if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
						return tween.elem[tween.prop];
					}

					// Passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails.
					// Simple values such as "10px" are parsed to Float;
					// complex values such as "rotate(1rad)" are returned as-is.
					result = jQuery.css(tween.elem, tween.prop, "");

					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function set$$1(tween) {

					// Use step hook for back compat.
					// Use cssHook if its there.
					// Use .style if available and use plain properties where available.
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		// Support: IE <=9 only
		// Panic based approach to setting things on disconnected nodes
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set$$1(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			_default: "swing"
		};

		jQuery.fx = Tween.prototype.init;

		// Back compat <1.8 extension point
		jQuery.fx.step = {};

		var fxNow,
		    inProgress,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rrun = /queueHooks$/;

		function schedule() {
			if (inProgress) {
				if (document.hidden === false && window.requestAnimationFrame) {
					window.requestAnimationFrame(schedule);
				} else {
					window.setTimeout(schedule, jQuery.fx.interval);
				}

				jQuery.fx.tick();
			}
		}

		// Animations created synchronously will run synchronously
		function createFxNow() {
			window.setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = Date.now();
		}

		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };

			// If we include width, step value is 1 to do all cssExpand values,
			// otherwise step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		function createTween(value, prop, animation) {
			var tween,
			    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {

					// We're done with this property
					return tween;
				}
			}
		}

		function defaultPrefilter(elem, props, opts) {
			var prop,
			    value,
			    toggle,
			    hooks,
			    oldfire,
			    propTween,
			    restoreDisplay,
			    display,
			    isBox = "width" in props || "height" in props,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHiddenWithinTree(elem),
			    dataShow = dataPriv.get(elem, "fxshow");

			// Queue-skipping animations hijack the fx hooks
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {

					// Ensure the complete handler is called before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			// Detect show/hide animations
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.test(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {

						// Pretend to be hidden if this is a "show" and
						// there is still data from a stopped show/hide
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;

							// Ignore all other no-op show/hide data
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
				}
			}

			// Bail out if this is a no-op like .hide().hide()
			propTween = !jQuery.isEmptyObject(props);
			if (!propTween && jQuery.isEmptyObject(orig)) {
				return;
			}

			// Restrict "overflow" and "display" styles during box animations
			if (isBox && elem.nodeType === 1) {

				// Support: IE <=9 - 11, Edge 12 - 15
				// Record all 3 overflow attributes because IE does not infer the shorthand
				// from identically-valued overflowX and overflowY and Edge just mirrors
				// the overflowX value there.
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				// Identify a display type, preferring old show/hide data over the CSS cascade
				restoreDisplay = dataShow && dataShow.display;
				if (restoreDisplay == null) {
					restoreDisplay = dataPriv.get(elem, "display");
				}
				display = jQuery.css(elem, "display");
				if (display === "none") {
					if (restoreDisplay) {
						display = restoreDisplay;
					} else {

						// Get nonempty value(s) by temporarily forcing visibility
						showHide([elem], true);
						restoreDisplay = elem.style.display || restoreDisplay;
						display = jQuery.css(elem, "display");
						showHide([elem]);
					}
				}

				// Animate inline elements as inline-block
				if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
					if (jQuery.css(elem, "float") === "none") {

						// Restore the original display value at the end of pure show/hide animations
						if (!propTween) {
							anim.done(function () {
								style.display = restoreDisplay;
							});
							if (restoreDisplay == null) {
								display = style.display;
								restoreDisplay = display === "none" ? "" : display;
							}
						}
						style.display = "inline-block";
					}
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}

			// Implement show/hide animations
			propTween = false;
			for (prop in orig) {

				// General show/hide setup for this element animation
				if (!propTween) {
					if (dataShow) {
						if ("hidden" in dataShow) {
							hidden = dataShow.hidden;
						}
					} else {
						dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
					}

					// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
					if (toggle) {
						dataShow.hidden = !hidden;
					}

					// Show elements before animating them
					if (hidden) {
						showHide([elem], true);
					}

					/* eslint-disable no-loop-func */

					anim.done(function () {

						/* eslint-enable no-loop-func */

						// The final step of a "hide" animation is actually hiding the element
						if (!hidden) {
							showHide([elem]);
						}
						dataPriv.remove(elem, "fxshow");
						for (prop in orig) {
							jQuery.style(elem, prop, orig[prop]);
						}
					});
				}

				// Per-property setup
				propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
				if (!(prop in dataShow)) {
					dataShow[prop] = propTween.start;
					if (hidden) {
						propTween.end = propTween.start;
						propTween.start = 0;
					}
				}
			}
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (Array.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					// Not quite $.extend, this won't overwrite existing keys.
					// Reusing 'index' because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = Animation.prefilters.length,
			    deferred = jQuery.Deferred().always(function () {

				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				// If there's more to do, yield
				if (percent < 1 && length) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if (!length) {
					deferred.notifyWith(elem, [animation, 1, 0]);
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith(elem, [animation]);
				return false;
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,


					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// Resolve when we played the last frame; otherwise, reject
					if (gotoEnd) {
						deferred.notifyWith(elem, [animation, 1, 0]);
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					if (isFunction(result.stop)) {
						jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
					}
					return result;
				}
			}

			jQuery.map(props, createTween, animation);

			if (isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			// Attach callbacks from options
			animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			return animation;
		}

		jQuery.Animation = jQuery.extend(Animation, {

			tweeners: {
				"*": [function (prop, value) {
					var tween = this.createTween(prop, value);
					adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
					return tween;
				}]
			},

			tweener: function tweener(props, callback) {
				if (isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.match(rnothtmlwhite);
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					Animation.tweeners[prop] = Animation.tweeners[prop] || [];
					Animation.tweeners[prop].unshift(callback);
				}
			},

			prefilters: [defaultPrefilter],

			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					Animation.prefilters.unshift(callback);
				} else {
					Animation.prefilters.push(callback);
				}
			}
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !isFunction(easing) && easing
			};

			// Go to the end state if fx are off
			if (jQuery.fx.off) {
				opt.duration = 0;
			} else {
				if (typeof opt.duration !== "number") {
					if (opt.duration in jQuery.fx.speeds) {
						opt.duration = jQuery.fx.speeds[opt.duration];
					} else {
						opt.duration = jQuery.fx.speeds._default;
					}
				}
			}

			// Normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			// Queueing
			opt.old = opt.complete;

			opt.complete = function () {
				if (isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {

				// Show any hidden elements after setting opacity to 0
				return this.filter(isHiddenWithinTree).css("opacity", 0).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					// Empty animations, or finishing resolves immediately
					if (empty || dataPriv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = dataPriv.get(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					// Start the next in the queue if the last step wasn't forced.
					// Timers currently will call their complete callbacks, which
					// will dequeue but only if they were gotoEnd.
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = dataPriv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					// Enable finishing flag on private data
					data.finish = true;

					// Empty the queue first
					jQuery.queue(this, type, []);

					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}

					// Look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					// Look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					// Turn off finishing flag
					delete data.finish;
				});
			}
		});

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;

			fxNow = Date.now();

			for (; i < timers.length; i++) {
				timer = timers[i];

				// Run the timer and safely remove it when done (allowing for external removal)
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			jQuery.fx.start();
		};

		jQuery.fx.interval = 13;
		jQuery.fx.start = function () {
			if (inProgress) {
				return;
			}

			inProgress = true;
			schedule();
		};

		jQuery.fx.stop = function () {
			inProgress = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,

			// Default speed
			_default: 400
		};

		// Based off of the plugin by Clint Helfers, with permission.
		// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = window.setTimeout(next, time);
				hooks.stop = function () {
					window.clearTimeout(timeout);
				};
			});
		};

		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));

			input.type = "checkbox";

			// Support: Android <=4.3 only
			// Default value for a checkbox should be "on"
			support.checkOn = input.value !== "";

			// Support: IE <=11 only
			// Must access selectedIndex to make default options select
			support.optSelected = opt.selected;

			// Support: IE <=11 only
			// An input loses its value after becoming a radio
			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();

		var boolHook,
		    attrHandle = jQuery.expr.attrHandle;

		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});

		jQuery.extend({
			attr: function attr(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set attributes on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === "undefined") {
					return jQuery.prop(elem, name, value);
				}

				// Attribute hooks are determined by the lowercase version
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
				}

				if (value !== undefined) {
					if (value === null) {
						jQuery.removeAttr(elem, name);
						return;
					}

					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					elem.setAttribute(name, value + "");
					return value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			},

			attrHooks: {
				type: {
					set: function set$$1(elem, value) {
						if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},

			removeAttr: function removeAttr(elem, value) {
				var name,
				    i = 0,


				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match(rnothtmlwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						elem.removeAttribute(name);
					}
				}
			}
		});

		// Hooks for boolean attributes
		boolHook = {
			set: function set$$1(elem, value, name) {
				if (value === false) {

					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};

		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;

			attrHandle[name] = function (elem, name, isXML) {
				var ret,
				    handle,
				    lowercaseName = name.toLowerCase();

				if (!isXML) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[lowercaseName];
					attrHandle[lowercaseName] = ret;
					ret = getter(elem, name, isXML) != null ? lowercaseName : null;
					attrHandle[lowercaseName] = handle;
				}
				return ret;
			};
		});

		var rfocusable = /^(?:input|select|textarea|button)$/i,
		    rclickable = /^(?:a|area)$/i;

		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function removeProp(name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});

		jQuery.extend({
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set properties on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					return elem[name] = value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				return elem[name];
			},

			propHooks: {
				tabIndex: {
					get: function get$$1(elem) {

						// Support: IE <=9 - 11 only
						// elem.tabIndex doesn't always return the
						// correct value when it hasn't been explicitly set
						// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");

						if (tabindex) {
							return parseInt(tabindex, 10);
						}

						if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
							return 0;
						}

						return -1;
					}
				}
			},

			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		});

		// Support: IE <=11 only
		// Accessing the selectedIndex property
		// forces the browser to respect setting selected
		// on the option
		// The getter ensures a default option is selected
		// when in an optgroup
		// eslint rule "no-unused-expressions" is disabled for this code
		// since it considers such accessions noop
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get$$1(elem) {

					/* eslint no-unused-expressions: "off" */

					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				},
				set: function set$$1(elem) {

					/* eslint no-unused-expressions: "off" */

					var parent = elem.parentNode;
					if (parent) {
						parent.selectedIndex;

						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
				}
			};
		}

		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});

		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse(value) {
			var tokens = value.match(rnothtmlwhite) || [];
			return tokens.join(" ");
		}

		function getClass(elem) {
			return elem.getAttribute && elem.getAttribute("class") || "";
		}

		function classesToArray(value) {
			if (Array.isArray(value)) {
				return value;
			}
			if (typeof value === "string") {
				return value.match(rnothtmlwhite) || [];
			}
			return [];
		}

		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, getClass(this)));
					});
				}

				classes = classesToArray(value);

				if (classes.length) {
					while (elem = this[i++]) {
						curValue = getClass(elem);
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}

				return this;
			},

			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, getClass(this)));
					});
				}

				if (!arguments.length) {
					return this.attr("class", "");
				}

				classes = classesToArray(value);

				if (classes.length) {
					while (elem = this[i++]) {
						curValue = getClass(elem);

						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {

								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") > -1) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}

				return this;
			},

			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value),
				    isValidValue = type === "string" || Array.isArray(value);

				if (typeof stateVal === "boolean" && isValidValue) {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}

				if (isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
					});
				}

				return this.each(function () {
					var className, i, self, classNames;

					if (isValidValue) {

						// Toggle individual class names
						i = 0;
						self = jQuery(this);
						classNames = classesToArray(value);

						while (className = classNames[i++]) {

							// Check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}

						// Toggle whole class name
					} else if (value === undefined || type === "boolean") {
						className = getClass(this);
						if (className) {

							// Store className if set
							dataPriv.set(this, "__className__", className);
						}

						// If the element has a class name or if we're passed `false`,
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						if (this.setAttribute) {
							this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
						}
					}
				});
			},

			hasClass: function hasClass(selector) {
				var className,
				    elem,
				    i = 0;

				className = " " + selector + " ";
				while (elem = this[i++]) {
					if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
						return true;
					}
				}

				return false;
			}
		});

		var rreturn = /\r/g;

		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    valueIsFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						// Handle most common string cases
						if (typeof ret === "string") {
							return ret.replace(rreturn, "");
						}

						// Handle cases where value is null/undef or number
						return ret == null ? "" : ret;
					}

					return;
				}

				valueIsFunction = isFunction(value);

				return this.each(function (i) {
					var val;

					if (this.nodeType !== 1) {
						return;
					}

					if (valueIsFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}

					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (Array.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function get$$1(elem) {

						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse(jQuery.text(elem));
					}
				},
				select: {
					get: function get$$1(elem) {
						var value,
						    option,
						    i,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one",
						    values = one ? null : [],
						    max = one ? index + 1 : options.length;

						if (index < 0) {
							i = max;
						} else {
							i = one ? index : 0;
						}

						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];

							// Support: IE <=9 only
							// IE8-9 doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

								// Get the specific value for the option
								value = jQuery(option).val();

								// We don't need an array for one selects
								if (one) {
									return value;
								}

								// Multi-Selects return an array
								values.push(value);
							}
						}

						return values;
					},

					set: function set$$1(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;

						while (i--) {
							option = options[i];

							/* eslint-disable no-cond-assign */

							if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
								optionSet = true;
							}

							/* eslint-enable no-cond-assign */
						}

						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});

		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set$$1(elem, value) {
					if (Array.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});

		// Return jQuery for attributes-only inclusion


		support.focusin = "onfocusin" in window;

		var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		    stopPropagationCallback = function stopPropagationCallback(e) {
			e.stopPropagation();
		};

		jQuery.extend(jQuery.event, {

			trigger: function trigger(event, data, elem, onlyHandlers) {

				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    lastElement,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

				cur = lastElement = tmp = elem = elem || document;

				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") > -1) {

					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
					lastElement = cur;
					event.type = i > 1 ? bubbleType : special.bindType || type;

					// jQuery handler
					handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}

					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;

				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {

					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

						// Call a native DOM method on the target with the same name as the event.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;

							if (event.isPropagationStopped()) {
								lastElement.addEventListener(type, stopPropagationCallback);
							}

							elem[type]();

							if (event.isPropagationStopped()) {
								lastElement.removeEventListener(type, stopPropagationCallback);
							}

							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			// Piggyback on a donor event to simulate a different one
			// Used only for `focus(in | out)` events
			simulate: function simulate(type, elem, event) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true
				});

				jQuery.event.trigger(e, null, elem);
			}

		});

		jQuery.fn.extend({

			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});

		// Support: Firefox <=44
		// Firefox doesn't have focus(in | out) events
		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
		//
		// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
		// focus(in | out) events fire after focus & blur events,
		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
		// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
		if (!support.focusin) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
				};

				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix);

						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						dataPriv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix) - 1;

						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							dataPriv.remove(doc, fix);
						} else {
							dataPriv.access(doc, fix, attaches);
						}
					}
				};
			});
		}
		var location = window.location;

		var nonce = Date.now();

		var rquery = /\?/;

		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml;
			if (!data || typeof data !== "string") {
				return null;
			}

			// Support: IE 9 - 11 only
			// IE throws on parseFromString with invalid input.
			try {
				xml = new window.DOMParser().parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}

			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};

		var rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (Array.isArray(obj)) {

				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {

						// Treat each array item as a scalar.
						add(prefix, v);
					} else {

						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && toType(obj) === "object") {

				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {

				// Serialize scalar item.
				add(prefix, obj);
			}
		}

		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, valueOrFunction) {

				// If value is a function, invoke it and use its return value
				var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
			};

			if (a == null) {
				return "";
			}

			// If an array was passed in, assume that it is an array of form elements.
			if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {

				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			// Return the resulting serialization
			return s.join("&");
		};

		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {

					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;

					// Use .is( ":disabled" ) so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					if (val == null) {
						return null;
					}

					if (Array.isArray(val)) {
						return jQuery.map(val, function (val) {
							return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
						});
					}

					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});

		var r20 = /%20/g,
		    rhash = /#.*$/,
		    rantiCache = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,


		/* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
		prefilters = {},


		/* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
		transports = {},


		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*"),


		// Anchor tag for parsing the document origin
		originAnchor = document.createElement("a");
		originAnchor.href = location.href;

		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {

			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {

				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

				if (isFunction(func)) {

					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {

						// Prepend if requested
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);

							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}

		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		/* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */
		function ajaxHandleResponses(s, jqXHR, responses) {

			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;

			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {

				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}

				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}

			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		/* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},


			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			current = dataTypes.shift();

			// Convert to each sequential dataType
			while (current) {

				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}

				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}

				prev = current;
				current = dataTypes.shift();

				if (current) {

					// There's only work to do if current dataType is non-auto
					if (current === "*") {

						current = prev;

						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {

						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];

						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {

								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {

									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {

										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];

											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}

						// Apply converter (if not an equivalence)
						if (conv !== true) {

							// Unless errors are allowed to bubble, catch and return them
							if (conv && s.throws) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return {
										state: "parsererror",
										error: conv ? e : "No conversion from " + prev + " to " + current
									};
								}
							}
						}
					}
				}
			}

			return { state: "success", data: response };
		}

		jQuery.extend({

			// Counter for holding the number of active queries
			active: 0,

			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: location.href,
				type: "GET",
				isLocal: rlocalProtocol.test(location.protocol),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",

				/*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */

				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},

				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},

				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},

				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {

					// Convert anything to text
					"* text": String,

					// Text to html (true = no transformation)
					"text html": true,

					// Evaluate text as a json expression
					"text json": JSON.parse,

					// Parse text as xml
					"text xml": jQuery.parseXML
				},

				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},

			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			// Main method
			ajax: function ajax(url, options) {

				// If url is an object, simulate pre-1.5 signature
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}

				// Force options to be an object
				options = options || {};

				var transport,


				// URL without anti-cache param
				cacheURL,


				// Response headers
				responseHeadersString,
				    responseHeaders,


				// timeout handle
				timeoutTimer,


				// Url cleanup var
				urlAnchor,


				// Request state (becomes false upon send and true upon completion)
				completed,


				// To know if global events are to be dispatched
				fireGlobals,


				// Loop variable
				i,


				// uncached part of the url
				uncached,


				// Create the final options object
				s = jQuery.ajaxSetup({}, options),


				// Callbacks context
				callbackContext = s.context || s,


				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),


				// Status-dependent callbacks
				_statusCode = s.statusCode || {},


				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},


				// Default abort message
				strAbort = "canceled",


				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (completed) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
								}
							}
							match = responseHeaders[key.toLowerCase() + " "];
						}
						return match == null ? null : match.join(", ");
					},

					// Raw string
					getAllResponseHeaders: function getAllResponseHeaders() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function setRequestHeader(name, value) {
						if (completed == null) {
							name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function overrideMimeType(type) {
						if (completed == null) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (completed) {

								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for (code in map) {
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				// Attach deferreds
				deferred.promise(jqXHR);

				// Add protocol if not provided (prefilters might expect it)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;

				// Extract dataTypes list
				s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

				// A cross-domain request is in order when the origin doesn't match the current origin.
				if (s.crossDomain == null) {
					urlAnchor = document.createElement("a");

					// Support: IE <=8 - 11, Edge 12 - 15
					// IE throws exception on accessing the href property if url is malformed,
					// e.g. http://example.com:80x/
					try {
						urlAnchor.href = s.url;

						// Support: IE <=8 - 11 only
						// Anchor's host property isn't correctly set when s.url is relative
						urlAnchor.href = urlAnchor.href;
						s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
					} catch (e) {

						// If there is an error parsing the URL, assume it is crossDomain,
						// it can be rejected by the transport if it is invalid
						s.crossDomain = true;
					}
				}

				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				// If request was aborted inside a prefilter, stop there
				if (completed) {
					return jqXHR;
				}

				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;

				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				// Uppercase the type
				s.type = s.type.toUpperCase();

				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);

				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				// Remove hash to simplify url manipulation
				cacheURL = s.url.replace(rhash, "");

				// More options handling for requests with no content
				if (!s.hasContent) {

					// Remember the hash so we can put it back
					uncached = s.url.slice(cacheURL.length);

					// If data is available and should be processed, append data to url
					if (s.data && (s.processData || typeof s.data === "string")) {
						cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}

					// Add or update anti-cache param if needed
					if (s.cache === false) {
						cacheURL = cacheURL.replace(rantiCache, "$1");
						uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
					}

					// Put hash and anti-cache on the URL that will be requested (gh-1732)
					s.url = cacheURL + uncached;

					// Change '%20' to '+' if this is encoded form body content (gh-2658)
				} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
					s.data = s.data.replace(r20, "+");
				}

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

					// Abort if not done already and return
					return jqXHR.abort();
				}

				// Aborting is no longer a cancellation
				strAbort = "abort";

				// Install callbacks on deferreds
				completeDeferred.add(s.complete);
				jqXHR.done(s.success);
				jqXHR.fail(s.error);

				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}

					// If request was aborted inside ajaxSend, stop there
					if (completed) {
						return jqXHR;
					}

					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = window.setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						completed = false;
						transport.send(requestHeaders, done);
					} catch (e) {

						// Rethrow post-completion exceptions
						if (completed) {
							throw e;
						}

						// Propagate others as results
						done(-1, e);
					}
				}

				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					// Ignore repeat invocations
					if (completed) {
						return;
					}

					completed = true;

					// Clear timeout if it exists
					if (timeoutTimer) {
						window.clearTimeout(timeoutTimer);
					}

					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;

					// Cache response headers
					responseHeadersString = headers || "";

					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;

					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;

					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);

					// If successful, handle type chaining
					if (isSuccess) {

						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";

							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";

							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {

						// Extract error from statusText and normalize for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					// Status-dependent callbacks
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},

			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {

				// Shift arguments if data argument was omitted
				if (isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}

				// The url can be an options object (which then must have .url)
				return jQuery.ajax(jQuery.extend({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				}, jQuery.isPlainObject(url) && url));
			};
		});

		jQuery._evalUrl = function (url, options) {
			return jQuery.ajax({
				url: url,

				// Make this explicit, since user can override this through ajaxSetup (#11264)
				type: "GET",
				dataType: "script",
				cache: true,
				async: false,
				global: false,

				// Only evaluate the response if it is successful (gh-4126)
				// dataFilter is not invoked for failure responses, so using it instead
				// of the default converter is kludgy but it works.
				converters: {
					"text script": function textScript() {}
				},
				dataFilter: function dataFilter(response) {
					jQuery.globalEval(response, options);
				}
			});
		};

		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				var wrap;

				if (this[0]) {
					if (isFunction(html)) {
						html = html.call(this[0]);
					}

					// The elements to wrap the target around
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function wrapInner(html) {
				if (isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function wrap(html) {
				var htmlIsFunction = isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function unwrap(selector) {
				this.parent(selector).not("body").each(function () {
					jQuery(this).replaceWith(this.childNodes);
				});
				return this;
			}
		});

		jQuery.expr.pseudos.hidden = function (elem) {
			return !jQuery.expr.pseudos.visible(elem);
		};
		jQuery.expr.pseudos.visible = function (elem) {
			return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
		};

		jQuery.ajaxSettings.xhr = function () {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		};

		var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();

		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;

		jQuery.ajaxTransport(function (options) {
			var _callback, errorCallback;

			// Cross domain only allowed if supported through XMLHttpRequest
			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function send(headers, complete) {
						var i,
						    xhr = options.xhr();

						xhr.open(options.type, options.url, options.async, options.username, options.password);

						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}

						// Callback
						_callback = function callback(type) {
							return function () {
								if (_callback) {
									_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {

										// Support: IE <=9 only
										// On a manual native abort, IE9 throws
										// errors on any property access that is not readyState
										if (typeof xhr.status !== "number") {
											complete(0, "error");
										} else {
											complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status, xhr.statusText);
										}
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
									}
								}
							};
						};

						// Listen to events
						xhr.onload = _callback();
						errorCallback = xhr.onerror = xhr.ontimeout = _callback("error");

						// Support: IE 9 only
						// Use onreadystatechange to replace onabort
						// to handle uncaught aborts
						if (xhr.onabort !== undefined) {
							xhr.onabort = errorCallback;
						} else {
							xhr.onreadystatechange = function () {

								// Check readyState before timeout as it changes
								if (xhr.readyState === 4) {

									// Allow onerror to be called first,
									// but that will not handle a native abort
									// Also, save errorCallback to a variable
									// as xhr.onerror cannot be accessed
									window.setTimeout(function () {
										if (_callback) {
											errorCallback();
										}
									});
								}
							};
						}

						// Create the abort callback
						_callback = _callback("abort");

						try {

							// Do send the request (this may raise an exception)
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {

							// #14683: Only rethrow if this hasn't been notified as an error yet
							if (_callback) {
								throw e;
							}
						}
					},

					abort: function abort() {
						if (_callback) {
							_callback();
						}
					}
				};
			}
		});

		// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
		jQuery.ajaxPrefilter(function (s) {
			if (s.crossDomain) {
				s.contents.script = false;
			}
		});

		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		// Handle cache's special case and crossDomain
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});

		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {

			// This transport only deals with cross domain or forced-by-attrs requests
			if (s.crossDomain || s.scriptAttrs) {
				var script, _callback2;
				return {
					send: function send(_, complete) {
						script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", _callback2 = function callback(evt) {
							script.remove();
							_callback2 = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});

						// Use native DOM manipulation to avoid our domManip AJAX trickery
						document.head.appendChild(script[0]);
					},
					abort: function abort() {
						if (_callback2) {
							_callback2();
						}
					}
				};
			}
		});

		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});

		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {

				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				// Force json dataType
				s.dataTypes[0] = "json";

				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				// Clean-up function (fires after converters)
				jqXHR.always(function () {

					// If previous value didn't exist - remove it
					if (overwritten === undefined) {
						jQuery(window).removeProp(callbackName);

						// Otherwise restore preexisting value
					} else {
						window[callbackName] = overwritten;
					}

					// Save back as free
					if (s[callbackName]) {

						// Make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;

						// Save the callback name for future use
						oldCallbacks.push(callbackName);
					}

					// Call if it was a function and we have a response
					if (responseContainer && isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				// Delegate to script
				return "script";
			}
		});

		// Support: Safari 8 only
		// In Safari 8 documents created via document.implementation.createHTMLDocument
		// collapse sibling forms: the second one becomes a child of the first one.
		// Because of that, this security measure has to be disabled in Safari 8.
		// https://bugs.webkit.org/show_bug.cgi?id=137337
		support.createHTMLDocument = function () {
			var body = document.implementation.createHTMLDocument("").body;
			body.innerHTML = "<form></form><form></form>";
			return body.childNodes.length === 2;
		}();

		// Argument "data" should be string of html
		// context (optional): If specified, the fragment will be created in this context,
		// defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (typeof data !== "string") {
				return [];
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}

			var base, parsed, scripts;

			if (!context) {

				// Stop scripts or inline event handlers from being executed immediately
				// by using document.implementation
				if (support.createHTMLDocument) {
					context = document.implementation.createHTMLDocument("");

					// Set the base href for the created document
					// so any parsed elements with URLs
					// are based on the document's URL (gh-2965)
					base = context.createElement("base");
					base.href = document.location.href;
					context.head.appendChild(base);
				} else {
					context = document;
				}
			}

			parsed = rsingleTag.exec(data);
			scripts = !keepScripts && [];

			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = buildFragment([data], context, scripts);

			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		};

		/**
   * Load a url into a page
   */
		jQuery.fn.load = function (url, params, callback) {
			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off > -1) {
				selector = stripAndCollapse(url.slice(off));
				url = url.slice(0, off);
			}

			// If it's a function
			if (isFunction(params)) {

				// We assume that it's the callback
				callback = params;
				params = undefined;

				// Otherwise, build a param string
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}

			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					// If "type" variable is undefined, then "GET" method will be used.
					// Make value of this field explicit since
					// user can override it through ajaxSetup method
					type: type || "GET",
					dataType: "html",
					data: params
				}).done(function (responseText) {

					// Save response for use in complete callback
					response = arguments;

					self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);

					// If the request succeeds, this function gets "data", "status", "jqXHR"
					// but they are ignored because response was set above.
					// If it fails, this function gets "jqXHR", "status", "error"
				}).always(callback && function (jqXHR, status) {
					self.each(function () {
						callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
					});
				});
			}

			return this;
		};

		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});

		jQuery.expr.pseudos.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};

		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};

				// Set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}

				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

				// Need to be able to calculate position if either
				// top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (isFunction(options)) {

					// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
					options = options.call(elem, i, jQuery.extend({}, curOffset));
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({

			// offset() relates an element's border box to the document origin
			offset: function offset(options) {

				// Preserve chaining for setter
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}

				var rect,
				    win,
				    elem = this[0];

				if (!elem) {
					return;
				}

				// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
				// Support: IE <=11 only
				// Running getBoundingClientRect on a
				// disconnected node in IE throws an error
				if (!elem.getClientRects().length) {
					return { top: 0, left: 0 };
				}

				// Get document-relative position by adding viewport scroll to viewport-relative gBCR
				rect = elem.getBoundingClientRect();
				win = elem.ownerDocument.defaultView;
				return {
					top: rect.top + win.pageYOffset,
					left: rect.left + win.pageXOffset
				};
			},

			// position() relates an element's margin box to its offset parent's padding box
			// This corresponds to the behavior of CSS absolute positioning
			position: function position() {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    doc,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };

				// position:fixed elements are offset from the viewport, which itself always has zero offset
				if (jQuery.css(elem, "position") === "fixed") {

					// Assume position:fixed implies availability of getBoundingClientRect
					offset = elem.getBoundingClientRect();
				} else {
					offset = this.offset();

					// Account for the *real* offset parent, which can be the document or its root element
					// when a statically positioned element is identified
					doc = elem.ownerDocument;
					offsetParent = elem.offsetParent || doc.documentElement;
					while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {

						offsetParent = offsetParent.parentNode;
					}
					if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

						// Incorporate borders into its offset, since they are outside its content origin
						parentOffset = jQuery(offsetParent).offset();
						parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
						parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
					}
				}

				// Subtract parent offsets and element margins
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			// This method will return documentElement in the following cases:
			// 1) For the element inside the iframe without offsetParent, this method will return
			//    documentElement of the parent window
			// 2) For the hidden or detached element
			// 3) For body or html element, i.e. in case of the html node - it will return itself
			//
			// but those exceptions were never presented as a real life use-cases
			// and might be considered as more preferable results.
			//
			// This logic, however, is not guaranteed and can change at any point in the future
			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent;

					while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || documentElement;
				});
			}
		});

		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;

			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {

					// Coalesce documents and windows
					var win;
					if (isWindow(elem)) {
						win = elem;
					} else if (elem.nodeType === 9) {
						win = elem.defaultView;
					}

					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length);
			};
		});

		// Support: Safari <=7 - 9.1, Chrome <=37 - 49
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
		// getComputedStyle returns percent when specified for top/left/bottom/right;
		// rather than make the css module depend on the offset module, just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});

		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

				// Margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (isWindow(elem)) {

							// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
							return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
						}

						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :

						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable);
				};
			});
		});

		jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});

		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			}
		});

		jQuery.fn.extend({

			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {

				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});

		// Bind a function to a context, optionally partially applying any
		// arguments.
		// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
		// However, it is not slated for removal any time soon
		jQuery.proxy = function (fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = _slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		};

		jQuery.holdReady = function (hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		};
		jQuery.isArray = Array.isArray;
		jQuery.parseJSON = JSON.parse;
		jQuery.nodeName = nodeName;
		jQuery.isFunction = isFunction;
		jQuery.isWindow = isWindow;
		jQuery.camelCase = camelCase;
		jQuery.type = toType;

		jQuery.now = Date.now;

		jQuery.isNumeric = function (obj) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN(obj - parseFloat(obj));
		};

		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.

		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

		if (typeof undefined === "function" && undefined.amd) {
			undefined("jquery", [], function () {
				return jQuery;
			});
		}

		var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,


		// Map over the $ in case of overwrite
		_$ = window.$;

		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		};

		// Expose jQuery and $ identifiers, even in AMD
		// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if (!noGlobal) {
			window.jQuery = window.$ = jQuery;
		}

		return jQuery;
	});
});

var featherlight_min = createCommonjsModule(function (module) {
  /**
   * Featherlight - ultra slim jQuery lightbox
   * Version 1.7.14 - http://noelboss.github.io/featherlight/
   *
   * Copyright 2019, Noël Raoul Bossart (http://www.noelboss.com)
   * MIT Licensed.
  **/
  !function (a) {
    "function" == typeof undefined && undefined.amd ? undefined(["jquery"], a) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = function (b, c) {
      return void 0 === c && (c = "undefined" != typeof window ? jquery$1 : jquery$1(b)), a(c), c;
    } : a(jQuery);
  }(function (a) {
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
        "object" != (typeof b === 'undefined' ? 'undefined' : _typeof(b)) || b instanceof a != !1 || c || (c = b, b = void 0);var d = a.extend(this, c, { target: b }),
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
            a && (c.setContent(a), c.afterContent(b));
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
              "error" !== b && c.resolve(d.contents()), c.reject();
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
        var e = this;"object" != (typeof c === 'undefined' ? 'undefined' : _typeof(c)) || c instanceof a != !1 || d || (d = c, c = void 0), d = a.extend({}, d);var f,
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
  });
});

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
