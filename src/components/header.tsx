"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Journey", href: "#journey" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#3B82F6] z-50 origin-left"
        style={{ scaleX }}
      />
      <header 
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-[#0B0F19]/80 backdrop-blur-md border-white/5 py-4 shadow-lg shadow-black/10" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center space-x-1 font-mono text-xl font-bold z-50">
              <span className="text-white group-hover:text-[#F9FAFB] transition-colors">&lt;YashRai</span>
              <span className="text-[#7C3AED] group-hover:text-[#8B5CF6] transition-colors"> /&gt;</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link 
                href="#contact"
                className="text-sm font-medium px-5 py-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Contact Me
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative z-50 p-2 text-[#9CA3AF] hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl md:hidden"
            >
              <nav className="flex flex-col space-y-4 px-6 pb-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-[#9CA3AF] hover:text-white py-2 transition-colors border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 text-center text-sm font-medium px-5 py-3 rounded-md bg-[#3B82F6] text-white hover:bg-[#2563EB] transition-colors"
                >
                  Contact Me
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export { Header };
