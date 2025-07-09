import type { AppProps } from "next/app";
import MainLayout from "@/components/layout/MainLayout";
import "@/assets/styles/main.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { HotkeysProvider } from "react-hotkeys-hook";
import { useRouter } from "next/router";
import DashboardLayout from "@/components/layout/DashboardLayout";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isDashboard = router.pathname.startsWith('/dashboard');

  const Layout = isDashboard ? DashboardLayout :  MainLayout;  


  return (
    <html suppressHydrationWarning>
      <body className="dark:bg-slate-900 bg-slate-200">
        <HotkeysProvider initiallyActiveScopes={["theme"]}>
          <ThemeProvider
            attribute="class"
            disableTransitionOnChange={true}
            scriptProps={{ "data-cfasync": "false" }}
            enableSystem
            defaultTheme="system"
          >
            <style jsx global>
              {`
                html {
                  font-family: ${inter.style.fontFamily};
                }
              `}
            </style>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </HotkeysProvider>
      </body>
    </html>
  );
}
