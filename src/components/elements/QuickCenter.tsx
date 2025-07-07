"use client";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@headlessui/react";
import { useState } from "react";
import OverlayLayout from "../layout/OverlayLayout";
import QuickAcces from "../views/QuickAcces";
import { useHotkeys } from "react-hotkeys-hook";

export default function QuickCenter() {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const childComponentHandler = <T extends boolean> (state: T): void => {
    setOverlayVisible(state)
  }

  useHotkeys("esc",(): void => childComponentHandler(false));
  useHotkeys("ctrl+q",():void => childComponentHandler(overlayVisible ? !overlayVisible : true));  

  return (
    <>
      <Button
        onClick={() => setOverlayVisible(true)}
        className="inline-flex gap-2 items-center text-sm font-semibold bg-slate-700/20 hover:bg-slate-700/40 text-slate-600 transition ease-in-out duration-300 px-3 py-2 cursor-pointer rounded-3xl"
      >
        <MdOutlineDashboardCustomize />
        Quick Center
        <IoIosArrowForward />
      </Button>
      <OverlayLayout isVisible={overlayVisible}>
        <QuickAcces setOverlay={childComponentHandler}/>
      </OverlayLayout>
    </>
  );
}
