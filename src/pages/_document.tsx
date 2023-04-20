import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body className="tracking-wide text-white font-kaushan bg-gradient-to-r from-green-500 to-blue-500 dark:from-black-300 dark:to-black-700"  >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
