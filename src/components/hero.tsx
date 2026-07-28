"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const commands = [
  { cmd: "whoami", out: "→ Yash Rai | AI Product Engineer · Prayagraj, India" },
  { cmd: "cat tech.txt", out: "→ RAG Pipelines · LLMs · React · Node.js · Docker · CI/CD" },
  { cmd: "ls projects/", out: "→ resumeai4u [LIVE SaaS] | ai-study-assistant [LIVE RAG]" },
];

const techPills = [
  "React", "TypeScript", "Node.js", "Generative AI", "RAG", "Docker", "CI/CD", "Supabase"
];

export default function Hero() {
  const [cmdIndex, setCmdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCmdIndex((prev) => (prev + 1) % commands.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0F19]">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-3">
              <span className="font-mono text-sm text-[#9CA3AF] tracking-wider">
                {"// Full Stack & AI Engineering"}
              </span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-[#111827] border border-white/10 rounded-full px-4 py-1.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-[#F9FAFB]">
                AI Product Engineer
              </span>
              <span className="text-xs text-[#9CA3AF] border-l border-white/10 pl-2 ml-2 hidden sm:inline">
                Open for SWE & AI Internships
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F9FAFB] leading-tight">
              Building intelligent software with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#7C3AED]">
                RAG • LLMs • Full Stack Engineering
              </span>
            </h1>

            <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-2xl">
              I&apos;m Yash Rai — an AI Product Engineer building production-ready SaaS applications with React, TypeScript, Node.js, Generative AI, Docker, and CI/CD. Creator of ResumeAI4U.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="#projects" 
                className="inline-flex items-center justify-center space-x-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="https://github.com/YashRai0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 border border-white/10 hover:border-white/20 bg-white/5 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </Link>
            </div>

            <div className="pt-8">
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/5 rounded-md text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#111827] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-black/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 text-xs text-[#6B7280] flex items-center">
                  <Terminal className="w-3 h-3 mr-1" /> bash ~ yash-portfolio
                </div>
              </div>
              <div className="p-6 min-h-[250px] bg-[#0B0F19]/50 text-[#F9FAFB]">
                <div className="flex flex-col space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={cmdIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center flex-wrap text-[#3B82F6]">
                        <span className="text-emerald-400 mr-2">yash@ai-eng</span>
                        <span className="text-[#9CA3AF] mr-2">~/portfolio</span>
                        <span className="text-white mr-2">$</span>
                        <span className="text-white">{commands[cmdIndex].cmd}</span>
                      </div>
                      <div className="text-[#9CA3AF] pl-4">
                        {commands[cmdIndex].out}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="mt-4 flex items-center text-[#3B82F6]">
                  <span className="text-emerald-400 mr-2">yash@ai-eng</span>
                  <span className="text-[#9CA3AF] mr-2">~/portfolio</span>
                  <span className="text-white mr-2">$</span>
                  <span className="w-2 h-4 bg-white/70 animate-pulse inline-block ml-2" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export { Hero };
