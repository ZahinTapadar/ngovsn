<script>
    export let title = '';
    export let description = '';
    export let image = '';
    export let link = '#';
</script>

<div class="group bg-surface-low rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
    {#if image}
        <div class="overflow-hidden h-56">
            <img
                src={image}
                alt={title}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
    {/if}
    <div class="p-6">
        <h3 class="font-display text-xl font-semibold text-ink mb-2 leading-snug">{title}</h3>
        <p class="text-ink-variant text-sm leading-relaxed mb-4">{description}</p>
        <a
            href={link}
            class="inline-flex items-center gap-1.5 text-sage text-xs font-semibold tracking-[0.1em] uppercase hover:gap-2.5 transition-all duration-200"
            aria-label="Learn more about {title}"
        >
            Learn more
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        </a>
    </div>
</div>
  