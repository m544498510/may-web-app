
define("common/directives/navbar", ["app", "angular"], function(e, t) {
    e.directive("aliyunConsoleNavbar", ["$http", "$templateCache", "$q", "$compile", function(e, n, r, i) {
        var s = String.prototype.trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                }
            ;
        return {
            restrict: "AM",
            templateUrl: "scripts/template/navbar.html",
            transclude: !1,
            controller: ["$scope", "$rootScope", "$state", function(e, n, r) {
                n.$watch("aliyunNavDef", function(n) {
                    t.isDefined(n) && (e.config = n)
                }),
                    e.checkIfActive = function(e) {
                        var t = e.module;
                        if (t instanceof Array) {
                            for (var n = 0; n < t.length; n++)
                                if (r.includes(t[n]))
                                    return !0;
                            return !1
                        }
                        return r.includes(t) ? !0 : !1
                    }
            }
            ],
            link: function(o, u, a, f) {
                function l(i) {
                    return r.when(n.get(i) || e.get(i)).then(function(e) {
                        return t.isObject(e) ? (n.put(i, e.data),
                            e.data) : e
                    })
                }
                function c(e) {
                    var t = l(e);
                    t.then(function(e) {
                        e = s.apply(e),
                            u.find(".console-navbar-links").append(e),
                            i(u.find(".console-navbar-links"))(o)
                    })
                }
                o.$watch(function() {
                    return o.config
                }, function() {
                    o.config && o.config.templateUrl && c(o.config.templateUrl)
                }),
                    a.$observe("templateUrl", function(e) {
                        e && c(e)
                    })
            }
        }
    }
    ])
}),
function() {
    function e(e, t) {
        var n;
        e || (e = {});
        for (n in t)
            e[n] = t[n];
        return e
    }
    function t() {
        var e, t = arguments.length, n = {}, r = function(e, t) {
                var n, i;
                typeof e != "object" && (e = {});
                for (i in t)
                    t.hasOwnProperty(i) && (n = t[i],
                        e[i] = n && typeof n == "object" && Object.prototype.toString.call(n) !== "[object Array]" && typeof n.nodeType != "number" ? r(e[i] || {}, n) : t[i]);
                return e
            }
            ;
        for (e = 0; e < t; e++)
            n = r(n, arguments[e]);
        return n
    }
    function n(e, t) {
        return parseInt(e, t || 10)
    }
    function r(e) {
        return typeof e == "string"
    }
    function i(e) {
        return typeof e == "object"
    }
    function s(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function o(e) {
        return typeof e == "number"
    }
    function u(e) {
        return $.log(e) / $.LN10
    }
    function a(e) {
        return $.pow(10, e)
    }
    function f(e, t) {
        for (var n = e.length; n--; )
            if (e[n] === t) {
                e.splice(n, 1);
                break
            }
    }
    function l(e) {
        return e !== W && e !== null
    }
    function c(e, t, n) {
        var s, o;
        if (r(t))
            l(n) ? e.setAttribute(t, n) : e && e.getAttribute && (o = e.getAttribute(t));
        else if (l(t) && i(t))
            for (s in t)
                e.setAttribute(s, t[s]);
        return o
    }
    function h(e) {
        return s(e) ? e : [e]
    }
    function p() {
        var e = arguments, t, n, r = e.length;
        for (t = 0; t < r; t++)
            if (n = e[t],
                typeof n != "undefined" && n !== null )
                return n
    }
    function d(t, n) {
        ot && n && n.opacity !== W && (n.filter = "alpha(opacity=" + n.opacity * 100 + ")"),
            e(t.style, n)
    }
    function v(t, n, r, i, s) {
        return t = X.createElement(t),
        n && e(t, n),
        s && d(t, {
            padding: 0,
            border: Lt,
            margin: 0
        }),
        r && d(t, r),
        i && i.appendChild(t),
            t
    }
    function m(t, n) {
        var r = function() {}
            ;
        return r.prototype = new t,
            e(r.prototype, n),
            r
    }
    function g(e, t, r, i) {
        var s = wt.lang
            , e = +e || 0
            , o = t === -1 ? (e.toString().split(".")[1] || "").length : isNaN(t = Z(t)) ? 2 : t
            , t = r === void 0 ? s.decimalPoint : r
            , i = i === void 0 ? s.thousandsSep : i
            , s = e < 0 ? "-" : ""
            , r = String(n(e = Z(e).toFixed(o)))
            , u = r.length > 3 ? r.length % 3 : 0;
        return s + (u ? r.substr(0, u) + i : "") + r.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + i) + (o ? t + Z(e - r).toFixed(o).slice(2) : "")
    }
    function y(e, t) {
        return Array((t || 2) + 1 - String(e).length).join(0) + e
    }
    function b(e, t, n) {
        var r = e[t];
        e[t] = function() {
            var e = Array.prototype.slice.call(arguments);
            return e.unshift(r),
                n.apply(this, e)
        }
    }
    function w(e, t) {
        for (var n = "{", r = !1, i, s, o, u, a, f = []; (n = e.indexOf(n)) !== -1; ) {
            i = e.slice(0, n);
            if (r) {
                s = i.split(":"),
                    o = s.shift().split("."),
                    a = o.length,
                    i = t;
                for (u = 0; u < a; u++)
                    i = i[o[u]];
                s.length && (s = s.join(":"),
                    o = /\.([0-9])/,
                    u = wt.lang,
                    a = void 0,
                    /f$/.test(s) ? (a = (a = s.match(o)) ? a[1] : -1,
                        i = g(i, a, u.decimalPoint, s.indexOf(",") > -1 ? u.thousandsSep : "")) : i = Et(s, i))
            }
            f.push(i),
                e = e.slice(n + 1),
                n = (r = !r) ? "}" : "{"
        }
        return f.push(e),
            f.join("")
    }
    function E(e) {
        return $.pow(10, K($.log(e) / $.LN10))
    }
    function S(e, t, n, r) {
        var i, n = p(n, 1);
        i = e / n,
        t || (t = [1, 2, 2.5, 5, 10],
        r && r.allowDecimals === !1 && (n === 1 ? t = [1, 2, 5, 10] : n <= .1 && (t = [1 / n])));
        for (r = 0; r < t.length; r++)
            if (e = t[r],
                i <= (t[r] + (t[r + 1] || t[r])) / 2)
                break;
        return e *= n,
            e
    }
    function x(e, t) {
        var n = t || [[Ot, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], [Mt, [1, 2, 5, 10, 15, 30]], [_t, [1, 2, 5, 10, 15, 30]], [Dt, [1, 2, 3, 4, 6, 8, 12]], [Pt, [1, 2]], [Ht, [1, 2]], [Bt, [1, 2, 3, 4, 6]], [jt, null ]], r = n[n.length - 1], i = Tt[r[0]], s = r[1], o;
        for (o = 0; o < n.length; o++)
            if (r = n[o],
                    i = Tt[r[0]],
                    s = r[1],
                n[o + 1] && e <= (i * s[s.length - 1] + Tt[n[o + 1][0]]) / 2)
                break;
        return i === Tt[jt] && e < 5 * i && (s = [1, 2, 5]),
            n = S(e / i, s, r[0] === jt ? G(E(e / i), 1) : 1),
        {
            unitRange: i,
            count: n,
            unitName: r[0]
        }
    }
    function T(t, n, r, i) {
        var s = [], o = {}, u = wt.global.useUTC, a, f = new Date(n), c = t.unitRange, h = t.count;
        if (l(n)) {
            c >= Tt[Mt] && (f.setMilliseconds(0),
                f.setSeconds(c >= Tt[_t] ? 0 : h * K(f.getSeconds() / h))),
            c >= Tt[_t] && f[Vt](c >= Tt[Dt] ? 0 : h * K(f[qt]() / h)),
            c >= Tt[Dt] && f[$t](c >= Tt[Pt] ? 0 : h * K(f[Rt]() / h)),
            c >= Tt[Pt] && f[Jt](c >= Tt[Bt] ? 1 : h * K(f[zt]() / h)),
            c >= Tt[Bt] && (f[Kt](c >= Tt[jt] ? 0 : h * K(f[Wt]() / h)),
                a = f[Xt]()),
            c >= Tt[jt] && (a -= a % h,
                f[Qt](a)),
            c === Tt[Ht] && f[Jt](f[zt]() - f[Ut]() + p(i, 1)),
                n = 1,
                a = f[Xt]();
            for (var i = f.getTime(), d = f[Wt](), v = f[zt](), m = u ? 0 : (864e5 + f.getTimezoneOffset() * 6e4) % 864e5; i < r; )
                s.push(i),
                    c === Tt[jt] ? i = It(a + n * h, 0) : c === Tt[Bt] ? i = It(a, d + n * h) : !!u || c !== Tt[Pt] && c !== Tt[Ht] ? i += c * h : i = It(a, d, v + n * h * (c === Tt[Pt] ? 1 : 7)),
                    n++;
            s.push(i),
                rn(sn(s, function(e) {
                    return c <= Tt[Dt] && e % Tt[Pt] === m
                }), function(e) {
                    o[e] = Pt
                })
        }
        return s.info = e(t, {
            higherRanks: o,
            totalRange: c * h
        }),
            s
    }
    function N() {
        this.symbol = this.color = 0
    }
    function C(e, t) {
        var n = e.length, r, i;
        for (i = 0; i < n; i++)
            e[i].ss_i = i;
        e.sort(function(e, n) {
            return r = t(e, n),
                r === 0 ? e.ss_i - n.ss_i : r
        });
        for (i = 0; i < n; i++)
            delete e[i].ss_i
    }
    function k(e) {
        for (var t = e.length, n = e[0]; t--; )
            e[t] < n && (n = e[t]);
        return n
    }
    function L(e) {
        for (var t = e.length, n = e[0]; t--; )
            e[t] > n && (n = e[t]);
        return n
    }
    function A(e, t) {
        for (var n in e)
            e[n] && e[n] !== t && e[n].destroy && e[n].destroy(),
                delete e[n]
    }
    function O(e) {
        bt || (bt = v(kt)),
        e && bt.appendChild(e),
            bt.innerHTML = ""
    }
    function M(e, t) {
        var n = "Highcharts error #" + e + ": www.highcharts.com/errors/" + e;
        if (t)
            throw n;
        V.console && console.log(n)
    }
    function _(e) {
        return parseFloat(e.toPrecision(14))
    }
    function D(e, t) {
        St = p(e, t.animation)
    }
    function P() {
        var e = wt.global.useUTC
            , t = e ? "getUTC" : "get"
            , n = e ? "setUTC" : "set";
        It = e ? Date.UTC : function(e, t, n, r, i, s) {
            return (new Date(e,t,p(n, 1),p(r, 0),p(i, 0),p(s, 0))).getTime()
        }
            ,
            qt = t + "Minutes",
            Rt = t + "Hours",
            Ut = t + "Day",
            zt = t + "Date",
            Wt = t + "Month",
            Xt = t + "FullYear",
            Vt = n + "Minutes",
            $t = n + "Hours",
            Jt = n + "Date",
            Kt = n + "Month",
            Qt = n + "FullYear"
    }
    function H() {}
    function B(e, t, n, r) {
        this.axis = e,
            this.pos = t,
            this.type = n || "",
            this.isNew = !0,
        !n && !r && this.addLabel()
    }
    function j(e, t) {
        this.axis = e,
        t && (this.options = t,
            this.id = t.id)
    }
    function F(e, t, n, r, i, s) {
        var o = e.chart.inverted;
        this.axis = e,
            this.isNegative = n,
            this.options = t,
            this.x = r,
            this.total = null ,
            this.points = {},
            this.stack = i,
            this.percent = s === "percent",
            this.alignOptions = {
                align: t.align || (o ? n ? "left" : "right" : "center"),
                verticalAlign: t.verticalAlign || (o ? "middle" : n ? "bottom" : "top"),
                y: p(t.y, o ? 4 : n ? 14 : -6),
                x: p(t.x, o ? n ? -6 : 6 : 0)
            },
            this.textAlign = t.textAlign || (o ? n ? "right" : "left" : "center")
    }
    function I() {
        this.init.apply(this, arguments)
    }
    function q() {
        this.init.apply(this, arguments)
    }
    function R(e, t) {
        this.init(e, t)
    }
    function U(e, t) {
        this.init(e, t)
    }
    function z() {
        this.init.apply(this, arguments)
    }
    var W, X = document, V = window, $ = Math, J = $.round, K = $.floor, Q = $.ceil, G = $.max, Y = $.min, Z = $.abs, et = $.cos, tt = $.sin, nt = $.PI, rt = nt * 2 / 360, it = navigator.userAgent, st = V.opera, ot = /msie/i.test(it) && !st, ut = X.documentMode === 8, at = /AppleWebKit/.test(it), ft = /Firefox/.test(it), lt = /(Mobile|Android|Windows Phone)/.test(it), ct = "http://www.w3.org/2000/svg", ht = !!X.createElementNS && !!X.createElementNS(ct, "svg").createSVGRect, pt = ft && parseInt(it.split("Firefox/")[1], 10) < 4, dt = !ht && !ot && !!X.createElement("canvas").getContext, vt, mt = X.documentElement.ontouchstart !== W, gt = {}, yt = 0, bt, wt, Et, St, xt, Tt, Nt = function() {}
        , Ct = [], kt = "div", Lt = "none", At = "rgba(192,192,192," + (ht ? 1e-4 : .002) + ")", Ot = "millisecond", Mt = "second", _t = "minute", Dt = "hour", Pt = "day", Ht = "week", Bt = "month", jt = "year", Ft = "stroke-width", It, qt, Rt, Ut, zt, Wt, Xt, Vt, $t, Jt, Kt, Qt, Gt = {};
    V.Highcharts = V.Highcharts ? M(16, !0) : {},
        Et = function(t, n, r) {
            if (!l(n) || isNaN(n))
                return "Invalid date";
            var t = p(t, "%Y-%m-%d %H:%M:%S"), i = new Date(n), s, o = i[Rt](), u = i[Ut](), a = i[zt](), f = i[Wt](), c = i[Xt](), h = wt.lang, d = h.weekdays, i = e({
                a: d[u].substr(0, 3),
                A: d[u],
                d: y(a),
                e: a,
                b: h.shortMonths[f],
                B: h.months[f],
                m: y(f + 1),
                y: c.toString().substr(2, 2),
                Y: c,
                H: y(o),
                I: y(o % 12 || 12),
                l: o % 12 || 12,
                M: y(i[qt]()),
                p: o < 12 ? "AM" : "PM",
                P: o < 12 ? "am" : "pm",
                S: y(i.getSeconds()),
                L: y(J(n % 1e3), 3)
            }, Highcharts.dateFormats);
            for (s in i)
                for (; t.indexOf("%" + s) !== -1; )
                    t = t.replace("%" + s, typeof i[s] == "function" ? i[s](n) : i[s]);
            return r ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
        }
        ,
        N.prototype = {
            wrapColor: function(e) {
                this.color >= e && (this.color = 0)
            },
            wrapSymbol: function(e) {
                this.symbol >= e && (this.symbol = 0)
            }
        },
        Tt = function() {
            for (var e = 0, t = arguments, n = t.length, r = {}; e < n; e++)
                r[t[e++]] = t[e];
            return r
        }(Ot, 1, Mt, 1e3, _t, 6e4, Dt, 36e5, Pt, 864e5, Ht, 6048e5, Bt, 26784e5, jt, 31556952e3),
        xt = {
            init: function(e, t, n) {
                var t = t || "", r = e.shift, i = t.indexOf("C") > -1, s = i ? 7 : 3, o, t = t.split(" "), n = [].concat(n), u, a, f = function(e) {
                        for (o = e.length; o--; )
                            e[o] === "M" && e.splice(o + 1, 0, e[o + 1], e[o + 2], e[o + 1], e[o + 2])
                    }
                    ;
                i && (f(t),
                    f(n)),
                e.isArea && (u = t.splice(t.length - 6, 6),
                    a = n.splice(n.length - 6, 6));
                if (r <= n.length / s && t.length === n.length)
                    for (; r--; )
                        n = [].concat(n).splice(0, s).concat(n);
                e.shift = 0;
                if (t.length)
                    for (e = n.length; t.length < e; )
                        r = [].concat(t).splice(t.length - s, s),
                        i && (r[s - 6] = r[s - 2],
                            r[s - 5] = r[s - 1]),
                            t = t.concat(r);
                return u && (t = t.concat(u),
                    n = n.concat(a)),
                    [t, n]
            },
            step: function(e, t, n, r) {
                var i = []
                    , s = e.length;
                if (n === 1)
                    i = r;
                else if (s === t.length && n < 1)
                    for (; s--; )
                        r = parseFloat(e[s]),
                            i[s] = isNaN(r) ? e[s] : n * parseFloat(t[s] - r) + r;
                else
                    i = t;
                return i
            }
        },
        function(t) {
            V.HighchartsAdapter = V.HighchartsAdapter || t && {
                    init: function(e) {
                        var n = t.fx, i = n.step, s, o = t.Tween, u = o && o.propHooks;
                        s = t.cssHooks.opacity,
                            t.extend(t.easing, {
                                easeOutQuad: function(e, t, n, r, i) {
                                    return -r * (t /= i) * (t - 2) + n
                                }
                            }),
                            t.each(["cur", "_default", "width", "height", "opacity"], function(e, t) {
                                var r = i, s, a;
                                t === "cur" ? r = n.prototype : t === "_default" && o && (r = u[t],
                                    t = "set"),
                                (s = r[t]) && (r[t] = function(n) {
                                        n = e ? n : this;
                                        if (n.prop !== "align")
                                            return a = n.elem,
                                                a.attr ? a.attr(n.prop, t === "cur" ? W : n.now) : s.apply(this, arguments)
                                    }
                                )
                            }),
                            b(s, "get", function(e, t, n) {
                                return t.attr ? t.opacity || 0 : e.call(this, t, n)
                            }),
                            s = function(t) {
                                var n = t.elem, r;
                                t.started || (r = e.init(n, n.d, n.toD),
                                    t.start = r[0],
                                    t.end = r[1],
                                    t.started = !0),
                                    n.attr("d", e.step(t.start, t.end, t.pos, n.toD))
                            }
                            ,
                            o ? u.d = {
                                set: s
                            } : i.d = s,
                            this.each = Array.prototype.forEach ? function(e, t) {
                                return Array.prototype.forEach.call(e, t)
                            }
                                : function(e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (t.call(e[n], e[n], n, e) === !1)
                                        return n
                            }
                            ,
                            t.fn.highcharts = function() {
                                var e = "Chart", t = arguments, n, i;
                                return r(t[0]) && (e = t[0],
                                    t = Array.prototype.slice.call(t, 1)),
                                    n = t[0],
                                n !== W && (n.chart = n.chart || {},
                                    n.chart.renderTo = this[0],
                                    new Highcharts[e](n,t[1]),
                                    i = this),
                                n === W && (i = Ct[c(this[0], "data-highcharts-chart")]),
                                    i
                            }
                    },
                    getScript: t.getScript,
                    inArray: t.inArray,
                    adapterRun: function(e, n) {
                        return t(e)[n]()
                    },
                    grep: t.grep,
                    map: function(e, t) {
                        for (var n = [], r = 0, i = e.length; r < i; r++)
                            n[r] = t.call(e[r], e[r], r, e);
                        return n
                    },
                    offset: function(e) {
                        return t(e).offset()
                    },
                    addEvent: function(e, n, r) {
                        t(e).bind(n, r)
                    },
                    removeEvent: function(e, n, r) {
                        var i = X.removeEventListener ? "removeEventListener" : "detachEvent";
                        X[i] && e && !e[i] && (e[i] = function() {}
                        ),
                            t(e).unbind(n, r)
                    },
                    fireEvent: function(n, r, i, s) {
                        var o = t.Event(r), u = "detached" + r, a;
                        !ot && i && (delete i.layerX,
                            delete i.layerY),
                            e(o, i),
                        n[r] && (n[u] = n[r],
                            n[r] = null ),
                            t.each(["preventDefault", "stopPropagation"], function(e, t) {
                                var n = o[t];
                                o[t] = function() {
                                    try {
                                        n.call(o)
                                    } catch (e) {
                                        t === "preventDefault" && (a = !0)
                                    }
                                }
                            }),
                            t(n).trigger(o),
                        n[u] && (n[r] = n[u],
                            n[u] = null ),
                        s && !o.isDefaultPrevented() && !a && s(o)
                    },
                    washMouseEvent: function(e) {
                        var t = e.originalEvent || e;
                        return t.pageX === W && (t.pageX = e.pageX,
                            t.pageY = e.pageY),
                            t
                    },
                    animate: function(e, n, r) {
                        var i = t(e);
                        e.style || (e.style = {}),
                        n.d && (e.toD = n.d,
                            n.d = 1),
                            i.stop(),
                        n.opacity !== W && e.attr && (n.opacity += "px"),
                            i.animate(n, r)
                    },
                    stop: function(e) {
                        t(e).stop()
                    }
                }
        }(V.jQuery);
    var Yt = V.HighchartsAdapter
        , Zt = Yt || {};
    Yt && Yt.init.call(Yt, xt);
    var en = Zt.adapterRun
        , tn = Zt.getScript
        , nn = Zt.inArray
        , rn = Zt.each
        , sn = Zt.grep
        , on = Zt.offset
        , un = Zt.map
        , an = Zt.addEvent
        , fn = Zt.removeEvent
        , ln = Zt.fireEvent
        , cn = Zt.washMouseEvent
        , hn = Zt.animate
        , pn = Zt.stop
        , Zt = {
        enabled: !0,
        x: 0,
        y: 15,
        style: {
            color: "#666",
            cursor: "default",
            fontSize: "11px",
            lineHeight: "14px"
        }
    };
    wt = {
        colors: "#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/3.0.7/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/3.0.7/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 5,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            style: {
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                fontSize: "12px"
            },
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#274b6d",
                fontSize: "16px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#4d759e"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    enabled: !0,
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: t(Zt, {
                    align: "center",
                    enabled: !1,
                    formatter: function() {
                        return this.y === null  ? "" : g(this.y, -1)
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                states: {
                    hover: {
                        marker: {}
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderWidth: 1,
            borderColor: "#909090",
            borderRadius: 5,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                cursor: "pointer",
                color: "#274b6d",
                fontSize: "12px"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolWidth: 16,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "1em"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: ht,
            backgroundColor: "rgba(255, 255, 255, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: lt ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var dn = wt.plotOptions
        , Yt = dn.line;
    P();
    var vn = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/
        , mn = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/
        , gn = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/
        , yn = function(e) {
            var r = [], i, s;
            return function(e) {
                e && e.stops ? s = un(e.stops, function(e) {
                    return yn(e[1])
                }) : (i = vn.exec(e)) ? r = [n(i[1]), n(i[2]), n(i[3]), parseFloat(i[4], 10)] : (i = mn.exec(e)) ? r = [n(i[1], 16), n(i[2], 16), n(i[3], 16), 1] : (i = gn.exec(e)) && (r = [n(i[1]), n(i[2]), n(i[3]), 1])
            }(e),
            {
                get: function(n) {
                    var i;
                    return s ? (i = t(e),
                        i.stops = [].concat(i.stops),
                        rn(s, function(e, t) {
                            i.stops[t] = [i.stops[t][0], e.get(n)]
                        })) : i = r && !isNaN(r[0]) ? n === "rgb" ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : n === "a" ? r[3] : "rgba(" + r.join(",") + ")" : e,
                        i
                },
                brighten: function(e) {
                    if (s)
                        rn(s, function(t) {
                            t.brighten(e)
                        });
                    else if (o(e) && e !== 0) {
                        var t;
                        for (t = 0; t < 3; t++)
                            r[t] += n(e * 255),
                            r[t] < 0 && (r[t] = 0),
                            r[t] > 255 && (r[t] = 255)
                    }
                    return this
                },
                rgba: r,
                setOpacity: function(e) {
                    return r[3] = e,
                        this
                }
            }
        }
        ;
    H.prototype = {
        init: function(e, t) {
            this.element = t === "span" ? v(t) : X.createElementNS(ct, t),
                this.renderer = e,
                this.attrSetters = {}
        },
        opacity: 1,
        animate: function(e, n, r) {
            n = p(n, St, !0),
                pn(this),
                n ? (n = t(n),
                r && (n.complete = r),
                    hn(this, e, n)) : (this.attr(e),
                r && r())
        },
        attr: function(e, t) {
            var i, s, o, u, a = this.element, f = a.nodeName.toLowerCase(), h = this.renderer, d, v = this.attrSetters, m = this.shadows, g, y, b = this;
            r(e) && l(t) && (i = e,
                e = {},
                e[i] = t);
            if (r(e))
                i = e,
                    f === "circle" ? i = {
                            x: "cx",
                            y: "cy"
                        }[i] || i : i === "strokeWidth" && (i = "stroke-width"),
                    b = c(a, i) || this[i] || 0,
                i !== "d" && i !== "visibility" && i !== "fill" && (b = parseFloat(b));
            else {
                for (i in e)
                    if (d = !1,
                            s = e[i],
                            o = v[i] && v[i].call(this, s, i),
                        o !== !1) {
                        o !== W && (s = o);
                        if (i === "d")
                            s && s.join && (s = s.join(" ")),
                            /(NaN| {2}|^$)/.test(s) && (s = "M 0 0");
                        else if (i === "x" && f === "text")
                            for (o = 0; o < a.childNodes.length; o++)
                                u = a.childNodes[o],
                                c(u, "x") === c(a, "x") && c(u, "x", s);
                        else if (!this.rotation || i !== "x" && i !== "y")
                            if (i === "fill")
                                s = h.color(s, a, i);
                            else if (f !== "circle" || i !== "x" && i !== "y")
                                if (f === "rect" && i === "r")
                                    c(a, {
                                        rx: s,
                                        ry: s
                                    }),
                                        d = !0;
                                else if (i === "translateX" || i === "translateY" || i === "rotation" || i === "verticalAlign" || i === "scaleX" || i === "scaleY")
                                    d = y = !0;
                                else if (i === "stroke")
                                    s = h.color(s, a, i);
                                else if (i === "dashstyle") {
                                    if (i = "stroke-dasharray",
                                            s = s && s.toLowerCase(),
                                        s === "solid")
                                        s = Lt;
                                    else if (s) {
                                        s = s.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                                        for (o = s.length; o--; )
                                            s[o] = n(s[o]) * p(e["stroke-width"], this["stroke-width"]);
                                        s = s.join(",")
                                    }
                                } else
                                    i === "width" ? s = n(s) : i === "align" ? (i = "text-anchor",
                                        s = {
                                            left: "start",
                                            center: "middle",
                                            right: "end"
                                        }[s]) : i === "title" && (o = a.getElementsByTagName("title")[0],
                                    o || (o = X.createElementNS(ct, "title"),
                                        a.appendChild(o)),
                                        o.textContent = s);
                            else
                                i = {
                                        x: "cx",
                                        y: "cy"
                                    }[i] || i;
                        else
                            y = !0;
                        i === "strokeWidth" && (i = "stroke-width");
                        if (i === "stroke-width" || i === "stroke")
                            this[i] = s,
                                this.stroke && this["stroke-width"] ? (c(a, "stroke", this.stroke),
                                    c(a, "stroke-width", this["stroke-width"]),
                                    this.hasStroke = !0) : i === "stroke-width" && s === 0 && this.hasStroke && (a.removeAttribute("stroke"),
                                    this.hasStroke = !1),
                                d = !0;
                        this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(i) && (g || (this.symbolAttr(e),
                            g = !0),
                            d = !0);
                        if (m && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i))
                            for (o = m.length; o--; )
                                c(m[o], i, i === "height" ? G(s - (m[o].cutHeight || 0), 0) : s);
                        (i === "width" || i === "height") && f === "rect" && s < 0 && (s = 0),
                            this[i] = s,
                            i === "text" ? (s !== this.textStr && delete this.bBox,
                                this.textStr = s,
                            this.added && h.buildText(this)) : d || c(a, i, s)
                    }
                y && this.updateTransform()
            }
            return b
        },
        addClass: function(e) {
            var t = this.element
                , n = c(t, "class") || "";
            return n.indexOf(e) === -1 && c(t, "class", n + " " + e),
                this
        },
        symbolAttr: function(e) {
            var t = this;
            rn("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(n) {
                t[n] = p(e[n], t[n])
            }),
                t.attr({
                    d: t.renderer.symbols[t.symbolName](t.x, t.y, t.width, t.height, t)
                })
        },
        clip: function(e) {
            return this.attr("clip-path", e ? "url(" + this.renderer.url + "#" + e.id + ")" : Lt)
        },
        crisp: function(e, t, n, r, i) {
            var s, o = {}, u = {}, a, e = e || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
            a = J(e) % 2 / 2,
                u.x = K(t || this.x || 0) + a,
                u.y = K(n || this.y || 0) + a,
                u.width = K((r || this.width || 0) - 2 * a),
                u.height = K((i || this.height || 0) - 2 * a),
                u.strokeWidth = e;
            for (s in u)
                this[s] !== u[s] && (this[s] = o[s] = u[s]);
            return o
        },
        css: function(t) {
            var r = this.element, i = this.textWidth = t && t.width && r.nodeName.toLowerCase() === "text" && n(t.width), s, o = "", u = function(e, t) {
                    return "-" + t.toLowerCase()
                }
                ;
            t && t.color && (t.fill = t.color),
                this.styles = t = e(this.styles, t),
            i && delete t.width;
            if (ot && !ht)
                d(this.element, t);
            else {
                for (s in t)
                    o += s.replace(/([A-Z])/g, u) + ":" + t[s] + ";";
                c(r, "style", o)
            }
            return i && this.added && this.renderer.buildText(this),
                this
        },
        on: function(e, t) {
            var n = this
                , r = n.element;
            return mt && e === "click" ? (r.ontouchstart = function(e) {
                    n.touchEventFired = Date.now(),
                        e.preventDefault(),
                        t.call(r, e)
                }
                    ,
                    r.onclick = function(e) {
                        (it.indexOf("Android") === -1 || Date.now() - (n.touchEventFired || 0) > 1100) && t.call(r, e)
                    }
            ) : r["on" + e] = t,
                this
        },
        setRadialReference: function(e) {
            return this.element.radialReference = e,
                this
        },
        translate: function(e, t) {
            return this.attr({
                translateX: e,
                translateY: t
            })
        },
        invert: function() {
            return this.inverted = !0,
                this.updateTransform(),
                this
        },
        htmlCss: function(t) {
            var n = this.element;
            if (n = t && n.tagName === "SPAN" && t.width)
                delete t.width,
                    this.textWidth = n,
                    this.updateTransform();
            return this.styles = e(this.styles, t),
                d(this.element, t),
                this
        },
        htmlGetBBox: function() {
            var e = this.element
                , t = this.bBox;
            return t || (e.nodeName === "text" && (e.style.position = "absolute"),
                t = this.bBox = {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }),
                t
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var e = this.renderer
                    , t = this.element
                    , r = this.translateX || 0
                    , i = this.translateY || 0
                    , s = this.x || 0
                    , o = this.y || 0
                    , u = this.textAlign || "left"
                    , a = {
                    left: 0,
                    center: .5,
                    right: 1
                }[u]
                    , f = u && u !== "left"
                    , c = this.shadows;
                d(t, {
                    marginLeft: r,
                    marginTop: i
                }),
                c && rn(c, function(e) {
                    d(e, {
                        marginLeft: r + 1,
                        marginTop: i + 1
                    })
                }),
                this.inverted && rn(t.childNodes, function(n) {
                    e.invertChild(n, t)
                });
                if (t.tagName === "SPAN") {
                    var h, v, c = this.rotation, m;
                    h = 0;
                    var g = 1, y = 0, b;
                    m = n(this.textWidth);
                    var w = this.xCorr || 0
                        , E = this.yCorr || 0
                        , S = [c, u, t.innerHTML, this.textWidth].join(",");
                    S !== this.cTT && (l(c) && (h = c * rt,
                        g = et(h),
                        y = tt(h),
                        this.setSpanRotation(c, y, g)),
                        h = p(this.elemWidth, t.offsetWidth),
                        v = p(this.elemHeight, t.offsetHeight),
                    h > m && /[ \-]/.test(t.textContent || t.innerText) && (d(t, {
                        width: m + "px",
                        display: "block",
                        whiteSpace: "normal"
                    }),
                        h = m),
                        m = e.fontMetrics(t.style.fontSize).b,
                        w = g < 0 && -h,
                        E = y < 0 && -v,
                        b = g * y < 0,
                        w += y * m * (b ? 1 - a : a),
                        E -= g * m * (c ? b ? a : 1 - a : 1),
                    f && (w -= h * a * (g < 0 ? -1 : 1),
                    c && (E -= v * a * (y < 0 ? -1 : 1)),
                        d(t, {
                            textAlign: u
                        })),
                        this.xCorr = w,
                        this.yCorr = E),
                        d(t, {
                            left: s + w + "px",
                            top: o + E + "px"
                        }),
                    at && (v = t.offsetHeight),
                        this.cTT = S
                }
            } else
                this.alignOnAdd = !0
        },
        setSpanRotation: function(e) {
            var t = {};
            t[ot ? "-ms-transform" : at ? "-webkit-transform" : ft ? "MozTransform" : st ? "-o-transform" : ""] = t.transform = "rotate(" + e + "deg)",
                d(this.element, t)
        },
        updateTransform: function() {
            var e = this.translateX || 0
                , t = this.translateY || 0
                , n = this.scaleX
                , r = this.scaleY
                , i = this.inverted
                , s = this.rotation;
            i && (e += this.attr("width"),
                t += this.attr("height")),
                e = ["translate(" + e + "," + t + ")"],
                i ? e.push("rotate(90) scale(-1,1)") : s && e.push("rotate(" + s + " " + (this.x || 0) + " " + (this.y || 0) + ")"),
            (l(n) || l(r)) && e.push("scale(" + p(n, 1) + " " + p(r, 1) + ")"),
            e.length && c(this.element, "transform", e.join(" "))
        },
        toFront: function() {
            var e = this.element;
            return e.parentNode.appendChild(e),
                this
        },
        align: function(e, t, n) {
            var i, s, o, u, a = {};
            s = this.renderer,
                o = s.alignedObjects;
            if (e) {
                if (this.alignOptions = e,
                        this.alignByTranslate = t,
                    !n || r(n))
                    this.alignTo = i = n || "renderer",
                        f(o, this),
                        o.push(this),
                        n = null
            } else
                e = this.alignOptions,
                    t = this.alignByTranslate,
                    i = this.alignTo;
            n = p(n, s[i], s),
                i = e.align,
                s = e.verticalAlign,
                o = (n.x || 0) + (e.x || 0),
                u = (n.y || 0) + (e.y || 0);
            if (i === "right" || i === "center")
                o += (n.width - (e.width || 0)) / {
                        right: 1,
                        center: 2
                    }[i];
            a[t ? "translateX" : "x"] = J(o);
            if (s === "bottom" || s === "middle")
                u += (n.height - (e.height || 0)) / ({
                        bottom: 1,
                        middle: 2
                    }[s] || 1);
            return a[t ? "translateY" : "y"] = J(u),
                this[this.placed ? "animate" : "attr"](a),
                this.placed = !0,
                this.alignAttr = a,
                this
        },
        getBBox: function() {
            var t = this.bBox, n = this.renderer, r, i = this.rotation;
            r = this.element;
            var s = this.styles
                , o = i * rt;
            if (!t) {
                if (r.namespaceURI === ct || n.forExport) {
                    try {
                        t = r.getBBox ? e({}, r.getBBox()) : {
                            width: r.offsetWidth,
                            height: r.offsetHeight
                        }
                    } catch (u) {}
                    if (!t || t.width < 0)
                        t = {
                            width: 0,
                            height: 0
                        }
                } else
                    t = this.htmlGetBBox();
                n.isSVG && (n = t.width,
                    r = t.height,
                ot && s && s.fontSize === "11px" && r.toPrecision(3) === "22.7" && (t.height = r = 14),
                i && (t.width = Z(r * tt(o)) + Z(n * et(o)),
                    t.height = Z(r * et(o)) + Z(n * tt(o)))),
                    this.bBox = t
            }
            return t
        },
        show: function() {
            return this.attr({
                visibility: "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(e) {
            var t = this;
            t.animate({
                opacity: 0
            }, {
                duration: e || 150,
                complete: function() {
                    t.hide()
                }
            })
        },
        add: function(e) {
            var t = this.renderer, r = e || t, i = r.element || t.box, s = i.childNodes, o = this.element, u = c(o, "zIndex"), a;
            e && (this.parentGroup = e),
                this.parentInverted = e && e.inverted,
            this.textStr !== void 0 && t.buildText(this),
            u && (r.handleZ = !0,
                u = n(u));
            if (r.handleZ)
                for (r = 0; r < s.length; r++)
                    if (e = s[r],
                            t = c(e, "zIndex"),
                        e !== o && (n(t) > u || !l(u) && l(t))) {
                        i.insertBefore(o, e),
                            a = !0;
                        break
                    }
            return a || i.appendChild(o),
                this.added = !0,
                ln(this, "add"),
                this
        },
        safeRemoveChild: function(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        destroy: function() {
            var e = this, t = e.element || {}, n = e.shadows, r = e.renderer.isSVG && t.nodeName === "SPAN" && e.parentGroup, i, s;
            t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null ,
                pn(e),
            e.clipPath && (e.clipPath = e.clipPath.destroy());
            if (e.stops) {
                for (s = 0; s < e.stops.length; s++)
                    e.stops[s] = e.stops[s].destroy();
                e.stops = null
            }
            e.safeRemoveChild(t);
            for (n && rn(n, function(t) {
                e.safeRemoveChild(t)
            }); r && r.div.childNodes.length === 0; )
                t = r.parentGroup,
                    e.safeRemoveChild(r.div),
                    delete r.div,
                    r = t;
            e.alignTo && f(e.renderer.alignedObjects, e);
            for (i in e)
                delete e[i];
            return null
        },
        shadow: function(e, t, n) {
            var r = [], i, s, o = this.element, u, a, f, l;
            if (e) {
                a = p(e.width, 3),
                    f = (e.opacity || .15) / a,
                    l = this.parentInverted ? "(-1,-1)" : "(" + p(e.offsetX, 1) + ", " + p(e.offsetY, 1) + ")";
                for (i = 1; i <= a; i++)
                    s = o.cloneNode(0),
                        u = a * 2 + 1 - 2 * i,
                        c(s, {
                            isShadow: "true",
                            stroke: e.color || "black",
                            "stroke-opacity": f * i,
                            "stroke-width": u,
                            transform: "translate" + l,
                            fill: Lt
                        }),
                    n && (c(s, "height", G(c(s, "height") - u, 0)),
                        s.cutHeight = u),
                        t ? t.element.appendChild(s) : o.parentNode.insertBefore(s, o),
                        r.push(s);
                this.shadows = r
            }
            return this
        }
    };
    var bn = function() {
            this.init.apply(this, arguments)
        }
        ;
    bn.prototype = {
        Element: H,
        init: function(e, t, n, r) {
            var i = location, s, o;
            s = this.createElement("svg").attr({
                version: "1.1"
            }),
                o = s.element,
                e.appendChild(o),
            e.innerHTML.indexOf("xmlns") === -1 && c(o, "xmlns", ct),
                this.isSVG = !0,
                this.box = o,
                this.boxWrapper = s,
                this.alignedObjects = [],
                this.url = (ft || at) && X.getElementsByTagName("base").length ? i.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "",
                this.createElement("desc").add().element.appendChild(X.createTextNode("Created with Highcharts 3.0.7")),
                this.defs = this.createElement("defs").add(),
                this.forExport = r,
                this.gradients = {},
                this.setSize(t, n, !1);
            var u;
            ft && e.getBoundingClientRect && (this.subPixelFix = t = function() {
                d(e, {
                    left: 0,
                    top: 0
                }),
                    u = e.getBoundingClientRect(),
                    d(e, {
                        left: Q(u.left) - u.left + "px",
                        top: Q(u.top) - u.top + "px"
                    })
            }
                ,
                t(),
                an(V, "resize", t))
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var e = this.defs;
            return this.box = null ,
                this.boxWrapper = this.boxWrapper.destroy(),
                A(this.gradients || {}),
                this.gradients = null ,
            e && (this.defs = e.destroy()),
            this.subPixelFix && fn(V, "resize", this.subPixelFix),
                this.alignedObjects = null
        },
        createElement: function(e) {
            var t = new this.Element;
            return t.init(this, e),
                t
        },
        draw: function() {},
        buildText: function(e) {
            for (var t = e.element, r = this, i = r.forExport, s = p(e.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), o = t.childNodes, u = /style="([^"]+)"/, a = /href="(http[^"]+)"/, f = c(t, "x"), l = e.styles, h = e.textWidth, v = l && l.lineHeight, m = o.length; m--; )
                t.removeChild(o[m]);
            h && !e.added && this.box.appendChild(t),
            s[s.length - 1] === "" && s.pop(),
                rn(s, function(s, o) {
                    var p, m = 0, s = s.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                    p = s.split("|||"),
                        rn(p, function(s) {
                            if (s !== "" || p.length === 1) {
                                var g = {}, y = X.createElementNS(ct, "tspan"), b;
                                u.test(s) && (b = s.match(u)[1].replace(/(;| |^)color([ :])/, "$1fill$2"),
                                    c(y, "style", b)),
                                a.test(s) && !i && (c(y, "onclick", 'location.href="' + s.match(a)[1] + '"'),
                                    d(y, {
                                        cursor: "pointer"
                                    })),
                                    s = (s.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                                if (s !== " " && (y.appendChild(X.createTextNode(s)),
                                        m ? g.dx = 0 : g.x = f,
                                        c(y, g),
                                    !m && o && (!ht && i && d(y, {
                                        display: "block"
                                    }),
                                        c(y, "dy", v || r.fontMetrics(/px$/.test(y.style.fontSize) ? y.style.fontSize : l.fontSize).h, at && y.offsetHeight)),
                                        t.appendChild(y),
                                        m++,
                                        h))
                                    for (var s = s.replace(/([^\^])-/g, "$1- ").split(" "), w, E, g = e._clipHeight, S = [], x = n(v || 16), T = 1; s.length || S.length; )
                                        delete e.bBox,
                                            w = e.getBBox(),
                                            E = w.width,
                                        !ht && r.forExport && (E = r.measureSpanWidth(y.firstChild.data, e.styles)),
                                            w = E > h,
                                            !w || s.length === 1 ? (s = S,
                                                S = [],
                                            s.length && (T++,
                                                g && T * x > g ? (s = ["..."],
                                                    e.attr("title", e.textStr)) : (y = X.createElementNS(ct, "tspan"),
                                                    c(y, {
                                                        dy: x,
                                                        x: f
                                                    }),
                                                b && c(y, "style", b),
                                                    t.appendChild(y),
                                                E > h && (h = E)))) : (y.removeChild(y.firstChild),
                                                S.unshift(s.pop())),
                                        s.length && y.appendChild(X.createTextNode(s.join(" ").replace(/- /g, "-")))
                            }
                        })
                })
        },
        button: function(n, r, i, s, o, u, a, f, l) {
            var c = this.label(n, r, i, l, null , null , null , null , "button"), h = 0, p, d, v, m, g, y, n = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }, o = t({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: n,
                    stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            }, o);
            return v = o.style,
                delete o.style,
                u = t(o, {
                    stroke: "#68A",
                    fill: {
                        linearGradient: n,
                        stops: [[0, "#FFF"], [1, "#ACF"]]
                    }
                }, u),
                m = u.style,
                delete u.style,
                a = t(o, {
                    stroke: "#68A",
                    fill: {
                        linearGradient: n,
                        stops: [[0, "#9BD"], [1, "#CDF"]]
                    }
                }, a),
                g = a.style,
                delete a.style,
                f = t(o, {
                    style: {
                        color: "#CCC"
                    }
                }, f),
                y = f.style,
                delete f.style,
                an(c.element, ot ? "mouseover" : "mouseenter", function() {
                    h !== 3 && c.attr(u).css(m)
                }),
                an(c.element, ot ? "mouseout" : "mouseleave", function() {
                    h !== 3 && (p = [o, u, a][h],
                        d = [v, m, g][h],
                        c.attr(p).css(d))
                }),
                c.setState = function(e) {
                    (c.state = h = e) ? e === 2 ? c.attr(a).css(g) : e === 3 && c.attr(f).css(y) : c.attr(o).css(v)
                }
                ,
                c.on("click", function() {
                    h !== 3 && s.call(c)
                }).attr(o).css(e({
                    cursor: "default"
                }, v))
        },
        crispLine: function(e, t) {
            return e[1] === e[4] && (e[1] = e[4] = J(e[1]) - t % 2 / 2),
            e[2] === e[5] && (e[2] = e[5] = J(e[2]) + t % 2 / 2),
                e
        },
        path: function(t) {
            var n = {
                fill: Lt
            };
            return s(t) ? n.d = t : i(t) && e(n, t),
                this.createElement("path").attr(n)
        },
        circle: function(e, t, n) {
            return e = i(e) ? e : {
                x: e,
                y: t,
                r: n
            },
                this.createElement("circle").attr(e)
        },
        arc: function(e, t, n, r, s, o) {
            return i(e) && (t = e.y,
                n = e.r,
                r = e.innerR,
                s = e.start,
                o = e.end,
                e = e.x),
                e = this.symbol("arc", e || 0, t || 0, n || 0, n || 0, {
                    innerR: r || 0,
                    start: s || 0,
                    end: o || 0
                }),
                e.r = n,
                e
        },
        rect: function(e, t, n, r, s, o) {
            return s = i(e) ? e.r : s,
                s = this.createElement("rect").attr({
                    rx: s,
                    ry: s,
                    fill: Lt
                }),
                s.attr(i(e) ? e : s.crisp(o, e, t, G(n, 0), G(r, 0)))
        },
        setSize: function(e, t, n) {
            var r = this.alignedObjects
                , i = r.length;
            this.width = e,
                this.height = t;
            for (this.boxWrapper[p(n, !0) ? "animate" : "attr"]({
                width: e,
                height: t
            }); i--; )
                r[i].align()
        },
        g: function(e) {
            var t = this.createElement("g");
            return l(e) ? t.attr({
                "class": "highcharts-" + e
            }) : t
        },
        image: function(t, n, r, i, s) {
            var o = {
                preserveAspectRatio: Lt
            };
            return arguments.length > 1 && e(o, {
                x: n,
                y: r,
                width: i,
                height: s
            }),
                o = this.createElement("image").attr(o),
                o.element.setAttributeNS ? o.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : o.element.setAttribute("hc-svg-href", t),
                o
        },
        symbol: function(t, n, r, i, s, o) {
            var u, a = this.symbols[t], a = a && a(J(n), J(r), i, s, o), f = /^url\((.*?)\)$/, l, c;
            return a ? (u = this.path(a),
                e(u, {
                    symbolName: t,
                    x: n,
                    y: r,
                    width: i,
                    height: s
                }),
            o && e(u, o)) : f.test(t) && (c = function(e, t) {
                e.element && (e.attr({
                    width: t[0],
                    height: t[1]
                }),
                e.alignByTranslate || e.translate(J((i - t[0]) / 2), J((s - t[1]) / 2)))
            }
                ,
                l = t.match(f)[1],
                t = gt[l],
                u = this.image(l).attr({
                    x: n,
                    y: r
                }),
                u.isImg = !0,
                t ? c(u, t) : (u.attr({
                    width: 0,
                    height: 0
                }),
                    v("img", {
                        onload: function() {
                            c(u, gt[l] = [this.width, this.height])
                        },
                        src: l
                    }))),
                u
        },
        symbols: {
            circle: function(e, t, n, r) {
                var i = .166 * n;
                return ["M", e + n / 2, t, "C", e + n + i, t, e + n + i, t + r, e + n / 2, t + r, "C", e - i, t + r, e - i, t, e + n / 2, t, "Z"]
            },
            square: function(e, t, n, r) {
                return ["M", e, t, "L", e + n, t, e + n, t + r, e, t + r, "Z"]
            },
            triangle: function(e, t, n, r) {
                return ["M", e + n / 2, t, "L", e + n, t + r, e, t + r, "Z"]
            },
            "triangle-down": function(e, t, n, r) {
                return ["M", e, t, "L", e + n, t, e + n / 2, t + r, "Z"]
            },
            diamond: function(e, t, n, r) {
                return ["M", e + n / 2, t, "L", e + n, t + r / 2, e + n / 2, t + r, e, t + r / 2, "Z"]
            },
            arc: function(e, t, n, r, i) {
                var s = i.start
                    , n = i.r || n || r
                    , o = i.end - .001
                    , r = i.innerR
                    , u = i.open
                    , a = et(s)
                    , f = tt(s)
                    , l = et(o)
                    , o = tt(o)
                    , i = i.end - s < nt ? 0 : 1;
                return ["M", e + n * a, t + n * f, "A", n, n, 0, i, 1, e + n * l, t + n * o, u ? "M" : "L", e + r * l, t + r * o, "A", r, r, 0, i, 0, e + r * a, t + r * f, u ? "" : "Z"]
            }
        },
        clipRect: function(e, t, n, r) {
            var i = "highcharts-" + yt++
                , s = this.createElement("clipPath").attr({
                id: i
            }).add(this.defs)
                , e = this.rect(e, t, n, r, 0).add(s);
            return e.id = i,
                e.clipPath = s,
                e
        },
        color: function(e, n, r) {
            var i = this, o, u = /^rgba/, a, f, h, p, d, v, m, g = [];
            e && e.linearGradient ? a = "linearGradient" : e && e.radialGradient && (a = "radialGradient");
            if (a) {
                r = e[a],
                    f = i.gradients,
                    p = e.stops,
                    n = n.radialReference,
                s(r) && (e[a] = r = {
                    x1: r[0],
                    y1: r[1],
                    x2: r[2],
                    y2: r[3],
                    gradientUnits: "userSpaceOnUse"
                }),
                a === "radialGradient" && n && !l(r.gradientUnits) && (r = t(r, {
                    cx: n[0] - n[2] / 2 + r.cx * n[2],
                    cy: n[1] - n[2] / 2 + r.cy * n[2],
                    r: r.r * n[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (m in r)
                    m !== "id" && g.push(m, r[m]);
                for (m in p)
                    g.push(p[m]);
                return g = g.join(","),
                    f[g] ? e = f[g].id : (r.id = e = "highcharts-" + yt++,
                        f[g] = h = i.createElement(a).attr(r).add(i.defs),
                        h.stops = [],
                        rn(p, function(e) {
                            u.test(e[1]) ? (o = yn(e[1]),
                                d = o.get("rgb"),
                                v = o.get("a")) : (d = e[1],
                                v = 1),
                                e = i.createElement("stop").attr({
                                    offset: e[0],
                                    "stop-color": d,
                                    "stop-opacity": v
                                }).add(h),
                                h.stops.push(e)
                        })),
                "url(" + i.url + "#" + e + ")"
            }
            return u.test(e) ? (o = yn(e),
                c(n, r + "-opacity", o.get("a")),
                o.get("rgb")) : (n.removeAttribute(r + "-opacity"),
                e)
        },
        text: function(e, t, n, r) {
            var i = wt.chart.style
                , s = dt || !ht && this.forExport;
            return r && !this.forExport ? this.html(e, t, n) : (t = J(p(t, 0)),
                n = J(p(n, 0)),
                e = this.createElement("text").attr({
                    x: t,
                    y: n,
                    text: e
                }).css({
                    fontFamily: i.fontFamily,
                    fontSize: i.fontSize
                }),
            s && e.css({
                position: "absolute"
            }),
                e.x = t,
                e.y = n,
                e)
        },
        html: function(t, n, r) {
            var i = wt.chart.style
                , s = this.createElement("span")
                , o = s.attrSetters
                , u = s.element
                , a = s.renderer;
            return o.text = function(e) {
                return e !== u.innerHTML && delete this.bBox,
                    u.innerHTML = e,
                    !1
            }
                ,
                o.x = o.y = o.align = function(e, t) {
                    return t === "align" && (t = "textAlign"),
                        s[t] = e,
                        s.htmlUpdateTransform(),
                        !1
                }
                ,
                s.attr({
                    text: t,
                    x: J(n),
                    y: J(r)
                }).css({
                    position: "absolute",
                    whiteSpace: "nowrap",
                    fontFamily: i.fontFamily,
                    fontSize: i.fontSize
                }),
                s.css = s.htmlCss,
            a.isSVG && (s.add = function(t) {
                    var n, r = a.box.parentNode, i = [];
                    if (this.parentGroup = t) {
                        if (n = t.div,
                                !n) {
                            for (; t; )
                                i.push(t),
                                    t = t.parentGroup;
                            rn(i.reverse(), function(t) {
                                var i;
                                n = t.div = t.div || v(kt, {
                                        className: c(t.element, "class")
                                    }, {
                                        position: "absolute",
                                        left: (t.translateX || 0) + "px",
                                        top: (t.translateY || 0) + "px"
                                    }, n || r),
                                    i = n.style,
                                    e(t.attrSetters, {
                                        translateX: function(e) {
                                            i.left = e + "px"
                                        },
                                        translateY: function(e) {
                                            i.top = e + "px"
                                        },
                                        visibility: function(e, t) {
                                            i[t] = e
                                        }
                                    })
                            })
                        }
                    } else
                        n = r;
                    return n.appendChild(u),
                        s.added = !0,
                    s.alignOnAdd && s.htmlUpdateTransform(),
                        s
                }
            ),
                s
        },
        fontMetrics: function(e) {
            var e = n(e || 11)
                , e = e < 24 ? e + 4 : J(e * 1.2)
                , t = J(e * .8);
            return {
                h: e,
                b: t
            }
        },
        label: function(n, r, i, s, o, u, a, f, c) {
            function h() {
                var e, n;
                e = y.element.style,
                    w = (T === void 0 || N === void 0 || g.styles.textAlign) && y.getBBox(),
                    g.width = (T || w.width || 0) + 2 * S + x,
                    g.height = (N || w.height || 0) + 2 * S,
                    O = S + m.fontMetrics(e && e.fontSize).b,
                M && (b || (e = J(-E * S),
                    n = f ? -O : 0,
                    g.box = b = s ? m.symbol(s, e, n, g.width, g.height, A) : m.rect(e, n, g.width, g.height, 0, A[Ft]),
                    b.add(g)),
                b.isImg || b.attr(t({
                    width: g.width,
                    height: g.height
                }, A)),
                    A = null )
            }
            function p() {
                var e = g.styles, e = e && e.textAlign, t = x + S * (1 - E), n;
                n = f ? 0 : O,
                l(T) && (e === "center" || e === "right") && (t += {
                        center: .5,
                        right: 1
                    }[e] * (T - w.width)),
                (t !== y.x || n !== y.y) && y.attr({
                    x: t,
                    y: n
                }),
                    y.x = t,
                    y.y = n
            }
            function d(e, t) {
                b ? b.attr(e, t) : A[e] = t
            }
            function v() {
                y.add(g),
                    g.attr({
                        text: n,
                        x: r,
                        y: i
                    }),
                b && l(o) && g.attr({
                    anchorX: o,
                    anchorY: u
                })
            }
            var m = this, g = m.g(c), y = m.text("", 0, 0, a).attr({
                zIndex: 1
            }), b, w, E = 0, S = 3, x = 0, T, N, C, k, L = 0, A = {}, O, a = g.attrSetters, M;
            an(g, "add", v),
                a.width = function(e) {
                    return T = e,
                        !1
                }
                ,
                a.height = function(e) {
                    return N = e,
                        !1
                }
                ,
                a.padding = function(e) {
                    return l(e) && e !== S && (S = e,
                        p()),
                        !1
                }
                ,
                a.paddingLeft = function(e) {
                    return l(e) && e !== x && (x = e,
                        p()),
                        !1
                }
                ,
                a.align = function(e) {
                    return E = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[e],
                        !1
                }
                ,
                a.text = function(e, t) {
                    return y.attr(t, e),
                        h(),
                        p(),
                        !1
                }
                ,
                a[Ft] = function(e, t) {
                    return M = !0,
                        L = e % 2 / 2,
                        d(t, e),
                        !1
                }
                ,
                a.stroke = a.fill = a.r = function(e, t) {
                    return t === "fill" && (M = !0),
                        d(t, e),
                        !1
                }
                ,
                a.anchorX = function(e, t) {
                    return o = e,
                        d(t, e + L - C),
                        !1
                }
                ,
                a.anchorY = function(e, t) {
                    return u = e,
                        d(t, e - k),
                        !1
                }
                ,
                a.x = function(e) {
                    return g.x = e,
                        e -= E * ((T || w.width) + S),
                        C = J(e),
                        g.attr("translateX", C),
                        !1
                }
                ,
                a.y = function(e) {
                    return k = g.y = J(e),
                        g.attr("translateY", k),
                        !1
                }
            ;
            var _ = g.css;
            return e(g, {
                css: function(e) {
                    if (e) {
                        var n = {}
                            , e = t(e);
                        rn("fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","), function(t) {
                            e[t] !== W && (n[t] = e[t],
                                delete e[t])
                        }),
                            y.css(n)
                    }
                    return _.call(g, e)
                },
                getBBox: function() {
                    return {
                        width: w.width + 2 * S,
                        height: w.height + 2 * S,
                        x: w.x - S,
                        y: w.y - S
                    }
                },
                shadow: function(e) {
                    return b && b.shadow(e),
                        g
                },
                destroy: function() {
                    fn(g, "add", v),
                        fn(g.element, "mouseenter"),
                        fn(g.element, "mouseleave"),
                    y && (y = y.destroy()),
                    b && (b = b.destroy()),
                        H.prototype.destroy.call(g),
                        g = m = h = p = d = v = null
                }
            })
        }
    },
        vt = bn;
    var wn;
    if (!ht && !dt) {
        Highcharts.VMLElement = wn = {
            init: function(e, t) {
                var n = ["<", t, ' filled="f" stroked="f"']
                    , r = ["position: ", "absolute", ";"]
                    , i = t === kt;
                (t === "shape" || i) && r.push("left:0;top:0;width:1px;height:1px;"),
                    r.push("visibility: ", i ? "hidden" : "visible"),
                    n.push(' style="', r.join(""), '"/>'),
                t && (n = i || t === "span" || t === "img" ? n.join("") : e.prepVML(n),
                    this.element = v(n)),
                    this.renderer = e,
                    this.attrSetters = {}
            },
            add: function(e) {
                var t = this.renderer
                    , n = this.element
                    , r = t.box
                    , r = e ? e.element || e : r;
                return e && e.inverted && t.invertChild(n, r),
                    r.appendChild(n),
                    this.added = !0,
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(),
                    ln(this, "add"),
                    this
            },
            updateTransform: H.prototype.htmlUpdateTransform,
            setSpanRotation: function(e, t, n) {
                d(this.element, {
                    filter: e ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", n, ", M12=", -t, ", M21=", t, ", M22=", n, ", sizingMethod='auto expand')"].join("") : Lt
                })
            },
            pathToVML: function(e) {
                for (var t = e.length, n = [], r; t--; )
                    if (o(e[t]))
                        n[t] = J(e[t] * 10) - 5;
                    else if (e[t] === "Z")
                        n[t] = "x";
                    else if (n[t] = e[t],
                        e.isArc && (e[t] === "wa" || e[t] === "at"))
                        r = e[t] === "wa" ? 1 : -1,
                        n[t + 5] === n[t + 7] && (n[t + 7] -= r),
                        n[t + 6] === n[t + 8] && (n[t + 8] -= r);
                return n.join(" ") || "x"
            },
            attr: function(e, t) {
                var n, i, s, u = this.element || {}, a = u.style, f = u.nodeName, h = this.renderer, p = this.symbolName, d, m = this.shadows, g, y = this.attrSetters, b = this;
                r(e) && l(t) && (n = e,
                    e = {},
                    e[n] = t);
                if (r(e))
                    n = e,
                        b = n === "strokeWidth" || n === "stroke-width" ? this.strokeweight : this[n];
                else
                    for (n in e)
                        if (i = e[n],
                                g = !1,
                                s = y[n] && y[n].call(this, i, n),
                            s !== !1 && i !== null ) {
                            s !== W && (i = s);
                            if (p && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(n))
                                d || (this.symbolAttr(e),
                                    d = !0),
                                    g = !0;
                            else if (n === "d") {
                                i = i || [],
                                    this.d = i.join(" "),
                                    u.path = i = this.pathToVML(i);
                                if (m)
                                    for (s = m.length; s--; )
                                        m[s].path = m[s].cutOff ? this.cutOffPath(i, m[s].cutOff) : i;
                                g = !0
                            } else if (n === "visibility") {
                                if (m)
                                    for (s = m.length; s--; )
                                        m[s].style[n] = i;
                                f === "DIV" && (i = i === "hidden" ? "-999em" : 0,
                                ut || (a[n] = i ? "visible" : "hidden"),
                                    n = "top"),
                                    a[n] = i,
                                    g = !0
                            } else
                                n === "zIndex" ? (i && (a[n] = i),
                                    g = !0) : nn(n, ["x", "y", "width", "height"]) !== -1 ? (this[n] = i,
                                    n === "x" || n === "y" ? n = {
                                        x: "left",
                                        y: "top"
                                    }[n] : i = G(0, i),
                                    this.updateClipping ? (this[n] = i,
                                        this.updateClipping()) : a[n] = i,
                                    g = !0) : n === "class" && f === "DIV" ? u.className = i : n === "stroke" ? (i = h.color(i, u, n),
                                    n = "strokecolor") : n === "stroke-width" || n === "strokeWidth" ? (u.stroked = i ? !0 : !1,
                                    n = "strokeweight",
                                    this[n] = i,
                                o(i) && (i += "px")) : n === "dashstyle" ? ((u.getElementsByTagName("stroke")[0] || v(h.prepVML(["<stroke/>"]), null , null , u))[n] = i || "solid",
                                    this.dashstyle = i,
                                    g = !0) : n === "fill" ? f === "SPAN" ? a.color = i : f !== "IMG" && (u.filled = i !== Lt ? !0 : !1,
                                    i = h.color(i, u, n, this),
                                    n = "fillcolor") : n === "opacity" ? g = !0 : f === "shape" && n === "rotation" ? (this[n] = u.style[n] = i,
                                    u.style.left = -J(tt(i * rt) + 1) + "px",
                                    u.style.top = J(et(i * rt)) + "px") : n === "translateX" || n === "translateY" || n === "rotation" ? (this[n] = i,
                                    this.updateTransform(),
                                    g = !0) : n === "text" && (this.bBox = null ,
                                    u.innerHTML = i,
                                    g = !0);
                            g || (ut ? u[n] = i : c(u, n, i))
                        }
                return b
            },
            clip: function(e) {
                var t = this, n;
                return e ? (n = e.members,
                    f(n, t),
                    n.push(t),
                    t.destroyClip = function() {
                        f(n, t)
                    }
                    ,
                    e = e.getCSS(t)) : (t.destroyClip && t.destroyClip(),
                    e = {
                        clip: ut ? "inherit" : "rect(auto)"
                    }),
                    t.css(e)
            },
            css: H.prototype.htmlCss,
            safeRemoveChild: function(e) {
                e.parentNode && O(e)
            },
            destroy: function() {
                return this.destroyClip && this.destroyClip(),
                    H.prototype.destroy.apply(this)
            },
            on: function(e, t) {
                return this.element["on" + e] = function() {
                    var e = V.event;
                    e.target = e.srcElement,
                        t(e)
                }
                    ,
                    this
            },
            cutOffPath: function(e, t) {
                var r, e = e.split(/[ ,]/);
                r = e.length;
                if (r === 9 || r === 11)
                    e[r - 4] = e[r - 2] = n(e[r - 2]) - 10 * t;
                return e.join(" ")
            },
            shadow: function(e, t, r) {
                var i = [], s, o = this.element, u = this.renderer, a, f = o.style, l, c = o.path, h, d, m, g;
                c && typeof c.value != "string" && (c = "x"),
                    d = c;
                if (e) {
                    m = p(e.width, 3),
                        g = (e.opacity || .15) / m;
                    for (s = 1; s <= 3; s++)
                        h = m * 2 + 1 - 2 * s,
                        r && (d = this.cutOffPath(c.value, h + .5)),
                            l = ['<shape isShadow="true" strokeweight="', h, '" filled="false" path="', d, '" coordsize="10 10" style="', o.style.cssText, '" />'],
                            a = v(u.prepVML(l), null , {
                                left: n(f.left) + p(e.offsetX, 1),
                                top: n(f.top) + p(e.offsetY, 1)
                            }),
                        r && (a.cutOff = h + 1),
                            l = ['<stroke color="', e.color || "black", '" opacity="', g * s, '"/>'],
                            v(u.prepVML(l), null , null , a),
                            t ? t.element.appendChild(a) : o.parentNode.insertBefore(a, o),
                            i.push(a);
                    this.shadows = i
                }
                return this
            }
        },
            wn = m(H, wn);
        var En = {
            Element: wn,
            isIE8: it.indexOf("MSIE 8.0") > -1,
            init: function(e, t, n) {
                var r, i;
                this.alignedObjects = [],
                    r = this.createElement(kt),
                    i = r.element,
                    i.style.position = "relative",
                    e.appendChild(r.element),
                    this.isVML = !0,
                    this.box = i,
                    this.boxWrapper = r,
                    this.setSize(t, n, !1);
                if (!X.namespaces.hcv) {
                    X.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        X.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (s) {
                        X.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            },
            isHidden: function() {
                return !this.box.offsetWidth
            },
            clipRect: function(t, n, r, s) {
                var o = this.createElement()
                    , u = i(t);
                return e(o, {
                    members: [],
                    left: (u ? t.x : t) + 1,
                    top: (u ? t.y : n) + 1,
                    width: (u ? t.width : r) - 1,
                    height: (u ? t.height : s) - 1,
                    getCSS: function(t) {
                        var n = t.element
                            , r = n.nodeName
                            , t = t.inverted
                            , i = this.top - (r === "shape" ? n.offsetTop : 0)
                            , s = this.left
                            , n = s + this.width
                            , o = i + this.height
                            , i = {
                            clip: "rect(" + J(t ? s : i) + "px," + J(t ? o : n) + "px," + J(t ? n : o) + "px," + J(t ? i : s) + "px)"
                        };
                        return !t && ut && r === "DIV" && e(i, {
                            width: n + "px",
                            height: o + "px"
                        }),
                            i
                    },
                    updateClipping: function() {
                        rn(o.members, function(e) {
                            e.css(o.getCSS(e))
                        })
                    }
                })
            },
            color: function(e, t, n, r) {
                var i = this, s, o = /^rgba/, u, a, f = Lt;
                e && e.linearGradient ? a = "gradient" : e && e.radialGradient && (a = "pattern");
                if (a) {
                    var l, c, h = e.linearGradient || e.radialGradient, p, d, m, g, y, b = "", e = e.stops, w, E = [], S = function() {
                            u = ['<fill colors="' + E.join(",") + '" opacity="', m, '" o:opacity2="', d, '" type="', a, '" ', b, 'focus="100%" method="any" />'],
                                v(i.prepVML(u), null , null , t)
                        }
                        ;
                    p = e[0],
                        w = e[e.length - 1],
                    p[0] > 0 && e.unshift([0, p[1]]),
                    w[0] < 1 && e.push([1, w[1]]),
                        rn(e, function(e, t) {
                            o.test(e[1]) ? (s = yn(e[1]),
                                l = s.get("rgb"),
                                c = s.get("a")) : (l = e[1],
                                c = 1),
                                E.push(e[0] * 100 + "% " + l),
                                t ? (m = c,
                                    g = l) : (d = c,
                                    y = l)
                        });
                    if (n === "fill")
                        if (a === "gradient")
                            n = h.x1 || h[0] || 0,
                                e = h.y1 || h[1] || 0,
                                p = h.x2 || h[2] || 0,
                                h = h.y2 || h[3] || 0,
                                b = 'angle="' + (90 - $.atan((h - e) / (p - n)) * 180 / nt) + '"',
                                S();
                        else {
                            var f = h.r, x = f * 2, T = f * 2, N = h.cx, C = h.cy, k = t.radialReference, L, f = function() {
                                    k && (L = r.getBBox(),
                                        N += (k[0] - L.x) / L.width - .5,
                                        C += (k[1] - L.y) / L.height - .5,
                                        x *= k[2] / L.width,
                                        T *= k[2] / L.height),
                                        b = 'src="' + wt.global.VMLRadialGradientURL + '" size="' + x + "," + T + '" origin="0.5,0.5" position="' + N + "," + C + '" color2="' + y + '" ',
                                        S()
                                }
                                ;
                            r.added ? f() : an(r, "add", f),
                                f = g
                        }
                    else
                        f = l
                } else
                    o.test(e) && t.tagName !== "IMG" ? (s = yn(e),
                        u = ["<", n, ' opacity="', s.get("a"), '"/>'],
                        v(this.prepVML(u), null , null , t),
                        f = s.get("rgb")) : (f = t.getElementsByTagName(n),
                    f.length && (f[0].opacity = 1,
                        f[0].type = "solid"),
                        f = e);
                return f
            },
            prepVML: function(e) {
                var t = this.isIE8
                    , e = e.join("");
                return t ? (e = e.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'),
                    e = e.indexOf('style="') === -1 ? e.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : e.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : e = e.replace("<", "<hcv:"),
                    e
            },
            text: bn.prototype.html,
            path: function(t) {
                var n = {
                    coordsize: "10 10"
                };
                return s(t) ? n.d = t : i(t) && e(n, t),
                    this.createElement("shape").attr(n)
            },
            circle: function(e, t, n) {
                var r = this.symbol("circle");
                return i(e) && (n = e.r,
                    t = e.y,
                    e = e.x),
                    r.isCircle = !0,
                    r.r = n,
                    r.attr({
                        x: e,
                        y: t
                    })
            },
            g: function(e) {
                var t;
                return e && (t = {
                    className: "highcharts-" + e,
                    "class": "highcharts-" + e
                }),
                    this.createElement(kt).attr(t)
            },
            image: function(e, t, n, r, i) {
                var s = this.createElement("img").attr({
                    src: e
                });
                return arguments.length > 1 && s.attr({
                    x: t,
                    y: n,
                    width: r,
                    height: i
                }),
                    s
            },
            rect: function(e, t, n, r, s, o) {
                var u = this.symbol("rect");
                return u.r = i(e) ? e.r : s,
                    u.attr(i(e) ? e : u.crisp(o, e, t, G(n, 0), G(r, 0)))
            },
            invertChild: function(e, t) {
                var r = t.style;
                d(e, {
                    flip: "x",
                    left: n(r.width) - 1,
                    top: n(r.height) - 1,
                    rotation: -90
                })
            },
            symbols: {
                arc: function(e, t, n, r, i) {
                    var s = i.start
                        , o = i.end
                        , u = i.r || n || r
                        , n = i.innerR
                        , r = et(s)
                        , a = tt(s)
                        , f = et(o)
                        , l = tt(o);
                    return o - s === 0 ? ["x"] : (s = ["wa", e - u, t - u, e + u, t + u, e + u * r, t + u * a, e + u * f, t + u * l],
                    i.open && !n && s.push("e", "M", e, t),
                        s.push("at", e - n, t - n, e + n, t + n, e + n * f, t + n * l, e + n * r, t + n * a, "x", "e"),
                        s.isArc = !0,
                        s)
                },
                circle: function(e, t, n, r, i) {
                    return i && (n = r = 2 * i.r),
                    i && i.isCircle && (e -= n / 2,
                        t -= r / 2),
                        ["wa", e, t, e + n, t + r, e + n, t + r / 2, e + n, t + r / 2, "e"]
                },
                rect: function(e, t, n, r, i) {
                    var s = e + n, o = t + r, u;
                    return !l(i) || !i.r ? s = bn.prototype.symbols.square.apply(0, arguments) : (u = Y(i.r, n, r),
                        s = ["M", e + u, t, "L", s - u, t, "wa", s - 2 * u, t, s, t + 2 * u, s - u, t, s, t + u, "L", s, o - u, "wa", s - 2 * u, o - 2 * u, s, o, s, o - u, s - u, o, "L", e + u, o, "wa", e, o - 2 * u, e + 2 * u, o, e + u, o, e, o - u, "L", e, t + u, "wa", e, t, e + 2 * u, t + 2 * u, e, t + u, e + u, t, "x", "e"]),
                        s
                }
            }
        };
        Highcharts.VMLRenderer = wn = function() {
            this.init.apply(this, arguments)
        }
            ,
            wn.prototype = t(bn.prototype, En),
            vt = wn
    }
    bn.prototype.measureSpanWidth = function(e, t) {
        var n = X.createElement("span")
            , r = X.createTextNode(e);
        return n.appendChild(r),
            d(n, t),
            this.box.appendChild(n),
            n.offsetWidth
    }
    ;
    var Sn;
    dt && (Highcharts.CanVGRenderer = wn = function() {
        ct = "http://www.w3.org/1999/xhtml"
    }
        ,
        wn.prototype.symbols = {},
        Sn = function() {
            function e() {
                var e = t.length, n;
                for (n = 0; n < e; n++)
                    t[n]();
                t = []
            }
            var t = [];
            return {
                push: function(n, r) {
                    t.length === 0 && tn(r, e),
                        t.push(n)
                }
            }
        }(),
        vt = wn),
        B.prototype = {
            addLabel: function() {
                var t = this.axis, n = t.options, r = t.chart, i = t.horiz, s = t.categories, u = t.names, f = this.pos, c = n.labels, h = t.tickPositions, i = i && s && !c.step && !c.staggerLines && !c.rotation && r.plotWidth / h.length || !i && (r.margin[3] || r.chartWidth * .33), d = f === h[0], v = f === h[h.length - 1], m, u = s ? p(s[f], u[f], f) : f, s = this.label, g = h.info;
                t.isDatetimeAxis && g && (m = n.dateTimeLabelFormats[g.higherRanks[f] || g.unitName]),
                    this.isFirst = d,
                    this.isLast = v,
                    n = t.labelFormatter.call({
                        axis: t,
                        chart: r,
                        isFirst: d,
                        isLast: v,
                        dateTimeLabelFormat: m,
                        value: t.isLog ? _(a(u)) : u
                    }),
                    f = i && {
                            width: G(1, J(i - 2 * (c.padding || 10))) + "px"
                        },
                    f = e(f, c.style),
                    l(s) ? s && s.attr({
                        text: n
                    }).css(f) : (m = {
                        align: t.labelAlign
                    },
                    o(c.rotation) && (m.rotation = c.rotation),
                    i && c.ellipsis && (m._clipHeight = t.len / h.length),
                        this.label = l(n) && c.enabled ? r.renderer.text(n, 0, 0, c.useHTML).attr(m).css(f).add(t.labelGroup) : null )
            },
            getLabelSize: function() {
                var e = this.label
                    , t = this.axis;
                return e ? (this.labelBBox = e.getBBox())[t.horiz ? "height" : "width"] : 0
            },
            getLabelSides: function() {
                var e = this.axis
                    , t = this.labelBBox.width
                    , e = t * {
                        left: 0,
                        center: .5,
                        right: 1
                    }[e.labelAlign] - e.options.labels.x;
                return [-e, t - e]
            },
            handleOverflow: function(e, t) {
                var n = !0
                    , r = this.axis
                    , i = r.chart
                    , s = this.isFirst
                    , o = this.isLast
                    , u = t.x
                    , a = r.reversed
                    , f = r.tickPositions;
                if (s || o) {
                    var l = this.getLabelSides()
                        , c = l[0]
                        , l = l[1]
                        , i = i.plotLeft
                        , h = i + r.len
                        , f = (r = r.ticks[f[e + (s ? 1 : -1)]]) && r.label.xy && r.label.xy.x + r.getLabelSides()[s ? 0 : 1];
                    s && !a || o && a ? u + c < i && (u = i - c,
                    r && u + l > f && (n = !1)) : u + l > h && (u = h - l,
                    r && u + c < f && (n = !1)),
                        t.x = u
                }
                return n
            },
            getPosition: function(e, t, n, r) {
                var i = this.axis
                    , s = i.chart
                    , o = r && s.oldChartHeight || s.chartHeight;
                return {
                    x: e ? i.translate(t + n, null , null , r) + i.transB : i.left + i.offset + (i.opposite ? (r && s.oldChartWidth || s.chartWidth) - i.right - i.left : 0),
                    y: e ? o - i.bottom + i.offset - (i.opposite ? i.height : 0) : o - i.translate(t + n, null , null , r) - i.transB
                }
            },
            getLabelPosition: function(e, t, n, r, i, s, o, u) {
                var a = this.axis
                    , f = a.transA
                    , c = a.reversed
                    , h = a.staggerLines
                    , p = a.chart.renderer.fontMetrics(i.style.fontSize).b
                    , d = i.rotation
                    , e = e + i.x - (s && r ? s * f * (c ? -1 : 1) : 0)
                    , t = t + i.y - (s && !r ? s * f * (c ? 1 : -1) : 0);
                return d && a.side === 2 && (t -= p - p * et(d * rt)),
                !l(i.y) && !d && (t += p - n.getBBox().height / 2),
                h && (t += o / (u || 1) % h * (a.labelOffset / h)),
                {
                    x: e,
                    y: t
                }
            },
            getMarkPath: function(e, t, n, r, i, s) {
                return s.crispLine(["M", e, t, "L", e + (i ? 0 : -n), t + (i ? n : 0)], r)
            },
            render: function(e, t, n) {
                var r = this.axis
                    , i = r.options
                    , s = r.chart.renderer
                    , o = r.horiz
                    , u = this.type
                    , a = this.label
                    , f = this.pos
                    , l = i.labels
                    , c = this.gridLine
                    , h = u ? u + "Grid" : "grid"
                    , d = u ? u + "Tick" : "tick"
                    , v = i[h + "LineWidth"]
                    , m = i[h + "LineColor"]
                    , g = i[h + "LineDashStyle"]
                    , y = i[d + "Length"]
                    , h = i[d + "Width"] || 0
                    , b = i[d + "Color"]
                    , w = i[d + "Position"]
                    , d = this.mark
                    , E = l.step
                    , S = !0
                    , x = r.tickmarkOffset
                    , T = this.getPosition(o, f, x, t)
                    , N = T.x
                    , T = T.y
                    , C = o && N === r.pos + r.len || !o && T === r.pos ? -1 : 1
                    , k = r.staggerLines;
                this.isActive = !0,
                v && (f = r.getPlotLinePath(f + x, v * C, t, !0),
                c === W && (c = {
                    stroke: m,
                    "stroke-width": v
                },
                g && (c.dashstyle = g),
                u || (c.zIndex = 1),
                t && (c.opacity = 0),
                    this.gridLine = c = v ? s.path(f).attr(c).add(r.gridGroup) : null ),
                !t && c && f && c[this.isNew ? "attr" : "animate"]({
                    d: f,
                    opacity: n
                })),
                h && y && (w === "inside" && (y = -y),
                r.opposite && (y = -y),
                    t = this.getMarkPath(N, T, y, h * C, o, s),
                    d ? d.animate({
                        d: t,
                        opacity: n
                    }) : this.mark = s.path(t).attr({
                        stroke: b,
                        "stroke-width": h,
                        opacity: n
                    }).add(r.axisGroup)),
                a && !isNaN(N) && (a.xy = T = this.getLabelPosition(N, T, a, o, l, x, e, E),
                    this.isFirst && !this.isLast && !p(i.showFirstLabel, 1) || this.isLast && !this.isFirst && !p(i.showLastLabel, 1) ? S = !1 : !k && o && l.overflow === "justify" && !this.handleOverflow(e, T) && (S = !1),
                E && e % E && (S = !1),
                    S && !isNaN(T.y) ? (T.opacity = n,
                        a[this.isNew ? "attr" : "animate"](T),
                        this.isNew = !1) : a.attr("y", -9999))
            },
            destroy: function() {
                A(this, this.axis)
            }
        },
        j.prototype = {
            render: function() {
                var e = this, n = e.axis, r = n.horiz, i = (n.pointRange || 0) / 2, s = e.options, o = s.label, a = e.label, f = s.width, c = s.to, h = s.from, d = l(h) && l(c), v = s.value, m = s.dashStyle, g = e.svgElem, y = [], b, w = s.color, E = s.zIndex, S = s.events, x = n.chart.renderer;
                n.isLog && (h = u(h),
                    c = u(c),
                    v = u(v));
                if (f) {
                    if (y = n.getPlotLinePath(v, f),
                            i = {
                                stroke: w,
                                "stroke-width": f
                            },
                            m)
                        i.dashstyle = m
                } else {
                    if (!d)
                        return;
                    if (h = G(h, n.min - i),
                            c = Y(c, n.max + i),
                            y = n.getPlotBandPath(h, c, s),
                            i = {
                                fill: w
                            },
                            s.borderWidth)
                        i.stroke = s.borderColor,
                            i["stroke-width"] = s.borderWidth
                }
                l(E) && (i.zIndex = E);
                if (g) {
                    if (y)
                        g.animate({
                            d: y
                        }, null , g.onGetPath);
                    else if (g.hide(),
                            g.onGetPath = function() {
                                g.show()
                            }
                            ,
                            a)
                        e.label = a = a.destroy()
                } else if (y && y.length && (e.svgElem = g = x.path(y).attr(i).add(),
                        S))
                    for (b in s = function(t) {
                        g.on(t, function(n) {
                            S[t].apply(e, [n])
                        })
                    }
                        ,
                        S)
                        s(b);
                return o && l(o.text) && y && y.length && n.width > 0 && n.height > 0 ? (o = t({
                    align: r && d && "center",
                    x: r ? !d && 4 : 10,
                    verticalAlign: !r && d && "middle",
                    y: r ? d ? 16 : 10 : d ? 6 : -4,
                    rotation: r && !d && 90
                }, o),
                a || (e.label = a = x.text(o.text, 0, 0, o.useHTML).attr({
                    align: o.textAlign || o.align,
                    rotation: o.rotation,
                    zIndex: E
                }).css(o.style).add()),
                    n = [y[1], y[4], p(y[6], y[1])],
                    y = [y[2], y[5], p(y[7], y[2])],
                    r = k(n),
                    d = k(y),
                    a.align(o, !1, {
                        x: r,
                        y: d,
                        width: L(n) - r,
                        height: L(y) - d
                    }),
                    a.show()) : a && a.hide(),
                    e
            },
            destroy: function() {
                f(this.axis.plotLinesAndBands, this),
                    delete this.axis,
                    A(this)
            }
        },
        F.prototype = {
            destroy: function() {
                A(this, this.axis)
            },
            render: function(e) {
                var t = this.options
                    , n = t.format
                    , n = n ? w(n, this) : t.formatter.call(this);
                this.label ? this.label.attr({
                    text: n,
                    visibility: "hidden"
                }) : this.label = this.axis.chart.renderer.text(n, 0, 0, t.useHTML).css(t.style).attr({
                    align: this.textAlign,
                    rotation: t.rotation,
                    visibility: "hidden"
                }).add(e)
            },
            setOffset: function(e, t) {
                var n = this.axis
                    , r = n.chart
                    , i = r.inverted
                    , s = this.isNegative
                    , o = n.translate(this.percent ? 100 : this.total, 0, 0, 0, 1)
                    , n = n.translate(0)
                    , n = Z(o - n)
                    , u = r.xAxis[0].translate(this.x) + e
                    , a = r.plotHeight
                    , s = {
                    x: i ? s ? o : o - n : u,
                    y: i ? a - u - t : s ? a - o - n : a - o,
                    width: i ? n : t,
                    height: i ? t : n
                };
                if (i = this.label)
                    i.align(this.alignOptions, null , s),
                        s = i.alignAttr,
                        i.attr({
                            visibility: this.options.crop === !1 || r.isInsidePlot(s.x, s.y) ? ht ? "inherit" : "visible" : "hidden"
                        })
            }
        },
        I.prototype = {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L",
                    second: "%H:%M:%S",
                    minute: "%H:%M",
                    hour: "%H:%M",
                    day: "%e. %b",
                    week: "%e. %b",
                    month: "%b '%y",
                    year: "%Y"
                },
                endOnTick: !1,
                gridLineColor: "#C0C0C0",
                labels: Zt,
                lineColor: "#C0D0E0",
                lineWidth: 1,
                minPadding: .01,
                maxPadding: .01,
                minorGridLineColor: "#E0E0E0",
                minorGridLineWidth: 1,
                minorTickColor: "#A0A0A0",
                minorTickLength: 2,
                minorTickPosition: "outside",
                startOfWeek: 1,
                startOnTick: !1,
                tickColor: "#C0D0E0",
                tickLength: 5,
                tickmarkPlacement: "between",
                tickPixelInterval: 100,
                tickPosition: "outside",
                tickWidth: 1,
                title: {
                    align: "middle",
                    style: {
                        color: "#4d759e",
                        fontWeight: "bold"
                    }
                },
                type: "linear"
            },
            defaultYAxisOptions: {
                endOnTick: !0,
                gridLineWidth: 1,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {
                    x: -8,
                    y: 3
                },
                lineWidth: 0,
                maxPadding: .05,
                minPadding: .05,
                startOnTick: !0,
                tickWidth: 0,
                title: {
                    rotation: 270,
                    text: "Values"
                },
                stackLabels: {
                    enabled: !1,
                    formatter: function() {
                        return g(this.total, -1)
                    },
                    style: Zt.style
                }
            },
            defaultLeftAxisOptions: {
                labels: {
                    x: -8,
                    y: null
                },
                title: {
                    rotation: 270
                }
            },
            defaultRightAxisOptions: {
                labels: {
                    x: 8,
                    y: null
                },
                title: {
                    rotation: 90
                }
            },
            defaultBottomAxisOptions: {
                labels: {
                    x: 0,
                    y: 14
                },
                title: {
                    rotation: 0
                }
            },
            defaultTopAxisOptions: {
                labels: {
                    x: 0,
                    y: -5
                },
                title: {
                    rotation: 0
                }
            },
            init: function(e, t) {
                var n = t.isX;
                this.horiz = e.inverted ? !n : n,
                    this.xOrY = (this.isXAxis = n) ? "x" : "y",
                    this.opposite = t.opposite,
                    this.side = this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3,
                    this.setOptions(t);
                var r = this.options
                    , i = r.type;
                this.labelFormatter = r.labels.formatter || this.defaultLabelFormatter,
                    this.userOptions = t,
                    this.minPixelPadding = 0,
                    this.chart = e,
                    this.reversed = r.reversed,
                    this.zoomEnabled = r.zoomEnabled !== !1,
                    this.categories = r.categories || i === "category",
                    this.names = [],
                    this.isLog = i === "logarithmic",
                    this.isDatetimeAxis = i === "datetime",
                    this.isLinked = l(r.linkedTo),
                    this.tickmarkOffset = this.categories && r.tickmarkPlacement === "between" ? .5 : 0,
                    this.ticks = {},
                    this.minorTicks = {},
                    this.plotLinesAndBands = [],
                    this.alternateBands = {},
                    this.len = 0,
                    this.minRange = this.userMinRange = r.minRange || r.maxZoom,
                    this.range = r.range,
                    this.offset = r.offset || 0,
                    this.stacks = {},
                    this.oldStacks = {},
                    this.stackExtremes = {},
                    this.min = this.max = null ;
                var s, r = this.options.events;
                nn(this, e.axes) === -1 && (e.axes.push(this),
                    e[n ? "xAxis" : "yAxis"].push(this)),
                    this.series = this.series || [],
                e.inverted && n && this.reversed === W && (this.reversed = !0),
                    this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
                for (s in r)
                    an(this, s, r[s]);
                this.isLog && (this.val2lin = u,
                    this.lin2val = a)
            },
            setOptions: function(e) {
                this.options = t(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], t(wt[this.isXAxis ? "xAxis" : "yAxis"], e))
            },
            update: function(n, r) {
                var i = this.chart
                    , n = i.options[this.xOrY + "Axis"][this.options.index] = t(this.userOptions, n);
                this.destroy(!0),
                    this._addedPlotLB = this.userMin = this.userMax = W,
                    this.init(i, e(n, {
                        events: W
                    })),
                    i.isDirtyBox = !0,
                p(r, !0) && i.redraw()
            },
            remove: function(e) {
                var t = this.chart
                    , n = this.xOrY + "Axis";
                rn(this.series, function(e) {
                    e.remove(!1)
                }),
                    f(t.axes, this),
                    f(t[n], this),
                    t.options[n].splice(this.options.index, 1),
                    rn(t[n], function(e, t) {
                        e.options.index = t
                    }),
                    this.destroy(),
                    t.isDirtyBox = !0,
                p(e, !0) && t.redraw()
            },
            defaultLabelFormatter: function() {
                var e = this.axis, t = this.value, n = e.categories, r = this.dateTimeLabelFormat, i = wt.lang.numericSymbols, s = i && i.length, o, u = e.options.labels.format, e = e.isLog ? t : e.tickInterval;
                if (u)
                    o = w(u, this);
                else if (n)
                    o = t;
                else if (r)
                    o = Et(r, t);
                else if (s && e >= 1e3)
                    for (; s-- && o === W; )
                        n = Math.pow(1e3, s + 1),
                        e >= n && i[s] !== null  && (o = g(t / n, -1) + i[s]);
                return o === W && (o = t >= 1e3 ? g(t, 0) : g(t, -1)),
                    o
            },
            getSeriesExtremes: function() {
                var e = this
                    , t = e.chart;
                e.hasVisibleSeries = !1,
                    e.dataMin = e.dataMax = null ,
                    e.stackExtremes = {},
                    e.buildStacks(),
                    rn(e.series, function(n) {
                        if (n.visible || !t.options.chart.ignoreHiddenSeries) {
                            var r;
                            r = n.options.threshold;
                            var i;
                            e.hasVisibleSeries = !0,
                            e.isLog && r <= 0 && (r = null );
                            if (e.isXAxis) {
                                if (r = n.xData,
                                        r.length)
                                    e.dataMin = Y(p(e.dataMin, r[0]), k(r)),
                                        e.dataMax = G(p(e.dataMax, r[0]), L(r))
                            } else
                                n.getExtremes(),
                                    i = n.dataMax,
                                    n = n.dataMin,
                                l(n) && l(i) && (e.dataMin = Y(p(e.dataMin, n), n),
                                    e.dataMax = G(p(e.dataMax, i), i)),
                                l(r) && (e.dataMin >= r ? (e.dataMin = r,
                                    e.ignoreMinPadding = !0) : e.dataMax < r && (e.dataMax = r,
                                    e.ignoreMaxPadding = !0))
                        }
                    })
            },
            translate: function(e, t, n, r, i, s) {
                var u = this.len
                    , a = 1
                    , f = 0
                    , l = r ? this.oldTransA : this.transA
                    , r = r ? this.oldMin : this.min
                    , c = this.minPixelPadding
                    , i = (this.options.ordinal || this.isLog && i) && this.lin2val;
                return l || (l = this.transA),
                n && (a *= -1,
                    f = u),
                this.reversed && (a *= -1,
                    f -= a * u),
                    t ? (e = e * a + f,
                        e -= c,
                        e = e / l + r,
                    i && (e = this.lin2val(e))) : (i && (e = this.val2lin(e)),
                    s === "between" && (s = .5),
                        e = a * (e - r) * l + f + a * c + (o(s) ? l * s * this.pointRange : 0)),
                    e
            },
            toPixels: function(e, t) {
                return this.translate(e, !1, !this.horiz, null , !0) + (t ? 0 : this.pos)
            },
            toValue: function(e, t) {
                return this.translate(e - (t ? 0 : this.pos), !0, !this.horiz, null , !0)
            },
            getPlotLinePath: function(e, t, n, r) {
                var i = this.chart, s = this.left, o = this.top, u, a, f, e = this.translate(e, null , null , n), l = n && i.oldChartHeight || i.chartHeight, c = n && i.oldChartWidth || i.chartWidth, h;
                u = this.transB,
                    n = a = J(e + u),
                    u = f = J(l - e - u);
                if (isNaN(e))
                    h = !0;
                else if (this.horiz) {
                    if (u = o,
                            f = l - this.bottom,
                        n < s || n > s + this.width)
                        h = !0
                } else if (n = s,
                        a = c - this.right,
                    u < o || u > o + this.height)
                    h = !0;
                return h && !r ? null  : i.renderer.crispLine(["M", n, u, "L", a, f], t || 0)
            },
            getPlotBandPath: function(e, t) {
                var n = this.getPlotLinePath(t)
                    , r = this.getPlotLinePath(e);
                return r && n ? r.push(n[4], n[5], n[1], n[2]) : r = null ,
                    r
            },
            getLinearTickPositions: function(e, t, n) {
                for (var r, t = _(K(t / e) * e), n = _(Q(n / e) * e), i = []; t <= n; ) {
                    i.push(t),
                        t = _(t + e);
                    if (t === r)
                        break;
                    r = t
                }
                return i
            },
            getLogTickPositions: function(e, t, n, r) {
                var i = this.options
                    , s = this.len
                    , o = [];
                r || (this._minorAutoInterval = null );
                if (e >= .5)
                    e = J(e),
                        o = this.getLinearTickPositions(e, t, n);
                else if (e >= .08)
                    for (var s = K(t), f, l, c, h, d, i = e > .3 ? [1, 2, 4] : e > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; s < n + 1 && !d; s++) {
                        l = i.length;
                        for (f = 0; f < l && !d; f++)
                            c = u(a(s) * i[f]),
                            c > t && (!r || h <= n) && o.push(h),
                            h > n && (d = !0),
                                h = c
                    }
                else if (t = a(t),
                        n = a(n),
                        e = i[r ? "minorTickInterval" : "tickInterval"],
                        e = p(e === "auto" ? null  : e, this._minorAutoInterval, (n - t) * (i.tickPixelInterval / (r ? 5 : 1)) / ((r ? s / this.tickPositions.length : s) || 1)),
                        e = S(e, null , E(e)),
                        o = un(this.getLinearTickPositions(e, t, n), u),
                        !r)
                    this._minorAutoInterval = e / 5;
                return r || (this.tickInterval = e),
                    o
            },
            getMinorTickPositions: function() {
                var e = this.options, t = this.tickPositions, n = this.minorTickInterval, r = [], i;
                if (this.isLog) {
                    i = t.length;
                    for (e = 1; e < i; e++)
                        r = r.concat(this.getLogTickPositions(n, t[e - 1], t[e], !0))
                } else if (this.isDatetimeAxis && e.minorTickInterval === "auto")
                    r = r.concat(T(x(n), this.min, this.max, e.startOfWeek)),
                    r[0] < this.min && r.shift();
                else
                    for (t = this.min + (t[0] - this.min) % n; t <= this.max; t += n)
                        r.push(t);
                return r
            },
            adjustForMinRange: function() {
                var e = this.options, t = this.min, n = this.max, r, i = this.dataMax - this.dataMin >= this.minRange, s, o, u, a, f;
                this.isXAxis && this.minRange === W && !this.isLog && (l(e.min) || l(e.max) ? this.minRange = null  : (rn(this.series, function(e) {
                    a = e.xData;
                    for (o = f = e.xIncrement ? 1 : a.length - 1; o > 0; o--)
                        if (u = a[o] - a[o - 1],
                            s === W || u < s)
                            s = u
                }),
                    this.minRange = Y(s * 5, this.dataMax - this.dataMin)));
                if (n - t < this.minRange) {
                    var c = this.minRange;
                    r = (c - n + t) / 2,
                        r = [t - r, p(e.min, t - r)],
                    i && (r[2] = this.dataMin),
                        t = L(r),
                        n = [t + c, p(e.max, t + c)],
                    i && (n[2] = this.dataMax),
                        n = k(n),
                    n - t < c && (r[0] = n - c,
                        r[1] = p(e.min, n - c),
                        t = L(r))
                }
                this.min = t,
                    this.max = n
            },
            setAxisTranslation: function(e) {
                var t = this.max - this.min, n = 0, i, s = 0, o = 0, u = this.linkedParent, a = this.transA;
                this.isXAxis && (u ? (s = u.minPointOffset,
                    o = u.pointRangePadding) : rn(this.series, function(e) {
                    var u = e.pointRange
                        , a = e.options.pointPlacement
                        , f = e.closestPointRange;
                    u > t && (u = 0),
                        n = G(n, u),
                        s = G(s, r(a) ? 0 : u / 2),
                        o = G(o, a === "on" ? 0 : u),
                    !e.noSharedTooltip && l(f) && (i = l(i) ? Y(i, f) : f)
                }),
                    u = this.ordinalSlope && i ? this.ordinalSlope / i : 1,
                    this.minPointOffset = s *= u,
                    this.pointRangePadding = o *= u,
                    this.pointRange = Y(n, t),
                    this.closestPointRange = i),
                e && (this.oldTransA = a),
                    this.translationSlope = this.transA = a = this.len / (t + o || 1),
                    this.transB = this.horiz ? this.left : this.bottom,
                    this.minPixelPadding = a * s
            },
            setTickPositions: function(e) {
                var t = this, n = t.chart, r = t.options, i = t.isLog, s = t.isDatetimeAxis, o = t.isXAxis, a = t.isLinked, f = t.options.tickPositioner, c = r.maxPadding, h = r.minPadding, d = r.tickInterval, v = r.minTickInterval, m = r.tickPixelInterval, g, y = t.categories;
                a ? (t.linkedParent = n[o ? "xAxis" : "yAxis"][r.linkedTo],
                    n = t.linkedParent.getExtremes(),
                    t.min = p(n.min, n.dataMin),
                    t.max = p(n.max, n.dataMax),
                r.type !== t.linkedParent.options.type && M(11, 1)) : (t.min = p(t.userMin, r.min, t.dataMin),
                    t.max = p(t.userMax, r.max, t.dataMax)),
                i && (!e && Y(t.min, p(t.dataMin, t.min)) <= 0 && M(10, 1),
                    t.min = _(u(t.min)),
                    t.max = _(u(t.max))),
                t.range && (t.userMin = t.min = G(t.min, t.max - t.range),
                    t.userMax = t.max,
                    e) && (t.range = null ),
                t.beforePadding && t.beforePadding(),
                    t.adjustForMinRange(),
                !y && !t.usePercentage && !a && l(t.min) && l(t.max) && (n = t.max - t.min) && (!l(r.min) && !l(t.userMin) && h && (t.dataMin < 0 || !t.ignoreMinPadding) && (t.min -= n * h),
                !l(r.max) && !l(t.userMax) && c && (t.dataMax > 0 || !t.ignoreMaxPadding) && (t.max += n * c)),
                    t.min === t.max || t.min === void 0 || t.max === void 0 ? t.tickInterval = 1 : a && !d && m === t.linkedParent.options.tickPixelInterval ? t.tickInterval = t.linkedParent.tickInterval : (t.tickInterval = p(d, y ? 1 : (t.max - t.min) * m / G(t.len, m)),
                    !l(d) && t.len < m && !this.isRadial && (g = !0,
                        t.tickInterval /= 4)),
                o && !e && rn(t.series, function(e) {
                    e.processData(t.min !== t.oldMin || t.max !== t.oldMax)
                }),
                    t.setAxisTranslation(!0),
                t.beforeSetTickPositions && t.beforeSetTickPositions(),
                t.postProcessTickInterval && (t.tickInterval = t.postProcessTickInterval(t.tickInterval)),
                t.pointRange && (t.tickInterval = G(t.pointRange, t.tickInterval)),
                !d && t.tickInterval < v && (t.tickInterval = v),
                !s && !i && !d && (t.tickInterval = S(t.tickInterval, null , E(t.tickInterval), r)),
                    t.minorTickInterval = r.minorTickInterval === "auto" && t.tickInterval ? t.tickInterval / 5 : r.minorTickInterval,
                    t.tickPositions = e = r.tickPositions ? [].concat(r.tickPositions) : f && f.apply(t, [t.min, t.max]),
                e || (!t.ordinalPositions && (t.max - t.min) / t.tickInterval > G(2 * t.len, 200) && M(19, !0),
                    e = s ? (t.getNonLinearTimeTicks || T)(x(t.tickInterval, r.units), t.min, t.max, r.startOfWeek, t.ordinalPositions, t.closestPointRange, !0) : i ? t.getLogTickPositions(t.tickInterval, t.min, t.max) : t.getLinearTickPositions(t.tickInterval, t.min, t.max),
                g && e.splice(1, e.length - 2),
                    t.tickPositions = e),
                a || (i = e[0],
                    s = e[e.length - 1],
                    a = t.minPointOffset || 0,
                    r.startOnTick ? t.min = i : t.min - a > i && e.shift(),
                    r.endOnTick ? t.max = s : t.max + a < s && e.pop(),
                e.length === 1 && (t.min -= .001,
                    t.max += .001))
            },
            setMaxTicks: function() {
                var e = this.chart
                    , t = e.maxTicks || {}
                    , n = this.tickPositions
                    , r = this._maxTicksKey = [this.xOrY, this.pos, this.len].join("-");
                !this.isLinked && !this.isDatetimeAxis && n && n.length > (t[r] || 0) && this.options.alignTicks !== !1 && (t[r] = n.length),
                    e.maxTicks = t
            },
            adjustTickAmount: function() {
                var e = this._maxTicksKey
                    , t = this.tickPositions
                    , n = this.chart.maxTicks;
                if (n && n[e] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1) {
                    var r = this.tickAmount
                        , i = t.length;
                    this.tickAmount = e = n[e];
                    if (i < e) {
                        for (; t.length < e; )
                            t.push(_(t[t.length - 1] + this.tickInterval));
                        this.transA *= (i - 1) / (e - 1),
                            this.max = t[t.length - 1]
                    }
                    l(r) && e !== r && (this.isDirty = !0)
                }
            },
            setScale: function() {
                var e = this.stacks, t, n, r, i;
                this.oldMin = this.min,
                    this.oldMax = this.max,
                    this.oldAxisLength = this.len,
                    this.setAxisSize(),
                    i = this.len !== this.oldAxisLength,
                    rn(this.series, function(e) {
                        if (e.isDirtyData || e.isDirty || e.xAxis.isDirty)
                            r = !0
                    });
                if (i || r || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                    if (!this.isXAxis)
                        for (t in e)
                            for (n in e[t])
                                e[t][n].total = null ,
                                    e[t][n].cum = 0;
                    this.forceRedraw = !1,
                        this.getSeriesExtremes(),
                        this.setTickPositions(),
                        this.oldUserMin = this.userMin,
                        this.oldUserMax = this.userMax,
                    this.isDirty || (this.isDirty = i || this.min !== this.oldMin || this.max !== this.oldMax)
                } else if (!this.isXAxis) {
                    this.oldStacks && (e = this.stacks = this.oldStacks);
                    for (t in e)
                        for (n in e[t])
                            e[t][n].cum = e[t][n].total
                }
                this.setMaxTicks()
            },
            setExtremes: function(t, n, r, i, s) {
                var o = this
                    , u = o.chart
                    , r = p(r, !0)
                    , s = e(s, {
                    min: t,
                    max: n
                });
                ln(o, "setExtremes", s, function() {
                    o.userMin = t,
                        o.userMax = n,
                        o.eventArgs = s,
                        o.isDirtyExtremes = !0,
                    r && u.redraw(i)
                })
            },
            zoom: function(e, t) {
                return this.allowZoomOutside || (l(this.dataMin) && e <= this.dataMin && (e = W),
                l(this.dataMax) && t >= this.dataMax && (t = W)),
                    this.displayBtn = e !== W || t !== W,
                    this.setExtremes(e, t, !1, W, {
                        trigger: "zoom"
                    }),
                    !0
            },
            setAxisSize: function() {
                var e = this.chart, t = this.options, n = t.offsetLeft || 0, r = t.offsetRight || 0, i = this.horiz, s, o;
                this.left = o = p(t.left, e.plotLeft + n),
                    this.top = s = p(t.top, e.plotTop),
                    this.width = n = p(t.width, e.plotWidth - n + r),
                    this.height = t = p(t.height, e.plotHeight),
                    this.bottom = e.chartHeight - t - s,
                    this.right = e.chartWidth - n - o,
                    this.len = G(i ? n : t, 0),
                    this.pos = i ? o : s
            },
            getExtremes: function() {
                var e = this.isLog;
                return {
                    min: e ? _(a(this.min)) : this.min,
                    max: e ? _(a(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax
                }
            },
            getThreshold: function(e) {
                var t = this.isLog
                    , n = t ? a(this.min) : this.min
                    , t = t ? a(this.max) : this.max;
                return n > e || e === null  ? e = n : t < e && (e = t),
                    this.translate(e, 0, 1, 0, 1)
            },
            addPlotBand: function(e) {
                this.addPlotBandOrLine(e, "plotBands")
            },
            addPlotLine: function(e) {
                this.addPlotBandOrLine(e, "plotLines")
            },
            addPlotBandOrLine: function(e, t) {
                var n = (new j(this,e)).render()
                    , r = this.userOptions;
                return n && (t && (r[t] = r[t] || [],
                    r[t].push(e)),
                    this.plotLinesAndBands.push(n)),
                    n
            },
            autoLabelAlign: function(e) {
                return e = (p(e, 0) - this.side * 90 + 720) % 360,
                    e > 15 && e < 165 ? "right" : e > 195 && e < 345 ? "left" : "center"
            },
            getOffset: function() {
                var e = this, t = e.chart, n = t.renderer, r = e.options, i = e.tickPositions, s = e.ticks, o = e.horiz, u = e.side, a = t.inverted ? [1, 0, 3, 2][u] : u, f, c = 0, h, d = 0, v = r.title, m = r.labels, g = 0, y = t.axisOffset, b = t.clipOffset, w = [-1, 1, 1, -1][u], E, S = 1, x = p(m.maxStaggerLines, 5), T, N, C, k;
                e.hasData = f = e.hasVisibleSeries || l(e.min) && l(e.max) && !!i,
                    e.showAxis = t = f || p(r.showEmpty, !0),
                    e.staggerLines = e.horiz && m.staggerLines,
                e.axisGroup || (e.gridGroup = n.g("grid").attr({
                    zIndex: r.gridZIndex || 1
                }).add(),
                    e.axisGroup = n.g("axis").attr({
                        zIndex: r.zIndex || 2
                    }).add(),
                    e.labelGroup = n.g("axis-labels").attr({
                        zIndex: m.zIndex || 7
                    }).add());
                if (f || e.isLinked) {
                    e.labelAlign = p(m.align || e.autoLabelAlign(m.rotation)),
                        rn(i, function(t) {
                            s[t] ? s[t].addLabel() : s[t] = new B(e,t)
                        });
                    if (e.horiz && !e.staggerLines && x && !m.rotation) {
                        for (E = e.reversed ? [].concat(i).reverse() : i; S < x; ) {
                            f = [],
                                T = !1;
                            for (m = 0; m < E.length; m++)
                                N = E[m],
                                    C = (C = s[N].label && s[N].label.getBBox()) ? C.width : 0,
                                    k = m % S,
                                C && (N = e.translate(N),
                                f[k] !== W && N < f[k] && (T = !0),
                                    f[k] = N + C);
                            if (!T)
                                break;
                            S++
                        }
                        S > 1 && (e.staggerLines = S)
                    }
                    rn(i, function(t) {
                        if (u === 0 || u === 2 || {
                                1: "left",
                                3: "right"
                            }[u] === e.labelAlign)
                            g = G(s[t].getLabelSize(), g)
                    }),
                    e.staggerLines && (g *= e.staggerLines,
                        e.labelOffset = g)
                } else
                    for (E in s)
                        s[E].destroy(),
                            delete s[E];
                v && v.text && v.enabled !== !1 && (e.axisTitle || (e.axisTitle = n.text(v.text, 0, 0, v.useHTML).attr({
                    zIndex: 7,
                    rotation: v.rotation || 0,
                    align: v.textAlign || {
                        low: "left",
                        middle: "center",
                        high: "right"
                    }[v.align]
                }).css(v.style).add(e.axisGroup),
                    e.axisTitle.isNew = !0),
                t && (c = e.axisTitle.getBBox()[o ? "height" : "width"],
                    d = p(v.margin, o ? 5 : 10),
                    h = v.offset),
                    e.axisTitle[t ? "show" : "hide"]()),
                    e.offset = w * p(r.offset, y[u]),
                    e.axisTitleMargin = p(h, g + d + (u !== 2 && g && w * r.labels[o ? "y" : "x"])),
                    y[u] = G(y[u], e.axisTitleMargin + c + w * e.offset),
                    b[a] = G(b[a], K(r.lineWidth / 2) * 2)
            },
            getLinePath: function(e) {
                var t = this.chart
                    , n = this.opposite
                    , r = this.offset
                    , i = this.horiz
                    , s = this.left + (n ? this.width : 0) + r
                    , r = t.chartHeight - this.bottom - (n ? this.height : 0) + r;
                return n && (e *= -1),
                    t.renderer.crispLine(["M", i ? this.left : s, i ? r : this.top, "L", i ? t.chartWidth - this.right : s, i ? r : t.chartHeight - this.bottom], e)
            },
            getTitlePosition: function() {
                var e = this.horiz
                    , t = this.left
                    , r = this.top
                    , i = this.len
                    , s = this.options.title
                    , o = e ? t : r
                    , u = this.opposite
                    , a = this.offset
                    , f = n(s.style.fontSize || 12)
                    , i = {
                    low: o + (e ? 0 : i),
                    middle: o + i / 2,
                    high: o + (e ? i : 0)
                }[s.align]
                    , t = (e ? r + this.height : t) + (e ? 1 : -1) * (u ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? f : 0);
                return {
                    x: e ? i : t + (u ? this.width : 0) + a + (s.x || 0),
                    y: e ? t - (u ? this.height : 0) + a : i + (s.y || 0)
                }
            },
            render: function() {
                var e = this, t = e.chart, n = t.renderer, r = e.options, i = e.isLog, s = e.isLinked, o = e.tickPositions, u = e.axisTitle, f = e.stacks, c = e.ticks, h = e.minorTicks, p = e.alternateBands, d = r.stackLabels, v = r.alternateGridColor, m = e.tickmarkOffset, g = r.lineWidth, y, b = t.hasRendered && l(e.oldMin) && !isNaN(e.oldMin);
                y = e.hasData;
                var w = e.showAxis, E, S;
                rn([c, h, p], function(e) {
                    for (var t in e)
                        e[t].isActive = !1
                });
                if (y || s)
                    if (e.minorTickInterval && !e.categories && rn(e.getMinorTickPositions(), function(t) {
                            h[t] || (h[t] = new B(e,t,"minor")),
                            b && h[t].isNew && h[t].render(null , !0),
                                h[t].render(null , !1, 1)
                        }),
                        o.length && (rn(o.slice(1).concat([o[0]]), function(t, n) {
                            n = n === o.length - 1 ? 0 : n + 1;
                            if (!s || t >= e.min && t <= e.max)
                                c[t] || (c[t] = new B(e,t)),
                                b && c[t].isNew && c[t].render(n, !0),
                                    c[t].render(n, !1, 1)
                        }),
                        m && e.min === 0 && (c[-1] || (c[-1] = new B(e,-1,null ,!0)),
                            c[-1].render(-1))),
                        v && rn(o, function(t, n) {
                            n % 2 === 0 && t < e.max && (p[t] || (p[t] = new j(e)),
                                E = t + m,
                                S = o[n + 1] !== W ? o[n + 1] + m : e.max,
                                p[t].options = {
                                    from: i ? a(E) : E,
                                    to: i ? a(S) : S,
                                    color: v
                                },
                                p[t].render(),
                                p[t].isActive = !0)
                        }),
                            !e._addedPlotLB)
                        rn((r.plotLines || []).concat(r.plotBands || []), function(t) {
                            e.addPlotBandOrLine(t)
                        }),
                            e._addedPlotLB = !0;
                rn([c, h, p], function(e) {
                    var n, r, i = [], s = St ? St.duration || 500 : 0, o = function() {
                            for (r = i.length; r--; )
                                e[i[r]] && !e[i[r]].isActive && (e[i[r]].destroy(),
                                    delete e[i[r]])
                        }
                        ;
                    for (n in e)
                        e[n].isActive || (e[n].render(n, !1, 0),
                            e[n].isActive = !1,
                            i.push(n));
                    e === p || !t.hasRendered || !s ? o() : s && setTimeout(o, s)
                }),
                g && (y = e.getLinePath(g),
                    e.axisLine ? e.axisLine.animate({
                        d: y
                    }) : e.axisLine = n.path(y).attr({
                        stroke: r.lineColor,
                        "stroke-width": g,
                        zIndex: 7
                    }).add(e.axisGroup),
                    e.axisLine[w ? "show" : "hide"]()),
                u && w && (u[u.isNew ? "attr" : "animate"](e.getTitlePosition()),
                    u.isNew = !1);
                if (d && d.enabled) {
                    var x, T, r = e.stackTotalGroup;
                    r || (e.stackTotalGroup = r = n.g("stack-labels").attr({
                        visibility: "visible",
                        zIndex: 6
                    }).add()),
                        r.translate(t.plotLeft, t.plotTop);
                    for (x in f)
                        for (T in n = f[x],
                            n)
                            n[T].render(r)
                }
                e.isDirty = !1
            },
            removePlotBandOrLine: function(e) {
                for (var t = this.plotLinesAndBands, n = this.options, r = this.userOptions, i = t.length; i--; )
                    t[i].id === e && t[i].destroy();
                rn([n.plotLines || [], r.plotLines || [], n.plotBands || [], r.plotBands || []], function(t) {
                    for (i = t.length; i--; )
                        t[i].id === e && f(t, t[i])
                })
            },
            setTitle: function(e, t) {
                this.update({
                    title: e
                }, t)
            },
            redraw: function() {
                var e = this.chart.pointer;
                e.reset && e.reset(!0),
                    this.render(),
                    rn(this.plotLinesAndBands, function(e) {
                        e.render()
                    }),
                    rn(this.series, function(e) {
                        e.isDirty = !0
                    })
            },
            buildStacks: function() {
                var e = this.series
                    , t = e.length;
                if (!this.isXAxis) {
                    for (; t--; )
                        e[t].setStackedPoints();
                    if (this.usePercentage)
                        for (t = 0; t < e.length; t++)
                            e[t].setPercentStacks()
                }
            },
            setCategories: function(e, t) {
                this.update({
                    categories: e
                }, t)
            },
            destroy: function(e) {
                var t = this, n = t.stacks, r, i = t.plotLinesAndBands;
                e || fn(t);
                for (r in n)
                    A(n[r]),
                        n[r] = null ;
                rn([t.ticks, t.minorTicks, t.alternateBands], function(e) {
                    A(e)
                });
                for (e = i.length; e--; )
                    i[e].destroy();
                rn("stackTotalGroup,axisLine,axisGroup,gridGroup,labelGroup,axisTitle".split(","), function(e) {
                    t[e] && (t[e] = t[e].destroy())
                })
            }
        },
        q.prototype = {
            init: function(e, t) {
                var r = t.borderWidth
                    , i = t.style
                    , s = n(i.padding);
                this.chart = e,
                    this.options = t,
                    this.crosshairs = [],
                    this.now = {
                        x: 0,
                        y: 0
                    },
                    this.isHidden = !0,
                    this.label = e.renderer.label("", 0, 0, t.shape, null , null , t.useHTML, null , "tooltip").attr({
                        padding: s,
                        fill: t.backgroundColor,
                        "stroke-width": r,
                        r: t.borderRadius,
                        zIndex: 8
                    }).css(i).css({
                        padding: 0
                    }).add().attr({
                        y: -999
                    }),
                dt || this.label.shadow(t.shadow),
                    this.shared = t.shared
            },
            destroy: function() {
                rn(this.crosshairs, function(e) {
                    e && e.destroy()
                }),
                this.label && (this.label = this.label.destroy()),
                    clearTimeout(this.hideTimer),
                    clearTimeout(this.tooltipTimeout)
            },
            move: function(t, n, r, i) {
                var s = this
                    , o = s.now
                    , u = s.options.animation !== !1 && !s.isHidden;
                e(o, {
                    x: u ? (2 * o.x + t) / 3 : t,
                    y: u ? (o.y + n) / 2 : n,
                    anchorX: u ? (2 * o.anchorX + r) / 3 : r,
                    anchorY: u ? (o.anchorY + i) / 2 : i
                }),
                    s.label.attr(o),
                u && (Z(t - o.x) > 1 || Z(n - o.y) > 1) && (clearTimeout(this.tooltipTimeout),
                    this.tooltipTimeout = setTimeout(function() {
                        s && s.move(t, n, r, i)
                    }, 32))
            },
            hide: function() {
                var e = this, t;
                clearTimeout(this.hideTimer),
                this.isHidden || (t = this.chart.hoverPoints,
                    this.hideTimer = setTimeout(function() {
                        e.label.fadeOut(),
                            e.isHidden = !0
                    }, p(this.options.hideDelay, 500)),
                t && rn(t, function(e) {
                    e.setState()
                }),
                    this.chart.hoverPoints = null )
            },
            hideCrosshairs: function() {
                rn(this.crosshairs, function(e) {
                    e && e.hide()
                })
            },
            getAnchor: function(e, t) {
                var n, r = this.chart, i = r.inverted, s = r.plotTop, o = 0, u = 0, a, e = h(e);
                return n = e[0].tooltipPos,
                this.followPointer && t && (t.chartX === W && (t = r.pointer.normalize(t)),
                    n = [t.chartX - r.plotLeft, t.chartY - s]),
                n || (rn(e, function(e) {
                    a = e.series.yAxis,
                        o += e.plotX,
                        u += (e.plotLow ? (e.plotLow + e.plotHigh) / 2 : e.plotY) + (!i && a ? a.top - s : 0)
                }),
                    o /= e.length,
                    u /= e.length,
                    n = [i ? r.plotWidth - u : o, this.shared && !i && e.length > 1 && t ? t.chartY - s : i ? r.plotHeight - o : u]),
                    un(n, J)
            },
            getPosition: function(e, t, n) {
                var r = this.chart, i = r.plotLeft, s = r.plotTop, o = r.plotWidth, u = r.plotHeight, a = p(this.options.distance, 12), f = n.plotX, n = n.plotY, r = f + i + (r.inverted ? a : -e - a), l = n - t + s + 15, c;
                return r < 7 && (r = i + G(f, 0) + a),
                r + e > i + o && (r -= r + e - (i + o),
                    l = n - t + s - a,
                    c = !0),
                l < s + 5 && (l = s + 5,
                c && n >= l && n <= l + t && (l = n + s + a)),
                l + t > s + u && (l = G(s, s + u - t - a)),
                {
                    x: r,
                    y: l
                }
            },
            defaultFormatter: function(e) {
                var t = this.points || h(this), n = t[0].series, r;
                return r = [n.tooltipHeaderFormatter(t[0])],
                    rn(t, function(e) {
                        n = e.series,
                            r.push(n.tooltipFormatter && n.tooltipFormatter(e) || e.point.tooltipFormatter(n.tooltipOptions.pointFormat))
                    }),
                    r.push(e.options.footerFormat || ""),
                    r.join("")
            },
            refresh: function(e, t) {
                var n = this.chart, r = this.label, i = this.options, s, o, a = {}, f, l = [];
                f = i.formatter || this.defaultFormatter;
                var a = n.hoverPoints, c, d = i.crosshairs, v = this.shared;
                clearTimeout(this.hideTimer),
                    this.followPointer = h(e)[0].series.tooltipOptions.followPointer,
                    o = this.getAnchor(e, t),
                    s = o[0],
                    o = o[1],
                    v && (!e.series || !e.series.noSharedTooltip) ? (n.hoverPoints = e,
                    a && rn(a, function(e) {
                        e.setState()
                    }),
                        rn(e, function(e) {
                            e.setState("hover"),
                                l.push(e.getLabelConfig())
                        }),
                        a = {
                            x: e[0].category,
                            y: e[0].y
                        },
                        a.points = l,
                        e = e[0]) : a = e.getLabelConfig(),
                    f = f.call(a, this),
                    a = e.series,
                    f === !1 ? this.hide() : (this.isHidden && (pn(r),
                        r.attr("opacity", 1).show()),
                        r.attr({
                            text: f
                        }),
                        c = i.borderColor || e.color || a.color || "#606060",
                        r.attr({
                            stroke: c
                        }),
                        this.updatePosition({
                            plotX: s,
                            plotY: o
                        }),
                        this.isHidden = !1);
                if (d) {
                    d = h(d);
                    for (r = d.length; r--; )
                        if (v = e.series,
                                i = v[r ? "yAxis" : "xAxis"],
                            d[r] && i)
                            (a = r ? p(e.stackY, e.y) : e.x,
                            i.isLog && (a = u(a)),
                            r === 1 && v.modifyValue && (a = v.modifyValue(a)),
                                i = i.getPlotLinePath(a, 1),
                                this.crosshairs[r]) ? this.crosshairs[r].attr({
                                d: i,
                                visibility: "visible"
                            }) : (a = {
                                "stroke-width": d[r].width || 1,
                                stroke: d[r].color || "#C0C0C0",
                                zIndex: d[r].zIndex || 2
                            },
                            d[r].dashStyle && (a.dashstyle = d[r].dashStyle),
                                this.crosshairs[r] = n.renderer.path(i).attr(a).add())
                }
                ln(n, "tooltipRefresh", {
                    text: f,
                    x: s + n.plotLeft,
                    y: o + n.plotTop,
                    borderColor: c
                })
            },
            updatePosition: function(e) {
                var t = this.chart
                    , n = this.label
                    , n = (this.options.positioner || this.getPosition).call(this, n.width, n.height, e);
                this.move(J(n.x), J(n.y), e.plotX + t.plotLeft, e.plotY + t.plotTop)
            }
        },
        R.prototype = {
            init: function(e, t) {
                var n = t.chart, r = n.events, i = dt ? "" : n.zoomType, n = e.inverted, s;
                this.options = t,
                    this.chart = e,
                    this.zoomX = s = /x/.test(i),
                    this.zoomY = i = /y/.test(i),
                    this.zoomHor = s && !n || i && n,
                    this.zoomVert = i && !n || s && n,
                    this.runChartClick = r && !!r.click,
                    this.pinchDown = [],
                    this.lastValidTouch = {},
                t.tooltip.enabled && (e.tooltip = new q(e,t.tooltip)),
                    this.setDOMEvents()
            },
            normalize: function(t, n) {
                var r, i, t = t || V.event;
                return t.target || (t.target = t.srcElement),
                    t = cn(t),
                    i = t.touches ? t.touches.item(0) : t,
                n || (this.chartPosition = n = on(this.chart.container)),
                    i.pageX === W ? (r = G(t.x, t.clientX - n.left),
                        i = t.y) : (r = i.pageX - n.left,
                        i = i.pageY - n.top),
                    e(t, {
                        chartX: J(r),
                        chartY: J(i)
                    })
            },
            getCoordinates: function(e) {
                var t = {
                    xAxis: [],
                    yAxis: []
                };
                return rn(this.chart.axes, function(n) {
                    t[n.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: n,
                        value: n.toValue(e[n.horiz ? "chartX" : "chartY"])
                    })
                }),
                    t
            },
            getIndex: function(e) {
                var t = this.chart;
                return t.inverted ? t.plotHeight + t.plotTop - e.chartY : e.chartX - t.plotLeft
            },
            runPointActions: function(e) {
                var t = this.chart, n = t.series, r = t.tooltip, i, s = t.hoverPoint, o = t.hoverSeries, u, a, f = t.chartWidth, l = this.getIndex(e);
                if (r && this.options.tooltip.shared && (!o || !o.noSharedTooltip)) {
                    i = [],
                        u = n.length;
                    for (a = 0; a < u; a++)
                        n[a].visible && n[a].options.enableMouseTracking !== !1 && !n[a].noSharedTooltip && n[a].tooltipPoints.length && (t = n[a].tooltipPoints[l]) && t.series && (t._dist = Z(l - t.clientX),
                            f = Y(f, t._dist),
                            i.push(t));
                    for (u = i.length; u--; )
                        i[u]._dist > f && i.splice(u, 1);
                    i.length && i[0].clientX !== this.hoverX && (r.refresh(i, e),
                        this.hoverX = i[0].clientX)
                }
                o && o.tracker ? (t = o.tooltipPoints[l]) && t !== s && t.onMouseOver(e) : r && r.followPointer && !r.isHidden && (e = r.getAnchor([{}], e),
                    r.updatePosition({
                        plotX: e[0],
                        plotY: e[1]
                    }))
            },
            reset: function(e) {
                var t = this.chart
                    , n = t.hoverSeries
                    , r = t.hoverPoint
                    , i = t.tooltip
                    , t = i && i.shared ? t.hoverPoints : r;
                (e = e && i && t) && h(t)[0].plotX === W && (e = !1),
                    e ? i.refresh(t) : (r && r.onMouseOut(),
                    n && n.onMouseOut(),
                    i && (i.hide(),
                        i.hideCrosshairs()),
                        this.hoverX = null )
            },
            scaleGroups: function(e, t) {
                var n = this.chart, r;
                rn(n.series, function(i) {
                    r = e || i.getPlotBox(),
                    i.xAxis && i.xAxis.zoomEnabled && (i.group.attr(r),
                    i.markerGroup && (i.markerGroup.attr(r),
                        i.markerGroup.clip(t ? n.clipRect : null )),
                    i.dataLabelsGroup && i.dataLabelsGroup.attr(r))
                }),
                    n.clipRect.attr(t || n.clipBox)
            },
            pinchTranslate: function(e, t, n, r, i, s, o, u) {
                e && this.pinchTranslateDirection(!0, n, r, i, s, o, u),
                t && this.pinchTranslateDirection(!1, n, r, i, s, o, u)
            },
            pinchTranslateDirection: function(e, t, n, r, i, s, o, u) {
                var a = this.chart, f = e ? "x" : "y", l = e ? "X" : "Y", c = "chart" + l, h = e ? "width" : "height", p = a["plot" + (e ? "Left" : "Top")], d, v, m = u || 1, g = a.inverted, y = a.bounds[e ? "h" : "v"], b = t.length === 1, w = t[0][c], E = n[0][c], S = !b && t[1][c], x = !b && n[1][c], T, n = function() {
                        !b && Z(w - S) > 20 && (m = u || Z(E - x) / Z(w - S)),
                            v = (p - E) / m + w,
                            d = a["plot" + (e ? "Width" : "Height")] / m
                    }
                    ;
                n(),
                    t = v,
                    t < y.min ? (t = y.min,
                        T = !0) : t + d > y.max && (t = y.max - d,
                        T = !0),
                    T ? (E -= .8 * (E - o[f][0]),
                    b || (x -= .8 * (x - o[f][1])),
                        n()) : o[f] = [E, x],
                g || (s[f] = v - p,
                    s[h] = d),
                    s = g ? 1 / m : m,
                    i[h] = d,
                    i[f] = t,
                    r[g ? e ? "scaleY" : "scaleX" : "scale" + l] = m,
                    r["translate" + l] = s * p + (E - s * w)
            },
            pinch: function(t) {
                var n = this
                    , r = n.chart
                    , i = n.pinchDown
                    , s = r.tooltip && r.tooltip.options.followTouchMove
                    , o = t.touches
                    , u = o.length
                    , a = n.lastValidTouch
                    , f = n.zoomHor || n.pinchHor
                    , l = n.zoomVert || n.pinchVert
                    , c = f || l
                    , h = n.selectionMarker
                    , p = {}
                    , d = u === 1 && (n.inClass(t.target, "highcharts-tracker") && r.runTrackerClick || r.runChartClick)
                    , v = {};
                (c || s) && !d && t.preventDefault(),
                    un(o, function(e) {
                        return n.normalize(e)
                    }),
                    t.type === "touchstart" ? (rn(o, function(e, t) {
                        i[t] = {
                            chartX: e.chartX,
                            chartY: e.chartY
                        }
                    }),
                        a.x = [i[0].chartX, i[1] && i[1].chartX],
                        a.y = [i[0].chartY, i[1] && i[1].chartY],
                        rn(r.axes, function(e) {
                            if (e.zoomEnabled) {
                                var t = r.bounds[e.horiz ? "h" : "v"]
                                    , n = e.minPixelPadding
                                    , i = e.toPixels(e.dataMin)
                                    , s = e.toPixels(e.dataMax)
                                    , o = Y(i, s)
                                    , i = G(i, s);
                                t.min = Y(e.pos, o - n),
                                    t.max = G(e.pos + e.len, i + n)
                            }
                        })) : i.length && (h || (n.selectionMarker = h = e({
                        destroy: Nt
                    }, r.plotBox)),
                        n.pinchTranslate(f, l, i, o, p, h, v, a),
                        n.hasPinched = c,
                        n.scaleGroups(p, v),
                    !c && s && u === 1 && this.runPointActions(n.normalize(t)))
            },
            dragStart: function(e) {
                var t = this.chart;
                t.mouseIsDown = e.type,
                    t.cancelClick = !1,
                    t.mouseDownX = this.mouseDownX = e.chartX,
                    t.mouseDownY = this.mouseDownY = e.chartY
            },
            drag: function(e) {
                var t = this.chart, n = t.options.chart, r = e.chartX, i = e.chartY, s = this.zoomHor, o = this.zoomVert, u = t.plotLeft, a = t.plotTop, f = t.plotWidth, l = t.plotHeight, c, h = this.mouseDownX, p = this.mouseDownY;
                r < u ? r = u : r > u + f && (r = u + f),
                    i < a ? i = a : i > a + l && (i = a + l),
                    this.hasDragged = Math.sqrt(Math.pow(h - r, 2) + Math.pow(p - i, 2)),
                this.hasDragged > 10 && (c = t.isInsidePlot(h - u, p - a),
                t.hasCartesianSeries && (this.zoomX || this.zoomY) && c && !this.selectionMarker && (this.selectionMarker = t.renderer.rect(u, a, s ? 1 : f, o ? 1 : l, 0).attr({
                    fill: n.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add()),
                this.selectionMarker && s && (r -= h,
                    this.selectionMarker.attr({
                        width: Z(r),
                        x: (r > 0 ? 0 : r) + h
                    })),
                this.selectionMarker && o && (r = i - p,
                    this.selectionMarker.attr({
                        height: Z(r),
                        y: (r > 0 ? 0 : r) + p
                    })),
                c && !this.selectionMarker && n.panning && t.pan(e, n.panning))
            },
            drop: function(t) {
                var n = this.chart
                    , r = this.hasPinched;
                if (this.selectionMarker) {
                    var i = {
                        xAxis: [],
                        yAxis: [],
                        originalEvent: t.originalEvent || t
                    }, s = this.selectionMarker, o = s.x, u = s.y, a;
                    if (this.hasDragged || r)
                        rn(n.axes, function(e) {
                            if (e.zoomEnabled) {
                                var t = e.horiz
                                    , n = e.toValue(t ? o : u)
                                    , t = e.toValue(t ? o + s.width : u + s.height);
                                !isNaN(n) && !isNaN(t) && (i[e.xOrY + "Axis"].push({
                                    axis: e,
                                    min: Y(n, t),
                                    max: G(n, t)
                                }),
                                    a = !0)
                            }
                        }),
                        a && ln(n, "selection", i, function(t) {
                            n.zoom(e(t, r ? {
                                animation: !1
                            } : null ))
                        });
                    this.selectionMarker = this.selectionMarker.destroy(),
                    r && this.scaleGroups()
                }
                n && (d(n.container, {
                    cursor: n._cursor
                }),
                    n.cancelClick = this.hasDragged > 10,
                    n.mouseIsDown = this.hasDragged = this.hasPinched = !1,
                    this.pinchDown = [])
            },
            onContainerMouseDown: function(e) {
                e = this.normalize(e),
                e.preventDefault && e.preventDefault(),
                    this.dragStart(e)
            },
            onDocumentMouseUp: function(e) {
                this.drop(e)
            },
            onDocumentMouseMove: function(e) {
                var t = this.chart
                    , n = this.chartPosition
                    , r = t.hoverSeries
                    , e = this.normalize(e, n);
                n && r && !this.inClass(e.target, "highcharts-tracker") && !t.isInsidePlot(e.chartX - t.plotLeft, e.chartY - t.plotTop) && this.reset()
            },
            onContainerMouseLeave: function() {
                this.reset(),
                    this.chartPosition = null
            },
            onContainerMouseMove: function(e) {
                var t = this.chart
                    , e = this.normalize(e);
                e.returnValue = !1,
                t.mouseIsDown === "mousedown" && this.drag(e),
                (this.inClass(e.target, "highcharts-tracker") || t.isInsidePlot(e.chartX - t.plotLeft, e.chartY - t.plotTop)) && !t.openMenu && this.runPointActions(e)
            },
            inClass: function(e, t) {
                for (var n; e; ) {
                    if (n = c(e, "class")) {
                        if (n.indexOf(t) !== -1)
                            return !0;
                        if (n.indexOf("highcharts-container") !== -1)
                            return !1
                    }
                    e = e.parentNode
                }
            },
            onTrackerMouseOut: function(e) {
                var t = this.chart.hoverSeries;
                t && !t.options.stickyTracking && !this.inClass(e.toElement || e.relatedTarget, "highcharts-tooltip") && t.onMouseOut()
            },
            onContainerClick: function(t) {
                var n = this.chart, r = n.hoverPoint, i = n.plotLeft, s = n.plotTop, o = n.inverted, u, a, f, t = this.normalize(t);
                t.cancelBubble = !0,
                n.cancelClick || (r && this.inClass(t.target, "highcharts-tracker") ? (u = this.chartPosition,
                    a = r.plotX,
                    f = r.plotY,
                    e(r, {
                        pageX: u.left + i + (o ? n.plotWidth - f : a),
                        pageY: u.top + s + (o ? n.plotHeight - a : f)
                    }),
                    ln(r.series, "click", e(t, {
                        point: r
                    })),
                n.hoverPoint && r.firePointEvent("click", t)) : (e(t, this.getCoordinates(t)),
                n.isInsidePlot(t.chartX - i, t.chartY - s) && ln(n, "click", t)))
            },
            onContainerTouchStart: function(e) {
                var t = this.chart;
                e.touches.length === 1 ? (e = this.normalize(e),
                    t.isInsidePlot(e.chartX - t.plotLeft, e.chartY - t.plotTop) ? (this.runPointActions(e),
                        this.pinch(e)) : this.reset()) : e.touches.length === 2 && this.pinch(e)
            },
            onContainerTouchMove: function(e) {
                (e.touches.length === 1 || e.touches.length === 2) && this.pinch(e)
            },
            onDocumentTouchEnd: function(e) {
                this.drop(e)
            },
            setDOMEvents: function() {
                var e = this, t = e.chart.container, n;
                this._events = n = [[t, "onmousedown", "onContainerMouseDown"], [t, "onmousemove", "onContainerMouseMove"], [t, "onclick", "onContainerClick"], [t, "mouseleave", "onContainerMouseLeave"], [X, "mousemove", "onDocumentMouseMove"], [X, "mouseup", "onDocumentMouseUp"]],
                mt && n.push([t, "ontouchstart", "onContainerTouchStart"], [t, "ontouchmove", "onContainerTouchMove"], [X, "touchend", "onDocumentTouchEnd"]),
                    rn(n, function(t) {
                        e["_" + t[2]] = function(n) {
                            e[t[2]](n)
                        }
                            ,
                            t[1].indexOf("on") === 0 ? t[0][t[1]] = e["_" + t[2]] : an(t[0], t[1], e["_" + t[2]])
                    })
            },
            destroy: function() {
                var e = this;
                rn(e._events, function(t) {
                    t[1].indexOf("on") === 0 ? t[0][t[1]] = null  : fn(t[0], t[1], e["_" + t[2]])
                }),
                    delete e._events,
                    clearInterval(e.tooltipTimeout)
            }
        },
        U.prototype = {
            init: function(e, r) {
                var i = this
                    , s = r.itemStyle
                    , o = p(r.padding, 8)
                    , u = r.itemMarginTop || 0;
                this.options = r,
                r.enabled && (i.baseline = n(s.fontSize) + 3 + u,
                    i.itemStyle = s,
                    i.itemHiddenStyle = t(s, r.itemHiddenStyle),
                    i.itemMarginTop = u,
                    i.padding = o,
                    i.initialItemX = o,
                    i.initialItemY = o - 5,
                    i.maxItemWidth = 0,
                    i.chart = e,
                    i.itemHeight = 0,
                    i.lastLineHeight = 0,
                    i.render(),
                    an(i.chart, "endResize", function() {
                        i.positionCheckboxes()
                    }))
            },
            colorizeItem: function(e, t) {
                var n = this.options, r = e.legendItem, i = e.legendLine, s = e.legendSymbol, o = this.itemHiddenStyle.color, n = t ? n.itemStyle.color : o, u = t ? e.color : o, o = e.options && e.options.marker, a = {
                    stroke: u,
                    fill: u
                }, f;
                r && r.css({
                    fill: n,
                    color: n
                }),
                i && i.attr({
                    stroke: u
                });
                if (s) {
                    if (o && s.isMarker)
                        for (f in o = e.convertAttribs(o),
                            o)
                            r = o[f],
                            r !== W && (a[f] = r);
                    s.attr(a)
                }
            },
            positionItem: function(e) {
                var t = this.options
                    , n = t.symbolPadding
                    , t = !t.rtl
                    , r = e._legendItemPos
                    , i = r[0]
                    , r = r[1]
                    , s = e.checkbox;
                e.legendGroup && e.legendGroup.translate(t ? i : this.legendWidth - i - 2 * n - 4, r),
                s && (s.x = i,
                    s.y = r)
            },
            destroyItem: function(e) {
                var t = e.checkbox;
                rn(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(t) {
                    e[t] && (e[t] = e[t].destroy())
                }),
                t && O(e.checkbox)
            },
            destroy: function() {
                var e = this.group
                    , t = this.box;
                t && (this.box = t.destroy()),
                e && (this.group = e.destroy())
            },
            positionCheckboxes: function(e) {
                var t = this.group.alignAttr, n, r = this.clipHeight || this.legendHeight;
                t && (n = t.translateY,
                    rn(this.allItems, function(i) {
                        var s = i.checkbox, o;
                        s && (o = n + s.y + (e || 0) + 3,
                            d(s, {
                                left: t.translateX + i.legendItemWidth + s.x - 20 + "px",
                                top: o + "px",
                                display: o > n - 6 && o < n + r - 6 ? "" : Lt
                            }))
                    }))
            },
            renderTitle: function() {
                var e = this.padding
                    , t = this.options.title
                    , n = 0;
                t.text && (this.title || (this.title = this.chart.renderer.label(t.text, e - 3, e - 4, null , null , null , null , null , "legend-title").attr({
                    zIndex: 1
                }).css(t.style).add(this.group)),
                    e = this.title.getBBox(),
                    n = e.height,
                    this.offsetWidth = e.width,
                    this.contentGroup.attr({
                        translateY: n
                    })),
                    this.titleHeight = n
            },
            renderItem: function(e) {
                var n, r = this, i = r.chart, s = i.renderer, o = r.options, u = o.layout === "horizontal", a = o.symbolWidth, f = o.symbolPadding, l = r.itemStyle, c = r.itemHiddenStyle, h = r.padding, d = u ? p(o.itemDistance, 8) : 0, m = !o.rtl, g = o.width, y = o.itemMarginBottom || 0, b = r.itemMarginTop, E = r.initialItemX, S = e.legendItem, x = e.series || e, T = x.options, N = T.showCheckbox, C = o.useHTML;
                !S && (e.legendGroup = s.g("legend-item").attr({
                    zIndex: 1
                }).add(r.scrollGroup),
                    x.drawLegendSymbol(r, e),
                    e.legendItem = S = s.text(o.labelFormat ? w(o.labelFormat, e) : o.labelFormatter.call(e), m ? a + f : -f, r.baseline, C).css(t(e.visible ? l : c)).attr({
                        align: m ? "left" : "right",
                        zIndex: 2
                    }).add(e.legendGroup),
                    (C ? S : e.legendGroup).on("mouseover", function() {
                        e.setState("hover"),
                            S.css(r.options.itemHoverStyle)
                    }).on("mouseout", function() {
                        S.css(e.visible ? l : c),
                            e.setState()
                    }).on("click", function(t) {
                        var n = function() {
                            e.setVisible()
                        }
                            , t = {
                            browserEvent: t
                        };
                        e.firePointEvent ? e.firePointEvent("legendItemClick", t, n) : ln(e, "legendItemClick", t, n)
                    }),
                    r.colorizeItem(e, e.visible),
                T && N) && (e.checkbox = v("input", {
                    type: "checkbox",
                    checked: e.selected,
                    defaultChecked: e.selected
                }, o.itemCheckboxStyle, i.container),
                    an(e.checkbox, "click", function(t) {
                        ln(e, "checkboxClick", {
                            checked: t.target.checked
                        }, function() {
                            e.select()
                        })
                    })),
                    s = S.getBBox(),
                    n = e.legendItemWidth = o.itemWidth || a + f + s.width + d + (N ? 20 : 0),
                    o = n,
                    r.itemHeight = a = s.height,
                u && r.itemX - E + o > (g || i.chartWidth - 2 * h - E) && (r.itemX = E,
                    r.itemY += b + r.lastLineHeight + y,
                    r.lastLineHeight = 0),
                    r.maxItemWidth = G(r.maxItemWidth, o),
                    r.lastItemY = b + r.itemY + y,
                    r.lastLineHeight = G(a, r.lastLineHeight),
                    e._legendItemPos = [r.itemX, r.itemY],
                    u ? r.itemX += o : (r.itemY += b + a + y,
                        r.lastLineHeight = a),
                    r.offsetWidth = g || G((u ? r.itemX - E - d : o) + h, r.offsetWidth)
            },
            render: function() {
                var t = this, n = t.chart, r = n.renderer, i = t.group, s, o, u, a, f = t.box, l = t.options, c = t.padding, h = l.borderWidth, d = l.backgroundColor;
                t.itemX = t.initialItemX,
                    t.itemY = t.initialItemY,
                    t.offsetWidth = 0,
                    t.lastItemY = 0,
                i || (t.group = i = r.g("legend").attr({
                    zIndex: 7
                }).add(),
                    t.contentGroup = r.g().attr({
                        zIndex: 1
                    }).add(i),
                    t.scrollGroup = r.g().add(t.contentGroup)),
                    t.renderTitle(),
                    s = [],
                    rn(n.series, function(e) {
                        var t = e.options;
                        p(t.showInLegend, t.linkedTo === W ? W : !1, !0) && (s = s.concat(e.legendItems || (t.legendType === "point" ? e.data : e)))
                    }),
                    C(s, function(e, t) {
                        return (e.options && e.options.legendIndex || 0) - (t.options && t.options.legendIndex || 0)
                    }),
                l.reversed && s.reverse(),
                    t.allItems = s,
                    t.display = o = !!s.length,
                    rn(s, function(e) {
                        t.renderItem(e)
                    }),
                    u = l.width || t.offsetWidth,
                    a = t.lastItemY + t.lastLineHeight + t.titleHeight,
                    a = t.handleOverflow(a);
                if (h || d)
                    u += c,
                        a += c,
                        f ? u > 0 && a > 0 && (f[f.isNew ? "attr" : "animate"](f.crisp(null , null , null , u, a)),
                            f.isNew = !1) : (t.box = f = r.rect(0, 0, u, a, l.borderRadius, h || 0).attr({
                            stroke: l.borderColor,
                            "stroke-width": h || 0,
                            fill: d || Lt
                        }).add(i).shadow(l.shadow),
                            f.isNew = !0),
                        f[o ? "show" : "hide"]();
                t.legendWidth = u,
                    t.legendHeight = a,
                    rn(s, function(e) {
                        t.positionItem(e)
                    }),
                o && i.align(e({
                    width: u,
                    height: a
                }, l), !0, "spacingBox"),
                n.isResizing || this.positionCheckboxes()
            },
            handleOverflow: function(e) {
                var t = this
                    , n = this.chart
                    , r = n.renderer
                    , i = this.options
                    , s = i.y
                    , s = n.spacingBox.height + (i.verticalAlign === "top" ? -s : s) - this.padding
                    , o = i.maxHeight
                    , u = this.clipRect
                    , a = i.navigation
                    , f = p(a.animation, !0)
                    , l = a.arrowSize || 12
                    , c = this.nav;
                return i.layout === "horizontal" && (s /= 2),
                o && (s = Y(s, o)),
                    e > s && !i.useHTML ? (this.clipHeight = n = s - 20 - this.titleHeight,
                        this.pageCount = Q(e / n),
                        this.currentPage = p(this.currentPage, 1),
                        this.fullHeight = e,
                    u || (u = t.clipRect = r.clipRect(0, 0, 9999, 0),
                        t.contentGroup.clip(u)),
                        u.attr({
                            height: n
                        }),
                    c || (this.nav = c = r.g().attr({
                        zIndex: 1
                    }).add(this.group),
                        this.up = r.symbol("triangle", 0, 0, l, l).on("click", function() {
                            t.scroll(-1, f)
                        }).add(c),
                        this.pager = r.text("", 15, 10).css(a.style).add(c),
                        this.down = r.symbol("triangle-down", 0, 0, l, l).on("click", function() {
                            t.scroll(1, f)
                        }).add(c)),
                        t.scroll(0),
                        e = s) : c && (u.attr({
                        height: n.chartHeight
                    }),
                        c.hide(),
                        this.scrollGroup.attr({
                            translateY: 1
                        }),
                        this.clipHeight = 0),
                    e
            },
            scroll: function(e, t) {
                var n = this.pageCount
                    , r = this.currentPage + e
                    , i = this.clipHeight
                    , s = this.options.navigation
                    , o = s.activeColor
                    , u = s.inactiveColor
                    , s = this.pager
                    , a = this.padding;
                r > n && (r = n),
                r > 0 && (t !== W && D(t, this.chart),
                    this.nav.attr({
                        translateX: a,
                        translateY: i + 7 + this.titleHeight,
                        visibility: "visible"
                    }),
                    this.up.attr({
                        fill: r === 1 ? u : o
                    }).css({
                        cursor: r === 1 ? "default" : "pointer"
                    }),
                    s.attr({
                        text: r + "/" + this.pageCount
                    }),
                    this.down.attr({
                        x: 18 + this.pager.getBBox().width,
                        fill: r === n ? u : o
                    }).css({
                        cursor: r === n ? "default" : "pointer"
                    }),
                    i = -Y(i * (r - 1), this.fullHeight - i + a) + 1,
                    this.scrollGroup.animate({
                        translateY: i
                    }),
                    s.attr({
                        text: r + "/" + n
                    }),
                    this.currentPage = r,
                    this.positionCheckboxes(i))
            }
        },
    /Trident\/7\.0/.test(it) && b(U.prototype, "positionItem", function(e, t) {
        var n = this
            , r = function() {
                e.call(n, t)
            }
            ;
        n.chart.renderer.forExport ? r() : setTimeout(r)
    }),
        z.prototype = {
            init: function(e, n) {
                var r, i = e.series;
                e.series = null ,
                    r = t(wt, e),
                    r.series = e.series = i,
                    i = r.chart,
                    this.margin = this.splashArray("margin", i),
                    this.spacing = this.splashArray("spacing", i);
                var s = i.events;
                this.bounds = {
                    h: {},
                    v: {}
                },
                    this.callback = n,
                    this.isResizing = 0,
                    this.options = r,
                    this.axes = [],
                    this.series = [],
                    this.hasCartesianSeries = i.showAxes;
                var o = this, u;
                o.index = Ct.length,
                    Ct.push(o),
                i.reflow !== !1 && an(o, "load", function() {
                    o.initReflow()
                });
                if (s)
                    for (u in s)
                        an(o, u, s[u]);
                o.xAxis = [],
                    o.yAxis = [],
                    o.animation = dt ? !1 : p(i.animation, !0),
                    o.pointCount = 0,
                    o.counters = new N,
                    o.firstRender()
            },
            initSeries: function(e) {
                var t = this.options.chart;
                return (t = Gt[e.type || t.type || t.defaultSeriesType]) || M(17, !0),
                    t = new t,
                    t.init(this, e),
                    t
            },
            addSeries: function(e, t, n) {
                var r, i = this;
                return e && (t = p(t, !0),
                    ln(i, "addSeries", {
                        options: e
                    }, function() {
                        r = i.initSeries(e),
                            i.isDirtyLegend = !0,
                            i.linkSeries(),
                        t && i.redraw(n)
                    })),
                    r
            },
            addAxis: function(e, n, r, i) {
                var s = n ? "xAxis" : "yAxis"
                    , o = this.options;
                new I(this,t(e, {
                    index: this[s].length,
                    isX: n
                })),
                    o[s] = h(o[s] || {}),
                    o[s].push(e),
                p(r, !0) && this.redraw(i)
            },
            isInsidePlot: function(e, t, n) {
                var r = n ? t : e
                    , e = n ? e : t;
                return r >= 0 && r <= this.plotWidth && e >= 0 && e <= this.plotHeight
            },
            adjustTickAmounts: function() {
                this.options.chart.alignTicks !== !1 && rn(this.axes, function(e) {
                    e.adjustTickAmount()
                }),
                    this.maxTicks = null
            },
            redraw: function(t) {
                var n = this.axes, r = this.series, i = this.pointer, s = this.legend, o = this.isDirtyLegend, u, a, f = this.isDirtyBox, l = r.length, c = l, h = this.renderer, p = h.isHidden(), d = [];
                D(t, this),
                p && this.cloneRenderTo();
                for (this.layOutTitles(); c--; )
                    if (t = r[c],
                        t.options.stacking && (u = !0,
                            t.isDirty)) {
                        a = !0;
                        break
                    }
                if (a)
                    for (c = l; c--; )
                        if (t = r[c],
                                t.options.stacking)
                            t.isDirty = !0;
                rn(r, function(e) {
                    e.isDirty && e.options.legendType === "point" && (o = !0)
                }),
                o && s.options.enabled && (s.render(),
                    this.isDirtyLegend = !1),
                u && this.getStacks(),
                this.hasCartesianSeries && (this.isResizing || (this.maxTicks = null ,
                    rn(n, function(e) {
                        e.setScale()
                    })),
                    this.adjustTickAmounts(),
                    this.getMargins(),
                    rn(n, function(e) {
                        e.isDirty && (f = !0)
                    }),
                    rn(n, function(t) {
                        t.isDirtyExtremes && (t.isDirtyExtremes = !1,
                            d.push(function() {
                                ln(t, "afterSetExtremes", e(t.eventArgs, t.getExtremes())),
                                    delete t.eventArgs
                            })),
                        (f || u) && t.redraw()
                    })),
                f && this.drawChartBox(),
                    rn(r, function(e) {
                        e.isDirty && e.visible && (!e.isCartesian || e.xAxis) && e.redraw()
                    }),
                i && i.reset && i.reset(!0),
                    h.draw(),
                    ln(this, "redraw"),
                p && this.cloneRenderTo(!0),
                    rn(d, function(e) {
                        e.call()
                    })
            },
            showLoading: function(t) {
                var n = this.options
                    , r = this.loadingDiv
                    , i = n.loading;
                r || (this.loadingDiv = r = v(kt, {
                    className: "highcharts-loading"
                }, e(i.style, {
                    zIndex: 10,
                    display: Lt
                }), this.container),
                    this.loadingSpan = v("span", null , i.labelStyle, r)),
                    this.loadingSpan.innerHTML = t || n.lang.loading,
                this.loadingShown || (d(r, {
                    opacity: 0,
                    display: "",
                    left: this.plotLeft + "px",
                    top: this.plotTop + "px",
                    width: this.plotWidth + "px",
                    height: this.plotHeight + "px"
                }),
                    hn(r, {
                        opacity: i.style.opacity
                    }, {
                        duration: i.showDuration || 0
                    }),
                    this.loadingShown = !0)
            },
            hideLoading: function() {
                var e = this.options
                    , t = this.loadingDiv;
                t && hn(t, {
                    opacity: 0
                }, {
                    duration: e.loading.hideDuration || 100,
                    complete: function() {
                        d(t, {
                            display: Lt
                        })
                    }
                }),
                    this.loadingShown = !1
            },
            get: function(e) {
                var t = this.axes, n = this.series, r, i;
                for (r = 0; r < t.length; r++)
                    if (t[r].options.id === e)
                        return t[r];
                for (r = 0; r < n.length; r++)
                    if (n[r].options.id === e)
                        return n[r];
                for (r = 0; r < n.length; r++) {
                    i = n[r].points || [];
                    for (t = 0; t < i.length; t++)
                        if (i[t].id === e)
                            return i[t]
                }
                return null
            },
            getAxes: function() {
                var e = this
                    , t = this.options
                    , n = t.xAxis = h(t.xAxis || {})
                    , t = t.yAxis = h(t.yAxis || {});
                rn(n, function(e, t) {
                    e.index = t,
                        e.isX = !0
                }),
                    rn(t, function(e, t) {
                        e.index = t
                    }),
                    n = n.concat(t),
                    rn(n, function(t) {
                        new I(e,t)
                    }),
                    e.adjustTickAmounts()
            },
            getSelectedPoints: function() {
                var e = [];
                return rn(this.series, function(t) {
                    e = e.concat(sn(t.points || [], function(e) {
                        return e.selected
                    }))
                }),
                    e
            },
            getSelectedSeries: function() {
                return sn(this.series, function(e) {
                    return e.selected
                })
            },
            getStacks: function() {
                var e = this;
                rn(e.yAxis, function(e) {
                    e.stacks && e.hasVisibleSeries && (e.oldStacks = e.stacks)
                }),
                    rn(e.series, function(t) {
                        t.options.stacking && (t.visible === !0 || e.options.chart.ignoreHiddenSeries === !1) && (t.stackKey = t.type + p(t.options.stack, ""))
                    })
            },
            showResetZoom: function() {
                var e = this
                    , t = wt.lang
                    , n = e.options.chart.resetZoomButton
                    , r = n.theme
                    , i = r.states
                    , s = n.relativeTo === "chart" ? null  : "plotBox";
                this.resetZoomButton = e.renderer.button(t.resetZoom, null , null , function() {
                    e.zoomOut()
                }, r, i && i.hover).attr({
                    align: n.position.align,
                    title: t.resetZoomTitle
                }).add().align(n.position, !1, s)
            },
            zoomOut: function() {
                var e = this;
                ln(e, "selection", {
                    resetSelection: !0
                }, function() {
                    e.zoom()
                })
            },
            zoom: function(e) {
                var t, n = this.pointer, r = !1, s;
                !e || e.resetSelection ? rn(this.axes, function(e) {
                    t = e.zoom()
                }) : rn(e.xAxis.concat(e.yAxis), function(e) {
                    var i = e.axis
                        , s = i.isXAxis;
                    if (n[s ? "zoomX" : "zoomY"] || n[s ? "pinchX" : "pinchY"])
                        t = i.zoom(e.min, e.max),
                        i.displayBtn && (r = !0)
                }),
                    s = this.resetZoomButton,
                    r && !s ? this.showResetZoom() : !r && i(s) && (this.resetZoomButton = s.destroy()),
                t && this.redraw(p(this.options.chart.animation, e && e.animation, this.pointCount < 100))
            },
            pan: function(e, t) {
                var n = this, r = n.hoverPoints, i;
                r && rn(r, function(e) {
                    e.setState()
                }),
                    rn(t === "xy" ? [1, 0] : [1], function(t) {
                        var r = e[t ? "chartX" : "chartY"]
                            , s = n[t ? "xAxis" : "yAxis"][0]
                            , o = n[t ? "mouseDownX" : "mouseDownY"]
                            , u = (s.pointRange || 0) / 2
                            , a = s.getExtremes()
                            , f = s.toValue(o - r, !0) + u
                            , o = s.toValue(o + n[t ? "plotWidth" : "plotHeight"] - r, !0) - u;
                        s.series.length && f > Y(a.dataMin, a.min) && o < G(a.dataMax, a.max) && (s.setExtremes(f, o, !1, !1, {
                            trigger: "pan"
                        }),
                            i = !0),
                            n[t ? "mouseDownX" : "mouseDownY"] = r
                    }),
                i && n.redraw(!1),
                    d(n.container, {
                        cursor: "move"
                    })
            },
            setTitle: function(e, n) {
                var r, i = this, s = i.options, o;
                o = s.title = t(s.title, e),
                    r = s.subtitle = t(s.subtitle, n),
                    s = r,
                    rn([["title", e, o], ["subtitle", n, s]], function(e) {
                        var t = e[0]
                            , n = i[t]
                            , r = e[1]
                            , e = e[2];
                        n && r && (i[t] = n = n.destroy()),
                        e && e.text && !n && (i[t] = i.renderer.text(e.text, 0, 0, e.useHTML).attr({
                            align: e.align,
                            "class": "highcharts-" + t,
                            zIndex: e.zIndex || 4
                        }).css(e.style).add())
                    }),
                    i.layOutTitles()
            },
            layOutTitles: function() {
                var t = 0
                    , n = this.title
                    , r = this.subtitle
                    , i = this.options
                    , s = i.title
                    , i = i.subtitle
                    , o = this.spacingBox.width - 44;
                n && (n.css({
                    width: (s.width || o) + "px"
                }).align(e({
                    y: 15
                }, s), !1, "spacingBox"),
                !s.floating && !s.verticalAlign) && (t = n.getBBox().height,
                t >= 18 && t <= 25 && (t = 15)),
                r && (r.css({
                    width: (i.width || o) + "px"
                }).align(e({
                    y: t + s.margin
                }, i), !1, "spacingBox"),
                !i.floating && !i.verticalAlign && (t = Q(t + r.getBBox().height))),
                    this.titleOffset = t
            },
            getChartSize: function() {
                var e = this.options.chart
                    , t = this.renderToClone || this.renderTo;
                this.containerWidth = en(t, "width"),
                    this.containerHeight = en(t, "height"),
                    this.chartWidth = G(0, e.width || this.containerWidth || 600),
                    this.chartHeight = G(0, p(e.height, this.containerHeight > 19 ? this.containerHeight : 400))
            },
            cloneRenderTo: function(e) {
                var t = this.renderToClone
                    , n = this.container;
                e ? t && (this.renderTo.appendChild(n),
                    O(t),
                    delete this.renderToClone) : (n && n.parentNode === this.renderTo && this.renderTo.removeChild(n),
                    this.renderToClone = t = this.renderTo.cloneNode(0),
                    d(t, {
                        position: "absolute",
                        top: "-9999px",
                        display: "block"
                    }),
                    X.body.appendChild(t),
                n && t.appendChild(n))
            },
            getContainer: function() {
                var t, i = this.options.chart, s, o, u;
                this.renderTo = t = i.renderTo,
                    u = "highcharts-" + yt++,
                r(t) && (this.renderTo = t = X.getElementById(t)),
                t || M(13, !0),
                    s = n(c(t, "data-highcharts-chart")),
                !isNaN(s) && Ct[s] && Ct[s].destroy(),
                    c(t, "data-highcharts-chart", this.index),
                    t.innerHTML = "",
                t.offsetWidth || this.cloneRenderTo(),
                    this.getChartSize(),
                    s = this.chartWidth,
                    o = this.chartHeight,
                    this.container = t = v(kt, {
                        className: "highcharts-container" + (i.className ? " " + i.className : ""),
                        id: u
                    }, e({
                        position: "relative",
                        overflow: "hidden",
                        width: s + "px",
                        height: o + "px",
                        textAlign: "left",
                        lineHeight: "normal",
                        zIndex: 0,
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                    }, i.style), this.renderToClone || t),
                    this._cursor = t.style.cursor,
                    this.renderer = i.forExport ? new bn(t,s,o,!0) : new vt(t,s,o),
                dt && this.renderer.create(this, t, s, o)
            },
            getMargins: function() {
                var e = this.spacing, t, n = this.legend, r = this.margin, i = this.options.legend, s = p(i.margin, 10), o = i.x, u = i.y, a = i.align, f = i.verticalAlign, c = this.titleOffset;
                this.resetMargins(),
                    t = this.axisOffset,
                c && !l(r[0]) && (this.plotTop = G(this.plotTop, c + this.options.title.margin + e[0])),
                n.display && !i.floating && (a === "right" ? l(r[1]) || (this.marginRight = G(this.marginRight, n.legendWidth - o + s + e[1])) : a === "left" ? l(r[3]) || (this.plotLeft = G(this.plotLeft, n.legendWidth + o + s + e[3])) : f === "top" ? l(r[0]) || (this.plotTop = G(this.plotTop, n.legendHeight + u + s + e[0])) : f === "bottom" && !l(r[2]) && (this.marginBottom = G(this.marginBottom, n.legendHeight - u + s + e[2]))),
                this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin),
                this.extraTopMargin && (this.plotTop += this.extraTopMargin),
                this.hasCartesianSeries && rn(this.axes, function(e) {
                    e.getOffset()
                }),
                l(r[3]) || (this.plotLeft += t[3]),
                l(r[0]) || (this.plotTop += t[0]),
                l(r[2]) || (this.marginBottom += t[2]),
                l(r[1]) || (this.marginRight += t[1]),
                    this.setChartSize()
            },
            initReflow: function() {
                function e(e) {
                    var s = n.width || en(r, "width")
                        , o = n.height || en(r, "height")
                        , e = e ? e.target : V;
                    if (!t.hasUserSize && s && o && (e === V || e === X)) {
                        if (s !== t.containerWidth || o !== t.containerHeight)
                            clearTimeout(i),
                                t.reflowTimeout = i = setTimeout(function() {
                                    t.container && (t.setSize(s, o, !1),
                                        t.hasUserSize = null )
                                }, 100);
                        t.containerWidth = s,
                            t.containerHeight = o
                    }
                }
                var t = this, n = t.options.chart, r = t.renderTo, i;
                t.reflow = e,
                    an(V, "resize", e),
                    an(t, "destroy", function() {
                        fn(V, "resize", e)
                    })
            },
            setSize: function(e, t, n) {
                var r = this, i, s, o;
                r.isResizing += 1,
                    o = function() {
                        r && ln(r, "endResize", null , function() {
                            r.isResizing -= 1
                        })
                    }
                    ,
                    D(n, r),
                    r.oldChartHeight = r.chartHeight,
                    r.oldChartWidth = r.chartWidth,
                l(e) && (r.chartWidth = i = G(0, J(e)),
                    r.hasUserSize = !!i),
                l(t) && (r.chartHeight = s = G(0, J(t))),
                    d(r.container, {
                        width: i + "px",
                        height: s + "px"
                    }),
                    r.setChartSize(!0),
                    r.renderer.setSize(i, s, n),
                    r.maxTicks = null ,
                    rn(r.axes, function(e) {
                        e.isDirty = !0,
                            e.setScale()
                    }),
                    rn(r.series, function(e) {
                        e.isDirty = !0
                    }),
                    r.isDirtyLegend = !0,
                    r.isDirtyBox = !0,
                    r.getMargins(),
                    r.redraw(n),
                    r.oldChartHeight = null ,
                    ln(r, "resize"),
                    St === !1 ? o() : setTimeout(o, St && St.duration || 500)
            },
            setChartSize: function(e) {
                var t = this.inverted, n = this.renderer, r = this.chartWidth, i = this.chartHeight, s = this.options.chart, o = this.spacing, u = this.clipOffset, a, f, l, c;
                this.plotLeft = a = J(this.plotLeft),
                    this.plotTop = f = J(this.plotTop),
                    this.plotWidth = l = G(0, J(r - a - this.marginRight)),
                    this.plotHeight = c = G(0, J(i - f - this.marginBottom)),
                    this.plotSizeX = t ? c : l,
                    this.plotSizeY = t ? l : c,
                    this.plotBorderWidth = s.plotBorderWidth || 0,
                    this.spacingBox = n.spacingBox = {
                        x: o[3],
                        y: o[0],
                        width: r - o[3] - o[1],
                        height: i - o[0] - o[2]
                    },
                    this.plotBox = n.plotBox = {
                        x: a,
                        y: f,
                        width: l,
                        height: c
                    },
                    r = 2 * K(this.plotBorderWidth / 2),
                    t = Q(G(r, u[3]) / 2),
                    n = Q(G(r, u[0]) / 2),
                    this.clipBox = {
                        x: t,
                        y: n,
                        width: K(this.plotSizeX - G(r, u[1]) / 2 - t),
                        height: K(this.plotSizeY - G(r, u[2]) / 2 - n)
                    },
                e || rn(this.axes, function(e) {
                    e.setAxisSize(),
                        e.setAxisTranslation()
                })
            },
            resetMargins: function() {
                var e = this.spacing
                    , t = this.margin;
                this.plotTop = p(t[0], e[0]),
                    this.marginRight = p(t[1], e[1]),
                    this.marginBottom = p(t[2], e[2]),
                    this.plotLeft = p(t[3], e[3]),
                    this.axisOffset = [0, 0, 0, 0],
                    this.clipOffset = [0, 0, 0, 0]
            },
            drawChartBox: function() {
                var e = this.options.chart, t = this.renderer, n = this.chartWidth, r = this.chartHeight, i = this.chartBackground, s = this.plotBackground, o = this.plotBorder, u = this.plotBGImage, a = e.borderWidth || 0, f = e.backgroundColor, l = e.plotBackgroundColor, c = e.plotBackgroundImage, h = e.plotBorderWidth || 0, p, d = this.plotLeft, v = this.plotTop, m = this.plotWidth, g = this.plotHeight, y = this.plotBox, b = this.clipRect, w = this.clipBox;
                p = a + (e.shadow ? 8 : 0);
                if (a || f)
                    i ? i.animate(i.crisp(null , null , null , n - p, r - p)) : (i = {
                        fill: f || Lt
                    },
                    a && (i.stroke = e.borderColor,
                        i["stroke-width"] = a),
                        this.chartBackground = t.rect(p / 2, p / 2, n - p, r - p, e.borderRadius, a).attr(i).add().shadow(e.shadow));
                l && (s ? s.animate(y) : this.plotBackground = t.rect(d, v, m, g, 0).attr({
                    fill: l
                }).add().shadow(e.plotShadow)),
                c && (u ? u.animate(y) : this.plotBGImage = t.image(c, d, v, m, g).add()),
                    b ? b.animate({
                        width: w.width,
                        height: w.height
                    }) : this.clipRect = t.clipRect(w),
                h && (o ? o.animate(o.crisp(null , d, v, m, g)) : this.plotBorder = t.rect(d, v, m, g, 0, -h).attr({
                    stroke: e.plotBorderColor,
                    "stroke-width": h,
                    zIndex: 1
                }).add()),
                    this.isDirtyBox = !1
            },
            propFromSeries: function() {
                var e = this, t = e.options.chart, n, r = e.options.series, i, s;
                rn(["inverted", "angular", "polar"], function(o) {
                    n = Gt[t.type || t.defaultSeriesType],
                        s = e[o] || t[o] || n && n.prototype[o];
                    for (i = r && r.length; !s && i--; )
                        (n = Gt[r[i].type]) && n.prototype[o] && (s = !0);
                    e[o] = s
                })
            },
            linkSeries: function() {
                var e = this
                    , t = e.series;
                rn(t, function(e) {
                    e.linkedSeries.length = 0
                }),
                    rn(t, function(t) {
                        var n = t.options.linkedTo;
                        r(n) && (n = n === ":previous" ? e.series[t.index - 1] : e.get(n)) && (n.linkedSeries.push(t),
                            t.linkedParent = n)
                    })
            },
            render: function() {
                var t = this, r = t.axes, i = t.renderer, s = t.options, o = s.labels, u = s.credits, a;
                t.setTitle(),
                    t.legend = new U(t,s.legend),
                    t.getStacks(),
                    rn(r, function(e) {
                        e.setScale()
                    }),
                    t.getMargins(),
                    t.maxTicks = null ,
                    rn(r, function(e) {
                        e.setTickPositions(!0),
                            e.setMaxTicks()
                    }),
                    t.adjustTickAmounts(),
                    t.getMargins(),
                    t.drawChartBox(),
                t.hasCartesianSeries && rn(r, function(e) {
                    e.render()
                }),
                t.seriesGroup || (t.seriesGroup = i.g("series-group").attr({
                    zIndex: 3
                }).add()),
                    rn(t.series, function(e) {
                        e.translate(),
                            e.setTooltipPoints(),
                            e.render()
                    }),
                o.items && rn(o.items, function(r) {
                    var s = e(o.style, r.style)
                        , u = n(s.left) + t.plotLeft
                        , a = n(s.top) + t.plotTop + 12;
                    delete s.left,
                        delete s.top,
                        i.text(r.html, u, a).attr({
                            zIndex: 2
                        }).css(s).add()
                }),
                u.enabled && !t.credits && (a = u.href,
                    t.credits = i.text(u.text, 0, 0).on("click", function() {
                        a && (location.href = a)
                    }).attr({
                        align: u.position.align,
                        zIndex: 8
                    }).css(u.style).add().align(u.position)),
                    t.hasRendered = !0
            },
            destroy: function() {
                var e = this, t = e.axes, n = e.series, r = e.container, i, s = r && r.parentNode;
                ln(e, "destroy"),
                    Ct[e.index] = W,
                    e.renderTo.removeAttribute("data-highcharts-chart"),
                    fn(e);
                for (i = t.length; i--; )
                    t[i] = t[i].destroy();
                for (i = n.length; i--; )
                    n[i] = n[i].destroy();
                rn("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(t) {
                    var n = e[t];
                    n && n.destroy && (e[t] = n.destroy())
                }),
                r && (r.innerHTML = "",
                    fn(r),
                s && O(r));
                for (i in e)
                    delete e[i]
            },
            isReadyToRender: function() {
                var e = this;
                return !ht && V == V.top && X.readyState !== "complete" || dt && !V.canvg ? (dt ? Sn.push(function() {
                    e.firstRender()
                }, e.options.global.canvasToolsURL) : X.attachEvent("onreadystatechange", function() {
                    X.detachEvent("onreadystatechange", e.firstRender),
                    X.readyState === "complete" && e.firstRender()
                }),
                    !1) : !0
            },
            firstRender: function() {
                var e = this
                    , t = e.options
                    , n = e.callback;
                e.isReadyToRender() && (e.getContainer(),
                    ln(e, "init"),
                    e.resetMargins(),
                    e.setChartSize(),
                    e.propFromSeries(),
                    e.getAxes(),
                    rn(t.series || [], function(t) {
                        e.initSeries(t)
                    }),
                    e.linkSeries(),
                    ln(e, "beforeRender"),
                    e.pointer = new R(e,t),
                    e.render(),
                    e.renderer.draw(),
                n && n.apply(e, [e]),
                    rn(e.callbacks, function(t) {
                        t.apply(e, [e])
                    }),
                    e.cloneRenderTo(!0),
                    ln(e, "load"))
            },
            splashArray: function(e, t) {
                var n = t[e]
                    , n = i(n) ? n : [n, n, n, n];
                return [p(t[e + "Top"], n[0]), p(t[e + "Right"], n[1]), p(t[e + "Bottom"], n[2]), p(t[e + "Left"], n[3])]
            }
        },
        z.prototype.callbacks = [];
    var xn = function() {}
        ;
    xn.prototype = {
        init: function(e, t, n) {
            return this.series = e,
                this.applyOptions(t, n),
                this.pointAttr = {},
            e.options.colorByPoint && (t = e.options.colors || e.chart.options.colors,
                this.color = this.color || t[e.colorCounter++],
            e.colorCounter === t.length) && (e.colorCounter = 0),
                e.chart.pointCount++,
                this
        },
        applyOptions: function(t, n) {
            var r = this.series
                , i = r.pointValKey
                , t = xn.prototype.optionsToObject.call(this, t);
            return e(this, t),
                this.options = this.options ? e(this.options, t) : t,
            i && (this.y = this[i]),
            this.x === W && r && (this.x = n === W ? r.autoIncrement() : n),
                this
        },
        optionsToObject: function(e) {
            var t = {}
                , n = this.series
                , r = n.pointArrayMap || ["y"]
                , i = r.length
                , o = 0
                , u = 0;
            if (typeof e == "number" || e === null )
                t[r[0]] = e;
            else if (s(e)) {
                e.length > i && (n = typeof e[0],
                    n === "string" ? t.name = e[0] : n === "number" && (t.x = e[0]),
                    o++);
                for (; u < i; )
                    t[r[u++]] = e[o++]
            } else
                typeof e == "object" && (t = e,
                e.dataLabels && (n._hasPointLabels = !0),
                e.marker && (n._hasPointMarkers = !0));
            return t
        },
        destroy: function() {
            var e = this.series.chart, t = e.hoverPoints, n;
            e.pointCount--,
            t && (this.setState(),
                f(t, this),
                !t.length) && (e.hoverPoints = null ),
            this === e.hoverPoint && this.onMouseOut();
            if (this.graphic || this.dataLabel)
                fn(this),
                    this.destroyElements();
            this.legendItem && e.legend.destroyItem(this);
            for (n in this)
                this[n] = null
        },
        destroyElements: function() {
            for (var e = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","), t, n = 6; n--; )
                t = e[n],
                this[t] && (this[t] = this[t].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        select: function(e, t) {
            var n = this
                , r = n.series
                , i = r.chart
                , e = p(e, !n.selected);
            n.firePointEvent(e ? "select" : "unselect", {
                accumulate: t
            }, function() {
                n.selected = n.options.selected = e,
                    r.options.data[nn(n, r.data)] = n.options,
                    n.setState(e && "select"),
                t || rn(i.getSelectedPoints(), function(e) {
                    e.selected && e !== n && (e.selected = e.options.selected = !1,
                        r.options.data[nn(e, r.data)] = e.options,
                        e.setState(""),
                        e.firePointEvent("unselect"))
                })
            })
        },
        onMouseOver: function(e) {
            var t = this.series
                , n = t.chart
                , r = n.tooltip
                , i = n.hoverPoint;
            i && i !== this && i.onMouseOut(),
                this.firePointEvent("mouseOver"),
            r && (!r.shared || t.noSharedTooltip) && r.refresh(this, e),
                this.setState("hover"),
                n.hoverPoint = this
        },
        onMouseOut: function() {
            var e = this.series.chart
                , t = e.hoverPoints;
            if (!t || nn(this, t) === -1)
                this.firePointEvent("mouseOut"),
                    this.setState(),
                    e.hoverPoint = null
        },
        tooltipFormatter: function(e) {
            var t = this.series
                , n = t.tooltipOptions
                , r = p(n.valueDecimals, "")
                , i = n.valuePrefix || ""
                , s = n.valueSuffix || "";
            return rn(t.pointArrayMap || ["y"], function(t) {
                t = "{point." + t;
                if (i || s)
                    e = e.replace(t + "}", i + t + "}" + s);
                e = e.replace(t + "}", t + ":,." + r + "f}")
            }),
                w(e, {
                    point: this,
                    series: this.series
                })
        },
        update: function(e, t, n) {
            var r = this, s = r.series, o = r.graphic, u, a = s.data, f = s.chart, l = s.options, t = p(t, !0);
            r.firePointEvent("update", {
                options: e
            }, function() {
                r.applyOptions(e),
                i(e) && (s.getAttribs(),
                    o) && (e && e.marker && e.marker.symbol ? r.graphic = o.destroy() : o.attr(r.pointAttr[r.state || ""])),
                    u = nn(r, a),
                    s.xData[u] = r.x,
                    s.yData[u] = s.toYData ? s.toYData(r) : r.y,
                    s.zData[u] = r.z,
                    l.data[u] = r.options,
                    s.isDirty = s.isDirtyData = !0,
                !s.fixedBox && s.hasCartesianSeries && (f.isDirtyBox = !0),
                l.legendType === "point" && f.legend.destroyItem(r),
                t && f.redraw(n)
            })
        },
        remove: function(e, t) {
            var n = this, r = n.series, i = r.points, s = r.chart, o, u = r.data;
            D(t, s),
                e = p(e, !0),
                n.firePointEvent("remove", null , function() {
                    o = nn(n, u),
                    u.length === i.length && i.splice(o, 1),
                        u.splice(o, 1),
                        r.options.data.splice(o, 1),
                        r.xData.splice(o, 1),
                        r.yData.splice(o, 1),
                        r.zData.splice(o, 1),
                        n.destroy(),
                        r.isDirty = !0,
                        r.isDirtyData = !0,
                    e && s.redraw()
                })
        },
        firePointEvent: function(e, t, n) {
            var r = this
                , i = this.series.options;
            (i.point.events[e] || r.options && r.options.events && r.options.events[e]) && this.importEvents(),
            e === "click" && i.allowPointSelect && (n = function(e) {
                    r.select(null , e.ctrlKey || e.metaKey || e.shiftKey)
                }
            ),
                ln(this, e, t, n)
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var e = t(this.series.options.point, this.options).events, n;
                this.events = e;
                for (n in e)
                    an(this, n, e[n]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(e) {
            var n = this.plotX
                , r = this.plotY
                , i = this.series
                , s = i.options.states
                , o = dn[i.type].marker && i.options.marker
                , u = o && !o.enabled
                , a = o && o.states[e]
                , f = a && a.enabled === !1
                , l = i.stateMarkerGraphic
                , c = this.marker || {}
                , h = i.chart
                , p = this.pointAttr
                , e = e || "";
            e === this.state || this.selected && e !== "select" || s[e] && s[e].enabled === !1 || e && (f || u && !a.enabled) || e && c.states && c.states[e] && c.states[e].enabled === !1 || (this.graphic ? (s = o && this.graphic.symbolName && p[e].r,
                this.graphic.attr(t(p[e], s ? {
                    x: n - s,
                    y: r - s,
                    width: 2 * s,
                    height: 2 * s
                } : {}))) : (e && a && (s = a.radius,
                c = c.symbol || i.symbol,
            l && l.currentSymbol !== c && (l = l.destroy()),
                l ? l.attr({
                    x: n - s,
                    y: r - s
                }) : (i.stateMarkerGraphic = l = h.renderer.symbol(c, n - s, r - s, 2 * s, 2 * s).attr(p[e]).add(i.markerGroup),
                    l.currentSymbol = c)),
            l && l[e && h.isInsidePlot(n, r) ? "show" : "hide"]()),
                this.state = e)
        }
    };
    var Tn = function() {}
        ;
    Tn.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: xn,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        colorCounter: 0,
        init: function(t, n) {
            var r, i, s = t.series;
            this.chart = t,
                this.options = n = this.setOptions(n),
                this.linkedSeries = [],
                this.bindAxes(),
                e(this, {
                    name: n.name,
                    state: "",
                    pointAttr: {},
                    visible: n.visible !== !1,
                    selected: n.selected === !0
                }),
            dt && (n.animation = !1),
                i = n.events;
            for (r in i)
                an(this, r, i[r]);
            if (i && i.click || n.point && n.point.events && n.point.events.click || n.allowPointSelect)
                t.runTrackerClick = !0;
            this.getColor(),
                this.getSymbol(),
                this.setData(n.data, !1),
            this.isCartesian && (t.hasCartesianSeries = !0),
                s.push(this),
                this._i = s.length - 1,
                C(s, function(e, t) {
                    return p(e.options.index, e._i) - p(t.options.index, e._i)
                }),
                rn(s, function(e, t) {
                    e.index = t,
                        e.name = e.name || "Series " + (t + 1)
                })
        },
        bindAxes: function() {
            var e = this, t = e.options, n = e.chart, r;
            e.isCartesian && rn(["xAxis", "yAxis"], function(i) {
                rn(n[i], function(n) {
                    r = n.options;
                    if (t[i] === r.index || t[i] !== W && t[i] === r.id || t[i] === W && r.index === 0)
                        n.series.push(e),
                            e[i] = n,
                            n.isDirty = !0
                }),
                e[i] || M(18, !0)
            })
        },
        autoIncrement: function() {
            var e = this.options
                , t = this.xIncrement
                , t = p(t, e.pointStart, 0);
            return this.pointInterval = p(this.pointInterval, e.pointInterval, 1),
                this.xIncrement = t + this.pointInterval,
                t
        },
        getSegments: function() {
            var e = -1, t = [], n, r = this.points, i = r.length;
            if (i)
                if (this.options.connectNulls) {
                    for (n = i; n--; )
                        r[n].y === null  && r.splice(n, 1);
                    r.length && (t = [r])
                } else
                    rn(r, function(n, s) {
                        n.y === null  ? (s > e + 1 && t.push(r.slice(e + 1, s)),
                            e = s) : s === i - 1 && t.push(r.slice(e + 1, s + 1))
                    });
            this.segments = t
        },
        setOptions: function(e) {
            var n = this.chart.options
                , r = n.plotOptions
                , i = r[this.type];
            return this.userOptions = e,
                e = t(i, r.series, e),
                this.tooltipOptions = t(n.tooltip, e.tooltip),
            i.marker === null  && delete e.marker,
                e
        },
        getColor: function() {
            var e = this.options, t = this.userOptions, n = this.chart.options.colors, r = this.chart.counters, i;
            i = e.color || dn[this.type].color,
            !i && !e.colorByPoint && (l(t._colorIndex) ? e = t._colorIndex : (t._colorIndex = r.color,
                e = r.color++),
                i = n[e]),
                this.color = i,
                r.wrapColor(n.length)
        },
        getSymbol: function() {
            var e = this.userOptions
                , t = this.options.marker
                , n = this.chart
                , r = n.options.symbols
                , n = n.counters;
            this.symbol = t.symbol,
            this.symbol || (l(e._symbolIndex) ? e = e._symbolIndex : (e._symbolIndex = n.symbol,
                e = n.symbol++),
                this.symbol = r[e]),
            /^url/.test(this.symbol) && (t.radius = 0),
                n.wrapSymbol(r.length)
        },
        drawLegendSymbol: function(e) {
            var t = this.options, n = t.marker, r = e.options, i;
            i = r.symbolWidth;
            var s = this.chart.renderer
                , o = this.legendGroup
                , e = e.baseline - J(s.fontMetrics(r.itemStyle.fontSize).b * .3);
            t.lineWidth && (r = {
                "stroke-width": t.lineWidth
            },
            t.dashStyle && (r.dashstyle = t.dashStyle),
                this.legendLine = s.path(["M", 0, e, "L", i, e]).attr(r).add(o)),
            n && n.enabled && (t = n.radius,
                this.legendSymbol = i = s.symbol(this.symbol, i / 2 - t, e - t, 2 * t, 2 * t).add(o),
                i.isMarker = !0)
        },
        addPoint: function(e, t, n, r) {
            var i = this.options, s = this.data, o = this.graph, u = this.area, a = this.chart, f = this.xData, l = this.yData, c = this.zData, h = this.xAxis && this.xAxis.names, d = o && o.shift || 0, v = i.data, m;
            D(r, a),
            n && rn([o, u, this.graphNeg, this.areaNeg], function(e) {
                e && (e.shift = d + 1)
            }),
            u && (u.isArea = !0),
                t = p(t, !0),
                r = {
                    series: this
                },
                this.pointClass.prototype.applyOptions.apply(r, [e]),
                o = r.x,
                u = f.length;
            if (this.requireSorting && o < f[u - 1])
                for (m = !0; u && f[u - 1] > o; )
                    u--;
            f.splice(u, 0, o),
                l.splice(u, 0, this.toYData ? this.toYData(r) : r.y),
                c.splice(u, 0, r.z),
            h && (h[o] = r.name),
                v.splice(u, 0, e),
            m && (this.data.splice(u, 0, null ),
                this.processData()),
            i.legendType === "point" && this.generatePoints(),
            n && (s[0] && s[0].remove ? s[0].remove(!1) : (s.shift(),
                f.shift(),
                l.shift(),
                c.shift(),
                v.shift())),
                this.isDirtyData = this.isDirty = !0,
            t && (this.getAttribs(),
                a.redraw())
        },
        setData: function(e, t) {
            var n = this.points, i = this.options, u = this.chart, a = null , f = this.xAxis, l = f && f.names, c;
            this.xIncrement = null ,
                this.pointRange = f && f.categories ? 1 : i.pointRange,
                this.colorCounter = 0;
            var h = []
                , d = []
                , v = []
                , m = e ? e.length : [];
            c = p(i.turboThreshold, 1e3);
            var g = this.pointArrayMap
                , g = g && g.length
                , y = !!this.toYData;
            if (c && m > c) {
                for (c = 0; a === null  && c < m; )
                    a = e[c],
                        c++;
                if (o(a)) {
                    l = p(i.pointStart, 0),
                        i = p(i.pointInterval, 1);
                    for (c = 0; c < m; c++)
                        h[c] = l,
                            d[c] = e[c],
                            l += i;
                    this.xIncrement = l
                } else if (s(a))
                    if (g)
                        for (c = 0; c < m; c++)
                            i = e[c],
                                h[c] = i[0],
                                d[c] = i.slice(1, g + 1);
                    else
                        for (c = 0; c < m; c++)
                            i = e[c],
                                h[c] = i[0],
                                d[c] = i[1];
                else
                    M(12)
            } else
                for (c = 0; c < m; c++)
                    e[c] !== W && (i = {
                        series: this
                    },
                        this.pointClass.prototype.applyOptions.apply(i, [e[c]]),
                        h[c] = i.x,
                        d[c] = y ? this.toYData(i) : i.y,
                        v[c] = i.z,
                    l && i.name) && (l[i.x] = i.name);
            r(d[0]) && M(14, !0),
                this.data = [],
                this.options.data = e,
                this.xData = h,
                this.yData = d,
                this.zData = v;
            for (c = n && n.length || 0; c--; )
                n[c] && n[c].destroy && n[c].destroy();
            f && (f.minRange = f.userMinRange),
                this.isDirty = this.isDirtyData = u.isDirtyBox = !0,
            p(t, !0) && u.redraw(!1)
        },
        remove: function(e, t) {
            var n = this
                , r = n.chart
                , e = p(e, !0);
            n.isRemoving || (n.isRemoving = !0,
                ln(n, "remove", null , function() {
                    n.destroy(),
                        r.isDirtyLegend = r.isDirtyBox = !0,
                        r.linkSeries(),
                    e && r.redraw(t)
                })),
                n.isRemoving = !1
        },
        processData: function(e) {
            var t = this.xData, n = this.yData, r = t.length, i;
            i = 0;
            var s, o, u = this.xAxis, a = this.options, f = a.cropThreshold, l = this.isCartesian;
            if (l && !this.isDirty && !u.isDirty && !this.yAxis.isDirty && !e)
                return !1;
            if (l && this.sorted && (!f || r > f || this.forceCrop))
                if (e = u.min,
                        u = u.max,
                    t[r - 1] < e || t[0] > u)
                    t = [],
                        n = [];
                else if (t[0] < e || t[r - 1] > u)
                    i = this.cropData(this.xData, this.yData, e, u),
                        t = i.xData,
                        n = i.yData,
                        i = i.start,
                        s = !0;
            for (u = t.length - 1; u >= 0; u--)
                r = t[u] - t[u - 1],
                    r > 0 && (o === W || r < o) ? o = r : r < 0 && this.requireSorting && M(15);
            this.cropped = s,
                this.cropStart = i,
                this.processedXData = t,
                this.processedYData = n,
            a.pointRange === null  && (this.pointRange = o || 1),
                this.closestPointRange = o
        },
        cropData: function(e, t, n, r) {
            var i = e.length, s = 0, o = i, u = p(this.cropShoulder, 1), a;
            for (a = 0; a < i; a++)
                if (e[a] >= n) {
                    s = G(0, a - u);
                    break
                }
            for (; a < i; a++)
                if (e[a] > r) {
                    o = a + u;
                    break
                }
            return {
                xData: e.slice(s, o),
                yData: t.slice(s, o),
                start: s,
                end: o
            }
        },
        generatePoints: function() {
            var e = this.options.data, t = this.data, n, r = this.processedXData, i = this.processedYData, s = this.pointClass, o = r.length, u = this.cropStart || 0, a, f = this.hasGroupedData, l, c = [], p;
            !t && !f && (t = [],
                t.length = e.length,
                t = this.data = t);
            for (p = 0; p < o; p++)
                a = u + p,
                    f ? c[p] = (new s).init(this, [r[p]].concat(h(i[p]))) : (t[a] ? l = t[a] : e[a] !== W && (t[a] = l = (new s).init(this, e[a], r[p])),
                        c[p] = l);
            if (t && (o !== (n = t.length) || f))
                for (p = 0; p < n; p++)
                    if (p === u && !f && (p += o),
                            t[p])
                        t[p].destroyElements(),
                            t[p].plotX = W;
            this.data = t,
                this.points = c
        },
        setStackedPoints: function() {
            if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
                var e = this.processedXData, t = this.processedYData, n = [], r = t.length, i = this.options, s = i.threshold, o = i.stack, i = i.stacking, u = this.stackKey, a = "-" + u, f = this.negStacks, l = this.yAxis, c = l.stacks, h = l.oldStacks, p, d, v, m, g;
                for (v = 0; v < r; v++)
                    m = e[v],
                        g = t[v],
                        d = (p = f && g < s) ? a : u,
                    c[d] || (c[d] = {}),
                    c[d][m] || (h[d] && h[d][m] ? (c[d][m] = h[d][m],
                        c[d][m].total = null ) : c[d][m] = new F(l,l.options.stackLabels,p,m,o,i)),
                        d = c[d][m],
                        d.points[this.index] = [d.cum || 0],
                        i === "percent" ? (p = p ? u : a,
                            f && c[p] && c[p][m] ? (p = c[p][m],
                                d.total = p.total = G(p.total, d.total) + Z(g) || 0) : d.total += Z(g) || 0) : d.total += g || 0,
                        d.cum = (d.cum || 0) + (g || 0),
                        d.points[this.index].push(d.cum),
                        n[v] = d.cum;
                i === "percent" && (l.usePercentage = !0),
                    this.stackedYData = n,
                    l.oldStacks = {}
            }
        },
        setPercentStacks: function() {
            var e = this
                , t = e.stackKey
                , n = e.yAxis.stacks;
            rn([t, "-" + t], function(t) {
                var r;
                for (var i = e.xData.length, s, o; i--; )
                    if (s = e.xData[i],
                            r = (o = n[t] && n[t][s]) && o.points[e.index],
                            s = r)
                        o = o.total ? 100 / o.total : 0,
                            s[0] = _(s[0] * o),
                            s[1] = _(s[1] * o),
                            e.stackedYData[i] = s[1]
            })
        },
        getExtremes: function() {
            var e = this.yAxis, t = this.processedXData, n = this.stackedYData || this.processedYData, r = n.length, i = [], s = 0, o = this.xAxis.getExtremes(), u = o.min, o = o.max, a, f, l, c;
            for (c = 0; c < r; c++)
                if (f = t[c],
                        l = n[c],
                        a = l !== null  && l !== W && (!e.isLog || l.length || l > 0),
                        f = this.getExtremesFromAll || this.cropped || (t[c + 1] || f) >= u && (t[c - 1] || f) <= o,
                    a && f)
                    if (a = l.length)
                        for (; a--; )
                            l[a] !== null  && (i[s++] = l[a]);
                    else
                        i[s++] = l;
            this.dataMin = p(void 0, k(i)),
                this.dataMax = p(void 0, L(i))
        },
        translate: function() {
            this.processedXData || this.processData(),
                this.generatePoints();
            for (var e = this.options, t = e.stacking, n = this.xAxis, r = n.categories, i = this.yAxis, s = this.points, u = s.length, a = !!this.modifyValue, f = e.pointPlacement, c = f === "between" || o(f), h = e.threshold, e = 0; e < u; e++) {
                var d = s[e]
                    , v = d.x
                    , m = d.y
                    , g = d.low
                    , y = i.stacks[(this.negStacks && m < h ? "-" : "") + this.stackKey];
                i.isLog && m <= 0 && (d.y = m = null ),
                    d.plotX = n.translate(v, 0, 0, 0, 1, f, this.type === "flags"),
                t && this.visible && y && y[v] && (y = y[v],
                    m = y.points[this.index],
                    g = m[0],
                    m = m[1],
                g === 0 && (g = p(h, i.min)),
                i.isLog && g <= 0 && (g = null ),
                    d.total = d.stackTotal = y.total,
                    d.percentage = t === "percent" && d.y / y.total * 100,
                    d.stackY = m,
                    y.setOffset(this.pointXOffset || 0, this.barW || 0)),
                    d.yBottom = l(g) ? i.translate(g, 0, 1, 0, 1) : null ,
                a && (m = this.modifyValue(m, d)),
                    d.plotY = typeof m == "number" && m !== Infinity ? i.translate(m, 0, 1, 0, 1) : W,
                    d.clientX = c ? n.translate(v, 0, 0, 0, 1) : d.plotX,
                    d.negative = d.y < (h || 0),
                    d.category = r && r[d.x] !== W ? r[d.x] : d.x
            }
            this.getSegments()
        },
        setTooltipPoints: function(e) {
            var t = [], n, r, i = this.xAxis, s = i && i.getExtremes(), o = i ? i.tooltipLen || i.len : this.chart.plotSizeX, u, a, f = [];
            if (this.options.enableMouseTracking !== !1) {
                e && (this.tooltipPoints = null ),
                    rn(this.segments || this.points, function(e) {
                        t = t.concat(e)
                    }),
                i && i.reversed && (t = t.reverse()),
                this.orderTooltipPoints && this.orderTooltipPoints(t),
                    e = t.length;
                for (a = 0; a < e; a++)
                    if (i = t[a],
                            n = i.x,
                        n >= s.min && n <= s.max) {
                        u = t[a + 1],
                            n = r === W ? 0 : r + 1;
                        for (r = t[a + 1] ? Y(G(0, K((i.clientX + (u ? u.wrappedClientX || u.clientX : o)) / 2)), o) : o; n >= 0 && n <= r; )
                            f[n++] = i
                    }
                this.tooltipPoints = f
            }
        },
        tooltipHeaderFormatter: function(e) {
            var t = this.tooltipOptions, n = t.xDateFormat, r = t.dateTimeLabelFormats, i = this.xAxis, s = i && i.options.type === "datetime", t = t.headerFormat, i = i && i.closestPointRange, u;
            if (s && !n)
                if (i) {
                    for (u in Tt)
                        if (Tt[u] >= i) {
                            n = r[u];
                            break
                        }
                } else
                    n = r.day;
            return s && n && o(e.key) && (t = t.replace("{point.key}", "{point.key:" + n + "}")),
                w(t, {
                    point: e,
                    series: this
                })
        },
        onMouseOver: function() {
            var e = this.chart
                , t = e.hoverSeries;
            t && t !== this && t.onMouseOut(),
            this.options.events.mouseOver && ln(this, "mouseOver"),
                this.setState("hover"),
                e.hoverSeries = this
        },
        onMouseOut: function() {
            var e = this.options
                , t = this.chart
                , n = t.tooltip
                , r = t.hoverPoint;
            r && r.onMouseOut(),
            this && e.events.mouseOut && ln(this, "mouseOut"),
            n && !e.stickyTracking && (!n.shared || this.noSharedTooltip) && n.hide(),
                this.setState(),
                t.hoverSeries = null
        },
        animate: function(t) {
            var n = this, r = n.chart, s = r.renderer, o;
            o = n.options.animation;
            var u = r.clipBox, a = r.inverted, f;
            o && !i(o) && (o = dn[n.type].animation),
                f = "_sharedClip" + o.duration + o.easing;
            if (t)
                t = r[f],
                    o = r[f + "m"],
                t || (r[f] = t = s.clipRect(e(u, {
                    width: 0
                })),
                    r[f + "m"] = o = s.clipRect(-99, a ? -r.plotLeft : -r.plotTop, 99, a ? r.chartWidth : r.chartHeight)),
                    n.group.clip(t),
                    n.markerGroup.clip(o),
                    n.sharedClipKey = f;
            else {
                if (t = r[f])
                    t.animate({
                        width: r.plotSizeX
                    }, o),
                        r[f + "m"].animate({
                            width: r.plotSizeX + 99
                        }, o);
                n.animate = null ,
                    n.animationTimeout = setTimeout(function() {
                        n.afterAnimate()
                    }, o.duration)
            }
        },
        afterAnimate: function() {
            var e = this.chart
                , t = this.sharedClipKey
                , n = this.group;
            n && this.options.clip !== !1 && (n.clip(e.clipRect),
                this.markerGroup.clip()),
                setTimeout(function() {
                    t && e[t] && (e[t] = e[t].destroy(),
                        e[t + "m"] = e[t + "m"].destroy())
                }, 100)
        },
        drawPoints: function() {
            var t, n = this.points, r = this.chart, i, s, o, u, a, f, l, c, h = this.options.marker, d, v = this.markerGroup;
            if (h.enabled || this._hasPointMarkers)
                for (o = n.length; o--; )
                    (u = n[o],
                        i = K(u.plotX),
                        s = u.plotY,
                        c = u.graphic,
                        f = u.marker || {},
                        t = h.enabled && f.enabled === W || f.enabled,
                        d = r.isInsidePlot(J(i), s, r.inverted),
                    t && s !== W && !isNaN(s) && u.y !== null ) ? (t = u.pointAttr[u.selected ? "select" : ""],
                        a = t.r,
                        f = p(f.symbol, this.symbol),
                        l = f.indexOf("url") === 0,
                        c) ? c.attr({
                        visibility: d ? ht ? "inherit" : "visible" : "hidden"
                    }).animate(e({
                        x: i - a,
                        y: s - a
                    }, c.symbolName ? {
                        width: 2 * a,
                        height: 2 * a
                    } : {})) : d && (a > 0 || l) && (u.graphic = r.renderer.symbol(f, i - a, s - a, 2 * a, 2 * a).attr(t).add(v)) : c && (u.graphic = c.destroy())
        },
        convertAttribs: function(e, t, n, r) {
            var i = this.pointAttrToOptions, s, o, u = {}, e = e || {}, t = t || {}, n = n || {}, r = r || {};
            for (s in i)
                o = i[s],
                    u[s] = p(e[o], t[s], n[s], r[s]);
            return u
        },
        getAttribs: function() {
            var t = this, n = t.options, r = dn[t.type].marker ? n.marker : n, i = r.states, s = i.hover, o, u = t.color, a = {
                stroke: u,
                fill: u
            }, f = t.points || [], c = [], h, p = t.pointAttrToOptions, d = n.negativeColor, v = r.lineColor, m;
            n.marker ? (s.radius = s.radius || r.radius + 2,
                s.lineWidth = s.lineWidth || r.lineWidth + 1) : s.color = s.color || yn(s.color || u).brighten(s.brightness).get(),
                c[""] = t.convertAttribs(r, a),
                rn(["hover", "select"], function(e) {
                    c[e] = t.convertAttribs(i[e], c[""])
                }),
                t.pointAttr = c;
            for (u = f.length; u--; ) {
                a = f[u],
                (r = a.options && a.options.marker || a.options) && r.enabled === !1 && (r.radius = 0),
                a.negative && d && (a.color = a.fillColor = d),
                    o = n.colorByPoint || a.color;
                if (a.options)
                    for (m in p)
                        l(r[p[m]]) && (o = !0);
                o ? (r = r || {},
                    h = [],
                    i = r.states || {},
                    o = i.hover = i.hover || {},
                n.marker || (o.color = yn(o.color || a.color).brighten(o.brightness || s.brightness).get()),
                    h[""] = t.convertAttribs(e({
                        color: a.color,
                        fillColor: a.color,
                        lineColor: v === null  ? a.color : W
                    }, r), c[""]),
                    h.hover = t.convertAttribs(i.hover, c.hover, h[""]),
                    h.select = t.convertAttribs(i.select, c.select, h[""])) : h = c,
                    a.pointAttr = h
            }
        },
        update: function(n, r) {
            var i = this.chart, s = this.type, o = Gt[s].prototype, u, n = t(this.userOptions, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, n);
            this.remove(!1);
            for (u in o)
                o.hasOwnProperty(u) && (this[u] = W);
            e(this, Gt[n.type || s].prototype),
                this.init(i, n),
            p(r, !0) && i.redraw(!1)
        },
        destroy: function() {
            var e = this, t = e.chart, n = /AppleWebKit\/533/.test(it), r, i, s = e.data || [], o, u, a;
            ln(e, "destroy"),
                fn(e),
                rn(["xAxis", "yAxis"], function(t) {
                    if (a = e[t])
                        f(a.series, e),
                            a.isDirty = a.forceRedraw = !0,
                            a.stacks = {}
                }),
            e.legendItem && e.chart.legend.destroyItem(e);
            for (i = s.length; i--; )
                (o = s[i]) && o.destroy && o.destroy();
            e.points = null ,
                clearTimeout(e.animationTimeout),
                rn("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function(t) {
                    e[t] && (r = n && t === "group" ? "hide" : "destroy",
                        e[t][r]())
                }),
            t.hoverSeries === e && (t.hoverSeries = null ),
                f(t.series, e);
            for (u in e)
                delete e[u]
        },
        drawDataLabels: function() {
            var n = this, r = n.options, i = r.cursor, s = r.dataLabels, r = n.points, o, u, a, f;
            if (s.enabled || n._hasPointLabels)
                n.dlProcessOptions && n.dlProcessOptions(s),
                    f = n.plotGroup("dataLabelsGroup", "data-labels", n.visible ? "visible" : "hidden", s.zIndex || 6),
                    u = s,
                    rn(r, function(r) {
                        var c, h = r.dataLabel, d, v, m = r.connector, g = !0;
                        o = r.options && r.options.dataLabels,
                            c = p(o && o.enabled, u.enabled);
                        if (h && !c)
                            r.dataLabel = h.destroy();
                        else if (c) {
                            s = t(u, o),
                                c = s.rotation,
                                d = r.getLabelConfig(),
                                a = s.format ? w(s.format, d) : s.formatter.call(d, s),
                                s.style.color = p(s.color, s.style.color, n.color, "black");
                            if (h) {
                                if (l(a))
                                    h.attr({
                                        text: a
                                    }),
                                        g = !1;
                                else if (r.dataLabel = h = h.destroy(),
                                        m)
                                    r.connector = m.destroy()
                            } else if (l(a)) {
                                h = {
                                    fill: s.backgroundColor,
                                    stroke: s.borderColor,
                                    "stroke-width": s.borderWidth,
                                    r: s.borderRadius || 0,
                                    rotation: c,
                                    padding: s.padding,
                                    zIndex: 1
                                };
                                for (v in h)
                                    h[v] === W && delete h[v];
                                h = r.dataLabel = n.chart.renderer[c ? "text" : "label"](a, 0, -999, null , null , null , s.useHTML).attr(h).css(e(s.style, i && {
                                        cursor: i
                                    })).add(f).shadow(s.shadow)
                            }
                            h && n.alignDataLabel(r, h, s, null , g)
                        }
                    })
        },
        alignDataLabel: function(t, n, r, i, s) {
            var o = this.chart
                , u = o.inverted
                , a = p(t.plotX, -999)
                , f = p(t.plotY, -999)
                , l = n.getBBox();
            if (t = this.visible && o.isInsidePlot(t.plotX, t.plotY, u))
                i = e({
                    x: u ? o.plotWidth - f : a,
                    y: J(u ? o.plotHeight - a : f),
                    width: 0,
                    height: 0
                }, i),
                    e(r, {
                        width: l.width,
                        height: l.height
                    }),
                    r.rotation ? (u = {
                        align: r.align,
                        x: i.x + r.x + i.width / 2,
                        y: i.y + r.y + i.height / 2
                    },
                        n[s ? "attr" : "animate"](u)) : (n.align(r, null , i),
                        u = n.alignAttr,
                        p(r.overflow, "justify") === "justify" ? this.justifyDataLabel(n, r, u, l, i, s) : p(r.crop, !0) && (t = o.isInsidePlot(u.x, u.y) && o.isInsidePlot(u.x + l.width, u.y + l.height)));
            t || n.attr({
                y: -999
            })
        },
        justifyDataLabel: function(e, t, n, r, i, s) {
            var o = this.chart, u = t.align, a = t.verticalAlign, f, l;
            f = n.x,
            f < 0 && (u === "right" ? t.align = "left" : t.x = -f,
                l = !0),
                f = n.x + r.width,
            f > o.plotWidth && (u === "left" ? t.align = "right" : t.x = o.plotWidth - f,
                l = !0),
                f = n.y,
            f < 0 && (a === "bottom" ? t.verticalAlign = "top" : t.y = -f,
                l = !0),
                f = n.y + r.height,
            f > o.plotHeight && (a === "top" ? t.verticalAlign = "bottom" : t.y = o.plotHeight - f,
                l = !0),
            l && (e.placed = !s,
                e.align(t, null , i))
        },
        getSegmentPath: function(e) {
            var t = this
                , n = []
                , r = t.options.step;
            return rn(e, function(i, s) {
                var o = i.plotX, u = i.plotY, a;
                t.getPointSpline ? n.push.apply(n, t.getPointSpline(e, i, s)) : (n.push(s ? "L" : "M"),
                r && s && (a = e[s - 1],
                    r === "right" ? n.push(a.plotX, u) : r === "center" ? n.push((a.plotX + o) / 2, a.plotY, (a.plotX + o) / 2, u) : n.push(o, a.plotY)),
                    n.push(i.plotX, i.plotY))
            }),
                n
        },
        getGraphPath: function() {
            var e = this, t = [], n, r = [];
            return rn(e.segments, function(i) {
                n = e.getSegmentPath(i),
                    i.length > 1 ? t = t.concat(n) : r.push(i[0])
            }),
                e.singlePoints = r,
                e.graphPath = t
        },
        drawGraph: function() {
            var e = this
                , t = this.options
                , n = [["graph", t.lineColor || this.color]]
                , r = t.lineWidth
                , i = t.dashStyle
                , s = t.linecap !== "square"
                , o = this.getGraphPath()
                , u = t.negativeColor;
            u && n.push(["graphNeg", u]),
                rn(n, function(n, u) {
                    var a = n[0]
                        , f = e[a];
                    f ? (pn(f),
                        f.animate({
                            d: o
                        })) : r && o.length && (f = {
                        stroke: n[1],
                        "stroke-width": r,
                        zIndex: 1
                    },
                        i ? f.dashstyle = i : s && (f["stroke-linecap"] = f["stroke-linejoin"] = "round"),
                        e[a] = e.chart.renderer.path(o).attr(f).add(e.group).shadow(!u && t.shadow))
                })
        },
        clipNeg: function() {
            var e = this.options, t = this.chart, n = t.renderer, r = e.negativeColor || e.negativeFillColor, i, s = this.graph, o = this.area, u = this.posClip, a = this.negClip;
            i = t.chartWidth;
            var f = t.chartHeight
                , l = G(i, f)
                , c = this.yAxis;
            r && (s || o) && (r = J(c.toPixels(e.threshold || 0, !0)),
                e = {
                    x: 0,
                    y: 0,
                    width: l,
                    height: r
                },
                l = {
                    x: 0,
                    y: r,
                    width: l,
                    height: l
                },
            t.inverted && (e.height = l.y = t.plotWidth - r,
            n.isVML && (e = {
                x: t.plotWidth - r - t.plotLeft,
                y: 0,
                width: i,
                height: f
            },
                l = {
                    x: r + t.plotLeft - i,
                    y: 0,
                    width: t.plotLeft + r,
                    height: i
                })),
                c.reversed ? (t = l,
                    i = e) : (t = e,
                    i = l),
                u ? (u.animate(t),
                    a.animate(i)) : (this.posClip = u = n.clipRect(t),
                    this.negClip = a = n.clipRect(i),
                s && this.graphNeg && (s.clip(u),
                    this.graphNeg.clip(a)),
                o && (o.clip(u),
                    this.areaNeg.clip(a))))
        },
        invertGroups: function() {
            function e() {
                var e = {
                    width: t.yAxis.len,
                    height: t.xAxis.len
                };
                rn(["group", "markerGroup"], function(n) {
                    t[n] && t[n].attr(e).invert()
                })
            }
            var t = this
                , n = t.chart;
            t.xAxis && (an(n, "resize", e),
                an(t, "destroy", function() {
                    fn(n, "resize", e)
                }),
                e(),
                t.invertGroups = e)
        },
        plotGroup: function(e, t, n, r, i) {
            var s = this[e]
                , o = !s;
            return o && (this[e] = s = this.chart.renderer.g(t).attr({
                visibility: n,
                zIndex: r || .1
            }).add(i)),
                s[o ? "attr" : "animate"](this.getPlotBox()),
                s
        },
        getPlotBox: function() {
            return {
                translateX: this.xAxis ? this.xAxis.left : this.chart.plotLeft,
                translateY: this.yAxis ? this.yAxis.top : this.chart.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var e = this.chart, t, n = this.options, r = n.animation && !!this.animate && e.renderer.isSVG, i = this.visible ? "visible" : "hidden", s = n.zIndex, o = this.hasRendered, u = e.seriesGroup;
            t = this.plotGroup("group", "series", i, s, u),
                this.markerGroup = this.plotGroup("markerGroup", "markers", i, s, u),
            r && this.animate(!0),
                this.getAttribs(),
                t.inverted = this.isCartesian ? e.inverted : !1,
            this.drawGraph && (this.drawGraph(),
                this.clipNeg()),
                this.drawDataLabels(),
                this.drawPoints(),
            this.options.enableMouseTracking !== !1 && this.drawTracker(),
            e.inverted && this.invertGroups(),
            n.clip !== !1 && !this.sharedClipKey && !o && t.clip(e.clipRect),
                r ? this.animate() : o || this.afterAnimate(),
                this.isDirty = this.isDirtyData = !1,
                this.hasRendered = !0
        },
        redraw: function() {
            var e = this.chart
                , t = this.isDirtyData
                , n = this.group
                , r = this.xAxis
                , i = this.yAxis;
            n && (e.inverted && n.attr({
                width: e.plotWidth,
                height: e.plotHeight
            }),
                n.animate({
                    translateX: p(r && r.left, e.plotLeft),
                    translateY: p(i && i.top, e.plotTop)
                })),
                this.translate(),
                this.setTooltipPoints(!0),
                this.render(),
            t && ln(this, "updatedData")
        },
        setState: function(e) {
            var t = this.options
                , n = this.graph
                , r = this.graphNeg
                , i = t.states
                , t = t.lineWidth
                , e = e || "";
            this.state !== e && (this.state = e,
            i[e] && i[e].enabled === !1 || (e && (t = i[e].lineWidth || t + 1),
            n && !n.dashstyle && (e = {
                "stroke-width": t
            },
                n.attr(e),
            r && r.attr(e))))
        },
        setVisible: function(e, t) {
            var n = this, r = n.chart, i = n.legendItem, s, o = r.options.chart.ignoreHiddenSeries, u = n.visible;
            s = (n.visible = e = n.userOptions.visible = e === W ? !u : e) ? "show" : "hide",
                rn(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(e) {
                    n[e] && n[e][s]()
                }),
            r.hoverSeries === n && n.onMouseOut(),
            i && r.legend.colorizeItem(n, e),
                n.isDirty = !0,
            n.options.stacking && rn(r.series, function(e) {
                e.options.stacking && e.visible && (e.isDirty = !0)
            }),
                rn(n.linkedSeries, function(t) {
                    t.setVisible(e, !1)
                }),
            o && (r.isDirtyBox = !0),
            t !== !1 && r.redraw(),
                ln(n, s)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(e) {
            this.selected = e = e === W ? !this.selected : e,
            this.checkbox && (this.checkbox.checked = e),
                ln(this, e ? "select" : "unselect")
        },
        drawTracker: function() {
            var e = this, t = e.options, n = t.trackByArea, r = [].concat(n ? e.areaPath : e.graphPath), i = r.length, s = e.chart, o = s.pointer, u = s.renderer, a = s.options.tooltip.snap, f = e.tracker, l = t.cursor, c = l && {
                        cursor: l
                    }, l = e.singlePoints, h, p = function() {
                    s.hoverSeries !== e && e.onMouseOver()
                }
                ;
            if (i && !n)
                for (h = i + 1; h--; )
                    r[h] === "M" && r.splice(h + 1, 0, r[h + 1] - a, r[h + 2], "L"),
                    (h && r[h] === "M" || h === i) && r.splice(h, 0, "L", r[h - 2] + a, r[h - 1]);
            for (h = 0; h < l.length; h++)
                i = l[h],
                    r.push("M", i.plotX - a, i.plotY, "L", i.plotX + a, i.plotY);
            f ? f.attr({
                d: r
            }) : (e.tracker = u.path(r).attr({
                "stroke-linejoin": "round",
                visibility: e.visible ? "visible" : "hidden",
                stroke: At,
                fill: n ? At : Lt,
                "stroke-width": t.lineWidth + (n ? 0 : 2 * a),
                zIndex: 2
            }).add(e.group),
                rn([e.tracker, e.markerGroup], function(e) {
                    e.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function(e) {
                        o.onTrackerMouseOut(e)
                    }).css(c),
                    mt && e.on("touchstart", p)
                }))
        }
    },
        Zt = m(Tn),
        Gt.line = Zt,
        dn.area = t(Yt, {
            threshold: 0
        }),
        Zt = m(Tn, {
            type: "area",
            getSegments: function() {
                var e = [], t = [], n = [], r = this.xAxis, i = this.yAxis, s = i.stacks[this.stackKey], o = {}, u, a, f = this.points, l = this.options.connectNulls, c, h, p;
                if (this.options.stacking && !this.cropped) {
                    for (h = 0; h < f.length; h++)
                        o[f[h].x] = f[h];
                    for (p in s)
                        s[p].total !== null  && n.push(+p);
                    n.sort(function(e, t) {
                        return e - t
                    }),
                        rn(n, function(e) {
                            if (!l || o[e] && o[e].y !== null )
                                o[e] ? t.push(o[e]) : (u = r.translate(e),
                                    c = s[e].percent ? s[e].total ? s[e].cum * 100 / s[e].total : 0 : s[e].cum,
                                    a = i.toPixels(c, !0),
                                    t.push({
                                        y: null ,
                                        plotX: u,
                                        clientX: u,
                                        plotY: a,
                                        yBottom: a,
                                        onMouseOver: Nt
                                    }))
                        }),
                    t.length && e.push(t)
                } else
                    Tn.prototype.getSegments.call(this),
                        e = this.segments;
                this.segments = e
            },
            getSegmentPath: function(e) {
                var t = Tn.prototype.getSegmentPath.call(this, e), n = [].concat(t), r, i = this.options;
                r = t.length;
                var s = this.yAxis.getThreshold(i.threshold), o;
                r === 3 && n.push("L", t[1], t[2]);
                if (i.stacking && !this.closedStacks)
                    for (r = e.length - 1; r >= 0; r--)
                        o = p(e[r].yBottom, s),
                        r < e.length - 1 && i.step && n.push(e[r + 1].plotX, o),
                            n.push(e[r].plotX, o);
                else
                    this.closeSegment(n, e, s);
                return this.areaPath = this.areaPath.concat(n),
                    t
            },
            closeSegment: function(e, t, n) {
                e.push("L", t[t.length - 1].plotX, n, "L", t[0].plotX, n)
            },
            drawGraph: function() {
                this.areaPath = [],
                    Tn.prototype.drawGraph.apply(this);
                var e = this
                    , t = this.areaPath
                    , n = this.options
                    , r = n.negativeColor
                    , i = n.negativeFillColor
                    , s = [["area", this.color, n.fillColor]];
                (r || i) && s.push(["areaNeg", r, i]),
                    rn(s, function(r) {
                        var i = r[0]
                            , s = e[i];
                        s ? s.animate({
                            d: t
                        }) : e[i] = e.chart.renderer.path(t).attr({
                            fill: p(r[2], yn(r[1]).setOpacity(p(n.fillOpacity, .75)).get()),
                            zIndex: 0
                        }).add(e.group)
                    })
            },
            drawLegendSymbol: function(e, t) {
                t.legendSymbol = this.chart.renderer.rect(0, e.baseline - 11, e.options.symbolWidth, 12, 2).attr({
                    zIndex: 3
                }).add(t.legendGroup)
            }
        }),
        Gt.area = Zt,
        dn.spline = t(Yt),
        wn = m(Tn, {
            type: "spline",
            getPointSpline: function(e, t, n) {
                var r = t.plotX, i = t.plotY, s = e[n - 1], o = e[n + 1], u, a, f, l;
                if (s && o) {
                    e = s.plotY,
                        f = o.plotX;
                    var o = o.plotY, c;
                    u = (1.5 * r + s.plotX) / 2.5,
                        a = (1.5 * i + e) / 2.5,
                        f = (1.5 * r + f) / 2.5,
                        l = (1.5 * i + o) / 2.5,
                        c = (l - a) * (f - r) / (f - u) + i - l,
                        a += c,
                        l += c,
                        a > e && a > i ? (a = G(e, i),
                            l = 2 * i - a) : a < e && a < i && (a = Y(e, i),
                            l = 2 * i - a),
                        l > o && l > i ? (l = G(o, i),
                            a = 2 * i - l) : l < o && l < i && (l = Y(o, i),
                            a = 2 * i - l),
                        t.rightContX = f,
                        t.rightContY = l
                }
                return n ? (t = ["C", s.rightContX || s.plotX, s.rightContY || s.plotY, u || r, a || i, r, i],
                    s.rightContX = s.rightContY = null ) : t = ["M", r, i],
                    t
            }
        }),
        Gt.spline = wn,
        dn.areaspline = t(dn.area),
        En = Zt.prototype,
        wn = m(wn, {
            type: "areaspline",
            closedStacks: !0,
            getSegmentPath: En.getSegmentPath,
            closeSegment: En.closeSegment,
            drawGraph: En.drawGraph,
            drawLegendSymbol: En.drawLegendSymbol
        }),
        Gt.areaspline = wn,
        dn.column = t(Yt, {
            borderColor: "#FFFFFF",
            borderWidth: 1,
            borderRadius: 0,
            groupPadding: .2,
            marker: null ,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null ,
            states: {
                hover: {
                    brightness: .1,
                    shadow: !1
                },
                select: {
                    color: "#C0C0C0",
                    borderColor: "#000000",
                    shadow: !1
                }
            },
            dataLabels: {
                align: null ,
                verticalAlign: null ,
                y: null
            },
            stickyTracking: !1,
            threshold: 0
        }),
        wn = m(Tn, {
            type: "column",
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color",
                r: "borderRadius"
            },
            cropShoulder: 0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function() {
                Tn.prototype.init.apply(this, arguments);
                var e = this
                    , t = e.chart;
                t.hasRendered && rn(t.series, function(t) {
                    t.type === e.type && (t.isDirty = !0)
                })
            },
            getColumnMetrics: function() {
                var e = this, t = e.options, n = e.xAxis, r = e.yAxis, i = n.reversed, s, o = {}, u, a = 0;
                t.grouping === !1 ? a = 1 : rn(e.chart.series, function(t) {
                    var n = t.options
                        , i = t.yAxis;
                    t.type === e.type && t.visible && r.len === i.len && r.pos === i.pos && (n.stacking ? (s = t.stackKey,
                    o[s] === W && (o[s] = a++),
                        u = o[s]) : n.grouping !== !1 && (u = a++),
                        t.columnIndex = u)
                });
                var n = Y(Z(n.transA) * (n.ordinalSlope || t.pointRange || n.closestPointRange || 1), n.len)
                    , f = n * t.groupPadding
                    , c = (n - 2 * f) / a
                    , h = t.pointWidth
                    , t = l(h) ? (c - h) / 2 : c * t.pointPadding
                    , h = p(h, c - 2 * t);
                return e.columnMetrics = {
                    width: h,
                    offset: t + (f + ((i ? a - (e.columnIndex || 0) : e.columnIndex) || 0) * c - n / 2) * (i ? -1 : 1)
                }
            },
            translate: function() {
                var e = this.chart
                    , t = this.options
                    , n = t.borderWidth
                    , r = this.yAxis
                    , i = this.translatedThreshold = r.getThreshold(t.threshold)
                    , s = p(t.minPointLength, 5)
                    , t = this.getColumnMetrics()
                    , o = t.width
                    , u = this.barW = Q(G(o, 1 + 2 * n))
                    , a = this.pointXOffset = t.offset
                    , f = -(n % 2 ? .5 : 0)
                    , l = n % 2 ? .5 : 1;
                e.renderer.isVML && e.inverted && (l += 1),
                    Tn.prototype.translate.apply(this),
                    rn(this.points, function(e) {
                        var t = p(e.yBottom, i), n = Y(G(-999 - t, e.plotY), r.len + 999 + t), c = e.plotX + a, h = u, d = Y(n, t), v, n = G(n, t) - d;
                        Z(n) < s && s && (n = s,
                            d = J(Z(d - i) > s ? t - s : i - (r.translate(e.y, 0, 1, 0, 1) <= i ? s : 0))),
                            e.barX = c,
                            e.pointWidth = o,
                            t = Z(c) < .5,
                            h = J(c + h) + f,
                            c = J(c) + f,
                            h -= c,
                            v = Z(d) < .5,
                            n = J(d + n) + l,
                            d = J(d) + l,
                            n -= d,
                        t && (c += 1,
                            h -= 1),
                        v && (d -= 1,
                            n += 1),
                            e.shapeType = "rect",
                            e.shapeArgs = {
                                x: c,
                                y: d,
                                width: h,
                                height: n
                            }
                    })
            },
            getSymbol: Nt,
            drawLegendSymbol: Zt.prototype.drawLegendSymbol,
            drawGraph: Nt,
            drawPoints: function() {
                var e = this, n = e.options, r = e.chart.renderer, i;
                rn(e.points, function(s) {
                    var o = s.plotY
                        , u = s.graphic;
                    o !== W && !isNaN(o) && s.y !== null  ? (i = s.shapeArgs,
                        u ? (pn(u),
                            u.animate(t(i))) : s.graphic = r[s.shapeType](i).attr(s.pointAttr[s.selected ? "select" : ""]).add(e.group).shadow(n.shadow, null , n.stacking && !n.borderRadius)) : u && (s.graphic = u.destroy())
                })
            },
            drawTracker: function() {
                var e = this
                    , t = e.chart
                    , n = t.pointer
                    , r = e.options.cursor
                    , i = r && {
                            cursor: r
                        }
                    , s = function(n) {
                        var r = n.target, i;
                        t.hoverSeries !== e && e.onMouseOver();
                        for (; r && !i; )
                            i = r.point,
                                r = r.parentNode;
                        i !== W && i !== t.hoverPoint && i.onMouseOver(n)
                    }
                    ;
                rn(e.points, function(e) {
                    e.graphic && (e.graphic.element.point = e),
                    e.dataLabel && (e.dataLabel.element.point = e)
                }),
                e._hasTracking || (rn(e.trackerGroups, function(t) {
                    e[t] && (e[t].addClass("highcharts-tracker").on("mouseover", s).on("mouseout", function(e) {
                        n.onTrackerMouseOut(e)
                    }).css(i),
                        mt) && e[t].on("touchstart", s)
                }),
                    e._hasTracking = !0)
            },
            alignDataLabel: function(e, n, r, i, s) {
                var o = this.chart
                    , u = o.inverted
                    , a = e.dlBox || e.shapeArgs
                    , f = e.below || e.plotY > p(this.translatedThreshold, o.plotSizeY)
                    , l = p(r.inside, !!this.options.stacking);
                a && (i = t(a),
                u && (i = {
                    x: o.plotWidth - i.y - i.height,
                    y: o.plotHeight - i.x - i.width,
                    width: i.height,
                    height: i.width
                }),
                    !l) && (u ? (i.x += f ? 0 : i.width,
                    i.width = 0) : (i.y += f ? i.height : 0,
                    i.height = 0)),
                    r.align = p(r.align, !u || l ? "center" : f ? "right" : "left"),
                    r.verticalAlign = p(r.verticalAlign, u || l ? "middle" : f ? "top" : "bottom"),
                    Tn.prototype.alignDataLabel.call(this, e, n, r, i, s)
            },
            animate: function(e) {
                var t = this.yAxis
                    , n = this.options
                    , r = this.chart.inverted
                    , i = {};
                ht && (e ? (i.scaleY = .001,
                    e = Y(t.pos + t.len, G(t.pos, t.toPixels(n.threshold))),
                    r ? i.translateX = e - t.len : i.translateY = e,
                    this.group.attr(i)) : (i.scaleY = 1,
                    i[r ? "translateX" : "translateY"] = t.pos,
                    this.group.animate(i, this.options.animation),
                    this.animate = null ))
            },
            remove: function() {
                var e = this
                    , t = e.chart;
                t.hasRendered && rn(t.series, function(t) {
                    t.type === e.type && (t.isDirty = !0)
                }),
                    Tn.prototype.remove.apply(e, arguments)
            }
        }),
        Gt.column = wn,
        dn.bar = t(dn.column),
        En = m(wn, {
            type: "bar",
            inverted: !0
        }),
        Gt.bar = En,
        dn.scatter = t(Yt, {
            lineWidth: 0,
            tooltip: {
                headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',
                pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
                followPointer: !0
            },
            stickyTracking: !1
        }),
        En = m(Tn, {
            type: "scatter",
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["markerGroup"],
            takeOrdinalPosition: !1,
            drawTracker: wn.prototype.drawTracker,
            setTooltipPoints: Nt
        }),
        Gt.scatter = En,
        dn.pie = t(Yt, {
            borderColor: "#FFFFFF",
            borderWidth: 1,
            center: [null , null ],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                distance: 30,
                enabled: !0,
                formatter: function() {
                    return this.point.name
                }
            },
            ignoreHiddenPoint: !0,
            legendType: "point",
            marker: null ,
            size: null ,
            showInLegend: !1,
            slicedOffset: 10,
            states: {
                hover: {
                    brightness: .1,
                    shadow: !1
                }
            },
            stickyTracking: !1,
            tooltip: {
                followPointer: !0
            }
        }),
        Yt = {
            type: "pie",
            isCartesian: !1,
            pointClass: m(xn, {
                init: function() {
                    xn.prototype.init.apply(this, arguments);
                    var t = this, n;
                    return t.y < 0 && (t.y = null ),
                        e(t, {
                            visible: t.visible !== !1,
                            name: p(t.name, "Slice")
                        }),
                        n = function(e) {
                            t.slice(e.type === "select")
                        }
                        ,
                        an(t, "select", n),
                        an(t, "unselect", n),
                        t
                },
                setVisible: function(e) {
                    var t = this, n = t.series, r = n.chart, i;
                    t.visible = t.options.visible = e = e === W ? !t.visible : e,
                        n.options.data[nn(t, n.data)] = t.options,
                        i = e ? "show" : "hide",
                        rn(["graphic", "dataLabel", "connector", "shadowGroup"], function(e) {
                            t[e] && t[e][i]()
                        }),
                    t.legendItem && r.legend.colorizeItem(t, e),
                    !n.isDirty && n.options.ignoreHiddenPoint && (n.isDirty = !0,
                        r.redraw())
                },
                slice: function(e, t, n) {
                    var r = this.series;
                    D(n, r.chart),
                        p(t, !0),
                        this.sliced = this.options.sliced = e = l(e) ? e : !this.sliced,
                        r.options.data[nn(this, r.data)] = this.options,
                        e = e ? this.slicedTranslation : {
                            translateX: 0,
                            translateY: 0
                        },
                        this.graphic.animate(e),
                    this.shadowGroup && this.shadowGroup.animate(e)
                }
            }),
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color"
            },
            getColor: Nt,
            animate: function(e) {
                var t = this
                    , n = t.points
                    , r = t.startAngleRad;
                e || (rn(n, function(e) {
                    var n = e.graphic
                        , e = e.shapeArgs;
                    n && (n.attr({
                        r: t.center[3] / 2,
                        start: r,
                        end: r
                    }),
                        n.animate({
                            r: e.r,
                            start: e.start,
                            end: e.end
                        }, t.options.animation))
                }),
                    t.animate = null )
            },
            setData: function(e, t) {
                Tn.prototype.setData.call(this, e, !1),
                    this.processData(),
                    this.generatePoints(),
                p(t, !0) && this.chart.redraw()
            },
            generatePoints: function() {
                var e, t = 0, n, r, i, s = this.options.ignoreHiddenPoint;
                Tn.prototype.generatePoints.call(this),
                    n = this.points,
                    r = n.length;
                for (e = 0; e < r; e++)
                    i = n[e],
                        t += s && !i.visible ? 0 : i.y;
                this.total = t;
                for (e = 0; e < r; e++)
                    i = n[e],
                        i.percentage = t > 0 ? i.y / t * 100 : 0,
                        i.total = t
            },
            getCenter: function() {
                var e = this.options, t = this.chart, r = 2 * (e.slicedOffset || 0), i, s = t.plotWidth - 2 * r, o = t.plotHeight - 2 * r, t = e.center, e = [p(t[0], "50%"), p(t[1], "50%"), e.size || "100%", e.innerSize || 0], u = Y(s, o), a;
                return un(e, function(e, t) {
                    return a = /%$/.test(e),
                        i = t < 2 || t === 2 && a,
                    (a ? [s, o, u, u][t] * n(e) / 100 : e) + (i ? r : 0)
                })
            },
            translate: function(e) {
                this.generatePoints();
                var t = 0, n = this.options, r = n.slicedOffset, i = r + n.borderWidth, s, o, u, a = n.startAngle || 0, f = this.startAngleRad = nt / 180 * (a - 90), a = (this.endAngleRad = nt / 180 * ((n.endAngle || a + 360) - 90)) - f, l = this.points, c = n.dataLabels.distance, n = n.ignoreHiddenPoint, h, p = l.length, d;
                e || (this.center = e = this.getCenter()),
                    this.getX = function(t, n) {
                        return u = $.asin((t - e[1]) / (e[2] / 2 + c)),
                        e[0] + (n ? -1 : 1) * et(u) * (e[2] / 2 + c)
                    }
                ;
                for (h = 0; h < p; h++) {
                    d = l[h],
                        s = f + t * a;
                    if (!n || d.visible)
                        t += d.percentage / 100;
                    o = f + t * a,
                        d.shapeType = "arc",
                        d.shapeArgs = {
                            x: e[0],
                            y: e[1],
                            r: e[2] / 2,
                            innerR: e[3] / 2,
                            start: J(s * 1e3) / 1e3,
                            end: J(o * 1e3) / 1e3
                        },
                        u = (o + s) / 2,
                    u > .75 * a && (u -= 2 * nt),
                        d.slicedTranslation = {
                            translateX: J(et(u) * r),
                            translateY: J(tt(u) * r)
                        },
                        s = et(u) * e[2] / 2,
                        o = tt(u) * e[2] / 2,
                        d.tooltipPos = [e[0] + s * .7, e[1] + o * .7],
                        d.half = u < -nt / 2 || u > nt / 2 ? 1 : 0,
                        d.angle = u,
                        i = Y(i, c / 2),
                        d.labelPos = [e[0] + s + et(u) * c, e[1] + o + tt(u) * c, e[0] + s + et(u) * i, e[1] + o + tt(u) * i, e[0] + s, e[1] + o, c < 0 ? "center" : d.half ? "right" : "left", u]
                }
            },
            setTooltipPoints: Nt,
            drawGraph: null ,
            drawPoints: function() {
                var t = this, n = t.chart.renderer, r, i, s = t.options.shadow, o, u;
                s && !t.shadowGroup && (t.shadowGroup = n.g("shadow").add(t.group)),
                    rn(t.points, function(a) {
                        i = a.graphic,
                            u = a.shapeArgs,
                            o = a.shadowGroup,
                        s && !o && (o = a.shadowGroup = n.g("shadow").add(t.shadowGroup)),
                            r = a.sliced ? a.slicedTranslation : {
                                translateX: 0,
                                translateY: 0
                            },
                        o && o.attr(r),
                            i ? i.animate(e(u, r)) : a.graphic = i = n.arc(u).setRadialReference(t.center).attr(a.pointAttr[a.selected ? "select" : ""]).attr({
                                "stroke-linejoin": "round"
                            }).attr(r).add(t.group).shadow(s, o),
                        a.visible === !1 && a.setVisible(!1)
                    })
            },
            sortByAngle: function(e, t) {
                e.sort(function(e, n) {
                    return e.angle !== void 0 && (n.angle - e.angle) * t
                })
            },
            drawDataLabels: function() {
                var e = this, t = e.data, n, r = e.chart, i = e.options.dataLabels, s = p(i.connectorPadding, 10), o = p(i.connectorWidth, 1), u = r.plotWidth, r = r.plotHeight, a, f, l = p(i.softConnector, !0), c = i.distance, h = e.center, d = h[2] / 2, v = h[1], m = c > 0, g, y, b, w, E = [[], []], S, x, T, N, C, k = [0, 0, 0, 0], A = function(e, t) {
                        return t.y - e.y
                    }
                    ;
                if (e.visible && (i.enabled || e._hasPointLabels)) {
                    Tn.prototype.drawDataLabels.apply(e),
                        rn(t, function(e) {
                            e.dataLabel && E[e.half].push(e)
                        });
                    for (N = 0; !w && t[N]; )
                        w = t[N] && t[N].dataLabel && (t[N].dataLabel.getBBox().height || 21),
                            N++;
                    for (N = 2; N--; ) {
                        var t = [], O = [], M = E[N], _ = M.length, D;
                        e.sortByAngle(M, N - .5);
                        if (c > 0) {
                            for (C = v - d - c; C <= v + d + c; C += w)
                                t.push(C);
                            y = t.length;
                            if (_ > y) {
                                n = [].concat(M),
                                    n.sort(A);
                                for (C = _; C--; )
                                    n[C].rank = C;
                                for (C = _; C--; )
                                    M[C].rank >= y && M.splice(C, 1);
                                _ = M.length
                            }
                            for (C = 0; C < _; C++) {
                                n = M[C],
                                    b = n.labelPos,
                                    n = 9999;
                                var P, H;
                                for (H = 0; H < y; H++)
                                    P = Z(t[H] - b[1]),
                                    P < n && (n = P,
                                        D = H);
                                if (D < C && t[C] !== null )
                                    D = C;
                                else
                                    for (y < _ - C + D && t[C] !== null  && (D = y - _ + C); t[D] === null ; )
                                        D++;
                                O.push({
                                    i: D,
                                    y: t[D]
                                }),
                                    t[D] = null
                            }
                            O.sort(A)
                        }
                        for (C = 0; C < _; C++) {
                            n = M[C],
                                b = n.labelPos,
                                g = n.dataLabel,
                                T = n.visible === !1 ? "hidden" : "visible",
                                n = b[1];
                            if (c > 0) {
                                if (y = O.pop(),
                                        D = y.i,
                                        x = y.y,
                                    n > x && t[D + 1] !== null  || n < x && t[D - 1] !== null )
                                    x = n
                            } else
                                x = n;
                            S = i.justify ? h[0] + (N ? -1 : 1) * (d + c) : e.getX(D === 0 || D === t.length - 1 ? n : x, N),
                                g._attr = {
                                    visibility: T,
                                    align: b[6]
                                },
                                g._pos = {
                                    x: S + i.x + ({
                                        left: s,
                                        right: -s
                                    }[b[6]] || 0),
                                    y: x + i.y - 10
                                },
                                g.connX = S,
                                g.connY = x,
                            this.options.size === null  && (y = g.width,
                                S - y < s ? k[3] = G(J(y - S + s), k[3]) : S + y > u - s && (k[1] = G(J(S + y - u + s), k[1])),
                                x - w / 2 < 0 ? k[0] = G(J(-x + w / 2), k[0]) : x + w / 2 > r && (k[2] = G(J(x + w / 2 - r), k[2])))
                        }
                    }
                    if (L(k) === 0 || this.verifyDataLabelOverflow(k))
                        this.placeDataLabels(),
                        m && o && rn(this.points, function(t) {
                            a = t.connector,
                                b = t.labelPos,
                                (g = t.dataLabel) && g._pos ? (T = g._attr.visibility,
                                    S = g.connX,
                                    x = g.connY,
                                    f = l ? ["M", S + (b[6] === "left" ? 5 : -5), x, "C", S, x, 2 * b[2] - b[4], 2 * b[3] - b[5], b[2], b[3], "L", b[4], b[5]] : ["M", S + (b[6] === "left" ? 5 : -5), x, "L", b[2], b[3], "L", b[4], b[5]],
                                    a ? (a.animate({
                                        d: f
                                    }),
                                        a.attr("visibility", T)) : t.connector = a = e.chart.renderer.path(f).attr({
                                        "stroke-width": o,
                                        stroke: i.connectorColor || t.color || "#606060",
                                        visibility: T
                                    }).add(e.group)) : a && (t.connector = a.destroy())
                        })
                }
            },
            verifyDataLabelOverflow: function(e) {
                var t = this.center, n = this.options, r = n.center, i = n = n.minSize || 80, s;
                return r[0] !== null  ? i = G(t[2] - G(e[1], e[3]), n) : (i = G(t[2] - e[1] - e[3], n),
                    t[0] += (e[3] - e[1]) / 2),
                    r[1] !== null  ? i = G(Y(i, t[2] - G(e[0], e[2])), n) : (i = G(Y(i, t[2] - e[0] - e[2]), n),
                        t[1] += (e[0] - e[2]) / 2),
                    i < t[2] ? (t[2] = i,
                        this.translate(t),
                        rn(this.points, function(e) {
                            e.dataLabel && (e.dataLabel._pos = null )
                        }),
                        this.drawDataLabels()) : s = !0,
                    s
            },
            placeDataLabels: function() {
                rn(this.points, function(e) {
                    var e = e.dataLabel, t;
                    e && ((t = e._pos) ? (e.attr(e._attr),
                        e[e.moved ? "animate" : "attr"](t),
                        e.moved = !0) : e && e.attr({
                        y: -999
                    }))
                })
            },
            alignDataLabel: Nt,
            drawTracker: wn.prototype.drawTracker,
            drawLegendSymbol: Zt.prototype.drawLegendSymbol,
            getSymbol: Nt
        },
        Yt = m(Tn, Yt),
        Gt.pie = Yt,
        e(Highcharts, {
            Axis: I,
            Chart: z,
            Color: yn,
            Legend: U,
            Pointer: R,
            Point: xn,
            Tick: B,
            Tooltip: q,
            Renderer: vt,
            Series: Tn,
            SVGElement: H,
            SVGRenderer: bn,
            arrayMin: k,
            arrayMax: L,
            charts: Ct,
            dateFormat: Et,
            format: w,
            pathAnim: xt,
            getOptions: function() {
                return wt
            },
            hasBidiBug: pt,
            isTouchDevice: lt,
            numberFormat: g,
            seriesTypes: Gt,
            setOptions: function(e) {
                return wt = t(wt, e),
                    P(),
                    wt
            },
            addEvent: an,
            removeEvent: fn,
            createElement: v,
            discardElement: O,
            css: d,
            each: rn,
            extend: e,
            map: un,
            merge: t,
            pick: p,
            splat: h,
            extendClass: m,
            pInt: n,
            wrap: b,
            svg: ht,
            canvas: dt,
            vml: !ht && !dt,
            product: "Highcharts",
            version: "3.0.7"
        })
}(),
define("highcharts", ["jQuery"], function() {}),
define("common/directives/chart", ["app", "highcharts", "../services/i18nService"], function(e, t, n) {
    e.directive("aliyunConsoleChart", function() {
        var e = n.getI18n("chart");
        return {
            restrict: "A",
            scope: {
                config: "=",
                chartCreated: "&"
            },
            template: '<div class="console-chart"><div style="width:100%;"></div></div>',
            replace: !0,
            link: function(t, n, r, i) {
                Highcharts.setOptions({
                    global: {
                        useUTC: r.useUtc && r.useUtc == "true"
                    }
                });
                var s = {
                    lang: {
                        noData: e.i18n("config.tip.noData")
                    },
                    title: {
                        text: ""
                    },
                    chart: {
                        renderTo: n[0].childNodes[0],
                        type: "spline"
                    },
                    xAxis: {
                        title: "",
                        lineWidth: 1,
                        gridLineWidth: 0,
                        gridLineColor: "#EEE",
                        lineColor: "#DDD",
                        type: "datetime",
                        maxPadding: 0,
                        minPadding: 0,
                        showFirstLabel: !0,
                        showLastLabel: !0,
                        dateTimeLabelFormats: {
                            second: "%H:%M:%S",
                            minute: "%H:%M",
                            hour: "%H:%M",
                            day: "%m - %e",
                            week: "%m - %e",
                            month: "%b '%y",
                            year: "%Y"
                        },
                        labels: {
                            overflow: "justify",
                            y: 20,
                            style: {
                                color: "#666"
                            }
                        }
                    },
                    yAxis: {
                        title: "",
                        gridLineColor: "#EEE",
                        gridLineWidth: 1,
                        lineColor: "#DDD",
                        min: 0,
                        labels: {
                            style: {
                                color: "#666"
                            },
                            overflow: "justify"
                        },
                        endOnTick: !0
                    },
                    tooltip: {
                        enabled: !0,
                        shadow: !0,
                        shared: !1,
                        borderWidth: 1,
                        borderColor: "#000",
                        backgroundColor: "rgba(0,0, 0, .85)",
                        crosshairs: {
                            width: 1,
                            color: "#BCD",
                            dashStyle: "shortdot"
                        },
                        style: {
                            color: "#FFF",
                            padding: 6
                        },
                        formatter: function() {
                            return "<strong>" + Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) + "</strong><br />" + this.series.name + ": " + this.y
                        }
                    },
                    plotOptions: {
                        series: {
                            lineWidth: 1,
                            shadow: !1,
                            fillOpacity: .1,
                            enableMouseTracking: !0,
                            marker: {
                                enabled: !1,
                                symbol: "circle"
                            },
                            states: {
                                hover: {
                                    enabled: !0,
                                    lineWidth: 1.2
                                }
                            }
                        }
                    },
                    legend: {
                        x: 0,
                        y: 0,
                        borderWidth: 0,
                        margin: 20,
                        align: "center",
                        verticalAlign: "bottom",
                        symbolWidth: 16,
                        symbolPadding: 3,
                        itemStyle: {
                            color: "#666"
                        },
                        backgroundColor: "#FAFAFA"
                    },
                    colors: ["#00ccff", "#ffBB33", "#00cc00", "#ff5c45", "#656ff5", "#ff6699", "#c38b54", "#a270cd", "#33cccc", "#aaaa22"],
                    credits: {
                        enabled: !1
                    }
                };
                t.$watch(function() {
                    return t.config
                }, function(e) {
                    if (!e)
                        return;
                    var n = {};
                    jQuery.extend(!0, n, s, t.config);
                    var r = new Highcharts.Chart(n);
                    t.chartCreated({
                        chart: r
                    })
                })
            }
        }
    })
}),
define("common/directives/validator", ["app", "../services/i18nService"], function(e, t) {
    var n = t.getI18n("validator");
    e.directive("char2to22", function() {
        return {
            require: "ngModel",
            link: function(e, t, r, i) {
                i.$parsers.unshift(function(t) {
                    var r = t.length
                        , s = 2 <= r && r <= 22;
                    return i.$setValidity("char2to22", s),
                        e.msg = s ? "" : n.i18n("validator.lb.char2to22"),
                        t
                })
            }
        }
    }).directive("char2to15", function() {
        return {
            require: "ngModel",
            link: function(e, t, r, i) {
                i.$parsers.unshift(function(t) {
                    var r = t.length
                        , s = 2 <= r && r <= 15;
                    return i.$setValidity("char2to15", s),
                        e.msg = s ? "" : n.i18n("validator.lb.char2to15"),
                        t
                })
            }
        }
    }).directive("preventHttpText", function() {
        return {
            require: "ngModel",
            link: function(e, t, r, i) {
                i.$parsers.unshift(function(t) {
                    if (t == "")
                        return i.$setValidity("startWithHttp", !0),
                            t;
                    var r = "^((https|http)?://)"
                        , s = new RegExp(r)
                        , o = !s.test(t);
                    i.$setValidity("startWithHttp", o),
                        e.message = o ? "" : n.i18n("validator.lb.preventHttpText");
                    if (o)
                        return t
                })
            }
        }
    }).directive("nameValidator", function() {
        return {
            require: "ngModel",
            priority: 2e3,
            link: function(e, t, r, i) {
                i.$parsers.push(function(t) {
                    if (t == undefined || t == "") {
                        i.$setValidity("nameValidator", !0);
                        return
                    }
                    var r = /^[a-zA-Z\u4e00-\u9fa50-9][^\s"@\/:=<>{\[\]}]{0,}$/.test(t);
                    return i.$setValidity("nameValidator", r),
                        e.message = r ? "" : n.i18n("validator.lb.nameValidator"),
                        r ? t : undefined
                })
            }
        }
    })
}),
define("common/directives/numberSpinner", ["app"], function(e) {
    e.directive("aliyunNumberSpinner", ["$parse", function(e) {
        return {
            restrict: "AM",
            require: "?^ngModel",
            scope: {
                modelValue: "="
            },
            replace: !0,
            templateUrl: "scripts/template/numberSpinner.html",
            link: function(t, n, r) {
                var i = function(e) {
                        e.originalEvent && (e = e.originalEvent);
                        var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
                        return e.detail || t > 0
                    }
                    ;
                t.readonlyInput = angular.isDefined(r.ngDisabled) ? t.$parent.$eval(r.ngDisabled) : !1,
                    t.$parent.$watch(e(r.ngDisabled), function(e) {
                        t.readonlyInput = e
                    }),
                    t.modelValue = parseInt(t.modelValue || r.value, 10);
                var s = t.modelValue;
                t.min = parseInt(r.min, 10),
                    t.max = parseInt(r.max, 10),
                    t.stepper = parseInt(r.stepper, 10),
                    t.inputSize = parseInt(r.inputSize, 10) || t.max.toString().length,
                    t.decrease = function() {
                        if (t.modelValue <= t.min || t.modelValue - t.stepper < t.min)
                            return;
                        t.modelValue -= t.stepper
                    }
                    ,
                    t.increase = function() {
                        if (t.modelValue >= t.max || t.modelValue + t.stepper > t.max)
                            return;
                        t.modelValue += t.stepper
                    }
                ;
                var o = n.find("input")
                    , u = o.eq(0);
                u.bind("mousewheel wheel", function(e) {
                    if (t.readonlyInput)
                        return;
                    e.preventDefault(),
                        t.$apply(i(e) ? t.increase() : t.decrease())
                });
                var a = /^\-?\d*$/;
                t.$watch("modelValue", function(e, n) {
                    var r = e
                        , i = a.test(r)
                        , s = /^\-/.test(t.min) || /^\-/.test(t.max);
                    i && (r < t.min || r > t.max) && (i = !1),
                        s ? t.modelValue = i ? e : n : /^\-/.test(r) ? t.modelValue = t.min : t.modelValue = parseInt(i ? e : n, 10)
                })
            }
        }
    }
    ])
}),
define("common/directives/onoff", ["app"], function(e) {
    e.directive("aliyunOnOff", function() {
        return {
            restrict: "A",
            replace: !0,
            scope: {
                ngModel: "=",
                change: "&",
                loading: "="
            },
            require: "?ngModel",
            template: '<div ng-click="switchOnOff()" ng-class="thisClass"><div class="onoff-handle"><div class="onoff-loading" ng-show="loading"></div></div></div>',
            link: function(e, t, n, r) {
                n.ngTrueValue = n.ngTrueValue || !0,
                    n.ngFalseValue = n.ngFalseValue || !1,
                    n.defaultClass = n["class"] || "console-onoff",
                    n.onClass = n.onClass || "console-onoff-on",
                    n.offClass = n.offClass || "console-onoff-off",
                n.ngModel && (e.ngModel = e.ngModel ? n.ngTrueValue : n.ngFalseValue,
                    e.$watch(function() {
                        return e.ngModel
                    }, function() {
                        e._checked = e.ngModel == n.ngTrueValue ? !0 : !1
                    })),
                    e.switchOnOff = function() {
                        if (n.disabled)
                            return !1;
                        n.loading == undefined && (e._checked = e._checked == 1 ? !1 : !0,
                        n.ngModel && (e.ngModel = e._checked ? n.ngTrueValue : n.ngFalseValue)),
                            e.change(e.ngModel)
                    }
                    ,
                    e.$watch("_checked", function() {
                        e.thisClass = n.defaultClass + " " + (e._checked ? n.onClass : n.offClass)
                    })
            }
        }
    })
}),
define("common/directives/post-require", ["app"], function(e) {
    e.directive("postRequire", function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, n, r) {
                if (!r)
                    return;
                var i = function(e) {
                        if (r.$isEmpty(e)) {
                            r.$setValidity("required", !1);
                            return
                        }
                        return r.$setValidity("required", !0),
                            e
                    }
                    ;
                t.bind("blur", function() {
                    r.$dirty && (i(r.$viewValue),
                        e.$apply())
                })
            }
        }
    })
}),
define("common/directives/search", ["app"], function(e) {
    e.directive("aliyunConsoleGlobalSearch", function() {
        return {
            restrict: "AM",
            scope: !0,
            replace: !0,
            templateUrl: "scripts/template/globalSearch.html",
            transclude: !1,
            controller: ["$scope", "$timeout", function(e, t) {
                e.isActive = !1,
                    e.searchUrl = "http://www.aliyun.com/s?k=",
                    e.activeInput = function() {
                        e.isActive = !0
                    }
                    ,
                    e.inactiveInput = function() {
                        t(function() {
                            e.isActive = !1
                        }, 100)
                    }
            }
            ],
            link: function(e, t, n, r) {
                var i = t.find(".console-search-ask-input")[0];
                n.$observe("searchUrl", function(t) {
                    t && (e.searchUrl = t)
                }),
                    n.$observe("placeholderText", function(t) {
                        angular.isDefined(t) && (e.placeholderText = t)
                    }),
                    $(i).on("keypress", function(t) {
                        t.keyCode == 13 && window.open(e.searchUrl + e.askInput, "_blank")
                    })
            }
        }
    })
}),
function(e, t) {
    typeof exports == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define("spinjs", t) : e.Spinner = t()
}(this, function() {
    function r(e, t) {
        var n = document.createElement(e || "div"), r;
        for (r in t)
            n[r] = t[r];
        return n
    }
    function i(e) {
        for (var t = 1, n = arguments.length; t < n; t++)
            e.appendChild(arguments[t]);
        return e
    }
    function o(e, r, i, o) {
        var u = ["opacity", r, ~~(e * 100), i, o].join("-")
            , a = .01 + i / o * 100
            , f = Math.max(1 - (1 - e) / r * (100 - a), e)
            , l = n.substring(0, n.indexOf("Animation")).toLowerCase()
            , c = l && "-" + l + "-" || "";
        return t[u] || (s.insertRule("@" + c + "keyframes " + u + "{" + "0%{opacity:" + f + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + r) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + f + "}" + "}", s.cssRules.length),
            t[u] = 1),
            u
    }
    function u(t, n) {
        var r = t.style, i, s;
        n = n.charAt(0).toUpperCase() + n.slice(1);
        for (s = 0; s < e.length; s++) {
            i = e[s] + n;
            if (r[i] !== undefined)
                return i
        }
        if (r[n] !== undefined)
            return n
    }
    function a(e, t) {
        for (var n in t)
            e.style[u(e, n) || n] = t[n];
        return e
    }
    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                e[r] === undefined && (e[r] = n[r])
        }
        return e
    }
    function l(e) {
        var t = {
            x: e.offsetLeft,
            y: e.offsetTop
        };
        while (e = e.offsetParent)
            t.x += e.offsetLeft,
                t.y += e.offsetTop;
        return t
    }
    function c(e, t) {
        return typeof e == "string" ? e : e[t % e.length]
    }
    function p(e) {
        if (typeof this == "undefined")
            return new p(e);
        this.opts = f(e || {}, p.defaults, h)
    }
    function d() {
        function e(e, t) {
            return r("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }
        s.addRule(".spin-vml", "behavior:url(#default#VML)"),
            p.prototype.lines = function(t, n) {
                function o() {
                    return a(e("group", {
                        coordsize: s + " " + s,
                        coordorigin: -r + " " + -r
                    }), {
                        width: s,
                        height: s
                    })
                }
                function h(t, s, u) {
                    i(f, i(a(o(), {
                        rotation: 360 / n.lines * t + "deg",
                        left: ~~s
                    }), i(a(e("roundrect", {
                        arcsize: n.corners
                    }), {
                        width: r,
                        height: n.width,
                        left: n.radius,
                        top: -n.width >> 1,
                        filter: u
                    }), e("fill", {
                        color: c(n.color, t),
                        opacity: n.opacity
                    }), e("stroke", {
                        opacity: 0
                    }))))
                }
                var r = n.length + n.width, s = 2 * r, u = -(n.width + n.length) * 2 + "px", f = a(o(), {
                    position: "absolute",
                    top: u,
                    left: u
                }), l;
                if (n.shadow)
                    for (l = 1; l <= n.lines; l++)
                        h(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (l = 1; l <= n.lines; l++)
                    h(l);
                return i(t, f)
            }
            ,
            p.prototype.opacity = function(e, t, n, r) {
                var i = e.firstChild;
                r = r.shadow && r.lines || 0,
                i && t + r < i.childNodes.length && (i = i.childNodes[t + r],
                    i = i && i.firstChild,
                    i = i && i.firstChild,
                i && (i.opacity = n))
            }
    }
    var e = ["webkit", "Moz", "ms", "O"], t = {}, n, s = function() {
        var e = r("style", {
            type: "text/css"
        });
        return i(document.getElementsByTagName("head")[0], e),
        e.sheet || e.styleSheet
    }(), h = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "auto",
        left: "auto",
        position: "relative"
    };
    p.defaults = {},
        f(p.prototype, {
            spin: function(e) {
                this.stop();
                var t = this, i = t.opts, s = t.el = a(r(0, {
                    className: i.className
                }), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                }), o = i.radius + i.length + i.width, u, f;
                e && (e.insertBefore(s, e.firstChild || null ),
                    f = l(e),
                    u = l(s),
                    a(s, {
                        left: (i.left == "auto" ? f.x - u.x + (e.offsetWidth >> 1) : parseInt(i.left, 10) + o) + "px",
                        top: (i.top == "auto" ? f.y - u.y + (e.offsetHeight >> 1) : parseInt(i.top, 10) + o) + "px"
                    })),
                    s.setAttribute("role", "progressbar"),
                    t.lines(s, t.opts);
                if (!n) {
                    var c = 0, h = (i.lines - 1) * (1 - i.direction) / 2, p, d = i.fps, v = d / i.speed, m = (1 - i.opacity) / (v * i.trail / 100), g = v / i.lines;
                    (function y() {
                        c++;
                        for (var e = 0; e < i.lines; e++)
                            p = Math.max(1 - (c + (i.lines - e) * g) % v * m, i.opacity),
                                t.opacity(s, e * i.direction + h, p, i);
                        t.timeout = t.el && setTimeout(y, ~~(1e3 / d))
                    })()
                }
                return t
            },
            stop: function() {
                var e = this.el;
                return e && (clearTimeout(this.timeout),
                e.parentNode && e.parentNode.removeChild(e),
                    this.el = undefined),
                    this
            },
            lines: function(e, t) {
                function l(e, n) {
                    return a(r(), {
                        position: "absolute",
                        width: t.length + t.width + "px",
                        height: t.width + "px",
                        background: e,
                        boxShadow: n,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / t.lines * s + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",
                        borderRadius: (t.corners * t.width >> 1) + "px"
                    })
                }
                var s = 0, u = (t.lines - 1) * (1 - t.direction) / 2, f;
                for (; s < t.lines; s++)
                    f = a(r(), {
                        position: "absolute",
                        top: 1 + ~(t.width / 2) + "px",
                        transform: t.hwaccel ? "translate3d(0,0,0)" : "",
                        opacity: t.opacity,
                        animation: n && o(t.opacity, t.trail, u + s * t.direction, t.lines) + " " + 1 / t.speed + "s linear infinite"
                    }),
                    t.shadow && i(f, a(l("#000", "0 0 4px #000"), {
                        top: "2px"
                    })),
                        i(e, i(f, l(c(t.color, s), "0 0 1px rgba(0,0,0,.1)")));
                return e
            },
            opacity: function(e, t, n) {
                t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
            }
        });
    var v = a(r("group"), {
        behavior: "url(#default#VML)"
    });
    return !u(v, "transform") && v.adj ? d() : n = u(v, "animation"),
        p
}),
define("common/directives/loading", ["app", "spinjs"], function(e, t) {
    e.directive("aliyunLoading", function() {
        return {
            restrict: "A",
            replace: !0,
            link: function(e, n, r) {
                var i = {
                    12: {
                        lines: 8,
                        length: 1,
                        width: 2,
                        radius: 3
                    },
                    16: {
                        lines: 8,
                        length: 2,
                        width: 2,
                        radius: 4
                    },
                    24: {
                        lines: 9,
                        length: 3,
                        width: 3,
                        radius: 6
                    },
                    32: {
                        lines: 9,
                        length: 4,
                        width: 4,
                        radius: 8
                    },
                    40: {
                        lines: 10,
                        length: 6,
                        width: 4,
                        radius: 10
                    },
                    48: {
                        lines: 10,
                        length: 6,
                        width: 5,
                        radius: 13
                    },
                    64: {
                        lines: 12,
                        length: 10,
                        width: 5,
                        radius: 16
                    }
                }
                    , s = i[r.size] || i[16];
                s.zIndex = 99;
                if (n[0] && n[0].children && n[0].children[0] && n[0].children[0].className == "spinner")
                    return;
                var o = (new t(s)).spin(n[0])
            }
        }
    })
}),
define("common/directives/truncateText", ["app", "angular"], function(e, t) {
    function n(e) {
        return t.element("<div/>").html(e).text()
    }
    function r(e) {
        return t.element("<div/>").text(e).html()
    }
    e.provider("aliyunTruncateTextConfig", function() {
        var e = {
            copyText: !1,
            textLength: 12
        };
        return {
            config: function(t) {
                t && (e.copyText = t.copyText,
                    e.textLength = t.textLength)
            },
            $get: function() {
                return e
            }
        }
    }).directive("aliyunTruncateText", ["$compile", "$sanitize", "aliyunTruncateTextConfig", function(e, t, i) {
        return {
            restrict: "A",
            link: function(t, s, o) {
                var u = o.textLength || 12;
                o.textLength || (u = i.textLength);
                var a = o.copyText || !1;
                if (a != 1 && a != "true") {
                    var f = i.copyText;
                    a = f
                }
                var l = o.trigger || "mouseenter"
                    , c = o.tooltipPlacement || "top";
                o.$observe("sourceText", function(i) {
                    if (i) {
                        i = i.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        var o = n(i);
                        if (o.length > u) {
                            var f = o.substr(0, u);
                            f.length < o.length && (f += "..."),
                                f = r(f),
                                i = i.replace(/["]/g, "&quot;"),
                                a ? s.html('<span tooltip-trigger="' + l + '" tooltip-placement="' + c + '"  aliyun-tooltip2="' + i + '" content-html="false">' + f + "</span>") : s.html('<span tooltip-trigger="' + l + '" tooltip-placement="' + c + '"  tooltip="' + i + '">' + f + "</span>"),
                                e(s.contents())(t)
                        } else
                            s.text(o)
                    }
                })
            }
        }
    }
    ])
}),
define("common/directives/spm", ["app", "angular"], function(e, t) {
    function n() {
        var e = window.location.hash;
        return e = e.replace(/^#\//, "").replace(/\//g, "_"),
            e
    }
    e.directive("aliyunConsoleSpm", function() {
        return {
            link: function(e, r, i) {
                var s = t.isDefined(i.spmId) ? i.spmId : i.aliyunConsoleSpm || 0
                    , o = i.spmDefaultUri || i.spmUri && i.spmUri.length > 0
                    , u = i.needConvert
                    , a = t.isDefined(i.extraParams) ? i.extraParams : ""
                    , f = "";
                if (o) {
                    var l = t.isDefined(i.spmUri) ? i.spmUri : n() || "";
                    f = l && l.length > 0 ? "uri=" + l : ""
                }
                u && (s = (s + "").split(".").join("_")),
                    i.$set("data-spm-click", "gostr=/aliyun;locaid=d" + s + ";" + f + ";" + a)
            }
        }
    })
}),
define("common/directives/tableFixed", ["app"], function(e) {
    e.directive("aliyunTableFixed", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                function o() {
                    i = t,
                        r = t.parents("table.table");
                    var n = r.css("margin-bottom") || "0px";
                    r.siblings("table.table-fixed").length ? s = r.siblings("table.table-fixed") : (s = angular.element('<table  class="table table-fixed"></table>'),
                        s.css({
                            margin: "0px",
                            "z-index": "99"
                        })),
                        i.appendTo(s),
                        r.after(s),
                        e.$on("$destroy", function() {
                            s.remove(),
                                r.css("margin-bottom", n)
                        }),
                        setTimeout(function() {
                            l(),
                                r.css("margin-bottom", i.outerHeight() + "px")
                        }),
                        angular.element(window).bind("resize", l),
                        angular.element(window).bind("scroll", c)
                }
                function l() {
                    i.find("td").eq(0).css("width", r.find("th").eq(0).outerWidth() + "px");
                    var e = r.offset().top + r.outerHeight() + i.outerHeight() - 1
                        , t = document.documentElement.clientHeight;
                    e > t ? (s.css({
                        width: r.outerWidth() + "px"
                    }),
                        a()) : (s.css({
                        width: "100%"
                    }),
                        f())
                }
                function c(e) {
                    var t = angular.element(window).scrollTop() < 0 ? 0 : angular.element(window).scrollTop()
                        , n = r.offset().top + r.outerHeight() + i.outerHeight()
                        , s = t + document.documentElement.clientHeight;
                    n < s ? f() : a()
                }
                var r, i, s, u, a = function() {
                        u = !0,
                            s.css({
                                position: "fixed",
                                "margin-top": "0px",
                                bottom: "0px"
                            })
                    }
                    , f = function() {
                        u = !1,
                            s.css({
                                position: "relative",
                                "margin-top": -i.outerHeight() - 1,
                                bottom: "auto"
                            })
                    }
                    ;
                o(),
                    e.$on("$destroy", function() {
                        angular.element(window).unbind("resize", l),
                            angular.element(window).unbind("scroll", c)
                    })
            }
        }
    })
}),
define("common/directives/textEditor", ["app", "angular", "../services/i18nService"], function(e, t, n) {
    var r = n.getI18n("directives.base")
        , i = {
        confirm: r.i18n(!0, "common.lb.confirm"),
        cancel: r.i18n(!0, "common.lb.cancel"),
        fail: r.i18n("msg.save.fail")
    };
    e.provider("textEditorConfig", function() {
        var e = {
            buttonLabel: {
                apply: i.confirm,
                cancel: i.cancel
            }
        };
        return {
            setButtonLabels: function(t) {
                e.buttonLabel = t
            },
            setProviderOptions: function(n) {
                t.extend(e, n)
            },
            $get: function() {
                return e
            }
        }
    }).filter("htmlParser", function() {
        var e = t.element("<div></div>");
        return function(t) {
            return t = e.html(t).html(),
                t
        }
    }).directive("textEditor", ["$compile", "$timeout", "$sce", "textEditorConfig", function(e, n, r, s) {
        function u(e) {
            return e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;") : e
        }
        var o = [];
        return t.element(document).on("click", function() {
            n(function() {
                if (o.length > 0) {
                    var e = o.splice(0, 1)[0];
                    e.showPanel = !1,
                        e.reject = !1,
                        e.text = e._oldText
                }
            })
        }),
        {
            scope: !0,
            restrict: "AC",
            require: "?ngModel",
            controller: ["$rootScope", "$scope", "$q", function(e, t, n) {
                t.q$ = n,
                    t.rootScope$ = e
            }
            ],
            link: function(a, f, l, c) {
                function d(e) {
                    if (e && e.length !== 0) {
                        var t = ("" + e).toLowerCase();
                        e = t != "f" && t != "0" && t != "false" && t != "no" && t != "n" && t != "[]"
                    } else
                        e = !1;
                    return e
                }
                a.inputSize = l.cInputSize || 32;
                var h = l.ngModel !== undefined
                    , p = t.element("<div></div>");
                h ? a.$watch(l.ngModel, function(e) {
                    e = u(e),
                        a._oldText = a.text = p.html(e).text()
                }) : l.$observe("cText", function(e) {
                    e = u(e),
                        a._oldText = a.text = p.html(e).text()
                }),
                    l.$observe("cNotEditable", function(e) {
                        a.notEditable = d(e)
                    });
                var v = !0;
                l.$observe("cAutoUpdate", function(e) {
                    v = e === undefined ? !0 : d(e)
                }),
                    a.title = l.cTitle,
                    a.cAlwaysShow = l.cAlwaysShow === "true",
                    t.forEach(["cFrom", "cDirectives", "cTip", "cTipClass", "cUnit"], function(e) {
                        a[e] = l[e]
                    }),
                    a.cTip = r.trustAsHtml(a.cTip);
                var m = t.element(a.cFrom ? a.cFrom : '<a class="ecs-texttrimmer-pen btn btn-default btn-xs c-texttrimmer-pen" href="#"><span class="icon-pen"></span></a>').attr({
                    "ng-show": "!notEditable && showPen"
                });
                if (!a.cAlwaysShow) {
                    a.showPen = !1;
                    var g = function w(e) {
                        a.showPen = e.type === "mouseover";
                        try {
                            w._thandler.cancel()
                        } catch (e) {}
                        a.showPen ? a.$apply() : w._thandler = n(function() {
                            a.$apply()
                        }, 200)
                    }
                        , y = f;
                    l.cTriggerSelector && (y = f.parents(l.cTriggerSelector),
                    y.length || (y = f)),
                        y.on("mouseover mouseout", function E(e) {
                            E._inited || (E._inited = !0,
                                f.after(m),
                                a.showPen = !0,
                                m.on("mouseover mouseout", function(e) {
                                    g(e)
                                })),
                                g(e)
                        })
                } else
                    a.showPen = !0,
                    !a.cFrom && f.after(m);
                e(m)(a);
                var b = function(e) {
                        if (e === undefined)
                            return a.showPanel === undefined ? !1 : a.showPanel;
                        n(function() {
                            a.disabled = !1,
                                a.showPanel = e
                        })
                    }
                    ;
                a.handler = function(e, t) {
                    e.preventDefault();
                    if (t) {
                        a.reject = !1,
                            a.disabled = !0;
                        if (a.callback) {
                            var n = a.q$.defer();
                            n.promise.then(function(e) {
                                e.success ? (a._oldText = a.text,
                                    b(!1),
                                v && (h ? c.$setViewValue(a.text) : f.text(a.text))) : (b(!0),
                                    a.reject = !0,
                                    a.message = e.message || i.fail)
                            }, function(e) {
                                e && (a.message = e.message || i.fail),
                                    b(!0),
                                    a.reject = !0
                            }),
                                a.callback(n)
                        } else
                            a._oldText = a.text,
                                b(!1),
                            v && (h ? c.$setViewValue(a.text) : f.text(a.text))
                    } else
                        a.reject = !1,
                            a.text = a._oldText,
                            b(!1)
                }
                    ,
                    m.on("click", function(r) {
                        r.preventDefault();
                        if (!b()) {
                            if (!o.length || !o[0].showPanel)
                                r.stopPropagation(),
                                    o.splice(0, 1);
                            o.push(a);
                            var i = s.buttonLabel
                                , u = ['<div ng-show="showPanel" class="c-texttrimmer-box"><p ng-if="title">{{title}}：</p><form name="textEditor">', '   <p><input name="editor" size="{{inputSize}}" class="form-control" ng-model="text" type="text" ng-disabled="disabled" ' + a.cDirectives + ' style="display:inline-block;" /> <span data-ng-if="cUnit" ng-bind="cUnit"></span></p>', '   <p class="c-texttrimmer-tip" ng-show="textEditor.$invalid || reject" ng-bind="message"></p>', '   <p class="{{cTipClass}}" ng-if="cTip" ng-bind-html="cTip"></p>', '   <div class="c-texttrimmer-btnbox">', '     <a class="btn btn-primary" href="#" ng-disabled="textEditor.$invalid || disabled" ng-click="handler($event, true);">' + i.apply + "</a>", '     <a class="btn btn-default" href="#" ng-disabled="disabled" ng-click="handler($event, false);">' + i.cancel + "</a>", "   </div>", "</form></div>"]
                                , l = function(e, n) {
                                var r = t.element(window)
                                    , i = e.offset()
                                    , s = r.scrollLeft() + r.width()
                                    , o = r.scrollTop() + r.height()
                                    , u = i.left + n[0].offsetWidth
                                    , a = n[0].offsetHeight
                                    , f = e[0].offsetHeight
                                    , l = i.top + f
                                    , c = l + a
                                    , l = o >= c ? l + 5 : i.top - f - a
                                    , h = s >= u ? i.left : i.left + s - u;
                                return n.css({
                                    top: l,
                                    left: h
                                })
                            }
                                , c = t.element(u.join("")).on("click", function(e) {
                                e.stopPropagation()
                            });
                            c.appendTo(document.body),
                                l(f, c),
                                e(c)(a),
                                a.$watch("showPanel", function(e) {
                                    !e && c.remove()
                                }),
                                a.$on("$destroy", function() {
                                    c && c.remove()
                                }),
                                a.rootScope$.$on("$locationChangeStart", function() {
                                    c.remove()
                                })
                        }
                        b(!b())
                    })
            }
        }
    }
    ])
}),
define("common/directives/selector", ["app", "../services/i18nService"], function(e, t) {
    e.directive("aliyunSelector", function() {
        var e = t.getI18n("selector");
        return {
            restrict: "AE",
            replace: !1,
            scope: {
                value: "=",
                list: "=",
                status: "=",
                loadMore: "&",
                filterBy: "="
            },
            template: '</a><ul ng-show="!showloading" class="selector-list" ><li ng-repeat="item in _selectorDataList | filter:filterBy"  ng-class="{disabled:item.disabled,active:item._active}" tooltip="{{item.tips}}" tooltip-placement="bottom" tooltip-trigger="mouseenter" tooltip-append-to-body="true" class="selector-item" ng-click="change($index)">{{item.label}}</li></ul><div ng-show="showMsg" ng-click="load()" class="selector-msg" ng-bind-html="message"></div>',
            link: function(t, n, r) {
                var i = {
                    load: r.messageLoad || '<span class="text-muted">' + e.i18n("default.message.load") + "</span>",
                    error: r.messageError || '<span class="text-danger">' + e.i18n("default.message.error") + '</span><span class="text-primary">' + e.i18n("default.message.retry") + "</span>",
                    empty: r.messageEmpty || '<span class="text-muted">' + e.i18n("default.message.empty") + "</span>",
                    hasmore: r.messageHasmore || '<span class="text-primary">' + e.i18n("default.message.more") + "</a>"
                };
                t.multi = r.multi || !1,
                    t.load = function() {
                        if (t.status == "load" || t.status == "empty")
                            return;
                        t.loadMore()
                    }
                    ,
                    t.change = function(e) {
                        var n = t._selectorDataList[e];
                        if (n.disabled)
                            return;
                        t.multi = r.multi == "true" || !1,
                            t._selectorDataList[e]._active = !t._selectorDataList[e]._active,
                            t.value = [],
                            t.multi ? (angular.forEach(t._selectorDataList, function(e, n) {
                                e._active && t.value.push(t.list[n])
                            }),
                            t.value.length < 1 && (t.value = null )) : (angular.forEach(t._selectorDataList, function(e, r) {
                                n != e && (t._selectorDataList[r]._active = !1)
                            }),
                                n._active ? t.value = t.list[e] : t.value = null )
                    }
                ;
                var s = function() {
                        t._selectorDataList = angular.copy(t.list),
                        (!t.list || t.list.length == 0) && t.status == "empty" && (t.value = null ),
                        t.statusClass && n.hasClass(t.statusClass) && n.removeClass(t.statusClass),
                            t.statusClass = "selector-status-" + t.status,
                            n.addClass(t.statusClass),
                            t.message = i[t.status],
                            t.list && t.list.length > 0 && t.status == "empty" ? t.showMsg = !1 : t.showMsg = !0
                    }
                    ;
                t.$watchCollection("[status,list]", function(e) {
                    s()
                }),
                r.listwatch == "true" && t.$watchCollection("list", function(e) {
                    s()
                });
                var o = function() {
                        t.value && angular.isArray(t.value) ? angular.forEach(t.list, function(e, n) {
                            t._selectorDataList[n]._active = !1,
                                angular.forEach(t.value, function(r, i) {
                                    if (r == e)
                                        return t._selectorDataList[n]._active = !0,
                                            !1
                                })
                        }) : t.value && angular.forEach(t.list, function(e, n) {
                            t._selectorDataList[n]._active = t.value == e
                        })
                    }
                    ;
                t.$watch("value", function(e) {
                    o()
                }),
                    s(),
                    o(),
                    n.addClass("selector")
            }
        }
    })
}),
define("common/directives/_base", ["app", "./base", "./navbar", "./chart", "./validator", "./numberSpinner", "./onoff", "./post-require", "./search", "./loading", "./truncateText", "./spm", "./tableFixed", "./textEditor", "./selector"], function(e) {}),
define("common/directives/tooltip", ["app"], function(e) {
    e.provider("$tooltip2", function() {
        function r(e) {
            var t = /[A-Z]/g
                , n = "-";
            return e.replace(t, function(e, t) {
                return (t ? n : "") + e.toLowerCase()
            })
        }
        var e = {
            placement: "top",
            animation: !0,
            popupDelay: 0,
            contentHtml: !0
        }
            , t = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        }
            , n = {};
        this.options = function(e) {
            angular.extend(n, e)
        }
            ,
            this.setTriggers = function(n) {
                angular.extend(t, n)
            }
            ,
            this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function(i, s, o, u, a, f, l) {
                return function(c, h, p) {
                    function v(e) {
                        var n = e || d.trigger || p
                            , r = t[n] || n;
                        return {
                            show: n,
                            hide: r
                        }
                    }
                    var d = angular.extend({}, e, n)
                        , m = r(c)
                        , g = l.startSymbol()
                        , y = l.endSymbol()
                        , b = "<div " + m + "-popup " + 'title="' + g + "tt_title" + y + '" ' + 'content="' + g + "tt_content" + y + '" ' + 'placement="' + g + "tt_placement" + y + '" ' + 'animation="' + g + "tt_animation" + y + '" ' + 'is-open="' + g + "tt_isOpen" + y + '"' + 'template-id="' + g + "tt_templateId" + y + '" ' + 'content-html="' + g + "tt_contentHtml" + y + '" ' + 'template-data="tt_templateData" ' + ">" + "</div>";
                    return {
                        restrict: "EA",
                        scope: !0,
                        compile: function(e, t) {
                            var n = s(b);
                            return function(t, r, i) {
                                function x() {
                                    t.tt_isOpen ? N() : T()
                                }
                                function T() {
                                    o.cancel(w);
                                    if (b && !t.$eval(i[h + "Enable"]))
                                        return;
                                    t.tt_popupDelay ? (p = o(C, t.tt_popupDelay, !1),
                                        p.then(function(e) {
                                            e()
                                        })) : C()()
                                }
                                function N() {
                                    t.$apply(function() {
                                        w = o(k, 100)
                                    })
                                }
                                function C() {
                                    return !t.tt_content && !t.tt_templateId ? angular.noop : (L(),
                                    l && o.cancel(l),
                                        s.css({
                                            top: 0,
                                            left: 0,
                                            display: "block"
                                        }),
                                        m ? a.find("body").append(s) : r.after(s),
                                        S(),
                                        t.tt_isOpen = !0,
                                        t.$digest(),
                                        S)
                                }
                                function k() {
                                    t.tt_isOpen = !1,
                                        o.cancel(p),
                                        t.tt_animation ? l = o(_, 0) : _()
                                }
                                function L() {
                                    s && _(),
                                        s = n(t, function() {}),
                                        t.$digest(),
                                        M()
                                }
                                function A() {
                                    o.cancel(w)
                                }
                                function O() {
                                    w = o(N, 50)
                                }
                                function M() {
                                    s && E && (s.bind("mouseenter", A),
                                        s.bind("mouseleave", O))
                                }
                                function _() {
                                    s && (s.remove(),
                                        s = null )
                                }
                                var s, l, p, m = angular.isDefined(d.appendToBody) ? d.appendToBody : !1, g = v(undefined), y = !1, b = angular.isDefined(i[h + "Enable"]), w, E = !0, S = function() {
                                        var e, n, i, o;
                                        e = m ? f.offset(r) : f.position(r),
                                            n = s.prop("offsetWidth"),
                                            i = s.prop("offsetHeight");
                                        switch (t.tt_placement) {
                                            case "right":
                                                o = {
                                                    top: e.top + e.height / 2 - i / 2,
                                                    left: e.left + e.width
                                                };
                                                break;
                                            case "bottom":
                                                o = {
                                                    top: e.top + e.height,
                                                    left: e.left + e.width / 2 - n / 2
                                                };
                                                break;
                                            case "left":
                                                o = {
                                                    top: e.top + e.height / 2 - i / 2,
                                                    left: e.left - n
                                                };
                                                break;
                                            default:
                                                o = {
                                                    top: e.top - i,
                                                    left: e.left + e.width / 2 - n / 2
                                                }
                                        }
                                        o.top += "px",
                                            o.left += "px",
                                            s.css(o)
                                    }
                                    ;
                                t.tt_isOpen = !1,
                                    i.$observe(c, function(e) {
                                        t.tt_content = e,
                                        !e && t.tt_isOpen && k()
                                    }),
                                    i.$observe(h + "Title", function(e) {
                                        t.tt_title = e
                                    }),
                                    i.$observe(h + "Placement", function(e) {
                                        t.tt_placement = angular.isDefined(e) ? e : d.placement
                                    }),
                                i[h + "TemplateData"] && t.$watch(i[h + "TemplateData"], function(e) {
                                    e && (t.tt_templateData = e)
                                }),
                                    i.$observe(h + "TemplateId", function(e) {
                                        t.tt_templateId = angular.isDefined(e) ? e : d.templateId
                                    }),
                                    i.$observe(h + "PopupDelay", function(e) {
                                        var n = parseInt(e, 10);
                                        t.tt_popupDelay = isNaN(n) ? d.popupDelay : n
                                    }),
                                    i.$observe("contentHtml", function(e) {
                                        t.tt_contentHtml = angular.isDefined(e) ? u(e)(t) : d.contentHtml
                                    });
                                var D = function() {
                                        y && (r.unbind(g.show, T),
                                            r.unbind(g.hide, N))
                                    }
                                    ;
                                i.$observe(h + "Trigger", function(e) {
                                    D(),
                                        g = v(e),
                                        g.show === g.hide ? (r.bind(g.show, x),
                                        g.show != "mouseenter" && (E = !1)) : (r.bind(g.show, T),
                                            r.bind(g.hide, N)),
                                        y = !0
                                });
                                var P = t.$eval(i[h + "Animation"]);
                                t.tt_animation = angular.isDefined(P) ? !!P : d.animation,
                                    i.$observe(h + "AppendToBody", function(e) {
                                        m = angular.isDefined(e) ? u(e)(t) : m
                                    }),
                                m && t.$on("$locationChangeSuccess", function() {
                                    t.tt_isOpen && k()
                                }),
                                    t.$on("$destroy", function() {
                                        o.cancel(l),
                                            o.cancel(p),
                                            D(),
                                            _()
                                    })
                            }
                        }
                    }
                }
            }
            ]
    });
    var t = function(e, t, n, r) {
            function s(t) {
                return n.when(e.get(t) || r.get(t)).then(function(n) {
                    return angular.isObject(n) ? (e.put(t, n.data),
                        n.data) : n
                })
            }
            function o(e, n, r) {
                e.$watch("templateId", function(o) {
                    if (o) {
                        var u = s(e.templateId);
                        u.then(function(s) {
                            s = i.apply(s),
                                n.find("." + r + "-content").append(s),
                                t(n.find("." + r + "-content"))(e)
                        })
                    }
                }),
                    e.$watch("templateData", function(i) {
                        i && t(n.find("." + r + "-content"))(e)
                    })
            }
            var i = String.prototype.trim || function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    }
                ;
            return {
                init: o
            }
        }
        ;
    e.directive("aliyunTooltip2Popup", ["$templateCache", "$compile", "$q", "$http", function(e, n, r, i) {
        var s = t(e, n, r, i);
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                templateId: "@",
                templateData: "=",
                contentHtml: "@"
            },
            templateUrl: "scripts/template/tooltip2.html",
            link: function(e, t, n, r) {
                s.init(e, t, "tooltip")
            }
        }
    }
    ]).directive("aliyunTooltip2", ["$tooltip2", function(e) {
        return e("aliyunTooltip2", "tooltip", "mouseenter")
    }
    ]).directive("aliyunPopover2Popup", ["$templateCache", "$compile", "$q", "$http", function(e, n, r, i) {
        var s = t(e, n, r, i);
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                templateId: "@",
                templateData: "=",
                contentHtml: "@"
            },
            templateUrl: "scripts/template/popover2.html",
            link: function(e, t, n, r) {
                s.init(e, t, "popover")
            }
        }
    }
    ]).directive("aliyunPopover2", ["$tooltip2", function(e) {
        return e("aliyunPopover2", "popover", "mouseenter")
    }
    ])
}),
define("common/directives/globalNotice", ["./aliyunCommonDirectives", "angular"], function(e, t) {
    e.directive("aliyunConsoleGlobalNotice", ["$rootScope", "$http", "$timeout", "$sce", function(e, n, r, i) {
        return {
            restrict: "A",
            templateUrl: "scripts/template/globalNotice.html",
            link: function(e, s, o) {
                function c() {
                    var t = {
                        method: "jsonp",
                        url: f,
                        params: {
                            id: o.productId,
                            callback: "JSON_CALLBACK"
                        }
                    };
                    n(t).then(function(t) {
                        t && t.data && t.data.code == "200" && t.data.data.notice && (e.notices = h(t.data.data.notice.announcement.data),
                            e.notices.length > 1 ? v() : e.notices.length == 1 && (e.notices[0].active = !0))
                    })
                }
                function h(n) {
                    var r = t.isFunction(e.noticeDataHandler) ? e.noticeDataHandler(n) || n : n;
                    return t.forEach(r, function(e, t) {
                        e.className = l[e.alert_type] || l[0],
                            e.content = i.trustAsHtml(e.content)
                    }),
                        r
                }
                function v() {
                    var n = e.notices.length;
                    t.forEach(e.notices, function(e, t) {
                        e.active = t == 0
                    }),
                        e.currentNotice = e.notices[0],
                        e.currentIndex = 0,
                        e.innerPaddingLeft = w(n),
                        g(),
                        s.on("mouseenter", function() {
                            d && y()
                        }),
                        s.on("mouseleave", function() {
                            d || g()
                        })
                }
                function m(n) {
                    t.forEach(e.notices, function(t, r) {
                        t.active = !1,
                        n.id == t.id && (e.currentIndex = r)
                    }),
                        n.active = !0,
                        e.currentNotice = n
                }
                function g() {
                    if (e.notices.length > 1 && t.isDefined(e.currentIndex) && t.isDefined(e.currentNotice)) {
                        var n = b(e.currentIndex);
                        d = r(function() {
                            m(n),
                                g()
                        }, p)
                    }
                }
                function y() {
                    d && (r.cancel(d),
                        d = undefined)
                }
                function b(n) {
                    var r = e.notices.length;
                    if (!t.isDefined(r) || n >= r || r == 0)
                        return;
                    return n == r - 1 ? e.notices[0] : e.notices[n + 1]
                }
                function w(e) {
                    return e == 1 && (e = 0),
                    {
                        "padding-left": e * 15 + 15 + "px"
                    }
                }
                function E(t) {
                    var n = e.notices.length;
                    if (n > 0)
                        return e.innerPaddingLeft = w(n),
                            t == n ? e.notices[0].active = !0 : e.notices[t].active = !0
                }
                var u = function() {
                    var e = window.location.host;
                    if (!e.match(/^.+\.aliyun\.|^aliyun\./))
                        return ".com";
                    var t = e.replace(/^.*\.aliyun|^aliyun/i, "");
                    return t || (t = ".com"),
                        t
                }()
                    , a = "//home.console.aliyun" + u + "/setNoticeStatus.js" + "?timestamp=" + (new Date).getTime()
                    , f = "//home.console.aliyun" + u + "/listAnnouncement.js" + "?timestamp=" + (new Date).getTime()
                    , l = {
                    0: "alert-warning",
                    1: "alert-success",
                    2: "alert-danger",
                    3: "alert-info"
                };
                c(),
                    e.readNotice = function(r) {
                        var i;
                        n({
                            method: "jsonp",
                            url: a,
                            params: {
                                id: r.id,
                                show: !1,
                                callback: "JSON_CALLBACK"
                            }
                        }),
                            t.forEach(e.notices, function(t, n) {
                                t.id == r.id && (e.notices.splice(n, 1),
                                    i = n)
                            }),
                            E(i)
                    }
                ;
                var p = 1e4, d;
                e.changeCurrentNotice = m
            }
        }
    }
    ])
}),
define("common/cons/aliyunConsTopbar", [], function() {
    var e = {
        categoryInfo: [{
            text: "弹性计算",
            products: [{
                id: "ecs",
                "short": "ECS",
                text: "云服务器",
                href: {
                    aliyun: "http://console.aliyun.com/ecs/index.htm",
                    jbp: "http://jbp.console.aliyun.com/ecs/index.htm"
                },
                target: "_self",
                className: "icon-ecs",
                workorderId: 12
            }, {
                id: "slb",
                "short": "SLB",
                text: "负载均衡",
                href: {
                    aliyun: "http://slb.console.aliyun.com",
                    jbp: "http://slb.jbp.console.aliyun.com"
                },
                target: "_self",
                className: "icon-slb",
                workorderId: 86
            }]
        }, {
            text: "数据库",
            products: [{
                id: "rds",
                text: "关系型数据库",
                "short": "RDS",
                href: {
                    aliyun: "http://rds.console.aliyun.com",
                    jbp: "http://rds.jbp.console.aliyun.com"
                },
                target: "_self",
                className: "icon-rds",
                workorderId: 10
            }, {
                id: "ots",
                "short": "OTS",
                text: "开放结构化数据服务",
                href: "http://ots.console.aliyun.com",
                target: "_self",
                className: "icon-ots",
                workorderId: 29
            }, {
                id: "ocs",
                "short": "OCS",
                text: "开放缓存服务",
                href: "http://ocs.console.aliyun.com/",
                target: "_self",
                className: "icon-ocs",
                workorderId: 91
            }]
        }, {
            text: "存储与CDN",
            products: [{
                id: "oss",
                "short": "OSS",
                text: "开放存储服务",
                href: {
                    aliyun: "http://oss.console.aliyun.com/console/index",
                    jbp: "http://oss.jbp.console.aliyun.com/console/index"
                },
                target: "_self",
                className: "icon-oss",
                workorderId: 22
            }, {
                id: "cdn",
                "short": "CDN",
                text: "内容分发网络",
                href: "http://cdn.console.aliyun.com/",
                target: "_self",
                className: "icon-cdn",
                workorderId: 92
            }, {
                className: "icon-oas",
                href: "http://oas.console.aliyun.com/console/index",
                id: "oas",
                "short": "OAS",
                target: "_self",
                text: "开放归档服务",
                workorderId: 1211
            }]
        }, {
            text: "大规模计算",
            products: [{
                id: "odps",
                "short": "ODPS",
                text: "开放数据处理服务",
                href: "http://odps.console.aliyun.com/console/index",
                target: "_self",
                className: "icon-odps",
                workorderId: 47
            }]
        }, {
            text: "应用服务",
            products: [{
                id: "ace",
                text: "云引擎",
                "short": "ACE",
                href: "http://ace.console.aliyun.com",
                target: "_self",
                className: "icon-ace",
                workorderId: 18
            }, {
                id: "sls",
                "short": "SLS",
                text: "简单日志服务",
                href: "http://sls.console.aliyun.com",
                target: "_self",
                className: "icon-sls",
                workorderId: 1210
            }, {
                className: "icon-mqs",
                href: "http://mqs.console.aliyun.com",
                id: "mqs",
                "short": "MQS",
                target: "_self",
                text: "消息队列服务",
                workorderId: 1212
            }, {
                className: "icon-opensearch",
                href: "http://opensearch.console.aliyun.com/",
                id: "opensearch",
                "short": "",
                target: "_self",
                text: "开放搜索服务",
                workorderId: 1213
            }, {
                className: "icon-pts",
                href: "http://pts.aliyun.com/aliyun",
                id: "pts",
                "short": "PTS",
                target: "_self",
                text: "性能测试服务",
                workorderId: 1216
            }]
        }, {
            text: "安全与管理",
            products: [{
                id: "yundun",
                "short": "",
                text: "云盾",
                href: "http://console.aliyun.com/yundun/",
                target: "_self",
                className: "icon-yundun",
                workorderId: 80
            }, {
                id: "jiankong",
                "short": "",
                text: "云监控",
                href: "http://console.aliyun.com/jiankong/",
                target: "_self",
                className: "icon-yunjiankong",
                workorderId: 90
            }]
        }],
        link: {
            userLinks: [{
                text: "用户中心",
                href: "http://i.aliyun.com/",
                target: "_blank"
            }, {
                text: "我的订单",
                href: "http://i.aliyun.com/order",
                target: "_blank"
            }, {
                text: "账户管理",
                href: "http://i.aliyun.com/amount",
                target: "_blank"
            }, {
                text: "退出",
                href: "https://account.aliyun.com/logout/logout.htm?oauth_callback=",
                target: "_self"
            }],
            helpLink: {
                text: "提交工单",
                href: "http://workorder.aliyun.com/add.htm?productId=",
                hrefIndex: "http://workorder.aliyun.com/addIndex.htm",
                target: "_blank"
            },
            logoLink: {
                href: "http://www.aliyun.com",
                target: "_blank",
                imgLink: "http://www.aliyun.com/favicon.ico"
            },
            homeLink: {
                href: {
                    aliyun: "http://console.aliyun.com/index.html?noredirect",
                    jbp: "http://jbp.console.aliyun.com/index.html?noredirect"
                },
                text: "控制台首页",
                target: "_self"
            },
            accessKeysLink: {
                text: "AccessKeys",
                href: "http://i.aliyun.com/access_key/",
                target: "_blank"
            },
            searchLink: {
                text: "全局搜索",
                href: "http://www.aliyun.com/s?k="
            }
        }
    }
        , t = {
        categoryInfo: [{
            products: [{
                className: "icon-ecs",
                href: "http://console.aliyun.com/ecs/index.htm",
                id: "ecs",
                "short": "ECS",
                spm: 1,
                status: !0,
                target: "_self",
                text: "云服务器",
                workorderId: "12"
            }, {
                className: "icon-slb",
                href: "http://slb.console.aliyun.com",
                id: "slb",
                "short": "SLB",
                spm: 2,
                status: !0,
                target: "_self",
                text: "负载均衡",
                workorderId: "86"
            }],
            text: "弹性计算"
        }, {
            products: [{
                className: "icon-rds",
                href: "http://rds.console.aliyun.com",
                id: "rds",
                "short": "RDS",
                spm: 3,
                status: !0,
                target: "_self",
                text: "关系型数据库",
                workorderId: "10"
            }, {
                className: "icon-ots",
                href: "http://ots.console.aliyun.com",
                id: "ots",
                "short": "OTS",
                spm: 6,
                status: !0,
                target: "_self",
                text: "开放结构化数据服务",
                workorderId: "29"
            }, {
                className: "icon-ocs",
                href: "http://ocs.console.aliyun.com/",
                id: "ocs",
                "short": "OCS",
                spm: 7,
                status: !0,
                target: "_self",
                text: "开放缓存服务",
                workorderId: "91"
            }],
            text: "数据库"
        }, {
            products: [{
                className: "icon-oss",
                href: "http://oss.console.aliyun.com/console/index",
                id: "oss",
                "short": "OSS",
                spm: 4,
                status: !0,
                target: "_self",
                text: "开放存储服务",
                workorderId: "22"
            }, {
                className: "icon-cdn",
                href: "http://cdn.console.aliyun.com/",
                id: "cdn",
                "short": "CDN",
                spm: 5,
                status: !0,
                target: "_self",
                text: "内容分发网络",
                workorderId: "92"
            }, {
                className: "icon-oas",
                href: "http://oas.console.aliyun.com/console/index",
                id: "oas",
                "short": "OAS",
                spm: 14,
                status: !0,
                target: "_self",
                text: "开放归档服务",
                workorderId: "1211"
            }],
            text: "存储与CDN"
        }, {
            products: [{
                className: "icon-odps",
                href: "http://odps.console.aliyun.com/console/index",
                id: "odps",
                "short": "ODPS",
                spm: 8,
                status: !0,
                target: "_self",
                text: "开放数据处理服务",
                workorderId: "47"
            }],
            text: "大规模计算"
        }, {
            products: [{
                className: "icon-ace",
                href: "http://ace.console.aliyun.com",
                id: "ace",
                "short": "ACE",
                spm: 9,
                status: !0,
                target: "_self",
                text: "云引擎",
                workorderId: "18"
            }, {
                className: "icon-sls",
                href: "http://sls.console.aliyun.com",
                id: "sls",
                "short": "SLS",
                spm: 12,
                status: !0,
                target: "_self",
                text: "简单日志服务",
                workorderId: "1210"
            }, {
                className: "icon-mqs",
                href: "http://mqs.console.aliyun.com",
                id: "mqs",
                "short": "MQS",
                spm: 13,
                status: !1,
                target: "_self",
                text: "消息队列服务",
                workorderId: "1212"
            }, {
                className: "icon-opensearch",
                href: "http://opensearch.console.aliyun.com",
                id: "opensearch",
                "short": "",
                spm: 15,
                status: !1,
                target: "_self",
                text: "开放搜索服务",
                workorderId: "1213"
            }, {
                className: "icon-pts",
                href: "http://pts.aliyun.com/aliyun",
                id: "pts",
                "short": "PTS",
                spm: 16,
                status: !0,
                target: "_self",
                text: "性能测试服务",
                workorderId: "1216"
            }],
            text: "应用服务"
        }, {
            products: [{
                className: "icon-yundun",
                href: "http://yundun.console.aliyun.com/",
                id: "yundun",
                "short": "",
                spm: 10,
                status: !0,
                target: "_self",
                text: "云盾",
                workorderId: "80"
            }, {
                className: "icon-yunjiankong",
                href: "http://console.aliyun.com/jiankong/",
                id: "jiankong",
                "short": "",
                spm: 11,
                status: !0,
                target: "_self",
                text: "云监控",
                workorderId: "90"
            }],
            text: "安全与管理"
        }],
        link: {
            accessKeysLink: {
                href: "http://i.aliyun.com/access_key/",
                target: "_blank",
                text: "AccessKeys"
            },
            helpLink: {
                href: "http://workorder.aliyun.com/add.htm?productId=",
                hrefIndex: "http://workorder.aliyun.com/addIndex.htm",
                target: "_blank",
                text: "提交工单"
            },
            helpLinks: {
                text: "管理工单",
                links: [{
                    href: "http://workorder.aliyun.com/",
                    target: "_blank",
                    text: "我的工单"
                }, {
                    href: "http://workorder.aliyun.com/add.htm?productId=",
                    hrefIndex: "http://workorder.aliyun.com/addIndex.htm",
                    target: "_blank",
                    text: "提交工单"
                }]
            },
            homeLink: {
                href: "http://console.aliyun.com/index.html?noredirect",
                target: "_self",
                text: "控制台首页"
            },
            logoLink: {
                href: "http://www.aliyun.com",
                imgLink: "http://www.aliyun.com/favicon.ico",
                target: "_blank"
            },
            notificationLink: {
                blankText: "您暂时没有公告消息",
                href: "http://bbs.aliyun.com/thread/103.html?type=907&type=907#tabA",
                text: "查看更多",
                title: "公告"
            },
            productLink: {
                text: "产品与服务"
            },
            searchLink: {
                href: "http://www.aliyun.com/s?k=",
                text: "全局搜索"
            },
            userLinks: [{
                href: "http://i.aliyun.com/",
                target: "_blank",
                text: "用户中心"
            }, {
                href: "http://i.aliyun.com/order",
                target: "_blank",
                text: "我的订单"
            }, {
                href: "http://i.aliyun.com/amount",
                target: "_blank",
                text: "账户管理"
            }, {
                href: "https://account.aliyun.com/logout/logout.htm?oauth_callback=",
                target: "_self",
                text: "退出"
            }]
        }
    };
    return {
        ALPHA_CONS: e,
        BETA_CONS: t
    }
}),
define("common/directives/topbar-new", ["./aliyunCommonDirectives", "../cons/aliyunConsTopbar"], function(e, t) {
    e.constant("aliyunConsoleTopbarConf", {
        version: "beta",
        productId: "",
        dataSpm: "100",
        showGlobalSearch: !0,
        showLocaleButton: !1
    }).provider("aliyunConsoleTopbarSetting", ["aliyunConsoleTopbarConf", function(e) {
        var t = e;
        return {
            setProviderOptions: function(e) {
                angular.extend(t, e)
            },
            $get: function() {
                return t
            }
        }
    }
    ]).directive("aliyunConsoleTopbarNew", ["$timeout", "$http", "aliyunConsoleTopbarSetting", function(e, n, r) {
        var i = function() {
            function n(n, r) {
                var i = function(e, t) {
                        var n = angular.copy(e);
                        return t && n ? n.href = n.href + t : n.href = n.hrefIndex || n.href,
                            n
                    }
                    , o = function(e, t) {
                        var r = [], i = [], s, o = 0;
                        angular.isArray(e) && (s = e.length,
                            angular.forEach(e, function(e, n) {
                                a(e.products, t),
                                    i.push(e);
                                if (n % 2 == 1 || n == s - 1)
                                    r.push(i),
                                        i = [],
                                        o++
                            })),
                            n.productsInfo = r,
                            n.productsListWidth = u(o)
                    }
                    , u = function(e) {
                        return {
                            width: e * 190 + 20 + 2 + "px"
                        }
                    }
                    , a = function(e, t) {
                        var r = s.options.productId;
                        angular.forEach(e, function(e, i) {
                            angular.isObject(e.href) && (e.href = t ? e.href.jbp || e.href.aliyun : e.href.aliyun),
                            e.id == r && (n.currentProduct = e)
                        })
                    }
                    , f = function(e) {
                        e.link && (n.logoLink = e.link.logoLink,
                            n.userLinks = t(e.link.userLinks),
                            n.homeLink = e.link.homeLink,
                            n.accessKeysLink = e.link.accessKeysLink,
                            n.helpLink = i(e.link.helpLink, n.currentProduct && n.currentProduct.workorderId),
                            n.searchLink = e.link.searchLink,
                            n.notificationLink = e.link.notificationLink,
                            n.productLink = e.link.productLink)
                    }
                    ;
                r ? e(function() {
                    n.account = r.account,
                        n.isJBP = r.isJBP,
                        o(r.categoryInfo, r.isJBP),
                        n.notification = r.notice.notification,
                        n.productStatus = r.product,
                        f(r)
                }) : (o(s.options.defaultData.categoryInfo),
                    f(s.options.defaultData))
            }
            function r(n, r) {
                var i = {
                        "zh-cn": 200,
                        en: 240
                    }
                    , o = function(e, t) {
                        var n = angular.copy(e);
                        return angular.isDefined(n) && angular.forEach(n.links, function(e) {
                            e.hrefIndex && (e.href = t ? e.href + t : e.hrefIndex)
                        }),
                            n
                    }
                    , u = function(e) {
                        var t = [], r = [], i, s = 0;
                        angular.isArray(e) && (i = e.length,
                            angular.forEach(e, function(e, n) {
                                f(e.products),
                                    r.push(e);
                                if (n % 2 == 1 || n == i - 1)
                                    t.push(r),
                                        r = [],
                                        s++
                            })),
                            n.productsInfo = t,
                            n.productsListWidth = a(s)
                    }
                    , a = function(e) {
                        var t = i[n.localeId] || i["zh-cn"];
                        return {
                            width: e * t + 20 + 2 + "px"
                        }
                    }
                    , f = function(e, t) {
                        var r = s.options.productId;
                        angular.forEach(e, function(e, t) {
                            e.id == r && (n.currentProduct = e)
                        })
                    }
                    , l = function(e) {
                        e.link && (n.logoLink = e.link.logoLink,
                            n.userLinks = t(e.link.userLinks),
                            n.homeLink = e.link.homeLink,
                            n.accessKeysLink = e.link.accessKeysLink,
                            n.helpLinks = o(e.link.helpLinks, n.currentProduct && n.currentProduct.workorderId),
                            n.searchLink = e.link.searchLink,
                            n.notificationLink = e.link.notificationLink,
                            n.productLink = e.link.productLink)
                    }
                    , c = function(e) {
                        n.locale = {},
                            n.locale.options = s.options.locale.options,
                            n.locale.show = s.options.locale.show,
                            n.locale.current = h(e),
                            n.changeLocale = function(e) {
                                var t = window.location.search, n = s.options.locale.localeKey, r;
                                if (t.indexOf("?") != -1) {
                                    t = t.substring(1),
                                        r = t.split("&");
                                    var i = !1;
                                    angular.forEach(r, function(t, s) {
                                        var o = t.indexOf(n);
                                        o != -1 && (r[s] = t.substring(0, t.indexOf("=")) + "=" + e.id,
                                            i = !0)
                                    }),
                                    i || r.push(n + "=" + e.id)
                                } else
                                    r = [n + "=" + e.id];
                                var o = window.location.origin + window.location.pathname + "?" + r.join("&") + window.location.hash;
                                window.location = o
                            }
                    }
                    , h = function(e) {
                        var t = s.options.locale.options
                            , n = t[0];
                        return angular.forEach(t, function(t, r) {
                            t.id === e && (n = t)
                        }),
                            n
                    }
                    ;
                r ? e(function() {
                    n.account = r.account,
                        n.localeId = r.locale,
                        u(r.categoryInfo),
                        n.notification = r.notice.notification,
                        n.productStatus = r.product,
                        l(r),
                        c(r.locale)
                }) : (n.localeId = "zh-cn",
                    u(s.options.defaultData.categoryInfo),
                    l(s.options.defaultData),
                    c("zh-cn"))
            }
            var t = function(e) {
                    return angular.forEach(e, function(e, t) {
                        var n = e.href;
                        angular.isString(n) && /oauth_callback=$/.test(n) && (e.href = n + encodeURIComponent(window.location.href))
                    }),
                        e
                }
                ;
            return {
                formatInfoForAlpha: n,
                formatInfoForBeta: r
            }
        }()
            , s = {};
        return s.suffix = function() {
            var e = window.location.host;
            if (!e.match(/^.+\.aliyun\.|^aliyun\./))
                return ".com";
            var t = e.replace(/^.*\.aliyun|^aliyun/i, "");
            return t || (t = ".com"),
                t
        }(),
            s.defaultOptions = {
                productId: "",
                templateUrl: "scripts/template/topbarAlpha.html",
                formatter: i.formatInfoForAlpha,
                defaultData: t.ALPHA_CONS,
                defaultFormatter: function(e) {
                    s.options.formatter(e)
                },
                topbarPortal: "//home.console.aliyun" + s.suffix + "/topbarInfo.js",
                readNoticePortal: "//home.console.aliyun" + s.suffix + "/setNoticeStatus.js",
                showGlobalSearch: !0
            },
            s.versionOptions = {
                alpha: {},
                beta: {
                    templateUrl: "scripts/template/topbarBeta.html",
                    formatter: i.formatInfoForBeta,
                    topbarPortal: "//home.console.aliyun" + s.suffix + "/topbar/info.js",
                    defaultData: t.BETA_CONS,
                    locale: {
                        options: [{
                            id: "zh-cn",
                            text: "CN"
                        }, {
                            id: "en",
                            text: "EN"
                        }],
                        localeKey: "lang",
                        show: r.showLocaleButton
                    }
                }
            },
            s.options = function() {
                var t = angular.copy(s.defaultOptions);
                return s.versionOptions[r.version] && angular.extend(t, s.versionOptions[r.version]),
                    angular.extend(t, r),
                    t
            }(),
        {
            restrict: "A",
            replace: !0,
            templateUrl: s.options.templateUrl,
            transclude: !1,
            link: function(t, r, i) {
                i.dataSpm || i.$set("dataSpm", s.options.dataSpm),
                    angular.forEach(["productId"], function(e) {
                        angular.isDefined(i[e]) && (s.options[e] = i[e])
                    }),
                    angular.forEach(["showGlobalSearch"], function(e) {
                        angular.isDefined(s.options[e]) && (t[e] = s.options[e])
                    });
                var o = function() {
                    n({
                        method: "jsonp",
                        url: s.options.topbarPortal,
                        params: {
                            callback: "JSON_CALLBACK",
                            timestamp: (new Date).getTime()
                        }
                    }).then(function(e) {
                        var n = e.data;
                        n && n.code == "200" && s.options.formatter(t, n.data)
                    }, function() {
                        s.options.defaultFormatter(t)
                    })
                }();
                t.readNoticeAction = function(r) {
                    r.read || n({
                        method: "jsonp",
                        url: s.options.readNoticePortal,
                        params: {
                            id: r.id,
                            read: !0,
                            callback: "JSON_CALLBACK",
                            timestamp: (new Date).getTime()
                        }
                    }).then(function(n) {
                        var i = n.data;
                        i.code == "200" && e(function() {
                            t.notification.unread > 0 && t.notification.unread--,
                                r.read = !0
                        })
                    })
                }
            }
        }
    }
    ])
}),
define("home/bootstrap", ["angular", "app", "home/initConfig", "home/controllers/_base", "home/states/_base", "home/services/_base", "home/directives/_base", "home/filters/_base", "common/services/_base", "common/services/topicService", "common/directives/_base", "common/directives/tooltip", "common/directives/globalNotice", "common/directives/topbar-new", "common/directives/viewFramework"], function(e) {
    e.element(document).ready(function() {
        e.bootstrap(document, ["homeConsole"])
    })
});
