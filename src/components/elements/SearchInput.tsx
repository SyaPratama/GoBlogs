"use client";

import { Input } from "@headlessui/react";
import { animate } from "motion/react";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";


export default function SearchInput({ className }: { className?: string }) {
  const [placeholder, setPlaceholder] = useState("");
  const texts = ["Search...", "Something News...", "Hidup Jokowi..."];

  useEffect(() => {
    async function run() {
      while (true) {
        for (const item of texts) {
          await animate(0, item.length, {
            type: "tween",  
            duration: 1.5,
            delay: 0.5,
            ease: "easeInOut",
            onUpdate: (latest: number) => {
              const round = Math.round(latest);
              setPlaceholder(item.slice(0, round));
            },
          });

          await animate(item.length,0, {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
            onUpdate: (latest: number) => {
              const round = Math.round(latest);
              setPlaceholder(item.slice(0, round));
            },
          })
        }
      }
    }
    run();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  return (
    <div className="relative w-full h-full">
        <Input placeholder={placeholder} type="text" className={className} />
        <CiSearch className="absolute md:top-2.5 md:left-2.5 top-[9px] left-[9px] md:text-md text-sm text-slate-400"/>
    </div>
);
}
