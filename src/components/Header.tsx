import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, ArrowUpRight, Home, User, Code2, Briefcase, Layers } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About', href: '/about', icon: User },
    { label: 'Skills', href: '/skills', icon: Code2 },
    { label: 'Work', href: '/work', icon: Briefcase },
    { label: 'Experience', href: '/experience', icon: Layers },
  ];

  const isCurrent = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200" style={{
      background: 'color-mix(in srgb, var(--bg) 88%, transparent)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="page-container h-16 md:h-18 flex flex-row items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-0.5 transition-transform hover:scale-[1.02]"
          style={{ color: 'var(--text-primary)' }}
        >
          YashRai<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        {/* Desktop Navigation: Exactly Home, About, Skills, Work, Experience */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full border" style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-sm)'
        }} aria-label="Main navigation">
          {navItems.map((item) => {
            const active = isCurrent(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  active
                    ? 'font-semibold text-white shadow-xs'
                    : 'hover:text-[var(--text-primary)]'
                }`}
                style={
                  active
                    ? { background: 'var(--accent)', color: '#FFFFFF' }
                    : { color: 'var(--text-secondary)' }
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Right: Theme Toggle + "Let's Talk ↗" */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ fontSize: '0.88rem', padding: '0.55rem 1.25rem' }}
          >
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border flex items-center justify-center transition-colors"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b px-6 py-6 transition-all duration-300"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isCurrent(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors"
                  style={
                    active
                      ? { background: 'var(--accent-subtle)', color: 'var(--accent)' }
                      : { color: 'var(--text-primary)' }
                  }
                >
                  <Icon size={18} style={{ color: active ? 'var(--accent)' : 'var(--text-secondary)' }} />
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t" style={{ borderColor: 'var(--border)' }}>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full justify-center"
              >
                Let's Talk <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
