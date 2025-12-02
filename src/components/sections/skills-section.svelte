<script lang="ts">
	import { portfolio } from "../../lib/stores/portfolio";
	import scrollAnimate from "../../lib/actions/scrollAnimate";
	import { setActiveSection } from "../../lib/stores/activeSection";

	// Merge all skills into a single list
	const allSkills = $derived($portfolio.skills.flatMap((category) => category.items));
</script>

<div
	id="skills"
	class="min-h-screen flex flex-col justify-center items-center xl:max-w-7xl mx-auto p-4 transition-all duration-1000"
>
	<h2 class="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

	<div class="flex flex-wrap justify-center gap-3 max-w-4xl">
		{#each allSkills as skill}
			<span class="px-4 py-2 bg-card border border-border rounded-lg text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10 cursor-default animate-zoom-in">
				{skill}
			</span>
		{/each}
	</div>
</div>
