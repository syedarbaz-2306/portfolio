import { writable, type Writable } from "svelte/store";

export const sections = [ "about", "experience", "projects", "skills", "contact"];

export const activeSection: Writable<string> = writable('about');

export function setActiveSection(section: string) {
	activeSection.set(section);
	console.log("Active Section:", section);
	scrollToSection(section);
}

export function scrollToSection(section: string) {
	const element = document.getElementById(section);
	activeSection.set(section);
	element?.scrollIntoView({ behavior: "smooth" });
}
