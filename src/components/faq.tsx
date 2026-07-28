"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What does Yash Rai specialize in?",
    answer: "I specialize in AI Full Stack Development. I build production-ready applications using React, Next.js, TypeScript, Node.js, and integrate AI APIs (OpenAI, Gemini, Claude, Groq) along with RAG vector search pipelines."
  },
  {
    question: "What is ResumeAI4U?",
    answer: "ResumeAI4U is a live SaaS product I built in 2026 that helps job seekers beat ATS filters. Paste your resume and a job description to get an instant ATS score, keyword gap analysis, and line-by-line improvement suggestions. Built with React, Node.js, Groq API, Razorpay payments, and Clerk authentication."
  },
  {
    question: "What is the AI Study Assistant?",
    answer: "AI Study Assistant is a live AI platform (ai-study-assistant-0.vercel.app) built in 2026. It uses RAG (Retrieval-Augmented Generation) and vector embeddings to turn PDFs and notes into an interactive study session with instant QA, smart summaries, auto-flashcards, and quizzes."
  },
  {
    question: "What technologies does Yash use?",
    answer: "Frontend: React, TypeScript, JavaScript, Tailwind CSS. Backend: Node.js, Express, REST APIs. AI: OpenAI, Gemini, Claude, Groq API, LangChain, RAG Pipelines. DevOps & Databases: Supabase, PostgreSQL, Docker, GitHub Actions CI/CD, Vercel."
  },
  {
    question: "Is Yash available for internships?",
    answer: "Yes! I am actively seeking Software Engineering, AI Engineering, and Full Stack Development Internships (remote or onsite). I typically respond within 24 hours. Contact me at yashrai6635@gmail.com."
  },
  {
    question: "What is Yash's educational background?",
    answer: "I enrolled in the BCA program at United Institute of Management, FUGS (Prayagraj) in 2024. I maintain a strong foundation in CS fundamentals including OS, DBMS, DSA, and Software Engineering."
  },
  {
    question: "What certifications has Yash earned?",
    answer: "I hold verified certifications in Oracle Cloud Infrastructure AI Foundations, IBM SkillsBuild GenAI for Data Analytics, Microsoft Power Automate, and Prompt Engineering & Generative AI."
  },
  {
    question: "How can recruiters contact Yash Rai?",
    answer: "You can reach me directly via email at yashrai6635@gmail.com, connect on LinkedIn at linkedin.com/in/yash-rai-1a218433b, or inspect my repositories on GitHub at github.com/YashRai0. I respond within 24 hours."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-[#050709] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-[#4A5068] mb-4 block">// 07 — FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F2F8] font-sans">
            Frequently asked <span className="text-[#00E5FF]">questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl rounded-2xl overflow-hidden transition-colors",
                  isOpen ? "bg-white/[0.08] border-white/[0.12]" : "hover:bg-white/[0.06]"
                )}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                >
                  <span className="font-sans font-medium text-lg text-[#F0F2F8] pr-8">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center transition-transform duration-300",
                      isOpen ? "rotate-180 bg-[#00E5FF]/20 text-[#00E5FF]" : "text-[#4A5068]"
                    )}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-[#4A5068] font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
