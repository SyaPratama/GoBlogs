import { PropsWithChildren } from "react";
import Navbar from "./partials/Navbar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
