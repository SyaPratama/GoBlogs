import { QuickAccesType } from "@/types/type";
import { Button } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";

export default function OverlayCloseButton({ setOverlay }: QuickAccesType) {
  return (
    <Button
      className="p-3 bg-white/20 ring-1 ring-slate-200/60 cursor-pointer absolute top-4 right-4 rounded-xl text-slate-600"
      onClick={() => setOverlay(false)}
    >
      <FaXmark />
    </Button>
  );
}
