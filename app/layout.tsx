import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "觸控設備租賃 | Persona Taiwan",
  description: "觸控螢幕、觸控廣告機彈性租賃，適合展覽、教育、商業空間等互動體驗需求。",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
            © {new Date().getFullYear()} Persona Taiwan. All rights reserved.
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
