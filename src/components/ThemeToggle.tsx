"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  const [dark, setDark] = useState(false);

  // Synchronize the icon with the theme applied by the pre-hydration script.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setDark(document.documentElement.classList.contains("dark")); }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("sis-theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="group inline-flex h-9 items-center gap-2 px-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="relative grid h-5 w-5 place-items-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={dark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -40, scale: 0.65 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 40, scale: 0.65 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            {dark ? <Sun className="h-4 w-4" strokeWidth={1.7} /> : <Moon className="h-4 w-4" strokeWidth={1.7} />}
          </motion.span>
        </AnimatePresence>
      </span>
      {showLabel && <span>{dark ? "Light" : "Dark"}</span>}
    </button>
  );
}
