"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Layers, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Rocket,
    title: "Ships Real Products",
    description: "Not just localhost demos. I build and deploy products real people use — with auth, payments, and production infrastructure."
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "I integrate AI where it matters — from RAG pipelines to intelligent document analysis. Not buzzwords, real implementations."
  },
  {
    icon: Layers,
    title: "Full Stack Capability",
    description: "From Figma-quality frontends to scalable APIs and databases. One developer, complete product delivery."
  },
  {
    icon: Zap,
    title: "Fast & Communicative",
    description: "24-hour response time. Rapid prototyping with modern tools. You'll never wonder about project status."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export function WhyChoose() {
  return (
    <section className="w-full py-24 bg-[#050709] px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[#4A5068] mb-4">// 03 — Why Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F2F8]">
            Why work with <span className="text-[#00E5FF]">Yash</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl p-8 rounded-2xl flex flex-col items-start gap-6 hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#8B5CF6]/20 flex items-center justify-center border border-white/[0.07]">
                  <Icon className="w-8 h-8 text-[#F0F2F8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F0F2F8] mb-3">{feature.title}</h3>
                  <p className="text-[#4A5068] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChoose;
