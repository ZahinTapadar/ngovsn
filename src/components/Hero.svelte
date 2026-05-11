<script>
    import { onMount } from 'svelte';
    import { fadeIn } from '../lib/animations';

    export let title = '';
    export let subtitle = '';
    export let backgroundImage = '';

    onMount(() => {
        fadeIn('.hero-content', { duration: 1.2, y: 30 });
    });
</script>

<!-- Hero: full-bleed, overlaps the Navbar spacer with -mt-[72px] -->
<section
    class="hero relative -mt-[72px] h-screen bg-cover bg-center"
    style="background-image: url('{backgroundImage}');"
>
    <!-- Rich dark overlay -->
    <div class="absolute inset-0 bg-charcoal/55"></div>

    <!-- Content -->
    <div class="hero-content relative z-10 h-full flex flex-col items-center justify-center text-center px-5 max-w-site mx-auto">

        <!-- Label -->
        <p class="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-6">
            Voice of Strays & Nature
        </p>

        <!-- Headline -->
        <h1 class="font-display font-bold text-white leading-[1.15] tracking-[-0.01em] mb-6"
            style="font-size: clamp(2.8rem, 7vw, 5.5rem);">
            {title}
        </h1>

        <!-- Divider -->
        <div class="w-12 h-px bg-sage-light mb-6"></div>

        <!-- Subtitle -->
        <p class="text-white/75 font-light leading-relaxed max-w-2xl mb-10"
           style="font-size: clamp(1rem, 1.8vw, 1.2rem);">
            {subtitle}
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-3">
            <a href="/donate"
               class="bg-sage hover:bg-forest text-white text-xs font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded transition-colors duration-200">
                Support Our Mission
            </a>
            <a href="/volunteer"
               class="border border-white/40 hover:border-white/80 text-white text-xs font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded transition-colors duration-200">
                Volunteer
            </a>
        </div>

    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span class="text-[9px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
        <div class="w-px h-8 bg-white/20"></div>
    </div>
</section>