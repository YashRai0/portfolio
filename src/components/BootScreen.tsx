import React, { useEffect, useState } from "react";

export default function BootScreen() {
  const [hidden, setHidden] = useState(true);
  const [lines, setLines] = useState<{ text: string; type: string }[]>([]);
  const [progress, setProgress] = useState(0);

  const bootScript = [
    { text: "PORTFOLIO OS v4.1.0", type: "white" },
    { text: "INITIALIZING SYS CONFIG...", type: "muted" },
    { text: "DEVICES DETECTED: SCREEN, KEYBOARD, TOUCHPAD, MOUSE", type: "muted" },
    { text: "ESTABLISHING SUPABASE DB SESSION TUNNEL...", type: "white" },
    { text: "CONNECTED SUCCESSFULLY", type: "green" },
    { text: "LOADING CLIENT VISUAL INTERFACE COMPOSITOR...", type: "cyan" },
    { text: "READY.", type: "green" },
  ];

  useEffect(() => {
    // Session-based skip check
    const isShown = sessionStorage.getItem("boot_screen_shown");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isShown || prefersReducedMotion) {
      setHidden(true);
      return;
    }

    setHidden(false);

    let lineIdx = 0;
    const addLine = () => {
      if (lineIdx < bootScript.length) {
        setLines((prev) => [...prev, bootScript[lineIdx]]);
        lineIdx++;
        setTimeout(addLine, 150);
      } else {
        // Run progress bar loading
        setTimeout(() => {
          let currentProgress = 0;
          const progInterval = setInterval(() => {
            currentProgress += 10;
            setProgress(currentProgress);
            if (currentProgress >= 100) {
              clearInterval(progInterval);
              setTimeout(() => {
                setHidden(true);
                sessionStorage.setItem("boot_screen_shown", "true");
              }, 300);
            }
          }, 40);
        }, 150);
      }
    };

    setTimeout(addLine, 100);
  }, []);

  if (hidden) return null;

  return (
    <div id="boot" className={hidden ? "hidden" : ""} aria-hidden="true">
      <div id="boot-lines">
        {lines.map((line, idx) => (
          <div key={idx} className={`boot-line ${line.type}`} style={{ opacity: 1 }}>
            {line.text}
          </div>
        ))}
      </div>
      <div 
        className="boot-progress-wrap" 
        style={{ 
          opacity: lines.length >= bootScript.length ? 1 : 0,
          transition: "opacity 0.2s"
        }}
      >
        <div id="boot-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
