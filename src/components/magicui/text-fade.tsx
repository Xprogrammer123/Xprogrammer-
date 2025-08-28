// components/magicui/text-fade.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TextFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function TextFade({
  children,
  className,
  delay = 0,
  duration = 0.8,
}: TextFadeProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={cn("text-base leading-relaxed", className)}
    >
      {children}
    </motion.p>
  );
}
