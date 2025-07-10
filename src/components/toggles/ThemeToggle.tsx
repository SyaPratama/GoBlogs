"use client";

import { motion, useAnimate } from "motion/react";
import { useTheme } from "next-themes";
import { ReactElement } from "react";
import { useHotkeys, useHotkeysContext } from "react-hotkeys-hook";
import { GoSun, GoMoon } from "react-icons/go";

export default function ThemeToggle(): ReactElement {
  const [scope, animate] = useAnimate();
  const { theme, setTheme } = useTheme();
  const { disableScope } = useHotkeysContext();

  const handleClick = async (theme: string): Promise<void> => {
    await animate(
      scope.current,
      { rotate: 360, opacity: 0 },
      { duration: 0.5 }
    );
    setTheme(theme);
    await animate(scope.current, { rotate: 0, opacity: 1 }, { duration: 0.5 });
  };

  useHotkeys("ctrl+d",(e:Event):void => {
    e.preventDefault();
    disableScope("theme");
    handleClick(theme == "light" ? "dark" : "light");
  }, { scopes: ["theme"]});

  return (
    <motion.div ref={scope} className="cursor-pointer md:block hidden dark:text-slate-100 text-slate-900">
      {theme == "light" ? (
        <GoSun className="text-xl" onClick={() => handleClick("dark")} />
      ) : (
        <GoMoon className="text-xl" onClick={() => handleClick("light")} />
      )}
    </motion.div>
  );
}
