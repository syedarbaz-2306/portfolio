import { writable } from "svelte/store";

const portfolioData = {
	personal: {
		name: "Syed Arbaz",
		title: "Full Stack Developer",
		email: "syedarbaz1605@gmail.com",
		phone: "+918792120918",
		location: "Bangalore, India",
		summary: "Results-driven Software Engineer with experience in full-stack development and a strong focus on building scalable, user-centric applications. Proficient in modern web and mobile technologies, with a proven ability to deliver high-quality solutions in fast-paced startup environments. Adept at collaborating with cross-functional teams to drive product innovation and improve user experiences.",
	},
	social: [
		{
			name: "GitHub",
			url: "https://github.com/syedarbaz-2306",
			icon: "github",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/syedarbaz1605/",
			icon: "linkedin",
		},
	],
	experience: [
		{
			id: 1,
			company: "Brewszilla Technologies Pvt ltd",
			position: "Full Stack Developer",
			duration: "2024 Feb - Present",
			description: "I serve as a Full-Stack Developer at Brewszilla Technologies, responsible for, developing, and integrating complete software solutions across web and mobile platforms. My expertise bridges the gap between client-side user experience and robust API interaction, ensuring seamless functionality and data integrity.",
			responsibilities: [],
			skills: ["Flutter", "React", "Svelte", "Go", "Java", "TypeScript", "Dart", "n8n", "State Management(Bloc/Riverpod)"],
		},
	],
	skills: [
		{
			category: "Frontend",
			items: ["Flutter", "React", "Svelte Kit", "TypeScript", "Tailwind CSS", "Next.js", "State Management(Bloc/Riverpod)", "Redux", "Svelte(Store)"],
		},
		{
			category: "Backend",
			items: ["Java", "PostgreSQL", "Go", "Express.js", "Node.js"],
		},
		{
			category: "DevOps & Tools",
			items: ["Docker", "AWS", "Git", "Bronu", "Postman"],
		},
		{
			category: "Soft Skills",
			items: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Mentoring"],
		},
	],
	projects: [
		{
			id: 1,
			title: "Brewszilla Meetup Booking and Management Platform",
			subTitle: "",
			description: "",
			image: "",
			technologies: ["Golang", "Svelte kit", "PostgreSQL", "Hasura", "GraphQL", "RazorPay"],
			link: "https://brewszilla.com/meetup",
			keyFeaturesImpl: ["Developed a full-service event management and booking platform connecting users with partner venues to host organized social and professional meetups.", "The system allows users to browse and reserve spots at various events, categorized as Singles or Corporate Meets.","Facilitates seamless internal collaboration with third-party outlets, managing event scheduling and venue availability visible on the website for user sign-ups."],
			featured: false,
		},
		{
			id: 2,
			title: "Cocoa Management Information System (CMIS App)",
			subTitle: "",
			description: "",
			image: "",
			technologies: ["Flutter", "State Management(Bloc/Riverpod)", "sqflite", "Dio"],
			link: "https://cmis.cocoaboard.org.pg/",
			keyFeaturesImpl: ["Developed a mobile application to manage farmer and farmer group data with both online and offline functionality.", "Implemented local offline storage using SQLite, allowing the app to function fully without internet.", "Built an automated sync mechanism that uploads offline records to the main PostgreSQL database once the device reconnects to the internet, removing local copies to prevent duplication.","Enabled real-time global access to synced data for all authorized users."],
			featured: false,
		},
		{
			id: 3,
			title: "MVIL Public Service Web Portal (CTP Insurance & Registration)",
			subTitle: "",
			description: "",
			image: "https://mvil.com.pg/",
			technologies: ["SvelteKit", "Tailwind CSS", "GraphQL", "Hasura", "PostgreSQL"],
			link: "https://mvil.com.pg/",
			keyFeaturesImpl: ["Developed official corporate and service portal for Motor Vehicles Insurance Ltd (MVIL).", "The portal serves as the central digital interface for accessing critical government-mandated motor vehicle services in PNG.", "It provides comprehensive public information and facilitates procedures for Compulsory Third Party (CTP) Insurance and quotes.", "The platform supports official processes for Vehicle Registration and Driver's License services.", "It includes a dedicated section for Claims Management, outlining procedures and providing necessary documentation.","The system streamlines essential civic processes for a large user base of CTP policyholders."],
			featured: false,
		},
	],
};

export const portfolio = writable(portfolioData);

export function navIcon(): string {
	const words = portfolioData.personal.name.trim().split(/\s+/);

	const firstCharacters = words.filter((word) => word.length > 0).map((word) => word[0].toUpperCase());

	const navLogo = firstCharacters.join("");
	return navLogo;
}
