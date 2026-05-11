import { J as attr, Y as escape_html, _ as stringify, d as bind_props, nt as fallback, p as ensure_array_like, u as attr_style } from "../../chunks/environment.js";
import { n as Footer, r as Navbar, t as AdSense } from "../../chunks/AdSense.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoughEase } from "gsap/EasePack";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//#region src/lib/animations.js
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, RoughEase);
//#endregion
//#region src/components/Hero.svelte
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let title = fallback($$props["title"], "");
		let subtitle = fallback($$props["subtitle"], "");
		let backgroundImage = fallback($$props["backgroundImage"], "");
		$$renderer.push(`<section class="hero relative -mt-[72px] h-screen bg-cover bg-center"${attr_style(`background-image: url('${stringify(backgroundImage)}');`)}><div class="absolute inset-0 bg-charcoal/55"></div> <div class="hero-content relative z-10 h-full flex flex-col items-center justify-center text-center px-5 max-w-site mx-auto"><p class="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-6">Voice of Strays &amp; Nature</p> <h1 class="font-display font-bold text-white leading-[1.15] tracking-[-0.01em] mb-6" style="font-size: clamp(2.8rem, 7vw, 5.5rem);">${escape_html(title)}</h1> <div class="w-12 h-px bg-sage-light mb-6"></div> <p class="text-white/75 font-light leading-relaxed max-w-2xl mb-10" style="font-size: clamp(1rem, 1.8vw, 1.2rem);">${escape_html(subtitle)}</p> <div class="flex flex-col sm:flex-row gap-3"><a href="/donate" class="bg-sage hover:bg-forest text-white text-xs font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded transition-colors duration-200">Support Our Mission</a> <a href="/volunteer" class="border border-white/40 hover:border-white/80 text-white text-xs font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded transition-colors duration-200">Volunteer</a></div></div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"><span class="text-[9px] tracking-[0.2em] uppercase text-white/40">Scroll</span> <div class="w-px h-8 bg-white/20"></div></div></section>`);
		bind_props($$props, {
			title,
			subtitle,
			backgroundImage
		});
	});
}
//#endregion
//#region src/components/Card.svelte
function Card($$renderer, $$props) {
	let title = fallback($$props["title"], "");
	let description = fallback($$props["description"], "");
	let image = fallback($$props["image"], "");
	let link = fallback($$props["link"], "#");
	$$renderer.push(`<div class="group bg-surface-low rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">`);
	if (image) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="overflow-hidden h-56"><img${attr("src", image)}${attr("alt", title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> <div class="p-6"><h3 class="font-display text-xl font-semibold text-ink mb-2 leading-snug">${escape_html(title)}</h3> <p class="text-ink-variant text-sm leading-relaxed mb-4">${escape_html(description)}</p> <a${attr("href", link)} class="inline-flex items-center gap-1.5 text-sage text-xs font-semibold tracking-[0.1em] uppercase hover:gap-2.5 transition-all duration-200"${attr("aria-label", `Learn more about ${stringify(title)}`)}>Learn more <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div>`);
	bind_props($$props, {
		title,
		description,
		image,
		link
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		Navbar($$renderer, {});
		$$renderer.push(`<!----> `);
		Hero($$renderer, {
			title: "Giving a Voice to the Voiceless",
			subtitle: "We exist to transform the lives of stray animals through compassionate community action, rescue operations, and sustainable care.",
			backgroundImage: "/img/heroBg.jpg"
		});
		$$renderer.push(`<!----> <section class="py-24 lg:py-32 bg-surface"><div class="max-w-site mx-auto px-5 lg:px-16"><div class="max-w-3xl"><p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-5">Our Purpose</p> <h2 class="font-display font-bold text-ink leading-[1.2] mb-8" style="font-size: clamp(2rem, 4vw, 3rem);">Every stray animal deserves<br/><em>care, dignity, and love.</em></h2> <p class="text-ink-variant text-lg leading-relaxed max-w-2xl">Voice of Strays and Nature is dedicated to transforming the lives of stray animals by empowering communities through sustainable care initiatives, compassionate rescue operations, and active community engagement.</p> <div class="mt-10 flex items-center gap-6"><a href="/aboutus" class="bg-sage hover:bg-forest text-white text-xs font-semibold tracking-[0.14em] uppercase px-7 py-3 rounded transition-colors duration-200">Our Story</a> <a href="/gallery" class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-ink-subtle hover:text-sage transition-colors duration-200">See Our Work <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></div></section> <div class="bg-surface-mid border-y border-ink-faint/40"><div class="max-w-site mx-auto px-5 lg:px-16"><div class="grid grid-cols-3 divide-x divide-ink-faint/40"><!--[-->`);
		const each_array = ensure_array_like([
			["500+", "Animals Fed Monthly"],
			["100+", "Active Volunteers"],
			["50+", "Communities Reached"]
		]);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let [num, label] = each_array[$$index];
			$$renderer.push(`<div class="py-10 text-center px-4"><div class="font-display font-bold text-3xl lg:text-4xl text-sage mb-1">${escape_html(num)}</div> <div class="text-[11px] tracking-[0.12em] uppercase text-ink-subtle">${escape_html(label)}</div></div>`);
		}
		$$renderer.push(`<!--]--></div></div></div> <section class="py-24 lg:py-32 bg-surface"><div class="max-w-site mx-auto px-5 lg:px-16"><div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"><div><p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-4">What We Do</p> <h2 class="font-display font-bold text-ink leading-tight" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem);">Our Initiatives</h2></div> <a href="/gallery" class="self-start md:self-auto inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-ink-subtle hover:text-sage transition-colors duration-200 flex-shrink-0">View Gallery <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6">`);
		Card($$renderer, {
			title: "Feeding Initiatives",
			description: "Community-driven feeding programs providing daily nourishment and care to stray animals across the region.",
			image: "/img/img11.jpeg",
			link: "/gallery"
		});
		$$renderer.push(`<!----> `);
		Card($$renderer, {
			title: "Community Outreach",
			description: "Building sustainable change through education, local partnerships, and awareness campaigns in vulnerable communities.",
			image: "/img/img17.jpeg",
			link: "/aboutus"
		});
		$$renderer.push(`<!----> `);
		Card($$renderer, {
			title: "Volunteer Programs",
			description: "Join passionate volunteers making a real difference through hands-on care, rescue operations, and fundraising.",
			image: "/img/group4.jpeg",
			link: "/volunteer"
		});
		$$renderer.push(`<!----></div></div></section> <section class="bg-charcoal py-20"><div class="max-w-site mx-auto px-5 lg:px-16 text-center"><p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage-light mb-5">Make a Difference</p> <h2 class="font-display font-bold text-on-charcoal leading-snug mb-6" style="font-size: clamp(1.8rem, 4vw, 2.8rem);">Your generosity transforms lives.</h2> <p class="text-on-charcoal/55 max-w-xl mx-auto mb-10 leading-relaxed">Every rupee donated goes directly toward feeding, rescuing, and caring for stray animals in need.</p> <div class="flex flex-col sm:flex-row gap-3 justify-center"><a href="/donate" class="bg-sage hover:bg-forest text-white text-xs font-semibold tracking-[0.14em] uppercase px-9 py-3.5 rounded transition-colors duration-200">Donate Now</a> <a href="/volunteer" class="border border-on-charcoal/25 hover:border-on-charcoal/60 text-on-charcoal/70 hover:text-on-charcoal text-xs font-semibold tracking-[0.14em] uppercase px-9 py-3.5 rounded transition-colors duration-200">Volunteer</a></div></div></section> `);
		AdSense($$renderer, {});
		$$renderer.push(`<!----> `);
		Footer($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
