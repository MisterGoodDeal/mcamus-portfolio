import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="min-h-screen w-full antialiased overflow-x-hidden max-w-screen"
        style={{
          maxWidth: "100vw",
          backgroundColor: "#000e24",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
