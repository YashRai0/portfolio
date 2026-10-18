import { createFileRoute, Link } from '@tanstack/react-router';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../lib/projects';
import { SITE_CONFIG } from '../lib/siteConfig';
import { ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Yash Rai | Software Developer & AI Projects' },
      {
        name: 'description',
        content:
          'Full-stack developer building intelligent web applications, AI-powered tools, and practical software products with React, TypeScript, and Node.js.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/` },
      { property: 'og:title', content: 'Yash Rai | Software Developer & AI Projects' },
      {
        property: 'og:description',
        content:
          'Full-stack developer building intelligent web applications, AI-powered tools, and practical software products with React, TypeScript, and Node.js.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Yash Rai | Software Developer & AI Projects' },
      {
        name: 'twitter:description',
        content:
          'Full-stack developer building intelligent web applications, AI-powered tools, and practical software products with React, TypeScript, and Node.js.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/` },
    ],
  }),
  component: PortfolioHome,
});

export function PortfolioHome() {
  // Take featured projects: 2ambuddy and ResumeAI4u
  const featuredProjects = projects.slice(0, 2);

  return (
    <main className="page-main">
      <div className="page-container">
        {/* Skip Link for Keyboard Accessibility */}
        <a href="#featured-projects" className="skip-link font-mono text-xs no-underline">
          Skip to featured projects
        </a>

        {/* 1. Hero */}
        <Hero />

        {/* 2. Featured Projects */}
        <section id="featured-projects" className="py-12 md:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="section-label">Featured Work</span>
              <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mb-0">
                Real <span className="highlight">products</span> I've built
              </h2>
            </div>
            <Link
              to="/work"
              className="btn btn-ghost inline-flex items-center gap-1.5 font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
