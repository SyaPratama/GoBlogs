import { ReactNode } from "react"

export type OverlayType = {
    isVisible: boolean,
    children: ReactNode
}

export type QuickAccesType = {
    setOverlay: (state: boolean) => void
}