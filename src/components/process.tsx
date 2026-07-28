"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "Understanding your problem, users, and goals through deep research."
  },
  {
    num: "02",
    title: "Architecture",
    description: "Planning the tech stack, data models, and system design."
  },
  {
    num: "03",
    title: "Build",
    description: "Shipping fast with React, Node.js, and modern AI tooling."
  },
  {
    num: "04",
    title: "Deploy",
    description: "Production-ready on Vercel with CI/CD from day one."
  },
  {
    num: "05",
    title: "Iterate",
    description: "Continuous improvement based on real user feedback."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export function Process() {
  return (
    <section className="w-full py-24 bg-[#050709] px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-[#4A5068] mb-4">{"// 04 — Process"}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F2F8]">
            How I <span className="text-[#00E5FF]">work</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-8 right-8 border-t-2 border-dashed border-[#4A5068]/30 -z-10" />
          
          {/* Connecting Line Mobile */}
          <div className="block lg:hidden absolute top-8 bottom-8 left-[28px] border-l-2 border-dashed border-[#4A5068]/30 -z-10" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex lg:flex-col gap-6 lg:gap-8 items-start lg:items-center lg:text-center group flex-1"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#050709] border-2 border-[#00E5FF] flex items-center justify-center font-mono text-[#00E5FF] font-bold text-lg group-hover:bg-[#00E5FF]/10 transition-colors">
                  {step.num}
                </div>
                <div className="pt-2 lg:pt-0">
                  <h3 className="text-xl font-bold text-[#F0F2F8] mb-2">{step.title}</h3>
                  <p className="text-[#4A5068] leading-relaxed text-sm lg:text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
