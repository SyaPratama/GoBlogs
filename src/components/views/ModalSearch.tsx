import { useEffect, useRef, useState } from "react";
import SearchInput from "../elements/SearchInput";

export default function ModalSearch({
  isVisible,
  handler,
}: {
  isVisible: boolean;
  handler: (state: boolean) => void;
}) {
  const modal = useRef(null);
  const [showModal,setShowModal] = useState(false);

  useEffect(() => {
    if(isVisible) setShowModal(true);
    if (!showModal) return;
    window.addEventListener("click", (e: Event) => {
      if (modal.current && !modal.current.contains(e.target)) {
        setShowModal(false);
        handler(false);
      }
    });
  }, [showModal,handler,isVisible]);

  return (
    <div className="w-full min-h-dvh m-auto flex items-start pt-14 justify-center">
      <div
        ref={modal}
        className="absolute z-50 md:w-lg w-10/12 h-auto bg-white overflow-hidden rounded-md border border-b-3 border-slate-300"
      >
        <SearchInput className="w-full md:pl-8 pl-7 md:text-sm text-xs text-slate-400 md:placeholder:text-sm placeholder:text-[9px] placeholder:text-slate-400 bg-white py-2 border-b-[1.5px] border-slate-400/30 outline-0" />
        <div className="inline-flex items-center justify-between font-medium px-4.5 py-2.5">
          <div className="md:text-[10px] text-[9px] text-slate-900 bg-slate-200/50 px-2 ring-1 ring-slate-600/25 py-1 rounded-sm">
            <span className="font-bold">ESC</span> To Close
          </div>
        </div>
      </div>
    </div>
  );
}
