"use client";

import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoPartlySunnySharp } from "react-icons/io5";
import moment from "moment-timezone";
import { useEffect, useState } from "react";

export default function Setting() {
  const { theme, setTheme } = useTheme();
  const [time, setTime] = useState(moment.tz("Asia/Jakarta"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment.tz("Asia/Jakarta"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-30 md:right-12 dark:text-slate-100 md:w-3/12 w-10/12 h-auto text-slate-900">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-left">Action Center</h1>
          <div className="grid grid-cols-1 gap-4 h-34 py-3">
            <div
              onClick={() => setTheme(theme == "light" ? "dark" : "light")}
              className="w-full p-5 inline-flex flex-col justify-between  dark:bg-slate-800 bg-white/5 shadow-md dark:shadow-none rounded-xl"
            >
              {theme == "light" ? (
                <IoPartlySunnySharp className="text-xl" />
              ) : (
                <BsFillMoonStarsFill className="text-xl" />
              )}
              <p className="text-sm font-medium">
                Dark Mode: <span>{theme == "dark" ? "On" : "Off"}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-left">Notification</h1>
          <div className="grid grid-cols-1 gap-4 py-3">
            <div className="w-full p-4 inline-flex gap-2 flex-col justify-between dark:bg-slate-800/40 ring-1 ring-slate-200/5 backdrop-blur-md bg-white/5 shadow-md dark:shadow-none rounded-xl">
              <div className="inline-flex justify-between text-xs">
                <span>Time</span>
                <span>{ time.tz() }</span>
              </div>
              <div className="text-sm">
                { time.format("H:mm:ss - D/M/Y") }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
