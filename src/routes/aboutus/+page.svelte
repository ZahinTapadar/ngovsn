<script>
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import AdSense from '../../components/AdSense.svelte';

    const values = [
        {
            icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
            title: 'Our Mission',
            body: 'To create a world where every stray animal finds love, care, and a forever home through community-driven initiatives and sustainable solutions.',
        },
        {
            icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
            title: 'Our Impact',
            body: 'Since 2020, we\'ve fed over 500 animals, built a network of 100+ volunteers, and served 50+ communities across the region.',
        },
        {
            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
            title: 'Our Community',
            body: 'A passionate network of animal lovers, veterinarians, and volunteers working together to make a lasting difference.',
        },
    ];
</script>

<Navbar />

<!-- Page hero (text-only, editorial) -->
<div class="bg-surface-mid border-b border-ink-faint/30 pt-12 pb-20">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-5">Who We Are</p>
        <h1 class="font-display font-bold text-ink leading-[1.15]" style="font-size: clamp(2.4rem, 5vw, 4rem);">
            Our Story
        </h1>
        <div class="w-14 h-px bg-sage/40 my-6"></div>
        <p class="text-ink-variant text-lg leading-relaxed max-w-2xl">
            Dedicated to giving every stray animal a second chance — through compassion, community, and sustained action since 2020.
        </p>
    </div>
</div>

<!-- Story section -->
<section class="py-24 lg:py-32 bg-surface">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-5">The Beginning</p>
                <h2 class="font-display font-bold text-ink leading-snug mb-6" style="font-size: clamp(1.6rem, 3vw, 2.4rem);">
                    Born from compassion,<br/>built by community.
                </h2>
                <p class="text-ink-variant leading-relaxed mb-5">
                    Voice of Strays and Nature began with a simple act — feeding a hungry dog on the street. That single moment grew into a movement, connecting hundreds of volunteers across the region who share one belief: that every animal deserves to be seen, fed, and loved.
                </p>
                <p class="text-ink-variant leading-relaxed">
                    Today we run regular feeding programs, community education initiatives, and volunteer networks that reach over 50 communities. But at our core, we remain what we have always been — a family of people who care.
                </p>
            </div>
            <div class="rounded-xl overflow-hidden shadow-card">
                <img src="/img/maingroup.jpeg" alt="VSN community group" class="w-full h-80 object-cover" />
            </div>
        </div>
    </div>
</section>

<!-- Values / Mission cards -->
<section class="py-24 lg:py-28 bg-surface-mid">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-4">What Drives Us</p>
        <h2 class="font-display font-bold text-ink mb-14" style="font-size: clamp(1.6rem, 3vw, 2.4rem);">
            Values & Impact
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each values as v}
                <div class="bg-surface rounded-xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <div class="w-10 h-10 bg-sage-light rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={v.icon}/>
                        </svg>
                    </div>
                    <h3 class="font-display font-semibold text-ink text-xl mb-3">{v.title}</h3>
                    <p class="text-ink-variant text-sm leading-relaxed">{v.body}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Photos strip -->
<section class="py-24 lg:py-28 bg-surface">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-4">In Action</p>
        <h2 class="font-display font-bold text-ink mb-10" style="font-size: clamp(1.6rem, 3vw, 2.4rem);">
            Moments from the Field
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            {#each ['/img/img3.jpeg', '/img/group2.jpeg', '/img/img8.jpeg', '/img/group6.jpeg'] as src, i}
                <div class="rounded-xl overflow-hidden aspect-square shadow-card">
                    <img {src} alt="VSN field work {i + 1}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
            {/each}
        </div>
        <div class="mt-8 text-center">
            <a href="/gallery"
               class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-sage hover:text-forest transition-colors duration-200">
                View Full Gallery
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    </div>
</section>

<!-- Join CTA -->
<section class="bg-charcoal py-20">
    <div class="max-w-site mx-auto px-5 lg:px-16 text-center">
        <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage-light mb-5">Get Involved</p>
        <h2 class="font-display font-bold text-on-charcoal mb-6" style="font-size: clamp(1.6rem, 3.5vw, 2.4rem);">
            Become part of the story.
        </h2>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/volunteer"
               class="bg-sage hover:bg-forest text-white text-xs font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded transition-colors duration-200">
                Volunteer With Us
            </a>
            <a href="/donate"
               class="border border-on-charcoal/25 hover:border-on-charcoal/60 text-on-charcoal/70 hover:text-on-charcoal text-xs font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded transition-colors duration-200">
                Donate
            </a>
        </div>
    </div>
</section>

<AdSense />
<Footer />