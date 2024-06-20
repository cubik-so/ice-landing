"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { SquaresProvider } from "@/lib/ui";
import "@squaress/ui/styles.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
                  <div className=" w-full min-h-screen flex items-center justify-center">
                    <div className="min-h-screen w-full ">
                      <header
                        className="bg-cover bg-center w-full h-full min-h-screen"
                        style={{ backgroundImage: "url(/background.svg)" }}
                      >
                        <div className="max-w-7xl mx-auto py-4">
                          <Navbar />
                        </div>
                        {children}
                      </header>
                      <div className="bg-black h-[1px] w-full max-w-7xl flex items-center mx-auto" />

                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SquaresProvider>
      </body>
    </html>
  );
}
