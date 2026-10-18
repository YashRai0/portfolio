import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { credentials, GALLERY_FILTERS, filterCredentials, type Credential, type GalleryFilter } from '../lib/credentials';
import CertificateCard from '../components/CertificateCard';
import CertificateViewer from '../components/CertificateViewer';
import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/certificates')({
  head: () => ({
    meta: [
      { title: 'Certificates & Achievements | Yash Rai' },
      {
        name: 'description',
        content:
          'Verified certificates and credentials earned by Yash Rai across AI certifications, industry training, internships, and university coursework.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/certificates` },
      { property: 'og:title', content: 'Certificates & Achievements | Yash Rai' },
      {
        property: 'og:description',
        content:
          'Verified certificates and credentials earned by Yash Rai across AI certifications, industry training, internships, and university coursework.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Certificates & Achievements | Yash Rai' },
      {
        name: 'twitter:description',
        content:
          'Verified certificates and credentials earned by Yash Rai across AI certifications, industry training, internships, and university coursework.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/certificates` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: 'Home', url: SITE_CONFIG.url },
            { name: 'Certificates', url: `${SITE_CONFIG.url}/certificates` },
          ])
        ),
      },
    ],
  }),
  component: CertificatesPage,
});

export function CertificatesPage() {
  const [viewingCert, setViewingCert] = useState<Credential | null>(null);
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All Certificates');

  const filteredCredentials = filterCredentials(activeFilter);

  return (
    <main className="page-main">
      <div className="page-container py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="section-label">Verified Evidence</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Certificates &amp; <span className="highlight">Achievements</span>.
          </h1>
          <p className="section-subtitle text-lg sm:text-xl">
            Authentic documentation of technical training, internships, university coursework, and external certifications. Every document is available for full-resolution review and verification.
          </p>
        </div>

        {/* Gallery Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            Showing <strong className="text-[var(--text-primary)]">{filteredCredentials.length}</strong> of {credentials.length} credentials
          </div>

          <div className="flex flex-wrap gap-1.5">
            {GALLERY_FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono font-medium px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
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
    </main>
  );
}
