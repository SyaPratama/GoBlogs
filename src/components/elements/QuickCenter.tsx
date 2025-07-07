"use client";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function QuickCenter() {
  return (
    <div className="inline-flex gap-2 items-center text-sm font-semibold bg-slate-700/20 hover:bg-slate-700/40 text-slate-600 transition ease-in-out duration-300 px-3 py-2 cursor-pointer rounded-3xl">
      <MdOutlineDashboardCustomize />
      Quick Center
      <IoIosArrowForward />
    </div>
  );
}
