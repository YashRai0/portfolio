import React, { useState, useRef, useEffect } from "react";
import { askPortfolioAI } from "../lib/chat";

interface Message {
  text: string;
  role: "bot" | "user" | "typing";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hey! 👋 I'm Yash's AI assistant. Ask me anything about his skills, projects, or availability for work!", 
      role: "bot" 
    }
  ]);
  const [chipsVisible, setChipsVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chips = [
    "What can Yash build?",
    "Is he open to internships?",
    "Best project?",
    "Tech stack?"
  ];

  const handleSend = async (question: string) => {
    if (!question.trim()) return;

    setChipsVisible(false);
    setMessages((prev) => [
      ...prev,
      { text: question, role: "user" },
      { text: "Thinking…", role: "typing" }
    ]);
    setInputValue("");

    try {
      const res = await askPortfolioAI({ data: { question } });
      setMessages((prev) => 
        prev.filter((m) => m.role !== "typing").concat({ text: res.reply, role: "bot" })
      );
    } catch (err) {
      setMessages((prev) => 
        prev.filter((m) => m.role !== "typing").concat({ 
          text: "Sorry, I am having trouble connecting to my thinking core. Reach Yash at yashrai6635@gmail.com!", 
          role: "bot" 
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
        title="Ask my portfolio anything"
        aria-label="Open portfolio AI assistant"
      >
        🤖
      </button>

      <div id="chat-bubble" className={isOpen ? "open" : ""}>
        <div className="chat-header">
          <div className="chat-avatar">🤖</div>
          <div className="chat-header-info">
            <h4>Ask Yash's AI</h4>
            <p>Online · Portfolio Assistant</p>
          </div>
          <button id="chat-close" onClick={() => setIsOpen(false)} aria-label="Close AI assistant chat">✕</button>
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
          <div className="chat-suggestions">
            {chips.map((chip, idx) => (
              <button key={idx} className="chip" onClick={() => handleSend(chip)}>
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
            placeholder="Ask anything about Yash…" 
            aria-label="Ask a question about Yash"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={200}
            autoComplete="off"
          />
          <button id="chat-send" type="submit" aria-label="Send message">➤</button>
        </form>
      </div>
    </>
  );
}
