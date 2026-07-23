import React, { useEffect, useState } from "react";
import Particles from "./Particles";

interface HeroProps {
  heroName: string;
  heroTagline: string;
  buildingProjectName?: string;
}

export default function Hero({ heroName, heroTagline, buildingProjectName = "Resume Optimizer" }: HeroProps) {
  const [typedCommand, setTypedCommand] = useState("");
  const [typedOutput, setTypedOutput] = useState("");

  const terminalLines = [
    { cmd: "whoami", out: "→ Yash Rai | BCA Student · AI Builder · Explorer" },
    { cmd: "cat interests.txt", out: "→ AI Products, React, Python, Open Source" },
    { cmd: "ls projects/", out: "→ resume-optimizer/  readme-gen/  mcq-ai/" }
  ];

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let isTypingCmd = true;
    let timeoutId: any;

    const runLoop = () => {
      const line = terminalLines[lineIdx];

      if (isTypingCmd) {
        if (charIdx <= line.cmd.length) {
          setTypedCommand(line.cmd.slice(0, charIdx));
          charIdx++;
          timeoutId = setTimeout(runLoop, 65);
        } else {
          isTypingCmd = false;
          setTypedOutput(line.out);
          timeoutId = setTimeout(runLoop, 2200); // Hold outputs
        }
      } else {
        setTypedOutput("");
        setTypedCommand("");
        lineIdx = (lineIdx + 1) % terminalLines.length;
        charIdx = 0;
        isTypingCmd = true;
        timeoutId = setTimeout(runLoop, 300); // Pause before next line
      }
    };

    // Wait slightly on boot before initiating terminal typewriter loop
    timeoutId = setTimeout(runLoop, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero">
      <Particles />
      <div className="grid-overlay" />

      <div className="building-badge select-none">
        <span className="badge-dot"></span>
        Currently building: <strong>{buildingProjectName}</strong>
      </div>

      <p className="hero-eyebrow">// Hello, World! 👋</p>
      <h1 className="hero-name">
        I'm <span className="gradient-text">{heroName}</span>
      </h1>

      <div className="hero-terminal select-none">
        <div style={{ display: "flex", gap: "6px", marginBottom: "10px" }}>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57", display: "inline-block" }}></span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E", display: "inline-block" }}></span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840", display: "inline-block" }}></span>
        </div>
        <div className="font-mono text-sm leading-relaxed">
          <span className="terminal-prompt">
            <span className="path">~/yash</span> $
          </span>{" "}
          <span>{typedCommand}</span>
          <span className="cursor-blink" />
        </div>
        {typedOutput && (
          <div style={{ marginTop: "6px", color: "rgba(240,244,255,0.5)", fontSize: "0.8rem" }} className="font-mono">
            {typedOutput}
          </div>
        )}
      </div>

      <div className="hero-tags">
        <span className="tag">BCA · 5th Sem</span>
        <span className="tag">React Developer</span>
        <span className="tag">AI/ML Enthusiast</span>
        <span className="tag">Python</span>
        <span className="tag">Building in Public</span>
        <span className="tag">Prayagraj, IN</span>
      </div>

      <div className="hero-ctas">
        <a href="#projects" className="btn-primary no-underline">
          View My Work
        </a>
        <a href="#contact" className="btn-ghost no-underline">
          Let's Talk →
        </a>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
