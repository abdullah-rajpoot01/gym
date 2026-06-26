import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GymProvider } from "@/context/use-gym";
import { Suspense } from "react";

const playfairDisplay = Oswald({ subsets: ['latin'], variable: '--font-serif' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Best Fitness Center for Men & Women",

  description:
    "Looking for the best gym in your city? We offer separate facilities for men and women, expert fitness trainers, modern cardio and strength equipment, weight loss programs, and affordable membership packages. Start your fitness journey today.",

  metadataBase: new URL("https://mygyms.pages.dev"),

  openGraph: {
    title: "Best Fitness Center for Men & Women",

    description:
      "Looking for the best gym in your city? We offer separate facilities for men and women, expert fitness trainers, modern cardio and strength equipment, weight loss programs, and affordable membership packages. Start your fitness journey today.",

    url: "/",
    siteName: "Fitness Center",

    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Fitness Center",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Fitness Center for Men & Women",

    description:
      "Looking for the best gym in your city? We offer separate facilities for men and women, expert fitness trainers, modern cardio and strength equipment, weight loss programs, and affordable membership packages. Start your fitness journey today.",

    images: ["/og-default.png"],
  },
};
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
