import { createFileRoute, Link } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { ArrowRight, GraduationCap, Code2, Sparkles, Compass } from 'lucide-react';

import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Yash Rai | Developer Profile' },
      {
        name: 'description',
        content:
          'Learn about Yash Rai, BCA student and developer focused on modern web engineering, AI integrations, clean code, and practical software solutions.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'profile' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/about` },
      { property: 'og:title', content: 'About Yash Rai | Developer Profile' },
      {
        property: 'og:description',
        content:
          'Learn about Yash Rai, BCA student and developer focused on modern web engineering, AI integrations, clean code, and practical software solutions.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'About Yash Rai | Developer Profile' },
      {
        name: 'twitter:description',
        content:
          'Learn about Yash Rai, BCA student and developer focused on modern web engineering, AI integrations, clean code, and practical software solutions.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/about` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: 'Home', url: SITE_CONFIG.url },
            { name: 'About', url: `${SITE_CONFIG.url}/about` },
          ])
        ),
      },
    ],
  }),
  component: AboutPage,
});

export function AboutPage() {
  return (
    <main className="page-main">
      <div className="page-container py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="section-label">About</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Building products that <span className="highlight">solve real problems</span>.
          </h1>
          <p className="section-subtitle text-lg sm:text-xl">
            I'm Yash Rai — a BCA student at {SITE_CONFIG.education.institution} in {SITE_CONFIG.education.location.split(',')[0]} and a practical software developer who builds real-world web applications and AI-powered tools.
          </p>
        </div>

        {/* Two-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16 pb-16 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Engineering with a Product Mindset
            </h2>
            <p>
              My journey in software engineering revolves around <span className="text-[var(--text-primary)] font-medium">learning by building</span>. Rather than stopping at theory, I focus on turning complex technical concepts into working applications that deliver practical value.
            </p>
            <p>
              I work across the full stack — designing responsive React interfaces, implementing Node.js and Express backend logic, structuring MongoDB databases, and engineering intelligent features with modern AI APIs and Retrieval-Augmented Generation (RAG) pipelines.
            </p>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              AI-Assisted, Engineering-Grounded
            </h2>
            <p>
              I leverage modern AI tools to accelerate development workflows, prototype rapidly, and solve edge cases. However, I believe true software quality rests on understanding core computing fundamentals — data structures, database isolation, networking, and system design.
            </p>
            <p>
              Whether engineering an ATS compatibility analyzer like <span className="text-[var(--text-primary)] font-medium">ResumeAI4u</span> or an intelligent PDF study assistant like <span className="text-[var(--text-primary)] font-medium">2ambuddy</span>, my focus is always on usability, reliability, and clean code.
            </p>
          </div>
        </div>

        {/* Academic Foundation & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 pb-16 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="lg:col-span-2 bg-[var(--bg-card)] border p-8 rounded-2xl" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2.5 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                <GraduationCap size={24} />
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">Academic Foundation</span>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{SITE_CONFIG.education.degree}</h3>
              </div>
            </div>

            <p className="text-[var(--text-secondary)] mb-4">
              <strong>{SITE_CONFIG.education.institution}</strong> · {SITE_CONFIG.education.location}
            </p>
            <p className="text-[var(--text-secondary)] text-sm mb-6">
              Currently in the <span className="text-[var(--text-primary)] font-semibold">{SITE_CONFIG.education.semester} Semester</span> ({SITE_CONFIG.education.period}). Focused on computer science theory, systems programming, and software engineering.
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold block">Core Academic Coursework:</span>
              <div className="flex flex-wrap gap-2">
                {['Operating Systems', 'DBMS & SQL', 'Data Structures & Algorithms', 'Computer Networks', 'Software Engineering'].map((course) => (
                  <span key={course} className="tech-tag text-xs font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border p-8 rounded-2xl flex flex-col justify-between" style={{ borderColor: 'var(--border)' }}>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-2">Professional Goals</span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Open to Opportunities</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                Actively seeking Software Engineering Internships and Full-Stack Development roles where I can contribute to production systems and continue growing alongside experienced teams.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary w-full justify-center">
              Let's Connect <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Philosophy / How I Build */}
        <div>
          <span className="section-label">Philosophy</span>
          <h2 className="section-title text-3xl sm:text-4xl mb-8">
            How I <span className="highlight">build software</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--bg-card)] border p-6 rounded-xl hover:border-[var(--accent)] transition-colors" style={{ borderColor: 'var(--border)' }}>
              <Code2 className="text-[var(--accent)] mb-4" size={24} />
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">Build Real Things</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Prioritizing practical, deployable products over synthetic demos or toy experiments.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border p-6 rounded-xl hover:border-[var(--accent)] transition-colors" style={{ borderColor: 'var(--border)' }}>
              <Compass className="text-[var(--accent)] mb-4" size={24} />
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">Understand the Core</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Digging into how the database, networking, and runtime execute beneath higher-level abstractions.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border p-6 rounded-xl hover:border-[var(--accent)] transition-colors" style={{ borderColor: 'var(--border)' }}>
              <Sparkles className="text-[var(--accent)] mb-4" size={24} />
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">Pragmatic AI</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Integrating LLMs and RAG pipelines where they provide genuine utility, while grounding outputs with verifiable facts.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border p-6 rounded-xl hover:border-[var(--accent)] transition-colors" style={{ borderColor: 'var(--border)' }}>
              <GraduationCap className="text-[var(--accent)] mb-4" size={24} />
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">Continuous Learning</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Treating every bug, code review, and deployed feature as an opportunity to sharpen engineering discipline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
