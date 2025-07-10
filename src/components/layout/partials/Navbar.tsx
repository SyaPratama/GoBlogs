"use client";

import AuthDropDown from "@/components/elements/AuthDropDown";
import Icon from "@/components/elements/Icon";
import QuickCenter from "@/components/elements/QuickCenter";
import SearchBtn from "@/components/elements/SearchBtn";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { PropsNavbar } from "@/types/type";
import Link from "next/link";

export default function Navbar({ ...props }: PropsNavbar): ReactNode {
  const {
    hidden,
    navbar,
    overlayVisible,
    searchVisible,
    ComponentHandler,
    SearchHandler,
  } = props.props;

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 max-w-full"
        ref={navbar}
      >
        <div className="flex items-center md:px-12 px-6 py-3 md:py-4 justify-between">
          <div className="inline-flex md:gap-10 gap-3 items-center">
            <Icon />
            <QuickCenter
              quickVisible={overlayVisible}
              handler={ComponentHandler}
            />
          </div>
          <div className="flex gap-4">
            <nav className="inline-flex gap-8 items-center text-sm font-semibold">
              <Link href={""}>
                Beranda
              </Link>
              <Link href={""}>
                Tentang
              </Link>
              <Link href={""}>
                News
              </Link>
              <Link href={""}>
                Fasilitas
              </Link>
            </nav>
            <span className="w-[1px] bg-slate-600/80"></span>
            <div className="inline-flex gap-x-3.5 items-center">
              <SearchBtn
                searchVisible={searchVisible}
                handler={SearchHandler}
              />
              <ThemeToggle />
              <AuthDropDown />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
