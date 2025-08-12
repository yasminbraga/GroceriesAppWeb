import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import MainHeader from "./components/MainHeader";
import "./globalicons.css";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
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
      <body className={`${plusJakartaSans.className} antialiased h-full`}>
        <MainHeader />
        <main className="h-(--main-content-height)">{children}</main>
      </body>
    </html>
  );
}
