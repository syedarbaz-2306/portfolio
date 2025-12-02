<script lang="ts">
	import { portfolio } from "../../lib/stores/portfolio";
	import scrollAnimate from "../../lib/actions/scrollAnimate";
	import { setActiveSection } from "../../lib/stores/activeSection";
</script>

<div
	id="experience"
	class="min-h-screen flex flex-col justify-center items-center max-w-4xl mx-auto transition-all duration-1000"
>
	<h2 class="text-4xl font-bold mb-12 text-center">Experience</h2>

	<div class="space-y-8">
		{#each $portfolio.experience as exp, index}
			<div
				class="group p-6 border border-border rounded-lg hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10 hover:bg-secondary/50"
				style="animation: slideIn 0.6s ease-out {index * 0.1}s both"
			>
				<div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
					<div>
						<h3 class="text-xl font-semibold text-blue-400">{exp.position}</h3>
						<p class="text-muted-foreground">{exp.company}</p>
					</div>
					<span class="text-sm text-muted-foreground mt-2 md:mt-0">{exp.duration}</span>
				</div>

				<p class="text-muted-foreground mb-4">{exp.description}</p>

				<div class="flex flex-wrap gap-2">
					{#each exp.skills as skill}
						<span class="px-3 py-1 bg-blue-400/10 text-blue-400 text-sm rounded-full border border-blue-400/30">
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
