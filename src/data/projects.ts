import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Level 0",
    tag: "Product Builder",
    description: "A beginner-friendly builder that helps early builders turn rough project work into clean, editable personal websites.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Template System", "Live Editor", "Vercel"],
    metrics: ["Editable templates", "Live edits", "Code export"],
    repoHref: "https://github.com/ChiraagDubey/Level-0",
    liveHref: "https://levelzero-studio.vercel.app/"
  },
  {
    title: "Privacy-First AI Chat Summarizer",
    tag: "AI Productivity Tool",
    description:
      "A privacy-aware tool that turns noisy group chats into summaries, decisions, action items, and missed context.",
    tech: ["Next.js", "AI APIs", "Supabase", "Neon", "Authentication", "Summarization"],
    metrics: ["Decision summaries", "Privacy-first", "Group context"],
    repoHref: "https://github.com/ChiraagDubey/privacy-first-chat-summarizer",
    liveHref: "https://www.notion.so/Privacy-First-AI-Chat-Summarizer-34cb8a17b409805bbf65f2c06fd15750"
  },
  {
    title: "ResumAI",
    tag: "AI Resume Builder",
    description:
      "An AI-powered tool that helps users create sharper, ATS-friendly resumes with guided content and scoring. It helps turn rough career details into structured, confident resume content faster.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Gemini API", "GPT-4", "Vercel"],
    metrics: [
      "40% faster edits",
      "92% satisfaction",
      "200+ AI calls/week"
    ],
    repoHref: "https://github.com/ChiraagDubey/resumai-pro"
  },
  {
    title: "AI Website Builder / Mobilize",
    tag: "Agentic Code Generation",
    description:
      "An agentic website generation system using LLM agents, sandboxed execution, terminal automation, and debugging flows.",
    tech: ["Next.js", "OpenAI", "Inngest", "E2B Sandbox", "Playwright", "Jest"],
    metrics: ["Sandboxed execution", "Automated debugging flow", "Agentic build orchestration"],
    repoHref: "https://github.com/ChiraagDubey/mobilize"
  },
  {
    title: "Expense Tracker",
    tag: "Java Full-stack App",
    description:
      "A Spring Boot app for tracking income, expenses, balances, and monthly reports using REST APIs.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "Spring Data JPA", "Maven"],
    metrics: ["500+ entries", "50+ users", "Monthly reports"],
    repoHref: "https://github.com/ChiraagDubey/Expense-Tracker"
  },
  {
    title: "Coming Soon",
    tag: "Work in Progress",
    description: "Cooking up something new. Stay tuned.",
    tech: [],
    metrics: []
  }
];
