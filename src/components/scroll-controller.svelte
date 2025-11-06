<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  // 💡 Corrected: Assuming scrollController.ts is the file holding this function
  import { setIntersectingSection } from '../lib/stores/activeSection';

  // State
  let element: HTMLElement;
  let isVisible = $state(false);

  // ✅ All props defined in a single $props() declaration using object destructuring.
  let { 
    children, 
    sectionId, 
    threshold = 0.6, // Default values are set here
    distance = 50, 
    duration = 1200 
  }: {
    children: Snippet;
    sectionId: 'home' | 'about' | 'experience' | 'projects' | 'contact';
    threshold?: number;
    distance?: number;
    duration?: number;
  } = $props();


  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element entered the viewport
            isVisible = true; 
            // Update the scroll controller store for navigation highlight
            setIntersectingSection(sectionId);
            // Optionally stop observing after first time to prevent re-animation on scroll down/up
            // observer.unobserve(element); 
          } else {
             // Optional: If scrolling back up, reset visibility for re-animation on the next scroll down
             // Use a small positive margin to ensure the next section only becomes visible after the previous one is mostly off-screen.
             if (entry.boundingClientRect.top > 0) {
                 isVisible = false;
             }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: threshold, 
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  });

  // ✅ FIX: Dynamic style is now correctly defined using $derived in runes mode.
  const animationStyle = $derived(`
    transition-duration: ${duration}ms;
    --translate-y-start: ${distance}px;
  `);

</script>

<section 
  bind:this={element} 
  id={sectionId} 
  class="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
>
  <!-- The inner wrapper for the animation -->
  <div 
    class="mx-auto transition-all ease-out"
    style={animationStyle}
    class:opacity-100={isVisible}
    class:translate-y-0={isVisible}
    class:opacity-0={!isVisible}
    class:translate-y-[var(--translate-y-start)]={!isVisible}
  >
    <!-- Svelte 5: Render the children prop (slot content) -->
    {#if children}
      {@render children()}
    {/if}
  </div>
</section>
