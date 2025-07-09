import { QuickAccesType } from "@/types/type";
import { Button } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";

export default function OverlayCloseButton({ setOverlay }: QuickAccesType) {
  return (
    <Button
      className="p-3 dark:bg-slate-600/10 bg-slate-200/60 ring-1 dark:ring-slate-700/60 ring-slate-600/10 shadow-md cursor-pointer absolute top-4 right-4 rounded-xl dark:text-slate-100 text-slate-900"
      onClick={() => setOverlay(false)}
    >
      <FaXmark />
    </Button>
  );
}
