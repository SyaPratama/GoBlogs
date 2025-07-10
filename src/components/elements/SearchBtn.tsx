"use client";
import { Button } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ReactElement } from "react";
export default function SearchBtn({
  handler,
}: {
  searchVisible: boolean;
  handler: (state: boolean) => void;
}): ReactElement {
  return (
    <>
      <div className="w-34 h-8 relative md:block hidden ">
        <Button
          onClick={(): void => handler(true)}
          className="w-full h-full bg-slate-100 cursor-pointer group hover:border-slate-600/80 border-2 border-slate-400 transition duration-350 text-left pl-3 rounded-2xl text-xs text-slate-900 outline-0"
        >
          Search...
          <span className="absolute corner after:bg-slate-100 -top-1 group-hover:border-slate-600/80 transition duration-350 -right-0.5 bg-slate-100 p-3 border-2 border-slate-400 flex items-center rounded-full">
            <FaSearch className="text-slate-800 text-sm" />
          </span>
        </Button>
      </div>

      <Button className="md:hidden block">
          <CiSearch className="text-lg text-slate-600 cursor-pointer" onClick={(): void => handler(true)}/>
      </Button>
    </>
  );
}
