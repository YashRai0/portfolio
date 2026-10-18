import { createFileRoute } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import {
  Code2,
  Cpu,
  BarChart3,
  Layout,
  Server,
  Bot,
  Database,
  Plug,
  Cloud,
  Terminal,
} from 'lucide-react';

import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/skills')({
  head: () => ({
    meta: [
      { title: 'Technical Skills | Yash Rai' },
      {
        name: 'description',
        content:
          'Evidence-based technical skills of Yash Rai: Programming Languages (C, C++, Python, Java, PHP), CS Fundamentals, Data Analysis, React, TypeScript, Node.js, and AI development.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/skills` },
      { property: 'og:title', content: 'Technical Skills | Yash Rai' },
      {
        property: 'og:description',
        content:
          'Evidence-based technical skills of Yash Rai: Programming Languages, CS Fundamentals, Data Analysis, Full-Stack Web Development, and AI Applications.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Technical Skills | Yash Rai' },
      {
        name: 'twitter:description',
        content:
          'Evidence-based technical skills of Yash Rai: Programming Languages, CS Fundamentals, Data Analysis, Full-Stack Web Development, and AI Applications.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/skills` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: 'Home', url: SITE_CONFIG.url },
            { name: 'Skills', url: `${SITE_CONFIG.url}/skills` },
          ])
        ),
      },
    ],
  }),
  component: SkillsPage,
});

export function SkillsPage() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      description: 'Core languages for systems, algorithms, backend logic, and application development',
      skills: [
        { name: 'C', context: 'Procedural programming, memory management, pointers, and low-level computing foundations', status: 'Academic' },
        { name: 'C++', context: 'Object-oriented architecture, STL containers, algorithmic problem solving', status: 'Proficient' },
        { name: 'Python', context: 'Scripting, automation, data manipulation, and AI/LLM API integrations', status: 'Proficient' },
        { name: 'Java', context: 'Core Java, OOP principles, multi-threading, and Android development training (NETCAMP)', status: 'Training & Academic' },
        { name: 'PHP', context: 'Server-side web scripting, dynamic content generation, MySQL database interaction', status: 'Academic & Web' },
      ],
    },
    {
      category: 'Computer Science Fundamentals',
      icon: Cpu,
      description: 'Foundational computer science principles applied in software architecture',
      skills: [
        { name: 'Object-Oriented Programming (OOP)', context: 'Encapsulation, inheritance, polymorphism, and abstraction implemented in Java, C++, TypeScript', status: 'Core' },
        { name: 'Data Structures and Algorithms (DSA) Fundamentals', context: 'Arrays, linked lists, stacks, queues, trees, searching, sorting, and algorithmic complexity', status: 'Core' },
        { name: 'Computer Networking', context: 'OSI and TCP/IP models, routing protocols, HTTP/HTTPS, DNS, subnetting, certified via NETCAMP', status: 'Certified Training' },
        { name: 'Linux Fundamentals', context: 'Bash navigation, shell commands, file system permissions, package management, process monitoring', status: 'Practical' },
        { name: 'Operating Systems', context: 'Process scheduling, memory paging, concurrency, deadlocks, virtualization concepts', status: 'Academic' },
        { name: 'Software Engineering', context: 'SDLC methodologies, requirement modeling, modular architecture, version control practices', status: 'Applied' },
        { name: 'Database Management Systems (DBMS)', context: 'Relational schema design, normalization (1NF–3NF), ACID guarantees, transaction indexing, SQL', status: 'Core' },
      ],
    },
    {
      category: 'Data Analysis',
      icon: BarChart3,
      description: 'Techniques for inspecting, cleaning, modeling, and visualizing data',
      skills: [
        { name: 'Data Analysis', context: 'Extracting structured insights and meaningful metrics from application data and telemetry', status: 'Applied' },
        { name: 'Data Cleaning and Preprocessing', context: 'Handling missing records, format normalization, type casting, outlier filtering', status: 'Applied' },
        { name: 'Exploratory Data Analysis', context: 'Investigating distributions, correlation discovery, pattern verification, data profiling', status: 'Applied' },
        { name: 'Descriptive Statistics', context: 'Measures of central tendency (mean, median, mode), dispersion (variance, std dev), probability', status: 'Academic & Applied' },
        { name: 'Data Visualization', context: 'Visualizing distributions, trends, and performance metrics via dashboards and structured charts', status: 'Applied' },
      ],
    },
    {
      category: 'Frontend Development',
      icon: Layout,
      description: 'Building responsive, accessible, high-performance user interfaces',
      skills: [
        { name: 'React 19', context: 'Primary library for UI state, hooks, and component architecture', status: 'Production' },
        { name: 'TypeScript', context: 'Type-safe interfaces, API schemas, and robust contracts', status: 'Production' },
        { name: 'JavaScript (ES6+)', context: 'Modern DOM APIs, async/await patterns, and client-side logic', status: 'Production' },
        { name: 'Tailwind CSS v4', context: 'Utility-first styling, CSS custom properties, responsive design', status: 'Production' },
        { name: 'HTML5 & Semantic Web', context: 'Accessible structure, semantic landmarks, SEO optimization', status: 'Production' },
      ],
    },
    {
      category: 'Backend Development',
      icon: Server,
      description: 'Server architecture, RESTful services, and business logic execution',
      skills: [
        { name: 'Node.js', context: 'Asynchronous event-driven runtime for server applications', status: 'Production' },
        { name: 'Express.js', context: 'Routing, middleware pipelines, error handling, and request validation', status: 'Production' },
        { name: 'RESTful Architecture', context: 'Stateless endpoints, standard HTTP methods, clean resource modeling', status: 'Production' },
        { name: 'Server Functions', context: 'TanStack Start server-side execution and RPC patterns', status: 'Production' },
      ],
    },
    {
      category: 'AI & LLM Applications',
      icon: Bot,
      description: 'Intelligent feature integration, RAG architectures, and prompt design',
      skills: [
        { name: 'RAG Architecture', context: 'Document chunking, embeddings, vector retrieval, grounded generation', status: 'Active Development' },
        { name: 'Groq API (LLaMA-3)', context: 'Ultra-low-latency inference for resume analysis and Q&A', status: 'Production' },
        { name: 'Anthropic Claude API', context: 'Context-aware conversational assistance and reasoning (Claude 101 certified)', status: 'Production' },
        { name: 'Google Gemini API', context: 'Multimodal capabilities and intelligent fallbacks', status: 'Production' },
        { name: 'Prompt Engineering', context: 'Structured system prompts, JSON mode enforcement, guardrails', status: 'Production' },
      ],
    },
    {
      category: 'Databases & Storage',
      icon: Database,
      description: 'Data persistence, schema design, and query optimization',
      skills: [
        { name: 'MongoDB', context: 'Document modeling, collections, indexing, and NoSQL storage in 2ambuddy', status: 'Production' },
        { name: 'SQL / Relational DBs', context: 'Relational modeling, normalization, constraints, and joins', status: 'Academic & Training' },
        { name: 'Supabase / PostgreSQL', context: 'Postgres persistence, client SDK, and row security', status: 'Integrated' },
      ],
    },
    {
      category: 'APIs & Integrations',
      icon: Plug,
      description: 'Connecting third-party services and managing asynchronous events',
      skills: [
        { name: 'External AI APIs', context: 'Groq, Anthropic, Gemini client integration and rate handling', status: 'Production' },
        { name: 'Payment Gateway Integration', context: 'Razorpay checkout flow and webhook handling in ResumeAI4u', status: 'Production' },
        { name: 'JSON Data Exchange', context: 'Serialization, schema validation with Zod, and typed responses', status: 'Production' },
      ],
    },
    {
      category: 'Deployment & DevOps',
      icon: Cloud,
      description: 'Deploying applications and continuous delivery pipelines',
      skills: [
        { name: 'Vercel', context: 'Production edge deployments, environment configuration, serverless', status: 'Production' },
        { name: 'Git & GitHub', context: 'Version control, branch management, code collaboration', status: 'Production' },
        { name: 'Docker (Fundamentals)', context: 'Containerization concepts and local service setup', status: 'Actively Learning' },
      ],
    },
    {
      category: 'Developer Tools & Testing',
      icon: Terminal,
      description: 'Tooling ecosystem and development efficiency',
      skills: [
        { name: 'VS Code & CLI Tools', context: 'Primary development environment with custom workflows and shell scripts', status: 'Daily Use' },
        { name: 'Vite & Build Tooling', context: 'Fast HMR, asset bundlers, module resolution', status: 'Production' },
        { name: 'Manual & Endpoint Testing', context: 'API verification, responsive viewport testing, and edge-case validation', status: 'Standard' },
      ],
    },
  ];

  return (
    <main className="page-main">
      <div className="page-container py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="section-label">Skills</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Practical <span className="highlight">capabilities</span>.
          </h1>
          <p className="section-subtitle text-lg sm:text-xl">
            What I actually build with — core programming languages, computer science fundamentals, data analysis, modern web development, and AI engineering verified in code.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.category} className="skill-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="p-2 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)]">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-0">
                      {cat.category}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-5">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-name">
                          <span>{skill.name}</span>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[var(--bg-subtle)] text-[var(--text-muted)] border border-[var(--border)]">
                            {skill.status}
                          </span>
                        </div>
                        <div className="skill-desc">
                          {skill.context}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-16 p-6 rounded-xl border bg-[var(--bg-card)] max-w-2xl" style={{ borderColor: 'var(--border)' }}>
          <h4 className="font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider mb-2 font-mono">
            // Verified Knowledge Only
          </h4>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed m-0">
            I do not list arbitrary skill percentages or claim mastery over technologies I haven't implemented in code. Each technology listed above is directly tied to my production applications, academic coursework, or hands-on technical training.
          </p>
        </div>
      </div>
    </main>
  );
}
