import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { timeline } from '../lib/timeline';
import { credentials, GALLERY_FILTERS, filterCredentials, type Credential, type GalleryFilter } from '../lib/credentials';
import CertificateCard from '../components/CertificateCard';
import CertificateViewer from '../components/CertificateViewer';

import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/experience')({
  head: () => ({
    meta: [
      { title: 'Experience & Education | Yash Rai' },
      {
        name: 'description',
        content:
          'Development journey, technical training, academic background in Computer Applications, and certifications achieved by Yash Rai.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/experience` },
      { property: 'og:title', content: 'Experience & Education | Yash Rai' },
      {
        property: 'og:description',
        content:
          'Development journey, technical training, academic background in Computer Applications, and certifications achieved by Yash Rai.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Experience & Education | Yash Rai' },
      {
        name: 'twitter:description',
        content:
          'Development journey, technical training, academic background in Computer Applications, and certifications achieved by Yash Rai.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/experience` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: 'Home', url: SITE_CONFIG.url },
            { name: 'Experience', url: `${SITE_CONFIG.url}/experience` },
          ])
        ),
      },
    ],
  }),
  component: ExperiencePage,
});

export function ExperiencePage() {
  const [viewingCert, setViewingCert] = useState<Credential | null>(null);
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All Certificates');

  const filteredCredentials = filterCredentials(activeFilter);

  return (
    <main className="page-main">
      <div className="page-container py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="section-label">Journey</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Development <span className="highlight">progression</span>.
          </h1>
          <p className="section-subtitle text-lg sm:text-xl">
            My path from core computer science learning to building and shipping real software products — honest milestones, education, and technical training.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-3xl mb-20">
          <div className="timeline-editorial">
            {timeline.map((item) => (
              <div key={item.id} className="timeline-entry">
                <div className="timeline-date">{item.dateRange}</div>
                <h3 className="timeline-heading">{item.title}</h3>
                <div className="timeline-role">
                  {item.id === 'tl-1'
                    ? 'Software Development & Production Deployments'
                    : item.id === 'tl-2'
                      ? 'AI Exploration & NETCAMP Technical Training'
                      : item.id === 'tl-3'
                        ? 'Full-Stack Foundations & REST APIs'
                        : 'BCA Undergraduate · Programming Fundamentals'}
                </div>
                <p className="timeline-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Credentials Section */}
        <div className="pt-12 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="section-label">Verified Evidence</span>
              <h2 className="section-title text-3xl sm:text-4xl mb-2">
                Certifications &amp; <span className="highlight">Training</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] m-0">
                {credentials.length} authentic credentials across industry training, internships, and university coursework.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5">
              {GALLERY_FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs font-mono font-medium px-3 py-1.5 rounded-full border transition-all ${
                    activeFilter === cat
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-xs'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--text-primary)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCredentials.map((cred) => (
              <CertificateCard
                key={cred.id}
                credential={cred}
                onViewCertificate={setViewingCert}
              />
            ))}
          </div>

          {/* Certificate Viewer Modal */}
          <CertificateViewer
            credential={viewingCert}
            onClose={() => setViewingCert(null)}
          />
        </div>
      </div>
    </main>
  );
}
