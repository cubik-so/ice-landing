"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { SquaresProvider } from "@/lib/ui";
import "@squaress/ui/styles.css";
import Navbar from "./components/navbar";

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
            <div className="flex flex-col w-full max-h-screen ">
              {/* <Navbar />
              <div className="flex items-center  min-h-screen">{children}</div> */}

              <div className="flex flex-grow">
                {/* <div className="sticky top-0 h-full bg-color-white">
                  <Sidebar />
                </div> */}
                <div className="flex items-center justify-center w-full overflow-auto">
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
