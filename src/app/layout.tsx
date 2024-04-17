import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOI Website",
  description: "The Youth Oceanic Initiative website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
