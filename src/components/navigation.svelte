<script lang="ts">
	import { portfolio } from "../lib/stores/portfolio";
	import { activeSection, setActiveSection } from "../lib/stores/scrollController";

	const words = $portfolio.personal.name.trim().split(/\s+/);

	const firstCharacters: string[] = words.filter((word) => word.length > 0).map((word) => word[0].toUpperCase());

	const navLogo = firstCharacters.join("");
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{navLogo}</div>

			<div class="hidden md:flex gap-8">
				{#each ["home", "about", "experience", "projects", "contact"] as section}
					<button
						onclick={() => setActiveSection(section)}
						class="text-sm font-medium transition-colors duration-300 {$activeSection === section ? 'text-blue-400' : 'text-muted-foreground hover:text-foreground'}"
						aria-label={section.charAt(0).toUpperCase() + section.slice(1)}
					>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</button>
				{/each}
			</div>

			<div class="flex gap-4">
				<a
					href="/about"
					class="text-muted-foreground hover:text-foreground transition-colors"
					aria-label="About"
				>
					<svg
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				</a>
				<a
					href="/contact"
					class="text-muted-foreground hover:text-foreground transition-colors"
					aria-label="Contact"
				>
					<svg
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.192 0 1.915.753 1.94 1.708 0 .949-.748 1.707-1.988 1.707zm1.582 11.02H3.819V9.934h3.1v10.518zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</nav>
