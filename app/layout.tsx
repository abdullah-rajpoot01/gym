import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const playfairDisplay = Oswald({ subsets: ['latin'], variable: '--font-serif' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const runtime = 'edge';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-serif", playfairDisplay.variable)}
    >
      <body suppressHydrationWarning className="min-h-screen dar max-w-7xl flex flex-col justify-between relative mx-auto">
        {children}
      </body>
    </html>
  );
}
