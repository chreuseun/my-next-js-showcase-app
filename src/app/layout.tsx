import "@root/styles/globals.css";

import type { Metadata } from "next";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import TestFlexLayout from "@components/TestFlexLayout";
import { APPLICATION } from "@root/constants/copies";

export const metadata: Metadata = {
  title: APPLICATION.title,
  description: APPLICATION.description,
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
        {children}
      </body>
    </html>
  );
}
