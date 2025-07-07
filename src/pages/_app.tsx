import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";
import "@/assets/styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
