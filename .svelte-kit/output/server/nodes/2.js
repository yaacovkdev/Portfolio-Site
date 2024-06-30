

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BNJklirH.js","_app/immutable/chunks/scheduler.BEAg4TNr.js","_app/immutable/chunks/index.DDUN28BH.js"];
export const stylesheets = [];
export const fonts = [];
