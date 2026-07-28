"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Brain, Database, GitBranch, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const techStack = [
  {
    category: "Frontend",
    icon: <Monitor className="w-5 h-5 text-[#3B82F6]" />,
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    usedIn: ["✓ ResumeAI4U", "✓ AI Study Assistant", "✓ Portfolio"],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5 text-[#3B82F6]" />,
    items: ["Node.js", "Express", "REST APIs"],
    usedIn: ["✓ ResumeAI4U", "✓ AI Study Assistant"],
  },
  {
    category: "AI & ML",
    icon: <Brain className="w-5 h-5 text-[#3B82F6]" />,
    items: ["OpenAI", "Gemini", "Claude", "Groq API", "LangChain", "Prompt Engineering", "RAG"],
    usedIn: ["✓ ResumeAI4U", "✓ AI Study Assistant"],
  },
  {
    category: "Database & Storage",
    icon: <Database className="w-5 h-5 text-[#3B82F6]" />,
    items: ["Supabase", "PostgreSQL", "Vector DB (FAISS/ChromaDB)"],
    usedIn: ["✓ AI Study Assistant"],
  },
  {
    category: "DevOps & Cloud",
    icon: <GitBranch className="w-5 h-5 text-[#3B82F6]" />,
    items: ["Git", "GitHub", "Docker", "CI/CD (GitHub Actions)", "Vercel"],
    usedIn: ["✓ ResumeAI4U", "✓ Portfolio Pipeline"],
  },
  {
    category: "Developer Tools",
    icon: <Wrench className="w-5 h-5 text-[#3B82F6]" />,
    items: ["VS Code", "Postman", "Figma", "npm", "Cursor"],
    usedIn: ["✓ Daily Workflow & Prototyping"],
  },
];

export default function Features() {
  return (
    <section id="skills" className="py-24 bg-[#0B0F19] text-[#F9FAFB]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="font-mono text-sm text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
              // 04 — Tech Stack
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6"
          >
            Evidence-Based Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-[#9CA3AF] text-lg max-w-2xl font-sans"
          >
            Categorized technologies with verified project usage (no arbitrary percentage bars).
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#111827] border border-white/10 p-6 rounded-xl hover:border-[#3B82F6]/50 transition-all flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#0B0F19] rounded-lg border border-white/5">
                  {stack.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F9FAFB] font-sans">
                  {stack.category}
                </h3>
              </div>

              <div className="mb-6 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-[#F9FAFB] font-sans"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 mt-auto">
                <h4 className="text-xs uppercase tracking-wider text-[#6B7280] font-bold mb-3 font-mono">
                  Verified Usage
                </h4>
                <ul className="space-y-1.5">
                  {stack.usedIn.map((usage, i) => (
                    <li key={i} className="text-sm text-[#9CA3AF] font-sans">
                      {usage}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
