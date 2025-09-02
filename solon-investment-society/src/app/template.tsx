"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { PropsWithChildren } from "react";

type TemplateProps = PropsWithChildren;

function MotionWrapper({ children }: PropsWithChildren) {
  const isPresent = useIsPresent();
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, y: 8, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
      style={{ position: isPresent ? "relative" : "absolute", inset: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname();
  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence mode="wait" initial={false}>
        <MotionWrapper key={pathname}>{children}</MotionWrapper>
      </AnimatePresence>
    </div>
  );
}



