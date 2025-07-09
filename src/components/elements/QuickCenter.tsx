"use client";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@headlessui/react";

export default function QuickCenter({ handler }: { quickVisible: boolean, handler: (state: boolean) => void }) {
  
  return (
    <>
      <Button
        onClick={() => handler(true)}
        className="dark:bg-slate-100/10 bg-slate-900/10 dark:text-slate-100 text-slate-900 inline-flex gap-2 items-center md:text-sm text-xs font-semibold transition ease-in-out duration-300 px-3 py-2 cursor-pointer rounded-3xl"
      >
        <MdOutlineDashboardCustomize />
        Quick Center
        <IoIosArrowForward />
      </Button>

    </>
  );
}
