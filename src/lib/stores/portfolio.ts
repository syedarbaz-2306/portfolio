import { writable } from "svelte/store";

const portfolioData = {
	personal: {
		name: "Syed Arbaz",
		title: "Full Stack Developer",
		email: "syedarbaz1605@gmail.com",
		phone: "+918792120918",
		location: "Bangalore, India",
		bio: "Passionate full-stack developer with 1+ years of experience building scalable web applications. Specialized in modern JavaScript frameworks, cloud technologies, and creating seamless user experiences.",
		summary: "I'm a full-stack developer passionate about crafting accessible, pixel-perfect digital experiences that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
	},
	social: [
		{
			name: "GitHub",
			url: "https://github.com",
			icon: "github",
		},
		{
			name: "LinkedIn",
			url: "https://linkedin.com",
			icon: "linkedin",
		},
	],
	experience: [
		{
			id: 1,
			company: "Brewszilla Technologies Pvt ltd",
			position: "Full Stack Developer",
			duration: "2024 - Present",
			description: "Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines and improved application performance by 40%.",
			skills: ["Node.js", "React", "PostgreSQL", "Docker", "AWS"],
		},
	],
	skills: [
		{
			category: "Frontend",
			items: ["React", "Vue.js", "Svelte", "TypeScript", "Tailwind CSS", "Next.js"],
		},
		{
			category: "Backend",
			items: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "Firebase"],
		},
		{
			category: "DevOps & Tools",
			items: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Webpack"],
		},
		{
			category: "Soft Skills",
			items: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Mentoring"],
		},
	],
	projects: [
		{
			id: 1,
			title: "E-Commerce Platform",
			description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
			image: "/ecommerce-platform.jpg",
			technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
			link: "https://github.com",
			featured: true,
		},
		{
			id: 2,
			title: "Task Management App",
			description: "Collaborative task management application with real-time updates, team collaboration features, and analytics.",
			image: "/task-management-board.png",
			technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
			link: "https://github.com",
			featured: true,
		},
		{
			id: 3,
			title: "AI Chat Interface",
			description: "Modern chat application with AI integration, message history, and user authentication.",
			image: "/ai-chat.jpg",
			technologies: ["Next.js", "OpenAI API", "MongoDB", "Socket.io"],
			link: "https://github.com",
			featured: false,
		},
		{
			id: 4,
			title: "Analytics Dashboard",
			description: "Real-time analytics dashboard with data visualization, custom reports, and export functionality.",
			image: "/analytics-dashboard.png",
			technologies: ["React", "D3.js", "Express.js", "PostgreSQL"],
			link: "https://github.com",
			featured: false,
		},
	],
};

export const portfolio = writable(portfolioData);

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
