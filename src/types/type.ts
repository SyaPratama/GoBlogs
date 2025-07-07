import { ReactNode } from "react"

export type OverlayType = {
    theme: "light" | "dark",
    isVisible: boolean,
    children: ReactNode,
}

export type QuickAccesType = {
    setOverlay: (state: boolean) => void
}