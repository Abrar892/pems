import type { Metadata } from "next";
import { Manrope, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CurtainReveal from "@/app/components/curtain/CurtainReveal";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PEMS — Pakistan Engineering Maintenance Service",
  description:
    "Pakistan Engineering Maintenance Service — Precision engineering, industrial fabrication, and mechanical maintenance for demanding environments.",
  keywords: [
    "PEMS",
    "Pakistan Engineering Maintenance Service",
    "industrial engineering",
    "mechanical maintenance",
    "flange assembly",
    "precision engineering",
    "fabrication",
    "plant maintenance",
    "industrial inspection",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <CurtainReveal />
        {children}
      </body>
    </html>
  );
}
