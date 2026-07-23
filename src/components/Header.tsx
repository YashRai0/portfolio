import React from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

export default function Header() {
  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "GitHub", href: "/#github" },
    { label: "Projects", href: "/#projects" },
    { label: "Journey", href: "/#timeline" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-16 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <Link to="/" className="nav-logo text-lg font-mono font-semibold tracking-tight text-[var(--cyan)] hover:opacity-90 transition-opacity">
        &lt;<span className="text-[var(--purple)]">Yash</span> /&gt;
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a 
              href={link.href} 
              className="text-sm font-medium tracking-wider text-[var(--muted)] uppercase hover:text-[var(--cyan)] transition-colors no-underline"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <Link 
            to="/admin" 
            className="text-sm font-medium tracking-wider text-[var(--muted)] uppercase hover:text-[var(--cyan)] transition-colors no-underline"
            activeProps={{ className: "text-[var(--cyan)] font-bold" }}
          >
            Admin
          </Link>
        </li>
      </ul>

      <a 
        href="/#contact"
        className="hidden md:inline-block border border-[var(--cyan)] text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-slate-950 px-5 py-2 rounded font-mono text-xs transition-all duration-200 no-underline"
      >
        Hire Me
      </a>

      {/* Mobile Navigation via shadcn Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className="p-2 text-[var(--cyan)] hover:bg-white/5 rounded transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#050A18] border-l border-white/10 text-white w-[250px] p-6">
            <SheetTitle className="text-left font-mono text-[var(--cyan)] mb-8">&lt;Menu /&gt;</SheetTitle>
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-base font-semibold tracking-wider text-[var(--muted)] uppercase hover:text-[var(--cyan)] transition-colors no-underline block"
                >
                  {link.label}
                </a>
              ))}
              <Link 
                to="/admin" 
                className="text-base font-semibold tracking-wider text-[var(--muted)] uppercase hover:text-[var(--cyan)] transition-colors no-underline block"
                activeProps={{ className: "text-[var(--cyan)]" }}
              >
                Admin
              </Link>
              <a 
                href="/#contact"
                className="border border-[var(--cyan)] text-[var(--cyan)] text-center py-2.5 rounded font-mono text-sm transition-colors mt-4 no-underline block"
              >
                Hire Me
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
