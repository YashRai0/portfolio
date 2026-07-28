"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Server, Database, BrainCircuit, Activity } from "lucide-react";
import Link from "next/link";

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0B0F19] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-4"
          >
            <span className="font-mono text-sm text-[#7C3AED] font-semibold tracking-wider uppercase">
              // 01 — Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F9FAFB] tracking-tight">
              Production AI Case Studies
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl leading-relaxed">
              Real applications built with engineering rigor, AI integration, and production infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12 md:space-y-24">
          
          {/* Case Study 1: ResumeAI4U */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#111827] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-10 transition-colors shadow-lg"
          >
            <div className="lg:col-span-12 flex flex-col space-y-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-mono font-medium">
                    <Activity className="w-3 h-3 mr-1.5" />
                    LIVE PRODUCTION (2026)
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                    ResumeAI4U (Flagship SaaS)
                  </h3>
                  <p className="text-lg text-[#F9FAFB] font-medium">
                    AI-Powered ATS Resume Analyzer & Optimizer
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link 
                    href="https://resumeai4u.vercel.app/" 
                    target="_blank"
                    className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="https://github.com/YashRai0/resume-optimizer" 
                    target="_blank"
                    className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                <div className="space-y-4">
                  <h4 className="text-sm font-mono text-[#9CA3AF] uppercase tracking-wider flex items-center">
                    <BrainCircuit className="w-4 h-4 mr-2 text-[#7C3AED]" /> The Challenge
                  </h4>
                  <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
                    <p>
                      <strong className="text-[#F9FAFB] block mb-1">Problem:</strong>
                      80% of resumes are filtered out by ATS parsers before reaching a human recruiter due to missing keywords and formatting errors.
                    </p>
                    <p>
                      <strong className="text-[#F9FAFB] block mb-1">Solution:</strong>
                      An instant AI analysis engine that parses resumes against target job descriptions, delivering ATS match scores, keyword gap analysis, and line-by-line optimization.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-mono text-[#9CA3AF] uppercase tracking-wider flex items-center">
                    <Server className="w-4 h-4 mr-2 text-[#3B82F6]" /> Engineering & Architecture
                  </h4>
                  <ul className="space-y-3 text-[#9CA3AF] text-sm leading-relaxed list-disc list-inside marker:text-[#3B82F6]">
                    <li>Groq API / LLM backend for sub-second inference latency over standard GPT-4.</li>
                    <li>Clerk authentication + Razorpay billing pipeline integration.</li>
                    <li>React + Node.js REST API architecture hosted on Vercel with automated CI/CD.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                  <span className="text-[#F9FAFB] font-medium whitespace-nowrap">Key Features:</span>
                  <span className="text-[#9CA3AF]">ATS Scoring, Keyword Gap Detection, AI Line-by-Line Suggestions, Auth & Payments, Mobile Responsive.</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React', 'Node.js', 'Groq API', 'TypeScript', 'Razorpay', 'Clerk', 'Vercel'].map(tag => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-md border border-[#3B82F6]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2: AI Study Assistant */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#111827] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-10 transition-colors shadow-lg"
          >
            <div className="lg:col-span-12 flex flex-col space-y-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-mono font-medium">
                    <Activity className="w-3 h-3 mr-1.5" />
                    LIVE PRODUCTION (2026)
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#7C3AED] transition-colors">
                    AI Study Assistant (RAG Platform)
                  </h3>
                  <p className="text-lg text-[#F9FAFB] font-medium">
                    Interactive Study & PDF Knowledge Base Powered by RAG
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link 
                    href="https://ai-study-assistant-0.vercel.app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="https://github.com/YashRai0/ai-study-assistant" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                <div className="space-y-4">
                  <h4 className="text-sm font-mono text-[#9CA3AF] uppercase tracking-wider flex items-center">
                    <BrainCircuit className="w-4 h-4 mr-2 text-[#7C3AED]" /> The Challenge
                  </h4>
                  <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
                    <p>
                      <strong className="text-[#F9FAFB] block mb-1">Problem:</strong>
                      Students struggle to digest long academic PDFs and lecture notes efficiently, spending hours skimming 200+ page documents.
                    </p>
                    <p>
                      <strong className="text-[#F9FAFB] block mb-1">Solution:</strong>
                      An AI study companion that turns notes into an interactive learning environment with semantic search, instant QA, auto-flashcards, and quizzes.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-mono text-[#9CA3AF] uppercase tracking-wider flex items-center">
                    <Database className="w-4 h-4 mr-2 text-[#3B82F6]" /> Engineering & Architecture
                  </h4>
                  <ul className="space-y-3 text-[#9CA3AF] text-sm leading-relaxed list-disc list-inside marker:text-[#3B82F6]">
                    <li>RAG Pipeline: Vector embeddings with FAISS/ChromaDB + Gemini/Groq LLM for grounded contextual responses with citation support.</li>
                    <li>Supabase storage for document management & structured user metadata.</li>
                    <li>Express + Node.js backend handling document parsing, chunking, and vector indexing.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 text-sm">
                  <div className="flex flex-col space-y-2 flex-1">
                    <span className="text-[#F9FAFB] font-medium">Key Features:</span>
                    <span className="text-[#9CA3AF]">PDF Upload, RAG Chat with Notes, Citation Support, Smart Summaries, Auto-Flashcards, Quiz Generator, Progress Analytics.</span>
                  </div>
                  <div className="flex flex-col space-y-2 flex-1">
                    <span className="text-[#F9FAFB] font-medium">Future Roadmap:</span>
                    <span className="text-[#9CA3AF]">Voice Tutor, OCR Support, Mobile App, Exam Predictor.</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React', 'TypeScript', 'Node.js', 'Express', 'Gemini / Groq', 'RAG / Vector DB', 'Supabase', 'Tailwind CSS'].map(tag => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-[#7C3AED]/10 text-[#a78bfa] rounded-md border border-[#7C3AED]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export { Projects };
