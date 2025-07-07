"use client";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@headlessui/react";
import OverlayLayout from "../layout/OverlayLayout";
import QuickAcces from "../views/QuickAcces";

export default function QuickCenter({ quickVisible, handler }: { quickVisible: boolean, handler: (state: boolean) => void }) {
  
  return (
    <>
      <Button
        onClick={() => handler(true)}
        className="inline-flex gap-2 items-center text-sm font-semibold bg-slate-700/20 hover:bg-slate-700/40 text-slate-600 transition ease-in-out duration-300 px-3 py-2 cursor-pointer rounded-3xl"
      >
        <MdOutlineDashboardCustomize />
        Quick Center
        <IoIosArrowForward />
      </Button>
      <OverlayLayout theme="light" isVisible={quickVisible}>
        <QuickAcces setOverlay={handler}/>
      </OverlayLayout>
    </>
  );
}
