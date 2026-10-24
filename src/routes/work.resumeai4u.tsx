import { createFileRoute, Link } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/work/resumeai4u')({
  head: () => ({
    meta: [
      { title: 'ResumeAI4u | AI Resume Optimizer Case Study' },
      {
        name: 'description',
        content:
          'Case study of ResumeAI4u: an AI-driven resume ATS analyzer providing keyword gap analysis, structured scoring, and actionable resume optimization.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/work/resumeai4u` },
      { property: 'og:title', content: 'ResumeAI4u | AI Resume Optimizer Case Study' },
      {
        property: 'og:description',
        content:
          'Case study of ResumeAI4u: an AI-driven resume ATS analyzer providing keyword gap analysis, structured scoring, and actionable resume optimization.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ResumeAI4u | AI Resume Optimizer Case Study' },
      {
        name: 'twitter:description',
        content:
          'Case study of ResumeAI4u: an AI-driven resume ATS analyzer providing keyword gap analysis, structured scoring, and actionable resume optimization.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/work/resumeai4u` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: 'Home', url: SITE_CONFIG.url },
            { name: 'Work', url: `${SITE_CONFIG.url}/work` },
            { name: 'ResumeAI4u', url: `${SITE_CONFIG.url}/work/resumeai4u` },
          ])
        ),
      },
    ],
  }),
  component: ResumeAI4uCaseStudy,
});

export function ResumeAI4uCaseStudy() {
  return (
    <main className="page-main">
      <div className="page-container py-8 md:py-12">
        {/* Breadcrumb & Back navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <li><Link to="/" className="hover:text-[var(--accent)]">Home</Link></li>
            <li>/</li>
            <li><Link to="/work" className="hover:text-[var(--accent)]">Work</Link></li>
            <li>/</li>
            <li className="text-[var(--text-primary)] font-semibold">ResumeAI4u</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="case-study-hero">
          <span className="section-label">RESUME OPTIMIZATION</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            ResumeAI4u
          </h1>
          <p className="section-subtitle text-lg sm:text-xl max-w-3xl mb-6">
            A deployed web application that analyzes resumes against target job descriptions, identifies critical keyword gaps, computes ATS compatibility scores, and provides actionable bullet-point rewrites.
          </p>

          <div className="case-study-meta">
            <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
              Status: Live in Production
            </span>
            <span>•</span>
            <span>Stack: React, Node.js, Groq API, Vercel</span>
            <span>•</span>
            <span>Year: 2026</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="https://resumeai4u.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open Live Application <ExternalLink size={15} />
            </a>
            <a
              href="https://github.com/YashRai0/resume-optimizer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View GitHub Repo <GithubIcon size={15} />
            </a>
          </div>
        </header>

        {/* Main Application Screenshot / Visual */}
        <div className="case-study-preview">
          <img
            src="/screenshots/resumeai4u.svg"
            alt="ResumeAI4u ATS Analysis Dashboard"
            width="1200"
            height="675"
            className="w-full h-auto block"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Case Study Body Content */}
        <div className="max-w-4xl case-study-content space-y-12">
          {/* 1. Problem & Intended Users */}
          <section>
            <h2>1. Problem &amp; Intended Users</h2>
            <p>
              Modern hiring processes rely heavily on Applicant Tracking Systems (ATS) and algorithmic screeners to filter candidate resumes before human recruiters ever inspect them. Job seekers frequently submit generic resumes lacking the exact terminology, skills, and quantifiable impact phrasing highlighted in the employer's job posting.
            </p>
            <p>
              As a result, qualified candidates often get automatically rejected simply due to formatting hurdles or subtle keyword omissions.
            </p>
            <p>
              <strong>Intended Users:</strong> College graduates, internship seekers, and software engineers aiming to optimize their resumes for specific job descriptions and pass automated ATS screening filters.
            </p>
          </section>

          {/* 2. Solution & Implemented Features */}
          <section>
            <h2>2. Solution &amp; Implemented Features</h2>
            <p>
              ResumeAI4u provides an end-to-end resume evaluation workflow where candidates input their existing resume text alongside a target job description:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> ATS Match Score Calculation
                </div>
                <p className="text-sm text-[var(--text-secondary)] m-0">
                  Scores relevance and semantic alignment between candidate qualifications and job description requirements on a 0–100% scale.
                </p>
              </div>

              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Keyword Gap Identification
                </div>
                <p className="text-sm text-[var(--text-secondary)] m-0">
                  Cross-checks skills and tools specified in the job posting against resume content to pinpoint critical missing technologies.
                </p>
              </div>

              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Action-Oriented Bullet Rewrites
                </div>
                <p className="text-sm text-[var(--text-secondary)] m-0">
                  Leverages LLM prompting to convert passive task descriptions into impact-oriented bullet points containing action verbs and metrics.
                </p>
              </div>

              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Format &amp; Readability Audits
                </div>
                <p className="text-sm text-[var(--text-secondary)] m-0">
                  Flags potential ATS parsing traps such as unconventional column layouts, complex glyphs, or missing contact sections.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Technology Stack */}
          <section>
            <h2>3. Technology Stack</h2>
            <div className="p-6 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold block mb-1">Frontend</span>
                  <span className="font-bold text-[var(--text-primary)]">React, Vite</span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Single-page application with responsive feedback and progress states</p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold block mb-1">Backend</span>
                  <span className="font-bold text-[var(--text-primary)]">Node.js API</span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Request handling, validation, and prompt serialization</p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold block mb-1">AI Engine</span>
                  <span className="font-bold text-[var(--text-primary)]">Groq API</span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Accelerated LLaMA-3 inference for detailed ATS evaluation</p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold block mb-1">Hosting</span>
                  <span className="font-bold text-[var(--text-primary)]">Vercel</span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Continuous deployment, SSL, and low-latency edge delivery</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Architecture & Implementation Decisions */}
          <section>
            <h2>4. Architecture &amp; Implementation Decisions</h2>
            <div className="p-6 rounded-xl border bg-[var(--code-bg)] text-[#E5E7EB] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto my-4">
              <pre>{`User Resume + Target JD (Pasted / Uploaded)
                      │
                      ▼
            Client Validation & Sanitization
                      │
                      ▼
           Backend Prompt Orchestrator
                      │
  ┌───────────────────┴───────────────────┐
  │ Structured Schema with Strict Rules   │
  │ • Extract key skills & seniority reqs │
  │ • Check keyword overlap percentage    │
  │ • Generate specific bullet diffs      │
  └───────────────────┬───────────────────┘
                      ▼
           Groq LLaMA-3 Inference (JSON Mode)
                      │
                      ▼
       Client Renders Interactive Scorecard`}</pre>
            </div>
            <p>
              <strong>Structured JSON Output:</strong> Rather than returning open-ended text, the AI model is constrained using system-prompt instructions to return a structured JSON response containing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)] text-base">
              <li>Overall numeric ATS score (0–100)</li>
              <li>Categorized keyword lists: present vs missing skills</li>
              <li>Specific rewrite recommendations with before and after comparisons</li>
              <li>Formatting flags and actionable fixes</li>
            </ul>
          </section>

          {/* 5. Challenges & Trade-offs */}
          <section>
            <h2>5. Challenges &amp; Trade-offs</h2>
            <p>
              <strong>Prompt Consistency:</strong> Early prototypes with unconstrained prompts produced fluctuating scores for the same resume-job pair. To solve this, scoring criteria were discretized into weighted components: 40% hard skills match, 25% experience relevance, 20% impact metrics, and 15% readability.
            </p>
            <p>
              <strong>Latency Considerations:</strong> Analyzing large job descriptions (1,000+ words) and multi-page resumes could easily take 20–30 seconds on traditional OpenAI/Anthropic tiers. By utilizing Groq's high-speed inference, analysis turnaround was kept under 3 seconds.
            </p>
          </section>

          {/* 6. Limitations & Future Improvements */}
          <section>
            <h2>6. Limitations &amp; Roadmap</h2>
            <div className="p-5 rounded-xl border bg-[var(--bg-card)] space-y-3" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  <strong>Current Scope:</strong> Best suited for software engineering and technical roles where keyword matching follows clear domain vocabularies.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  <strong>Planned Features:</strong> Direct PDF-to-PDF export preserving the user's original typographical formatting and layout while applying suggested bullet rewrites.
                </span>
              </div>
            </div>
          </section>

          {/* Navigation to next project */}
          <div className="pt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border)' }}>
            <Link to="/work/2ambuddy" className="btn btn-secondary">
              <ArrowLeft size={16} /> Previous: 2ambuddy
            </Link>
            <Link to="/work" className="btn btn-primary">
              All Selected Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
