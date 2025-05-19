import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainHeader from "./components/MainHeader";
import "./globalicons.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Groceries App",
  description: "Organize your groceries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <MainHeader />
        <main className="h-(--main-content-height)">{children}</main>
      </body>
    </html>
  );
}
