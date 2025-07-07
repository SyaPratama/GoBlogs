import { ReactNode } from "react"

export type OverlayType = {
    theme: "light" | "dark",
    isVisible: boolean,
    handler?: (state: boolean) => void,
    children: ReactNode,
}

export type QuickAccesType = {
    setOverlay: (state: boolean) => void
}