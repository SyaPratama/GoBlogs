import { OverlayType } from "@/types/type";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

export default function OverlayLayout({
  theme,
  isVisible,
  children,
}: OverlayType) {
  return (
    <>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "block" }}
            exit={{ opacity: 0, display: "none" }}
            transition={{ duration: 0.3 }}
            className={clsx(
              theme === "light"
                ? "absolute top-0 left-0 bg-white/25 backdrop-blur-xs w-full min-h-dvh z-20"
                : "absolute top-0 left-0 bg-black/25 backdrop-blur-xs w-full min-h-dvh z-20"
            )}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
