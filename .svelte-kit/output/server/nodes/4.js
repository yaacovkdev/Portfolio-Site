import * as universal from '../entries/pages/webgl/_project_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/webgl/_project_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/webgl/[project]/+page.ts";
export const imports = ["_app/immutable/nodes/4.DWxqE1_X.js","_app/immutable/chunks/scheduler.BEAg4TNr.js","_app/immutable/chunks/index.DDUN28BH.js"];
export const stylesheets = ["_app/immutable/assets/4.S9dJxibU.css"];
export const fonts = [];
