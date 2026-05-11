<script>
    import { onMount } from 'svelte';
    import Navbar from '../components/Navbar.svelte';
    import Hero from '../components/Hero.svelte';
    import Card from '../components/Card.svelte';
    import Footer from '../components/Footer.svelte';
    import AdSense from '../components/AdSense.svelte';
    import { initAnimations } from '../lib/animations.js';

    onMount(() => {
        initAnimations({ excludeNavbar: true });
    });
</script>

<Navbar />

<Hero
    title="Giving a Voice to the Voiceless"
    subtitle="We exist to transform the lives of stray animals through compassionate community action, rescue operations, and sustainable care."
    backgroundImage="/img/heroBg.jpg"
/>

<!-- Mission -->
<section class="py-24 lg:py-32 bg-surface">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <div class="max-w-3xl">
            <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-5">Our Purpose</p>
            <h2 class="font-display font-bold text-ink leading-[1.2] mb-8" style="font-size: clamp(2rem, 4vw, 3rem);">
                Every stray animal deserves<br/><em>care, dignity, and love.</em>
            </h2>
            <p class="text-ink-variant text-lg leading-relaxed max-w-2xl">
                Voice of Strays and Nature is dedicated to transforming the lives of stray animals by empowering communities through sustainable care initiatives, compassionate rescue operations, and active community engagement.
            </p>
            <div class="mt-10 flex items-center gap-6">
                <a href="/aboutus"
                   class="bg-sage hover:bg-forest text-white text-xs font-semibold tracking-[0.14em] uppercase px-7 py-3 rounded transition-colors duration-200">
                    Our Story
                </a>
                <a href="/gallery"
                   class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-ink-subtle hover:text-sage transition-colors duration-200">
                    See Our Work
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Stats bar -->
<div class="bg-surface-mid border-y border-ink-faint/40">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <div class="grid grid-cols-3 divide-x divide-ink-faint/40">
            {#each [['500+','Animals Fed Monthly'],['100+','Active Volunteers'],['50+','Communities Reached']] as [num, label]}
                <div class="py-10 text-center px-4">
                    <div class="font-display font-bold text-3xl lg:text-4xl text-sage mb-1">{num}</div>
                    <div class="text-[11px] tracking-[0.12em] uppercase text-ink-subtle">{label}</div>
                </div>
            {/each}
        </div>
    </div>
</div>

<!-- Initiatives -->
<section class="py-24 lg:py-32 bg-surface">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
                <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-4">What We Do</p>
                <h2 class="font-display font-bold text-ink leading-tight" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem);">
                    Our Initiatives
                </h2>
            </div>
            <a href="/gallery"
               class="self-start md:self-auto inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-ink-subtle hover:text-sage transition-colors duration-200 flex-shrink-0">
                View Gallery
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
                title="Feeding Initiatives"
                description="Community-driven feeding programs providing daily nourishment and care to stray animals across the region."
                image="/img/img11.jpeg"
                link="/gallery"
            />
            <Card
                title="Community Outreach"
                description="Building sustainable change through education, local partnerships, and awareness campaigns in vulnerable communities."
                image="/img/img17.jpeg"
                link="/aboutus"
            />
            <Card
                title="Volunteer Programs"
                description="Join passionate volunteers making a real difference through hands-on care, rescue operations, and fundraising."
                image="/img/group4.jpeg"
                link="/volunteer"
            />
        </div>
    </div>
</section>

<!-- Dark CTA strip -->
<section class="bg-charcoal py-20">
    <div class="max-w-site mx-auto px-5 lg:px-16 text-center">
        <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage-light mb-5">Make a Difference</p>
        <h2 class="font-display font-bold text-on-charcoal leading-snug mb-6"
            style="font-size: clamp(1.8rem, 4vw, 2.8rem);">
            Your generosity transforms lives.
        </h2>
        <p class="text-on-charcoal/55 max-w-xl mx-auto mb-10 leading-relaxed">
            Every rupee donated goes directly toward feeding, rescuing, and caring for stray animals in need.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/donate"
               class="bg-sage hover:bg-forest text-white text-xs font-semibold tracking-[0.14em] uppercase px-9 py-3.5 rounded transition-colors duration-200">
                Donate Now
            </a>
            <a href="/volunteer"
               class="border border-on-charcoal/25 hover:border-on-charcoal/60 text-on-charcoal/70 hover:text-on-charcoal text-xs font-semibold tracking-[0.14em] uppercase px-9 py-3.5 rounded transition-colors duration-200">
                Volunteer
            </a>
        </div>
    </div>
</section>

<AdSense />
<Footer />
  