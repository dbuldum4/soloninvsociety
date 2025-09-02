"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

type PageTransitionProps = PropsWithChildren;

const variants = {
  initial: {
    opacity: 0,
    x: -8,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


