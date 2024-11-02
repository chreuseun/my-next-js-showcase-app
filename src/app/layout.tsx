import "@root/styles/globals.css";

import type { Metadata } from "next";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import TestFlexLayout from "@components/TestFlexLayout";

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Discover & Share Prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="text-primaryText bg-primaryBG">
        <Nav />
        {/* <TestFlexLayout /> */}
        {/* <div className="">{children}</div> */}
      </body>
    </html>
  );
}
