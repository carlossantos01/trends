import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Trends",
  description: "Join Trends to share ideas, ask questions, post random thoughts, find your people and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-zinc-800`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
