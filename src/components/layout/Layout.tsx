import clsx from "clsx";
import { PropsWithChildren, useEffect } from "react";
import { Inter } from "next/font/google";
import Navbar from "./partials/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    document.documentElement.classList.add(clsx(inter.className));
  }, []);

  return (
    <>
      <main className="w-full bg-red-300">
        <Navbar />
        {children}
      </main>
    </>
  );
}
