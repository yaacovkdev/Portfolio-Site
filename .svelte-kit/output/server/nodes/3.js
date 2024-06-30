

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/webgl/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bb-5fjMh.js","_app/immutable/chunks/scheduler.BEAg4TNr.js","_app/immutable/chunks/index.DDUN28BH.js"];
export const stylesheets = ["_app/immutable/assets/3.sKexcLKv.css"];
export const fonts = [];
