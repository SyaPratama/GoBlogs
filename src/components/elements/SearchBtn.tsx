"use client";    

import { Button } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";


export default function SearchBtn() {
  return (
    <div className="w-60 h-8 relative">
      <Button className="w-full h-full cursor-pointer border-2 border-slate-200 text-left pl-3 rounded-2xl text-sm text-slate-400 outline-0">
        Search...
        <span className="absolute top-0 right-0 bg-slate-800 h-full px-2.5 flex items-center rounded-2xl">
          <FaSearch className="text-slate-200 text-sm" />
        </span>
      </Button>
    </div>
  );
}
