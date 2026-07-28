const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yashrai.dev";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yash Rai",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    jobTitle: "AI Full Stack Developer",
    description:
      "AI Full Stack Developer building production-ready SaaS products with React, TypeScript, Node.js, Generative AI, Docker, and modern cloud technologies.",
    email: "yashrai6635@gmail.com",
    sameAs: [
      "https://github.com/YashRai0",
      "https://www.linkedin.com/in/yash-rai-1a218433b",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "Generative AI",
      "RAG Pipelines",
      "Docker",
      "CI/CD",
      "LangChain",
      "OpenAI",
      "Gemini",
      "Claude",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Prompt Engineering",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "United Institute of Management, FUGS",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prayagraj",
        addressCountry: "IN",
      },
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yash Rai — AI Full Stack Developer",
    url: SITE_URL,
    description:
      "Portfolio of Yash Rai — AI Full Stack Developer building production-ready SaaS products.",
    author: {
      "@type": "Person",
      name: "Yash Rai",
    },
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };
}

export function getFAQSchema() {
  const faqs = [
    {
      question: "What does Yash Rai specialize in?",
      answer:
        "Yash Rai is an AI Full Stack Developer who builds production-ready SaaS products. He specializes in React, TypeScript, Node.js, Generative AI (OpenAI, Gemini, Claude), RAG pipelines, Docker, and CI/CD. He focuses on building AI-powered applications that solve real-world problems.",
    },
    {
      question: "What is ResumeAI4U?",
      answer:
        "ResumeAI4U is a live SaaS product built by Yash in 2026 that helps job seekers beat ATS filters. It uses Groq API for real-time resume analysis against job descriptions, providing instant ATS scores, keyword gap analysis, and line-by-line optimization. Built with React, Node.js, Groq API, Razorpay for payments, and Clerk for authentication.",
    },
    {
      question: "What is the AI Study Assistant?",
      answer:
        "The AI Study Assistant is a live AI-powered study platform (ai-study-assistant-0.vercel.app) built in 2026. It transforms PDFs and notes into interactive learning experiences using RAG (Retrieval-Augmented Generation). Features include AI chat with your notes, smart summaries, flashcard generation, quiz creation, and progress tracking. Built with React, TypeScript, Node.js, and vector databases.",
    },
    {
      question: "What technologies does Yash work with?",
      answer:
        "Frontend: React, TypeScript, JavaScript, Tailwind CSS. Backend: Node.js, Express. Database: Supabase, PostgreSQL. AI: OpenAI, Gemini, Claude, LangChain, Prompt Engineering. DevOps: Git, GitHub, Docker, CI/CD, Vercel. Tools: VS Code, Postman, Figma.",
    },
    {
      question: "Is Yash available for internships?",
      answer:
        "Yes. Yash is actively seeking Software Engineering, AI, and Full Stack internships. He is open to remote positions or opportunities in Prayagraj, India. He has a proven track record of building production-ready AI products. Contact him at yashrai6635@gmail.com.",
    },
    {
      question: "What certifications does Yash have?",
      answer:
        "Yash holds certifications in Oracle Cloud Infrastructure AI Foundations, IBM SkillsBuild Generative AI for Data Analytics, Microsoft Power Automate, and Prompt Engineering & Generative AI. These demonstrate his commitment to continuous learning in AI and cloud technologies.",
    },
    {
      question: "How can I contact Yash Rai?",
      answer:
        "Email: yashrai6635@gmail.com. LinkedIn: linkedin.com/in/yash-rai-1a218433b. GitHub: github.com/YashRai0. He responds within 24 hours.",
    },
    {
      question: "What makes Yash different from other developers?",
      answer:
        "Yash ships production AI products, not just demos. He has a live SaaS with payments and auth (ResumeAI4U), understands full RAG pipeline architecture, uses modern DevOps (Docker, CI/CD), and holds industry certifications. He focuses on engineering decisions and real-world impact, not just listing technologies.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
