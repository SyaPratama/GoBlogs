import { ReactNode, RefObject } from "react";

export type OverlayType = {
  isVisible: boolean;
  handler?: (state: boolean) => void;
  children: ReactNode;
};

export type QuickAccesType = {
  setOverlay: (state: boolean) => void;
};

export type PropsNavbar = {
  props: {
    hidden: boolean;
    navbar: RefObject<HTMLDivElement>;
    searchVisible: boolean;
    overlayVisible: boolean;
    ComponentHandler: (theme: boolean) => void;
    SearchHandler: (theme: boolean) => void;
  };
};
