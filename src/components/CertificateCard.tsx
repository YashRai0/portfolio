import type { Credential } from '../lib/credentials';
import { ExternalLink, ShieldCheck, Download, Eye } from 'lucide-react';

interface CertificateCardProps {
  credential: Credential;
  onViewCertificate: (credential: Credential) => void;
}

export default function CertificateCard({ credential, onViewCertificate }: CertificateCardProps) {
  return (
    <div
      className="p-5 rounded-xl border flex flex-col justify-between transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md group"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
      }}
    >
      <div>
        {/* Certificate Preview Thumbnail */}
        <div
          className="mb-4 overflow-hidden rounded-lg border aspect-[16/11] bg-[var(--bg-subtle)] relative cursor-pointer"
          style={{ borderColor: 'var(--border)' }}
          onClick={() => onViewCertificate(credential)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onViewCertificate(credential);
            }
          }}
          aria-label={`Enlarge certificate: ${credential.title}`}
        >
          <img
            src={credential.image}
            alt={`Preview of ${credential.title}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-black/75 text-white text-xs font-medium flex items-center gap-1.5 shadow-sm backdrop-blur-xs">
              <Eye size={13} /> View Fullscreen
            </span>
          </div>
        </div>

        {/* Header badges */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">
            {credential.category}
          </span>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            {credential.year}
          </span>
        </div>

        {/* Title & Verified Badge */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-bold text-base text-[var(--text-primary)] leading-snug">
            {credential.title}
          </h3>
          {credential.verificationUrl && (
            <span
              className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0"
              title="Officially verifiable credential on Skilljar"
            >
              <ShieldCheck size={12} />
              Verified
            </span>
          )}
        </div>

        {/* Issuer */}
        <p className="text-xs text-[var(--text-secondary)] mb-3">
          {credential.issuer}
        </p>

        {/* Grade / ID */}
        {(credential.grade || credential.certificateNo) && (
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {credential.grade && (
              <span className="inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent)]">
                {credential.grade}
              </span>
            )}
            {credential.certificateNo && (
              <span className="text-[11px] font-mono text-[var(--text-muted)] px-2 py-0.5 rounded bg-[var(--bg-subtle)] border border-[var(--border)]">
                ID: {credential.certificateNo}
              </span>
            )}
          </div>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {credential.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3.5 border-t flex flex-wrap items-center justify-between gap-2" style={{ borderColor: 'var(--border)' }}>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors cursor-pointer"
          onClick={() => onViewCertificate(credential)}
        >
          <Eye size={13} /> View Certificate
        </button>

        <div className="flex items-center gap-2">
          {credential.pdfUrl && (
            <a
              href={credential.pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
              title="Download original PDF certificate"
            >
              <Download size={12} /> PDF
            </a>
          )}

          {credential.verificationUrl && (
            <a
              href={credential.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded bg-[var(--accent)] text-white hover:opacity-90 transition-opacity shadow-2xs"
              aria-label={`Verify ${credential.title} on official verification portal`}
            >
              Verify <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
