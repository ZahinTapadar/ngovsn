import { g as store_get, h as slot, l as attr_class, v as unsubscribe_stores } from "../../chunks/environment.js";
import { n as page } from "../../chunks/stores.js";
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let isScrolled = false;
		let isLoading = false;
		$: if (store_get($$store_subs ??= {}, "$page", page)) isLoading = store_get($$store_subs ??= {}, "$page", page).status === "loading";
		if (isLoading) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="loading-bar svelte-12qhfyh"><div class="loading-progress svelte-12qhfyh"></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div${attr_class("app svelte-12qhfyh", void 0, { "scrolled": isScrolled })}><main class="svelte-12qhfyh"><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></main></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _layout as default };
