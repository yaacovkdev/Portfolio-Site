

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ihlAC8Yp.js","_app/immutable/chunks/scheduler.BEAg4TNr.js","_app/immutable/chunks/index.DDUN28BH.js","_app/immutable/chunks/entry.BUigvqqv.js"];
export const stylesheets = [];
export const fonts = [];
