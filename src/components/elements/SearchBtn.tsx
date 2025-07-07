"use client";
import { Button } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import ModalSearch from "../views/ModalSearch";
import OverlayLayout from "../layout/OverlayLayout";
import { AnimatePresence, motion } from "motion/react";

export default function SearchBtn({ searchVisible, handler }: { searchVisible: boolean, handler: (state: boolean) => void }) {
  return (
    <>
      <div className="w-60 h-8 relative">
        <Button
          onClick={() => handler(true)}
          className="w-full h-full cursor-pointer bg-white border-2 border-slate-200 hover:border-slate-400 transition duration-350 text-left pl-3 rounded-2xl text-sm text-slate-400 outline-0"
        >
          Search...
          <span className="absolute top-0 right-0 bg-slate-800 h-full px-2.5 flex items-center rounded-2xl">
            <FaSearch className="text-slate-200 text-sm" />
          </span>
        </Button>
      </div>

      <OverlayLayout theme="dark" isVisible={searchVisible}>
        <AnimatePresence mode="wait">
          <motion.div initial={{ y: -25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 }}>
        <ModalSearch isVisible={searchVisible} handler={handler} />
          </motion.div>
        </AnimatePresence>
      </OverlayLayout>
    </>
  );
}
