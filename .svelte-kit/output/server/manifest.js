export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Porfolio-Site/_app",
	assets: new Set([".nojekyll","favicon.png","p5/bouncy/calculations.js","p5/bouncy/index.html","p5/bouncy/obstacle.js","p5/bouncy/render.js","p5/fourier/index.html","p5/fourier/initarm.js","p5/fourier/render.js","p5/fourier/vector.js","p5/fourier/vectorarm.js","p5/p5.min.js","p5/spinning/events/events.js","p5/spinning/events/timeloop.js","p5/spinning/index.html","p5/spinning/logic/enemies.js","p5/spinning/logic/logic.js","p5/spinning/logic/player.js","p5/spinning/p5js/p5.min.js","p5/spinning/p5js/README.txt","p5/spinning/render.js","p5/spinning/util/util.js"]),
	mimeTypes: {".png":"image/png",".js":"text/javascript",".html":"text/html",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.4LBh_Le6.js","app":"_app/immutable/entry/app.f-KlFq9H.js","imports":["_app/immutable/entry/start.4LBh_Le6.js","_app/immutable/chunks/entry.BUigvqqv.js","_app/immutable/chunks/scheduler.BEAg4TNr.js","_app/immutable/entry/app.f-KlFq9H.js","_app/immutable/chunks/scheduler.BEAg4TNr.js","_app/immutable/chunks/index.DDUN28BH.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/webgl",
				pattern: /^\/webgl\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/webgl/[project]",
				pattern: /^\/webgl\/([^/]+?)\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
