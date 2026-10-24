import { createFileRoute, Link } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/work/prepnexia')({
  head: () => ({
    meta: [
      { title: 'Prepnexia | AI Study Assistant Case Study' },
      {
        name: 'description',
        content:
          'Case study of Prepnexia (2ambuddy): an AI-powered study assistant built with RAG pipelines, Groq API, PDF text chunking, and document-grounded Q&A.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/work/prepnexia` },
      { property: 'og:title', content: 'Prepnexia | AI Study Assistant Case Study' },
      {
        property: 'og:description',
        content:
          'Case study of Prepnexia (2ambuddy): an AI-powered study assistant built with RAG pipelines, Groq API, PDF text chunking, and document-grounded Q&A.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Prepnexia | AI Study Assistant Case Study' },
      {
        name: 'twitter:description',
        content:
          'Case study of Prepnexia (2ambuddy): an AI-powered study assistant built with RAG pipelines, Groq API, PDF text chunking, and document-grounded Q&A.',
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
            { name: 'Prepnexia', url: `${SITE_CONFIG.url}/work/prepnexia` },
          ])
        ),
      },
    ],
  }),
  component: PrepnexiaCaseStudy,
});

export function PrepnexiaCaseStudy() {
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
            <li className="text-[var(--text-primary)] font-semibold">Prepnexia</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="case-study-hero">
          <span className="section-label">AI STUDY ASSISTANT</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Prepnexia <span className="highlight">(2ambuddy)</span>
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

        {/* Main Application Screenshot */}
        <div className="case-study-preview">
          <img
            src="/screenshots/2ambuddy.svg"
            alt="Prepnexia 2ambuddy AI study assistant interface showing document question answering and summaries"
            width="1200"
            height="675"
            className="w-full h-auto block"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Case Study Content */}
        <div className="max-w-4xl case-study-content space-y-12">
          {/* 1. Problem & Intended Users */}
          <section>
            <h2>1. Problem &amp; Intended Audience</h2>
            <p>
              Students and lifelong learners frequently struggle with information overload when studying lengthy textbooks, academic research PDFs, or complex lecture notes. Traditional general-purpose LLMs hallucinate facts that are not present in the user's actual curriculum, resulting in misleading exam preparation.
            </p>
            <p>
              <strong>Target Users:</strong> College undergraduates, competitive exam aspirants, and technical professionals who require strict factual fidelity to their personal study materials without wading through hundreds of static pages.
            </p>
          </section>

          {/* 2. Solution & Implemented Features */}
          <section>
            <h2>2. Solution &amp; Implemented Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base text-[var(--text-primary)] mb-2">📄 Document-Grounded Q&amp;A</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Answers to student queries are strictly synthesized from retrieved excerpts of the uploaded PDF, ensuring zero fabricated citations.
                </p>
              </div>
              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base text-[var(--text-primary)] mb-2">⚡ Rapid Summarization</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Generates concise chapter breakdowns, key formulas, core theorems, and chapter takeaway bullets in seconds using high-throughput Groq inference.
                </p>
              </div>
              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base text-[var(--text-primary)] mb-2">🗂️ Smart Flashcards</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Automatically decomposes dense sections into front/back concept flashcards for active recall and spaced revision.
                </p>
              </div>
              <div className="p-5 rounded-xl border bg-[var(--bg-card)]" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base text-[var(--text-primary)] mb-2">📝 Practice Quizzes</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Synthesizes multiple-choice questions directly from lecture topics to evaluate student retention before exams.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Technology Stack */}
          <section>
            <h2>3. Technology Stack</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="font-mono text-sm font-bold text-[var(--accent)] min-w-[120px]">Frontend:</span>
                <span className="text-[var(--text-secondary)]">React 19, TypeScript, Tailwind CSS with modular component hierarchy.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-sm font-bold text-[var(--accent)] min-w-[120px]">Backend:</span>
                <span className="text-[var(--text-secondary)]">Node.js, Express.js REST API handling document chunking and prompt construction.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-sm font-bold text-[var(--accent)] min-w-[120px]">AI / LLM Tier:</span>
                <span className="text-[var(--text-secondary)]">Groq API (LLaMA-3 inference) for sub-second text generation latency.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-sm font-bold text-[var(--accent)] min-w-[120px]">Database:</span>
                <span className="text-[var(--text-secondary)]">MongoDB for user profiles, document metadata, and generated study decks.</span>
              </div>
            </div>
          </section>

          {/* 4. Architecture & Technical Decisions */}
          <section>
            <h2>4. Architecture &amp; RAG Pipeline</h2>
            <p>
              The system utilizes a <strong>Retrieval-Augmented Generation (RAG)</strong> pattern to eliminate ungrounded hallucinations:
            </p>
            <div className="p-4 rounded-xl border bg-[var(--bg-subtle)] font-mono text-xs overflow-x-auto leading-relaxed my-4" style={{ borderColor: 'var(--border)' }}>
              <pre>{`User Uploads PDF -> Text Extraction & Normalization
  -> Recursive Chunking (500 tokens with 50-token overlap)
  -> Vector Embeddings Generated & Indexed
  -> Student Asks Question -> Query Vector Matches Top-K Excerpts
  -> Groq LLaMA-3 Synthesizes Answer Exclusively from Top-K Excerpts`}</pre>
            </div>
            <p>
              <strong>Guardrails:</strong> System prompts strictly instruct the model: "Answer solely based on the provided excerpt. If the excerpt does not contain the answer, reply that the concept is not covered in the uploaded material rather than hallucinating external facts."
            </p>
          </section>

          {/* 5. Challenges & Trade-offs */}
          <section>
            <h2>5. Challenges &amp; Trade-offs</h2>
            <p>
              <strong>Complex PDF Layouts:</strong> Multi-column pages, formulas, and scanned tables in academic texts often result in disordered raw text extraction. Balancing chunk size versus semantic context was an iterative process — small chunks lost cross-paragraph definitions, while oversized chunks diluted retrieval precision.
            </p>
          </section>

          {/* 6. Current Status & Limitations */}
          <section>
            <h2>6. Limitations &amp; Roadmap</h2>
            <div className="p-5 rounded-xl border bg-[var(--bg-card)] space-y-3" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  <strong>Live Deployment:</strong> Active in production at <a href="https://2ambuddy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-medium underline">2ambuddy.vercel.app</a>.
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

          {/* Navigation to other project */}
          <div className="pt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border)' }}>
            <Link to="/work" className="btn btn-secondary">
              <ArrowLeft size={16} /> All Projects
            </Link>
            <Link to="/work/resumeai4u" className="btn btn-primary">
              Next: ResumeAI4u Case Study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
