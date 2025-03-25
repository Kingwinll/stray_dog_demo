import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "浪浪之家 | 幫助流浪狗獲得更好的生活",
  description: "幫助台灣流浪狗，提供愛與關懷，一起為浪浪創造更美好的未來。捐款支持我們的救助工作。",
  keywords: "流浪狗, 浪浪, 流浪動物, 狗狗, 捐款, 救助, 收容所, 台灣, 認養"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
