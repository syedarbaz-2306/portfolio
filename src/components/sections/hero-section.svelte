<script lang="ts">
	import { portfolio } from "../../lib/stores/portfolio";
	import { scrollToSection } from "../../lib/stores/activeSection";
</script>

<div
	id="about"
	class="min-h-screen flex flex-col justify-center items-center xl:max-w-4xl mx-auto text-center p-3"
>
	<div class="transition-all duration-1000">
		<h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
			<span class="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
				{$portfolio.personal.name}
			</span>
		</h1>

		<p class="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance text-shimmer">
			{$portfolio.personal.title}
		</p>

		<p class="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
			{$portfolio.personal.summary}
		</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<button
				onclick={() => scrollToSection("projects")}
				class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
			>
				View My Work
			</button>
			<button
				onclick={() => scrollToSection("contact")}
				class="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-medium transition-all duration-300"
			>
				Get In Touch
			</button>
		</div>
	</div>

	<div class="mt-20 animate-bounce">
		<svg
			class="w-6 h-6 mx-auto text-blue-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>
	</div>
</div>
