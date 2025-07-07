"use client";

import { Overlay } from "@/types/type";
import { AnimatePresence, motion } from "motion/react";

export default function OverlayLayout({ isVisible ,children }: Overlay)  {

  return (
    <AnimatePresence initial={false}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
