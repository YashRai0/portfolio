/** Journey / timeline data — verified dates and honest descriptions */

export interface TimelineItem {
  id: string;
  dateRange: string;
  title: string;
  description: string;
  position: number;
}

export const timeline: TimelineItem[] = [
  {
    id: "tl-1",
    dateRange: "2026 — Present",
    title: "Production Projects & Career Preparation",
    description:
      "Building and deploying production web applications. ResumeAI4U live on Vercel. Developing 2ambuddy with RAG pipeline. Completing technical training and preparing for internships.",
    position: 1,
  },
  {
    id: "tl-2",
    dateRange: "2025 — 2026",
    title: "AI & LLM Exploration + Full-Stack Development",
    description:
      "Explored AI/LLM APIs (Groq, Claude, Gemini). Built RAG pipelines and prompt engineering workflows. Completed NETCAMP training in networking, web development, and Android.",
    position: 2,
  },
  {
    id: "tl-3",
    dateRange: "2024 — 2025",
    title: "Web Development + Full-Stack Learning",
    description:
      "Learned React, Node.js, Express, and REST APIs. Started building practical full-stack applications. Began integrating AI APIs into projects.",
    position: 3,
  },
  {
    id: "tl-4",
    dateRange: "2024",
    title: "BCA · Started at United Institute of Management (FUGS)",
    description:
      "Began Bachelor of Computer Applications. Learned C, Python, HTML, CSS, and programming fundamentals. First programs, first bugs.",
    position: 4,
  },
];
