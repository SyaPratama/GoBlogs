"use client";

import { OverlayType } from "@/types/type";
import { AnimatePresence, motion } from "motion/react";

export default function OverlayLayout({ isVisible ,children }: OverlayType)  {
  return (
    <AnimatePresence initial={false}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 bg-white/5 backdrop-blur-xs z-40 w-full min-h-dvh"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
