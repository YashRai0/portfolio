"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Code2 } from "lucide-react";

const STATS = [
  { label: "Production SaaS", value: "2 Live", desc: "ResumeAI4U & AI Study Assistant" },
  { label: "AI & RAG Applications", value: "Live", desc: "Groq LLM & RAG Vector Pipelines" },
  { label: "Certifications", value: "4 Earned", desc: "Oracle, IBM, Microsoft & GenAI" },
  { label: "Core Stack", value: "10+ Tools", desc: "React, Node, TS, Docker, CI/CD" },
];

const PROOF_POINTS = [
  {
    icon: Cpu,
    title: "AI & LLM Integration",
    detail: "Production experience with OpenAI, Gemini, Claude & Groq Llama-3 API for sub-second inference."
  },
  {
    icon: Code2,
    title: "Full-Stack Architecture",
    detail: "Type-safe React frontends connected to Node.js/Express REST APIs and Supabase/PostgreSQL databases."
  },
  {
    icon: ShieldCheck,
    title: "DevOps & Cloud Ready",
    detail: "Configured GitHub Actions CI/CD pipelines, Docker containers, and automated Vercel deployments."
  }
];

export function SocialProof() {
  return (
    <section className="w-full py-16 bg-[#0B0F19] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#111827] border border-white/5 p-5 rounded-xl text-center md:text-left"
            >
              <div className="text-2xl md:text-3xl font-bold font-mono text-[#3B82F6] mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#F9FAFB] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#9CA3AF]">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proof Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROOF_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#111827]/60 border border-white/5 p-6 rounded-xl flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#F9FAFB]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
