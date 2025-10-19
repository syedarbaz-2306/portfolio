<script lang="ts">
  import { portfolio } from '../../lib/stores/portfolio';
</script>

<section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

    <div class="grid md:grid-cols-2 gap-8">
      {#each $portfolio.projects as project, index}
        <div
          class="group relative overflow-hidden rounded-lg border border-border hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/20"
          style="animation: fadeInUp 0.6s ease-out {index * 0.15}s both"
        >
          <div class="relative h-64 overflow-hidden bg-secondary">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
            <p class="text-muted-foreground mb-4 text-sm">{project.description}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.technologies as tech}
                <span class="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded border border-blue-400/30">
                  {tech}
                </span>
              {/each}
            </div>

            <a
              href={project.link}
              class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Project
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
