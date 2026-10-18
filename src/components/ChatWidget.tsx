import { useState, useRef, useEffect } from "react";
import { askPortfolioAI } from "../lib/chat";
import { Bot, X, Send, Sparkles } from "lucide-react";

interface Message {
  text: string;
  role: "bot" | "user" | "typing";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! 👋 I'm Yash's AI portfolio assistant. Ask me anything about his projects, technical skills, education, or internship availability.",
      role: "bot",
    },
  ]);
  const [chipsVisible, setChipsVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chips = [
    "What real products has Yash built?",
    "Is Yash open for internships?",
    "What is Yash's tech stack?",
    "Tell me about 2ambuddy",
  ];

  const handleSend = async (question: string) => {
    if (!question.trim()) return;

    setChipsVisible(false);
    setMessages((prev) => [
      ...prev,
      { text: question, role: "user" },
      { text: "Thinking…", role: "typing" },
    ]);
    setInputValue("");

    try {
      const res = await askPortfolioAI({ data: { question } });
      setMessages((prev) =>
        prev
          .filter((m) => m.role !== "typing")
          .concat({ text: res.reply, role: "bot" })
      );
    } catch {
      setMessages((prev) =>
        prev.filter((m) => m.role !== "typing").concat({
          text: "I'm having a brief connection delay. Feel free to contact Yash directly at yashrai6635@gmail.com!",
          role: "bot",
        })
      );
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <button
        id="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Ask Yash's AI assistant"
        aria-label="Toggle portfolio AI assistant"
        className="cursor-pointer"
      >
        <span className="dot" />
        <span className="font-semibold text-xs tracking-wide">Ask AI</span>
        <Sparkles size={14} className="text-[var(--accent)]" />
      </button>

      <div id="chat-bubble" className={isOpen ? "open" : ""}>
        <div className="chat-header">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center text-xs">
              <Bot size={16} />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">Yash's AI Assistant</h4>
              <p className="text-[10px] font-mono text-emerald-500 font-semibold m-0">● Online</p>
            </div>
          </div>
          <button
            id="chat-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close AI chat"
            className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div id="chat-messages">
          {messages.map((m, idx) => (
            <div key={idx} className={`msg ${m.role}`}>
              {m.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {chipsVisible && (
          <div className="flex flex-wrap gap-1.5 p-3 pt-0">
            {chips.map((chip, idx) => (
              <button
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-colors bg-[var(--bg-subtle)] cursor-pointer text-left"
                onClick={() => handleSend(chip)}
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        <form
          className="chat-input-row"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
        >
          <input
            id="chat-input"
            type="text"
            placeholder="Ask about projects, skills, education…"
            aria-label="Ask a question about Yash"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={200}
            autoComplete="off"
          />
          <button id="chat-send" type="submit" aria-label="Send message" className="cursor-pointer">
            <Send size={15} />
          </button>
        </form>
      </div>
    </>
  );
}
