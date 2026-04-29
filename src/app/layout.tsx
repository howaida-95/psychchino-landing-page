import type { Metadata } from "next";
import { DM_Sans, Fraunces, Noto_Sans_Arabic } from "next/font/google";

import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { I18nProvider } from "@/i18n";
import { en } from "@/i18n/messages/en";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: en.siteTitle,
  description: en.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${dmSans.variable} ${fraunces.variable} ${notoArabic.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <I18nProvider>
          {children}
          <ScrollToTopButton />
        </I18nProvider>
      </body>
    </html>
  );
}
