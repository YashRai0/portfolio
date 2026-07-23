export const mockSiteContent = {
  hero_name: "Yash Rai",
  hero_tagline: "BCA student at United Institute of Management, FUGS. Building AI-powered web products with React, Node.js, and Claude API.",
  about_text: "I'm Yash Rai, a BCA student at United Institute of Management, FUGS, currently in my 5th semester. I build full-stack web apps with a focus on AI-powered products that are actually useful. I'm drawn to the intersection of design and engineering — creating interfaces that feel alive. Currently exploring AI APIs, rapid prototyping, and building products that scale. When I'm not coding, I'm learning OS internals, debugging algorithms, or crafting LinkedIn posts about what I've built.",
  stats: {
    tech_stacks: "3+",
    semester: "5th"
  }
};

export const mockProjects = [
  {
    id: "proj-1",
    title: "Resume Optimizer",
    description: "AI-powered resume analyzer built with Claude API. Upload a resume, paste a JD, and get instant optimization suggestions, ATS score, and tailored improvements.",
    stack: ["React", "Node.js", "Claude API", "Stripe", "Clerk"],
    live_url: "https://resumeai4u.vercel.app/",
    github_url: "https://github.com/YashRai0/resume-optimizer",
    status: "completed",
    position: 1
  },
  {
    id: "proj-2",
    title: "README Auto-Generator",
    description: "Paste your project code or describe it — the app generates a production-ready README with badges, setup instructions, and API docs using Claude AI.",
    stack: ["React", "Tailwind", "Claude API", "Lovable"],
    live_url: "#",
    github_url: "#",
    status: "completed",
    position: 2
  },
  {
    id: "proj-3",
    title: "AI MCQ Generator",
    description: "Built for BCA exam prep — paste any topic and instantly generate MCQ questions with explanations. Used by classmates before OS & SE exams.",
    stack: ["React", "Anthropic API", "Vite"],
    live_url: "#",
    github_url: "#",
    status: "concept",
    position: 3
  },
  {
    id: "proj-4",
    title: "Sales Flow Automation",
    description: "Power Automate flow that reads Excel data, filters based on criteria, formats an HTML table, and emails a daily sales report — zero manual effort.",
    stack: ["Power Automate", "SharePoint", "Excel"],
    live_url: "",
    github_url: "",
    status: "completed",
    position: 4
  },
  {
    id: "proj-5",
    title: "Python Study Guide",
    description: "Interactive React app covering NumPy, Pandas, Matplotlib, Scikit-learn for BCA Sem V exam — with live code examples and a built-in quiz.",
    stack: ["React", "Tailwind"],
    live_url: "",
    github_url: "",
    status: "completed",
    position: 5
  }
];

export const mockSkills = [
  {
    id: "skill-1",
    category: "Frontend",
    icon: "⚛️",
    skills: ["React", "HTML5", "CSS3", "Tailwind", "JavaScript"],
    accent: true,
    position: 1
  },
  {
    id: "skill-2",
    category: "Languages",
    icon: "🐍",
    skills: ["Python", "JavaScript", "C", "SQL"],
    accent: false,
    position: 2
  },
  {
    id: "skill-3",
    category: "AI / ML",
    icon: "🤖",
    skills: ["Claude API", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    accent: true,
    position: 3
  },
  {
    id: "skill-4",
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Lovable", "Cursor", "Bolt", "Git", "VS Code", "Stripe", "Clerk"],
    accent: false,
    position: 4
  },
  {
    id: "skill-5",
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "REST APIs"],
    accent: false,
    position: 5
  },
  {
    id: "skill-6",
    category: "CS Fundamentals",
    icon: "🎓",
    skills: ["OS", "DBMS", "Software Engg.", "DSA"],
    accent: false,
    position: 6
  }
];

export const mockJourney = [
  {
    id: "journey-1",
    date_range: "2026 — Present",
    title: "Building AI-Powered Products",
    sub: "Resume Optimizer, README Generator · Claude API · Stripe · Clerk",
    position: 1
  },
  {
    id: "journey-2",
    date_range: "2025",
    title: "BCA · 5th Semester",
    sub: "Python, ML Libraries, Power Automate · IBM SkillsBuild GenAI Badge",
    position: 2
  },
  {
    id: "journey-3",
    date_range: "2024",
    title: "Deep-Dived into Web Dev",
    sub: "React, Node.js, APIs · Started rapid prototyping with Lovable & Cursor",
    position: 3
  },
  {
    id: "journey-4",
    date_range: "2023",
    title: "BCA · 1st Year · United Institute of Management, FUGS",
    sub: "C, HTML, CSS, Python fundamentals · First programs, first bugs 🐛",
    position: 4
  }
];
