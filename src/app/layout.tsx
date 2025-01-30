import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

const workSansFont = Work_Sans({
  display: "auto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "ZapLink - Shorten, Track, Share.",
  description:
    "ZapLink is the easiest way to shorten, track and share your URLs.",
  keywords: ["ZapLink", "URL shortener", "link shortener", "link tracking"],
  authors: {
    name: "Mangesh Bhardwaj",
    url: "mangesh636.github.io",
  },
  openGraph: {
    title: "ZapLink - Shorten, Track, Share.",
    description:
      "ZapLink is the easiest way to shorten, track and share your URLs.",
    type: "website",
    images: "/og.png",
    url: "zaplink.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZapLink - Shorten, Track, Share.",
    description:
      "ZapLink is the easiest way to shorten, track and share your URLs.",
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-base font-normal dark:bg-black bg-white",
          workSansFont.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
