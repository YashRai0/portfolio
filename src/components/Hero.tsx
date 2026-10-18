import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, FileText, X, Mail, Award } from 'lucide-react';
import { SITE_CONFIG } from '../lib/siteConfig';

export default function Hero() {
  const [showResumeNotice, setShowResumeNotice] = useState(false);

  // Accessible escape key listener for modal
  useEffect(() => {
    if (!showResumeNotice) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowResumeNotice(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showResumeNotice]);

  const handleResumeClick = async () => {
    try {
      const res = await fetch(SITE_CONFIG.resumePath, { method: 'HEAD' });
      if (res.ok) {
        window.open(SITE_CONFIG.resumePath, '_blank', 'noopener,noreferrer');
      } else {
        setShowResumeNotice(true);
      }
    } catch {
      setShowResumeNotice(true);
    }
  };

  return (
    <section className="pt-8 pb-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Headline, Intro, Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="section-label mb-3">
            FULL-STACK · AI · PRODUCT ENGINEERING
          </div>

          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6">
            I build <span className="highlight">intelligent products</span> that solve real problems.
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
            I'm Yash Rai, a BCA student and developer building web applications, AI-powered tools, and practical software products.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/work" className="btn btn-primary text-base">
              View Projects <ArrowRight size={17} />
            </Link>

            <button
              type="button"
              onClick={handleResumeClick}
              className="btn btn-secondary text-base inline-flex items-center gap-2 cursor-pointer"
              aria-label="View Yash Rai's Resume"
            >
              <FileText size={17} />
              View Resume
            </button>

            <Link to="/contact" className="btn btn-ghost text-base">
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Right Column: Code Editor Visual */}
        <div className="lg:col-span-5">
          <div className="code-card">
            <div className="code-header">
              <div className="code-dots">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
              </div>
              <span className="code-tab">productEngine.ts</span>
            </div>
            <div className="code-body">
              <div className="code-line">
                <span className="code-num">1</span>
                <span className="code-text"><span className="c-cmt">// engineering real-world software</span></span>
              </div>
              <div className="code-line">
                <span className="code-num">2</span>
                <span className="code-text"><span className="c-kw">interface</span> <span className="c-typ">ProductSpec</span> &#123;</span>
              </div>
              <div className="code-line">
                <span className="code-num">3</span>
                <span className="code-text">  problem: <span className="c-typ">string</span>;</span>
              </div>
              <div className="code-line">
                <span className="code-num">4</span>
                <span className="code-text">  aiPowered: <span className="c-typ">boolean</span>;</span>
              </div>
              <div className="code-line">
                <span className="code-num">5</span>
                <span className="code-text">&#125;</span>
              </div>
              <div className="code-line">
                <span className="code-num">6</span>
                <span className="code-text"></span>
              </div>
              <div className="code-line">
                <span className="code-num">7</span>
                <span className="code-text"><span className="c-kw">class</span> <span className="c-typ">ProductEngineer</span> &#123;</span>
              </div>
              <div className="code-line">
                <span className="code-num">8</span>
                <span className="code-text">  <span className="c-kw">async</span> <span className="c-fn">build</span>(spec: <span className="c-typ">ProductSpec</span>) &#123;</span>
              </div>
              <div className="code-line">
                <span className="code-num">9</span>
                <span className="code-text">    <span className="c-kw">const</span> core = <span className="c-kw">await</span> <span className="c-fn">createArchitecture</span>(&#123;</span>
              </div>
              <div className="code-line">
                <span className="code-num">10</span>
                <span className="code-text">      frontend: <span className="c-str">'React'</span>,</span>
              </div>
              <div className="code-line">
                <span className="code-num">11</span>
                <span className="code-text">      backend: <span className="c-str">'Node.js'</span>,</span>
              </div>
              <div className="code-line">
                <span className="code-num">12</span>
                <span className="code-text">      intelligence: <span className="c-str">'Groq + RAG'</span>,</span>
              </div>
              <div className="code-line">
                <span className="code-num">13</span>
                <span className="code-text">    &#125;);</span>
              </div>
              <div className="code-line">
                <span className="code-num">14</span>
                <span className="code-text">    <span className="c-kw">return</span> core.<span className="c-fn">deploy</span>(<span className="c-str">'production'</span>);</span>
              </div>
              <div className="code-line">
                <span className="code-num">15</span>
                <span className="code-text">  &#125;</span>
              </div>
              <div className="code-line">
                <span className="code-num">16</span>
                <span className="code-text">&#125;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Missing Resume Modal Notice (gracefully avoids linking to dead 404 URL) */}
      {showResumeNotice && (
        <div
          className="cert-modal-overlay"
          onClick={() => setShowResumeNotice(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume Document Status"
        >
          <div
            className="cert-modal-content max-w-lg p-6 rounded-xl border bg-[var(--bg-card)] shadow-lg"
            onClick={(e) => e.stopPropagation()}
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex items-center justify-between pb-3 border-b mb-4" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-[var(--accent-subtle)] text-[var(--accent)]">
                  <FileText size={18} />
                </span>
                <h3 className="font-bold text-base text-[var(--text-primary)] m-0">
                  Resume Document
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowResumeNotice(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              The official resume PDF (<code className="text-xs font-mono px-1.5 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--accent)]">{SITE_CONFIG.resumePath}</code>) is currently being updated. In the meantime, you can explore Yash's verified certificates or contact him directly.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Link
                to="/certificates"
                onClick={() => setShowResumeNotice(false)}
                className="btn btn-primary text-xs py-2 px-3 inline-flex items-center gap-1.5"
              >
                <Award size={14} /> View Certificates
              </Link>
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Resume%20Request%20-%20Yash%20Rai`}
                className="btn btn-secondary text-xs py-2 px-3 inline-flex items-center gap-1.5"
              >
                <Mail size={14} /> Request via Email
              </a>
              <button
                type="button"
                onClick={() => setShowResumeNotice(false)}
                className="btn btn-ghost text-xs py-2 px-3 ml-auto cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
