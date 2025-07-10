import { PropsWithChildren, ReactElement, useRef, useState } from "react";
import Navbar from "./partials/Navbar";
import { useHotkeys } from "react-hotkeys-hook";
import ScrollEvent from "@/lib/ScrollEvent";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useTheme } from "next-themes";
import OverlayLayout from "./OverlayLayout";
import QuickAcces from "../views/QuickAcces";
import ModalSearch from "../views/ModalSearch";

export default function MainLayout({
  children,
}: PropsWithChildren): ReactElement {
  const navbar = useRef(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest: number): void => {
    const previous = scrollY.getPrevious();
    const navbarNode = navbar.current;
    const el = navbarNode.classList;
    if (latest > 150) {
      el.add("scrollNavbar");
    } else if (latest < 150) {
      el.remove("scrollNavbar");
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const ComponentHandler = <T extends boolean>(state: T): void => {
    if (state) {
      ScrollEvent.addOverlay();
    } else {
      ScrollEvent.hideOverlay();
    }
    setOverlayVisible(state);
  };

  const SearchHandler = <T extends boolean>(state: T): void => {
    if (state) {
      ScrollEvent.addOverlay();
    } else {
      ScrollEvent.hideOverlay();
    }
    setSearchVisible(state);
  };

  useHotkeys("ctrl+q", (): void => {
    SearchHandler(false);
    ComponentHandler(overlayVisible ? !overlayVisible : true);
  });

  useHotkeys("ctrl+f", (e): void => {
    e.preventDefault();
    ComponentHandler(false);
    SearchHandler(searchVisible ? !searchVisible : true);
  });

  useHotkeys(
    "ctrl+d",
    (e): void => {
      e.preventDefault();
      setTheme(theme == "light" ? "dark" : "light");
    },
    { scopes: ["theme"] }
  );

  useHotkeys("esc", (): void => {
    ComponentHandler(false);
    SearchHandler(false);
  });

  return (
    <>
      <Navbar
        props={{
          hidden,
          navbar,
          searchVisible,
          overlayVisible,
          ComponentHandler,
          SearchHandler,
        }}
      />
      {searchVisible ? (
        <OverlayLayout isVisible={searchVisible}>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: -25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <ModalSearch isVisible={searchVisible} handler={SearchHandler} />
            </motion.div>
          </AnimatePresence>
        </OverlayLayout>
      ) : (
        <OverlayLayout isVisible={overlayVisible}>
          <QuickAcces setOverlay={ComponentHandler} />
        </OverlayLayout>
      )}
      {children}
    </>
  );
}
