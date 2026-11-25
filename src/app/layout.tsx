import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CERTO — Cameras, drones & production gear in Nigeria",
    template: "%s | CERTO",
  },
  description:
    "Cameras, drones, lenses, mics, lighting and streaming gear from DJI, Sony, Canon, RODE, Godox and more. Order on WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Clash Display (headings) + Satoshi (body) from Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        {/* One link per family: a combined Fontshare request only returns the first family. */}
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
