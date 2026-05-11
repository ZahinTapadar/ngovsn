<script>
    import { onMount } from 'svelte';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';

    onMount(() => {
        // Reveal animations
        import('gsap').then(({ gsap }) => {
            gsap.utils.toArray('.reveal').forEach((el, i) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.05,
                    ease: 'power2.out'
                });
            });
        });
    });

    let copied = false;
    function copyUPI() {
        if (typeof navigator !== 'undefined') {
            navigator.clipboard.writeText('deepmili.djm@oksbi').then(() => {
                copied = true;
                setTimeout(() => { copied = false; }, 2000);
            });
        }
    }
</script>

<Navbar />

<!-- Page hero -->
<div class="bg-charcoal pt-14 pb-20 reveal">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage-light mb-5">Support the Mission</p>
        <h1 class="font-display font-bold text-on-charcoal leading-[1.15]" style="font-size: clamp(2.4rem, 5vw, 4rem);">
            Every donation<br/><em>feeds, heals, and saves.</em>
        </h1>
        <div class="w-14 h-px bg-sage/50 my-6"></div>
        <p class="text-on-charcoal/60 text-lg leading-relaxed max-w-xl">
            100% of your contribution goes directly to food, care, and rescue for stray animals in need.
        </p>
    </div>
</div>

<!-- Impact strip -->
<div class="bg-surface-mid border-b border-ink-faint/40 reveal">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <div class="grid grid-cols-3 divide-x divide-ink-faint/40">
            {#each [['500+','Animals Fed Monthly'],['100+','Active Volunteers'],['50+','Communities Reached']] as [num, label]}
                <div class="py-9 text-center px-4">
                    <div class="font-display font-bold text-2xl lg:text-3xl text-sage mb-1">{num}</div>
                    <div class="text-[10px] tracking-[0.12em] uppercase text-ink-subtle">{label}</div>
                </div>
            {/each}
        </div>
    </div>
</div>

<!-- Donate section -->
<section class="py-20 lg:py-28 bg-surface reveal">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <!-- UPI card -->
            <div class="bg-surface-low rounded-xl shadow-card p-8">
                <p class="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-5">Instant Transfer</p>
                <h2 class="font-display font-semibold text-ink text-2xl mb-2">UPI Donation</h2>
                <p class="text-ink-variant text-sm mb-8">Scan the QR code with any UPI app, or copy the UPI ID below.</p>

                <div class="flex flex-col items-center gap-5 bg-surface rounded-xl p-6 border border-ink-faint/30 mb-6">
                    <img src="/img/upi.jpeg" alt="UPI QR Code" class="w-44 h-44 object-contain rounded-lg" />
                    <div class="text-center space-y-1">
                        <p class="text-[10px] tracking-[0.16em] uppercase text-ink-subtle">UPI ID</p>
                        <p class="font-display text-ink font-medium text-lg">deepmili.djm@oksbi</p>
                        <p class="text-xs text-ink-subtle">Voice of Strays and Nature</p>
                    </div>
                </div>

                <button
                    on:click={copyUPI}
                    class="w-full flex items-center justify-center gap-2 border border-ink-faint hover:border-sage text-ink-variant hover:text-sage text-xs font-semibold tracking-[0.12em] uppercase py-3 rounded transition-all duration-200"
                >
                    {#if copied}
                        <svg class="w-3.5 h-3.5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        Copied!
                    {:else}
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        Copy UPI ID
                    {/if}
                </button>
            </div>

            <!-- Contact + trust -->
            <div class="flex flex-col gap-6">

                <div class="bg-surface-low rounded-xl shadow-card p-7">
                    <p class="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-5">Other Methods</p>
                    <h2 class="font-display font-semibold text-ink text-xl mb-5">Need Help Donating?</h2>
                    <p class="text-ink-variant text-sm mb-6">Reach out and we'll assist you with wire transfers or other arrangements.</p>
                    <div class="space-y-4">
                        <a href="mailto:vsnghy.org@gmail.com"
                           class="flex items-center gap-3 text-sm text-ink-variant hover:text-sage transition-colors duration-200 group">
                            <div class="w-8 h-8 bg-sage-light rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-3.5 h-3.5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            vsnghy.org@gmail.com
                        </a>
                        <a href="tel:+919365582550"
                           class="flex items-center gap-3 text-sm text-ink-variant hover:text-sage transition-colors duration-200 group">
                            <div class="w-8 h-8 bg-sage-light rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-3.5 h-3.5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </div>
                            +91 93655 82550
                        </a>
                    </div>
                </div>

                <!-- Trust note -->
                <div class="bg-sage-light/30 border border-sage-light rounded-xl p-6">
                    <div class="flex items-start gap-3">
                        <svg class="w-4 h-4 text-sage mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                        <div>
                            <p class="text-sm font-semibold text-ink mb-1">Transparent & Accountable</p>
                            <p class="text-xs text-ink-variant leading-relaxed">
                                Every donation is used solely for animal welfare. We maintain full transparency in our operations and are happy to share records on request.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="bg-surface-low rounded-xl shadow-card p-6">
                    <p class="font-display italic text-ink-variant text-base leading-relaxed">
                        "Your ₹100 can feed a stray for three days. Every amount, large or small, makes a real difference."
                    </p>
                    <p class="mt-3 text-[10px] tracking-[0.15em] uppercase text-ink-subtle">— Voice of Strays & Nature</p>
                </div>

            </div>
        </div>
    </div>
</section>

<Footer />