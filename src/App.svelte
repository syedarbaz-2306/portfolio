<script lang="ts">
	import { portfolio } from "./lib/stores/portfolio";
	import Navigation from "./components/navigation.svelte";
	import HeroSection from "./components/sections/hero-section.svelte";
	import ExperienceSection from "./components/sections/experience-section.svelte";
	import ProjectsSection from "./components/sections/projects-section.svelte";
	import ContactSection from "./components/sections/contact-section.svelte";
	import SkillsSection from "./components/sections/skills-section.svelte";
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
	<ExperienceSection />
	<ProjectsSection />
	<SkillsSection />
	<ContactSection />
</div>
