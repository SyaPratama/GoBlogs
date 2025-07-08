import { PropsWithChildren } from "react";
import Navbar from "./partials/Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="w-full bg-red-300 relative">
        <Navbar />
        {children}
      </main>
    </>
  );
}
