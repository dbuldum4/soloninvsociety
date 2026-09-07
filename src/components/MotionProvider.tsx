"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import { motionTheme } from "@/lib/motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ ...motionTheme, duration: reducedMotion ? 0 : motionTheme.duration }}
    >
      {children}
    </MotionConfig>
  );
}
