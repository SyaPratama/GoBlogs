"use client";

import { motion, useAnimate } from "motion/react";
import { useTheme } from "next-themes";
import { GoSun, GoMoon } from "react-icons/go";

export default function ThemeToggle() {
  const [scope, animate] = useAnimate();
  const { theme, setTheme } = useTheme();

  const handleClick = async (theme: string): Promise<void> => {
    await animate(
      scope.current,
      { rotate: 360, opacity: 0 },
      { duration: 0.5 }
    );
    setTheme(theme);
    await animate(scope.current, { rotate: 0, opacity: 1 }, { duration: 0.5 });
  };

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
