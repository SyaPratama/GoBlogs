import { PropsWithChildren } from "react";
import localFont from "next/font/local";
import Navbar from "./partials/Navbar";

const inter = localFont({
  src: "../../../public/fonts/inter.otf",
});


export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className={`${inter.className} w-full bg-red-300 relative`}>
        <Navbar />
        {children}
      </main>
    </>
  );
}
