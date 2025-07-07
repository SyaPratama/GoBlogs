import { QuickAccesType } from "@/types/type";
import ShortCut from "../elements/ShortCut";
import OverlayCloseButton from "../toggles/OverlayCloseButton";

export default function QuickAcces({ setOverlay }: QuickAccesType) {
  return (
    <>
      <OverlayCloseButton setOverlay={setOverlay} />
      <ShortCut />
    </>
  );
}
