"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Cloud, Cpu, Workflow, Sparkles } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    issuer: "Oracle Cloud",
    year: "2025",
    icon: <Cloud className="w-6 h-6 text-[#3B82F6]" />,
    skills: [
      "OCI AI Services",
      "Machine Learning Concepts",
      "Large Language Models",
    ],
  },
  {
    title: "IBM SkillsBuild — Supercharge Your Data Analytics with GenAI",
    issuer: "IBM",
    year: "2025",
    icon: <Cpu className="w-6 h-6 text-[#3B82F6]" />,
    skills: [
      "Generative AI",
      "Data Analysis",
      "AI-Assisted Insights",
      "Prompt Engineering",
    ],
  },
  {
    title: "Microsoft Power Automate",
    issuer: "Microsoft",
    year: "2025",
    icon: <Workflow className="w-6 h-6 text-[#3B82F6]" />,
    skills: [
      "Workflow Automation",
      "RPA",
      "System Integration",
      "Business Process Logic",
    ],
  },
  {
    title: "Prompt Engineering & Generative AI Add-on",
    issuer: "Industry Specialized Course",
    year: "2025",
    icon: <Sparkles className="w-6 h-6 text-[#3B82F6]" />,
    skills: [
      "LLM Fine-Tuning Principles",
      "Context Window Optimization",
      "RAG Architectures",
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#0B0F19] text-[#F9FAFB]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="font-mono text-sm text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
              {"// 02 — Credentials"}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6"
          >
            Certifications & Industry Training
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-[#9CA3AF] text-lg max-w-2xl font-sans"
          >
            Verified technical certifications in Cloud AI, Data Analytics, Automation, and Prompt Engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/50 transition-all group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-[#0B0F19] rounded-lg border border-white/5 group-hover:bg-[#3B82F6]/10 transition-colors">
                  {cert.icon}
                </div>
                <span className="font-mono text-xs text-[#9CA3AF] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {cert.year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 font-sans text-[#F9FAFB]">
                {cert.title}
              </h3>
              <p className="text-[#6B7280] text-sm mb-6 font-mono flex items-center gap-2">
                <Award className="w-4 h-4" /> {cert.issuer}
              </p>

              <div className="mt-auto">
                <h4 className="text-xs uppercase tracking-wider text-[#9CA3AF] font-bold mb-3">Skills Learned</h4>
                <ul className="space-y-2">
                  {cert.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#F9FAFB]/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      {skill}
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
