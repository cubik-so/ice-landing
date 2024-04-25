'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { SquaresProvider } from '@/lib/ui';
import '@squaress/ui/styles.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SquaresProvider>{children}</SquaresProvider>
      </body>
    </html>
  );
}
