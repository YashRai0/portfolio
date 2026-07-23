import { createServerFn } from "@tanstack/react-start";

const PORTFOLIO_SYSTEM_PROMPT = `
You are Yash Rai's AI assistant. You are polite, professional, and answer questions directly using facts from Yash's portfolio.
Keep your answers brief, precise, and in the tone of a helpful chatbot.

Here are the facts about Yash:
- Name: Yash Rai
- Title: React Developer / AI/ML Enthusiast
- Email: yashrai6635@gmail.com
- GitHub: github.com/YashRai0
- LinkedIn: linkedin.com/in/yash-rai-1a218433b
- Education: BCA student at United Institute of Management, FUGS (5th Semester)
- Projects:
  1. Resume Optimizer (React + Node.js + Claude API + Stripe + Clerk) - AI-powered resume ATS optimizer (completed and live at https://resumeai4u.vercel.app/).
  2. README Auto-Generator (React + Tailwind + Claude API + Lovable) - Pastes code and generates READMEs.
  3. AI MCQ Generator (React + Anthropic API + Vite) - Study tool used by classmates before exams.
  4. Sales Flow Automation (Power Automate + SharePoint + Excel) - Completed Excel reporting automation.
  5. Python Study Guide (React + Tailwind) - Interactive guide with quizzes.
- Skills: React, HTML5, CSS3, Tailwind, JavaScript, Python, C, SQL, Claude API, NumPy, Pandas, Scikit-learn, Matplotlib, Node.js, Express, Git, VS Code.
- CS Fundamentals: OS, DBMS, Software Engineering, DSA.
- Availability: Open to internships, collaborations, and freelance work.
`;

export const askPortfolioAI = createServerFn({ method: "POST" })
  .validator((d: { question: string }) => d)
  .handler(async ({ data }) => {
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
    
    // ── 1. IF GEMINI API KEY IS CONFIGURED (PRIORITY) ──
    if (geminiApiKey && !geminiApiKey.startsWith("sk-...") && geminiApiKey !== "placeholder") {
      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: data.question }]
              }
            ],
            systemInstruction: {
              parts: [{ text: PORTFOLIO_SYSTEM_PROMPT }]
            }
          }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error?.message || `Gemini API returned status ${res.status}`);
        }

        const json = await res.json();
        const replyText = json.candidates?.[0]?.content?.parts?.[0]?.text;
        return { reply: replyText ?? "Sorry, I'm having trouble right now." };
      } catch (err: any) {
        console.error("Gemini AI Chat error:", err);
        return { reply: `Error connecting to Gemini API: ${err.message}` };
      }
    }

    // ── 2. FALLBACK TO ANTHROPIC CLAUDE API ──
    if (anthropicApiKey && !anthropicApiKey.startsWith("sk-ant-...") && anthropicApiKey !== "placeholder") {
      try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-api-key": anthropicApiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-3-5-sonnet-latest",
            max_tokens: 500,
            system: PORTFOLIO_SYSTEM_PROMPT,
            messages: [{ role: "user", content: data.question }],
          }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error?.message || `Anthropic API returned status ${res.status}`);
        }

        const json = await res.json();
        return { reply: json.content?.[0]?.text ?? "Sorry, I'm having trouble right now." };
      } catch (err: any) {
        console.error("Anthropic AI Chat error:", err);
        return { reply: `Error connecting to Claude API: ${err.message}` };
      }
    }

    // ── 3. SIMULATED FALLBACK IF NO KEYS CONFIGURED ──
    console.warn("Neither GEMINI_API_KEY nor ANTHROPIC_API_KEY is configured. Falling back to simulated response.");
    return {
      reply: "Hi! I am Yash's AI assistant. In production, I will respond using Gemini or Claude. To enable my brain, please set the GEMINI_API_KEY environment variable in your .env file!"
    };
  });
