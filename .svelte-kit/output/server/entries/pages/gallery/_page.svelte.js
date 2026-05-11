import { J as attr, Y as escape_html, _ as stringify, l as attr_class, o as onDestroy, p as ensure_array_like } from "../../../chunks/environment.js";
import { t as beforeNavigate } from "../../../chunks/client.js";
import { n as Footer, r as Navbar, t as AdSense } from "../../../chunks/AdSense.js";
//#region src/routes/gallery/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let showModal = false;
		let currentImage = "";
		let currentTitle = "";
		let currentCategory = "";
		function closeModal() {
			showModal = false;
			if (typeof document !== "undefined") document.body.style.overflow = "";
		}
		/** @param {KeyboardEvent} event */
		function handleKeydown(event) {
			if (showModal && event.key === "Escape") closeModal();
		}
		const galleryItems = [
			{
				title: "Group",
				category: "GROUP",
				image: "/img/maingroup.jpeg",
				size: "large"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img9.jpeg",
				size: "medium"
			},
			{
				title: "banner",
				category: "BANNER",
				image: "/img/banner1.jpeg",
				size: "large"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img1.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img2.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img3.jpeg",
				size: "medium"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img4.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img5.jpeg",
				size: "medium"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img7.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img8.jpeg",
				size: "large"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img11.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img12.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img13.jpeg",
				size: "medium"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img14.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img15.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img16.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img17.jpeg",
				size: "medium"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img18.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img19.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img20.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img21.jpeg",
				size: "small"
			},
			{
				title: "feeding",
				category: "FEEDING",
				image: "/img/img22.jpeg",
				size: "small"
			},
			{
				title: "group",
				category: "GROUP",
				image: "/img/group1.jpeg",
				size: "medium"
			},
			{
				title: "group",
				category: "GROUP",
				image: "/img/group2.jpeg",
				size: "medium"
			},
			{
				title: "group",
				category: "GROUP",
				image: "/img/group3.jpeg",
				size: "medium"
			},
			{
				title: "group",
				category: "GROUP",
				image: "/img/group4.jpeg",
				size: "small"
			},
			{
				title: "group",
				category: "GROUP",
				image: "/img/group5.jpeg",
				size: "small"
			},
			{
				title: "group",
				category: "GROUP",
				image: "/img/group6.jpeg",
				size: "small"
			},
			{
				title: "group",
				category: "GROUP",
				image: "/img/group7.jpeg",
				size: "large"
			}
		];
		onDestroy(() => {
			if (typeof window !== "undefined") {
				window.removeEventListener("keydown", handleKeydown);
				document.body.style.overflow = "";
			}
		});
		beforeNavigate(() => closeModal());
		Navbar($$renderer, {});
		$$renderer.push(`<!----> <div class="bg-surface border-b border-ink-faint/30 pt-10 pb-12"><div class="max-w-site mx-auto px-5 lg:px-16"><p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-4">Our Work</p> <h1 class="font-display font-bold text-ink leading-tight" style="font-size: clamp(2rem, 4vw, 3rem);">Gallery</h1> <p class="text-ink-variant mt-3 max-w-xl leading-relaxed">Moments of compassion captured — from daily feeding runs to community gatherings.</p></div></div> <div class="bg-surface-high"><div class="gallery-grid svelte-16h6p05"><!--[-->`);
		const each_array = ensure_array_like(galleryItems);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<button${attr_class(`gallery-item ${stringify(item.size)} group`, "svelte-16h6p05")}${attr("aria-label", `View ${stringify(item.title)}`)}><img${attr("src", item.image)}${attr("alt", item.title)} class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"/> <div class="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end p-5"><span class="text-[9px] tracking-[0.18em] uppercase text-white/0 group-hover:text-white/80 transition-colors duration-300 font-semibold">${escape_html(item.category)}</span></div></button>`);
		}
		$$renderer.push(`<!--]--></div></div> `);
		if (showModal) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1"><div class="relative max-w-5xl w-full" role="document"><button class="absolute -top-10 right-0 text-on-charcoal/60 hover:text-on-charcoal transition-colors text-[10px] tracking-[0.15em] uppercase font-semibold flex items-center gap-2" aria-label="Close"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Close</button> <img${attr("src", currentImage)}${attr("alt", currentTitle)} class="w-full max-h-[80vh] object-contain rounded"/> <div class="pt-4 flex items-center justify-between"><div><p id="modal-title" class="font-display font-semibold text-on-charcoal capitalize">${escape_html(currentTitle)}</p> <p class="text-[10px] tracking-[0.16em] uppercase text-on-charcoal/45 mt-0.5">${escape_html(currentCategory)}</p></div></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		AdSense($$renderer, {});
		$$renderer.push(`<!----> `);
		Footer($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
