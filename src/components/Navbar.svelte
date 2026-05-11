<script>
    import { navigating, page } from '$app/stores';
    import { fade, fly, scale } from 'svelte/transition';
    import { quintOut, backOut } from 'svelte/easing';

    let isMenuOpen = false;
    let isScrolled = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        }
    }

    $: if ($navigating) {
        isMenuOpen = false;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
        }
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            isScrolled = window.scrollY > 30;
        }, { passive: true });
    }

    $: isOnHeroPage = $page?.url?.pathname === '/';
    $: isTransparent = isOnHeroPage && !isScrolled;

    const navLinks = [
        ['Home', '/'],
        ['Gallery', '/gallery'],
        ['About', '/aboutus'],
        ['Contact', '/volunteer'],
    ];
</script>

<!-- Fixed navbar: transparent over hero only, warm surface on all other pages -->
<nav class="fixed w-full top-0 z-50 transition-all duration-500 {isTransparent ? 'bg-transparent' : 'bg-surface/95 backdrop-blur-sm'}"
     style={isTransparent ? '' : 'box-shadow: 0 1px 0 0 #CEC5BD;'}>
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <div class="flex items-center justify-between h-[72px]">

            <!-- Logo -->
            <a href="/" class="flex items-center gap-3 group">
                <img src="/img/logo.jpeg" alt="VSN" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                <div class="leading-none">
                    <span class="block font-display font-semibold text-[17px] {isTransparent ? 'text-white' : 'text-ink'}">VSN</span>
                    <span class="block text-[9px] tracking-[0.18em] uppercase mt-0.5 {isTransparent ? 'text-white/60' : 'text-ink-subtle'}">Voice of Strays</span>
                </div>
            </a>

            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center gap-10">
                {#each navLinks as [label, href]}
                    <a {href} class="text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 {isTransparent ? 'text-white/80 hover:text-white' : 'text-ink-variant hover:text-sage'}">
                        {label}
                    </a>
                {/each}
            </div>

            <!-- Donate CTA + Mobile toggle -->
            <div class="flex items-center gap-4">
                <a href="/donate" class="hidden md:inline-block bg-sage hover:bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-2.5 rounded transition-colors duration-200">
                    Donate
                </a>
                <button
                    class="md:hidden p-1.5 rounded {isTransparent ? 'text-white' : 'text-ink'} transition-colors relative w-8 h-8 flex items-center justify-center"
                    on:click={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div class="relative w-5 h-4 flex flex-col justify-between items-center">
                        <!-- Top bar -->
                        <span 
                            class="block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-out origin-center"
                            class:translate-y-[7px]={isMenuOpen}
                            class:rotate-45={isMenuOpen}
                        ></span>
                        <!-- Bottom bar -->
                        <span 
                            class="block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-out origin-center"
                            class:-translate-y-[7px]={isMenuOpen}
                            class:-rotate-45={isMenuOpen}
                        ></span>
                    </div>
                </button>
            </div>

        </div>
    </div>
</nav>

<!-- Mobile fullscreen menu -->
{#if isMenuOpen}
<div 
    class="fixed inset-0 bg-charcoal z-40 flex flex-col items-center justify-center md:hidden"
    in:fade={{ duration: 400, easing: quintOut }}
    out:fade={{ duration: 300, easing: quintOut }}
>
    <nav class="flex flex-col items-center gap-7 text-center">
        {#each navLinks as [label, href], i}
            <a {href}
               class="font-display italic text-4xl text-on-charcoal/90 hover:text-on-charcoal transition-all duration-200 hover:scale-105"
               on:click={toggleMenu}
               in:fly={{ y: 30, duration: 500, delay: 100 + i * 80, easing: backOut }}
               out:fly={{ y: -20, duration: 300, delay: (navLinks.length - i) * 50, easing: quintOut }}
            >
                {label}
            </a>
        {/each}
        <a href="/donate"
           class="mt-5 bg-sage hover:bg-forest text-white text-xs font-semibold tracking-[0.15em] uppercase px-10 py-3 rounded transition-all duration-200 hover:scale-105"
           on:click={toggleMenu}
           in:scale={{ duration: 400, delay: 100 + navLinks.length * 80, easing: backOut, start: 0.8 }}
           out:scale={{ duration: 250, easing: quintOut, start: 0.9 }}
        >
            Donate Now
        </a>
    </nav>
    <p 
        class="absolute bottom-8 text-[9px] tracking-[0.22em] uppercase text-on-charcoal/30"
        in:fade={{ duration: 600, delay: 500, easing: quintOut }}
        out:fade={{ duration: 200 }}
    >Voice of Strays & Nature</p>
</div>
{/if}

<!-- Spacer for fixed navbar (non-hero pages) -->
<div class="h-[72px]"></div>
  