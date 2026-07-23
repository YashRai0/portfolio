import React from "react";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 md:px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-950/20">
      <span className="font-mono text-xs text-[var(--muted)] text-center md:text-left">
        &copy; {year} Yash Rai · Built with ❤️ & lots of ☕
      </span>
      <span>
        <Link 
          to="/admin" 
          className="font-mono text-xs text-[var(--muted)] hover:text-[var(--cyan)] transition-colors no-underline"
        >
          ⚙️ Admin Panel
        </Link>
      </span>
      <span className="font-mono text-xs text-[var(--cyan)] text-center md:text-right">
        // open to opportunities
      </span>
    </footer>
  );
}
