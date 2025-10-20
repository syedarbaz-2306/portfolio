<script lang="ts">
  import { portfolio } from '../../lib/stores/portfolio';
	import ScrollController from '../scroll-controller.svelte';

  $effect(()=>{
    console.log("about");
  });
</script>

<ScrollController sectionId='about' threshold={0.6} distance={50} duration={1200}>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center">About Me</h2>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <p class="text-lg text-muted-foreground leading-relaxed">
          {$portfolio.personal.bio}
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span class="text-muted-foreground">5+ years of professional experience</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span class="text-muted-foreground">Full-stack development expertise</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span class="text-muted-foreground">Cloud & DevOps proficiency</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        {#each $portfolio.skills as skillGroup}
          <div class="p-6 bg-card border border-border rounded-lg hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10">
            <h3 class="font-semibold text-blue-400 mb-3">{skillGroup.category}</h3>
            <ul class="space-y-2">
              {#each skillGroup.items.slice(0, 3) as skill}
                <li class="text-sm text-muted-foreground">{skill}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
</ScrollController>
