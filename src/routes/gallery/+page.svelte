<script>
    import { onMount, onDestroy } from 'svelte';
    import { beforeNavigate } from '$app/navigation';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';

    let showModal = false;
    let currentImage = '';
    let currentTitle = '';
    let currentCategory = '';

    /** @param {string} image @param {string} title @param {string} category */
    function openModal(image, title, category) {
        currentImage = image;
        currentTitle = title;
        currentCategory = category;
        showModal = true;
        if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        showModal = false;
        if (typeof document !== 'undefined') document.body.style.overflow = '';
    }

    /** @param {KeyboardEvent} event */
    function handleKeydown(event) {
        if (showModal && event.key === 'Escape') closeModal();
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
        },

        
        
        
        
        
        
        
    ];

    onMount(() => {
        if (typeof window !== 'undefined') window.addEventListener('keydown', handleKeydown);
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

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('keydown', handleKeydown);
            document.body.style.overflow = '';
        }
    });

    beforeNavigate(() => closeModal());
</script>

<Navbar />

<!-- Page header -->
<div class="bg-surface border-b border-ink-faint/30 pt-10 pb-12 reveal">
    <div class="max-w-site mx-auto px-5 lg:px-16">
        <p class="text-[10px] font-semibold tracking-[0.22em] uppercase text-sage mb-4">Our Work</p>
        <h1 class="font-display font-bold text-ink leading-tight" style="font-size: clamp(2rem, 4vw, 3rem);">
            Gallery
        </h1>
        <p class="text-ink-variant mt-3 max-w-xl leading-relaxed">
            Moments of compassion captured — from daily feeding runs to community gatherings.
        </p>
    </div>
</div>

<!-- Masonry grid -->
<div class="bg-surface-high reveal">
    <div class="gallery-grid">
        {#each galleryItems as item}
            <button
                class="gallery-item {item.size} group"
                on:click={() => openModal(item.image, item.title, item.category)}
                aria-label="View {item.title}"
            >
                <img src={item.image} alt={item.title} class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <div class="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end p-5">
                    <span class="text-[9px] tracking-[0.18em] uppercase text-white/0 group-hover:text-white/80 transition-colors duration-300 font-semibold">{item.category}</span>
                </div>
            </button>
        {/each}
    </div>
</div>

<!-- Modal -->
{#if showModal}
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
    class="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    on:click={closeModal}
    on:keydown={handleKeydown}
    tabindex="-1"
>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
        class="relative max-w-5xl w-full"
        on:click|stopPropagation
        on:keydown|stopPropagation
        role="document"
    >
        <button
            class="absolute -top-10 right-0 text-on-charcoal/60 hover:text-on-charcoal transition-colors text-[10px] tracking-[0.15em] uppercase font-semibold flex items-center gap-2"
            on:click={closeModal}
            aria-label="Close"
        >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            Close
        </button>
        <img src={currentImage} alt={currentTitle} class="w-full max-h-[80vh] object-contain rounded" />
        <div class="pt-4 flex items-center justify-between">
            <div>
                <p id="modal-title" class="font-display font-semibold text-on-charcoal capitalize">{currentTitle}</p>
                <p class="text-[10px] tracking-[0.16em] uppercase text-on-charcoal/45 mt-0.5">{currentCategory}</p>
            </div>
        </div>
    </div>
</div>
{/if}

<Footer />

<style>
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-rows: 280px;
        gap: 2px;
    }

    .gallery-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border: none;
        padding: 0;
        background: #E9E0E1;
        display: block;
    }

    .gallery-item.large  { grid-column: span 4; grid-row: span 2; }
    .gallery-item.medium { grid-column: span 2; grid-row: span 2; }
    .gallery-item.small  { grid-column: span 2; grid-row: span 1; }

    @media (max-width: 1024px) {
        .gallery-grid { grid-template-columns: repeat(4, 1fr); }
        .gallery-item.large  { grid-column: span 4; }
        .gallery-item.medium { grid-column: span 2; }
        .gallery-item.small  { grid-column: span 2; }
    }

    @media (max-width: 640px) {
        .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
        .gallery-item.large,
        .gallery-item.medium { grid-column: span 2; }
        .gallery-item.small  { grid-column: span 1; }
    }
</style>
  