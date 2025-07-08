import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";
import "@/assets/styles/main.css";
import { Inter } from "next/font/google";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>
      {
        `
        html{
          font-family: ${inter.style.fontFamily}
        }
        `
      }
    </style>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        disableTransitionOnChange={true}
        scriptProps={{ "data-cfasync": "false" }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
