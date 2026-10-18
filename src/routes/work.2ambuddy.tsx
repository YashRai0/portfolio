import { createFileRoute, Link } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/work/2ambuddy')({
  head: () => ({
    meta: [
      { title: '2ambuddy (Prepnexia) | AI Study Assistant Case Study' },
      {
        name: 'description',
        content:
          'Case study of 2ambuddy (Prepnexia): an AI-powered study assistant built by Yash Rai using a RAG pipeline, Groq API (LLaMA-3), and document-grounded Q&A.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/work/2ambuddy` },
      { property: 'og:title', content: '2ambuddy (Prepnexia) | AI Study Assistant Case Study' },
      {
        property: 'og:description',
        content:
          'Case study of 2ambuddy (Prepnexia): an AI-powered study assistant built by Yash Rai using a RAG pipeline, Groq API (LLaMA-3), and document-grounded Q&A.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: '2ambuddy (Prepnexia) | AI Study Assistant Case Study' },
      {
        name: 'twitter:description',
        content:
          'Case study of 2ambuddy (Prepnexia): an AI-powered study assistant built by Yash Rai using a RAG pipeline, Groq API (LLaMA-3), and document-grounded Q&A.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/work/prepnexia` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: 'Home', url: SITE_CONFIG.url },
            { name: 'Work', url: `${SITE_CONFIG.url}/work` },
            { name: '2ambuddy', url: `${SITE_CONFIG.url}/work/2ambuddy` },
          ])
        ),
      },
    ],
  }),
  component: TwoAmBuddyCaseStudy,
});

export function TwoAmBuddyCaseStudy() {
  return (
    <main className="page-main">
      <div className="page-container py-8 md:py-12">
        {/* Back navigation */}
        <Link to="/work" className="case-study-back">
          <ArrowLeft size={16} /> Back to selected work
        </Link>

        {/* Hero */}
        <header className="case-study-hero">
          <span className="section-label">AI STUDY ASSISTANT</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            2ambuddy
          </h1>
          <p className="section-subtitle text-lg sm:text-xl max-w-3xl mb-6">
            An AI-powered study application designed to help students interact with uploaded course materials, ask document-grounded questions, generate smart flashcards, and test their retention.
          </p>

          <div className="case-study-meta">
            <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
              Status: Live in Production
            </span>
            <span>•</span>
            <span>Stack: React, Node.js, Groq API, MongoDB, RAG Pipeline</span>
            <span>•</span>
            <span>Year: 2026</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="https://2ambuddy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open Live Application <ExternalLink size={15} />
            </a>
            <a
              href="https://github.com/YashRai0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub Profile <GithubIcon size={15} />
            </a>
          </div>
        </header>

        {/* Main Application Screenshot / Visual */}
        <div className="case-study-preview">
          <img
            src="/screenshots/2ambuddy.svg"
            alt="2ambuddy RAG Study Assistant Interface"
            className="w-full h-auto block"
          />
        </div>

        {/* Case Study Body Content */}
        <div className="max-w-4xl case-study-content space-y-12">
          {/* 1. Problem & Intended Users */}
          <section>
            <h2>1. Problem &amp; Intended Users</h2>
            <p>
              Students often deal with lengthy academic PDFs, lecture slide decks, and dense reference textbooks (such as Operating Systems, DBMS, and Networking). Finding specific definitions, reviewing formulas, and generating practice questions requires tedious manual scrolling and skimming.
            </p>
            <p>
              Generic LLM chatbots frequently hallucinate or produce generic answers that do not match the exact syllabus, terminology, or definitions taught in university coursework.
            </p>
            <p>
              <strong>Intended Users:</strong> Undergraduate students, self-learners, and exam candidates seeking an active recall partner grounded exclusively in their provided study documents.
            </p>
          </section>

          {/* 2. Solution & Implemented Features */}
          <section>
            <h2>2. Solution &amp; Implemented Features</h2>
            <p>
              2ambuddy implements a Retrieval-Augmented Generation (RAG) architecture that constrains the AI's responses directly to the text extracted from the user's uploaded materials.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Document Parsing &amp; Chunking
                </div>
                <p className="text-sm text-[var(--text-secondary)] m-0">
                  Splits uploaded PDF textbooks and notes into semantic text passages with overlap to preserve conceptual continuity across boundaries.
                </p>
              </div>

              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Grounded Q&amp;A with Citations
                </div>
                <p className="text-sm text-[var(--text-secondary)] m-0">
                  Answers student queries using retrieved context chunks, annotating responses with citations linking back to document chapters.
                </p>
              </div>

              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Flashcard Generation
                </div>
                <p className="text-sm text-[var(--text-secondary)] m-0">
                  Automatically extracts key definitions, comparisons, and core concepts from chunks into structured flip cards for active recall.
                </p>
              </div>

              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)] mb-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Chapter Summarization
                </div>
                <p className="text-sm text-[var(--text-secondary)] m-0">
                  Synthesizes high-level overviews of extensive units, distilling exam-critical takeaways into bullet points.
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
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Component-driven UI, responsive state management</p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold block mb-1">Backend</span>
                  <span className="font-bold text-[var(--text-primary)]">Node.js, Express</span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">RESTful endpoints, PDF text extraction pipeline</p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold block mb-1">AI Inference</span>
                  <span className="font-bold text-[var(--text-primary)]">Groq API (LLaMA-3)</span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">High-speed token generation for conversational answers</p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--accent)] font-semibold block mb-1">Storage</span>
                  <span className="font-bold text-[var(--text-primary)]">MongoDB</span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Document metadata, user sessions, study logs</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Architecture & Technical Decisions */}
          <section>
            <h2>4. Architecture &amp; Technical Decisions</h2>
            <div className="p-6 rounded-xl border bg-[var(--code-bg)] text-[#E5E7EB] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto my-4">
              <pre>{`PDF Upload ➔ Text Extraction ➔ Semantic Chunking (~500 tokens)
                                 │
                                 ▼
                     Vector Embedding Generator
                                 │
                                 ▼
                      Similarity Search Index
                                 │
  User Prompt ───────────➔ Cosine Match (Top-K Chunks)
                                 │
                                 ▼
                 Context Injection + System Guardrails
                                 │
                                 ▼
                  Groq LLaMA-3 Streamed Response ➔ Client`}</pre>
            </div>
            <p>
              <strong>Why Groq API?</strong> Studying requires low latency; waiting 10–15 seconds for a model to respond disrupts reading momentum. Groq's LPU hardware yields inference speeds exceeding 300 tokens/sec, making Q&amp;A and flashcard generation feel near-instantaneous.
            </p>
            <p>
              <strong>Context Windows &amp; Guardrails:</strong> System instructions strictly instruct the model: "Answer solely based on the provided excerpt. If the excerpt does not contain the answer, reply that the concept is not covered in the uploaded material rather than hallucinating external facts."
            </p>
          </section>

          {/* 5. Challenges & Trade-offs */}
          <section>
            <h2>5. Challenges &amp; Trade-offs</h2>
            <p>
              <strong>Complex PDF Formats:</strong> Multi-column pages, mathematical formulas, and scanned tables in academic texts often result in disordered raw text extraction. Balancing chunk size versus semantic context was an iterative process — small chunks lost cross-paragraph definitions, while oversized chunks diluted similarity retrieval precision.
            </p>
            <p>
              <strong>Trade-off:</strong> Prioritized text clarity and reliable answers over OCR processing for non-searchable scanned images in initial iterations.
            </p>
          </section>

          {/* 6. Current Status & Future Improvements */}
          <section>
            <h2>6. Current Limitations &amp; Roadmap</h2>
            <div className="p-5 rounded-xl border bg-[var(--bg-card)] space-y-3" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  <strong>Live Deployment:</strong> Deployed and active at <a href="https://2ambuddy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-medium underline">2ambuddy.vercel.app</a>.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  <strong>Planned Roadmap:</strong> Adding interactive flashcard review with Spaced Repetition (SM-2 algorithm) and automated mock exams with scorecards.
                </span>
              </div>
            </div>
          </section>

          {/* Navigation to next project */}
          <div className="pt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border)' }}>
            <Link to="/work" className="btn btn-secondary">
              <ArrowLeft size={16} /> All Projects
            </Link>
            <Link to="/work/resumeai4u" className="btn btn-primary">
              Next Case Study: ResumeAI4u <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
