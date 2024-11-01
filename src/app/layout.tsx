import type { Metadata } from "next";
import localFont from "next/font/local";
import "@root/styles/globals.css";

const geistSans = localFont({
  src: "../../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`main ${geistSans.variable} ${geistMono.variable} ${trendsFonts.variable} antialiased bg-primaryBG`}
      >
        {children}
      </body>
    </html>
  );
}
