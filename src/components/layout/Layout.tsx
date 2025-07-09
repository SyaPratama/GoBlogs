import { PropsWithChildren } from "react";
import Navbar from "./partials/Navbar";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <html suppressHydrationWarning>
        <body className="dark:bg-slate-900 bg-slate-200">
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
