import { PropsWithChildren } from "react";
import Navbar from "./partials/Navbar";
import { ThemeProvider } from "next-themes";
import { HotkeysProvider } from "react-hotkeys-hook";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <html suppressHydrationWarning>
        <body className="dark:bg-slate-900 bg-slate-200">
          <HotkeysProvider initiallyActiveScopes={["theme"]}>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <Navbar />
            {children}
          </ThemeProvider>
          </HotkeysProvider>
        </body>
      </html>
    </>
  );
}
