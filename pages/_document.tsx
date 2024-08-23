import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="min-h-screen w-full antialiased"
        style={{
          backgroundColor: "#000e24",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
