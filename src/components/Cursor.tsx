import React, { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const cursor = cursorRef.current;
    const ring = ringRef.current;

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

  // SSR protection and client capability checks
  if (!mounted) return null;
  
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!isFinePointer || prefersReducedMotion) return null;

  return (
    <>
      <div ref={cursorRef} id="cursor" aria-hidden="true" />
      <div ref={ringRef} id="cursor-ring" aria-hidden="true" />
    </>
  );
}
