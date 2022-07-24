(function () {
	'use strict';
	var t = {
			1120: function (t, n, r) {
				var e = r(9242), a = r(3396);
				function i(t, n, r, e, i, o) {
					const s = (0, a.up)('DeadBirbs');
					return (0, a.wg)(), (0, a.j4)(s);
				}
				var o = r(7139);
				const s = t => ((0, a.dD)('data-v-e2b74c56'), t = t(), (0, a.Cn)(), t), c = { class: 'hello' }, u = s(() => (0, a._)('h1', null, 'These birds have been rescued from their NFT fate, bound eternally to the blockchain. They now fly wild and free.', -1)), l = { class: 'card-group' }, f = {
						class: 'card',
						style: {
							width: '25rem',
							'margin-left': '50px',
							'margin-bottom': '20px'
						}
					}, d = ['src'], p = { class: 'card-body' }, v = { class: 'card-title' }, h = { class: 'card-text' };
				function b(t, n, r, e, i, s) {
					return (0, a.wg)(), (0, a.iD)('div', c, [
						u,
						(0, a._)('div', l, [((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(i.metadata, t => ((0, a.wg)(), (0, a.iD)('div', { key: t.edition }, [(0, a._)('div', f, [
									(0, a._)('img', {
										src: t.image,
										class: 'card-img-top',
										alt: 'Bird Hat Grift Club NFT Image'
									}, null, 8, d),
									(0, a._)('div', p, [
										(0, a._)('h5', v, (0, o.zw)(t.name), 1),
										(0, a._)('p', h, (0, o.zw)(t.description), 1)
									]),
									((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(t.attributes, t => ((0, a.wg)(), (0, a.iD)('span', {
										key: t,
										class: 'btn btn-primary'
									}, (0, o.zw)(t['trait_type']) + ': ' + (0, o.zw)(t.value), 1))), 128))
								])]))), 128))])
					]);
				}
				var m = {
						name: 'DeadBirbs',
						data() {
							return {
								metadata: null,
								status: null
							};
						},
						created() {
							this.fetchData();
						},
						methods: {
							async fetchData() {
								let t = 'metadata.json', n = 'status.json';
								this.status = await (await fetch(n)).json(), this.metadata = (await (await fetch(t)).json()).filter(t => t.edition >= this.status.starting).sort((t, n) => t.edition - n.edition);
							}
						}
					}, w = r(89);
				const g = (0, w.Z)(m, [
					[
						'render',
						b
					],
					[
						'__scopeId',
						'data-v-e2b74c56'
					]
				]);
				var y = g, _ = {
						name: 'App',
						components: { DeadBirbs: y }
					};
				const j = (0, w.Z)(_, [[
						'render',
						i
					]]);
				var D = j;
				(0, e.ri)(D).mount('#app');
			}
		}, n = {};
	function r(e) {
		var a = n[e];
		if (void 0 !== a)
			return a.exports;
		var i = n[e] = { exports: {} };
		return t[e](i, i.exports, r), i.exports;
	}
	r.m = t, function () {
		var t = [];
		r.O = function (n, e, a, i) {
			if (!e) {
				var o = 1 / 0;
				for (l = 0; l < t.length; l++) {
					e = t[l][0], a = t[l][1], i = t[l][2];
					for (var s = !0, c = 0; c < e.length; c++)
						(!1 & i || o >= i) && Object.keys(r.O).every(function (t) {
							return r.O[t](e[c]);
						}) ? e.splice(c--, 1) : (s = !1, i < o && (o = i));
					if (s) {
						t.splice(l--, 1);
						var u = a();
						void 0 !== u && (n = u);
					}
				}
				return n;
			}
			i = i || 0;
			for (var l = t.length; l > 0 && t[l - 1][2] > i; l--)
				t[l] = t[l - 1];
			t[l] = [
				e,
				a,
				i
			];
		};
	}(), function () {
		r.n = function (t) {
			var n = t && t.__esModule ? function () {
				return t['default'];
			} : function () {
				return t;
			};
			return r.d(n, { a: n }), n;
		};
	}(), function () {
		r.d = function (t, n) {
			for (var e in n)
				r.o(n, e) && !r.o(t, e) && Object.defineProperty(t, e, {
					enumerable: !0,
					get: n[e]
				});
		};
	}(), function () {
		r.g = function () {
			if ('object' === typeof globalThis)
				return globalThis;
			try {
				return this || new Function('return this')();
			} catch (t) {
				if ('object' === typeof window)
					return window;
			}
		}();
	}(), function () {
		r.o = function (t, n) {
			return Object.prototype.hasOwnProperty.call(t, n);
		};
	}(), function () {
		var t = { 143: 0 };
		r.O.j = function (n) {
			return 0 === t[n];
		};
		var n = function (n, e) {
				var a, i, o = e[0], s = e[1], c = e[2], u = 0;
				if (o.some(function (n) {
						return 0 !== t[n];
					})) {
					for (a in s)
						r.o(s, a) && (r.m[a] = s[a]);
					if (c)
						var l = c(r);
				}
				for (n && n(e); u < o.length; u++)
					i = o[u], r.o(t, i) && t[i] && t[i][0](), t[i] = 0;
				return r.O(l);
			}, e = self['webpackChunkfallenbirbs'] = self['webpackChunkfallenbirbs'] || [];
		e.forEach(n.bind(null, 0)), e.push = n.bind(null, e.push.bind(e));
	}();
	var e = r.O(void 0, [998], function () {
		return r(1120);
	});
	e = r.O(e);
}());	//# sourceMappingURL=app.3e894475.js.map
