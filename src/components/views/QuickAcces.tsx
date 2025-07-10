import { QuickAccesType } from "@/types/type";
import ShortCut from "../elements/ShortCut";
import OverlayCloseButton from "../toggles/OverlayCloseButton";
import Setting from "../elements/Setting";
import { ReactElement } from "react";

export default function QuickAcces({ setOverlay }: QuickAccesType): ReactElement {
  return (
    <>
      <OverlayCloseButton setOverlay={setOverlay} />
      <div className="w-full min-h-full flex justify-center">
        <ShortCut />
        <Setting />
      </div>
    </>
  );
}
