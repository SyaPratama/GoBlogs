import { PropsWithChildren, ReactElement } from "react";
import Sidebar from "../elements/MainSidebar";

export default function DashboardLayout({ children }: PropsWithChildren): ReactElement {
    return (
        <>
            <Sidebar/>
            { children }
        </>
    );
}