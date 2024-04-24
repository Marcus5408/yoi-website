import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import { Judson } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOI Website",
  description: "The Youth Oceanic Initiative website",
};

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

const judson = Judson({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-judson",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="./icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="./apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={dmsans.className + libre_franklin.variable + judson.variable}
      >
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
