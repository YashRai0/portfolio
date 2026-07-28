const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yashrai.dev";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yash Rai",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer building AI-powered products with React, Node.js & TypeScript. Creator of Resume Optimizer.",
    email: "yashrai6635@gmail.com",
    sameAs: [
      "https://github.com/YashRai0",
      "https://www.linkedin.com/in/yash-rai-1a218433b",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "AI/ML",
      "Tailwind CSS",
      "Supabase",
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
    name: "Yash Rai — Full Stack Developer",
    url: SITE_URL,
    description:
      "Portfolio of Yash Rai — Full Stack Developer building AI-powered products.",
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
        "Yash Rai specializes in full stack development with a focus on AI-powered products. He builds production-ready applications using React, Next.js, TypeScript, Node.js, and integrates AI APIs like Anthropic Claude and Groq for intelligent features.",
    },
    {
      question: "What is Resume Optimizer?",
      answer:
        "Resume Optimizer is a live SaaS product built by Yash Rai that helps job seekers beat ATS (Applicant Tracking System) filters. Users paste their resume and a job description to get an instant ATS score, keyword gap analysis, and line-by-line improvement suggestions. It's built with React, Node.js, Groq API, Razorpay, and Clerk.",
    },
    {
      question: "What technologies does Yash use?",
      answer:
        "Yash works with React, Next.js, TypeScript, Tailwind CSS on the frontend; Node.js, Express, Supabase, MongoDB on the backend; Python, NumPy, Pandas, Scikit-learn for data & ML; and Anthropic Claude API, Groq API, RAG Pipelines for AI integration.",
    },
    {
      question: "Is Yash available for freelance work?",
      answer:
        "Yes, Yash is open to freelance projects, internships (remote or Prayagraj-based), part-time contracts, and AI product collaborations. He typically responds within 24 hours. Contact him at yashrai6635@gmail.com.",
    },
    {
      question: "Where is Yash Rai based?",
      answer:
        "Yash Rai is based in Prayagraj, India. He is currently pursuing his BCA (Bachelor of Computer Applications) at United Institute of Management, FUGS. He is open to remote work opportunities worldwide.",
    },
    {
      question: "What is Yash's educational background?",
      answer:
        "Yash is a BCA (Bachelor of Computer Applications) student at United Institute of Management, FUGS in Prayagraj, currently in his 5th semester. He has earned an IBM SkillsBuild GenAI Badge and has deep knowledge of CS fundamentals including OS, DBMS, DSA, and Software Engineering.",
    },
    {
      question: "How can I contact Yash Rai?",
      answer:
        "You can reach Yash via email at yashrai6635@gmail.com, through LinkedIn at linkedin.com/in/yash-rai-1a218433b, or check out his work on GitHub at github.com/YashRai0. He responds within 24 hours.",
    },
    {
      question: "What kind of projects does Yash build?",
      answer:
        "Yash builds AI-powered web applications that solve real problems. His notable projects include Resume Optimizer (a live ATS optimization tool with payments) and AI Study Assistant (a RAG-powered PDF study tool in development). He focuses on shipping production-ready products, not just prototypes.",
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
