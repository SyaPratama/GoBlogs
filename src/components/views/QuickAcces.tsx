import { QuickAccesType } from "@/types/type";
import { Button } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";


export default function QuickAcces({ setOverlay }: QuickAccesType) {
  return (
    <>
      <Button className="p-3 bg-white/70 ring-1 ring-slate-400 cursor-pointer absolute top-4 right-4 rounded-xl text-slate-600" onClick={() => setOverlay(false)}>
        <FaXmark/>
      </Button>
    </>
  );
}
