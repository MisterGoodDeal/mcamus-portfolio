"use client";

import { Link } from "@nextui-org/link";

import { Head } from "./head";
import { persistStore } from "redux-persist";
import { store } from "@/store/store";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative flex flex-col"
      style={{
        backgroundColor: "#000e24",
      }}
    >
      <Head />
      <main className="">{children}</main>
    </div>
  );
}
