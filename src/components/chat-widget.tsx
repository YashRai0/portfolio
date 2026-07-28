"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "bot";
  content: string;
};

const SUGGESTIONS = [
  "What can Yash build?",
  "Is he open to internships?",
  "Best project?",
  "Tech stack?"
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hey! 👋 I'm Yash's AI assistant. Ask me anything about his skills, projects, or availability for work!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleSubmit = async (e?: React.FormEvent, suggestionText?: string) => {
    if (e) e.preventDefault();
    
    const textToSubmit = suggestionText || input;
    if (!textToSubmit.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: textToSubmit.trim() }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSubmit.trim(), history: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.reply || "I'm sorry, I couldn't process that right now." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", content: "Oops! Something went wrong. Please try again later or email Yash directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Chat"
        className={cn(
          "fixed bottom-7 right-7 w-14 h-14 rounded-full bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl flex items-center justify-center text-2xl z-40 shadow-xl transition-all duration-300 hover:scale-110",
          isOpen ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100 animate-[pulse_3s_ease-in-out_infinite]"
        )}
      >
        🤖
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-7 right-7 w-[calc(100vw-3.5rem)] sm:w-[380px] max-h-[500px] h-[75vh] flex flex-col bg-[#0C0F15]/90 border border-white/[0.07] backdrop-blur-2xl rounded-2xl z-50 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/[0.07] bg-white/[0.02]">
              <div>
                <h3 className="font-sans font-semibold text-[#F0F2F8] text-sm">Ask Yash&apos;s AI</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-[#4A5068]">Online · Portfolio Assistant</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/[0.05] text-[#4A5068] hover:text-[#F0F2F8] transition-colors"
                aria-label="Close Chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "max-w-[85%] rounded-2xl p-3 font-sans text-sm leading-relaxed",
                    msg.role === "user"
                      ? "ml-auto bg-[#00E5FF]/20 text-[#00E5FF] rounded-tr-sm"
                      : "mr-auto bg-white/[0.04] border border-white/[0.07] text-[#F0F2F8] rounded-tl-sm"
                  )}
                >
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="mr-auto max-w-[85%] rounded-2xl p-4 bg-white/[0.04] border border-white/[0.07] rounded-tl-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#4A5068] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-[#4A5068] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-[#4A5068] rounded-full animate-bounce" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/[0.02] border-t border-white/[0.07]">
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {SUGGESTIONS.map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => handleSubmit(undefined, suggestion)}
                      className="px-3 py-1.5 rounded-full text-xs font-sans bg-white/[0.04] border border-white/[0.07] text-[#4A5068] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Yash..."
                  className="w-full bg-white/[0.03] border border-white/[0.07] rounded-full py-3 pl-4 pr-12 text-sm text-[#F0F2F8] placeholder-[#4A5068] focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all font-sans"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-8 h-8 rounded-full bg-[#00E5FF] text-[#050709] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#00E5FF]/80 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatWidget;
