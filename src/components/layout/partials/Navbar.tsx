"use client";

import AuthDropDown from "@/components/elements/AuthDropDown";
import Icon from "@/components/elements/Icon";
import QuickCenter from "@/components/elements/QuickCenter";
import SearchBtn from "@/components/elements/SearchBtn";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY,"change",(latest: number): void => {
    const previous = scrollY.getPrevious();

    if(latest > previous && latest > 150){
      setHidden(true);
    } else {
      setHidden(false);
    }
  })

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 max-w-full"
    >
      <div className="flex items-center px-12 py-4 justify-between">
        <div className="inline-flex gap-10 items-center">
          <Icon />
          <QuickCenter />
        </div>
        <div className="inline-flex gap-x-3.5 items-center">
          <SearchBtn />
          <AuthDropDown />
        </div>
      </div>
    </motion.div>
  );
}
