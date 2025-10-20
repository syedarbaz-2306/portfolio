import { writable, type Writable } from "svelte/store";

export const sections = ["home", "about", "experience", "projects", "contact"];

export const activeSection: Writable<string> = writable('home');

export function setActiveSection(section: string) {
	activeSection.set(section);
	console.log("Active Section:", section);
	scrollToSection(section);
}

export function setIntersectingSection(section: string) {
	activeSection.set(section);
}

function scrollToSection(section: string) {
	const element = document.getElementById(section);
	element?.scrollIntoView({ behavior: "smooth" });
}
