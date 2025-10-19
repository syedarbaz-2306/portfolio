<script lang="ts">
	import { portfolio } from "./lib/stores/portfolio";
	import Navigation from "./components/navigation.svelte";
	import HeroSection from "./components/hero-section.svelte";
	import AboutSection from "./components/about-section.svelte";
	import ExperienceSection from "./components/experience-section.svelte";
	import ProjectsSection from "./components/projects-section.svelte";
	import ContactSection from "./components/contact-section.svelte";
	const name = $portfolio.personal.name;
	const title = $portfolio.personal.title;
</script>

<svelte:head>
	<title>{name} - {title}</title>
	<meta
		name="description"
		content="Professional portfolio of {name}, {title}"
	/>
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
	<Navigation />
	<HeroSection />
	<AboutSection />
	<ExperienceSection />
	<ProjectsSection />
	<ContactSection />
</div>
