<script>
    import { trackSocialMedia } from '$lib/analytics';
</script>

<footer class="bg-charcoal text-on-charcoal/70 pt-16 pb-8">
    <div class="max-w-site mx-auto px-5 lg:px-16">

        <!-- Top grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-on-charcoal/10">

            <!-- Brand column -->
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <img src="/img/logo.jpeg" alt="VSN" class="w-8 h-8 rounded-full object-cover opacity-80" />
                    <span class="font-display font-semibold text-lg text-on-charcoal">VSN</span>
                </div>
                <p class="text-sm leading-relaxed text-on-charcoal/50 max-w-xs">
                    Giving a voice to the voiceless — empowering stray animals through compassionate community action.
                </p>
                <a
                    href="https://www.instagram.com/vsnghy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-sage-light hover:text-forest-light transition-colors duration-200"
                    on:click={() => trackSocialMedia('instagram')}
                    aria-label="Instagram"
                >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @vsnghy
                </a>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="text-[10px] font-semibold tracking-[0.2em] uppercase text-on-charcoal/40 mb-5">Navigate</h3>
                <ul class="space-y-3">
                    {#each [['About Us','/aboutus'],['Gallery','/gallery'],['Volunteer','/volunteer'],['Donate','/donate']] as [label, href]}
                        <li>
                            <a {href} class="text-sm text-on-charcoal/60 hover:text-on-charcoal transition-colors duration-200">{label}</a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h3 class="text-[10px] font-semibold tracking-[0.2em] uppercase text-on-charcoal/40 mb-5">Contact</h3>
                <ul class="space-y-3 text-sm text-on-charcoal/60">
                    <li>
                        <a href="mailto:vsnghy.org@gmail.com" class="hover:text-on-charcoal transition-colors duration-200">
                            vsnghy.org@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+919365582550" class="hover:text-on-charcoal transition-colors duration-200">
                            +91 93655 82550
                        </a>
                    </li>
                </ul>

                <div class="mt-8">
                    <a href="/donate"
                       class="inline-block bg-sage hover:bg-forest text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-6 py-2.5 rounded transition-colors duration-200">
                        Support Us
                    </a>
                </div>
            </div>

        </div>

        <!-- Bottom bar -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 text-[11px] text-on-charcoal/30">
            <p>© {new Date().getFullYear()} Voice of Strays and Nature. All rights reserved.</p>
            <p>
                Made with care by
                <a href="https://zahintapadar.me" target="_blank" rel="noopener noreferrer"
                   class="text-on-charcoal/50 hover:text-on-charcoal transition-colors duration-200 ml-1">
                    @Zahin Tapadar
                </a>
            </p>
        </div>

    </div>
</footer>
  
