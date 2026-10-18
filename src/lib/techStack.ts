/** Evidence-based tech stack — each skill linked to actual projects */

export interface TechSkill {
  name: string;
  usedIn: string[];
}

export interface TechCategory {
  id: string;
  category: string;
  icon: string;
  skills: TechSkill[];
}

export const techStack: TechCategory[] = [
  {
    id: "ts-1",
    category: "Frontend",
    icon: "⚛️",
    skills: [
      { name: "React", usedIn: ["ResumeAI4U", "2ambuddy", "Portfolio"] },
      { name: "TypeScript", usedIn: ["Portfolio"] },
      { name: "JavaScript", usedIn: ["ResumeAI4U", "2ambuddy", "Portfolio"] },
      { name: "HTML5 / CSS3", usedIn: ["ResumeAI4U", "2ambuddy", "Portfolio"] },
      { name: "Tailwind CSS", usedIn: ["Portfolio"] },
    ],
  },
  {
    id: "ts-2",
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", usedIn: ["ResumeAI4U", "2ambuddy"] },
      { name: "Express.js", usedIn: ["ResumeAI4U", "2ambuddy"] },
      { name: "REST APIs", usedIn: ["ResumeAI4U", "2ambuddy"] },
      { name: "MongoDB", usedIn: ["2ambuddy"] },
    ],
  },
  {
    id: "ts-3",
    category: "AI & LLM",
    icon: "🤖",
    skills: [
      { name: "Groq API", usedIn: ["ResumeAI4U", "2ambuddy"] },
      { name: "Claude API", usedIn: ["Portfolio Chatbot"] },
      { name: "Gemini API", usedIn: ["Portfolio Chatbot"] },
      { name: "RAG Pipeline", usedIn: ["2ambuddy"] },
      { name: "Prompt Engineering", usedIn: ["ResumeAI4U", "2ambuddy"] },
    ],
  },
  {
    id: "ts-4",
    category: "Database & Storage",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", usedIn: ["2ambuddy"] },
      { name: "SQL", usedIn: ["Academic coursework"] },
      { name: "Supabase", usedIn: ["Portfolio"] },
    ],
  },
  {
    id: "ts-5",
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", usedIn: ["All projects"] },
      { name: "Vercel", usedIn: ["ResumeAI4U", "Portfolio"] },
      { name: "VS Code", usedIn: ["All projects"] },
      { name: "Docker", usedIn: ["Learning / experiments"] },
    ],
  },
  {
    id: "ts-6",
    category: "CS Fundamentals",
    icon: "🎓",
    skills: [
      { name: "Data Structures & Algorithms", usedIn: ["BCA coursework"] },
      { name: "Operating Systems", usedIn: ["BCA coursework"] },
      { name: "DBMS", usedIn: ["BCA coursework"] },
      { name: "Software Engineering", usedIn: ["BCA coursework"] },
      { name: "Networking", usedIn: ["NETCAMP training"] },
    ],
  },
  {
    id: "ts-7",
    category: "Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", usedIn: ["ResumeAI4U", "2ambuddy", "Portfolio"] },
      { name: "TypeScript", usedIn: ["Portfolio"] },
      { name: "Python", usedIn: ["Academic projects", "AI exploration"] },
      { name: "C", usedIn: ["BCA coursework"] },
      { name: "Java", usedIn: ["NETCAMP Android training"] },
      { name: "SQL", usedIn: ["BCA coursework"] },
    ],
  },
];
