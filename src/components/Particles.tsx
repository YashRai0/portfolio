import React, { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Accessibility check: Skip particles if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const particles: any[] = [];

    const handleResize = () => {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    let resizeTimeout: any;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize, { passive: true });

    const codeChars = ["0", "1", "{}", "()", "</>", "=", "&&", "||", "fn", "py", "AI", "ML", "=>"];

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        text: codeChars[Math.floor(Math.random() * codeChars.length)],
        speed: 0.2 + Math.random() * 0.6,
        fontSize: 10 + Math.random() * 12,
        opacity: 0.04 + Math.random() * 0.12,
      });
    }

    let animationId: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity})`;
        ctx.font = `${p.fontSize}px 'JetBrains Mono', monospace`;
        ctx.fillText(p.text, p.x, p.y);

        p.y -= p.speed;
        if (p.y < -30) {
          p.y = H + 30;
          p.x = Math.random() * W;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", debouncedResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" aria-hidden="true" />;
}
