"use client";

import AuthDropDown from "@/components/elements/AuthDropDown";
import Icon from "@/components/elements/Icon";
import QuickCenter from "@/components/elements/QuickCenter";
import SearchBtn from "@/components/elements/SearchBtn";
import ScrollEvent from "@/lib/ScrollEvent";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export default function Navbar() {
  const navbar = useRef(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number): void => {
    const previous = scrollY.getPrevious();
    const navbarNode = navbar.current;
    const el = navbarNode.classList;
    if(latest > 150)
    { 
      el.add("scrollNavbar");
    } else if(latest < 150){
      el.remove("scrollNavbar");
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const ComponentHandler = <T extends boolean>(state: T): void => {
    if (state) {
      ScrollEvent.addOverlay();
    } else {
      ScrollEvent.hideOverlay();
    }
    setOverlayVisible(state);
  };

  const SearchHandler = <T extends boolean>(state: T): void => {
    if (state) {
      ScrollEvent.addOverlay();
    } else {
      ScrollEvent.hideOverlay();
    }
    setSearchVisible(state);
  };

  useHotkeys("ctrl+q", (): void => {
    SearchHandler(false);
    ComponentHandler(overlayVisible ? !overlayVisible : true);
  });

  useHotkeys("ctrl+f", (e): void => {
    e.preventDefault();
    ComponentHandler(false);
    SearchHandler(searchVisible ? !searchVisible : true);
  });

  useHotkeys("esc", (): void => {
    ComponentHandler(false);
    SearchHandler(false);
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 max-w-full"
      ref={navbar}
    >
      <div className="flex items-center md:px-12 px-6 py-3 md:py-4 justify-between">
        <div className="inline-flex md:gap-10 gap-3 items-center">
          <Icon />
          <QuickCenter
            quickVisible={overlayVisible}
            handler={ComponentHandler}
          />
        </div>
        <div className="inline-flex gap-x-3.5 items-center">
          <SearchBtn searchVisible={searchVisible} handler={SearchHandler} />
          <AuthDropDown />
        </div>
      </div>
    </motion.div>
  );
}
