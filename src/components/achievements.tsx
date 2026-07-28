"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Zap, BrainCircuit, Cloud, BookOpen, GraduationCap } from "lucide-react";

const stats = [
  { value: "2", label: "Live Production AI SaaS Products" },
  { value: "2", label: "Deployed Live Web Applications" },
  { value: "4", label: "Verified Technical Certifications" },
  { value: "10+", label: "Modern Engineering Technologies Mastered" },
];

const highlights = [
  {
    title: "Full-Stack AI Products",
    description: "Built and deployed live SaaS applications with real-world authentication & payments.",
    icon: <Rocket className="w-5 h-5 text-[#3B82F6]" />,
  },
  {
    title: "Sub-Second AI Latency",
    description: "Optimized LLM inference using Groq Llama-3 API for lightning-fast user experience.",
    icon: <Zap className="w-5 h-5 text-[#3B82F6]" />,
  },
  {
    title: "RAG Pipeline Engineering",
    description: "Designed vector-search context retrieval systems for document QA.",
    icon: <BrainCircuit className="w-5 h-5 text-[#3B82F6]" />,
  },
  {
    title: "Cloud & CI/CD Deployment",
    description: "Configured automated GitHub Actions workflows, Docker containers & Vercel hosting.",
    icon: <Cloud className="w-5 h-5 text-[#3B82F6]" />,
  },
  {
    title: "Continuous Upskilling",
    description: "Earned certifications from Oracle, IBM, and Microsoft in AI & automation.",
    icon: <BookOpen className="w-5 h-5 text-[#3B82F6]" />,
  },
  {
    title: "Academic Progression",
    description: "5th semester BCA student building production software alongside CS fundamentals.",
    icon: <GraduationCap className="w-5 h-5 text-[#3B82F6]" />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0B0F19] text-[#F9FAFB]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="font-mono text-sm text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
              {"// 03 — Impact"}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6"
          >
            Achievements & Key Metrics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-[#9CA3AF] text-lg max-w-2xl font-sans"
          >
            Measurable outputs and milestones achieved in software & AI engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#111827] border border-white/10 rounded-xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-4 font-mono">
                {stat.value}
              </div>
              <div className="text-[#9CA3AF] text-sm font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/50 transition-all"
            >
              <div className="w-10 h-10 bg-[#0B0F19] rounded-lg border border-white/5 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#F9FAFB] mb-2 font-sans">
                {item.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
