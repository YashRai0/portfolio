import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What does Yash specialize in?",
    answer:
      "Full-stack web development and AI-assisted application development, with a focus on building practical software using modern frontend (React, TypeScript), backend (Node.js, Express, REST APIs), and AI integration (Groq, Claude, Gemini).",
  },
  {
    question: "What is ResumeAI4U?",
    answer:
      "An AI-assisted resume optimization platform designed to help users analyze and improve their resumes. Users paste their resume and target job description to get ATS compatibility analysis, keyword gap identification, and line-by-line improvement suggestions.",
  },
  {
    question: "What is 2ambuddy (AI Study Assistant)?",
    answer:
      "An AI-powered study assistant that lets users upload learning material (PDFs) and generate grounded study assistance through document-grounded question answering, summaries, flashcards, and quizzes built on a RAG pipeline with vector search.",
  },
  {
    question: "What technologies does Yash use?",
    answer:
      "Frontend: React, JavaScript, TypeScript, Tailwind CSS, HTML5/CSS3. Backend: Node.js, Express.js, MongoDB, REST APIs. AI: Groq API, Claude API, Gemini API, RAG workflows, prompt engineering. Tools: Git/GitHub, Vercel, VS Code. Fundamentals: OS, DBMS, Networking, DSA.",
  },
  {
    question: "Is Yash available for internships?",
    answer:
      "Yes. Yash is actively seeking Software Engineering, Full-Stack Development, and AI-assisted engineering internships (remote or onsite) with fast onboarding and immediate contribution.",
  },
  {
    question: "What is Yash's educational background?",
    answer:
      "Bachelor of Computer Applications (BCA) at United Institute of Management (FUGS), Prayagraj (2024–2027, currently in 5th semester), studying OS, DBMS, algorithms, and software engineering.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-16">
      <p className="section-label reveal">// FAQ</p>
      <h2 className="section-title reveal">
        Frequently asked <span className="accent">questions</span>
      </h2>
      <p
        className="reveal"
        style={{
          color: "var(--text-body)",
          marginBottom: "2.5rem",
          maxWidth: "640px",
        }}
      >
        Direct answers to common questions about specialization, projects, tech
        stack, and internship availability.
      </p>

      <div className="faq-list reveal">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`faq-item ${isOpen ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`faq-icon ${isOpen ? "rotated" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
