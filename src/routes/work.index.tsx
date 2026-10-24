import { createFileRoute } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { projects } from '../lib/projects';
import ProjectCard from '../components/ProjectCard';

import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/work/')({
  head: () => ({
    meta: [
      { title: 'Projects & Case Studies | Yash Rai' },
      {
        name: 'description',
        content:
          'Selected software projects, production web applications, and AI tools built by Yash Rai, including Prepnexia (2ambuddy) and ResumeAI4u.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/work` },
      { property: 'og:title', content: 'Projects & Case Studies | Yash Rai' },
      {
        property: 'og:description',
        content:
          'Selected software projects, production web applications, and AI tools built by Yash Rai, including Prepnexia (2ambuddy) and ResumeAI4u.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Projects & Case Studies | Yash Rai' },
      {
        name: 'twitter:description',
        content:
          'Selected software projects, production web applications, and AI tools built by Yash Rai, including Prepnexia (2ambuddy) and ResumeAI4u.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/work` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: 'Home', url: SITE_CONFIG.url },
            { name: 'Work', url: `${SITE_CONFIG.url}/work` },
          ])
        ),
      },
    ],
  }),
  component: WorkPage,
});

export function WorkPage() {
  return (
    <main className="page-main">
      <div className="page-container py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="section-label">Portfolio</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Selected <span className="highlight">work</span>.
          </h1>
          <p className="section-subtitle text-lg sm:text-xl">
            Real products, web applications, and AI-assisted tools I've built. Each project is grounded in genuine code and solves specific user needs.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} priority={idx < 2} />
          ))}
        </div>
      </div>
    </main>
  );
}
