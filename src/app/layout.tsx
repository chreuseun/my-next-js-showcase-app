import "@root/styles/globals.css";

import type { Metadata } from "next";
import Nav from "@components/Nav";
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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* NOTE: body tag is a Flex-Container */}
      <body className="flex h-screen w-screen flex-col justify-center items-stretch text-primaryText bg-gradient-to-r from-primaryBG to-gradient_bg_dark">
        <Nav />
        {children}
      </body>
    </html>
  );
}
