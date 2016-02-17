

(function(e, t) {

    function(e, t, n) {
        t.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function(e, r) {
            function l() {
                var e, o, u, a;
                for (e in s)
                    f(i[e]) && r.cookies(e, n);
                for (e in i)
                    o = i[e],
                        t.isString(o) ? o !== s[e] && (r.cookies(e, o),
                            a = !0) : t.isDefined(s[e]) ? i[e] = s[e] : delete i[e];
                if (a) {
                    a = !1,
                        u = r.cookies();
                    for (e in i)
                        i[e] !== u[e] && (f(u[e]) ? delete i[e] : i[e] = u[e],
                            a = !0)
                }
            }
            var i = {}, s = {}, o, u = !1, a = t.copy, f = t.isUndefined;
            return r.addPollFn(function() {
                var t = r.cookies();
                o != t && (o = t,
                    a(t, s),
                    a(t, i),
                u && e.$apply())
            })(),
                u = !0,
                e.$watch(l),
                i
        }
        ]).factory("$cookieStore", ["$cookies", function(e) {
            return {
                get: function(n) {
                    var r = e[n];
                    return r ? t.fromJson(r) : r
                },
                put: function(n, r) {
                    e[n] = t.toJson(r)
                },
                remove: function(t) {
                    delete e[t]
                }
            }
        }
        ])
    }(window, window.angular),
        define("angular-cookies", ["angular"], function() {}),
    "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
        function(e, t, n) {
            function r(e, t) {
                return O(new (O(function() {}, {
                    prototype: e
                })), t)
            }
            function i(e) {
                return A(arguments, function(t) {
                    t !== e && A(t, function(t, n) {
                        e.hasOwnProperty(n) || (e[n] = t)
                    })
                }),
                    e
            }
            function s(e, t) {
                var n = [];
                for (var r in e.path)
                    if ("" !== e.path[r]) {
                        if (!t.path[r])
                            break;
                        n.push(e.path[r])
                    }
                return n
            }
            function o(e, t) {
                if (Array.prototype.indexOf)
                    return e.indexOf(t, Number(arguments[2]) || 0);
                var n = e.length >>> 0
                    , r = Number(arguments[2]) || 0;
                for (r = 0 > r ? Math.ceil(r) : Math.floor(r),
                     0 > r && (r += n); n > r; r++)
                    if (r in e && e[r] === t)
                        return r;
                return -1
            }
            function u(e, t, n, r) {
                var i, u = s(n, r), a = {}, f = [];
                for (var l in u)
                    if (u[l].params && u[l].params.length) {
                        i = u[l].params;
                        for (var c in i)
                            o(f, i[c]) >= 0 || (f.push(i[c]),
                                a[i[c]] = e[i[c]])
                    }
                return O({}, a, t)
            }
            function a(e, t) {
                var n = {};
                return A(e, function(e) {
                    var r = t[e];
                    n[e] = null  != r ? String(r) : null
                }),
                    n
            }
            function f(e, t, n) {
                if (!n) {
                    n = [];
                    for (var r in e)
                        n.push(r)
                }
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    if (e[s] != t[s])
                        return !1
                }
                return !0
            }
            function l(e, t) {
                var n = {};
                return A(e, function(e) {
                    n[e] = t[e]
                }),
                    n
            }
            function c(e, t) {
                var r = 1
                    , s = 2
                    , o = {}
                    , u = []
                    , a = o
                    , f = O(e.when(o), {
                    $$promises: o,
                    $$values: o
                });
                this.study = function(o) {
                    function l(e, n) {
                        if (d[n] !== s) {
                            if (p.push(n),
                                d[n] === r)
                                throw p.splice(0, p.indexOf(n)),
                                    new Error("Cyclic dependency: " + p.join(" -> "));
                            if (d[n] = r,
                                    C(e))
                                h.push(n, [function() {
                                    return t.get(e)
                                }
                                ], u);
                            else {
                                var i = t.annotate(e);
                                A(i, function(e) {
                                    e !== n && o.hasOwnProperty(e) && l(o[e], e)
                                }),
                                    h.push(n, e, i)
                            }
                            p.pop(),
                                d[n] = s
                        }
                    }
                    function c(e) {
                        return k(e) && e.then && e.$$promises
                    }
                    if (!k(o))
                        throw new Error("'invocables' must be an object");
                    var h = []
                        , p = []
                        , d = {};
                    return A(o, l),
                        o = p = d = null ,
                        function(r, s, o) {
                            function u() {
                                --y || (b || i(g, s.$$values),
                                    v.$$values = g,
                                    v.$$promises = !0,
                                    d.resolve(g))
                            }
                            function l(e) {
                                v.$$failure = e,
                                    d.reject(e)
                            }
                            function p(n, i, s) {
                                function a(e) {
                                    c.reject(e),
                                        l(e)
                                }
                                function f() {
                                    if (!T(v.$$failure))
                                        try {
                                            c.resolve(t.invoke(i, o, g)),
                                                c.promise.then(function(e) {
                                                    g[n] = e,
                                                        u()
                                                }, a)
                                        } catch (e) {
                                            a(e)
                                        }
                                }
                                var c = e.defer()
                                    , h = 0;
                                A(s, function(e) {
                                    m.hasOwnProperty(e) && !r.hasOwnProperty(e) && (h++,
                                        m[e].then(function(t) {
                                            g[e] = t,
                                            --h || f()
                                        }, a))
                                }),
                                h || f(),
                                    m[n] = c.promise
                            }
                            if (c(r) && o === n && (o = s,
                                    s = r,
                                    r = null ),
                                    r) {
                                if (!k(r))
                                    throw new Error("'locals' must be an object")
                            } else
                                r = a;
                            if (s) {
                                if (!c(s))
                                    throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                            } else
                                s = f;
                            var d = e.defer()
                                , v = d.promise
                                , m = v.$$promises = {}
                                , g = O({}, r)
                                , y = 1 + h.length / 3
                                , b = !1;
                            if (T(s.$$failure))
                                return l(s.$$failure),
                                    v;
                            s.$$values ? (b = i(g, s.$$values),
                                u()) : (O(m, s.$$promises),
                                s.then(u, l));
                            for (var w = 0, E = h.length; E > w; w += 3)
                                r.hasOwnProperty(h[w]) ? u() : p(h[w], h[w + 1], h[w + 2]);
                            return v
                        }
                }
                    ,
                    this.resolve = function(e, t, n, r) {
                        return this.study(e)(t, n, r)
                    }
            }
            function h(e, t, n) {
                this.fromConfig = function(e, t, n) {
                    return T(e.template) ? this.fromString(e.template, t) : T(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : T(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
                }
                    ,
                    this.fromString = function(e, t) {
                        return N(e) ? e(t) : e
                    }
                    ,
                    this.fromUrl = function(n, r) {
                        return N(n) && (n = n(r)),
                            null  == n ? null  : e.get(n, {
                                cache: t
                            }).then(function(e) {
                                return e.data
                            })
                    }
                    ,
                    this.fromProvider = function(e, t, r) {
                        return n.invoke(e, null , r || {
                                params: t
                            })
                    }
            }
            function p(e) {
                function t(t) {
                    if (!/^\w+(-+\w+)*$/.test(t))
                        throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
                    if (s[t])
                        throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
                    s[t] = !0,
                        f.push(t)
                }
                function n(e) {
                    return e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&")
                }
                var r, i = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, s = {}, o = "^", u = 0, a = this.segments = [], f = this.params = [];
                this.source = e;
                for (var l, c, h; (r = i.exec(e)) && (l = r[2] || r[3],
                    c = r[4] || ("*" == r[1] ? ".*" : "[^/]*"),
                    h = e.substring(u, r.index),
                    !(h.indexOf("?") >= 0)); )
                    o += n(h) + "(" + c + ")",
                        t(l),
                        a.push(h),
                        u = i.lastIndex;
                h = e.substring(u);
                var p = h.indexOf("?");
                if (p >= 0) {
                    var d = this.sourceSearch = h.substring(p);
                    h = h.substring(0, p),
                        this.sourcePath = e.substring(0, u + p),
                        A(d.substring(1).split(/[&?]/), t)
                } else
                    this.sourcePath = e,
                        this.sourceSearch = "";
                o += n(h) + "$",
                    a.push(h),
                    this.regexp = new RegExp(o),
                    this.prefix = a[0]
            }
            function d() {
                this.compile = function(e) {
                    return new p(e)
                }
                    ,
                    this.isMatcher = function(e) {
                        return k(e) && N(e.exec) && N(e.format) && N(e.concat)
                    }
                    ,
                    this.$get = function() {
                        return this
                    }
            }
            function v(e) {
                function t(e) {
                    var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
                    return null  != t ? t[1].replace(/\\(.)/g, "$1") : ""
                }
                function n(e, t) {
                    return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                        return t["$" === n ? 0 : Number(n)]
                    })
                }
                function r(e, t, n) {
                    if (!n)
                        return !1;
                    var r = e.invoke(t, t, {
                        $match: n
                    });
                    return T(r) ? r : !0
                }
                var i = []
                    , s = null ;
                this.rule = function(e) {
                    if (!N(e))
                        throw new Error("'rule' must be a function");
                    return i.push(e),
                        this
                }
                    ,
                    this.otherwise = function(e) {
                        if (C(e)) {
                            var t = e;
                            e = function() {
                                return t
                            }
                        } else if (!N(e))
                            throw new Error("'rule' must be a function");
                        return s = e,
                            this
                    }
                    ,
                    this.when = function(i, s) {
                        var o, u = C(s);
                        if (C(i) && (i = e.compile(i)),
                            !u && !N(s) && !L(s))
                            throw new Error("invalid 'handler' in when()");
                        var a = {
                            matcher: function(t, n) {
                                return u && (o = e.compile(n),
                                    n = ["$match", function(e) {
                                        return o.format(e)
                                    }
                                    ]),
                                    O(function(e, i) {
                                        return r(e, n, t.exec(i.path(), i.search()))
                                    }, {
                                        prefix: C(t.prefix) ? t.prefix : ""
                                    })
                            },
                            regex: function(e, i) {
                                if (e.global || e.sticky)
                                    throw new Error("when() RegExp must not be global or sticky");
                                return u && (o = i,
                                    i = ["$match", function(e) {
                                        return n(o, e)
                                    }
                                    ]),
                                    O(function(t, n) {
                                        return r(t, i, e.exec(n.path()))
                                    }, {
                                        prefix: t(e)
                                    })
                            }
                        }
                            , f = {
                            matcher: e.isMatcher(i),
                            regex: i instanceof RegExp
                        };
                        for (var l in f)
                            if (f[l])
                                return this.rule(a[l](i, s));
                        throw new Error("invalid 'what' in when()")
                    }
                    ,
                    this.$get = ["$location", "$rootScope", "$injector", function(e, t, n) {
                        function r(t) {
                            function r(t) {
                                var r = t(n, e);
                                return r ? (C(r) && e.replace().url(r),
                                    !0) : !1
                            }
                            if (!t || !t.defaultPrevented) {
                                var o, u = i.length;
                                for (o = 0; u > o; o++)
                                    if (r(i[o]))
                                        return;
                                s && r(s)
                            }
                        }
                        return t.$on("$locationChangeSuccess", r),
                        {
                            sync: function() {
                                r()
                            }
                        }
                    }
                    ]
            }
            function m(e, i, s) {
                function o(e) {
                    return 0 === e.indexOf(".") || 0 === e.indexOf("^")
                }
                function c(e, t) {
                    var r = C(e)
                        , i = r ? e : e.name
                        , s = o(i);
                    if (s) {
                        if (!t)
                            throw new Error("No reference point given for path '" + i + "'");
                        for (var u = i.split("."), a = 0, f = u.length, l = t; f > a; a++)
                            if ("" !== u[a] || 0 !== a) {
                                if ("^" !== u[a])
                                    break;
                                if (!l.parent)
                                    throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                                l = l.parent
                            } else
                                l = t;
                        u = u.slice(a).join("."),
                            i = l.name + (l.name && u ? "." : "") + u
                    }
                    var c = w[i];
                    return !c || !r && (r || c !== e && c.self !== e) ? n : c
                }
                function h(e, t) {
                    E[e] || (E[e] = []),
                        E[e].push(t)
                }
                function p(t) {
                    t = r(t, {
                        self: t,
                        resolve: t.resolve || {},
                        toString: function() {
                            return this.name
                        }
                    });
                    var n = t.name;
                    if (!C(n) || n.indexOf("@") >= 0)
                        throw new Error("State must have a valid name");
                    if (w.hasOwnProperty(n))
                        throw new Error("State '" + n + "'' is already defined");
                    var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : C(t.parent) ? t.parent : "";
                    if (i && !w[i])
                        return h(i, t.self);
                    for (var s in x)
                        N(x[s]) && (t[s] = x[s](t, x.$delegates[s]));
                    if (w[n] = t,
                        !t[S] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
                            b.$current.navigable == t && f(e, n) || b.transitionTo(t, e, {
                                location: !1
                            })
                        }
                        ]),
                            E[n])
                        for (var o = 0; o < E[n].length; o++)
                            p(E[n][o]);
                    return t
                }
                function d(e, t) {
                    return C(e) && !T(t) ? x[e] : N(t) && C(e) ? (x[e] && !x.$delegates[e] && (x.$delegates[e] = x[e]),
                        x[e] = t,
                        this) : this
                }
                function v(e, t) {
                    return k(e) ? t = e : t.name = e,
                        p(t),
                        this
                }
                function m(e, i, o, h, p, d, v) {
                    function m() {
                        v.url() !== P && (v.url(P),
                            v.replace())
                    }
                    function E(e, n, r, s, u) {
                        var a = r ? n : l(e.params, n)
                            , f = {
                            $stateParams: a
                        };
                        u.resolve = p.resolve(e.resolve, f, u.resolve, e);
                        var c = [u.resolve.then(function(e) {
                            u.globals = e
                        })];
                        return s && c.push(s),
                            A(e.views, function(n, r) {
                                var i = n.resolve && n.resolve !== e.resolve ? n.resolve : {};
                                i.$template = [function() {
                                    return o.load(r, {
                                            view: n,
                                            locals: f,
                                            params: a,
                                            notify: !1
                                        }) || ""
                                }
                                ],
                                    c.push(p.resolve(i, f, u.resolve, e).then(function(s) {
                                        if (N(n.controllerProvider) || L(n.controllerProvider)) {
                                            var o = t.extend({}, i, f);
                                            s.$$controller = h.invoke(n.controllerProvider, null , o)
                                        } else
                                            s.$$controller = n.controller;
                                        s.$$state = e,
                                            u[r] = s
                                    }))
                            }),
                            i.all(c).then(function() {
                                return u
                            })
                    }
                    var x = i.reject(new Error("transition superseded"))
                        , C = i.reject(new Error("transition prevented"))
                        , k = i.reject(new Error("transition aborted"))
                        , _ = i.reject(new Error("transition failed"))
                        , P = v.url();
                    return y.locals = {
                        resolve: null ,
                        globals: {
                            $stateParams: {}
                        }
                    },
                        b = {
                            params: {},
                            current: y.self,
                            $current: y,
                            transition: null
                        },
                        b.reload = function() {
                            b.transitionTo(b.current, d, {
                                reload: !0,
                                inherit: !1,
                                notify: !1
                            })
                        }
                        ,
                        b.go = function(e, t, n) {
                            return this.transitionTo(e, t, O({
                                inherit: !0,
                                relative: b.$current
                            }, n))
                        }
                        ,
                        b.transitionTo = function(t, n, s) {
                            n = n || {},
                                s = O({
                                    location: !0,
                                    inherit: !1,
                                    relative: null ,
                                    notify: !0,
                                    reload: !1,
                                    $retry: !1
                                }, s || {});
                            var o, l = b.$current, p = b.params, w = l.path, N = c(t, s.relative);
                            if (!T(N)) {
                                var L = {
                                    to: t,
                                    toParams: n,
                                    options: s
                                };
                                if (o = e.$broadcast("$stateNotFound", L, l.self, p),
                                        o.defaultPrevented)
                                    return m(),
                                        k;
                                if (o.retry) {
                                    if (s.$retry)
                                        return m(),
                                            _;
                                    var A = b.transition = i.when(o.retry);
                                    return A.then(function() {
                                        return A !== b.transition ? x : (L.options.$retry = !0,
                                            b.transitionTo(L.to, L.toParams, L.options))
                                    }, function() {
                                        return k
                                    }),
                                        m(),
                                        A
                                }
                                if (t = L.to,
                                        n = L.toParams,
                                        s = L.options,
                                        N = c(t, s.relative),
                                        !T(N))
                                    throw s.relative ? new Error("Could not resolve '" + t + "' from state '" + s.relative + "'") : new Error("No such state '" + t + "'")
                            }
                            if (N[S])
                                throw new Error("Cannot transition to abstract state '" + t + "'");
                            s.inherit && (n = u(d, n || {}, b.$current, N)),
                                t = N;
                            var D, I, R = t.path, U = y.locals, z = [];
                            for (D = 0,
                                     I = R[D]; I && I === w[D] && f(n, p, I.ownParams) && !s.reload; D++,
                                     I = R[D])
                                U = z[D] = I.locals;
                            if (g(t, l, U, s))
                                return t.self.reloadOnSearch !== !1 && m(),
                                    b.transition = null ,
                                    i.when(b.current);
                            if (n = a(t.params, n || {}),
                                s.notify && (o = e.$broadcast("$stateChangeStart", t.self, n, l.self, p),
                                    o.defaultPrevented))
                                return m(),
                                    C;
                            for (var W = i.when(U), X = D; X < R.length; X++,
                                I = R[X])
                                U = z[X] = r(U),
                                    W = E(I, n, I === t, W, U);
                            var V = b.transition = W.then(function() {
                                var r, i, o;
                                if (b.transition !== V)
                                    return x;
                                for (r = w.length - 1; r >= D; r--)
                                    o = w[r],
                                    o.self.onExit && h.invoke(o.self.onExit, o.self, o.locals.globals),
                                        o.locals = null ;
                                for (r = D; r < R.length; r++)
                                    i = R[r],
                                        i.locals = z[r],
                                    i.self.onEnter && h.invoke(i.self.onEnter, i.self, i.locals.globals);
                                if (b.transition !== V)
                                    return x;
                                b.$current = t,
                                    b.current = t.self,
                                    b.params = n,
                                    M(b.params, d),
                                    b.transition = null ;
                                var u = t.navigable;
                                return s.location && u && (v.url(u.url.format(u.locals.globals.$stateParams)),
                                "replace" === s.location && v.replace()),
                                s.notify && e.$broadcast("$stateChangeSuccess", t.self, n, l.self, p),
                                    P = v.url(),
                                    b.current
                            }, function(r) {
                                return b.transition !== V ? x : (b.transition = null ,
                                    e.$broadcast("$stateChangeError", t.self, n, l.self, p, r),
                                    m(),
                                    i.reject(r))
                            });
                            return V
                        }
                        ,
                        b.is = function(e, r) {
                            var i = c(e);
                            return T(i) ? b.$current !== i ? !1 : T(r) ? t.equals(d, r) : !0 : n
                        }
                        ,
                        b.includes = function(e, r) {
                            var i = c(e);
                            if (!T(i))
                                return n;
                            if (!T(b.$current.includes[i.name]))
                                return !1;
                            var s = !0;
                            return t.forEach(r, function(e, t) {
                                T(d[t]) && d[t] === e || (s = !1)
                            }),
                                s
                        }
                        ,
                        b.href = function(e, t, n) {
                            n = O({
                                lossy: !0,
                                inherit: !1,
                                absolute: !1,
                                relative: b.$current
                            }, n || {});
                            var r = c(e, n.relative);
                            if (!T(r))
                                return null ;
                            t = u(d, t || {}, b.$current, r);
                            var i = r && n.lossy ? r.navigable : r
                                , o = i && i.url ? i.url.format(a(r.params, t || {})) : null ;
                            return !s.html5Mode() && o && (o = "#" + s.hashPrefix() + o),
                            n.absolute && o && (o = v.protocol() + "://" + v.host() + (80 == v.port() || 443 == v.port() ? "" : ":" + v.port()) + (!s.html5Mode() && o ? "/" : "") + o),
                                o
                        }
                        ,
                        b.get = function(e, t) {
                            if (!T(e)) {
                                var n = [];
                                return A(w, function(e) {
                                    n.push(e.self)
                                }),
                                    n
                            }
                            var r = c(e, t);
                            return r && r.self ? r.self : null
                        }
                        ,
                        b
                }
                function g(e, t, n, r) {
                    return e !== t || (n !== t.locals || r.reload) && e.self.reloadOnSearch !== !1 ? void 0 : !0
                }
                var y, b, w = {}, E = {}, S = "abstract", x = {
                    parent: function(e) {
                        if (T(e.parent) && e.parent)
                            return c(e.parent);
                        var t = /^(.+)\.[^.]+$/.exec(e.name);
                        return t ? c(t[1]) : y
                    },
                    data: function(e) {
                        return e.parent && e.parent.data && (e.data = e.self.data = O({}, e.parent.data, e.data)),
                            e.data
                    },
                    url: function(e) {
                        var t = e.url;
                        if (C(t))
                            return "^" == t.charAt(0) ? i.compile(t.substring(1)) : (e.parent.navigable || y).url.concat(t);
                        if (i.isMatcher(t) || null  == t)
                            return t;
                        throw new Error("Invalid url '" + t + "' in state '" + e + "'")
                    },
                    navigable: function(e) {
                        return e.url ? e : e.parent ? e.parent.navigable : null
                    },
                    params: function(e) {
                        if (!e.params)
                            return e.url ? e.url.parameters() : e.parent.params;
                        if (!L(e.params))
                            throw new Error("Invalid params in state '" + e + "'");
                        if (e.url)
                            throw new Error("Both params and url specicified in state '" + e + "'");
                        return e.params
                    },
                    views: function(e) {
                        var t = {};
                        return A(T(e.views) ? e.views : {
                            "": e
                        }, function(n, r) {
                            r.indexOf("@") < 0 && (r += "@" + e.parent.name),
                                t[r] = n
                        }),
                            t
                    },
                    ownParams: function(e) {
                        if (!e.parent)
                            return e.params;
                        var t = {};
                        A(e.params, function(e) {
                            t[e] = !0
                        }),
                            A(e.parent.params, function(n) {
                                if (!t[n])
                                    throw new Error("Missing required parameter '" + n + "' in state '" + e.name + "'");
                                t[n] = !1
                            });
                        var n = [];
                        return A(t, function(e, t) {
                            e && n.push(t)
                        }),
                            n
                    },
                    path: function(e) {
                        return e.parent ? e.parent.path.concat(e) : []
                    },
                    includes: function(e) {
                        var t = e.parent ? O({}, e.parent.includes) : {};
                        return t[e.name] = !0,
                            t
                    },
                    $delegates: {}
                };
                y = p({
                    name: "",
                    url: "^",
                    views: null ,
                    "abstract": !0
                }),
                    y.navigable = null ,
                    this.decorator = d,
                    this.state = v,
                    this.$get = m,
                    m.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$location", "$urlRouter"]
            }
            function g() {
                function e(e, t) {
                    return {
                        load: function(n, r) {
                            var i, s = {
                                template: null ,
                                controller: null ,
                                view: null ,
                                locals: null ,
                                notify: !0,
                                async: !0,
                                params: {}
                            };
                            return r = O(s, r),
                            r.view && (i = t.fromConfig(r.view, r.params, r.locals)),
                            i && r.notify && e.$broadcast("$viewContentLoading", r),
                                i
                        }
                    }
                }
                this.$get = e,
                    e.$inject = ["$rootScope", "$templateFactory"]
            }
            function y(e, n, r, i, s) {
                var o = i.has("$animator") ? i.get("$animator") : !1
                    , u = !1
                    , a = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 1e3,
                    transclude: !0,
                    compile: function(i, f, l) {
                        return function(i, f, c) {
                            function h(t) {
                                var o = e.$current && e.$current.locals[v];
                                if (o !== d) {
                                    var u = b(g && t);
                                    if (u.remove(f),
                                        p && (p.$destroy(),
                                            p = null ),
                                            !o)
                                        return d = null ,
                                            E.state = null ,
                                            u.restore(y, f);
                                    d = o,
                                        E.state = o.$$state;
                                    var a = n(u.populate(o.$template, f));
                                    if (p = i.$new(),
                                            o.$$controller) {
                                        o.$scope = p;
                                        var l = r(o.$$controller, o);
                                        f.children().data("$ngControllerController", l)
                                    }
                                    a(p),
                                        p.$emit("$viewContentLoaded"),
                                    m && p.$eval(m),
                                        s()
                                }
                            }
                            var p, d, v = c[a.name] || c.name || "", m = c.onload || "", g = o && o(i, c), y = l(i), b = function(e) {
                                    return {
                                        "true": {
                                            remove: function(e) {
                                                g.leave(e.contents(), e)
                                            },
                                            restore: function(e, t) {
                                                g.enter(e, t)
                                            },
                                            populate: function(e, n) {
                                                var r = t.element("<div></div>").html(e).contents();
                                                return g.enter(r, n),
                                                    r
                                            }
                                        },
                                        "false": {
                                            remove: function(e) {
                                                e.html("")
                                            },
                                            restore: function(e, t) {
                                                t.append(e)
                                            },
                                            populate: function(e, t) {
                                                return t.html(e),
                                                    t.contents()
                                            }
                                        }
                                    }[e.toString()]
                                }
                                ;
                            f.append(y);
                            var w = f.parent().inheritedData("$uiView");
                            v.indexOf("@") < 0 && (v = v + "@" + (w ? w.state.name : ""));
                            var E = {
                                name: v,
                                state: null
                            };
                            f.data("$uiView", E);
                            var S = function() {
                                    if (!u) {
                                        u = !0;
                                        try {
                                            h(!0)
                                        } catch (e) {
                                            throw u = !1,
                                                e
                                        }
                                        u = !1
                                    }
                                }
                                ;
                            i.$on("$stateChangeSuccess", S),
                                i.$on("$viewContentLoading", S),
                                h(!1)
                        }
                    }
                };
                return a
            }
            function b(e) {
                var t = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
                if (!t || 4 !== t.length)
                    throw new Error("Invalid state ref '" + e + "'");
                return {
                    state: t[1],
                    paramExpr: t[3] || null
                }
            }
            function w(e) {
                var t = e.parent().inheritedData("$uiView");
                return t && t.state && t.state.name ? t.state : void 0
            }
            function E(e, t) {
                return {
                    restrict: "A",
                    require: "?^uiSrefActive",
                    link: function(n, r, i, s) {
                        var o = b(i.uiSref)
                            , u = null
                            , a = w(r) || e.$current
                            , f = "FORM" === r[0].nodeName
                            , l = f ? "action" : "href"
                            , c = !0
                            , h = function(t) {
                                if (t && (u = t),
                                        c) {
                                    var n = e.href(o.state, u, {
                                        relative: a
                                    });
                                    if (!n)
                                        return c = !1,
                                            !1;
                                    r[0][l] = n,
                                    s && s.$$setStateInfo(o.state, u)
                                }
                            }
                            ;
                        o.paramExpr && (n.$watch(o.paramExpr, function(e) {
                            e !== u && h(e)
                        }, !0),
                            u = n.$eval(o.paramExpr)),
                            h(),
                        f || r.bind("click", function(r) {
                            var i = r.which || r.button;
                            0 !== i && 1 != i || r.ctrlKey || r.metaKey || r.shiftKey || (t(function() {
                                n.$apply(function() {
                                    e.go(o.state, u, {
                                        relative: a
                                    })
                                })
                            }),
                                r.preventDefault())
                        })
                    }
                }
            }
            function S(e, t, n) {
                return {
                    restrict: "A",
                    controller: function(r, i, s) {
                        function o() {
                            e.$current.self === a && u() ? i.addClass(c) : i.removeClass(c)
                        }
                        function u() {
                            return !l || f(l, t)
                        }
                        var a, l, c;
                        c = n(s.uiSrefActive || "", !1)(r),
                            this.$$setStateInfo = function(t, n) {
                                a = e.get(t, w(i)),
                                    l = n,
                                    o()
                            }
                            ,
                            r.$on("$stateChangeSuccess", o)
                    }
                }
            }
            function x(e, t) {
                function i(e) {
                    this.locals = e.locals.globals,
                        this.params = this.locals.$stateParams
                }
                function s() {
                    this.locals = null ,
                        this.params = null
                }
                function o(n, o) {
                    if (null  != o.redirectTo) {
                        var u, f = o.redirectTo;
                        if (C(f))
                            u = f;
                        else {
                            if (!N(f))
                                throw new Error("Invalid 'redirectTo' in when()");
                            u = function(e, t) {
                                return f(e, t.path(), t.search())
                            }
                        }
                        t.when(n, u)
                    } else
                        e.state(r(o, {
                            parent: null ,
                            name: "route:" + encodeURIComponent(n),
                            url: n,
                            onEnter: i,
                            onExit: s
                        }));
                    return a.push(o),
                        this
                }
                function u(e, t, r) {
                    function i(e) {
                        return "" !== e.name ? e : n
                    }
                    var s = {
                        routes: a,
                        params: r,
                        current: n
                    };
                    return t.$on("$stateChangeStart", function(e, n, r, s) {
                        t.$broadcast("$routeChangeStart", i(n), i(s))
                    }),
                        t.$on("$stateChangeSuccess", function(e, n, r, o) {
                            s.current = i(n),
                                t.$broadcast("$routeChangeSuccess", i(n), i(o)),
                                M(r, s.params)
                        }),
                        t.$on("$stateChangeError", function(e, n, r, s, o, u) {
                            t.$broadcast("$routeChangeError", i(n), i(s), u)
                        }),
                        s
                }
                var a = [];
                i.$inject = ["$$state"],
                    this.when = o,
                    this.$get = u,
                    u.$inject = ["$state", "$rootScope", "$routeParams"]
            }
            var T = t.isDefined
                , N = t.isFunction
                , C = t.isString
                , k = t.isObject
                , L = t.isArray
                , A = t.forEach
                , O = t.extend
                , M = t.copy;
            t.module("ui.router.util", ["ng"]),
                t.module("ui.router.router", ["ui.router.util"]),
                t.module("ui.router.state", ["ui.router.router", "ui.router.util"]),
                t.module("ui.router", ["ui.router.state"]),
                t.module("ui.router.compat", ["ui.router"]),
                c.$inject = ["$q", "$injector"],
                t.module("ui.router.util").service("$resolve", c),
                h.$inject = ["$http", "$templateCache", "$injector"],
                t.module("ui.router.util").service("$templateFactory", h),
                p.prototype.concat = function(e) {
                    return new p(this.sourcePath + e + this.sourceSearch)
                }
                ,
                p.prototype.toString = function() {
                    return this.source
                }
                ,
                p.prototype.exec = function(e, t) {
                    var n = this.regexp.exec(e);
                    if (!n)
                        return null ;
                    var r, i = this.params, s = i.length, o = this.segments.length - 1, u = {};
                    if (o !== n.length - 1)
                        throw new Error("Unbalanced capture group in route '" + this.source + "'");
                    for (r = 0; o > r; r++)
                        u[i[r]] = n[r + 1];
                    for (; s > r; r++)
                        u[i[r]] = t[i[r]];
                    return u
                }
                ,
                p.prototype.parameters = function() {
                    return this.params
                }
                ,
                p.prototype.format = function(e) {
                    var t = this.segments
                        , n = this.params;
                    if (!e)
                        return t.join("");
                    var r, i, s, o = t.length - 1, u = n.length, a = t[0];
                    for (r = 0; o > r; r++)
                        s = e[n[r]],
                        null  != s && (a += encodeURIComponent(s)),
                            a += t[r + 1];
                    for (; u > r; r++)
                        s = e[n[r]],
                        null  != s && (a += (i ? "&" : "?") + n[r] + "=" + encodeURIComponent(s),
                            i = !0);
                    return a
                }
                ,
                t.module("ui.router.util").provider("$urlMatcherFactory", d),
                v.$inject = ["$urlMatcherFactoryProvider"],
                t.module("ui.router.router").provider("$urlRouter", v),
                m.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider", "$locationProvider"],
                t.module("ui.router.state").value("$stateParams", {}).provider("$state", m),
                g.$inject = [],
                t.module("ui.router.state").provider("$view", g),
                y.$inject = ["$state", "$compile", "$controller", "$injector", "$anchorScroll"],
                t.module("ui.router.state").directive("uiView", y),
                E.$inject = ["$state", "$timeout"],
                S.$inject = ["$state", "$stateParams", "$interpolate"],
                t.module("ui.router.state").directive("uiSref", E).directive("uiSrefActive", S),
                x.$inject = ["$stateProvider", "$urlRouterProvider"],
                t.module("ui.router.compat").provider("$route", x).directive("ngView", y)
        }(window, window.angular),
        define("ui.router", ["angular"], function() {}),
        angular.module("aliyun.console.bootstrap.tpl", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/popup.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]),
        angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(e) {
            e.put("template/accordion/accordion-group.html", '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></h4></div><div class="panel-collapse" collapse="!isOpen"><div class="panel-body" ng-transclude></div></div></div>')
        }
        ]),    define("angular", ["jQuery"], function(e) {
        return function() {
            var t, n;
            return t || e.angular
        }
    }(this)),

        angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(e) {
            e.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
        }
        ]),
        angular.module("template/alert/alert.html", []).run(["$templateCache", function(e) {
            e.put("template/alert/alert.html", '<div class="alert" ng-class="&quot;alert-&quot; + (type || &quot;warning&quot;)"><button ng-show="closeable" type="button" class="close" ng-click="close()">&times;</button><div ng-transclude></div></div>')
        }
        ]),
        angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(e) {
            e.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel"><ol class="carousel-indicators" ng-show="slides().length > 1"><li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li></ol><div class="carousel-inner" ng-transclude></div><a class="left carousel-control" ng-click="prev()" ng-show="slides().length > 1"><span class="icon-prev"></span></a> <a class="right carousel-control" ng-click="next()" ng-show="slides().length > 1"><span class="icon-next"></span></a></div>')
        }
        ]),
        angular.module("template/carousel/slide.html", []).run(["$templateCache", function(e) {
            e.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>")
        }
        ]),
        angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(e) {
            e.put("template/datepicker/datepicker.html", '<div class="console-datepicker"><table><thead><tr><th><button type="button" class="btn btn-link btn-sm pull-left" ng-click="move(-1)"><i class="glyphicon glyphicon-chevron-left"></i></button></th><th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-default btn-sm btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th><th><button type="button" class="btn btn-link btn-sm pull-right" ng-click="move(1)"><i class="glyphicon glyphicon-chevron-right"></i></button></th></tr><tr ng-show="labels.length > 0" class="h6"><th ng-show="showWeekNumbers" class="text-center"><em>#</em></th><th ng-repeat="label in labels" class="text-center">{{label}}</th></tr></thead><tbody><tr ng-repeat="row in rows"><td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td><td ng-repeat="dt in row" class="text-center"><button type="button" style="width:100%" class="btn btn-default btn-sm" ng-class="{\'active\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{\'text-muted\': dt.secondary}">{{dt.label}}</span></button></td></tr></tbody></table></div>')
        }
        ]),
        angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(e) {
            e.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}"><li ng-transclude></li><li ng-show="showButtonBar" style="padding:4px 16px 8px"><!-- <span class="btn-group"> --><button type="button" class="btn btn-sm btn-default" ng-click="today()">{{currentText}}</button> <button type="button" class="btn btn-sm btn-default" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">{{toggleWeeksText}}</button> <button type="button" class="btn btn-sm btn-danger" ng-click="clear()">{{clearText}}</button><!-- </span> --> <button type="button" class="btn btn-sm btn-success pull-right" ng-click="isOpen = false">{{closeText}}</button></li></ul>')
        }
        ]),
        angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(e) {
            e.put("template/modal/backdrop.html", '<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}"></div>')
        }
        ]),
        angular.module("template/modal/window.html", []).run(["$templateCache", function(e) {
            e.put("template/modal/window.html", '<div tabindex="-1" class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)"><div class="modal-dialog"><div class="modal-content" ng-transclude></div></div></div>')
        }
        ]),
        angular.module("template/pagination/pager.html", []).run(["$templateCache", function(e) {
            e.put("template/pagination/pager.html", '<ul class="pager"><li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li></ul>')
        }
        ]),
        angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(e) {
            e.put("template/pagination/pagination.html", '<ul class="pagination"><li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li></ul>')
        }
        ]),
        angular.module("template/popover/popover.html", []).run(["$templateCache", function(e) {
            e.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div></div>')
        }
        ]),
        angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(e) {
            e.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div>')
        }
        ]),
        angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(e) {
            e.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
        }
        ]),
        angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(e) {
            e.put("template/progressbar/progressbar.html", '<div class="progress"><div class="progress-bar" ng-class="type && \'progress-bar-\' + type" ng-transclude></div></div>')
        }
        ]),
        angular.module("template/rating/rating.html", []).run(["$templateCache", function(e) {
            e.put("template/rating/rating.html", '<span ng-mouseleave="reset()"><i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < val && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')"></i></span>')
        }
        ]),
        angular.module("template/tabs/tab.html", []).run(["$templateCache", function(e) {
            e.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}"><a ng-click="select()" tab-heading-transclude>{{heading}}</a></li>')
        }
        ]),
        angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(e) {
            e.put("template/tabs/tabset.html", '<div class="tabbable"><ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul><div class="tab-content"><div class="tab-pane" ng-repeat="tab in tabs" ng-class="{active: tab.active}" tab-content-transclude="tab"></div></div></div>')
        }
        ]),
        angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(e) {
            e.put("template/timepicker/timepicker.html", '<div class="console-timepicker"><div class="console-number-spinner" ng-class="{\'has-error\': invalidHours}"><input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-disabled="readonlyInput" maxlength="" size="4"><div class="console-number-spinner-action"><button ng-disabled="readonlyInput" data-ng-click="incrementHours()" class="console-number-spinner-up"><span class="icon-up"></span></button> <button ng-disabled="readonlyInput" data-ng-click="decrementHours()" class="console-number-spinner-down"><span class="icon-down"></span></button></div></div><strong>&nbsp;:&nbsp;</strong><div class="console-number-spinner" ng-class="{\'has-error\': invalidMinutes}"><input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-disabled="readonlyInput" maxlength="2" size="4"><div class="console-number-spinner-action"><button ng-disabled="readonlyInput" data-ng-click="incrementMinutes()" class="console-number-spinner-up"><span class="icon-up"></span></button> <button ng-disabled="readonlyInput" data-ng-click="decrementMinutes()" class="console-number-spinner-down"><span class="icon-down"></span></button></div></div><span ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></span></div>')
        }
        ]),
        angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(e) {
            e.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="tooltip-arrow"></div><div class="tooltip-inner" bind-html-unsafe="content"></div></div>')
        }
        ]),
        angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(e) {
            e.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="content"></div></div>')
        }
        ]),
        angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(e) {
            e.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
        }
        ]),
        angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(e) {
            e.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}"><li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)"><div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div></li></ul>')
        }
        ]),
        define("aliyun-console-bootstrap-tpl", ["angular"], function() {}),
        angular.module("ui.bootstrap", ["ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdownToggle", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]),
        angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(e, t, n) {
            function u(e) {
                for (var t in e)
                    if (i.style[t] !== undefined)
                        return e[t]
            }
            var r = function(i, s, o) {
                o = o || {};
                var u = e.defer()
                    , a = r[o.animation ? "animationEndEventName" : "transitionEndEventName"]
                    , f = function(e) {
                        n.$apply(function() {
                            i.unbind(a, f),
                                u.resolve(i)
                        })
                    }
                    ;
                return a && i.bind(a, f),
                    t(function() {
                        angular.isString(s) ? i.addClass(s) : angular.isFunction(s) ? s(i) : angular.isObject(s) && i.css(s),
                        a || u.resolve(i)
                    }),
                    u.promise.cancel = function() {
                        a && i.unbind(a, f),
                            u.reject("Transition cancelled")
                    }
                    ,
                    u.promise
            }
                , i = document.createElement("trans")
                , s = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
                , o = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
            return r.transitionEndEventName = u(s),
                r.animationEndEventName = u(o),
                r
        }
        ]),
        angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(e, t) {
            return {
                link: function(t, n, r) {
                    function o(t) {
                        function i() {
                            s === r && (s = undefined)
                        }
                        var r = e(n, t);
                        return s && s.cancel(),
                            s = r,
                            r.then(i, i),
                            r
                    }
                    function u() {
                        i ? (i = !1,
                            a()) : (n.removeClass("collapse").addClass("collapsing"),
                            o({
                                height: n[0].scrollHeight + "px"
                            }).then(a))
                    }
                    function a() {
                        n.removeClass("collapsing"),
                            n.addClass("collapse in"),
                            n.css({
                                height: "auto"
                            })
                    }
                    function f() {
                        if (i)
                            i = !1,
                                l(),
                                n.css({
                                    height: 0
                                });
                        else {
                            n.css({
                                height: n[0].scrollHeight + "px"
                            });
                            var e = n[0].offsetWidth;
                            n.removeClass("collapse in").addClass("collapsing"),
                                o({
                                    height: 0
                                }).then(l)
                        }
                    }
                    function l() {
                        n.removeClass("collapsing"),
                            n.addClass("collapse")
                    }
                    var i = !0, s;
                    t.$watch(r.collapse, function(e) {
                        e ? f() : u()
                    })
                }
            }
        }
        ]),
        angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
            closeOthers: !0
        }).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(e, t, n) {
            this.groups = [],
                this.closeOthers = function(r) {
                    var i = angular.isDefined(t.closeOthers) ? e.$eval(t.closeOthers) : n.closeOthers;
                    i && angular.forEach(this.groups, function(e) {
                        e !== r && (e.isOpen = !1)
                    })
                }
                ,
                this.addGroup = function(e) {
                    var t = this;
                    this.groups.push(e),
                        e.$on("$destroy", function(n) {
                            t.removeGroup(e)
                        })
                }
                ,
                this.removeGroup = function(e) {
                    var t = this.groups.indexOf(e);
                    t !== -1 && this.groups.splice(this.groups.indexOf(e), 1)
                }
        }
        ]).directive("accordion", function() {
            return {
                restrict: "EA",
                controller: "AccordionController",
                transclude: !0,
                replace: !1,
                templateUrl: "template/accordion/accordion.html"
            }
        }).directive("accordionGroup", ["$parse", function(e) {
            return {
                require: "^accordion",
                restrict: "EA",
                transclude: !0,
                replace: !0,
                templateUrl: "template/accordion/accordion-group.html",
                scope: {
                    heading: "@"
                },
                controller: function() {
                    this.setHeading = function(e) {
                        this.heading = e
                    }
                },
                link: function(t, n, r, i) {
                    var s, o;
                    i.addGroup(t),
                        t.isOpen = !1,
                    r.isOpen && (s = e(r.isOpen),
                        o = s.assign,
                        t.$parent.$watch(s, function(e) {
                            t.isOpen = !!e
                        })),
                        t.$watch("isOpen", function(e) {
                            e && i.closeOthers(t),
                            o && o(t.$parent, e)
                        })
                }
            }
        }
        ]).directive("accordionHeading", function() {
            return {
                restrict: "EA",
                transclude: !0,
                template: "",
                replace: !0,
                require: "^accordionGroup",
                compile: function(e, t, n) {
                    return function(t, r, i, s) {
                        s.setHeading(n(t, function() {}))
                    }
                }
            }
        }).directive("accordionTransclude", function() {
            return {
                require: "^accordionGroup",
                link: function(e, t, n, r) {
                    e.$watch(function() {
                        return r[n.accordionTransclude]
                    }, function(e) {
                        e && (t.html(""),
                            t.append(e))
                    })
                }
            }
        }),
        angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(e, t) {
            e.closeable = "close" in t
        }
        ]).directive("alert", function() {
            return {
                restrict: "EA",
                controller: "AlertController",
                templateUrl: "template/alert/alert.html",
                transclude: !0,
                replace: !0,
                scope: {
                    type: "=",
                    close: "&"
                }
            }
        }),
        angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
            return function(e, t, n) {
                t.addClass("ng-binding").data("$binding", n.bindHtmlUnsafe),
                    e.$watch(n.bindHtmlUnsafe, function(n) {
                        t.html(n || "")
                    })
            }
        }),
        angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
            activeClass: "active",
            toggleEvent: "click"
        }).controller("ButtonsController", ["buttonConfig", function(e) {
            this.activeClass = e.activeClass || "active",
                this.toggleEvent = e.toggleEvent || "click"
        }
        ]).directive("btnRadio", function() {
            return {
                require: ["btnRadio", "ngModel"],
                controller: "ButtonsController",
                link: function(e, t, n, r) {
                    var i = r[0]
                        , s = r[1];
                    s.$render = function() {
                        t.toggleClass(i.activeClass, angular.equals(s.$modelValue, e.$eval(n.btnRadio)))
                    }
                        ,
                        t.bind(i.toggleEvent, function() {
                            t.hasClass(i.activeClass) || e.$apply(function() {
                                s.$setViewValue(e.$eval(n.btnRadio)),
                                    s.$render()
                            })
                        })
                }
            }
        }).directive("btnCheckbox", function() {
            return {
                require: ["btnCheckbox", "ngModel"],
                controller: "ButtonsController",
                link: function(e, t, n, r) {
                    function o() {
                        return a(n.btnCheckboxTrue, !0)
                    }
                    function u() {
                        return a(n.btnCheckboxFalse, !1)
                    }
                    function a(t, n) {
                        var r = e.$eval(t);
                        return angular.isDefined(r) ? r : n
                    }
                    var i = r[0]
                        , s = r[1];
                    s.$render = function() {
                        t.toggleClass(i.activeClass, angular.equals(s.$modelValue, o()))
                    }
                        ,
                        t.bind(i.toggleEvent, function() {
                            e.$apply(function() {
                                s.$setViewValue(t.hasClass(i.activeClass) ? u() : o()),
                                    s.$render()
                            })
                        })
                }
            }
        }),
        angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", "$q", function(e, t, n, r) {
            function l() {
                c();
                var n = +e.interval;
                !isNaN(n) && n >= 0 && (u = t(h, n))
            }
            function c() {
                u && (t.cancel(u),
                    u = null )
            }
            function h() {
                a ? (e.next(),
                    l()) : e.pause()
            }
            var i = this, s = i.slides = [], o = -1, u, a;
            i.currentSlide = null ;
            var f = !1;
            i.select = function(r, u) {
                function c() {
                    if (f)
                        return;
                    if (i.currentSlide && angular.isString(u) && !e.noTransition && r.$element) {
                        r.$element.addClass(u);
                        var t = r.$element[0].offsetWidth;
                        angular.forEach(s, function(e) {
                            angular.extend(e, {
                                direction: "",
                                entering: !1,
                                leaving: !1,
                                active: !1
                            })
                        }),
                            angular.extend(r, {
                                direction: u,
                                active: !0,
                                entering: !0
                            }),
                            angular.extend(i.currentSlide || {}, {
                                direction: u,
                                leaving: !0
                            }),
                            e.$currentTransition = n(r.$element, {}),
                            function(t, n) {
                                e.$currentTransition.then(function() {
                                    h(t, n)
                                }, function() {
                                    h(t, n)
                                })
                            }(r, i.currentSlide)
                    } else
                        h(r, i.currentSlide);
                    i.currentSlide = r,
                        o = a,
                        l()
                }
                function h(t, n) {
                    angular.extend(t, {
                        direction: "",
                        active: !0,
                        leaving: !1,
                        entering: !1
                    }),
                        angular.extend(n || {}, {
                            direction: "",
                            active: !1,
                            leaving: !1,
                            entering: !1
                        }),
                        e.$currentTransition = null
                }
                var a = s.indexOf(r);
                u === undefined && (u = a > o ? "next" : "prev"),
                r && r !== i.currentSlide && (e.$currentTransition ? (e.$currentTransition.cancel(),
                    t(c)) : c())
            }
                ,
                e.$on("$destroy", function() {
                    f = !0
                }),
                i.indexOfSlide = function(e) {
                    return s.indexOf(e)
                }
                ,
                e.next = function() {
                    var t = (o + 1) % s.length;
                    if (!e.$currentTransition)
                        return i.select(s[t], "next")
                }
                ,
                e.prev = function() {
                    var t = o - 1 < 0 ? s.length - 1 : o - 1;
                    if (!e.$currentTransition)
                        return i.select(s[t], "prev")
                }
                ,
                e.select = function(e) {
                    i.select(e)
                }
                ,
                e.isActive = function(e) {
                    return i.currentSlide === e
                }
                ,
                e.slides = function() {
                    return s
                }
                ,
                e.$watch("interval", l),
                e.$on("$destroy", c),
                e.play = function() {
                    a || (a = !0,
                        l())
                }
                ,
                e.pause = function() {
                    e.noPause || (a = !1,
                        c())
                }
                ,
                i.addSlide = function(t, n) {
                    t.$element = n,
                        s.push(t),
                        s.length === 1 || t.active ? (i.select(s[s.length - 1]),
                        s.length == 1 && e.play()) : t.active = !1
                }
                ,
                i.removeSlide = function(e) {
                    var t = s.indexOf(e);
                    s.splice(t, 1),
                        s.length > 0 && e.active ? t >= s.length ? i.select(s[t - 1]) : i.select(s[t]) : o > t && o--
                }
        }
        ]).directive("carousel", [function() {
            return {
                restrict: "EA",
                transclude: !0,
                replace: !0,
                controller: "CarouselController",
                require: "carousel",
                templateUrl: "template/carousel/carousel.html",
                scope: {
                    interval: "=",
                    noTransition: "=",
                    noPause: "="
                }
            }
        }
        ]).directive("slide", ["$parse", function(e) {
            return {
                require: "^carousel",
                restrict: "EA",
                transclude: !0,
                replace: !0,
                templateUrl: "template/carousel/slide.html",
                scope: {},
                link: function(t, n, r, i) {
                    if (r.active) {
                        var s = e(r.active)
                            , o = s.assign
                            , u = t.active = s(t.$parent);
                        t.$watch(function() {
                            var n = s(t.$parent);
                            return n !== t.active && (n !== u ? u = t.active = n : o(t.$parent, n = u = t.active)),
                                n
                        })
                    }
                    i.addSlide(t, n),
                        t.$on("$destroy", function() {
                            i.removeSlide(t)
                        }),
                        t.$watch("active", function(e) {
                            e && i.select(t)
                        })
                }
            }
        }
        ]),
        angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(e, t) {
            function n(e, n) {
                return e.currentStyle ? e.currentStyle[n] : t.getComputedStyle ? t.getComputedStyle(e)[n] : e.style[n]
            }
            function r(e) {
                return (n(e, "position") || "static") === "static"
            }
            var i = function(t) {
                    var n = e[0]
                        , i = t.offsetParent || n;
                    while (i && i !== n && r(i))
                        i = i.offsetParent;
                    return i || n
                }
                ;
            return {
                position: function(t) {
                    var n = this.offset(t)
                        , r = {
                        top: 0,
                        left: 0
                    }
                        , s = i(t[0]);
                    s != e[0] && (r = this.offset(angular.element(s)),
                        r.top += s.clientTop - s.scrollTop,
                        r.left += s.clientLeft - s.scrollLeft);
                    var o = t[0].getBoundingClientRect();
                    return {
                        width: o.width || t.prop("offsetWidth"),
                        height: o.height || t.prop("offsetHeight"),
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                },
                offset: function(n) {
                    var r = n[0].getBoundingClientRect();
                    return {
                        width: r.width || n.prop("offsetWidth"),
                        height: r.height || n.prop("offsetHeight"),
                        top: r.top + (t.pageYOffset || e[0].body.scrollTop || e[0].documentElement.scrollTop),
                        left: r.left + (t.pageXOffset || e[0].body.scrollLeft || e[0].documentElement.scrollLeft)
                    }
                }
            }
        }
        ]),
        angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.position"]).constant("datepickerConfig", {
            dayFormat: "dd",
            monthFormat: "MMMM",
            yearFormat: "yyyy",
            dayHeaderFormat: "EEE",
            dayTitleFormat: "MMMM yyyy",
            monthTitleFormat: "yyyy",
            showWeeks: !0,
            startingDay: 0,
            yearRange: 20,
            minDate: null ,
            maxDate: null
        }).controller("DatepickerController", ["$scope", "$attrs", "dateFilter", "datepickerConfig", function(e, t, n, r) {
            function u(t, n) {
                return angular.isDefined(t) ? e.$parent.$eval(t) : n
            }
            function a(e, t) {
                return (new Date(e,t,0)).getDate()
            }
            function f(e, t) {
                var n = new Array(t)
                    , r = e
                    , i = 0;
                while (i < t)
                    n[i++] = new Date(r),
                        r.setDate(r.getDate() + 1);
                return n
            }
            function l(e, t, r, i) {
                return {
                    date: e,
                    label: n(e, t),
                    selected: !!r,
                    secondary: !!i
                }
            }
            var i = {
                day: u(t.dayFormat, r.dayFormat),
                month: u(t.monthFormat, r.monthFormat),
                year: u(t.yearFormat, r.yearFormat),
                dayHeader: u(t.dayHeaderFormat, r.dayHeaderFormat),
                dayTitle: u(t.dayTitleFormat, r.dayTitleFormat),
                monthTitle: u(t.monthTitleFormat, r.monthTitleFormat)
            }
                , s = u(t.startingDay, r.startingDay)
                , o = u(t.yearRange, r.yearRange);
            this.minDate = r.minDate ? new Date(r.minDate) : null ,
                this.maxDate = r.maxDate ? new Date(r.maxDate) : null ,
                this.modes = [{
                    name: "day",
                    getVisibleDates: function(e, t) {
                        var r = e.getFullYear()
                            , o = e.getMonth()
                            , u = new Date(r,o,1)
                            , c = s - u.getDay()
                            , h = c > 0 ? 7 - c : -c
                            , p = new Date(u)
                            , d = 0;
                        h > 0 && (p.setDate(-h + 1),
                            d += h),
                            d += a(r, o + 1),
                            d += (7 - d % 7) % 7;
                        var v = f(p, d)
                            , m = new Array(7);
                        for (var g = 0; g < d; g++) {
                            var y = new Date(v[g]);
                            v[g] = l(y, i.day, t && t.getDate() === y.getDate() && t.getMonth() === y.getMonth() && t.getFullYear() === y.getFullYear(), y.getMonth() !== o)
                        }
                        for (var b = 0; b < 7; b++)
                            m[b] = n(v[b].date, i.dayHeader);
                        return {
                            objects: v,
                            title: n(e, i.dayTitle),
                            labels: m
                        }
                    },
                    compare: function(e, t) {
                        return new Date(e.getFullYear(),e.getMonth(),e.getDate()) - new Date(t.getFullYear(),t.getMonth(),t.getDate())
                    },
                    split: 7,
                    step: {
                        months: 1
                    }
                }, {
                    name: "month",
                    getVisibleDates: function(e, t) {
                        var r = new Array(12)
                            , s = e.getFullYear();
                        for (var o = 0; o < 12; o++) {
                            var u = new Date(s,o,1);
                            r[o] = l(u, i.month, t && t.getMonth() === o && t.getFullYear() === s)
                        }
                        return {
                            objects: r,
                            title: n(e, i.monthTitle)
                        }
                    },
                    compare: function(e, t) {
                        return new Date(e.getFullYear(),e.getMonth()) - new Date(t.getFullYear(),t.getMonth())
                    },
                    split: 3,
                    step: {
                        years: 1
                    }
                }, {
                    name: "year",
                    getVisibleDates: function(e, t) {
                        var n = new Array(o)
                            , r = e.getFullYear()
                            , s = parseInt((r - 1) / o, 10) * o + 1;
                        for (var u = 0; u < o; u++) {
                            var a = new Date(s + u,0,1);
                            n[u] = l(a, i.year, t && t.getFullYear() === a.getFullYear())
                        }
                        return {
                            objects: n,
                            title: [n[0].label, n[o - 1].label].join(" - ")
                        }
                    },
                    compare: function(e, t) {
                        return e.getFullYear() - t.getFullYear()
                    },
                    split: 5,
                    step: {
                        years: o
                    }
                }],
                this.isDisabled = function(t, n) {
                    var r = this.modes[n || 0];
                    return this.minDate && r.compare(t, this.minDate) < 0 || this.maxDate && r.compare(t, this.maxDate) > 0 || e.dateDisabled && e.dateDisabled({
                            date: t,
                            mode: r.name
                        })
                }
        }
        ]).directive("datepicker", ["dateFilter", "$parse", "datepickerConfig", "$log", function(e, t, n, r) {
            return {
                restrict: "EA",
                replace: !0,
                templateUrl: "template/datepicker/datepicker.html",
                scope: {
                    dateDisabled: "&"
                },
                require: ["datepicker", "?^ngModel"],
                controller: "DatepickerController",
                link: function(e, i, s, o) {
                    function h() {
                        e.showWeekNumbers = f === 0 && c
                    }
                    function p(e, t) {
                        var n = [];
                        while (e.length > 0)
                            n.push(e.splice(0, t));
                        return n
                    }
                    function d(t) {
                        var n = null
                            , i = !0;
                        a.$modelValue && (n = new Date(a.$modelValue),
                            isNaN(n) ? (i = !1,
                                r.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : t && (l = n)),
                            a.$setValidity("date", i);
                        var s = u.modes[f]
                            , o = s.getVisibleDates(l, n);
                        angular.forEach(o.objects, function(e) {
                            e.disabled = u.isDisabled(e.date, f)
                        }),
                            a.$setValidity("date-disabled", !n || !u.isDisabled(n)),
                            e.rows = p(o.objects, s.split),
                            e.labels = o.labels || [],
                            e.title = o.title
                    }
                    function v(e) {
                        f = e,
                            h(),
                            d()
                    }
                    function m(e) {
                        var t = new Date(e);
                        t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                        var n = t.getTime();
                        return t.setMonth(0),
                            t.setDate(1),
                        Math.floor(Math.round((n - t) / 864e5) / 7) + 1
                    }
                    var u = o[0]
                        , a = o[1];
                    if (!a)
                        return;
                    var f = 0
                        , l = new Date
                        , c = n.showWeeks;
                    s.showWeeks ? e.$parent.$watch(t(s.showWeeks), function(e) {
                        c = !!e,
                            h()
                    }) : h(),
                    s.min && e.$parent.$watch(t(s.min), function(e) {
                        u.minDate = e ? new Date(e) : null ,
                            d()
                    }),
                    s.max && e.$parent.$watch(t(s.max), function(e) {
                        u.maxDate = e ? new Date(e) : null ,
                            d()
                    }),
                        a.$render = function() {
                            d(!0)
                        }
                        ,
                        e.select = function(e) {
                            if (f === 0) {
                                var t = a.$modelValue ? new Date(a.$modelValue) : new Date(0,0,0,0,0,0,0);
                                t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()),
                                    a.$setViewValue(t),
                                    d(!0)
                            } else
                                l = e,
                                    v(f - 1)
                        }
                        ,
                        e.move = function(e) {
                            var t = u.modes[f].step;
                            l.setMonth(l.getMonth() + e * (t.months || 0)),
                                l.setFullYear(l.getFullYear() + e * (t.years || 0)),
                                d()
                        }
                        ,
                        e.toggleMode = function() {
                            v((f + 1) % u.modes.length)
                        }
                        ,
                        e.getWeekNumber = function(t) {
                            return f === 0 && e.showWeekNumbers && t.length === 7 ? m(t[0].date) : null
                        }
                }
            }
        }
        ]).constant("datepickerPopupConfig", {
            dateFormat: "yyyy-MM-dd",
            currentText: "Today",
            toggleWeeksText: "Weeks",
            clearText: "Clear",
            closeText: "Done",
            closeOnDateSelection: !0,
            appendToBody: !1,
            showButtonBar: !0
        }).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "datepickerPopupConfig", "datepickerConfig", function(e, t, n, r, i, s, o) {
            return {
                restrict: "EA",
                require: "ngModel",
                link: function(u, a, f, l) {
                    function g(e) {
                        m ? m(u, !!e) : c.isOpen = !!e
                    }
                    function x(e) {
                        if (!e)
                            return l.$setValidity("date", !0),
                                null ;
                        if (angular.isDate(e))
                            return l.$setValidity("date", !0),
                                e;
                        if (angular.isString(e)) {
                            var t = new Date(e);
                            return isNaN(t) ? (l.$setValidity("date", !1),
                                undefined) : (l.$setValidity("date", !0),
                                t)
                        }
                        return l.$setValidity("date", !1),
                            undefined
                    }
                    function T(e, n, r) {
                        e && (u.$watch(t(e), function(e) {
                            c[n] = e
                        }),
                            E.attr(r || n, n))
                    }
                    function N() {
                        c.position = d ? r.offset(a) : r.position(a),
                        r.offset(a).left + w.width() > angular.element(document).width() && (c.position.left = c.position.left - (r.offset(a).left + w.width() - angular.element(document).width()) - 4),
                            c.position.top = c.position.top + a.prop("offsetHeight")
                    }
                    var c = u.$new(), h, p = angular.isDefined(f.closeOnDateSelection) ? u.$eval(f.closeOnDateSelection) : s.closeOnDateSelection, d = angular.isDefined(f.datepickerAppendToBody) ? u.$eval(f.datepickerAppendToBody) : s.appendToBody;
                    f.$observe("datepickerPopup", function(e) {
                        h = e || s.dateFormat,
                            l.$render()
                    }),
                        c.showButtonBar = angular.isDefined(f.showButtonBar) ? u.$eval(f.showButtonBar) : s.showButtonBar,
                        u.$on("$destroy", function() {
                            L.remove(),
                                c.$destroy()
                        }),
                        f.$observe("currentText", function(e) {
                            c.currentText = angular.isDefined(e) ? e : s.currentText
                        }),
                        f.$observe("toggleWeeksText", function(e) {
                            c.toggleWeeksText = angular.isDefined(e) ? e : s.toggleWeeksText
                        }),
                        f.$observe("clearText", function(e) {
                            c.clearText = angular.isDefined(e) ? e : s.clearText
                        }),
                        f.$observe("closeText", function(e) {
                            c.closeText = angular.isDefined(e) ? e : s.closeText
                        });
                    var v, m;
                    f.isOpen && (v = t(f.isOpen),
                        m = v.assign,
                        u.$watch(v, function(t) {
                            c.isOpen = !!t
                        })),
                        c.isOpen = v ? v(u) : !1;
                    var y = function(e) {
                        c.isOpen && e.target !== a[0] && c.$apply(function() {
                            g(!1)
                        })
                    }
                        , b = function() {
                        c.$apply(function() {
                            g(!0)
                        })
                    }
                        , w = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                    w.attr({
                        "ng-model": "date",
                        "ng-change": "dateSelection()"
                    });
                    var E = angular.element(w.children()[0])
                        , S = {};
                    f.datepickerOptions && (S = u.$eval(f.datepickerOptions),
                        E.attr(angular.extend({}, S))),
                        l.$parsers.unshift(x),
                        c.dateSelection = function(e) {
                            angular.isDefined(e) && (c.date = e),
                                l.$setViewValue(c.date),
                                l.$render(),
                            p && g(!1)
                        }
                        ,
                        a.bind("input change keyup", function() {
                            c.$apply(function() {
                                c.date = l.$modelValue
                            })
                        }),
                        l.$render = function() {
                            var e = l.$viewValue ? i(l.$viewValue, h) : "";
                            a.val(e),
                                c.date = l.$modelValue
                        }
                        ,
                        T(f.min, "min"),
                        T(f.max, "max"),
                        f.showWeeks ? T(f.showWeeks, "showWeeks", "show-weeks") : (c.showWeeks = "show-weeks" in S ? S["show-weeks"] : o.showWeeks,
                            E.attr("show-weeks", "showWeeks")),
                    f.dateDisabled && E.attr("date-disabled", f.dateDisabled);
                    var C = !1
                        , k = !1;
                    c.$watch("isOpen", function(e) {
                        e ? (N(),
                            n.bind("click", y),
                        k && a.unbind("focus", b),
                            a[0].focus(),
                            C = !0) : (C && n.unbind("click", y),
                            a.bind("focus", b),
                            k = !0),
                        m && m(u, e)
                    }),
                        c.today = function() {
                            c.dateSelection(new Date)
                        }
                        ,
                        c.clear = function() {
                            c.dateSelection(null )
                        }
                    ;
                    var L = e(w)(c);
                    d ? n.find("body").append(L) : a.after(L)
                }
            }
        }
        ]).directive("datepickerPopupWrap", function() {
            return {
                restrict: "EA",
                replace: !0,
                transclude: !0,
                templateUrl: "template/datepicker/popup.html",
                link: function(e, t, n) {
                    t.bind("click", function(e) {
                        e.preventDefault(),
                            e.stopPropagation()
                    })
                }
            }
        }),
        angular.module("ui.bootstrap.dropdownToggle", []).directive("dropdownToggle", ["$document", "$location", function(e, t) {
            var n = null
                , r = angular.noop;
            return {
                restrict: "CA",
                link: function(t, i, s) {
                    t.$watch("$location.path", function() {
                        r()
                    }),
                        i.parent().bind("click", function() {
                            r()
                        }),
                        i.bind("click", function(t) {
                            var s = i === n;
                            t.preventDefault(),
                                t.stopPropagation(),
                            !n || r(),
                            !s && !i.hasClass("disabled") && !i.prop("disabled") && (i.parent().addClass("open"),
                                n = i,
                                r = function(t) {
                                    t && t.stopPropagation(),
                                        e.unbind("click", r),
                                        i.parent().removeClass("open"),
                                        r = angular.noop,
                                        n = null
                                }
                                ,
                                e.bind("click", r))
                        })
                }
            }
        }
        ]),
        angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
            return {
                createNew: function() {
                    var e = [];
                    return {
                        add: function(t, n) {
                            e.push({
                                key: t,
                                value: n
                            })
                        },
                        get: function(t) {
                            for (var n = 0; n < e.length; n++)
                                if (t == e[n].key)
                                    return e[n]
                        },
                        keys: function() {
                            var t = [];
                            for (var n = 0; n < e.length; n++)
                                t.push(e[n].key);
                            return t
                        },
                        top: function() {
                            return e[e.length - 1]
                        },
                        remove: function(t) {
                            var n = -1;
                            for (var r = 0; r < e.length; r++)
                                if (t == e[r].key) {
                                    n = r;
                                    break
                                }
                            return e.splice(n, 1)[0]
                        },
                        removeTop: function() {
                            return e.splice(e.length - 1, 1)[0]
                        },
                        length: function() {
                            return e.length
                        }
                    }
                }
            }
        }).directive("modalBackdrop", ["$timeout", function(e) {
            return {
                restrict: "EA",
                replace: !0,
                templateUrl: "template/modal/backdrop.html",
                link: function(t) {
                    t.animate = !1,
                        e(function() {
                            t.animate = !0
                        })
                }
            }
        }
        ]).directive("modalWindow", ["$modalStack", "$timeout", function(e, t) {
            return {
                restrict: "EA",
                scope: {
                    index: "@",
                    animate: "="
                },
                replace: !0,
                transclude: !0,
                templateUrl: "template/modal/window.html",
                link: function(n, r, i) {
                    n.windowClass = i.windowClass || "",
                        t(function() {
                            n.animate = !0,
                                r[0].focus()
                        }),
                        n.close = function(t) {
                            var n = e.getTop();
                            n && n.value.backdrop && n.value.backdrop != "static" && t.target === t.currentTarget && (t.preventDefault(),
                                t.stopPropagation(),
                                e.dismiss(n.key, "backdrop click"))
                        }
                }
            }
        }
        ]).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(e, t, n, r, i, s) {
            function c() {
                var e = -1
                    , t = f.keys();
                for (var n = 0; n < t.length; n++)
                    f.get(t[n]).value.backdrop && (e = n);
                return e
            }
            function h(e) {
                var t = n.find("body").eq(0)
                    , r = f.get(e).value;
                f.remove(e),
                    d(r.modalDomEl, r.modalScope, 300, p),
                    t.toggleClass(o, f.length() > 0)
            }
            function p() {
                if (u && c() == -1) {
                    var e = a;
                    d(u, a, 150, function() {
                        e.$destroy(),
                            e = null
                    }),
                        u = undefined,
                        a = undefined
                }
            }
            function d(n, r, i, s) {
                function a() {
                    if (a.done)
                        return;
                    a.done = !0,
                        n.remove(),
                    s && s()
                }
                r.animate = !1;
                var o = e.transitionEndEventName;
                if (o) {
                    var u = t(a, i);
                    n.bind(o, function() {
                        t.cancel(u),
                            a(),
                            r.$apply()
                    })
                } else
                    t(a, 0)
            }
            var o = "modal-open", u, a, f = s.createNew(), l = {};
            return i.$watch(c, function(e) {
                a && (a.index = e)
            }),
                n.bind("keydown", function(e) {
                    var t;
                    e.which === 27 && (t = f.top(),
                    t && t.value.keyboard && i.$apply(function() {
                        l.dismiss(t.key)
                    }))
                }),
                l.open = function(e, t) {
                    f.add(e, {
                        deferred: t.deferred,
                        modalScope: t.scope,
                        backdrop: t.backdrop,
                        keyboard: t.keyboard
                    });
                    var s = n.find("body").eq(0)
                        , l = c();
                    l >= 0 && !u && (a = i.$new(!0),
                        a.index = l,
                        u = r("<div modal-backdrop></div>")(a),
                        s.append(u));
                    var h = angular.element("<div modal-window></div>");
                    h.attr("window-class", t.windowClass),
                        h.attr("index", f.length() - 1),
                        h.attr("animate", "animate"),
                        h.html(t.content);
                    var p = r(h)(t.scope);
                    f.top().value.modalDomEl = p,
                        s.append(p),
                        s.addClass(o)
                }
                ,
                l.close = function(e, t) {
                    var n = f.get(e).value;
                    n && (n.deferred.resolve(t),
                        h(e))
                }
                ,
                l.dismiss = function(e, t) {
                    var n = f.get(e).value;
                    n && (n.deferred.reject(t),
                        h(e))
                }
                ,
                l.dismissAll = function(e) {
                    var t = this.getTop();
                    while (t)
                        this.dismiss(t.key, e),
                            t = this.getTop()
                }
                ,
                l.getTop = function() {
                    return f.top()
                }
                ,
                l
        }
        ]).provider("$modal", function() {
            var e = {
                options: {
                    backdrop: !0,
                    keyboard: !0
                },
                $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(t, n, r, i, s, o, u) {
                    function f(e) {
                        return e.template ? r.when(e.template) : i.get(e.templateUrl, {
                            cache: s
                        }).then(function(e) {
                            return e.data
                        })
                    }
                    function l(e) {
                        var n = [];
                        return angular.forEach(e, function(e, i) {
                            (angular.isFunction(e) || angular.isArray(e)) && n.push(r.when(t.invoke(e)))
                        }),
                            n
                    }
                    var a = {};
                    return a.open = function(t) {
                        var i = r.defer()
                            , s = r.defer()
                            , a = {
                            result: i.promise,
                            opened: s.promise,
                            close: function(e) {
                                u.close(a, e)
                            },
                            dismiss: function(e) {
                                u.dismiss(a, e)
                            }
                        };
                        t = angular.extend({}, e.options, t),
                            t.resolve = t.resolve || {};
                        if (!t.template && !t.templateUrl)
                            throw new Error("One of template or templateUrl options is required.");
                        var c = r.all([f(t)].concat(l(t.resolve)));
                        return c.then(function(r) {
                            var s = (t.scope || n).$new();
                            s.$close = a.close,
                                s.$dismiss = a.dismiss;
                            var f, l = {}, c = 1;
                            t.controller && (l.$scope = s,
                                l.$modalInstance = a,
                                angular.forEach(t.resolve, function(e, t) {
                                    l[t] = r[c++]
                                }),
                                f = o(t.controller, l)),
                                u.open(a, {
                                    scope: s,
                                    deferred: i,
                                    content: r[0],
                                    backdrop: t.backdrop,
                                    keyboard: t.keyboard,
                                    windowClass: t.windowClass
                                })
                        }, function(t) {
                            i.reject(t)
                        }),
                            c.then(function() {
                                s.resolve(!0)
                            }, function() {
                                s.reject(!1)
                            }),
                            a
                    }
                        ,
                        a
                }
                ]
            };
            return e
        }),
        angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", "$interpolate", function(e, t, n, r) {
            var i = this
                , s = t.numPages ? n(t.numPages).assign : angular.noop;
            this.init = function(r) {
                t.itemsPerPage ? e.$parent.$watch(n(t.itemsPerPage), function(t) {
                    i.itemsPerPage = parseInt(t, 10),
                        e.totalPages = i.calculateTotalPages()
                }) : this.itemsPerPage = r
            }
                ,
                this.noPrevious = function() {
                    return this.page === 1
                }
                ,
                this.noNext = function() {
                    return this.page === e.totalPages
                }
                ,
                this.isActive = function(e) {
                    return this.page === e
                }
                ,
                this.calculateTotalPages = function() {
                    var t = this.itemsPerPage < 1 ? 1 : Math.ceil(e.totalItems / this.itemsPerPage);
                    return Math.max(t || 0, 1)
                }
                ,
                this.getAttributeValue = function(t, n, i) {
                    return angular.isDefined(t) ? i ? r(t)(e.$parent) : e.$parent.$eval(t) : n
                }
                ,
                this.render = function() {
                    this.page = parseInt(e.page, 10) || 1,
                    this.page > 0 && this.page <= e.totalPages && (e.pages = this.getPages(this.page, e.totalPages))
                }
                ,
                e.selectPage = function(t) {
                    !i.isActive(t) && t > 0 && t <= e.totalPages && (e.page = t,
                        e.onSelectPage({
                            page: t
                        }))
                }
                ,
                e.$watch("page", function() {
                    i.render()
                }),
                e.$watch("totalItems", function() {
                    e.totalPages = i.calculateTotalPages()
                }),
                e.$watch("totalPages", function(t) {
                    s(e.$parent, t),
                        i.page > t ? e.selectPage(t) : i.render()
                })
        }
        ]).constant("paginationConfig", {
            itemsPerPage: 10,
            boundaryLinks: !1,
            directionLinks: !0,
            firstText: "First",
            previousText: "Previous",
            nextText: "Next",
            lastText: "Last",
            rotate: !0
        }).directive("pagination", ["$parse", "paginationConfig", function(e, t) {
            return {
                restrict: "EA",
                scope: {
                    page: "=",
                    totalItems: "=",
                    onSelectPage: " &"
                },
                controller: "PaginationController",
                templateUrl: "template/pagination/pagination.html",
                replace: !0,
                link: function(n, r, i, s) {
                    function d(e, t, n, r) {
                        return {
                            number: e,
                            text: t,
                            active: n,
                            disabled: r
                        }
                    }
                    var o, u = s.getAttributeValue(i.boundaryLinks, t.boundaryLinks), a = s.getAttributeValue(i.directionLinks, t.directionLinks), f = s.getAttributeValue(i.firstText, t.firstText, !0), l = s.getAttributeValue(i.previousText, t.previousText, !0), c = s.getAttributeValue(i.nextText, t.nextText, !0), h = s.getAttributeValue(i.lastText, t.lastText, !0), p = s.getAttributeValue(i.rotate, t.rotate);
                    s.init(t.itemsPerPage),
                    i.maxSize && n.$parent.$watch(e(i.maxSize), function(e) {
                        o = parseInt(e, 10),
                            s.render()
                    }),
                        s.getPages = function(e, t) {
                            var n = []
                                , r = 1
                                , i = t
                                , v = angular.isDefined(o) && o < t;
                            v && (p ? (r = Math.max(e - Math.floor(o / 2), 1),
                                i = r + o - 1,
                            i > t && (i = t,
                                r = i - o + 1)) : (r = (Math.ceil(e / o) - 1) * o + 1,
                                i = Math.min(r + o - 1, t)));
                            for (var m = r; m <= i; m++) {
                                var g = d(m, m, s.isActive(m), !1);
                                n.push(g)
                            }
                            if (v && !p) {
                                if (r > 1) {
                                    var y = d(r - 1, "...", !1, !1);
                                    n.unshift(y)
                                }
                                if (i < t) {
                                    var b = d(i + 1, "...", !1, !1);
                                    n.push(b)
                                }
                            }
                            if (a) {
                                var w = d(e - 1, l, !1, s.noPrevious());
                                n.unshift(w);
                                var E = d(e + 1, c, !1, s.noNext());
                                n.push(E)
                            }
                            if (u) {
                                var S = d(1, f, !1, s.noPrevious());
                                n.unshift(S);
                                var x = d(t, h, !1, s.noNext());
                                n.push(x)
                            }
                            return n
                        }
                }
            }
        }
        ]).constant("pagerConfig", {
            itemsPerPage: 10,
            previousText: "« Previous",
            nextText: "Next »",
            align: !0
        }).directive("pager", ["pagerConfig", function(e) {
            return {
                restrict: "EA",
                scope: {
                    page: "=",
                    totalItems: "=",
                    onSelectPage: " &"
                },
                controller: "PaginationController",
                templateUrl: "template/pagination/pager.html",
                replace: !0,
                link: function(t, n, r, i) {
                    function a(e, t, n, r, i) {
                        return {
                            number: e,
                            text: t,
                            disabled: n,
                            previous: u && r,
                            next: u && i
                        }
                    }
                    var s = i.getAttributeValue(r.previousText, e.previousText, !0)
                        , o = i.getAttributeValue(r.nextText, e.nextText, !0)
                        , u = i.getAttributeValue(r.align, e.align);
                    i.init(e.itemsPerPage),
                        i.getPages = function(e) {
                            return [a(e - 1, s, i.noPrevious(), !0, !1), a(e + 1, o, i.noNext(), !1, !0)]
                        }
                }
            }
        }
        ]),
        angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
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
                popupDelay: 0
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
                            , b = "<div " + m + "-popup " + 'title="' + g + "tt_title" + y + '" ' + 'content="' + g + "tt_content" + y + '" ' + 'placement="' + g + "tt_placement" + y + '" ' + 'animation="tt_animation" ' + 'is-open="tt_isOpen"' + ">" + "</div>";
                        return {
                            restrict: "EA",
                            scope: !0,
                            compile: function(e, t) {
                                var n = s(b);
                                return function(t, r, i) {
                                    function E() {
                                        t.tt_isOpen ? x() : S()
                                    }
                                    function S() {
                                        if (b && !t.$eval(i[h + "Enable"]))
                                            return;
                                        t.tt_popupDelay ? (p = o(T, t.tt_popupDelay, !1),
                                            p.then(function(e) {
                                                e()
                                            })) : T()()
                                    }
                                    function x() {
                                        t.$apply(function() {
                                            N()
                                        })
                                    }
                                    function T() {
                                        return t.tt_content ? (C(),
                                        l && o.cancel(l),
                                            s.css({
                                                top: 0,
                                                left: 0,
                                                display: "block"
                                            }),
                                            m ? a.find("body").append(s) : r.after(s),
                                            w(),
                                            t.tt_isOpen = !0,
                                            t.$digest(),
                                            w) : angular.noop
                                    }
                                    function N() {
                                        t.tt_isOpen = !1,
                                            o.cancel(p),
                                            t.tt_animation ? l = o(k, 500) : k()
                                    }
                                    function C() {
                                        s && k(),
                                            s = n(t, function() {}),
                                            t.$digest()
                                    }
                                    function k() {
                                        s && (s.remove(),
                                            s = null )
                                    }
                                    var s, l, p, m = angular.isDefined(d.appendToBody) ? d.appendToBody : !1, g = v(undefined), y = !1, b = angular.isDefined(i[h + "Enable"]), w = function() {
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
                                            !e && t.tt_isOpen && N()
                                        }),
                                        i.$observe(h + "Title", function(e) {
                                            t.tt_title = e
                                        }),
                                        i.$observe(h + "Placement", function(e) {
                                            t.tt_placement = angular.isDefined(e) ? e : d.placement
                                        }),
                                        i.$observe(h + "PopupDelay", function(e) {
                                            var n = parseInt(e, 10);
                                            t.tt_popupDelay = isNaN(n) ? d.popupDelay : n
                                        });
                                    var L = function() {
                                            y && (r.unbind(g.show, S),
                                                r.unbind(g.hide, x))
                                        }
                                        ;
                                    i.$observe(h + "Trigger", function(e) {
                                        L(),
                                            g = v(e),
                                            g.show === g.hide ? r.bind(g.show, E) : (r.bind(g.show, S),
                                                r.bind(g.hide, x)),
                                            y = !0
                                    });
                                    var A = t.$eval(i[h + "Animation"]);
                                    t.tt_animation = angular.isDefined(A) ? !!A : d.animation,
                                        i.$observe(h + "AppendToBody", function(e) {
                                            m = angular.isDefined(e) ? u(e)(t) : m
                                        }),
                                    m && t.$on("$locationChangeSuccess", function() {
                                        t.tt_isOpen && N()
                                    }),
                                        t.$on("$destroy", function() {
                                            o.cancel(l),
                                                o.cancel(p),
                                                L(),
                                                k()
                                        })
                                }
                            }
                        }
                    }
                }
                ]
        }).directive("tooltipPopup", function() {
            return {
                restrict: "EA",
                replace: !0,
                scope: {
                    content: "@",
                    placement: "@",
                    animation: "&",
                    isOpen: "&"
                },
                templateUrl: "template/tooltip/tooltip-popup.html"
            }
        }).directive("tooltip", ["$tooltip", function(e) {
            return e("tooltip", "tooltip", "mouseenter")
        }
        ]).directive("tooltipHtmlUnsafePopup", function() {
            return {
                restrict: "EA",
                replace: !0,
                scope: {
                    content: "@",
                    placement: "@",
                    animation: "&",
                    isOpen: "&"
                },
                templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
            }
        }).directive("tooltipHtmlUnsafe", ["$tooltip", function(e) {
            return e("tooltipHtmlUnsafe", "tooltip", "mouseenter")
        }
        ]),
        angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
            return {
                restrict: "EA",
                replace: !0,
                scope: {
                    title: "@",
                    content: "@",
                    placement: "@",
                    animation: "&",
                    isOpen: "&"
                },
                templateUrl: "template/popover/popover.html"
            }
        }).directive("popover", ["$tooltip", function(e) {
            return e("popover", "popover", "click")
        }
        ]),
        angular.module("ui.bootstrap.progressbar", ["ui.bootstrap.transition"]).constant("progressConfig", {
            animate: !0,
            max: 100
        }).controller("ProgressController", ["$scope", "$attrs", "progressConfig", "$transition", function(e, t, n, r) {
            var i = this
                , s = []
                , o = angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max
                , u = angular.isDefined(t.animate) ? e.$parent.$eval(t.animate) : n.animate;
            this.addBar = function(e, t) {
                var n = 0
                    , r = e.$parent.$index;
                angular.isDefined(r) && s[r] && (n = s[r].value),
                    s.push(e),
                    this.update(t, e.value, n),
                    e.$watch("value", function(e, n) {
                        e !== n && i.update(t, e, n)
                    }),
                    e.$on("$destroy", function() {
                        i.removeBar(e)
                    })
            }
                ,
                this.update = function(e, t, n) {
                    var i = this.getPercentage(t);
                    u ? (e.css("width", this.getPercentage(n) + "%"),
                        r(e, {
                            width: i + "%"
                        })) : e.css({
                        transition: "none",
                        width: i + "%"
                    })
                }
                ,
                this.removeBar = function(e) {
                    s.splice(s.indexOf(e), 1)
                }
                ,
                this.getPercentage = function(e) {
                    return Math.round(100 * e / o)
                }
        }
        ]).directive("progress", function() {
            return {
                restrict: "EA",
                replace: !0,
                transclude: !0,
                controller: "ProgressController",
                require: "progress",
                scope: {},
                template: '<div class="progress" ng-transclude></div>'
            }
        }).directive("bar", function() {
            return {
                restrict: "EA",
                replace: !0,
                transclude: !0,
                require: "^progress",
                scope: {
                    value: "=",
                    type: "@"
                },
                templateUrl: "template/progressbar/bar.html",
                link: function(e, t, n, r) {
                    r.addBar(e, t)
                }
            }
        }).directive("progressbar", function() {
            return {
                restrict: "EA",
                replace: !0,
                transclude: !0,
                controller: "ProgressController",
                scope: {
                    value: "=",
                    type: "@"
                },
                templateUrl: "template/progressbar/progressbar.html",
                link: function(e, t, n, r) {
                    r.addBar(e, angular.element(t.children()[0]))
                }
            }
        }),
        angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
            max: 5,
            stateOn: null ,
            stateOff: null
        }).controller("RatingController", ["$scope", "$attrs", "$parse", "ratingConfig", function(e, t, n, r) {
            this.maxRange = angular.isDefined(t.max) ? e.$parent.$eval(t.max) : r.max,
                this.stateOn = angular.isDefined(t.stateOn) ? e.$parent.$eval(t.stateOn) : r.stateOn,
                this.stateOff = angular.isDefined(t.stateOff) ? e.$parent.$eval(t.stateOff) : r.stateOff,
                this.createRateObjects = function(e) {
                    var t = {
                        stateOn: this.stateOn,
                        stateOff: this.stateOff
                    };
                    for (var n = 0, r = e.length; n < r; n++)
                        e[n] = angular.extend({
                            index: n
                        }, t, e[n]);
                    return e
                }
                ,
                e.range = angular.isDefined(t.ratingStates) ? this.createRateObjects(angular.copy(e.$parent.$eval(t.ratingStates))) : this.createRateObjects(new Array(this.maxRange)),
                e.rate = function(t) {
                    e.value !== t && !e.readonly && (e.value = t)
                }
                ,
                e.enter = function(t) {
                    e.readonly || (e.val = t),
                        e.onHover({
                            value: t
                        })
                }
                ,
                e.reset = function() {
                    e.val = angular.copy(e.value),
                        e.onLeave()
                }
                ,
                e.$watch("value", function(t) {
                    e.val = t
                }),
                e.readonly = !1,
            t.readonly && e.$parent.$watch(n(t.readonly), function(t) {
                e.readonly = !!t
            })
        }
        ]).directive("rating", function() {
            return {
                restrict: "EA",
                scope: {
                    value: "=",
                    onHover: "&",
                    onLeave: "&"
                },
                controller: "RatingController",
                templateUrl: "template/rating/rating.html",
                replace: !0
            }
        }),
        angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(t) {
            var n = this
                , r = n.tabs = t.tabs = [];
            n.select = function(e) {
                angular.forEach(r, function(e) {
                    e.active = !1
                }),
                    e.active = !0
            }
                ,
                n.addTab = function(t) {
                    r.push(t),
                    (r.length === 1 || t.active) && n.select(t)
                }
                ,
                n.removeTab = function(t) {
                    var i = r.indexOf(t);
                    if (t.active && r.length > 1) {
                        var s = i == r.length - 1 ? i - 1 : i + 1;
                        n.select(r[s])
                    }
                    r.splice(i, 1)
                }
        }
        ]).directive("tabset", function() {
            return {
                restrict: "EA",
                transclude: !0,
                replace: !0,
                scope: {},
                controller: "TabsetController",
                templateUrl: "template/tabs/tabset.html",
                link: function(e, t, n) {
                    e.vertical = angular.isDefined(n.vertical) ? e.$parent.$eval(n.vertical) : !1,
                        e.justified = angular.isDefined(n.justified) ? e.$parent.$eval(n.justified) : !1,
                        e.type = angular.isDefined(n.type) ? e.$parent.$eval(n.type) : "tabs"
                }
            }
        }).directive("tab", ["$parse", function(e) {
            return {
                require: "^tabset",
                restrict: "EA",
                replace: !0,
                templateUrl: "template/tabs/tab.html",
                transclude: !0,
                scope: {
                    heading: "@",
                    onSelect: "&select",
                    onDeselect: "&deselect"
                },
                controller: function() {},
                compile: function(t, n, r) {
                    return function(n, i, s, o) {
                        var u, a;
                        s.active ? (u = e(s.active),
                            a = u.assign,
                            n.$parent.$watch(u, function(t, r) {
                                t !== r && (n.active = !!t)
                            }),
                            n.active = u(n.$parent)) : a = u = angular.noop,
                            n.$watch("active", function(e) {
                                a(n.$parent, e),
                                    e ? (o.select(n),
                                        n.onSelect()) : n.onDeselect()
                            }),
                            n.disabled = !1,
                        s.disabled && n.$parent.$watch(e(s.disabled), function(e) {
                            n.disabled = !!e
                        }),
                            n.select = function() {
                                n.disabled || (n.active = !0)
                            }
                            ,
                            o.addTab(n),
                            n.$on("$destroy", function() {
                                o.removeTab(n)
                            }),
                            n.$transcludeFn = r
                    }
                }
            }
        }
        ]).directive("tabHeadingTransclude", [function() {
            return {
                restrict: "A",
                require: "^tab",
                link: function(e, t, n, r) {
                    e.$watch("headingElement", function(n) {
                        n && (t.html(""),
                            t.append(n))
                    })
                }
            }
        }
        ]).directive("tabContentTransclude", function() {
            function e(e) {
                return e.tagName && (e.hasAttribute("tab-heading") || e.hasAttribute("data-tab-heading") || e.tagName.toLowerCase() === "tab-heading" || e.tagName.toLowerCase() === "data-tab-heading")
            }
            return {
                restrict: "A",
                require: "^tabset",
                link: function(t, n, r) {
                    var i = t.$eval(r.tabContentTransclude);
                    i.$transcludeFn(i.$parent, function(t) {
                        angular.forEach(t, function(t) {
                            e(t) ? i.headingElement = t : n.append(t)
                        })
                    })
                }
            }
        }),
        angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
            hourStep: 1,
            minuteStep: 1,
            showMeridian: !0,
            meridians: null ,
            readonlyInput: !1,
            mousewheel: !0
        }).directive("timepicker", ["$parse", "$log", "timepickerConfig", "$locale", function(e, t, n, r) {
            return {
                restrict: "EA",
                require: "?^ngModel",
                replace: !0,
                scope: {},
                templateUrl: "template/timepicker/timepicker.html",
                link: function(i, s, o, u) {
                    function h() {
                        var e = parseInt(i.hours, 10)
                            , t = i.showMeridian ? e > 0 && e < 13 : e >= 0 && e < 24;
                        return t ? (i.showMeridian && (e === 12 && (e = 0),
                        i.meridian === f[1] && (e += 12)),
                            e) : undefined
                    }
                    function p() {
                        var e = parseInt(i.minutes, 10);
                        return e >= 0 && e < 60 ? e : undefined
                    }
                    function d(e) {
                        return angular.isDefined(e) && e.toString().length < 2 ? "0" + e : e
                    }
                    function E(e) {
                        S(),
                            u.$setViewValue(new Date(a)),
                            x(e)
                    }
                    function S() {
                        u.$setValidity("time", !0),
                            i.invalidHours = !1,
                            i.invalidMinutes = !1
                    }
                    function x(e) {
                        var t = a.getHours()
                            , n = a.getMinutes();
                        i.showMeridian && (t = t === 0 || t === 12 ? 12 : t % 12),
                            i.hours = e === "h" ? t : d(t),
                            i.minutes = e === "m" ? n : d(n),
                            i.meridian = a.getHours() < 12 ? f[0] : f[1]
                    }
                    function T(e) {
                        var t = new Date(a.getTime() + e * 6e4);
                        a.setHours(t.getHours(), t.getMinutes()),
                            E()
                    }
                    if (!u)
                        return;
                    i.$parent.$watch(e(o.ngDisabled), function(e) {
                        i.readonlyInput = e
                    });
                    var a = new Date
                        , f = angular.isDefined(o.meridians) ? i.$parent.$eval(o.meridians) : n.meridians || r.DATETIME_FORMATS.AMPMS
                        , l = n.hourStep;
                    o.hourStep && i.$parent.$watch(e(o.hourStep), function(e) {
                        l = parseInt(e, 10)
                    });
                    var c = n.minuteStep;
                    o.minuteStep && i.$parent.$watch(e(o.minuteStep), function(e) {
                        c = parseInt(e, 10)
                    }),
                        i.showMeridian = n.showMeridian,
                    o.showMeridian && i.$parent.$watch(e(o.showMeridian), function(e) {
                        i.showMeridian = !!e;
                        if (u.$error.time) {
                            var t = h()
                                , n = p();
                            angular.isDefined(t) && angular.isDefined(n) && (a.setHours(t),
                                E())
                        } else
                            x()
                    });
                    var v = s.find("input")
                        , m = v.eq(0)
                        , g = v.eq(1)
                        , y = angular.isDefined(o.mousewheel) ? i.$eval(o.mousewheel) : n.mousewheel;
                    if (y) {
                        var b = function(e) {
                                e.originalEvent && (e = e.originalEvent);
                                var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
                                return e.detail || t > 0
                            }
                            ;
                        m.bind("mousewheel wheel", function(e) {
                            if (i.readonlyInput)
                                return;
                            i.$apply(b(e) ? i.incrementHours() : i.decrementHours()),
                                e.preventDefault()
                        }),
                            g.bind("mousewheel wheel", function(e) {
                                if (i.readonlyInput)
                                    return;
                                i.$apply(b(e) ? i.incrementMinutes() : i.decrementMinutes()),
                                    e.preventDefault()
                            })
                    }
                    i.readonlyInput = angular.isDefined(o.readonlyInput) ? i.$eval(o.readonlyInput) : n.readonlyInput;
                    if (!i.readonlyInput) {
                        var w = function(e, t) {
                                u.$setViewValue(null ),
                                    u.$setValidity("time", !1),
                                angular.isDefined(e) && (i.invalidHours = e),
                                angular.isDefined(t) && (i.invalidMinutes = t)
                            }
                            ;
                        i.updateHours = function() {
                            var e = h();
                            angular.isDefined(e) ? (a.setHours(e),
                                E("h")) : w(!0)
                        }
                            ,
                            m.bind("blur", function(e) {
                                !i.validHours && i.hours < 10 && i.$apply(function() {
                                    i.hours = d(i.hours)
                                })
                            }),
                            i.updateMinutes = function() {
                                var e = p();
                                angular.isDefined(e) ? (a.setMinutes(e),
                                    E("m")) : w(undefined, !0)
                            }
                            ,
                            g.bind("blur", function(e) {
                                !i.invalidMinutes && i.minutes < 10 && i.$apply(function() {
                                    i.minutes = d(i.minutes)
                                })
                            })
                    } else
                        i.updateHours = angular.noop,
                            i.updateMinutes = angular.noop;
                    u.$render = function() {
                        var e = u.$modelValue ? new Date(u.$modelValue) : null ;
                        isNaN(e) ? (u.$setValidity("time", !1),
                            t.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (e && (a = e),
                            S(),
                            x())
                    }
                        ,
                        i.incrementHours = function() {
                            T(l * 60)
                        }
                        ,
                        i.decrementHours = function() {
                            T(-l * 60)
                        }
                        ,
                        i.incrementMinutes = function() {
                            T(c)
                        }
                        ,
                        i.decrementMinutes = function() {
                            T(-c)
                        }
                        ,
                        i.toggleMeridian = function() {
                            T(720 * (a.getHours() < 12 ? 1 : -1))
                        }
                }
            }
        }
        ]),
        angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(e) {
            var t = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
            return {
                parse: function(n) {
                    var r = n.match(t), i, s, o;
                    if (!r)
                        throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '" + n + "'.");
                    return {
                        itemName: r[3],
                        source: e(r[4]),
                        viewMapper: e(r[2] || r[1]),
                        modelMapper: e(r[1])
                    }
                }
            }
        }
        ]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(e, t, n, r, i, s, o) {
            var u = [9, 13, 27, 38, 40];
            return {
                require: "ngModel",
                link: function(a, f, l, c) {
                    var h = a.$eval(l.typeaheadMinLength) || 1, p = a.$eval(l.typeaheadWaitMs) || 0, d = a.$eval(l.typeaheadEditable) !== !1, v = t(l.typeaheadLoading).assign || angular.noop, m = t(l.typeaheadOnSelect), g = l.typeaheadInputFormatter ? t(l.typeaheadInputFormatter) : undefined, y = l.typeaheadAppendToBody ? t(l.typeaheadAppendToBody) : !1, b = t(l.ngModel).assign, w = o.parse(l.typeahead), E, S = angular.element("<div typeahead-popup></div>");
                    S.attr({
                        matches: "matches",
                        active: "activeIdx",
                        select: "select(activeIdx)",
                        query: "query",
                        position: "position"
                    }),
                    angular.isDefined(l.typeaheadTemplateUrl) && S.attr("template-url", l.typeaheadTemplateUrl);
                    var x = a.$new();
                    a.$on("$destroy", function() {
                        x.$destroy()
                    });
                    var T = function() {
                            x.matches = [],
                                x.activeIdx = -1
                        }
                        , N = function(e, t) {
                            var r = {
                                $viewValue: e
                            };
                            v(a, !0),
                                n.when(w.source(a, r)).then(function(n) {
                                    if ((e === c.$viewValue || t) && E) {
                                        if (n.length > 0) {
                                            x.activeIdx = 0,
                                                x.matches.length = 0;
                                            for (var i = 0; i < n.length; i++)
                                                r[w.itemName] = n[i],
                                                    x.matches.push({
                                                        label: w.viewMapper(x, r),
                                                        model: n[i]
                                                    });
                                            x.query = e,
                                                x.position = y ? s.offset(f) : s.position(f),
                                                x.position.top = x.position.top + f.prop("offsetHeight")
                                        } else
                                            T();
                                        v(a, !1)
                                    }
                                }, function() {
                                    T(),
                                        v(a, !1)
                                })
                        }
                        ;
                    T(),
                        x.query = undefined;
                    var C;
                    c.$parsers.unshift(function(e) {
                        return E = !0,
                            e && e.length >= h ? p > 0 ? (C && r.cancel(C),
                                C = r(function() {
                                    N(e)
                                }, p)) : N(e) : (v(a, !1),
                                T()),
                            d ? e : e ? (c.$setValidity("editable", !1),
                                undefined) : (c.$setValidity("editable", !0),
                                e)
                    }),
                        c.$formatters.push(function(e) {
                            var t, n, r = {};
                            return g ? (r.$model = e,
                                g(a, r)) : (r[w.itemName] = e,
                                t = w.viewMapper(a, r),
                                r[w.itemName] = undefined,
                                n = w.viewMapper(a, r),
                                t !== n ? t : e)
                        }),
                        x.select = function(e) {
                            var t = {}, n, r;
                            t[w.itemName] = r = x.matches[e].model,
                                n = w.modelMapper(a, t),
                                b(a, n),
                                c.$setValidity("editable", !0),
                                m(a, {
                                    $item: r,
                                    $model: n,
                                    $label: w.viewMapper(a, t)
                                }),
                                T(),
                                f[0].focus()
                        }
                        ,
                        f.bind("keydown", function(e) {
                            if (x.matches.length === 0 || u.indexOf(e.which) === -1)
                                return;
                            e.preventDefault(),
                                e.which === 40 ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length,
                                    x.$digest()) : e.which === 38 ? (x.activeIdx = (x.activeIdx ? x.activeIdx : x.matches.length) - 1,
                                    x.$digest()) : e.which === 13 || e.which === 9 ? x.$apply(function() {
                                    x.select(x.activeIdx)
                                }) : e.which === 27 && (e.stopPropagation(),
                                    T(),
                                    x.$digest())
                        }),
                        f.bind("blur", function(e) {
                            E = !1
                        }),
                        f.bind("focus", function(e) {
                            E = !0,
                                N("", !0)
                        });
                    var k = function(e) {
                            f[0] !== e.target && (T(),
                                x.$digest())
                        }
                        ;
                    i.bind("click", k),
                        a.$on("$destroy", function() {
                            i.unbind("click", k)
                        });
                    var L = e(S)(x);
                    y ? i.find("body").append(L) : f.after(L)
                }
            }
        }
        ]).directive("typeaheadPopup", function() {
            return {
                restrict: "EA",
                scope: {
                    matches: "=",
                    query: "=",
                    active: "=",
                    position: "=",
                    select: "&"
                },
                replace: !0,
                templateUrl: "template/typeahead/typeahead-popup.html",
                link: function(e, t, n) {
                    e.templateUrl = n.templateUrl,
                        e.isOpen = function() {
                            return e.matches.length > 0
                        }
                        ,
                        e.isActive = function(t) {
                            return e.active == t
                        }
                        ,
                        e.selectActive = function(t) {
                            e.active = t
                        }
                        ,
                        e.selectMatch = function(t) {
                            e.select({
                                activeIdx: t
                            })
                        }
                }
            }
        }).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(e, t, n, r) {
            return {
                restrict: "EA",
                scope: {
                    index: "=",
                    match: "=",
                    query: "="
                },
                link: function(i, s, o) {
                    var u = r(o.templateUrl)(i.$parent) || "template/typeahead/typeahead-match.html";
                    e.get(u, {
                        cache: t
                    }).success(function(e) {
                        s.replaceWith(n(e.trim())(i))
                    })
                }
            }
        }
        ]).filter("typeaheadHighlight", function() {
            function e(e) {
                return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            }
            return function(t, n) {
                return n ? t.replace(new RegExp(e(n),"gi"), "<strong>$&</strong>") : t
            }
        }),
        define("ui.bootstrap", ["aliyun-console-bootstrap-tpl"], function() {}),
        function(e, t, n) {
            t.module("ngAnimate", ["ng"]).config(["$provide", "$animateProvider", function(r, i) {
                var s = t.noop
                    , o = t.forEach
                    , u = i.$$selectors
                    , a = 1
                    , f = "$$ngAnimateState"
                    , l = "ng-animate"
                    , c = {
                    running: !0
                };
                r.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$timeout", "$rootScope", "$document", function(e, n, r, i, h, p, d) {
                    function v(e) {
                        if (e) {
                            var t = []
                                , i = {};
                            e = e.substr(1).split("."),
                            (r.transitions || r.animations) && e.push("");
                            for (var s = 0; s < e.length; s++) {
                                var o = e[s]
                                    , a = u[o];
                                a && !i[o] && (t.push(n.get(a)),
                                    i[o] = !0)
                            }
                            return t
                        }
                    }
                    function g(e, t, n, r, i, u, a) {
                        function c(e) {
                            m();
                            if (!0 === e)
                                g();
                            else {
                                if (e = n.data(f))
                                    e.done = g,
                                        n.data(f, e);
                                p(T, "after", g)
                            }
                        }
                        function p(r, i, u) {
                            var a = i + "End";
                            o(r, function(o, f) {
                                var l = function() {
                                        e: {
                                            var e = i + "Complete"
                                                , t = r[f];
                                            t[e] = !0,
                                                (t[a] || s)();
                                            for (t = 0; t < r.length; t++)
                                                if (!r[t][e])
                                                    break e;
                                            u()
                                        }
                                    }
                                    ;
                                "before" != i || "enter" != e && "move" != e ? o[i] ? o[a] = x ? o[i](n, t, l) : o[i](n, l) : l() : l()
                            })
                        }
                        function d() {
                            a && h(a, 0, !1)
                        }
                        function m() {
                            m.hasBeenRun || (m.hasBeenRun = !0,
                                u())
                        }
                        function g() {
                            if (!g.hasBeenRun) {
                                g.hasBeenRun = !0;
                                var e = n.data(f);
                                e && (x ? w(n) : (e.closeAnimationTimeout = h(function() {
                                    w(n)
                                }, 0, !1),
                                    n.data(f, e))),
                                    d()
                            }
                        }
                        var y = n.attr("class") || ""
                            , S = (" " + (y + " " + t)).replace(/\s+/g, ".");
                        r || (r = i ? i.parent() : n.parent());
                        var S = v(S)
                            , x = "addClass" == e || "removeClass" == e;
                        i = n.data(f) || {};
                        if (E(n, r) || 0 === S.length)
                            m(),
                                g();
                        else {
                            var T = [];
                            i.running && x && i.structural || o(S, function(r) {
                                if (!r.allowCancel || r.allowCancel(n, e, t)) {
                                    var i = r[e];
                                    "leave" == e ? (r = i,
                                        i = null ) : r = r["before" + e.charAt(0).toUpperCase() + e.substr(1)],
                                        T.push({
                                            before: r,
                                            after: i
                                        })
                                }
                            }),
                                0 === T.length ? (m(),
                                    d()) : (r = " " + y + " ",
                                i.running && (h.cancel(i.closeAnimationTimeout),
                                    w(n),
                                    b(i.animations),
                                    i.beforeComplete ? (i.done || s)(!0) : x && !i.structural && (r = "removeClass" == i.event ? r.replace(i.className, "") : r + i.className + " ")),
                                    y = " " + t + " ",
                                    "addClass" == e && 0 <= r.indexOf(y) || "removeClass" == e && -1 == r.indexOf(y) ? (m(),
                                        d()) : (n.addClass(l),
                                        n.data(f, {
                                            running: !0,
                                            event: e,
                                            className: t,
                                            structural: !x,
                                            animations: T,
                                            done: c
                                        }),
                                        p(T, "before", c)))
                        }
                    }
                    function y(e) {
                        e = e[0],
                        e.nodeType == a && o(e.querySelectorAll("." + l), function(e) {
                            e = t.element(e);
                            var n = e.data(f);
                            n && (b(n.animations),
                                w(e))
                        })
                    }
                    function b(e) {
                        o(e, function(t) {
                            e.beforeComplete || (t.beforeEnd || s)(!0),
                            e.afterComplete || (t.afterEnd || s)(!0)
                        })
                    }
                    function w(e) {
                        e[0] == i[0] ? c.disabled || (c.running = !1,
                            c.structural = !1) : (e.removeClass(l),
                            e.removeData(f))
                    }
                    function E(e, t) {
                        if (c.disabled)
                            return !0;
                        if (e[0] == i[0])
                            return c.disabled || c.running;
                        do {
                            if (0 === t.length)
                                break;
                            var n = t[0] == i[0]
                                , r = n ? c : t.data(f)
                                , r = r && (!!r.disabled || !!r.running);
                            if (n || r)
                                return r;
                            if (n)
                                break
                        } while (t = t.parent());return !0
                    }
                    return i.data(f, c),
                        p.$$postDigest(function() {
                            c.running = !1
                        }),
                    {
                        enter: function(t, n, r, i) {
                            this.enabled(!1, t),
                                e.enter(t, n, r),
                                p.$$postDigest(function() {
                                    g("enter", "ng-enter", t, n, r, s, i)
                                })
                        },
                        leave: function(t, n) {
                            y(t),
                                this.enabled(!1, t),
                                p.$$postDigest(function() {
                                    g("leave", "ng-leave", t, null , null , function() {
                                        e.leave(t)
                                    }, n)
                                })
                        },
                        move: function(t, n, r, i) {
                            y(t),
                                this.enabled(!1, t),
                                e.move(t, n, r),
                                p.$$postDigest(function() {
                                    g("move", "ng-move", t, n, r, s, i)
                                })
                        },
                        addClass: function(t, n, r) {
                            g("addClass", n, t, null , null , function() {
                                e.addClass(t, n)
                            }, r)
                        },
                        removeClass: function(t, n, r) {
                            g("removeClass", n, t, null , null , function() {
                                e.removeClass(t, n)
                            }, r)
                        },
                        enabled: function(e, t) {
                            switch (arguments.length) {
                                case 2:
                                    if (e)
                                        w(t);
                                    else {
                                        var n = t.data(f) || {};
                                        n.disabled = !0,
                                            t.data(f, n)
                                    }
                                    break;
                                case 1:
                                    c.disabled = !e;
                                    break;
                                default:
                                    e = !c.disabled
                            }
                            return !!e
                        }
                    }
                }
                ]),
                    i.register("", ["$window", "$sniffer", "$timeout", function(r, i, u) {
                        function f(e) {
                            U.push(e),
                                u.cancel(z),
                                z = u(function() {
                                    o(U, function(e) {
                                        e()
                                    }),
                                        U = [],
                                        z = null ,
                                        I = {}
                                }, 10, !1)
                        }
                        function l(e, t) {
                            var n = t ? I[t] : null ;
                            if (!n) {
                                var i = 0, s = 0, u = 0, f = 0, l, h, p, d;
                                o(e, function(e) {
                                    if (e.nodeType == a) {
                                        e = r.getComputedStyle(e) || {},
                                            p = e[x + A],
                                            i = Math.max(c(p), i),
                                            d = e[x + O],
                                            l = e[x + M],
                                            s = Math.max(c(l), s),
                                            h = e[C + M],
                                            f = Math.max(c(h), f);
                                        var t = c(e[C + A]);
                                        0 < t && (t *= parseInt(e[C + _], 10) || 1),
                                            u = Math.max(t, u)
                                    }
                                }),
                                    n = {
                                        total: 0,
                                        transitionPropertyStyle: d,
                                        transitionDurationStyle: p,
                                        transitionDelayStyle: l,
                                        transitionDelay: s,
                                        transitionDuration: i,
                                        animationDelayStyle: h,
                                        animationDelay: f,
                                        animationDuration: u
                                    },
                                t && (I[t] = n)
                            }
                            return n
                        }
                        function c(e) {
                            var n = 0;
                            return e = t.isString(e) ? e.split(/\s*,\s*/) : [],
                                o(e, function(e) {
                                    n = Math.max(parseFloat(e) || 0, n)
                                }),
                                n
                        }
                        function h(e) {
                            var t = e.parent()
                                , n = t.data(P);
                            return n || (t.data(P, ++R),
                                n = R),
                            n + "-" + e[0].className
                        }
                        function p(e, t) {
                            var n = h(e)
                                , r = n + " " + t
                                , i = {}
                                , s = I[r] ? ++I[r].total : 0;
                            if (0 < s) {
                                var u = t + "-stagger"
                                    , i = n + " " + u;
                                (n = !I[i]) && e.addClass(u),
                                    i = l(e, i),
                                n && e.removeClass(u)
                            }
                            e.addClass(t),
                                r = l(e, r),
                                u = Math.max(r.transitionDuration, r.animationDuration);
                            if (0 === u)
                                return e.removeClass(t),
                                    !1;
                            var a = "";
                            return 0 < r.transitionDuration ? (e.addClass(j),
                                a += F + " ",
                                e[0].style[x + O] = "none") : e[0].style[C] = "none 0s",
                                o(t.split(" "), function(e, t) {
                                    a += (0 < t ? " " : "") + e + "-active"
                                }),
                                e.data(H, {
                                    className: t,
                                    activeClassName: a,
                                    maxDuration: u,
                                    classes: t + " " + a,
                                    timings: r,
                                    stagger: i,
                                    ii: s
                                }),
                                !0
                        }
                        function d(e) {
                            e = e[0];
                            var t = x + O;
                            e.style[t] && 0 < e.style[t].length && (e.style[t] = "")
                        }
                        function v(e, t, n) {
                            function r(e) {
                                e.stopPropagation(),
                                    e = e.originalEvent || e;
                                var t = e.$manualTimeStamp || e.timeStamp || Date.now();
                                Math.max(t - h, 0) >= c && e.elapsedTime >= f && n()
                            }
                            var s = e.data(H);
                            if (e.hasClass(t) && s) {
                                var o = e[0], u = s.timings, a = s.stagger, f = s.maxDuration, l = s.activeClassName, c = 1e3 * Math.max(u.transitionDelay, u.animationDelay), h = Date.now(), p = L + " " + N, d = s.ii, v, s = "", g = [];
                                if (0 < u.transitionDuration) {
                                    var y = u.transitionPropertyStyle;
                                    -1 == y.indexOf("all") && (v = !0,
                                        s += S + "transition-property: " + y + ", " + (i.msie ? "-ms-zoom" : "border-spacing") + "; ",
                                        s += S + "transition-duration: " + u.transitionDurationStyle + ", " + u.transitionDuration + "s; ",
                                        g.push(S + "transition-property"),
                                        g.push(S + "transition-duration"))
                                } else
                                    e[0].style[C] = "";
                                return 0 < d && (0 < a.transitionDelay && 0 === a.transitionDuration && (y = u.transitionDelayStyle,
                                v && (y += ", " + u.transitionDelay + "s"),
                                    s += S + "transition-delay: " + m(y, a.transitionDelay, d) + "; ",
                                    g.push(S + "transition-delay")),
                                0 < a.animationDelay && 0 === a.animationDuration && (s += S + "animation-delay: " + m(u.animationDelayStyle, a.animationDelay, d) + "; ",
                                    g.push(S + "animation-delay"))),
                                0 < g.length && (u = o.getAttribute("style") || "",
                                    o.setAttribute("style", u + " " + s)),
                                    e.on(p, r),
                                    e.addClass(l),
                                    function(n) {
                                        e.off(p, r),
                                            e.removeClass(l),
                                            w(e, t);
                                        for (var i in g)
                                            o.style.removeProperty(g[i])
                                    }
                            }
                            n()
                        }
                        function m(e, t, n) {
                            var r = "";
                            return o(e.split(","), function(e, i) {
                                r += (0 < i ? "," : "") + (n * t + parseInt(e, 10)) + "s"
                            }),
                                r
                        }
                        function g(e, t) {
                            if (p(e, t))
                                return function(n) {
                                    n && w(e, t)
                                }
                        }
                        function y(e, t, n) {
                            if (e.data(H))
                                return v(e, t, n);
                            w(e, t),
                                n()
                        }
                        function b(e, t, n) {
                            var r = g(e, t);
                            if (r) {
                                var i = r;
                                return f(function() {
                                    d(e),
                                        i = y(e, t, n)
                                }),
                                    function(e) {
                                        (i || s)(e)
                                    }
                            }
                            n()
                        }
                        function w(e, t) {
                            e.removeClass(t),
                                e.removeClass(j),
                                e.removeData(H)
                        }
                        function E(e, n) {
                            var r = "";
                            return e = t.isArray(e) ? e : e.split(/\s+/),
                                o(e, function(e, t) {
                                    e && 0 < e.length && (r += (0 < t ? " " : "") + e + n)
                                }),
                                r
                        }
                        var S = "", x, N, C, L;
                        e.ontransitionend === n && e.onwebkittransitionend !== n ? (S = "-webkit-",
                            x = "WebkitTransition",
                            N = "webkitTransitionEnd transitionend") : (x = "transition",
                            N = "transitionend"),
                            e.onanimationend === n && e.onwebkitanimationend !== n ? (S = "-webkit-",
                                C = "WebkitAnimation",
                                L = "webkitAnimationEnd animationend") : (C = "animation",
                                L = "animationend");
                        var A = "Duration", O = "Property", M = "Delay", _ = "IterationCount", P = "$$ngAnimateKey", H = "$$ngAnimateCSS3Data", j = "ng-animate-start", F = "ng-animate-active", I = {}, R = 0, U = [], z;
                        return {
                            allowCancel: function(e, n, r) {
                                var i = (e.data(H) || {}).classes;
                                if (!i || 0 <= ["enter", "leave", "move"].indexOf(n))
                                    return !0;
                                var s = e.parent()
                                    , u = t.element(e[0].cloneNode());
                                return u.attr("style", "position:absolute; top:-9999px; left:-9999px"),
                                    u.removeAttr("id"),
                                    u.html(""),
                                    o(i.split(" "), function(e) {
                                        u.removeClass(e)
                                    }),
                                    u.addClass(E(r, "addClass" == n ? "-add" : "-remove")),
                                    s.append(u),
                                    e = l(u),
                                    u.remove(),
                                0 < Math.max(e.transitionDuration, e.animationDuration)
                            },
                            enter: function(e, t) {
                                return b(e, "ng-enter", t)
                            },
                            leave: function(e, t) {
                                return b(e, "ng-leave", t)
                            },
                            move: function(e, t) {
                                return b(e, "ng-move", t)
                            },
                            beforeAddClass: function(e, t, n) {
                                if (t = g(e, E(t, "-add")))
                                    return f(function() {
                                        d(e),
                                            n()
                                    }),
                                        t;
                                n()
                            },
                            addClass: function(e, t, n) {
                                return y(e, E(t, "-add"), n)
                            },
                            beforeRemoveClass: function(e, t, n) {
                                if (t = g(e, E(t, "-remove")))
                                    return f(function() {
                                        d(e),
                                            n()
                                    }),
                                        t;
                                n()
                            },
                            removeClass: function(e, t, n) {
                                return y(e, E(t, "-remove"), n)
                            }
                        }
                    }
                    ])
            }
            ])
        }(window, window.angular),
        define("angular-animate", ["angular"], function() {}),
        angular.module("angular-growl", []),
        angular.module("angular-growl").directive("growl", ["$rootScope", function(e) {
            return {
                restrict: "A",
                template: '<div class="growl">	<div class="growl-item alert" ng-repeat="message in messages" ng-class="computeClasses(message)">		<button type="button" class="close" ng-click="deleteMessage(message)">&times;</button>       <div ng-switch="message.enableHtml">           <div ng-switch-when="true" ng-bind-html="message.text"></div>           <div ng-switch-default ng-bind="message.text"></div>       </div>	</div></div>',
                replace: !1,
                scope: !0,
                controller: ["$scope", "$timeout", "growl", function(t, n, r) {
                    function i(e) {
                        t.messages.push(e),
                        e.ttl && -1 !== e.ttl && n(function() {
                            t.deleteMessage(e)
                        }, e.ttl)
                    }
                    var s = r.onlyUnique();
                    t.messages = [],
                        e.$on("growlMessage", function(e, n) {
                            var r;
                            s ? (angular.forEach(t.messages, function(e) {
                                n.text === e.text && n.severity === e.severity && (r = !0)
                            }),
                            r || i(n)) : i(n)
                        }),
                        t.deleteMessage = function(e) {
                            var n = t.messages.indexOf(e);
                            n > -1 && t.messages.splice(n, 1)
                        }
                        ,
                        t.computeClasses = function(e) {
                            return {
                                "alert-success": "success" === e.severity,
                                "alert-error": "error" === e.severity,
                                "alert-danger": "error" === e.severity,
                                "alert-info": "info" === e.severity,
                                "alert-warning": "warn" === e.severity
                            }
                        }
                }
                ]
            }
        }
        ]),
        angular.module("angular-growl").provider("growl", function() {
            var e = null
                , t = !1
                , n = "messages"
                , r = "text"
                , i = "severity"
                , s = !0;
            this.globalTimeToLive = function(t) {
                e = t
            }
                ,
                this.globalEnableHtml = function(e) {
                    t = e
                }
                ,
                this.messagesKey = function(e) {
                    n = e
                }
                ,
                this.messageTextKey = function(e) {
                    r = e
                }
                ,
                this.messageSeverityKey = function(e) {
                    i = e
                }
                ,
                this.onlyUniqueMessages = function(e) {
                    s = e
                }
                ,
                this.serverMessagesInterceptor = ["$q", "growl", function(e, t) {
                    function r(e) {
                        e.data[n] && e.data[n].length > 0 && t.addServerMessages(e.data[n])
                    }
                    function i(e) {
                        return r(e),
                            e
                    }
                    function s(t) {
                        return r(t),
                            e.reject(t)
                    }
                    return function(e) {
                        return e.then(i, s)
                    }
                }
                ],
                this.$get = ["$rootScope", "$filter", function(n, o) {
                    function u(e) {
                        y && (e.text = y(e.text)),
                            n.$broadcast("growlMessage", e)
                    }
                    function l(n, r, i) {
                        var s, o = r || {};
                        s = {
                            text: n,
                            severity: i,
                            ttl: o.ttl || e,
                            enableHtml: o.enableHtml || t
                        },
                            u(s)
                    }
                    function c(e, t) {
                        l(e, t, "warn")
                    }
                    function h(e, t) {
                        l(e, t, "error")
                    }
                    function p(e, t) {
                        l(e, t, "info")
                    }
                    function v(e, t) {
                        l(e, t, "success")
                    }
                    function m(e) {
                        var t, n, s, o;
                        for (o = e.length,
                                 t = 0; o > t; t++)
                            if (n = e[t],
                                n[r] && n[i]) {
                                switch (n[i]) {
                                    case "warn":
                                        s = "warn";
                                        break;
                                    case "success":
                                        s = "success";
                                        break;
                                    case "info":
                                        s = "info";
                                        break;
                                    case "error":
                                        s = "error"
                                }
                                l(n[r], void 0, s)
                            }
                    }
                    function g() {
                        return s
                    }
                    var y;
                    try {
                        y = o("translate")
                    } catch (w) {}
                    return {
                        addWarnMessage: c,
                        addErrorMessage: h,
                        addInfoMessage: p,
                        addSuccessMessage: v,
                        addServerMessages: m,
                        onlyUnique: g
                    }
                }
                ]
        }),
        define("angular-growl", ["angular-animate"], function() {}),
        angular.module("ui.validate", []).directive("uiValidate", function() {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(e, t, n, r) {
                    function i(t) {
                        return angular.isString(t) ? (e.$watch(t, function() {
                            angular.forEach(o, function(e) {
                                e(r.$modelValue)
                            })
                        }),
                            void 0) : angular.isArray(t) ? (angular.forEach(t, function(t) {
                            e.$watch(t, function() {
                                angular.forEach(o, function(e) {
                                    e(r.$modelValue)
                                })
                            })
                        }),
                            void 0) : (angular.isObject(t) && angular.forEach(t, function(t, n) {
                            angular.isString(t) && e.$watch(t, function() {
                                o[n](r.$modelValue)
                            }),
                            angular.isArray(t) && angular.forEach(t, function(t) {
                                e.$watch(t, function() {
                                    o[n](r.$modelValue)
                                })
                            })
                        }),
                            void 0)
                    }
                    var s, o = {}, u = e.$eval(n.uiValidate);
                    u && (angular.isString(u) && (u = {
                        validator: u
                    }),
                        angular.forEach(u, function(t, n) {
                            s = function(i) {
                                var s = e.$eval(t, {
                                    $value: i
                                });
                                return angular.isObject(s) && angular.isFunction(s.then) ? (s.then(function() {
                                    r.$setValidity(n, !0)
                                }, function() {
                                    r.$setValidity(n, !1)
                                }),
                                    i) : s ? (r.$setValidity(n, !0),
                                    i) : (r.$setValidity(n, !1),
                                    void 0)
                            }
                                ,
                                o[n] = s,
                                r.$formatters.push(s),
                                r.$parsers.push(s)
                        }),
                    n.uiValidateWatch && i(e.$eval(n.uiValidateWatch)))
                }
            }
        }),
        define("angular-ui-validate", ["angular"], function() {}),
        function(e, t, n) {
            function r(e) {
                var t = {};
                e = e.split(",");
                var n;
                for (n = 0; n < e.length; n++)
                    t[e[n]] = !0;
                return t
            }
            function i(e, n) {
                function r(e, r, o, u) {
                    r = t.lowercase(r);
                    if (E[r])
                        for (; g.last() && S[g.last()]; )
                            i("", g.last());
                    w[r] && g.last() == r && i("", r),
                    (u = b[r] || !!u) || g.push(r);
                    var a = {};
                    o.replace(c, function(e, t, n, r, i) {
                        a[t] = s(n || r || i || "")
                    }),
                    n.start && n.start(r, a, u)
                }
                function i(e, r) {
                    var i = 0, s;
                    if (r = t.lowercase(r))
                        for (i = g.length - 1; 0 <= i && g[i] != r; i--)
                            ;
                    if (0 <= i) {
                        for (s = g.length - 1; s >= i; s--)
                            n.end && n.end(g[s]);
                        g.length = i
                    }
                }
                var o, u, g = [], y = e;
                for (g.last = function() {
                    return g[g.length - 1]
                }
                    ; e; ) {
                    u = !0;
                    if (g.last() && x[g.last()])
                        e = e.replace(RegExp("(.*)<\\s*\\/\\s*" + g.last() + "[^>]*>", "i"), function(e, t) {
                            return t = t.replace(d, "$1").replace(m, "$1"),
                            n.chars && n.chars(s(t)),
                                ""
                        }),
                            i("", g.last());
                    else {
                        if (0 === e.indexOf("<!--"))
                            o = e.indexOf("--", 4),
                            0 <= o && e.lastIndexOf("-->", o) === o && (n.comment && n.comment(e.substring(4, o)),
                                e = e.substring(o + 3),
                                u = !1);
                        else if (v.test(e)) {
                            if (o = e.match(v))
                                e = e.replace(o[0], ""),
                                    u = !1
                        } else if (p.test(e)) {
                            if (o = e.match(l))
                                e = e.substring(o[0].length),
                                    o[0].replace(l, i),
                                    u = !1
                        } else
                            h.test(e) && (o = e.match(f)) && (e = e.substring(o[0].length),
                                o[0].replace(f, r),
                                u = !1);
                        u && (o = e.indexOf("<"),
                            u = 0 > o ? e : e.substring(0, o),
                            e = 0 > o ? "" : e.substring(o),
                        n.chars && n.chars(s(u)))
                    }
                    if (e == y)
                        throw a("badparse", e);
                    y = e
                }
                i()
            }
            function s(e) {
                return k.innerHTML = e.replace(/</g, "&lt;"),
                k.innerText || k.textContent || ""
            }
            function o(e) {
                return e.replace(/&/g, "&amp;").replace(y, function(e) {
                    return "&#" + e.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            function u(e) {
                var n = !1
                    , r = t.bind(e, e.push);
                return {
                    start: function(e, i, s) {
                        e = t.lowercase(e),
                        !n && x[e] && (n = e),
                        n || !0 !== T[e] || (r("<"),
                            r(e),
                            t.forEach(i, function(e, n) {
                                var i = t.lowercase(n);
                                !0 !== C[i] || !0 === N[i] && !e.match(g) || (r(" "),
                                    r(n),
                                    r('="'),
                                    r(o(e)),
                                    r('"'))
                            }),
                            r(s ? "/>" : ">"))
                    },
                    end: function(e) {
                        e = t.lowercase(e),
                        n || !0 !== T[e] || (r("</"),
                            r(e),
                            r(">")),
                        e == n && (n = !1)
                    },
                    chars: function(e) {
                        n || r(o(e))
                    }
                }
            }
            var a = t.$$minErr("$sanitize")
                , f = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/
                , l = /^<\s*\/\s*([\w:-]+)[^>]*>/
                , c = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g
                , h = /^</
                , p = /^<\s*\//
                , d = /\x3c!--(.*?)--\x3e/g
                , v = /<!DOCTYPE([^>]*?)>/i
                , m = /<!\[CDATA\[(.*?)]]\x3e/g
                , g = /^((ftp|https?):\/\/|mailto:|tel:|#)/i
                , y = /([^\#-~| |!])/g
                , b = r("area,br,col,hr,img,wbr");
            e = r("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                n = r("rp,rt");
            var w = t.extend({}, n, e)
                , E = t.extend({}, e, r("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"))
                , S = t.extend({}, n, r("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"))
                , x = r("script,style")
                , T = t.extend({}, b, E, S, w)
                , N = r("background,cite,href,longdesc,src,usemap")
                , C = t.extend({}, N, r("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width"))
                , k = document.createElement("pre");
            t.module("ngSanitize", []).value("$sanitize", function(e) {
                var t = [];
                return i(e, u(t)),
                    t.join("")
            }),
                t.module("ngSanitize").filter("linky", function() {
                    var e = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/
                        , n = /^mailto:/;
                    return function(r, i) {
                        if (!r)
                            return r;
                        var s, o = r, a = [], f = u(a), l, c, h = {};
                        t.isDefined(i) && (h.target = i);
                        for (; s = o.match(e); )
                            l = s[0],
                            s[2] == s[3] && (l = "mailto:" + l),
                                c = s.index,
                                f.chars(o.substr(0, c)),
                                h.href = l,
                                f.start("a", h),
                                f.chars(s[0].replace(n, "")),
                                f.end("a"),
                                o = o.substring(c + s[0].length);
                        return f.chars(o),
                            a.join("")
                    }
                })
        }(window, window.angular),
        define("angular-sanitize", ["angular"], function() {}),
        angular.module("ngLocale", [], ["$provide", function(e) {
            var t = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other"
            };
            e.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["上午", "下午"],
                    DAY: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    MONTH: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                    SHORTDAY: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                    SHORTMONTH: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                    fullDate: "y年M月d日EEEE",
                    longDate: "y年M月d日",
                    medium: "yyyy-M-d ah:mm:ss",
                    mediumDate: "yyyy-M-d",
                    mediumTime: "ah:mm:ss",
                    "short": "yy-M-d ah:mm",
                    shortDate: "yy-M-d",
                    shortTime: "ah:mm"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "¥",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        macFrac: 0,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        macFrac: 0,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "(¤",
                        negSuf: ")",
                        posPre: "¤",
                        posSuf: ""
                    }]
                },
                id: "zh-cn",
                pluralCat: function(e) {
                    return t.OTHER
                }
            })
        }
        ]),
        define("angular-locale-zh-cn", ["angular"], function() {}),
        angular.module("pascalprecht.translate", ["ng"]).run(["$translate", function(e) {
            var t = e.storageKey()
                , n = e.storage();
            n ? n.get(t) ? e.use(n.get(t)) : angular.isString(e.preferredLanguage()) ? e.use(e.preferredLanguage()) : n.set(t, e.use()) : angular.isString(e.preferredLanguage()) && e.use(e.preferredLanguage())
        }
        ]),
        angular.module("pascalprecht.translate").provider("$translate", ["$STORAGE_KEY", function(e) {
            var t = {}, n, r = [], i, s, o, u, a, f, l = e, c, h, p, d = [], v = !1, m, g = "translate-cloak", y, b, w, E = !1, S = ".", x = function() {
                    var e = window.navigator;
                    return (e.language || e.browserLanguage || e.systemLanguage || e.userLanguage || "").split("-").join("_")
                }
                , T = function(e) {
                    var t = []
                        , n = angular.lowercase(e)
                        , s = 0
                        , o = r.length;
                    for (; s < o; s++)
                        t.push(angular.lowercase(r[s]));
                    if (t.indexOf(n) > -1)
                        return e;
                    if (i) {
                        var u;
                        for (var a in i) {
                            var f = !1
                                , l = i.hasOwnProperty(a) && angular.lowercase(a) === angular.lowercase(e);
                            a.slice(-1) === "*" && (f = a.slice(0, -1) === e.slice(0, a.length - 1));
                            if (l || f) {
                                u = i[a];
                                if (t.indexOf(angular.lowercase(u)) > -1)
                                    return u
                            }
                        }
                    }
                    var c = e.split("_");
                    return c.length > 1 && t.indexOf(angular.lowercase(c[0])) > -1 ? c[0] : e
                }
                , N = function(e, n) {
                    if (!e && !n)
                        return t;
                    if (e && !n) {
                        if (angular.isString(e))
                            return t[e]
                    } else
                        angular.isObject(t[e]) || (t[e] = {}),
                            angular.extend(t[e], C(n));
                    return this
                }
                ;
            this.translations = N,
                this.cloakClassName = function(e) {
                    return e ? (g = e,
                        this) : g
                }
            ;
            var C = function(e, t, n, r) {
                    var i, s, o, u;
                    t || (t = []),
                    n || (n = {});
                    for (i in e) {
                        if (!e.hasOwnProperty(i))
                            continue;u = e[i],
                            angular.isObject(u) ? C(u, t.concat(i), n, i) : (s = t.length ? "" + t.join(S) + S + i : i,
                            t.length && i === r && (o = "" + t.join(S),
                                n[o] = "@:" + s),
                                n[s] = u)
                    }
                    return n
                }
                ;
            this.addInterpolation = function(e) {
                return d.push(e),
                    this
            }
                ,
                this.useMessageFormatInterpolation = function() {
                    return this.useInterpolation("$translateMessageFormatInterpolation")
                }
                ,
                this.useInterpolation = function(e) {
                    return p = e,
                        this
                }
                ,
                this.useSanitizeValueStrategy = function(e) {
                    return v = e,
                        this
                }
                ,
                this.preferredLanguage = function(e) {
                    return e ? (n = e,
                        this) : n
                }
                ,
                this.translationNotFoundIndicator = function(e) {
                    return this.translationNotFoundIndicatorLeft(e),
                        this.translationNotFoundIndicatorRight(e),
                        this
                }
                ,
                this.translationNotFoundIndicatorLeft = function(e) {
                    return e ? (b = e,
                        this) : b
                }
                ,
                this.translationNotFoundIndicatorRight = function(e) {
                    return e ? (w = e,
                        this) : w
                }
                ,
                this.fallbackLanguage = function(e) {
                    return k(e),
                        this
                }
            ;
            var k = function(e) {
                    return e ? (angular.isString(e) ? (o = !0,
                        s = [e]) : angular.isArray(e) && (o = !1,
                        s = e),
                    angular.isString(n) && s.push(n),
                        this) : o ? s[0] : s
                }
                ;
            this.use = function(e) {
                if (e) {
                    if (!t[e] && !m)
                        throw new Error("$translateProvider couldn't find translationTable for langKey: '" + e + "'");
                    return u = e,
                        this
                }
                return u
            }
            ;
            var L = function(e) {
                    if (!e)
                        return c ? c + l : l;
                    l = e
                }
                ;
            this.storageKey = L,
                this.useUrlLoader = function(e) {
                    return this.useLoader("$translateUrlLoader", {
                        url: e
                    })
                }
                ,
                this.useStaticFilesLoader = function(e) {
                    return this.useLoader("$translateStaticFilesLoader", e)
                }
                ,
                this.useLoader = function(e, t) {
                    return m = e,
                        y = t || {},
                        this
                }
                ,
                this.useLocalStorage = function() {
                    return this.useStorage("$translateLocalStorage")
                }
                ,
                this.useCookieStorage = function() {
                    return this.useStorage("$translateCookieStorage")
                }
                ,
                this.useStorage = function(e) {
                    return f = e,
                        this
                }
                ,
                this.storagePrefix = function(e) {
                    return e ? (c = e,
                        this) : e
                }
                ,
                this.useMissingTranslationHandlerLog = function() {
                    return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
                }
                ,
                this.useMissingTranslationHandler = function(e) {
                    return h = e,
                        this
                }
                ,
                this.usePostCompiling = function(e) {
                    return E = !!e,
                        this
                }
                ,
                this.determinePreferredLanguage = function(e) {
                    var t = e && angular.isFunction(e) ? e() : x();
                    return r.length ? n = T(t) : n = t,
                        this
                }
                ,
                this.registerAvailableLanguageKeys = function(e, t) {
                    return e ? (r = e,
                    t && (i = t),
                        this) : r
                }
                ,
                this.$get = ["$log", "$injector", "$rootScope", "$q", function(e, r, i, c) {
                    var S, x = r.get(p || "$translateDefaultInterpolation"), A = !1, O = {}, M = {}, _, D, P = function(e, t, r) {
                            if (angular.isArray(e)) {
                                var i = function(e) {
                                        var n = {}
                                            , i = []
                                            , s = function(e) {
                                                var i = c.defer()
                                                    , s = function(t) {
                                                        n[e] = t,
                                                            i.resolve([e, t])
                                                    }
                                                    ;
                                                return P(e, t, r).then(s, s),
                                                    i.promise
                                            }
                                            ;
                                        for (var o = 0, u = e.length; o < u; o++)
                                            i.push(s(e[o]));
                                        return c.all(i).then(function() {
                                            return n
                                        })
                                    }
                                    ;
                                return i(e)
                            }
                            var o = c.defer();
                            e && (e = e.trim());
                            var a = function() {
                                var e = n ? M[n] : M[u];
                                _ = 0;
                                if (f && !e) {
                                    var t = S.get(l);
                                    e = M[t];
                                    if (s && s.length) {
                                        var r = H(s, t);
                                        _ = r > -1 ? r += 1 : 0,
                                            s.push(n)
                                    }
                                }
                                return e
                            }();
                            return a ? a.then(function() {
                                V(e, t, r).then(o.resolve, o.reject)
                            }, o.reject) : V(e, t, r).then(o.resolve, o.reject),
                                o.promise
                        }
                        , H = function(e, t) {
                            for (var n = 0, r = e.length; n < r; n++)
                                if (e[n] === t)
                                    return n;
                            return -1
                        }
                        , B = function(e) {
                            return b && (e = [b, e].join(" ")),
                            w && (e = [e, w].join(" ")),
                                e
                        }
                        , j = function(e) {
                            u = e,
                                i.$emit("$translateChangeSuccess"),
                            f && S.set(P.storageKey(), u),
                                x.setLocale(u),
                                angular.forEach(O, function(e, t) {
                                    O[t].setLocale(u)
                                }),
                                i.$emit("$translateChangeEnd")
                        }
                        , F = function(e) {
                            if (!e)
                                throw "No language key specified for loading.";
                            var t = c.defer();
                            return i.$emit("$translateLoadingStart"),
                                A = !0,
                                r.get(m)(angular.extend(y, {
                                    key: e
                                })).then(function(n) {
                                    var r = {};
                                    i.$emit("$translateLoadingSuccess"),
                                        angular.isArray(n) ? angular.forEach(n, function(e) {
                                            angular.extend(r, C(e))
                                        }) : angular.extend(r, C(n)),
                                        A = !1,
                                        t.resolve({
                                            key: e,
                                            table: r
                                        }),
                                        i.$emit("$translateLoadingEnd")
                                }, function(e) {
                                    i.$emit("$translateLoadingError"),
                                        t.reject(e),
                                        i.$emit("$translateLoadingEnd")
                                }),
                                t.promise
                        }
                        ;
                    if (f) {
                        S = r.get(f);
                        if (!S.get || !S.set)
                            throw new Error("Couldn't use storage '" + f + "', missing get() or set() method!")
                    }
                    angular.isFunction(x.useSanitizeValueStrategy) && x.useSanitizeValueStrategy(v),
                    d.length && angular.forEach(d, function(e) {
                        var t = r.get(e);
                        t.setLocale(n || u),
                        angular.isFunction(t.useSanitizeValueStrategy) && t.useSanitizeValueStrategy(v),
                            O[t.getInterpolationIdentifier()] = t
                    });
                    var I = function(e) {
                            var n = c.defer();
                            return t.hasOwnProperty(e) ? (n.resolve(t[e]),
                                n.promise) : (M[e].then(function(e) {
                                N(e.key, e.table),
                                    n.resolve(e.table)
                            }, n.reject),
                                n.promise)
                        }
                        , q = function(e, t, n, r) {
                            var i = c.defer();
                            return I(e).then(function(s) {
                                s.hasOwnProperty(t) ? (r.setLocale(e),
                                    i.resolve(r.interpolate(s[t], n)),
                                    r.setLocale(u)) : i.reject()
                            }, i.reject),
                                i.promise
                        }
                        , R = function(e, n, r, i) {
                            var s, o = t[e];
                            return o.hasOwnProperty(n) && (i.setLocale(e),
                                s = i.interpolate(o[n], r),
                                i.setLocale(u)),
                                s
                        }
                        , U = function(e, t, n, i) {
                            var o = c.defer();
                            if (e < s.length) {
                                var a = s[e];
                                q(a, t, n, i).then(function(e) {
                                    o.resolve(e)
                                }, function() {
                                    var r = U(e + 1, t, n, i);
                                    o.resolve(r)
                                })
                            } else if (h) {
                                var f = r.get(h)(t, u);
                                f !== undefined ? o.resolve(f) : o.resolve(t)
                            } else
                                o.resolve(t);
                            return o.promise
                        }
                        , z = function(e, t, n, r) {
                            var i;
                            if (e < s.length) {
                                var o = s[e];
                                i = R(o, t, n, r),
                                i || (i = z(e + 1, t, n, r))
                            }
                            return i
                        }
                        , W = function(e, t, n) {
                            return U(D > 0 ? D : _, e, t, n)
                        }
                        , X = function(e, t, n) {
                            return z(D > 0 ? D : _, e, t, n)
                        }
                        , V = function(e, n, i) {
                            var o = c.defer()
                                , a = u ? t[u] : t
                                , f = i ? O[i] : x;
                            if (a && a.hasOwnProperty(e)) {
                                var l = a[e];
                                l.substr(0, 2) === "@:" ? P(l.substr(2), n, i).then(o.resolve, o.reject) : o.resolve(f.interpolate(l, n))
                            } else
                                h && !A && r.get(h)(e, u),
                                    u && s && s.length ? W(e, n, f).then(function(e) {
                                        o.resolve(e)
                                    }, function(e) {
                                        o.reject(B(e))
                                    }) : o.reject(B(e));
                            return o.promise
                        }
                        , $ = function(e, n, i) {
                            var o, a = u ? t[u] : t, f = i ? O[i] : x;
                            if (a && a.hasOwnProperty(e)) {
                                var l = a[e];
                                l.substr(0, 2) === "@:" ? o = $(l.substr(2), n, i) : o = f.interpolate(l, n)
                            } else
                                h && !A && r.get(h)(e, u),
                                    u && s && s.length ? (_ = 0,
                                        o = X(e, n, f)) : o = B(e);
                            return o
                        }
                        ;
                    P.preferredLanguage = function() {
                        return n
                    }
                        ,
                        P.cloakClassName = function() {
                            return g
                        }
                        ,
                        P.fallbackLanguage = function(e) {
                            if (e !== undefined && e !== null ) {
                                k(e);
                                if (m && s && s.length)
                                    for (var t = 0, n = s.length; t < n; t++)
                                        M[s[t]] || (M[s[t]] = F(s[t]));
                                P.use(P.use())
                            }
                            return o ? s[0] : s
                        }
                        ,
                        P.useFallbackLanguage = function(e) {
                            if (e !== undefined && e !== null )
                                if (!e)
                                    D = 0;
                                else {
                                    var t = H(s, e);
                                    t > -1 && (D = t)
                                }
                        }
                        ,
                        P.proposedLanguage = function() {
                            return a
                        }
                        ,
                        P.storage = function() {
                            return S
                        }
                        ,
                        P.use = function(e) {
                            if (!e)
                                return u;
                            var n = c.defer();
                            i.$emit("$translateChangeStart");
                            var r = T(e);
                            return r && (e = r),
                                !t[e] && m ? (a = e,
                                    M[e] = F(e).then(function(t) {
                                        N(t.key, t.table),
                                            n.resolve(t.key),
                                        a === e && (j(t.key),
                                            a = undefined)
                                    }, function(e) {
                                        a = undefined,
                                            i.$emit("$translateChangeError"),
                                            n.reject(e),
                                            i.$emit("$translateChangeEnd")
                                    })) : (n.resolve(e),
                                    j(e)),
                                n.promise
                        }
                        ,
                        P.storageKey = function() {
                            return L()
                        }
                        ,
                        P.isPostCompilingEnabled = function() {
                            return E
                        }
                        ,
                        P.refresh = function(e) {
                            function r() {
                                n.resolve(),
                                    i.$emit("$translateRefreshEnd")
                            }
                            function o() {
                                n.reject(),
                                    i.$emit("$translateRefreshEnd")
                            }
                            if (!m)
                                throw new Error("Couldn't refresh translation table, no loader registered!");
                            var n = c.defer();
                            i.$emit("$translateRefreshStart");
                            if (!e) {
                                var a = [];
                                if (s && s.length)
                                    for (var f = 0, l = s.length; f < l; f++)
                                        a.push(F(s[f]));
                                u && a.push(F(u)),
                                    c.all(a).then(function(e) {
                                        angular.forEach(e, function(e) {
                                            t[e.key] && delete t[e.key],
                                                N(e.key, e.table)
                                        }),
                                        u && j(u),
                                            r()
                                    })
                            } else
                                t[e] ? F(e).then(function(t) {
                                    N(t.key, t.table),
                                    e === u && j(u),
                                        r()
                                }, o) : o();
                            return n.promise
                        }
                        ,
                        P.instant = function(e, i, o) {
                            if (e === null  || angular.isUndefined(e))
                                return e;
                            if (angular.isArray(e)) {
                                var a = {};
                                for (var f = 0, l = e.length; f < l; f++)
                                    a[e[f]] = P.instant(e[f], i, o);
                                return a
                            }
                            if (angular.isString(e) && e.length < 1)
                                return e;
                            e && (e = e.trim());
                            var c, p = [];
                            n && p.push(n),
                            u && p.push(u),
                            s && s.length && (p = p.concat(s));
                            for (var d = 0, v = p.length; d < v; d++) {
                                var m = p[d];
                                t[m] && typeof t[m][e] != "undefined" && (c = $(e, i, o));
                                if (typeof c != "undefined")
                                    break
                            }
                            return !c && c !== "" && (c = e,
                            h && !A && r.get(h)(e, u)),
                                c
                        }
                    ;
                    if (m) {
                        angular.equals(t, {}) && P.use(P.use());
                        if (s && s.length)
                            for (var J = 0, K = s.length; J < K; J++)
                                M[s[J]] = F(s[J])
                    }
                    return P
                }
                ]
        }
        ]),
        angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", ["$interpolate", function(e) {
            var t = {}, n, r = "default", i = null , s = {
                    escaped: function(e) {
                        var t = {};
                        for (var n in e)
                            e.hasOwnProperty(n) && (t[n] = angular.element("<div></div>").text(e[n]).html());
                        return t
                    }
                }, o = function(e) {
                    var t;
                    return angular.isFunction(s[i]) ? t = s[i](e) : t = e,
                        t
                }
                ;
            return t.setLocale = function(e) {
                n = e
            }
                ,
                t.getInterpolationIdentifier = function() {
                    return r
                }
                ,
                t.useSanitizeValueStrategy = function(e) {
                    return i = e,
                        this
                }
                ,
                t.interpolate = function(t, n) {
                    return i && (n = o(n)),
                        e(t)(n || {})
                }
                ,
                t
        }
        ]),
        angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"),
        angular.module("pascalprecht.translate").directive("translate", ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope", function(e, t, n, r, i, s) {
            return {
                restrict: "AE",
                scope: !0,
                compile: function(t, o) {
                    var u = o.translateValues ? o.translateValues : undefined
                        , a = o.translateInterpolation ? o.translateInterpolation : undefined
                        , f = t[0].outerHTML.match(/translate-value-+/i);
                    return function(l, c, h) {
                        l.interpolateParams = {},
                            h.$observe("translate", function(e) {
                                angular.equals(e, "") || !angular.isDefined(e) ? l.translationId = n(c.text().replace(/^\s+|\s+$/g, ""))(l.$parent) : l.translationId = e
                            }),
                            h.$observe("translateDefault", function(e) {
                                l.defaultText = e
                            }),
                        u && h.$observe("translateValues", function(e) {
                            e && l.$parent.$watch(function() {
                                angular.extend(l.interpolateParams, i(e)(l.$parent))
                            })
                        });
                        if (f) {
                            var p = function(e) {
                                    h.$observe(e, function(t) {
                                        l.interpolateParams[angular.lowercase(e.substr(14, 1)) + e.substr(15)] = t
                                    })
                                }
                                ;
                            for (var d in h)
                                h.hasOwnProperty(d) && d.substr(0, 14) === "translateValue" && d !== "translateValues" && p(d)
                        }
                        var v = function(t, n, i) {
                            !i && typeof n.defaultText != "undefined" && (t = n.defaultText),
                                c.html(t);
                            var s = e.isPostCompilingEnabled()
                                , u = typeof o.translateCompile != "undefined"
                                , a = u && o.translateCompile !== "false";
                            (s && !u || a) && r(c.contents())(n)
                        }
                            , m = function() {
                            return !u && !f ? function() {
                                var t = l.$watch("translationId", function(n) {
                                    l.translationId && n && e(n, {}, a).then(function(e) {
                                        v(e, l, !0),
                                            t()
                                    }, function(e) {
                                        v(e, l, !1),
                                            t()
                                    })
                                }, !0)
                            }
                                : function() {
                                var t = function() {
                                        l.translationId && l.interpolateParams && e(l.translationId, l.interpolateParams, a).then(function(e) {
                                            v(e, l, !0)
                                        }, function(e) {
                                            v(e, l, !1)
                                        })
                                    }
                                    ;
                                l.$watch("interpolateParams", t, !0),
                                    l.$watch("translationId", t)
                            }
                        }()
                            , g = s.$on("$translateChangeSuccess", m);
                        m(),
                            l.$on("$destroy", g)
                    }
                }
            }
        }
        ]),
        angular.module("pascalprecht.translate").directive("translateCloak", ["$rootScope", "$translate", function(e, t) {
            return {
                compile: function(n) {
                    e.$on("$translateLoadingSuccess", function() {
                        n.removeClass(t.cloakClassName())
                    }),
                        n.addClass(t.cloakClassName())
                }
            }
        }
        ]),
        angular.module("pascalprecht.translate").filter("translate", ["$parse", "$translate", function(e, t) {
            return function(n, r, i) {
                return angular.isObject(r) || (r = e(r)(this)),
                    t.instant(n, r, i)
            }
        }
        ]),
