import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the portfolio AI assistant for Yash Rai. Be concise, friendly, professional. Max 3 sentences per reply. Always share actual links and email when asked for contact info.

About Yash Rai:
- Full name: Yash Rai
- Role: AI Product Engineer / AI Full Stack Developer
- BCA student at United Institute of Management, FUGS (enrolled in 2024, Prayagraj, India)
- Builds production-ready AI SaaS products with React, TypeScript, Node.js, Generative AI, Docker & CI/CD
- Email: yashrai6635@gmail.com
- GitHub: https://github.com/YashRai0
- LinkedIn: https://www.linkedin.com/in/yash-rai-1a218433b
- Responds within 24 hours

Projects (Both Built & Live in 2026):
1. ResumeAI4U — LIVE at https://resumeai4u.vercel.app/ | GitHub: https://github.com/YashRai0/resume-optimizer
   Stack: React, Node.js, Groq API (Llama-3), Razorpay, Clerk, Vercel
   What: Flagship ATS resume analyzer & optimizer — paste resume + JD, get instant ATS score, keyword gaps, and line-by-line fixes. Built with real user auth and payments.

2. AI Study Assistant — LIVE at https://ai-study-assistant-0.vercel.app | GitHub: https://github.com/YashRai0/ai-study-assistant
   Stack: React, TypeScript, Node.js, Express, Gemini / Groq LLMs, FAISS/ChromaDB Vector DB, Supabase
   What: RAG-powered interactive study platform — upload PDFs/notes, chat with your notes, auto-generate flashcards, quizzes, and summaries with citation support.

Certifications: Oracle Cloud Infrastructure AI Foundations, IBM SkillsBuild GenAI for Data Analytics, Microsoft Power Automate, Prompt Engineering & GenAI.

Availability: Open for Software Engineering, AI Engineering, and Full Stack Development Internships.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

async function callAnthropic(messages: Message[]): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("No Anthropic API key");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-haiku-latest",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.status}`);
  }

  const data = await response.json();
  return data.content[0]?.text || "Sorry, I couldn't process that.";
}

async function callGemini(messages: Message[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("No Gemini API key");

  const history = messages.slice(0, -1).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const lastMessage = messages[messages.length - 1];

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [
          ...history,
          { role: "user", parts: [{ text: lastMessage.content }] },
        ],
        generationConfig: { maxOutputTokens: 300 },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Sorry, I couldn't process that."
  );
}

function getFallbackResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach"))
    return "You can reach Yash at yashrai6635@gmail.com, on LinkedIn at linkedin.com/in/yash-rai-1a218433b, or GitHub at github.com/YashRai0. He responds within 24 hours!";
  if (lower.includes("project") || lower.includes("built") || lower.includes("build"))
    return "Yash has built Resume Optimizer (live at resumeai4u.vercel.app — an ATS optimization tool) and is currently building AI Study Assistant (a RAG-powered PDF study tool). Check them out!";
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack"))
    return "Yash works with React, Next.js, TypeScript, Node.js, Python, Groq API, Claude API, RAG Pipelines, Supabase, and more. Full stack with AI expertise!";
  if (lower.includes("intern") || lower.includes("hire") || lower.includes("available") || lower.includes("freelance"))
    return "Yes! Yash is open to internships, freelance projects, and AI product collaborations. Email him at yashrai6635@gmail.com — he responds within 24 hours.";
  return "Yash Rai is a Full Stack Developer building AI-powered products. Check out his Resume Optimizer at resumeai4u.vercel.app or email yashrai6635@gmail.com to connect!";
}

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const messages: Message[] = [
      ...history.slice(-6),
      { role: "user" as const, content: message },
    ];

    // Try Anthropic first, then Gemini, then local fallback
    try {
      const reply = await callAnthropic(messages);
      return NextResponse.json({ reply });
    } catch {
      // Anthropic failed, try Gemini
    }

    try {
      const reply = await callGemini(messages);
      return NextResponse.json({ reply });
    } catch {
      // Gemini also failed, use fallback
    }

    const reply = getFallbackResponse(message);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: "Sorry, something went wrong. You can reach Yash directly at yashrai6635@gmail.com." },
      { status: 500 }
    );
  }
}
