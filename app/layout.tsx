"use client"

import { Inter } from "next/font/google";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-slate-100">
        <div className="min-h-full">
          <Navbar />

          <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">{children}</main>
        </div>
      </body>
    </html>
  );
}