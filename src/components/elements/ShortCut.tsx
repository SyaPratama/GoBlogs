"use client";

import { BsKeyboard } from "react-icons/bs";
import { AnimatePresence, motion } from "motion/react";

export default function ShortCut() {
  return (
    <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-sm ring-1 ring-slate-200/60 w-72 h-auto rounded-xl px-4 pt-4 bg-white/">
      <header className="inline-flex flex-col gap-3">
        <div className="inline-flex items-center gap-4">
          <BsKeyboard className="text-4xl" />
          <h1 className="font-bold text-xl">Tips: Shortcut</h1>
        </div>
        <span className="text-sm font-medium">
          Navigate the site with ease using keyboard shortcut
        </span>
      </header>

      <div className="w-full py-6 inline-flex flex-col gap-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1}}
            className="inline-flex justify-between py-2 text-[.8em] border-b-1 border-b-slate-400/50"
          >
            Open Quick Access
            <div className="inline-flex gap-1">
              <div className="border-1 border-b-3 border-slate-300 px-2 py-[2px] bg-slate-200 text-xs font-semibold rounded-sm">
                Ctrl
              </div>
              +
              <div className="border-1 border-b-3 border-slate-300 px-2 py-[2px] bg-slate-200 text-xs font-semibold rounded-sm">
                Q
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="inline-flex justify-between py-2 text-[.8em] border-b-1 border-b-slate-400/50"
          >
            Close Quick Access
            <div className="inline-flex gap-1">
              <div className="border-1 border-b-3 border-slate-300 px-2 py-[2px] bg-slate-200 text-xs font-semibold rounded-sm">
                Ctrl
              </div>
              +
              <div className="border-1 border-b-3 border-slate-300 px-2 py-[2px] bg-slate-200 text-xs font-semibold rounded-sm">
                Q
              </div>
              or
              <div className="border-1 border-b-3 border-slate-300 px-2 py-[2px] bg-slate-200 text-xs font-semibold rounded-sm">
                Esc
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3}}
            className="inline-flex justify-between py-2 text-[.8em] border-b-1 border-b-slate-400/50"
          >
            Open Search Modal
            <div className="inline-flex gap-1">
              <div className="border-1 border-b-3 border-slate-300 px-2 py-[2px] bg-slate-200 text-xs font-semibold rounded-sm">
                Ctrl
              </div>
              +
              <div className="border-1 border-b-3 border-slate-300 px-2 py-[2px] bg-slate-200 text-xs font-semibold rounded-sm">
                F
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
