<script>
  import { flip } from 'svelte/animate';
  let items = [1, 2, 3];
</script>

<button on:click={() => items.reverse()}>Flip!</button>

{#each items as item (item)}
  <div animate:flip>{item}</div>
{/each}
