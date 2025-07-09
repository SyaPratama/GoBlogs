"use client";
import { Button } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
export default function SearchBtn({
  handler,
}: {
  searchVisible: boolean;
  handler: (state: boolean) => void;
}) {
  return (
    <>
      <div className="w-40 h-8 relative md:block hidden ">
        <Button
          onClick={(): void => handler(true)}
          className="w-full h-full cursor-pointer dark:bg-slate-100 bg-slate-900 border-2 border-slate-400 hover:border-slate-600 transition duration-350 text-left pl-3 rounded-2xl text-xs dark:text-slate-900 text-slate-100 outline-0"
        >
          Search...
          <span className="absolute -top-0.5 -right-0.5 dark:bg-slate-100 bg-slate-900 p-3 flex items-center rounded-full">
            <FaSearch className="dark:text-slate-900 text-slate-100 text-sm" />
          </span>
        </Button>
      </div>

      <Button className="md:hidden block">
          <CiSearch className="text-lg dark:text-slate-100 text-slate-600 cursor-pointer" onClick={(): void => handler(true)}/>
      </Button>
    </>
  );
}
