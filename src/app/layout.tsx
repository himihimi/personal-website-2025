import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himi website",
  description: "This is my website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/*  header area */}
        <header className="border-b border-white/10 px-6 py-4">
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-800 font-medium">
              Homieeee
            </Link>
            <Link href="/contact" className="text-gray-800 duration-200 font-medium">
              No contact yeh
            </Link>
          </nav>
        </header>

        {/*  page in app dir */}
        {children}

        {/* footer area */}
        <footer className="mt-auto border-t border-white/10 px-6 py-6 text-center">
          Footer
        </footer>
      </body>
    </html>
  );
}
