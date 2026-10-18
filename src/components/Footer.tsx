import { Link } from '@tanstack/react-router';
import { SITE_CONFIG } from '../lib/siteConfig';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 footer-brand">
            <h3>
              YashRai<span>.</span>
            </h3>
            <p>
              Developer and BCA student building intelligent web applications, AI-powered tools, and practical software products.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="Yash Rai GitHub profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="Yash Rai LinkedIn profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={SITE_CONFIG.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="Yash Rai X profile"
              >
                <XIcon size={16} />
              </a>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[#E1306C] hover:text-[#E1306C]"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="Yash Rai Instagram profile"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="WhatsApp Yash Rai"
              >
                <WhatsAppIcon size={17} />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="Email Yash Rai"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/certificates">Certificates</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Work Column */}
          <div className="footer-col">
            <h4>Work</h4>
            <ul>
              <li>
                <Link to="/work/prepnexia" className="inline-flex items-center gap-1">
                  Prepnexia (2ambuddy)
                </Link>
              </li>
              <li>
                <Link to="/work/resumeai4u" className="inline-flex items-center gap-1">
                  ResumeAI4u
                </Link>
              </li>
              <li>
                <a
                  href="https://2ambuddy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  Live 2ambuddy <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://resumeai4u.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  Live ResumeAI4u <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><Link to="/contact">Let's Talk</Link></li>
              <li>
                <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium">
                  WhatsApp: {SITE_CONFIG.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="break-all">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.twitter} target="_blank" rel="noopener noreferrer">
                  X (@{SITE_CONFIG.twitterHandle})
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram (@{SITE_CONFIG.instagramHandle})
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span>&copy; {currentYear} Yash Rai. Built with purpose.</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for software engineering internships &amp; projects
          </span>
        </div>
      </div>
    </footer>
  );
}
