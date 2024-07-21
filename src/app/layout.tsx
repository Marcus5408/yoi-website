import type { Metadata } from "next";
import { Abril_Fatface, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import React from "react";
import { useTheme } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: "400",
});

const abril_fatface = Abril_Fatface({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abril-fatface",
  weight: "400",
});

export const metadata: Metadata = {
  title: "YOI Website",
  description: "The Youth Oceanic Initiative website",
  openGraph: {
    title: "The YOI",
    description: "The official website of the Youth Oceanic Initiative.",
    // link to opengraph.png in public folder
    url: "https://www.theyoi.org",
    images: [
      {
        url: "https://www.theyoi.org/opengraph.png",
        width: 1280,
        height: 720,
        alt: "The YOI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@handle",
    title: "The YOI",
    description: "The official website of the Youth Oceanic Initiative.",
    images: [
      {
        url: "https://www.theyoi.org/opengraph.png",
        alt: "The YOI",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeColor = "#04328d";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="theme-color" content={themeColor} />
      </head>
      <body className={`${dmsans.variable} ${abril_fatface.variable}`}>
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
