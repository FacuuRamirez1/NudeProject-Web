import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/layout/Navbar";
import Image from "next/image";
import { Toaster } from "sonner";
import Footer from "@/shared/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nude Project Web",
  description: "Welcome to the Nude Project Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Image
            src="/bg-HomePage.webp"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <Navbar />
          {children}
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
