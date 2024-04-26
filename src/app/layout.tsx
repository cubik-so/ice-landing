"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { SquaresProvider } from "@/lib/ui";
import "@squaress/ui/styles.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SquaresProvider>
          <div className="flex items-center justify-center w-full h-full bg-color-white">
            <div className="flex flex-col w-full max-w-6xl">
              <Navbar />
              <div className="flex flex-1">
                <Sidebar />
                <div className="flex items-center justify-center w-full h-full">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </SquaresProvider>
      </body>
    </html>
  );
}
