import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.TFWEkG2F.js","_app/immutable/chunks/Bi__zNEo.js","_app/immutable/chunks/RnX2Iqj1.js","_app/immutable/chunks/5_-Qy60r.js","_app/immutable/chunks/CFKVnMbq.js"];
export const stylesheets = ["_app/immutable/assets/0.CiQTpVUr.css"];
export const fonts = [];
