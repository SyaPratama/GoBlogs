"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ReactElement } from "react";
import { FaUserAlt } from "react-icons/fa";


export default function AuthDropDown(): ReactElement {
  return (
    <Menu>
      <MenuButton className="md:block hidden outline-none dark:text-slate-100 text-slate-900 cursor-pointer">
        <FaUserAlt />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-32 origin-top-right rounded-xl border dark:border-slate-100/10 border-slate-600/50 dark:bg-slate-800/50 bg-slate-300/50 p-1 text-sm/6 dark:text-slate-100 text-slate-900 transition duration-100 ease-out [--anchor-gap:--spacing(4)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
      >
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-slate-600/10">
            Login
            <kbd className="ml-auto hidden font-sans text-xs text-slate-600/50 group-data-focus:inline">
              ⌘L
            </kbd>
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-slate-600/10">
            Register
            <kbd className="ml-auto hidden font-sans text-xs text-slate-600/50 group-data-focus:inline">
              ⌘R
            </kbd>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
