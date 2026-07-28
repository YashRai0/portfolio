"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [isSupported, setIsSupported] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    // Check if device supports fine pointer and doesn't prefer reduced motion
    const pointerMedia = window.matchMedia("(pointer: fine)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isFinePointer = pointerMedia.matches;
    const isReducedMotion = motionMedia.matches;

    if (isFinePointer && !isReducedMotion) {
      setIsSupported(true);
      document.body.style.cursor = "none";
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animateRing = () => {
      // Lerp for smooth lag effect
      ringX.current += (mouseX.current - ringX.current) * 0.15;
      ringY.current += (mouseY.current - ringY.current) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animateRing);
    };

    if (isFinePointer && !isReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      requestRef.current = requestAnimationFrame(animateRing);
    }

    return () => {
      if (isFinePointer && !isReducedMotion) {
        window.removeEventListener("mousemove", handleMouseMove);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
        document.body.style.cursor = "auto";
      }
    };
  }, []);

  if (!isSupported) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-[#00E5FF] rounded-full mix-blend-difference pointer-events-none z-[9999]"
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[34px] h-[34px] rounded-full border border-[rgba(0,240,255,0.35)] pointer-events-none z-[9999] transition-opacity duration-300"
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />
    </>
  );
}

export default CustomCursor;
