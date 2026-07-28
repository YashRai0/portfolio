"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    year: "2024",
    title: "College Enrollment & Foundations",
    description: "Enrolled in BCA at United Institute of Management, FUGS (Prayagraj). Started programming with C, Python, HTML, CSS & JavaScript.",
  },
  {
    year: "2025",
    title: "Full Stack & Generative AI Engineering",
    description: "Deep-dived into React, Node.js, Express & REST APIs. Explored LLM integration (OpenAI, Gemini, Claude, Groq API), RAG architectures & prompt engineering. Earned certifications from Oracle, IBM & Microsoft.",
  },
  {
    year: "2026",
    title: "Production SaaS & Live Products",
    description: "Shipped flagship ATS resume analyzer ResumeAI4U (live with Clerk auth & Razorpay) and AI Study Assistant (live RAG platform at ai-study-assistant-0.vercel.app). Implemented Docker & GitHub Actions CI/CD pipelines.",
  },
  {
    year: "2026 — Present",
    title: "Internship Readiness",
    description: "Actively interviewing and seeking Software Engineering, AI Engineering, and Full Stack Development Internships.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-[#0B0F19] text-[#F9FAFB]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="font-mono text-sm text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
              // 05 — Timeline
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6"
          >
            Engineering Journey & Milestones
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 pb-4">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className="mb-12 pl-8 relative last:mb-0"
            >
              <div className="absolute -left-[1.35rem] top-1.5 w-10 h-10 bg-[#0B0F19] flex items-center justify-center">
                <CircleDot className="w-5 h-5 text-[#3B82F6]" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <span className="font-mono text-xl font-bold text-[#F9FAFB]">
                  {item.year}
                </span>
                <span className="hidden md:inline text-white/20">—</span>
                <h3 className="text-lg md:text-xl font-bold text-[#3B82F6] font-sans">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed font-sans max-w-3xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
