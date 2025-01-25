import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "@bradgarropy/next-seo";
import { ThemeProvider } from "../context/theme-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        title="Keerthi Appasani | Front end Developer"
        description="A blog and portfolio"
        keywords={[
          "keerthi Appasani portfolio",
          "keerthi",
          "Keerthi Portfolio",
          "Keerthi Appasani",
        ]}
        icon="/k.svg"
        facebook={{
          image: "/facebook.png",
          url: "https://facebook.com",
          type: "website",
        }}
        twitter={{
          image: "/twitter.png",
          site: "@AppasaniKe55457",
          card: "summary",
        }}
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
