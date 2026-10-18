/** Project data — verified features, honest descriptions */

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  stack: string[];
  screenshot?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl: string;
  status: "live" | "in_progress" | "completed";
  position: number;
}

export const projects: Project[] = [
  {
    id: "prepnexia",
    slug: "prepnexia",
    title: "Prepnexia (2ambuddy)",
    category: "AI STUDY ASSISTANT",
    subtitle: "RAG-Powered Document Learning Platform",
    description:
      "An AI-powered study application designed to help users turn notes and textbooks into instant answers, chapter summaries, flashcards, and practice quizzes — grounded exclusively in uploaded study materials.",
    stack: ["React", "Node.js", "Groq API", "MongoDB", "RAG Pipeline"],
    screenshot: "/screenshots/2ambuddy.svg",
    liveUrl: "https://2ambuddy.vercel.app",
    githubUrl: "https://github.com/YashRai0",
    caseStudyUrl: "/work/prepnexia",
    status: "live",
    position: 1,
  },
  {
    id: "resumeai4u",
    slug: "resumeai4u",
    title: "ResumeAI4u",
    category: "RESUME OPTIMIZATION",
    subtitle: "AI ATS Match & Keyword Analyzer",
    description:
      "A resume optimization application designed to help users improve their resumes. Analyzes resume content against target job descriptions to produce ATS compatibility scores, pinpoint missing keywords, and suggest targeted improvements.",
    stack: ["React", "Node.js", "Groq API", "Vercel"],
    screenshot: "/screenshots/resumeai4u.svg",
    liveUrl: "https://resumeai4u.vercel.app/",
    githubUrl: "https://github.com/YashRai0/resume-optimizer",
    caseStudyUrl: "/work/resumeai4u",
    status: "live",
    position: 2,
  },
];

