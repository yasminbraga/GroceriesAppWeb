import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globalicons.css";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mercado Plan",
  description: "Organize suas compras e suas receitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}
