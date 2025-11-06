<script lang="ts">
	import { portfolio } from "../../lib/stores/portfolio";
</script>

<div id="contact" class="min-h-screen flex flex-col justify-center items-center xl:max-w-2xl mx-auto p-4">
	<h2 class="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

	<div class="grid md:grid-cols-2 gap-12">
		<div class="space-y-6">
			<p class="text-muted-foreground">I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>

			<div class="flex gap-4 pt-4">
				{#each $portfolio.social as social}
					<a
						href={social.url}
						class="w-10 h-10 bg-blue-400/10 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-400/20 transition-colors"
						title={social.name}
					>
						<svg
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							{#if social.icon === "github"}
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							{:else if social.icon === "linkedin"}
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.192 0 1.915.753 1.94 1.708 0 .949-.748 1.707-1.988 1.707zm1.582 11.02H3.819V9.934h3.1v10.518zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
							{:else if social.icon === "twitter"}
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
							{/if}
						</svg>
					</a>
				{/each}
			</div>
		</div>

		<div class="space-y-4">
			<div class="flex items-center gap-4">
				<div class="w-10 h-10 bg-blue-400/10 rounded-lg flex items-center justify-center">
					<svg
						class="w-5 h-5 text-blue-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<div>
					<p class="text-sm text-muted-foreground">Email</p>
					<a
						href="mailto:{$portfolio.personal.email}"
						class="text-blue-400 hover:text-blue-300"
					>
						{$portfolio.personal.email}
					</a>
				</div>
			</div>

			<div class="flex items-center gap-4">
				<div class="w-10 h-10 bg-blue-400/10 rounded-lg flex items-center justify-center">
					<svg
						class="w-5 h-5 text-blue-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>
				</div>
				<div>
					<p class="text-sm text-muted-foreground">Phone</p>
					<a
						href="tel:{$portfolio.personal.phone}"
						class="text-blue-400 hover:text-blue-300"
					>
						{$portfolio.personal.phone}
					</a>
				</div>
			</div>
		</div>

		<!-- <form
				onsubmit={handleSubmit}
				class="space-y-4"
			>
				<div>
					<label
						for="name"
						class="block text-sm font-medium mb-2">Name</label
					>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						class="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
						placeholder="Your name"
					/>
				</div>

				<div>
					<label
						for="email"
						class="block text-sm font-medium mb-2">Email</label
					>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						class="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
						placeholder="your@email.com"
					/>
				</div>

				<div>
					<label
						for="message"
						class="block text-sm font-medium mb-2">Message</label
					>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						rows="5"
						class="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
						placeholder="Your message..."
					></textarea>
				</div>

				<button
					type="submit"
					class="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
				>
					{submitted ? "✓ Message Sent!" : "Send Message"}
				</button>
			</form> -->
	</div>
</div>
