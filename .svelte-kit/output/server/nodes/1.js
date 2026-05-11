

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.zIIY-fT5.js","_app/immutable/chunks/C0IvuiK_.js","_app/immutable/chunks/CymgLIbD.js","_app/immutable/chunks/CFKVnMbq.js"];
export const stylesheets = [];
export const fonts = [];
