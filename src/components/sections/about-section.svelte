<script lang="ts">
	import { portfolio } from "../../lib/stores/portfolio";

	$effect(() => {
		console.log("about");
	});
</script>

<div id="about" class="min-h-screen flex flex-col justify-center items-center xl:max-w-7xl mx-auto p-4">
	<h2 class="text-4xl font-bold mb-12 text-center">About Me</h2>

	<div class="grid md:grid-cols-2 gap-12 items-center">
		<div class="space-y-6">
			<p class="text-lg text-muted-foreground leading-relaxed">
				{$portfolio.personal.bio}
			</p>
			<!-- <div class="space-y-4">
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
        </div> -->
		</div>

		<div class="grid grid-cols-2 gap-4">
			{#each $portfolio.skills as skillGroup}
				<div class="p-3 bg-card border border-border rounded-lg hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10 animate-zoom-in">
					<h3 class="font-semibold text-blue-400 mb-3">{skillGroup.category}</h3>
					<div class="space-y-2 flex flex-wrap">
						{#each skillGroup.items as skill}
							<span class="px-3 py-1 m-1.5 bg-blue-400/10 text-blue-400 text-xs rounded-full border border-blue-400/30">
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
