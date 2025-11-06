import { writable } from "svelte/store";

const portfolioData = {
	personal: {
		name: "Syed Arbaz",
		title: "Full Stack Developer",
		email: "syedarbaz1605@gmail.com",
		phone: "+918792120918",
		location: "Bangalore, India",
		bio: "My expertise lies in developing unified solutions from web portals to cross platform mobile apps that securely and efficiently consume complex external APIs. I excel at translating critical business requirements into robust, scalable, and user-centric software, bridging the frontend experience with backend logic and ensuring seamless performance across all devices.",
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
			skills: ["Flutter", "React", "Svelte", "Go", "Java", "TypeScript", "Dart", "n8n", "Provider(Bloc/Riverpod)"],
		},
	],
	skills: [
		{
			category: "Frontend",
			items: ["Flutter", "React", "Svelte Kit", "TypeScript", "Tailwind CSS", "Next.js", "Provider(Bloc/RiverPod)", "Redux", "Svelte(Store)"],
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
			title: "MVIL Public Service Web Portal (CTP Insurance & Registration)",
			subTitle: "Full-Stack Web Application / Government-Service Web Portal",
			description: "a centralized, user-friendly digital platform for citizens of PNG to access insurance, registration, and driver licensing services.",
			image: "https://mvil.com.pg/",
			technologies: ["Svelte Kit", "Tailwind CSS", "Axios", "Nodejs", "Express", "GrapghQl", "Postgres"],
			link: "https://mvil.com.pg/",
			keyFeaturesImpl: ["Information Architecture: Developed a clear site structure for core services (CTP, Registration, Licensing, Claims).", "Online Service Tools: Implemented forms and logic for Get a Quote, Make a Claim, and access to Downloadable Forms.", "Responsive Design: Ensured a seamless, accessible experience across desktop and mobile devices.", "Content Management System: Integrated a system for timely updates to News and Branch details."],
			featured: false,
		},
		{
			id: 2,
			title: "CMIS Client-Side Development (Web Portal & Flutter Mobile App)",
			subTitle: "Enterprise Resource Planning (ERP) / Management Information System (MIS)",
			description: "build two distinct, high-fidelity frontends (Web and Mobile) capable of securely consuming data via a predefined RESTful API to manage cocoa operations.",
			image: "",
			technologies: ["Flutter", "React", "Tailwind CSS", "Axios", "Redux(React)", "Provider(Flutter)"],
			link: "https://cmis.cocoaboard.org.pg/",
			keyFeaturesImpl: ["Frontend Architecture:implemented a scalable component structure for both the web (React) and mobile (Flutter) applications.", "API Integration: Managed all client-side logic for secure token-based authentication (JWTs) and integrating endpoints for data fetching and submission.", "UI/UX Development: Implemented the complete visual design, focusing on data visualization, input forms, and role-based view logic for different users (farmer vs. inspector)."],
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

export function updatePortfolio(updates: any) {
	portfolio.update((data) => ({ ...data, ...updates }));
}

export function updatePersonal(updates: any) {
	portfolio.update((data) => ({
		...data,
		personal: { ...data.personal, ...updates },
	}));
}

export function updateExperience(id: number, updates: any) {
	portfolio.update((data) => ({
		...data,
		experience: data.experience.map((exp) => (exp.id === id ? { ...exp, ...updates } : exp)),
	}));
}

export function updateProject(id: number, updates: any) {
	portfolio.update((data) => ({
		...data,
		projects: data.projects.map((proj) => (proj.id === id ? { ...proj, ...updates } : proj)),
	}));
}
