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

    let active = true;
    const timerIds: any[] = [];
    let progressInterval: any = null;

    const addLine = (idx: number) => {
      if (!active) return;
      if (idx < bootScript.length) {
        setLines((prev) => [...prev, bootScript[idx]]);
        const nextTimer = setTimeout(() => addLine(idx + 1), 150);
        timerIds.push(nextTimer);
      } else {
        // Run progress bar loading
        const startProgressTimer = setTimeout(() => {
          if (!active) return;
          let currentProgress = 0;
          progressInterval = setInterval(() => {
            if (!active) return;
            currentProgress += 10;
            setProgress(currentProgress);
            if (currentProgress >= 100) {
              clearInterval(progressInterval);
              const hideTimer = setTimeout(() => {
                if (!active) return;
                setHidden(true);
                sessionStorage.setItem("boot_screen_shown", "true");
              }, 300);
              timerIds.push(hideTimer);
            }
          }, 40);
        }, 150);
        timerIds.push(startProgressTimer);
      }
    };

    const initialTimer = setTimeout(() => addLine(0), 100);
    timerIds.push(initialTimer);

    return () => {
      active = false;
      timerIds.forEach(clearTimeout);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, []);

  if (hidden) return null;

  return (
    <div id="boot" className={hidden ? "hidden" : ""} aria-hidden="true">
      <div id="boot-lines">
        {lines.map((line, idx) => (
          line && (
            <div key={idx} className={`boot-line ${line.type || ""}`} style={{ opacity: 1 }}>
              {line.text}
            </div>
          )
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
