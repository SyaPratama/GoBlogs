"use client";

import { Button } from "@headlessui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ModalSearch from "../views/ModalSearch";
import OverlayLayout from "../layout/OverlayLayout";
import { useHotkeys } from "react-hotkeys-hook";

export default function SearchBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const ComponentHandler = <T extends boolean>(state: T): void => {
    setIsVisible(state);
  };

  useHotkeys("esc", (): void => ComponentHandler(false));
  useHotkeys("ctrl+f", (e): void => {
    e.preventDefault();
    ComponentHandler(isVisible ? !isVisible : true);
  });

  return (
    <>
      <div className="w-60 h-8 relative">
        <Button
          onClick={() => ComponentHandler(true)}
          className="w-full h-full cursor-pointer bg-white border-2 border-slate-200 text-left pl-3 rounded-2xl text-sm text-slate-400 outline-0"
        >
          Search...
          <span className="absolute top-0 right-0 bg-slate-800 h-full px-2.5 flex items-center rounded-2xl">
            <FaSearch className="text-slate-200 text-sm" />
          </span>
        </Button>
      </div>

      <OverlayLayout theme="dark" handler={ComponentHandler} isVisible={isVisible}>
        <ModalSearch />
      </OverlayLayout>
    </>
  );
}
