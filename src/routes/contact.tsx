import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { submitContactForm, type ContactFormData } from '../lib/contact';
import { Mail, MapPin, Calendar, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, WhatsAppIcon } from '../components/SocialIcons';
import { getBreadcrumbSchema } from '../lib/structured-data';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Yash Rai | Project Enquiries' },
      {
        name: 'description',
        content:
          'Contact Yash Rai for software development projects, internships, collaborations, and AI-powered web applications.',
      },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${SITE_CONFIG.url}/contact` },
      { property: 'og:title', content: 'Contact Yash Rai | Project Enquiries' },
      {
        property: 'og:description',
        content:
          'Contact Yash Rai for software development projects, internships, collaborations, and AI-powered web applications.',
      },
      { property: 'og:image', content: `${SITE_CONFIG.url}/og-image.png` },
      { property: 'og:site_name', content: `${SITE_CONFIG.name} Portfolio` },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Contact Yash Rai | Project Enquiries' },
      {
        name: 'twitter:description',
        content:
          'Contact Yash Rai for software development projects, internships, collaborations, and AI-powered web applications.',
      },
      { name: 'twitter:image', content: `${SITE_CONFIG.url}/og-image.png` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_CONFIG.url}/contact` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: 'Home', url: SITE_CONFIG.url },
            { name: 'Contact', url: `${SITE_CONFIG.url}/contact` },
          ])
        ),
      },
    ],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Application',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      errors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.projectType.trim()) {
      errors.projectType = 'Please select a project type.';
    }
    if (!trimmedMessage || trimmedMessage.length < 10) {
      errors.message = 'Please provide some project details (at least 10 characters).';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!validate()) return;

    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const payload: ContactFormData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone?.trim() || undefined,
        projectType: formData.projectType.trim(),
        message: formData.message.trim(),
        honeypot: formData.honeypot,
      };

      const response = await submitContactForm({
        data: payload,
      });

      if (response.success) {
        setStatus('success');
        setFeedbackMessage(response.message);
      } else {
        setStatus('error');
        setFeedbackMessage(response.message || 'Something went wrong. Please try again or email directly.');
      }
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setFeedbackMessage('Unable to send enquiry right now. Please email directly at yashrai6635@gmail.com.');
    }
  };

  return (
    <main className="page-main">
      <div className="page-container pt-4 md:pt-6 pb-8 md:pb-12">
        {/* Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <span className="section-label">Contact</span>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Let's build something <span className="highlight">real</span>.
          </h1>
          <p className="section-subtitle text-lg sm:text-xl mb-0">
            Have a project in mind? Let's talk about how we can turn it into a working product.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div
                className="flex items-start gap-4 p-4 rounded-xl border bg-[var(--bg-card)] transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="p-3 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] flex-shrink-0" aria-hidden="true">
                  <Mail size={22} />
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold block">Verified Email</span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors break-all"
                    aria-label={`Send email to ${SITE_CONFIG.email}`}
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">Response typically within 24 hours</p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div
                className="flex items-start gap-4 p-4 rounded-xl border bg-[var(--bg-card)] transition-colors hover:border-[#25D366]"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="p-3 rounded-lg bg-[#25D366]/10 text-[#25D366] flex-shrink-0" aria-hidden="true">
                  <WhatsAppIcon size={22} />
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold block">Direct WhatsApp</span>
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5"
                    aria-label={`Chat directly on WhatsApp at ${SITE_CONFIG.whatsappDisplay}`}
                  >
                    {SITE_CONFIG.whatsappDisplay} <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">Direct chat for quick discussion or freelance inquiries</p>
                </div>
              </div>

              {/* Location */}
              <div
                className="flex items-start gap-4 p-4 rounded-xl border bg-[var(--bg-card)]"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="p-3 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] flex-shrink-0" aria-hidden="true">
                  <MapPin size={22} />
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold block">Location</span>
                  <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] block">
                    Prayagraj, Uttar Pradesh, India
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">Open to remote or relocation</p>
                </div>
              </div>

              {/* Availability */}
              <div
                className="flex items-start gap-4 p-4 rounded-xl border bg-[var(--bg-card)]"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="p-3 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] flex-shrink-0" aria-hidden="true">
                  <Calendar size={22} />
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold block">Availability</span>
                  <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] block">
                    Open for Projects &amp; Internships
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">Full-Stack &amp; AI Engineering roles</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-3">
                Connect Directly
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-sm justify-center gap-2 hover:border-[#25D366] hover:text-[#25D366]"
                  aria-label="Connect on WhatsApp"
                >
                  <WhatsAppIcon size={16} aria-hidden="true" /> WhatsApp
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-sm justify-center gap-2"
                  aria-label="Connect on LinkedIn"
                >
                  <LinkedinIcon size={16} aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-sm justify-center gap-2"
                  aria-label="View GitHub Profile"
                >
                  <GithubIcon size={16} aria-hidden="true" /> GitHub
                </a>
                <a
                  href={SITE_CONFIG.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-sm justify-center gap-2"
                  aria-label="Connect on X (Twitter)"
                >
                  <XIcon size={14} aria-hidden="true" /> @{SITE_CONFIG.twitterHandle}
                </a>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-sm justify-center gap-2 sm:col-span-2 hover:border-[#E1306C] hover:text-[#E1306C]"
                  aria-label="Follow on Instagram"
                >
                  <InstagramIcon size={16} aria-hidden="true" /> @{SITE_CONFIG.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Enquiry Form */}
          <div className="lg:col-span-7">
            <div
              className="bg-[var(--bg-card)] border rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
              style={{ borderColor: 'var(--border)' }}
            >
              {status === 'success' ? (
                <div role="status" aria-live="polite" className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto" aria-hidden="true">
                    <CheckCircle2 size={36} />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">Message Received!</h2>
                  <p className="text-[var(--text-secondary)] max-w-md mx-auto text-base leading-relaxed">
                    {feedbackMessage}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          projectType: 'Web Application',
                          message: '',
                          honeypot: '',
                        });
                      }}
                      className="btn btn-primary text-sm w-full sm:w-auto"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(`Project Enquiry: ${formData.projectType}`)}&body=${encodeURIComponent(`Hi Yash,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`)}`}
                      className="btn btn-secondary text-sm w-full sm:w-auto inline-flex items-center justify-center gap-1.5"
                    >
                      <Mail size={15} aria-hidden="true" /> Open Mail Client
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
                  {/* Anti-spam honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot || ''}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-sm flex items-start gap-3 mb-6"
                    >
                      <AlertCircle size={18} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{feedbackMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name <span className="text-[var(--accent)]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                      }}
                      className="form-input"
                      disabled={status === 'submitting'}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                    />
                    {fieldErrors.name && (
                      <span id="contact-name-error" className="form-error" role="alert">
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Your Email <span className="text-[var(--accent)]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                        }}
                        className="form-input"
                        disabled={status === 'submitting'}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                      />
                      {fieldErrors.email && (
                        <span id="contact-email-error" className="form-error" role="alert">
                          {fieldErrors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">
                        Phone Number <span className="text-xs text-[var(--text-muted)] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="form-group">
                    <label htmlFor="contact-project-type" className="form-label">
                      Project Type <span className="text-[var(--accent)]" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="form-select"
                      disabled={status === 'submitting'}
                      aria-required="true"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Web Application">Web Application</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Existing Product Improvement">Existing Product Improvement</option>
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Internship / Full-time Opportunity">Internship / Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message / Project Description <span className="text-[var(--accent)]" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about what you are building, timeline, or requirements..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
                      }}
                      className="form-textarea resize-y"
                      disabled={status === 'submitting'}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                    />
                    {fieldErrors.message && (
                      <span id="contact-message-error" className="form-error" role="alert">
                        {fieldErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-primary w-full sm:w-auto px-8 py-3.5 text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
