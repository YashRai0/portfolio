import { useEffect, useRef, useState } from "react";
import type { Credential } from "../lib/credentials";
import { ExternalLink, FileText, Download, X, ShieldCheck } from "lucide-react";

interface Props {
  credential: Credential | null;
  onClose: () => void;
}

export default function CertificateViewer({ credential, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [credential]);

  useEffect(() => {
    if (!credential) return;

    // Auto focus the close button when opened
    closeRef.current?.focus();

    // Prevent body scrolling
    document.body.style.overflow = "hidden";

    // Handle Escape key to close
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [credential, onClose]);

  if (!credential) return null;

  return (
    <div
      className="cert-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${credential.title}`}
    >
      <div
        className="cert-modal-content max-w-4xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b mb-3" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
              {credential.category}
            </span>
            <span className="text-xs text-[var(--text-muted)]">&bull;</span>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {credential.year}
            </span>
            {credential.verificationUrl && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <ShieldCheck size={11} /> Verified
              </span>
            )}
          </div>
          <button
            ref={closeRef}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer"
            onClick={onClose}
            aria-label="Close certificate viewer (or press Escape)"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 min-h-0 flex items-center justify-center bg-[var(--bg-subtle)] rounded-lg p-2 overflow-hidden">
          {!imageError ? (
            <img
              src={credential.image}
              alt={`Certificate: ${credential.title}`}
              loading="lazy"
              onError={() => setImageError(true)}
              className="max-h-[58vh] w-auto max-w-full object-contain rounded shadow-xs block"
            />
          ) : (
            <div className="cert-preview-card text-center p-8">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-1">
                {credential.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                Issued by <strong>{credential.issuer}</strong>
              </p>
              {credential.certificateNo && (
                <p className="text-xs font-mono text-[var(--text-muted)] mb-3">
                  Certificate ID: {credential.certificateNo}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="pt-3 border-t mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3" style={{ borderColor: "var(--border)" }}>
          <div>
            <h4 className="font-bold text-sm text-[var(--text-primary)]">
              {credential.title}
            </h4>
            <p className="text-xs text-[var(--text-secondary)]">
              {credential.issuer} &bull; {credential.year}
              {credential.certificateNo && ` (ID: ${credential.certificateNo})`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={credential.image}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
            >
              <Download size={12} /> Image
            </a>

            {credential.pdfUrl && (
              <a
                href={credential.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
              >
                <FileText size={13} /> PDF Document
              </a>
            )}

            {credential.verificationUrl && (
              <a
                href={credential.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
              >
                Verify on Skilljar <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
