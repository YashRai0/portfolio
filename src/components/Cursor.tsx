import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Apply custom cursor only on devices with fine pointer controls and without reduced motion preferences
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setActive(true);
    document.body.classList.add("custom-cursor-active");

    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [role='button'], .chip, .project-card, .skill-pill, .social-link"
      );
      isHovered = !!target;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    let animationId: number;
    const animCursor = () => {
      const scale = isHovered ? 2.5 : 1;
      cursor.style.transform = `translate3d(${mx - 6}px, ${my - 6}px, 0) scale(${scale})`;

      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;

      animationId = requestAnimationFrame(animCursor);
    };

    animCursor();

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div id="cursor" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
    </>
  );
}
