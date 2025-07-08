"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { FaUserAlt } from "react-icons/fa";


export default function AuthDropDown() {
  return (
    <Menu>
      <MenuButton className="md:block hidden outline-none text-slate-600 cursor-pointer">
        <FaUserAlt />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-32 origin-top-right rounded-xl border border-slate-400/25 bg-slate-400/25 p-1 text-sm/6 text-slate-800/70 transition duration-100 ease-out [--anchor-gap:--spacing(4)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
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
