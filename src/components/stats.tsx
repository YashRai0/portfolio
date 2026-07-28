"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 2, suffix: "+", label: "Products Shipped" },
  { value: 1, suffix: "", label: "Live SaaS Product" },
  { value: 8, suffix: "+", label: "Technologies" },
  { value: 24, suffix: "h", label: "Response Time" }
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      
      const duration = 1500;
      const incrementTime = 30;
      const step = (end - start) / (duration / incrementTime);
      
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function Stats() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#050709] to-[#0C0F15] border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 flex flex-col items-center justify-center text-center pt-8 md:pt-0 w-full first:pt-0"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] mb-2 flex items-center">
                <AnimatedNumber value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-[#4A5068] font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
