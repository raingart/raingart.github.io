// debugger
!(function e(t, n, i) {
   function r(a, s) {
      if ([1, 3, 5, 8].includes(a)) {
         // console.debug('a', a);
         return
      }
      if (!n[a]) {
         if (!t[a]) {
            var l = "function" == typeof require && require;
            if (!s && l) return l(a, true);
            if (o) return o(a, true);
            var u = new Error("Cannot find module '" + a + "'");
            throw ((u.code = "MODULE_NOT_FOUND"), u);
         }
         var c = (n[a] = { exports: {} });
         t[a][0].call(
            c.exports,
            function (e) {
               var n = t[a][1][e];
               return r(n ? n : e);
            },
            c,
            c.exports,
            e,
            t,
            n,
            i
         );
      }
      return n[a].exports;
   }
   for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) {
      //console.debug('i', i);
      r(i[a]);
   }
   return r;
})(
   {
      2: [
         function (e, t, n) {
            (function (e) {
               var n = "undefined" != typeof t && t.exports && "undefined" != typeof e ? e : this || window;
               (n._gsQueue || (n._gsQueue = [])).push(function () {
                  n._gsDefine(
                     "TweenMax",
                     ["core.Animation", "core.SimpleTimeline", "TweenLite"],
                     function (e, t, n) {
                        var i = function (e) {
                           var t,
                              n = [],
                              i = e.length;
                           for (t = 0; t !== i; n.push(e[t++]));
                           return n;
                        },
                           o = function (e, t, i) {
                              n.call(this, e, t, i),
                                 (this._cycle = 0),
                                 (this._yoyo = this.vars.yoyo === true),
                                 (this._repeat = this.vars.repeat || 0),
                                 (this._repeatDelay = this.vars.repeatDelay || 0),
                                 (this._dirty = true),
                                 (this.render = o.prototype.render);
                           },
                           a = 1e-10,
                           s = n._internals,
                           l = s.isSelector,
                           u = s.isArray,
                           c = (o.prototype = n.to({}, 0.1, {})),
                           h = [];
                        (o.version = "1.19.1"),
                           (c.constructor = o),
                           (c.kill()._gc = false),
                           (o.killTweensOf = o.killDelayedCallsTo = n.killTweensOf),
                           (o.getTweensOf = n.getTweensOf),
                           (o.lagSmoothing = n.lagSmoothing),
                           (o.ticker = n.ticker),
                           (o.render = n.render),
                           (c.invalidate = function () {
                              return (this._yoyo = this.vars.yoyo === true), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(true), n.prototype.invalidate.call(this);
                           }),
                           (c.render = function (e, t, n) {
                              this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                              var i,
                                 r,
                                 o,
                                 l,
                                 u,
                                 c,
                                 h,
                                 d,
                                 f = this._dirty ? this.totalDuration() : this._totalDuration,
                                 p = this._time,
                                 m = this._totalTime,
                                 v = this._cycle,
                                 _ = this._duration,
                                 g = this._rawPrevTime;
                              if (
                                 (e >= f - 1e-7 && e >= 0
                                    ? ((this._totalTime = f),
                                       (this._cycle = this._repeat),
                                       this._yoyo && 0 !== (1 & this._cycle)
                                          ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0))
                                          : ((this._time = _), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                                       this._reversed || ((i = true), (r = "onComplete"), (n = n || this._timeline.autoRemoveChildren)),
                                       0 === _ &&
                                       (this._initted || !this.vars.lazy || n) &&
                                       (this._startTime === this._timeline._duration && (e = 0),
                                          (g < 0 || (e <= 0 && e >= -1e-7) || (g === a && "isPause" !== this.data)) && g !== e && ((n = true), g > a && (r = "onReverseComplete")),
                                          (this._rawPrevTime = d = !t || e || g === e ? e : a)))
                                    : e < 1e-7
                                       ? ((this._totalTime = this._time = this._cycle = 0),
                                          (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                                          (0 !== m || (0 === _ && g > 0)) && ((r = "onReverseComplete"), (i = this._reversed)),
                                          e < 0 && ((this._active = false), 0 === _ && (this._initted || !this.vars.lazy || n) && (g >= 0 && (n = true), (this._rawPrevTime = d = !t || e || g === e ? e : a))),
                                          this._initted || (n = true))
                                       : ((this._totalTime = this._time = e),
                                          0 !== this._repeat &&
                                          ((l = _ + this._repeatDelay),
                                             (this._cycle = (this._totalTime / l) >> 0),
                                             0 !== this._cycle && this._cycle === this._totalTime / l && m <= e && this._cycle--,
                                             (this._time = this._totalTime - this._cycle * l),
                                             this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time),
                                             this._time > _ ? (this._time = _) : this._time < 0 && (this._time = 0)),
                                          this._easeType
                                             ? ((u = this._time / _),
                                                (c = this._easeType),
                                                (h = this._easePower),
                                                (1 === c || (3 === c && u >= 0.5)) && (u = 1 - u),
                                                3 === c && (u *= 2),
                                                1 === h ? (u *= u) : 2 === h ? (u *= u * u) : 3 === h ? (u *= u * u * u) : 4 === h && (u *= u * u * u * u),
                                                1 === c ? (this.ratio = 1 - u) : 2 === c ? (this.ratio = u) : this._time / _ < 0.5 ? (this.ratio = u / 2) : (this.ratio = 1 - u / 2))
                                             : (this.ratio = this._ease.getRatio(this._time / _))),
                                    p === this._time && !n && v === this._cycle)
                              )
                                 return void (m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                              if (!this._initted) {
                                 if ((this._init(), !this._initted || this._gc)) return;
                                 if (!n && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)))
                                    return (this._time = p), (this._totalTime = m), (this._rawPrevTime = g), (this._cycle = v), s.lazyTweens.push(this), void (this._lazy = [e, t]);
                                 this._time && !i ? (this.ratio = this._ease.getRatio(this._time / _)) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                              }
                              for (
                                 this._lazy !== false && (this._lazy = false),
                                 this._active || (!this._paused && this._time !== p && e >= 0 && (this._active = true)),
                                 0 === m &&
                                 (2 === this._initted && e > 0 && this._init(),
                                    this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")),
                                    this.vars.onStart && ((0 === this._totalTime && 0 !== _) || t || this._callback("onStart"))),
                                 o = this._firstPT;
                                 o;

                              )
                                 o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
                              this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, n), t || ((this._totalTime !== m || r) && this._callback("onUpdate"))),
                                 this._cycle !== v && (t || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                                 r &&
                                 ((this._gc && !n) ||
                                    (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n),
                                       i && (this._timeline.autoRemoveChildren && this._enabled(false, false), (this._active = false)),
                                       !t && this.vars[r] && this._callback(r),
                                       0 === _ && this._rawPrevTime === a && d !== a && (this._rawPrevTime = 0)));
                           }),
                           (o.to = function (e, t, n) {
                              return new o(e, t, n);
                           }),
                           (o.from = function (e, t, n) {
                              return (n.runBackwards = true), (n.immediateRender = 0 != n.immediateRender), new o(e, t, n);
                           }),
                           (o.fromTo = function (e, t, n, i) {
                              return (i.startAt = n), (i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender), new o(e, t, i);
                           }),

                           (o.staggerFrom = o.allFrom = function (e, t, n, i, r, a, s) {
                              return (n.runBackwards = true), (n.immediateRender = 0 != n.immediateRender), o.staggerTo(e, t, n, i, r, a, s);
                           }),
                           (o.staggerFromTo = o.allFromTo = function (e, t, n, i, r, a, s, l) {
                              return (i.startAt = n), (i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender), o.staggerTo(e, t, i, r, a, s, l);
                           }),
                           (o.delayedCall = function (e, t, n, i, r) {
                              return new o(t, 0, { delay: e, onComplete: t, onCompleteParams: n, callbackScope: i, onReverseComplete: t, onReverseCompleteParams: n, immediateRender: false, useFrames: r, overwrite: 0 });
                           }),
                           (o.set = function (e, t) {
                              return new o(e, 0, t);
                           }),
                           (o.isTweening = function (e) {
                              return n.getTweensOf(e, true).length > 0;
                           });
                        var
                           f = (o.getAllTweens = function (t) {
                              return d(e._rootTimeline, t).concat(d(e._rootFramesTimeline, t));
                           });
                        (o.killAll = function (e, n, i, r) {
                           null == n && (n = true), null == i && (i = true);
                           var o,
                              a,
                              s,
                              l = f(0 != r),
                              u = l.length,
                              c = n && i && r;
                           for (s = 0; s < u; s++) (a = l[s]), (c || a instanceof t || ((o = a.target === a.vars.onComplete) && i) || (n && !o)) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(false, false));
                        }),
                           (o.killChildTweensOf = function (e, t) {
                              if (null != e) {
                                 var r,
                                    a,
                                    c,
                                    h,
                                    d,
                                    f = s.tweenLookup;
                                 if (("string" == typeof e && (e = n.selector(e) || e), l(e) && (e = i(e)), u(e))) for (h = e.length; --h > -1;) o.killChildTweensOf(e[h], t);
                                 else {
                                    r = [];
                                    for (c in f) for (a = f[c].target.parentNode; a;) a === e && (r = r.concat(f[c].tweens)), (a = a.parentNode);
                                    for (d = r.length, h = 0; h < d; h++) t && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(false, false);
                                 }
                              }
                           });
                        return (o);
                     },
                     true
                  ),

                     n._gsDefine(
                        "easing.Back",
                        ["easing.Ease"],
                        function (e) {
                           var t,
                              i,
                              r,
                              o = n.GreenSockGlobals || n,
                              a = o.com.greensock,
                              s = 2 * Math.PI,
                              l = Math.PI / 2,
                              u = a._class,
                              c = function (t, n) {
                                 var i = u("easing." + t, function () { }, true),
                                    r = (i.prototype = new e());
                                 return (r.constructor = i), (r.getRatio = n), i;
                              },
                              h = e.register || function () { },
                              d = function (e, t, n, i, r) {
                                 var o = u("easing." + e, { easeOut: new t(), easeIn: new n(), easeInOut: new i() }, true);
                                 return h(o, e), o;
                              },
                              f = function (e, t, n) {
                                 (this.t = e), (this.v = t), n && ((this.next = n), (n.prev = this), (this.c = n.v - t), (this.gap = n.t - e));
                              },
                              p = function (t, n) {
                                 var i = u(
                                    "easing." + t,
                                    function (e) {
                                       (this._p1 = e || 0 === e ? e : 1.70158), (this._p2 = 1.525 * this._p1);
                                    },
                                    true
                                 ),
                                    r = (i.prototype = new e());
                                 return (
                                    (r.constructor = i),
                                    (r.getRatio = n),
                                    (r.config = function (e) {
                                       return new i(e);
                                    }),
                                    i
                                 );
                              },
                              m = d(
                                 "Back",
                                 p("BackOut", function (e) {
                                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1;
                                 }),
                                 p("BackIn", function (e) {
                                    return e * e * ((this._p1 + 1) * e - this._p1);
                                 }),
                                 p("BackInOut", function (e) {
                                    return (e *= 2) < 1 ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2) : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2);
                                 })
                              ),
                              v = u(
                                 "easing.SlowMo",
                                 function (e, t, n) {
                                    (t = t || 0 === t ? t : 0.7),
                                       null == e ? (e = 0.7) : e > 1 && (e = 1),
                                       (this._p = 1 !== e ? t : 0),
                                       (this._p1 = (1 - e) / 2),
                                       (this._p2 = e),
                                       (this._p3 = this._p1 + this._p2),
                                       (this._calcEnd = n === true);
                                 },
                                 true
                              ),
                              _ = (v.prototype = new e());
                           return (
                              (_.constructor = v),
                              (_.getRatio = function (e) {
                                 var t = e + (0.5 - e) * this._p;
                                 return e < this._p1
                                    ? this._calcEnd
                                       ? 1 - (e = 1 - e / this._p1) * e
                                       : t - (e = 1 - e / this._p1) * e * e * e * t
                                    : e > this._p3
                                       ? this._calcEnd
                                          ? 1 - (e = (e - this._p3) / this._p1) * e
                                          : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
                                       : this._calcEnd
                                          ? 1
                                          : t;
                              }),
                              (v.ease = new v(0.7, 0.7)),
                              (_.config = v.config = function (e, t, n) {
                                 return new v(e, t, n);
                              }),
                              (t = u(
                                 "easing.SteppedEase",
                                 function (e) {
                                    (e = e || 1), (this._p1 = 1 / e), (this._p2 = e + 1);
                                 },
                                 true
                              )),
                              (_ = t.prototype = new e()),
                              (_.constructor = t),
                              (_.getRatio = function (e) {
                                 return e < 0 ? (e = 0) : e >= 1 && (e = 0.999999999), ((this._p2 * e) >> 0) * this._p1;
                              }),
                              (_.config = t.config = function (e) {
                                 return new t(e);
                              }),
                              (i = u(
                                 "easing.RoughEase",
                                 function (t) {
                                    t = t || {};
                                    for (
                                       var n,
                                       i,
                                       r,
                                       o,
                                       a,
                                       s,
                                       l = t.taper || "none",
                                       u = [],
                                       c = 0,
                                       h = 0 | (t.points || 20),
                                       d = h,
                                       p = t.randomize !== false,
                                       m = t.clamp === true,
                                       v = t.template instanceof e ? t.template : null,
                                       _ = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                                       --d > -1;

                                    )
                                       (n = p ? Math.random() : (1 / h) * d),
                                          (i = v ? v.getRatio(n) : n),
                                          "none" === l
                                             ? (r = _)
                                             : "out" === l
                                                ? ((o = 1 - n), (r = o * o * _))
                                                : "in" === l
                                                   ? (r = n * n * _)
                                                   : n < 0.5
                                                      ? ((o = 2 * n), (r = o * o * 0.5 * _))
                                                      : ((o = 2 * (1 - n)), (r = o * o * 0.5 * _)),
                                          p ? (i += Math.random() * r - 0.5 * r) : d % 2 ? (i += 0.5 * r) : (i -= 0.5 * r),
                                          m && (i > 1 ? (i = 1) : i < 0 && (i = 0)),
                                          (u[c++] = { x: n, y: i });
                                    for (
                                       u.sort(function (e, t) {
                                          return e.x - t.x;
                                       }),
                                       s = new f(1, 1, null),
                                       d = h;
                                       --d > -1;

                                    )
                                       (a = u[d]), (s = new f(a.x, a.y, s));
                                    this._prev = new f(0, 0, 0 !== s.t ? s : s.next);
                                 },
                                 true
                              )),
                              (_ = i.prototype = new e()),
                              (_.constructor = i),
                              (_.getRatio = function (e) {
                                 var t = this._prev;
                                 if (e > t.t) {
                                    for (; t.next && e >= t.t;) t = t.next;
                                    t = t.prev;
                                 } else for (; t.prev && e <= t.t;) t = t.prev;
                                 return (this._prev = t), t.v + ((e - t.t) / t.gap) * t.c;
                              }),
                              (_.config = function (e) {
                                 return new i(e);
                              }),
                              (i.ease = new i()),
                              d(
                                 "Bounce",
                                 c("BounceOut", function (e) {
                                    return e < 1 / 2.75
                                       ? 7.5625 * e * e
                                       : e < 2 / 2.75
                                          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                                          : e < 2.5 / 2.75
                                             ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                                             : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                                 }),
                                 c("BounceIn", function (e) {
                                    return (e = 1 - e) < 1 / 2.75
                                       ? 1 - 7.5625 * e * e
                                       : e < 2 / 2.75
                                          ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                                          : e < 2.5 / 2.75
                                             ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                                             : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
                                 }),
                                 c("BounceInOut", function (e) {
                                    var t = e < 0.5;
                                    return (
                                       (e = t ? 1 - 2 * e : 2 * e - 1),
                                       (e =
                                          e < 1 / 2.75
                                             ? 7.5625 * e * e
                                             : e < 2 / 2.75
                                                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                                                : e < 2.5 / 2.75
                                                   ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                                                   : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375),
                                       t ? 0.5 * (1 - e) : 0.5 * e + 0.5
                                    );
                                 })
                              ),
                              d(
                                 "Circ",
                                 c("CircOut", function (e) {
                                    return Math.sqrt(1 - (e -= 1) * e);
                                 }),
                                 c("CircIn", function (e) {
                                    return -(Math.sqrt(1 - e * e) - 1);
                                 }),
                                 c("CircInOut", function (e) {
                                    return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                                 })
                              ),
                              (r = function (t, n, i) {
                                 var r = u(
                                    "easing." + t,
                                    function (e, t) {
                                       (this._p1 = e >= 1 ? e : 1), (this._p2 = (t || i) / (e < 1 ? e : 1)), (this._p3 = (this._p2 / s) * (Math.asin(1 / this._p1) || 0)), (this._p2 = s / this._p2);
                                    },
                                    true
                                 ),
                                    o = (r.prototype = new e());
                                 return (
                                    (o.constructor = r),
                                    (o.getRatio = n),
                                    (o.config = function (e, t) {
                                       return new r(e, t);
                                    }),
                                    r
                                 );
                              }),
                              d(
                                 "Elastic",
                                 r(
                                    "ElasticOut",
                                    function (e) {
                                       return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1;
                                    },
                                    0.3
                                 ),
                                 r(
                                    "ElasticIn",
                                    function (e) {
                                       return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2));
                                    },
                                    0.3
                                 ),
                                 r(
                                    "ElasticInOut",
                                    function (e) {
                                       return (e *= 2) < 1
                                          ? -0.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
                                          : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * 0.5 + 1;
                                    },
                                    0.45
                                 )
                              ),
                              // d(
                              //    "Expo",
                              //    c("ExpoOut", function (e) {
                              //       return 1 - Math.pow(2, -10 * e);
                              //    }),
                              //    c("ExpoIn", function (e) {
                              //       return Math.pow(2, 10 * (e - 1)) - 0.001;
                              //    }),
                              //    c("ExpoInOut", function (e) {
                              //       return (e *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
                              //    })
                              // ),
                              // d(
                              //    "Sine",
                              //    c("SineOut", function (e) {
                              //       return Math.sin(e * l);
                              //    }),
                              //    c("SineIn", function (e) {
                              //       return -Math.cos(e * l) + 1;
                              //    }),
                              //    c("SineInOut", function (e) {
                              //       return -0.5 * (Math.cos(Math.PI * e) - 1);
                              //    })
                              // ),
                              u(
                                 "easing.EaseLookup",
                                 {
                                    find: function (t) {
                                       return e.map[t];
                                    },
                                 },
                                 true
                              ),
                              h(o.SlowMo, "SlowMo", "ease,"),
                              h(i, "RoughEase", "ease,"),
                              h(t, "SteppedEase", "ease,"),
                              m
                           );
                        },
                        true
                     );
               }),
                  n._gsDefine && n._gsQueue.pop()(),
                  (function (e, n) {
                     var i = {},
                        r = e.document,
                        o = (e.GreenSockGlobals = e.GreenSockGlobals || e);
                     if (!o.TweenLite) {
                        var a,
                           s,
                           l,
                           u,
                           c,
                           h = function (e) {
                              var t,
                                 n = e.split("."),
                                 i = o;
                              for (t = 0; t < n.length; t++) i[n[t]] = i = i[n[t]] || {};
                              return i;
                           },
                           d = h("com.greensock"),
                           f = 1e-10,
                           p = function (e) {
                              var t,
                                 n = [],
                                 i = e.length;
                              for (t = 0; t !== i; n.push(e[t++]));
                              return n;
                           },
                           m = function () { },
                           v = (function () {
                              var e = Object.prototype.toString,
                                 t = e.call([]);
                              return function (n) {
                                 return null != n && (n instanceof Array || ("object" == typeof n && !!n.push && e.call(n) === t));
                              };
                           })(),
                           _ = {},
                           g = function (r, a, s, l) {
                              (this.sc = _[r] ? _[r].sc : []), (_[r] = this), (this.gsClass = null), (this.func = s);
                              var u = [];
                              (this.check = function (c) {
                                 for (var d, f, p, m, v, x = a.length, y = x; --x > -1;) (d = _[a[x]] || new g(a[x], [])).gsClass ? ((u[x] = d.gsClass), y--) : c && d.sc.push(this);
                                 if (0 === y && s) {
                                    if (((f = ("com.greensock." + r).split(".")), (p = f.pop()), (m = h(f.join("."))[p] = this.gsClass = s.apply(s, u)), l))
                                       if (((o[p] = i[p] = m), (v = "undefined" != typeof t && t.exports), !v && "function" == typeof define && define.amd))
                                          define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                                             return m;
                                          });
                                       else if (v)
                                          if (r === n) {
                                             t.exports = i[n] = m;
                                             for (x in i) m[x] = i[x];
                                          } else i[n] && (i[n][p] = m);
                                    for (x = 0; x < this.sc.length; x++) this.sc[x].check();
                                 }
                              }),
                                 this.check(true);
                           },
                           x = (e._gsDefine = function (e, t, n, i) {
                              return new g(e, t, n, i);
                           }),
                           y = (d._class = function (e, t, n) {
                              return (
                                 (t = t || function () { }),
                                 x(
                                    e,
                                    [],
                                    function () {
                                       return t;
                                    },
                                    n
                                 ),
                                 t
                              );
                           });
                        x.globals = o;
                        var w = [0, 0, 1, 1],
                           T = y(
                              "easing.Ease",
                              function (e, t, n, i) {
                                 (this._func = e), (this._type = n || 0), (this._power = i || 0), (this._params = t ? w.concat(t) : w);
                              },
                              true
                           ),
                           b = (T.map = {}),
                           A = (T.register = function (e, t, n, i) {
                              for (var r, o, a, s, l = t.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                                 for (o = l[u], r = i ? y("easing." + o, null, true) : d.easing[o] || {}, a = c.length; --a > -1;) (s = c[a]), (b[o + "." + s] = b[s + o] = r[s] = e.getRatio ? e : e[s] || new e());
                           });
                        for (
                           l = T.prototype,
                           l._calcEnd = false,
                           l.getRatio = function (e) {
                              if (this._func) return (this._params[0] = e), this._func.apply(null, this._params);
                              var t = this._type,
                                 n = this._power,
                                 i = 1 === t ? 1 - e : 2 === t ? e : e < 0.5 ? 2 * e : 2 * (1 - e);
                              return 1 === n ? (i *= i) : 2 === n ? (i *= i * i) : 3 === n ? (i *= i * i * i) : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : e < 0.5 ? i / 2 : 1 - i / 2;
                           },
                           a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                           s = a.length;
                           --s > -1;

                        )
                           (l = a[s] + ",Power" + s), A(new T(null, null, 1, s), l, "easeOut", true), A(new T(null, null, 2, s), l, "easeIn" + (0 === s ? ",easeNone" : "")), A(new T(null, null, 3, s), l, "easeInOut");
                        (b.linear = d.easing.Linear.easeIn), (b.swing = d.easing.Quad.easeInOut);
                        var S = y("events.EventDispatcher", function (e) {
                           (this._listeners = {}), (this._eventTarget = e || this);
                        });
                        (l = S.prototype),
                           (l.addEventListener = function (e, t, n, i, r) {
                              r = r || 0;
                              var o,
                                 a,
                                 s = this._listeners[e],
                                 l = 0;
                              for (this !== u || c || u.wake(), null == s && (this._listeners[e] = s = []), a = s.length; --a > -1;) (o = s[a]), o.c === t && o.s === n ? s.splice(a, 1) : 0 === l && o.pr < r && (l = a + 1);
                              s.splice(l, 0, { c: t, s: n, up: i, pr: r });
                           }),
                           (l.removeEventListener = function (e, t) {
                              var n,
                                 i = this._listeners[e];
                              if (i) for (n = i.length; --n > -1;) if (i[n].c === t) return void i.splice(n, 1);
                           }),
                           (l.dispatchEvent = function (e) {
                              var t,
                                 n,
                                 i,
                                 r = this._listeners[e];
                              if (r) for (t = r.length, t > 1 && (r = r.slice(0)), n = this._eventTarget; --t > -1;) (i = r[t]), i && (i.up ? i.c.call(i.s || n, { type: e, target: n }) : i.c.call(i.s || n));
                           });
                        var M = e.requestAnimationFrame,
                           P = e.cancelAnimationFrame,
                           L =
                              Date.now ||
                              function () {
                                 return new Date().getTime();
                              },
                           C = L();
                        for (a = ["ms", "moz", "webkit", "o"], s = a.length; --s > -1 && !M;) (M = e[a[s] + "RequestAnimationFrame"]), (P = e[a[s] + "CancelAnimationFrame"] || e[a[s] + "CancelRequestAnimationFrame"]);
                        y("Ticker", function (e, t) {
                           var n,
                              i,
                              o,
                              a,
                              s,
                              l = this,
                              h = L(),
                              d = !(t === false || !M) && "auto",
                              p = 500,
                              v = 33,
                              _ = "tick",
                              g = function (e) {
                                 var t,
                                    r,
                                    u = L() - C;
                                 u > p && (h += u - v),
                                    (C += u),
                                    (l.time = (C - h) / 1e3),
                                    (t = l.time - s),
                                    (!n || t > 0 || e === true) && (l.frame++, (s += t + (t >= a ? 0.004 : a - t)), (r = true)),
                                    e !== true && (o = i(g)),
                                    r && l.dispatchEvent(_);
                              };
                           S.call(l),
                              (l.time = l.frame = 0),
                              (l.tick = function () {
                                 g(true);
                              }),
                              (l.lagSmoothing = function (e, t) {
                                 (p = e || 1 / f), (v = Math.min(t, p, 0));
                              }),
                              (l.sleep = function () {
                                 null != o && (d && P ? P(o) : clearTimeout(o), (i = m), (o = null), l === u && (c = false));
                              }),
                              (l.wake = function (e) {
                                 null !== o ? l.sleep() : e ? (h += -C + (C = L())) : l.frame > 10 && (C = L() - p + 5),
                                    (i =
                                       0 === n
                                          ? m
                                          : d && M
                                             ? M
                                             : function (e) {
                                                return setTimeout(e, (1e3 * (s - l.time) + 1) | 0);
                                             }),
                                    l === u && (c = true),
                                    g(2);
                              }),
                              (l.fps = function (e) {
                                 return arguments.length ? ((n = e), (a = 1 / (n || 60)), (s = this.time + a), void l.wake()) : n;
                              }),
                              (l.useRAF = function (e) {
                                 return arguments.length ? (l.sleep(), (d = e), void l.fps(n)) : d;
                              }),
                              l.fps(e),
                              setTimeout(function () {
                                 "auto" === d && l.frame < 5 && "hidden" !== r.visibilityState && l.useRAF(false);
                              }, 1500);
                        }),
                           (l = d.Ticker.prototype = new d.events.EventDispatcher()),
                           (l.constructor = d.Ticker);
                        var R = y("core.Animation", function (e, t) {
                           if (
                              ((this.vars = t = t || {}),
                                 (this._duration = this._totalDuration = e || 0),
                                 (this._delay = Number(t.delay) || 0),
                                 (this._timeScale = 1),
                                 (this._active = t.immediateRender === true),
                                 (this.data = t.data),
                                 (this._reversed = t.reversed === true),
                                 Z)
                           ) {
                              c || u.wake();
                              var n = this.vars.useFrames ? q : Z;
                              n.add(this, n._time), this.vars.paused && this.paused(true);
                           }
                        });
                        (u = R.ticker = new d.Ticker()),
                           (l = R.prototype),
                           (l._dirty = l._gc = l._initted = l._paused = false),
                           (l._totalTime = l._time = 0),
                           (l._rawPrevTime = -1),
                           (l._next = l._last = l._onUpdate = l._timeline = l.timeline = null),
                           (l._paused = false);
                        var O = function () {
                           c && L() - C > 2e3 && u.wake(), setTimeout(O, 2e3);
                        };
                        O(),
                           (l.play = function (e, t) {
                              return null != e && this.seek(e, t), this.reversed(false).paused(false);
                           }),
                           (l.pause = function (e, t) {
                              return null != e && this.seek(e, t), this.paused(true);
                           }),
                           (l.resume = function (e, t) {
                              return null != e && this.seek(e, t), this.paused(false);
                           }),
                           (l.seek = function (e, t) {
                              return this.totalTime(Number(e), t !== false);
                           }),
                           (l.restart = function (e, t) {
                              return this.reversed(false)
                                 .paused(false)
                                 .totalTime(e ? -this._delay : 0, t !== false, true);
                           }),
                           (l.reverse = function (e, t) {
                              return null != e && this.seek(e || this.totalDuration(), t), this.reversed(true).paused(false);
                           }),
                           (l.render = function (e, t, n) { }),
                           (l.invalidate = function () {
                              return (this._time = this._totalTime = 0), (this._initted = this._gc = false), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(true), this;
                           }),
                           (l.isActive = function () {
                              var e,
                                 t = this._timeline,
                                 n = this._startTime;
                              return !t || (!this._gc && !this._paused && t.isActive() && (e = t.rawTime(true)) >= n && e < n + this.totalDuration() / this._timeScale);
                           }),
                           (l._enabled = function (e, t) {
                              return (
                                 c || u.wake(),
                                 (this._gc = !e),
                                 (this._active = this.isActive()),
                                 t !== true && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, true)),
                                 false
                              );
                           }),
                           (l._kill = function (e, t) {
                              return this._enabled(false, false);
                           }),
                           (l.kill = function (e, t) {
                              return this._kill(e, t), this;
                           }),
                           (l._uncache = function (e) {
                              for (var t = e ? this : this.timeline; t;) (t._dirty = true), (t = t.timeline);
                              return this;
                           }),
                           (l._swapSelfInParams = function (e) {
                              for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
                              return n;
                           }),
                           (l._callback = function (e) {
                              var t = this.vars,
                                 n = t[e],
                                 i = t[e + "Params"],
                                 r = t[e + "Scope"] || t.callbackScope || this,
                                 o = i ? i.length : 0;
                              switch (o) {
                                 case 0:
                                    n.call(r);
                                    break;
                                 case 1:
                                    n.call(r, i[0]);
                                    break;
                                 case 2:
                                    n.call(r, i[0], i[1]);
                                    break;
                                 default:
                                    n.apply(r, i);
                              }
                           }),
                           (l.eventCallback = function (e, t, n, i) {
                              if ("on" === (e || "").substr(0, 2)) {
                                 var r = this.vars;
                                 if (1 === arguments.length) return r[e];
                                 null == t ? delete r[e] : ((r[e] = t), (r[e + "Params"] = v(n) && n.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(n) : n), (r[e + "Scope"] = i)),
                                    "onUpdate" === e && (this._onUpdate = t);
                              }
                              return this;
                           }),
                           (l.delay = function (e) {
                              return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), (this._delay = e), this) : this._delay;
                           }),
                           (l.duration = function (e) {
                              return arguments.length
                                 ? ((this._duration = this._totalDuration = e),
                                    this._uncache(true),
                                    this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), true),
                                    this)
                                 : ((this._dirty = false), this._duration);
                           }),
                           (l.totalDuration = function (e) {
                              return (this._dirty = false), arguments.length ? this.duration(e) : this._totalDuration;
                           }),
                           (l.time = function (e, t) {
                              return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time;
                           }),
                           (l.totalTime = function (e, t, n) {
                              if ((c || u.wake(), !arguments.length)) return this._totalTime;
                              if (this._timeline) {
                                 if ((e < 0 && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming)) {
                                    this._dirty && this.totalDuration();
                                    var i = this._totalDuration,
                                       r = this._timeline;
                                    if ((e > i && !n && (e = i), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale), r._dirty || this._uncache(false), r._timeline))
                                       for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, true), (r = r._timeline);
                                 }
                                 this._gc && this._enabled(true, false), (this._totalTime === e && 0 !== this._duration) || (F.length && J(), this.render(e, t, false), F.length && J());
                              }
                              return this;
                           }),
                           (l.progress = l.totalProgress = function (e, t) {
                              var n = this.duration();
                              return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio;
                           }),
                           (l.startTime = function (e) {
                              return arguments.length ? (e !== this._startTime && ((this._startTime = e), this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime;
                           }),
                           (l.endTime = function (e) {
                              return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale;
                           }),
                           (l.timeScale = function (e) {
                              if (!arguments.length) return this._timeScale;
                              if (((e = e || f), this._timeline && this._timeline.smoothChildTiming)) {
                                 var t = this._pauseTime,
                                    n = t || 0 === t ? t : this._timeline.totalTime();
                                 this._startTime = n - ((n - this._startTime) * this._timeScale) / e;
                              }
                              return (this._timeScale = e), this._uncache(false);
                           }),
                           (l.reversed = function (e) {
                              return arguments.length
                                 ? (e != this._reversed && ((this._reversed = e), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true)), this)
                                 : this._reversed;
                           }),
                           (l.paused = function (e) {
                              if (!arguments.length) return this._paused;
                              var t,
                                 n,
                                 i = this._timeline;
                              return (
                                 e != this._paused &&
                                 i &&
                                 (c || e || u.wake(),
                                    (t = i.rawTime()),
                                    (n = t - this._pauseTime),
                                    !e && i.smoothChildTiming && ((this._startTime += n), this._uncache(false)),
                                    (this._pauseTime = e ? t : null),
                                    (this._paused = e),
                                    (this._active = this.isActive()),
                                    !e && 0 !== n && this._initted && this.duration() && ((t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale), this.render(t, t === this._totalTime, true))),
                                 this._gc && !e && this._enabled(true, false),
                                 this
                              );
                           });
                        var D = y("core.SimpleTimeline", function (e) {
                           R.call(this, 0, e), (this.autoRemoveChildren = this.smoothChildTiming = true);
                        });
                        (l = D.prototype = new R()),
                           (l.constructor = D),
                           (l.kill()._gc = false),
                           (l._first = l._last = l._recent = null),
                           (l._sortChildren = false),
                           (l.add = l.insert = function (e, t, n, i) {
                              var r, o;
                              if (
                                 ((e._startTime = Number(t || 0) + e._delay),
                                    e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale),
                                    e.timeline && e.timeline._remove(e, true),
                                    (e.timeline = e._timeline = this),
                                    e._gc && e._enabled(true, true),
                                    (r = this._last),
                                    this._sortChildren)
                              )
                                 for (o = e._startTime; r && r._startTime > o;) r = r._prev;
                              return (
                                 r ? ((e._next = r._next), (r._next = e)) : ((e._next = this._first), (this._first = e)),
                                 e._next ? (e._next._prev = e) : (this._last = e),
                                 (e._prev = r),
                                 (this._recent = e),
                                 this._timeline && this._uncache(true),
                                 this
                              );
                           }),
                           (l._remove = function (e, t) {
                              return (
                                 e.timeline === this &&
                                 (t || e._enabled(false, true),
                                    e._prev ? (e._prev._next = e._next) : this._first === e && (this._first = e._next),
                                    e._next ? (e._next._prev = e._prev) : this._last === e && (this._last = e._prev),
                                    (e._next = e._prev = e.timeline = null),
                                    e === this._recent && (this._recent = this._last),
                                    this._timeline && this._uncache(true)),
                                 this
                              );
                           }),
                           (l.render = function (e, t, n) {
                              var i,
                                 r = this._first;
                              for (this._totalTime = this._time = this._rawPrevTime = e; r;)
                                 (i = r._next),
                                    (r._active || (e >= r._startTime && !r._paused)) &&
                                    (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)),
                                    (r = i);
                           }),
                           (l.rawTime = function () {
                              return c || u.wake(), this._totalTime;
                           });
                        var z = y(
                           "TweenLite",
                           function (t, n, i) {
                              if ((R.call(this, n, i), (this.render = z.prototype.render), null == t)) throw "Cannot tween a null target.";
                              this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                              var r,
                                 o,
                                 a,
                                 s = t.jquery || (t.length && t !== e && t[0] && (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType))),
                                 l = this.vars.overwrite;
                              if (((this._overwrite = l = null == l ? H[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l]), (s || t instanceof Array || (t.push && v(t))) && "number" != typeof t[0]))
                                 for (this._targets = a = p(t), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)
                                    (o = a[r]),
                                       o
                                          ? "string" != typeof o
                                             ? o.length && o !== e && o[0] && (o[0] === e || (o[0].nodeType && o[0].style && !o.nodeType))
                                                ? (a.splice(r--, 1), (this._targets = a = a.concat(p(o))))
                                                : ((this._siblings[r] = Q(o, this, false)), 1 === l && this._siblings[r].length > 1 && ee(o, this, null, 1, this._siblings[r]))
                                             : ((o = a[r--] = z.selector(o)), "string" == typeof o && a.splice(r + 1, 1))
                                          : a.splice(r--, 1);
                              else (this._propLookup = {}), (this._siblings = Q(t, this, false)), 1 === l && this._siblings.length > 1 && ee(t, this, null, 1, this._siblings);
                              (this.vars.immediateRender || (0 === n && 0 === this._delay && this.vars.immediateRender !== false)) && ((this._time = -f), this.render(Math.min(0, -this._delay)));
                           },
                           true
                        ),
                           I = function (t) {
                              return t && t.length && t !== e && t[0] && (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType));
                           },
                           E = function (e, t) {
                              var n,
                                 i = {};
                              for (n in e)
                                 Y[n] ||
                                    (n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n) ||
                                    !(!U[n] || (U[n] && U[n]._autoCSS)) ||
                                    ((i[n] = e[n]), delete e[n]);
                              e.css = i;
                           };
                        (l = z.prototype = new R()),
                           (l.constructor = z),
                           (l.kill()._gc = false),
                           (l.ratio = 0),
                           (l._firstPT = l._targets = l._overwrittenProps = l._startAt = null),
                           (l._notifyPluginsOfEnabled = l._lazy = false),
                           (z.version = "1.19.1"),
                           (z.defaultEase = l._ease = new T(null, null, 1, 1)),
                           (z.defaultOverwrite = "auto"),
                           (z.ticker = u),
                           (z.autoSleep = 120),
                           (z.lagSmoothing = function (e, t) {
                              u.lagSmoothing(e, t);
                           }),
                           (z.selector =
                              e.$ ||
                              e.jQuery ||
                              function (t) {
                                 var n = e.$ || e.jQuery;
                                 return n ? ((z.selector = n), n(t)) : "undefined" == typeof r ? t : r.querySelectorAll ? r.querySelectorAll(t) : r.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
                              });
                        var F = [],
                           k = {},
                           N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                           j = function (e) {
                              for (var t, n = this._firstPT, i = 1e-6; n;)
                                 (t = n.blob ? (1 === e ? this.end : e ? this.join("") : this.start) : n.c * e + n.s),
                                    n.m ? (t = n.m(t, this._target || n.t)) : t < i && t > -i && !n.blob && (t = 0),
                                    n.f ? (n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t)) : (n.t[n.p] = t),
                                    (n = n._next);
                           },
                           B = function (e, t, n, i) {
                              var r,
                                 o,
                                 a,
                                 s,
                                 l,
                                 u,
                                 c,
                                 h = [],
                                 d = 0,
                                 f = "",
                                 p = 0;
                              for (
                                 h.start = e,
                                 h.end = t,
                                 e = h[0] = e + "",
                                 t = h[1] = t + "",
                                 n && (n(h), (e = h[0]), (t = h[1])),
                                 h.length = 0,
                                 r = e.match(N) || [],
                                 o = t.match(N) || [],
                                 i && ((i._next = null), (i.blob = 1), (h._firstPT = h._applyPT = i)),
                                 l = o.length,
                                 s = 0;
                                 s < l;
                                 s++
                              )
                                 (c = o[s]),
                                    (u = t.substr(d, t.indexOf(c, d) - d)),
                                    (f += u || !s ? u : ","),
                                    (d += u.length),
                                    p ? (p = (p + 1) % 5) : "rgba(" === u.substr(-5) && (p = 1),
                                    c === r[s] || r.length <= s
                                       ? (f += c)
                                       : (f && (h.push(f), (f = "")),
                                          (a = parseFloat(r[s])),
                                          h.push(a),
                                          (h._firstPT = {
                                             _next: h._firstPT,
                                             t: h,
                                             p: h.length - 1,
                                             s: a,
                                             c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                                             f: 0,
                                             m: p && p < 4 ? Math.round : 0,
                                          })),
                                    (d += c.length);
                              return (f += t.substr(d)), f && h.push(f), (h.setRatio = j), h;
                           },
                           X = function (e, t, n, i, r, o, a, s, l) {
                              "function" == typeof i && (i = i(l || 0, e));
                              var u,
                                 c = typeof e[t],
                                 h = "function" !== c ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                                 d = "get" !== n ? n : h ? (a ? e[h](a) : e[h]()) : e[t],
                                 f = "string" == typeof i && "=" === i.charAt(1),
                                 p = {
                                    t: e,
                                    p: t,
                                    s: d,
                                    f: "function" === c,
                                    pg: 0,
                                    n: r || t,
                                    m: o ? ("function" == typeof o ? o : Math.round) : 0,
                                    pr: 0,
                                    c: f ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - d || 0,
                                 };
                              if (
                                 (("number" != typeof d || ("number" != typeof i && !f)) &&
                                    (a || isNaN(d) || (!f && isNaN(i)) || "boolean" == typeof d || "boolean" == typeof i
                                       ? ((p.fp = a), (u = B(d, f ? p.s + p.c : i, s || z.defaultStringFilter, p)), (p = { t: u, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || t, pr: 0, m: 0 }))
                                       : ((p.s = parseFloat(d)), f || (p.c = parseFloat(i) - p.s || 0))),
                                    p.c)
                              )
                                 return (p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p), p;
                           },
                           W = (z._internals = { isArray: v, isSelector: I, lazyTweens: F, blobDif: B }),
                           U = (z._plugins = {}),
                           V = (W.tweenLookup = {}),
                           G = 0,
                           Y = (W.reservedProps = {
                              ease: 1,
                              delay: 1,
                              overwrite: 1,
                              onComplete: 1,
                              onCompleteParams: 1,
                              onCompleteScope: 1,
                              useFrames: 1,
                              runBackwards: 1,
                              startAt: 1,
                              onUpdate: 1,
                              onUpdateParams: 1,
                              onUpdateScope: 1,
                              onStart: 1,
                              onStartParams: 1,
                              onStartScope: 1,
                              onReverseComplete: 1,
                              onReverseCompleteParams: 1,
                              onReverseCompleteScope: 1,
                              onRepeat: 1,
                              onRepeatParams: 1,
                              onRepeatScope: 1,
                              easeParams: 1,
                              yoyo: 1,
                              immediateRender: 1,
                              repeat: 1,
                              repeatDelay: 1,
                              data: 1,
                              paused: 1,
                              reversed: 1,
                              autoCSS: 1,
                              lazy: 1,
                              onOverwrite: 1,
                              callbackScope: 1,
                              stringFilter: 1,
                              id: 1,
                           }),
                           H = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                           q = (R._rootFramesTimeline = new D()),
                           Z = (R._rootTimeline = new D()),
                           J = (W.lazyRender = function () {
                              var e,
                                 t = F.length;
                              for (k = {}; --t > -1;) (e = F[t]), e && e._lazy !== false && (e.render(e._lazy[0], e._lazy[1], true), (e._lazy = false));
                              F.length = 0;
                           });
                        (Z._startTime = u.time),
                           (q._startTime = u.frame),
                           (Z._active = q._active = true),
                           setTimeout(J, 1),
                           (R._updateRoot = z.render = function () {
                              var e, t, n;
                              if ((F.length && J(), Z.render((u.time - Z._startTime) * Z._timeScale, false, false), q.render((u.frame - q._startTime) * q._timeScale, false, false), F.length && J())) {
                                 K = u.frame + (parseInt(z.autoSleep, 10) || 120);
                                 for (n in V) {
                                    for (t = V[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                                    0 === t.length && delete V[n];
                                 }
                                 if (((n = Z._first), (!n || n._paused) && z.autoSleep && !q._first && 1 === u._listeners.tick.length)) {
                                    for (; n && n._paused;) n = n._next;
                                    n || u.sleep();
                                 }
                              }
                           }),
                           u.addEventListener("tick", R._updateRoot);
                        var Q = function (e, t, n) {
                           var i,
                              r,
                              o = e._gsTweenID;
                           if ((V[o || (e._gsTweenID = o = "t" + G++)] || (V[o] = { target: e, tweens: [] }), t && ((i = V[o].tweens), (i[(r = i.length)] = t), n))) for (; --r > -1;) i[r] === t && i.splice(r, 1);
                           return V[o].tweens;
                        },
                           $ = function (e, t, n, i) {
                              var r,
                                 o,
                                 a = e.vars.onOverwrite;
                              return a && (r = a(e, t, n, i)), (a = z.onOverwrite), a && (o = a(e, t, n, i)), r !== false && o !== false;
                           },
                           ee = function (e, t, n, i, r) {
                              var o, a, s, l;
                              if (1 === i || i >= 4) {
                                 for (l = r.length, o = 0; o < l; o++)
                                    if ((s = r[o]) !== t) s._gc || (s._kill(null, e, t) && (a = true));
                                    else if (5 === i) break;
                                 return a;
                              }
                              var u,
                                 c = t._startTime + f,
                                 h = [],
                                 d = 0,
                                 p = 0 === t._duration;
                              for (o = r.length; --o > -1;)
                                 (s = r[o]) === t ||
                                    s._gc ||
                                    s._paused ||
                                    (s._timeline !== t._timeline
                                       ? ((u = u || te(t, 0, p)), 0 === te(s, u, p) && (h[d++] = s))
                                       : s._startTime <= c && s._startTime + s.totalDuration() / s._timeScale > c && (((p || !s._initted) && c - s._startTime <= 2e-10) || (h[d++] = s)));
                              for (o = d; --o > -1;)
                                 if (((s = h[o]), 2 === i && s._kill(n, e, t) && (a = true), 2 !== i || (!s._firstPT && s._initted))) {
                                    if (2 !== i && !$(s, t)) continue;
                                    s._enabled(false, false) && (a = true);
                                 }
                              return a;
                           },
                           te = function (e, t, n) {
                              for (var i = e._timeline, r = i._timeScale, o = e._startTime; i._timeline;) {
                                 if (((o += i._startTime), (r *= i._timeScale), i._paused)) return -100;
                                 i = i._timeline;
                              }
                              return (o /= r), o > t ? o - t : (n && o === t) || (!e._initted && o - t < 2 * f) ? f : (o += e.totalDuration() / e._timeScale / r) > t + f ? 0 : o - t - f;
                           };
                        (l._init = function () {
                           var e,
                              t,
                              n,
                              i,
                              r,
                              o,
                              a = this.vars,
                              s = this._overwrittenProps,
                              l = this._duration,
                              u = !!a.immediateRender,
                              c = a.ease;
                           if (a.startAt) {
                              this._startAt && (this._startAt.render(-1, true), this._startAt.kill()), (r = {});
                              for (i in a.startAt) r[i] = a.startAt[i];
                              if (((r.overwrite = false), (r.immediateRender = true), (r.lazy = u && a.lazy !== false), (r.startAt = r.delay = null), (this._startAt = z.to(this.target, 0, r)), u))
                                 if (this._time > 0) this._startAt = null;
                                 else if (0 !== l) return;
                           } else if (a.runBackwards && 0 !== l)
                              if (this._startAt) this._startAt.render(-1, true), this._startAt.kill(), (this._startAt = null);
                              else {
                                 0 !== this._time && (u = false), (n = {});
                                 for (i in a) (Y[i] && "autoCSS" !== i) || (n[i] = a[i]);
                                 if (((n.overwrite = 0), (n.data = "isFromStart"), (n.lazy = u && a.lazy !== false), (n.immediateRender = u), (this._startAt = z.to(this.target, 0, n)), u)) {
                                    if (0 === this._time) return;
                                 } else this._startAt._init(), this._startAt._enabled(false), this.vars.immediateRender && (this._startAt = null);
                              }
                           if (
                              ((this._ease = c = c ? (c instanceof T ? c : "function" == typeof c ? new T(c, a.easeParams) : b[c] || z.defaultEase) : z.defaultEase),
                                 a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)),
                                 (this._easeType = this._ease._type),
                                 (this._easePower = this._ease._power),
                                 (this._firstPT = null),
                                 this._targets)
                           )
                              for (o = this._targets.length, e = 0; e < o; e++) this._initProps(this._targets[e], (this._propLookup[e] = {}), this._siblings[e], s ? s[e] : null, e) && (t = true);
                           else t = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
                           if ((t && z._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || ("function" != typeof this.target && this._enabled(false, false))), a.runBackwards))
                              for (n = this._firstPT; n;) (n.s += n.c), (n.c = -n.c), (n = n._next);
                           (this._onUpdate = a.onUpdate), (this._initted = true);
                        }),
                           (l._initProps = function (t, n, i, r, o) {
                              var a, s, l, u, c, h;
                              if (null == t) return false;
                              k[t._gsTweenID] && J(), this.vars.css || (t.style && t !== e && t.nodeType && U.css && this.vars.autoCSS !== false && E(this.vars, t));
                              for (a in this.vars)
                                 if (((h = this.vars[a]), Y[a])) h && (h instanceof Array || (h.push && v(h))) && h.join("").indexOf("{self}") !== -1 && (this.vars[a] = h = this._swapSelfInParams(h, this));
                                 else if (U[a] && (u = new U[a]())._onInitTween(t, this.vars[a], this, o)) {
                                    for (this._firstPT = c = { _next: this._firstPT, t: u, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: u._priority, m: 0 }, s = u._overwriteProps.length; --s > -1;)
                                       n[u._overwriteProps[s]] = this._firstPT;
                                    (u._priority || u._onInitAllProps) && (l = true), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = true), c._next && (c._next._prev = c);
                                 } else n[a] = X.call(this, t, a, "get", h, a, 0, null, this.vars.stringFilter, o);
                              return r && this._kill(r, t)
                                 ? this._initProps(t, n, i, r, o)
                                 : this._overwrite > 1 && this._firstPT && i.length > 1 && ee(t, this, n, this._overwrite, i)
                                    ? (this._kill(n, t), this._initProps(t, n, i, r, o))
                                    : (this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) && (k[t._gsTweenID] = true), l);
                           }),
                           (l.render = function (e, t, n) {
                              var i,
                                 r,
                                 o,
                                 a,
                                 s = this._time,
                                 l = this._duration,
                                 u = this._rawPrevTime;
                              if (e >= l - 1e-7 && e >= 0)
                                 (this._totalTime = this._time = l),
                                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                                    this._reversed || ((i = true), (r = "onComplete"), (n = n || this._timeline.autoRemoveChildren)),
                                    0 === l &&
                                    (this._initted || !this.vars.lazy || n) &&
                                    (this._startTime === this._timeline._duration && (e = 0),
                                       (u < 0 || (e <= 0 && e >= -1e-7) || (u === f && "isPause" !== this.data)) && u !== e && ((n = true), u > f && (r = "onReverseComplete")),
                                       (this._rawPrevTime = a = !t || e || u === e ? e : f));
                              else if (e < 1e-7)
                                 (this._totalTime = this._time = 0),
                                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                                    (0 !== s || (0 === l && u > 0)) && ((r = "onReverseComplete"), (i = this._reversed)),
                                    e < 0 &&
                                    ((this._active = false),
                                       0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== f || "isPause" !== this.data) && (n = true), (this._rawPrevTime = a = !t || e || u === e ? e : f))),
                                    this._initted || (n = true);
                              else if (((this._totalTime = this._time = e), this._easeType)) {
                                 var c = e / l,
                                    h = this._easeType,
                                    d = this._easePower;
                                 (1 === h || (3 === h && c >= 0.5)) && (c = 1 - c),
                                    3 === h && (c *= 2),
                                    1 === d ? (c *= c) : 2 === d ? (c *= c * c) : 3 === d ? (c *= c * c * c) : 4 === d && (c *= c * c * c * c),
                                    1 === h ? (this.ratio = 1 - c) : 2 === h ? (this.ratio = c) : e / l < 0.5 ? (this.ratio = c / 2) : (this.ratio = 1 - c / 2);
                              } else this.ratio = this._ease.getRatio(e / l);
                              if (this._time !== s || n) {
                                 if (!this._initted) {
                                    if ((this._init(), !this._initted || this._gc)) return;
                                    if (!n && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)))
                                       return (this._time = this._totalTime = s), (this._rawPrevTime = u), F.push(this), void (this._lazy = [e, t]);
                                    this._time && !i ? (this.ratio = this._ease.getRatio(this._time / l)) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                                 }
                                 for (
                                    this._lazy !== false && (this._lazy = false),
                                    this._active || (!this._paused && this._time !== s && e >= 0 && (this._active = true)),
                                    0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== l) || t || this._callback("onStart"))),
                                    o = this._firstPT;
                                    o;

                                 )
                                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
                                 this._onUpdate && (e < 0 && this._startAt && e !== -1e-4 && this._startAt.render(e, t, n), t || ((this._time !== s || i || n) && this._callback("onUpdate"))),
                                    r &&
                                    ((this._gc && !n) ||
                                       (e < 0 && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, n),
                                          i && (this._timeline.autoRemoveChildren && this._enabled(false, false), (this._active = false)),
                                          !t && this.vars[r] && this._callback(r),
                                          0 === l && this._rawPrevTime === f && a !== f && (this._rawPrevTime = 0)));
                              }
                           }),
                           (l._kill = function (e, t, n) {
                              if (("all" === e && (e = null), null == e && (null == t || t === this.target))) return (this._lazy = false), this._enabled(false, false);
                              t = "string" != typeof t ? t || this._targets || this.target : z.selector(t) || t;
                              var i,
                                 r,
                                 o,
                                 a,
                                 s,
                                 l,
                                 u,
                                 c,
                                 h,
                                 d = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                              if ((v(t) || I(t)) && "number" != typeof t[0]) for (i = t.length; --i > -1;) this._kill(e, t[i], n) && (l = true);
                              else {
                                 if (this._targets) {
                                    for (i = this._targets.length; --i > -1;)
                                       if (t === this._targets[i]) {
                                          (s = this._propLookup[i] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all");
                                          break;
                                       }
                                 } else {
                                    if (t !== this.target) return false;
                                    (s = this._propLookup), (r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all");
                                 }
                                 if (s) {
                                    if (((u = e || s), (c = e !== r && "all" !== r && e !== s && ("object" != typeof e || !e._tempKill)), n && (z.onOverwrite || this.vars.onOverwrite))) {
                                       for (o in u) s[o] && (h || (h = []), h.push(o));
                                       if ((h || !e) && !$(this, n, t, h)) return false;
                                    }
                                    for (o in u)
                                       (a = s[o]) &&
                                          (d && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = true)),
                                             a.pg && a.t._kill(u) && (l = true),
                                             (a.pg && 0 !== a.t._overwriteProps.length) ||
                                             (a._prev ? (a._prev._next = a._next) : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), (a._next = a._prev = null)),
                                             delete s[o]),
                                          c && (r[o] = 1);
                                    !this._firstPT && this._initted && this._enabled(false, false);
                                 }
                              }
                              return l;
                           }),
                           (l.invalidate = function () {
                              return (
                                 this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this),
                                 (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                                 (this._notifyPluginsOfEnabled = this._active = this._lazy = false),
                                 (this._propLookup = this._targets ? {} : []),
                                 R.prototype.invalidate.call(this),
                                 this.vars.immediateRender && ((this._time = -f), this.render(Math.min(0, -this._delay))),
                                 this
                              );
                           }),
                           (l._enabled = function (e, t) {
                              if ((c || u.wake(), e && this._gc)) {
                                 var n,
                                    i = this._targets;
                                 if (i) for (n = i.length; --n > -1;) this._siblings[n] = Q(i[n], this, true);
                                 else this._siblings = Q(this.target, this, true);
                              }
                              return R.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(e ? "_onEnable" : "_onDisable", this);
                           }),
                           (z.to = function (e, t, n) {
                              return new z(e, t, n);
                           }),
                           (z.from = function (e, t, n) {
                              return (n.runBackwards = true), (n.immediateRender = 0 != n.immediateRender), new z(e, t, n);
                           }),
                           (z.fromTo = function (e, t, n, i) {
                              return (i.startAt = n), (i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender), new z(e, t, i);
                           }),
                           (z.delayedCall = function (e, t, n, i, r) {
                              return new z(t, 0, { delay: e, onComplete: t, onCompleteParams: n, callbackScope: i, onReverseComplete: t, onReverseCompleteParams: n, immediateRender: false, lazy: false, useFrames: r, overwrite: 0 });
                           }),
                           (z.set = function (e, t) {
                              return new z(e, 0, t);
                           }),
                           (z.getTweensOf = function (e, t) {
                              if (null == e) return [];
                              e = "string" != typeof e ? e : z.selector(e) || e;
                              var n, i, r, o;
                              if ((v(e) || I(e)) && "number" != typeof e[0]) {
                                 for (n = e.length, i = []; --n > -1;) i = i.concat(z.getTweensOf(e[n], t));
                                 for (n = i.length; --n > -1;) for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1);
                              } else for (i = Q(e).concat(), n = i.length; --n > -1;) (i[n]._gc || (t && !i[n].isActive())) && i.splice(n, 1);
                              return i;
                           }),
                           (z.killTweensOf = z.killDelayedCallsTo = function (e, t, n) {
                              "object" == typeof t && ((n = t), (t = false));
                              for (var i = z.getTweensOf(e, t), r = i.length; --r > -1;) i[r]._kill(n, e);
                           });
                        var ne = y(
                           "plugins.TweenPlugin",
                           function (e, t) {
                              (this._overwriteProps = (e || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = t || 0), (this._super = ne.prototype);
                           },
                           true
                        );
                        if (
                           ((l = ne.prototype),
                              (ne.version = "1.19.0"),
                              (ne.API = 2),
                              (l._firstPT = null),
                              (l._addTween = X),
                              (l.setRatio = j),
                              (l._kill = function (e) {
                                 var t,
                                    n = this._overwriteProps,
                                    i = this._firstPT;
                                 if (null != e[this._propName]) this._overwriteProps = [];
                                 else for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                                 for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? ((i._prev._next = i._next), (i._prev = null)) : this._firstPT === i && (this._firstPT = i._next)), (i = i._next);
                                 return false;
                              }),
                              (l._mod = l._roundProps = function (e) {
                                 for (var t, n = this._firstPT; n;)
                                    (t = e[this._propName] || (null != n.n && e[n.n.split(this._propName + "_").join("")])), t && "function" == typeof t && (2 === n.f ? (n.t._applyPT.m = t) : (n.m = t)), (n = n._next);
                              }),
                              (z._onPluginEvent = function (e, t) {
                                 var n,
                                    i,
                                    r,
                                    o,
                                    a,
                                    s = t._firstPT;
                                 if ("_onInitAllProps" === e) {
                                    for (; s;) {
                                       for (a = s._next, i = r; i && i.pr > s.pr;) i = i._next;
                                       (s._prev = i ? i._prev : o) ? (s._prev._next = s) : (r = s), (s._next = i) ? (i._prev = s) : (o = s), (s = a);
                                    }
                                    s = t._firstPT = r;
                                 }
                                 for (; s;) s.pg && "function" == typeof s.t[e] && s.t[e]() && (n = true), (s = s._next);
                                 return n;
                              }),
                              (ne.activate = function (e) {
                                 for (var t = e.length; --t > -1;) e[t].API === ne.API && (U[new e[t]()._propName] = e[t]);
                                 return true;
                              }),
                              (x.plugin = function (e) {
                                 if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                                 var t,
                                    n = e.propName,
                                    i = e.priority || 0,
                                    r = e.overwriteProps,
                                    o = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                                    a = y(
                                       "plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin",
                                       function () {
                                          ne.call(this, n, i), (this._overwriteProps = r || []);
                                       },
                                       e.global === true
                                    ),
                                    s = (a.prototype = new ne(n));
                                 (s.constructor = a), (a.API = e.API);
                                 for (t in o) "function" == typeof e[t] && (s[o[t]] = e[t]);
                                 return (a.version = e.version), ne.activate([a]), a;
                              }),
                              (a = e._gsQueue))
                        ) {
                           for (s = 0; s < a.length; s++) a[s]();
                           for (l in _) _[l].func || e.console.log("GSAP encountered missing dependency: " + l);
                        }
                        c = false;
                     }
                  })("undefined" != typeof t && t.exports && "undefined" != typeof e ? e : this || window, "TweenMax");
            }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
         }
      ],
      4: [
         function (e, t, n) {
            (function (e) {
               function n() {
                  (this._listeners = []), (this.dispatchCount = 0);
               }
               function i(e) {
               }
               function r(e, t, n, r) {
                  if (!e) throw u;
                  n = n || 0;
                  for (var o, a, s, l = this._listeners, h = l.length; h--;) if (((o = l[h]), o.f === e && o.c === t)) return false;
                  "function" == typeof n && ((a = n), (n = r), (s = 4)), l.unshift({ f: e, c: t, p: n, r: a || e, a: c.call(arguments, s || 3), j: 0 }), i(l);
               }
               function o(t, n, i, o) {
                  if (!t) throw u;
                  var a = this,
                     s = function () {
                        return a.remove.call(a, t, n), t.apply(n, c.call(arguments, 0));
                     };
                  (o = c.call(arguments, 0)), 1 === o.length && o.push(e), o.splice(2, 0, s), r.apply(a, o);
               }
               function a(e, t) {
               }
               function s(e) {
                  (e = c.call(arguments, 0)), this.dispatchCount++;
                  for (var t, n, i = this.dispatchCount, r = this._listeners, o = r.length; o--;)
                     if (((t = r[o]), t && t.j < i && ((t.j = i), t.r.apply(t.c, t.a.concat(e)) === false))) {
                        n = t;
                        break;
                     }
                  for (r = this._listeners, o = r.length; o--;) r[o].j = 0;
                  return n;
               }
               var l = n.prototype;
               (l.add = r), (l.addOnce = o), (l.remove = a), (l.dispatch = s);
               var u = "Callback function is missing!",
                  c = Array.prototype.slice;
               "undefined" != typeof t && (t.exports = n);
            })();
         }
      ],
      11: [
         function (e, t, n) {
            function i() { }
            function r(e, t, n) {
               var r,
                  u = 0;
               null == a && i();
               for (r in e) if (o(t, e, r, n) === false) break;
               if (a) for (var c = e.constructor, h = !!c && e === c.prototype; (r = s[u++]) && (("constructor" === r && (h || !l(e, r))) || e[r] === Object.prototype[r] || o(t, e, r, n) !== false););
            }
            function o(e, t, n, i) {
               return e.call(i, t[n], n, t);
            }
            var a,
               s,
               l = e(13);
            t.exports = r;
         },
         { 13: 13 },
      ],
      12: [
         function (e, t, n) {
            function i(e, t, n) {
               o(e, function (i, o) {
                  if (r(e, o)) return t.call(n, e[o], o, e);
               });
            }
            var r = e(13),
               o = e(11);
            t.exports = i;
         },
         { 11: 11, 13: 13 },
      ],
      13: [
         function (e, t, n) {
            function i(e, t) {
               return Object.prototype.hasOwnProperty.call(e, t);
            }
            t.exports = i;
         }
      ],
      14: [
         function (e, t, n) {
            function i(e, t) {
               for (var n, i = 0, a = arguments.length; ++i < a;) (n = arguments[i]), null != n && o(n, r, e);
               return e;
            }
            function r(e, t) {
               this[t] = e;
            }
            var o = e(12);
            t.exports = i;
         },
         { 12: 12 },
      ],
      15: [
         function (e, t, n) {
            // debugger
            t.exports = window.THREE;
         }
      ],
      16: [
         function (e, t, n) {
            //   debugger
            //   console.debug('n', JSON.stringify(n));
            function i(e) {
               // console.debug('>', e);
               x(n, { renderer: y, scene: y, camera: y, useDepthTexture: false, useMultiRenderTarget: false, multiRenderTargetCount: 1, renderTargetFormat: v.RGBFormat, renderTargetType: v.UnsignedByteType }, e);
               var t = n.renderer;
               (n.gl = t.getContext()),
                  (L = n.depthTexture = new v.DepthTexture()),
                  (C = n._isWebGL2 = "undefined" != typeof WebGL2RenderingContext && t.getContext() instanceof window.WebGL2RenderingContext),
                  (O = n._isSupportDepthTexture = !!t.extensions.get("WEBGL_depth_texture")),
                  (L.type = C ? v.FloatType : v.UnsignedShortType),
                  (R = !!t.extensions.get("WEBGL_draw_buffers")),
                  (n.useMultiRenderTarget = R && n.useMultiRenderTarget && n.multiRenderTargetCount > 1),
                  (b = n.sceneRenderTarget = r(n.useMultiRenderTarget)),
                  (b.depthBuffer = true),
                  (b.stencilBuffer = true),
                  (A = n.fromRenderTarget = r()),
                  (S = n.toRenderTarget = r()),
                  (M = n.resolution = new v.Vector2()),
                  (P = n.viewportResolution = new v.Vector2());
            }
            function r(e) {
               return e ? _.createMultiRenderTarget(n.multiRenderTargetCount, 1, 1, n.renderTargetFormat, n.renderTargetType) : _.createRenderTarget(1, 1, n.renderTargetFormat, n.renderTargetType);
            }
            function o(e) {
               // e._actualRender || ((e._actualRender = e.render), (e.render = a));
            }
            function a(e, t, i, r) {
               // w.dispatch(e, t, i, r), n.renderer._actualRender(e, t, i, r), T.dispatch(e, t, i, r);
            }
            function s(e, t) {
               (D = n.width = e), (z = n.height = t);
               var i = n.renderer,
                  r = n.camera;
               "OrthographicCamera" === r.type ? ((r.left = e / -2), (r.right = e / 2), (r.top = t / 2), (r.bottom = t / -2)) : (r.aspect = D / z), r.updateProjectionMatrix();
               var o = n.renderMethod || n.renderer;
               i.setRenderTarget(null), o.setSize(D, z), o === n.renderer && l();
            }
            function l() {
               // var e = n.renderer,
               //    t = e.getSize();
               // (D = n.width = t.width), (z = n.height = t.height);
               // var i = n.renderMethod,
               //    r = i ? i.viewportScaleX : 1,
               //    o = i ? i.viewportScaleY : 1;
               // M.set(D, z), P.set(D * r, z * o);
            }
            function u(e) {
               // return e.enabled && e.needsRender();
            }
            function c() {
               // var e = n.renderer,
               //    t = e.getSize(),
               //    i = t.width,
               //    r = t.height;
               // if (I !== i || E !== r) {
               //    b.setSize(i, r), A.setSize(i, r), S.setSize(i, r);
               //    for (var o = n.queue, a = 0, s = o.length; a < s; a++) o[a].resize(i, r);
               // }
            }
            function h(e) {
               o(n.renderer);
               var t = n.queue.filter(u);
               if (t.length) {
                  c(), b.depthBuffer && O && n.useDepthTexture && ((L.width = b.width), (L.height = b.height), (b.depthTexture = L)), d(b), (b.depthTexture = y), m();
                  for (var i = n.scene, r = i.autoUpdate, a = void 0, s = void 0, l = 0, h = t.length; l < h; l++) (a = t[l]), (s = l ? A : n.useMultiRenderTarget ? b.attachments[0] : b), a.render(e, s, l === h - 1);
                  i.autoUpdate = r;
               } else d();
               n.renderMethod && n.renderMethod.afterRendering();
            }
            function d(e, t, i) {
               (t = t || n.scene), (i = i || n.camera);
               var r = n.renderMethod || n.renderer;
               e ? r.render(t, i, e) : r.render(t, i);
            }
            function f(e, t, i) {
               // (t = t || n.scene), (i = i || n.camera), e ? n.renderer.render(t, i, e) : n.renderer.render(t, i);
            }
            function p(e, t, n) {
               // return _.render(e, t ? y : S), n !== false && m(), A;
            }
            function m() {
               // var e = S;
               // (S = S = A), (A = A = e);
            }
            var
               v = e(15),
               _ = e(17),
               x = e(14),
               y = void 0;
            (n.init = i),
               (n.hijackRenderer = o),
               (n.resize = s),
               (n.updateSizeFromRenderMethod = l),
               (n.renderQueue = h),
               (n.renderScene = f),
               (n.render = p),
               (n.swapRenderTarget = m),
               (n.queue = []),
               (n.gl = y),
               (n.renderer = y),
               (n.scene = y),
               (n.camera = y),
               (n.renderMethod = y);
            // var w = (n.beforeRendered = new g()),
            //    T = (n.afterRendered = new g()),
            //    b = (n.sceneRenderTarget = y),
            //    A = (n.fromRenderTarget = y),
            //    S = (n.toRenderTarget = y),
            //    M = (n.resolution = y),
            //    P = (n.viewportResolution = y),
            //    L = (n.depthTexture = y),
            //    C = (n._isWebGL2 = y),
            //    R = (n._isSupportMultiRenderTarget = y),
            //    O = (n._isSupportDepthTexture = y),
            //    D = (n.width = 0),
            //    z = (n.height = 0),
            //    I = 0,
            //    E = 0;
         },
         { 14: 14, 15: 15, 17: 17 },
      ],
      17: [
         function (e, t, n) {
            function i(e) {
               p ||
                  ((n.renderer = p = n.renderer = e),
                     (n.precisionPrefix = x = "precision " + p.capabilities.precision + " float;\n"),
                     (m = new f.Scene()),
                     (v = new f.Camera()),
                     (v.position.z = 1),
                     (n.vertexShader = y = x + "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n"),
                     (g = new f.Color()),
                     (n.planeGeometry = w = new f.PlaneBufferGeometry(2, 2)),
                     (_ = new f.Mesh(w, b)),
                     m.add(_));
            }
            function s(e, t, n) {
               (_.material = e), t ? p.render(m, v, t, n) : p.render(m, v, void 0, n);
            }
            function u(e, t, n, i, r, o) {
               var a = new f.WebGLRenderTarget(e || 1, t || 1, { format: n || f.RGBFormat, type: i || f.UnsignedByteType, minFilter: r || f.LinearFilter, magFilter: o || f.LinearFilter, depthBuffer: false, stencilBuffer: false });
               return (a.texture.generateMipMaps = false), a;
            }
            function h() {
               return { autoClearColor: p.autoClearColor, autoClearStencil: p.autoClearStencil, autoClearDepth: p.autoClearDepth, clearColor: p.getClearColor().getHex(), clearAlpha: p.getClearAlpha() };
            }
            function d(e) {
               // p.setClearColor(e.clearColor, e.clearAlpha), (p.autoClearColor = e.autoClearColor), (p.autoClearStencil = e.autoClearStencil), (p.autoClearDepth = e.autoClearDepth);
            }
            Object.defineProperty(n, "__esModule", { value: true }),
               (n.init = i),
               (n.render = s),
               (n.createRenderTarget = u),
               (n.getColorState = h),
               (n.setColorState = d);
            var f = e(15),
               p = (n.renderer = void 0),
               m = void 0,
               v = void 0,
               _ = void 0,
               g = void 0,
               x = (n.precisionPrefix = void 0),
               y = (n.vertexShader = void 0),
               w = (n.planeGeometry = void 0),
               T = (n.colorMaterial = void 0),
               b = (n.copyMaterial = void 0),
               A = ((n.multiColorMaterials = []), (n.multiCopyMaterials = []));
         },
         { 15: 15 },
      ],
      18: [
         function (e, t, n) {
            var i = {
               // Linear: {
               //    None: function (e) {
               //       return e;
               //    },
               // },
               // Quad: {
               //    In: function (e) {
               //       return e * e;
               //    },
               //    Out: function (e) {
               //       return e * (2 - e);
               //    },
               //    InOut: function (e) {
               //       return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
               //    },
               // },
               Cubic: {
                  In: function (e) {
                     return e * e * e;
                  },
                  Out: function (e) {
                     return --e * e * e + 1;
                  },
                  InOut: function (e) {
                     return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
                  },
               },
               // Quart: {
               //    In: function (e) {
               //       return e * e * e * e;
               //    },
               //    Out: function (e) {
               //       return 1 - --e * e * e * e;
               //    },
               //    InOut: function (e) {
               //       return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
               //    },
               // },
               // Quint: {
               //    In: function (e) {
               //       return e * e * e * e * e;
               //    },
               //    Out: function (e) {
               //       return --e * e * e * e * e + 1;
               //    },
               //    InOut: function (e) {
               //       return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
               //    },
               // },
               Sine: {
                  In: function (e) {
                     return 1 - Math.cos((e * Math.PI) / 2);
                  },
                  Out: function (e) {
                     return Math.sin((e * Math.PI) / 2);
                  },
                  InOut: function (e) {
                     return 0.5 * (1 - Math.cos(Math.PI * e));
                  },
               },
               // Expo: {
               //    In: function (e) {
               //       return 0 === e ? 0 : Math.pow(1024, e - 1);
               //    },
               //    Out: function (e) {
               //       return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
               //    },
               //    InOut: function (e) {
               //       return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
               //    },
               // },
               // Circ: {
               //    In: function (e) {
               //       return 1 - Math.sqrt(1 - e * e);
               //    },
               //    Out: function (e) {
               //       return Math.sqrt(1 - --e * e);
               //    },
               //    InOut: function (e) {
               //       return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
               //    },
               // },
               // Elastic: {
               //    In: function (e) {
               //       var t,
               //          n = 0.1,
               //          i = 0.4;
               //       return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? ((n = 1), (t = i / 4)) : (t = (i * Math.asin(1 / n)) / (2 * Math.PI)), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * (e - t) * Math.PI) / i)));
               //    },
               //    Out: function (e) {
               //       var t,
               //          n = 0.1,
               //          i = 0.4;
               //       return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? ((n = 1), (t = i / 4)) : (t = (i * Math.asin(1 / n)) / (2 * Math.PI)), n * Math.pow(2, -10 * e) * Math.sin((2 * (e - t) * Math.PI) / i) + 1);
               //    },
               //    InOut: function (e) {
               //       var t,
               //          n = 0.1,
               //          i = 0.4;
               //       return 0 === e
               //          ? 0
               //          : 1 === e
               //             ? 1
               //             : (!n || n < 1 ? ((n = 1), (t = i / 4)) : (t = (i * Math.asin(1 / n)) / (2 * Math.PI)),
               //                (e *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * (e - t) * Math.PI) / i) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((2 * (e - t) * Math.PI) / i) * 0.5 + 1);
               //    },
               // },
               // Back: {
               //    In: function (e) {
               //       var t = 1.70158;
               //       return e * e * ((t + 1) * e - t);
               //    },
               //    Out: function (e) {
               //       var t = 1.70158;
               //       return --e * e * ((t + 1) * e + t) + 1;
               //    },
               //    InOut: function (e) {
               //       var t = 2.5949095;
               //       return (e *= 2) < 1 ? 0.5 * e * e * ((t + 1) * e - t) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
               //    },
               // },
               // Bounce: {
               //    In: function (e) {
               //       return 1 - i.Bounce.Out(1 - e);
               //    },
               //    Out: function (e) {
               //       return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
               //    },
               //    InOut: function (e) {
               //       return e < 0.5 ? 0.5 * i.Bounce.In(2 * e) : 0.5 * i.Bounce.Out(2 * e - 1) + 0.5;
               //    },
               // },
            };
            // (n.basic = i), (n.linear = i.Linear);
            var r, o;
            for (r in i) {
               "Linear" !== r && (
                  (o = i[r]),
                  (n["easeOut" + r] = o.Out)
               );
            }
         }
      ],
      19: [
         function (e, t, n) {
            Object.defineProperty(n, "__esModule", { value: true });
            var i = (n.PI = Math.PI),
               r =
                  ((n.PI2 = 2 * i),
                     (n.HALF_PI = 0.5 * i),
                     (n.DEG2RAD = i / 180),
                     (n.RAD2DEG = 180 / i),
                     (n.step = function (e, t) {
                        return t < e ? 0 : 1;
                     }),
                     (n.clamp = function (e, t, n) {
                        return e < t ? t : e > n ? n : e;
                     })),
               o =
                  ((n.mix = function (e, t, n) {
                     return e + (t - e) * n;
                  }),
                     (n.cMix = function (e, t, n) {
                        return e + (t - e) * r(n, 0, 1);
                     }),
                     (n.unMix = function (e, t, n) {
                        return (n - e) / (t - e);
                     }),
                     (n.cUnMix = function (e, t, n) {
                        return r((n - e) / (t - e), 0, 1);
                     })),
               // a = (n.map = function (e, t, n, i, r) {
               //    return i + ((e - t) * (r - i)) / (n - t);
               // }),
               s =
                  ((n.normalize = function (e, t, n) {
                     return a(e, t, n, 0, 1);
                  }),
                     (n.smoothstep = function (e, t, n) {
                        return (n = o(e, t, n)), n * n * (3 - 2 * n);
                     }),
                     (n.fract = function (e) {
                        return e - Math.floor(e);
                     })),
               l =
                  ((n.hash = function (e) {
                     return s(43758.5453123 * Math.sin(e));
                  }),
                     (n.hash2 = function (e, t) {
                        return s(43758.5453 * Math.sin(12.9898 * e + 4.1414 * t));
                     }),
                     (n.sign = function (e) {
                        return e ? (e < 0 ? -1 : 1) : 0;
                     }),
                     (n.isPowerOfTwo = function (e) {
                        return (e & -e) === e;
                     })),
               // u = (n.powerTwoCeilingBase = function (e) {
               //    return Math.ceil(Math.log(e) / Math.log(2));
               // }),
               c
               // = (
               //    // (n.powerTwoCeiling = function (e) {
               //    //    return l(e) ? e : 1 << u(e);
               //    // }),
               //    // (n.latLngBearing = function (e, t, n, i) {
               //    //    var r = Math.sin(i - t) * Math.cos(n),
               //    //       o = Math.cos(e) * Math.sin(n) - Math.sin(e) * Math.cos(n) * Math.cos(i - t);
               //    //    return Math.atan2(r, o);
               //    // }),
               //    // (n.distanceTo = function (e, t) {
               //    //    return Math.sqrt(e * e + t * t);
               //    // }),
               //    // (n.distanceSqrTo = function (e, t) {
               //    //    return e * e + t * t;
               //    // }),
               //    // (n.distanceTo3 = function (e, t, n) {
               //    //    return Math.sqrt(e * e + t * t + n * n);
               //    // }),
               //    // (n.distanceSqrTo3 = function (e, t, n) {
               //    //    return e * e + t * t + n * n;
               //    // }),
               //    // (n.latLngDistance = function (e, t, n, i) {
               //    //    var r = Math.sin((n - e) / 2),
               //    //       o = Math.sin((i - t) / 2),
               //    //       a = r * r + Math.cos(e) * Math.cos(n) * o * o;
               //    //    return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
               //    // }),
               //    // (n.cubicBezier = function (e, t, n, i, r) {
               //    //    var o = 3 * (t - e),
               //    //       a = 3 * (n - t) - o,
               //    //       s = i - e - o - a,
               //    //       l = r * r,
               //    //       u = l * r;
               //    //    return s * u + a * l + o * r + e;
               //    // }),
               //    // (n.cubicBezierFn = function (e, t, n, i) {
               //    //    var r = 3 * (t - e),
               //    //       o = 3 * (n - t) - r,
               //    //       a = i - e - r - o;
               //    //    return function (t) {
               //    //       var n = t * t,
               //    //          i = n * t;
               //    //       return a * i + o * n + r * t + e;
               //    //    };
               //    // }),
               //    (n.safeMod = function (e, t) {
               //       // var n = Math.abs(e);
               //       // return (e = e < 0 ? Math.ceil(n / t) * t - n : e), Math.abs(e % t);
               //    })
               // )
               ;
            // n.loop = function (e, t, n) {
            //    return c(e - t, n - t) + t;
            // };
         }
      ],
      20: [
         function (e, t, n) {
            function i() {
               (document.documentElement.className += p.isMobile ? " is-mobile" : "is-desktop"),
                  r(),
                  // y.add("Apercu, Apercu-Light", {
                  //    type: "any",
                  //    loadFunc: function (e, t) {
                  //       b.load(e.split(", "), t);
                  //    },
                  // }),
                  x.preInit(function () {
                     (f.mouse = new A.Vector2()),
                        (f.mouseInPixel = new A.Vector2()),
                        f.useWebGL && w.initBase(),
                        x.init(),
                        window.addEventListener("resize", u),
                        u(),
                        document.addEventListener("mousedown", l),
                        document.addEventListener("mousemove", l),
                        c(),
                        x.loadData(o);
                  });
            }
            function r() {
               if (((f.useWebGL = false), window.WebGLRenderingContext))
                  try {
                     var e = (f.gl = P.getContext("webgl") || P.getContext("experimental-webgl"));
                     if ((e.getExtension("OES_texture_float") || e.getExtension("OES_texture_half_float")) && e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
                        return (f.FloatType = p.isIOS || !e.getExtension("OES_texture_float") ? A.HalfFloatType : A.FloatType), (f.useWebGL = true), true;
                  } catch (e) {
                     return false;
                  }
               return false;
            }
            function o() {
               f.useWebGL && w.preInit(),
                  x.start();
            }
            function l(e) {
               // mouse whole
               var t = e.clientX,
                  n = e.clientY;
               f.mouseInPixel.set(t, n), f.mouse.set((t / S) * 2 - 1, 1 - (n / M) * 2);
            }
            function u() {
               (S = f.width = window.innerWidth),
                  (M = f.height = window.innerHeight), f.mouseInPixel.set(S / 2, M / 2),
                  f.mouse.set(0, 0),
                  f.useWebGL && w.resize(S, M);
            }
            function c() {
               var e = C || Date.now() / 1e3;
               (C = Date.now() / 1e3), h(C - e), (d = window.requestAnimationFrame(c));
            }
            function h(e) {
               (e = e || 0),
                  (e = Math.min(e, 0.033334)),
                  (f.time += e), (f.deltaRatio = e / 0.016667),
                  f.useWebGL && w.render(e),
                  L && (L = false);
            }
            var d,
               f = e(23),
               p = () => { },
               x = e(25),
               w = e(22),
               A = e(15),
               S = 0,
               M = 0,
               P = (f.canvas = document.getElementById("canvas")),
               L = true,
               C = 0;
            i();
         },
         { 15: 15, 22: 22, 64: 64, 25: 25 },
      ],
      21: [
         function (e, t, n) {
            function i() {
               s();
               l();
            }
            function s() {
               // return
               for (var e = new Float32Array(4 * M), t = 0, i = 0; t < M; t++, i += 4)
                  (e[i + 0] = 140 + Math.pow(Math.random(), 0.9) * (Math.random() - 0.5) * 80), (e[i + 1] = m.sign(Math.random() - 0.1) * (0.3 + 0.7 * Math.random()) * 0.3), (e[i + 2] = Math.random()), (e[i + 3] = Math.random());
               (g = new v.DataTexture(e, S, S, v.RGBAFormat, v.FloatType)),
                  (g.magFilter = v.NearestFilter),
                  (g.minFilter = v.NearestFilter),
                  (g.needsUpdate = true),
                  (n.prevRenderTarget = p.createRenderTarget(S, S, v.RGBAFormat, f.FloatType, v.NearestFilter, v.NearestFilter)),
                  (n.currRenderTarget = p.createRenderTarget(S, S, v.RGBAFormat, f.FloatType, v.NearestFilter, v.NearestFilter)),
                  (x = new v.RawShaderMaterial({
                     uniforms: {
                        u_posVelTexture: { value: null },
                        u_infoTexture: { value: g },
                        u_time: { value: 0 },
                        u_showAnimation: { value: 0 },
                        u_hideAnimation: { value: 0 },
                        u_textureSize: { value: new v.Vector2(S, S) },
                        u_dtRatio: { value: 0 },
                        u_mousePos: { value: new v.Vector2(0, 0) },
                        u_prevMousePos: { value: new v.Vector2(0, 0) },
                        u_mouseRadius: { value: 17 },
                        u_mouseDown: { value: 0 },
                     },
                     vertexShader: p.vertexShader,
                     fragmentShader:
                        p.precisionPrefix +
                        "#define GLSLIFY 1\nuniform sampler2D u_posVelTexture;\nuniform sampler2D u_infoTexture;\n\nuniform vec2 u_textureSize;\nuniform float u_time;\nuniform float u_dtRatio;\nuniform vec2 u_mousePos;\nuniform vec2 u_prevMousePos;\nuniform float u_mouseRadius;\nuniform float u_mouseDown;\nuniform float u_showAnimation;\nuniform float u_hideAnimation;\n\nvarying vec2 v_uv;\n\nconst float EPS = 0.001;\n\nvec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 simplexNoiseDerivatives (vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    // float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    // return vec4(dx, dy, dz, dw) * 49.0;\n    return vec4(dx, dy, dz, 0.0) * 49.0;\n}\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    // vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 2; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(persistence, float(i));\n\n        xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(p * twoPowI, noiseTime)) * scale;\n        yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        // zNoisePotentialDerivatives += snoise4(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        yNoisePotentialDerivatives[1] - xNoisePotentialDerivatives[1],\n        yNoisePotentialDerivatives[2] - xNoisePotentialDerivatives[2],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[0]\n    );\n\n}\n\nfloat sdCapsule( vec2 p, vec2 a, vec2 b, float r ) {\n    vec2 pa = p - a, ba = b - a;\n    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\n    return length( pa - ba*h ) - r;\n}\n\nvoid main () {\n\n  // float index = floor(mod(gl_FragCoord.x, u_textureSize.x)) + floor(gl_FragCoord.y / u_textureSize.x) * u_textureSize.x;\n\n  vec4 posVel = texture2D(u_posVelTexture, v_uv); // xy, vX, varying\n  vec4 info = texture2D(u_infoTexture, v_uv); // radius, speed, originXY\n\n  float radius = length(posVel.xy);\n  posVel.xy += 1.0 - step(0.01, radius); // atan() return undefined on edge\n\n  float circularMotionForce = 1.0 - smoothstep(40.0, 120.0, abs(radius - info.x));\n  float angle = atan(posVel.y, posVel.x) + info.y * u_dtRatio * mix(0.5, 1.0, circularMotionForce);\n  float targetRadius = mix(info.x, 140.0, 0.5 + sin(angle * 2.0 + 2.5) * 0.5) * u_showAnimation + u_hideAnimation * 120.0;\n  radius += (targetRadius - radius) * mix(0.2, 0.6, circularMotionForce);\n\n  vec2 targetPos = vec2(cos(angle), sin(angle)) * radius;\n  vec2 velocity = (targetPos - posVel.xy) * 0.1;\n\n  posVel.xy += velocity;\n\n  float d = sdCapsule(posVel.xy, u_mousePos, u_prevMousePos, u_mouseRadius);\n  vec2 dXY = vec2(\n    sdCapsule(posVel.xy + vec2(1.0, 0.0), u_mousePos, u_prevMousePos, u_mouseRadius),\n    sdCapsule(posVel.xy + vec2(0.0, 1.0), u_mousePos, u_prevMousePos, u_mouseRadius)\n  ) - d;\n\n  float mouseRatio = (1.0 - smoothstep(-u_mouseRadius, 0.0, d)) * u_showAnimation;// * step(0.5, u_mouseDown);\n  vec2 mouseMotion = normalize(dXY + vec2(step(0.0, -length(dXY)))) * mouseRatio * 5.0;\n  mouseMotion += (u_mousePos - u_prevMousePos) * mouseRatio * 2.0;\n  posVel.xy += mouseMotion;\n\n  posVel.z = posVel.z * 0.95 + length(mouseMotion);\n\n  posVel.xy += curl(vec3(posVel.xy * (0.045 / (1.0 + mouseMotion * 100.0)), 0.0), u_time, 0.1).xy * (0.6 + mouseMotion * 0.1);\n  gl_FragColor = posVel;\n}\n",
                     blending: v.NoBlending,
                     depthTest: false,
                     depthWrite: false,
                     transparent: true,
                  }));
            }
            function l() {
               for (var e = new Float32Array(3 * M), t = 0, i = 0; t < M; t++, i += 3) (e[i + 0] = ((t % S) + 0.5) / S), (e[i + 1] = (~~(t / S) + 0.5) / S), (e[i + 2] = Math.random());
               var r = new v.BufferGeometry();
               r.addAttribute("position", new v.BufferAttribute(e, 3)),
                  (y = new v.RawShaderMaterial({
                     uniforms: { u_posVelTexture: { value: null }, u_resolution: { value: f.resolution }, u_time: { value: 0 }, u_showAnimation: { value: 0 }, u_hideAnimation: { value: 0 } },
                     vertexShader:
                        p.precisionPrefix +
                        "#define GLSLIFY 1\nattribute vec3 position;\n\nuniform sampler2D u_posVelTexture;\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_showAnimation;\nuniform float u_hideAnimation;\n\nvarying vec4 v_color;\n\nvoid main () {\n  vec4 posVel = texture2D(u_posVelTexture, position.xy);\n\n  vec2 pos = posVel.xy / u_resolution * 2.0;\n  pos.y *= -1.0;\n\n  float mouseMotion = smoothstep(0.0, 10.0, posVel.z);\n\n  float angle = atan(pos.y, pos.x);\n\n  float opacity = smoothstep(position.z, 1.0, u_showAnimation) * (1.0 - u_hideAnimation);\n\n  // v_color = vec4(1.0) * (0.5 + sin(position.z * 6.28318530718 + u_time) * 0.5);\n  v_color = (vec4(position.z) * (0.55 + sin(angle + u_time * 1.5 + position.z) * 0.45)  + mouseMotion) * opacity;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n  gl_PointSize = 1.0;\n}\n",
                     fragmentShader: p.precisionPrefix + "#define GLSLIFY 1\nvarying vec4 v_color;\n\nvoid main () {\n  gl_FragColor = v_color;\n}\n",
                     blending: v.AdditiveBlending,
                     depthTest: false,
                     depthWrite: false,
                     transparent: true,
                  })),
                  (n.mesh = new v.Points(r, y)),
                  (n.mesh.frustumCulled = false),
                  (n.mesh.renderOrder = 1028);
            }
            function u(e) {
               var t = n.prevRenderTarget;
               (n.prevRenderTarget = n.currRenderTarget), (n.currRenderTarget = t);
               var i = x.uniforms;
               (i.u_posVelTexture.value = n.prevRenderTarget.texture),
                  (i.u_time.value += e),
                  (i.u_dtRatio.value = f.deltaRatio),
                  i.u_prevMousePos.value.copy(i.u_mousePos.value),
                  i.u_mousePos.value.copy(f.mouseInPixel).sub({ x: f.width / 2, y: f.height / 2 }),
                  A && i.u_prevMousePos.value.copy(i.u_mousePos.value),
                  (i.u_mouseDown.value = +b),
                  (i.u_showAnimation.value = n.showAnimation),
                  (i.u_hideAnimation.value = n.hideAnimation),
                  p.render(x, n.currRenderTarget),
                  (A = false);
            }
            function c(e) {
               var t = p.getColorState();
               p.renderer.setClearColor(0, 1), p.renderer.clearTarget(n.currRenderTarget), p.renderer.clearTarget(n.prevRenderTarget), p.setColorState(t), _.to(n, e || 0, { showAnimation: 1, ease: "linear" });
            }
            function h(e) {
               // _.to(n, e || 0, { hideAnimation: 1, ease: "linear" });
            }
            function d(e) {
               if (((n.isActive = n.showAnimation > 0 && n.hideAnimation < 1), n.isActive)) {
                  u(e);
                  var t = y.uniforms;
                  (t.u_posVelTexture.value = n.currRenderTarget.texture), (t.u_time.value += e), (t.u_showAnimation.value = n.showAnimation), (t.u_hideAnimation.value = n.hideAnimation);
               }
               n.mesh.visible = n.isActive;
            }
            var f = e(23),
               p = e(17),
               m = e(19),
               v = e(15),
               _ = e(2);
            (n.init = i), (n.update = d), (n.show = c), (n.hide = h), (n.mesh = null), (n.prevRenderTarget = null), (n.currRenderTarget = null), (n.infoTexture = null), (n.isActive = false), (n.showAnimation = 0), (n.hideAnimation = 0);
            var g = void 0,
               x = void 0,
               y = void 0,
               w = void 0,
               T = void 0,
               b = false,
               A = false,
               S = 128,
               M = S * S;
         },
         { 2: 2, 15: 15, 17: 17, 19: 19 },
      ],
      22: [
         function (e, t, n) {
            function i() {
               (E = new f.Color()),
                  (F = new f.Color(855567)),
                  (k = new f.Color(460809)),
                  (S = new f.WebGLRenderer({ canvas: h.canvas, antialias: true, alpha: false })),
                  (O = new f.Vector3(0, 0, 3.5)),
                  (z = new f.Vector3(0, 0, 0)),
                  (D = new f.Vector3(0, 0, 3.5)),
                  (I = new f.Vector3(0, 0, 0)),
                  (P = new f.Scene()),
                  p.init(S),
                  M = new f.PerspectiveCamera(60, 1, 0.1, 10),
                  P.add(M),
                  (S.shadowMap.type = f.PCFSoftShadowMap),
                  (S.shadowMap.enabled = true),
                  (h.fixedScaleFactor = 1),
                  (h.resolution = new f.Vector2()),
                  (h.cameraPosition = new f.Vector3()),
                  (h.cameraQuaternion = new f.Quaternion()),
                  (h.cameraScale = new f.Vector3()),
                  (h.unprojectionMatrix = new f.Matrix4()),
                  (h.projectionViewMatrix = new f.Matrix4()),
                  (h.unprojectionViewMatrix = new f.Matrix4()),
                  (h.camera = M),
                  (h.prevCamera = M.clone()),
                  g.init({ renderer: S, scene: P, camera: M }),
                  b.init(),
                  P.add(b.mesh);
            }
            function r() { }
            function o() {
               // w.preInit(), A.preInit();
            }
            function a() {
               // T.init(), P.add(T.container), w.init(), P.add(w.container), A.init(), P.add(A.mesh), (R = true);
            }
            function s() {
               // y.to(n, 5, { showAnimation: 1, ease: "linear" });
            }
            function l(e, t) {
               (L === e && C === t) || ((L = e), (C = t)), g.resize(L, C), h.unprojectionMatrix.getInverse(M.projectionMatrix);
               var n = S.getSize();
               h.resolution.set(n.width, n.height), (S.domElement.style.width = L + "px"), (S.domElement.style.height = C + "px");
            }
            function u(e) {
               var
                  i = 1,
                  r = 0;

               D.set(0, 0, 3.5),
                  I.set(0, 0, 0),

                  (N += (r - N) * h.deltaRatio * 0.05),
                  E.copy(F).lerp(k, N),
                  S.setClearColor(E, 1),
                  void 0 === t && (i = Math.min(0, i)),
                  (O.x += 0.02 * (D.x - O.x) * h.deltaRatio),
                  (O.y += 0.03 * (D.y - O.y) * h.deltaRatio),
                  (O.z += 0.015 * (D.z - O.z) * h.deltaRatio),
                  (z.x += 0.02 * (I.x - z.x) * h.deltaRatio),
                  (z.y += 0.03 * (I.y - z.y) * h.deltaRatio),
                  (z.z += 0.015 * (I.z - z.z) * h.deltaRatio),
                  M.position.copy(O),
                  (M.position.y += 2 * (1 - v.easeOutSine(n.showAnimation))),
                  (M.position.z += 5 * (1 - v.easeOutCubic(n.showAnimation))),
                  M.lookAt(z),
                  (h.fixedScaleFactor = (2 * Math.tan((M.fov / 360) * Math.PI)) / C),
                  P.updateMatrixWorld(),
                  M.matrixWorld.decompose(h.cameraPosition, h.cameraQuaternion, h.cameraScale),
                  h.projectionViewMatrix.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse),
                  h.unprojectionViewMatrix.getInverse(h.projectionViewMatrix),
                  R && w.update(e),
                  b.update(e),
                  g.render(e),
                  c();
            }
            function c() {
               // h.prevCamera.matrixWorldInverse.copy(M.matrixWorldInverse), h.prevCamera.projectionMatrix.copy(M.projectionMatrix);
            }
            var
               h = e(23),
               f = e(15),
               p = e(17),
               m = e(19),
               v = e(18),
               g = e(24),
               b = e(21);

            (n.initRingParticles = r), (n.initBase = i), (n.preInit = o), (n.init = a), (n.show = s), (n.resize = l), (n.render = u), (n.showAnimation = 0);
            var S,
               M,
               P,
               L = void 0,
               C = void 0,
               R = false,
               O = void 0,
               D = void 0,
               z = void 0,
               I = void 0,
               E = void 0,
               F = void 0,
               k = void 0,
               N = 0;
         },
         { 15: 15, 17: 17, 18: 18, 19: 19, 21: 21, 24: 24 },
      ],
      23: [
         function (e, t, n) {
         }
      ],
      24: [
         function (e, t, n) {
            function i(e) {
               a.init(s({ useDepthTexture: true }, e)), l.init(true), a._isSupportDepthTexture;
            }
            function r(e, t) {
               a.resize(e, t);
            }
            function o(e, t) {
               a.renderQueue(e, t);
            }
            Object.defineProperty(n, "__esModule", { value: true }), (n.init = i), (n.resize = r), (n.render = o);

            // debugger
            var
               a = e(16),
               s = e(14),
               l = e(17);
         },
         { 14: 14, 16: 16, 17: 17 },
      ],
      25: [
         function (e, t, n) {
            function i(e) {
               e()
            }
            function r() {
               g = document.getElementById("preloader-text");
               w = document.querySelectorAll("span");
            }
            function o(e) {
               e()
            }
            function a(e) {
               s(2);
            }
            function s(e) {
               g.style.opacity = 1;
               for (var t = 0, n = w.length; t < n; t++) {
                  var i = w[t];
                  _.set(i, { opacity: 0 });
                  var r = { elem: i, opacity: 0, blur: 2, offset: 1.5 * (t - n / 2) },
                     o = { opacity: 1, blur: 0, offset: 0, delay: 0.3 + 0.3 * Math.sin((t / n) * 12.1241), onUpdate: l, ease: "Linear" };
                  _.to(r, e, o);
               }
               _.to(0.5 * e, { delay: e, opacity: 1 }), v.show(0.5 * e);
            }
            function l() {
               var e = this.target.elem.style;
               e.opacity = this.target.opacity;
            }
            var
               v = e(21),
               _ = e(2);
            (n.preInit = i), (n.init = r), (n.loadData = o), (n.start = a), (n.isActive = 0), (n.showAnimation = 0);
            var g = void 0,
               w = void 0,
               A = false,
               M = void 0;
         },
         { 2: 2, 21: 21, 79: 79 },
      ],
   },
   {},
   [20]
);
