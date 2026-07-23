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
  1. Resume Optimizer (React + Node.js + Claude API + Stripe + Clerk) - AI-powered resume ATS optimizer (in active development).
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
    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    if (!apiKey || apiKey.startsWith("sk-ant-...")) {
      console.warn("ANTHROPIC_API_KEY is not configured. Falling back to simulated response.");
      return {
        reply: "Hi! I am Yash's AI assistant. In production, I will respond using Claude. To enable my brain, please set the ANTHROPIC_API_KEY environment variable in your .env file!"
      };
    }

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": apiKey,
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
      console.error("AI Chat error:", err);
      return { reply: `Error: ${err.message || "Something went wrong. Please check back later!"}` };
    }
  });
