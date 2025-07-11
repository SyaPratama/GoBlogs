import { OverlayType } from "@/types/type";
import { AnimatePresence, motion } from "motion/react";

export default function OverlayLayout({
  isVisible,
  children,
}: OverlayType) {
  return (
    <>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full min-h-full dark:bg-black/10 bg-white/10 backdrop-blur-xs z-20">
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
