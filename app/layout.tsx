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
  title: "0rich.com - 영리치 도메인 판매",
  description:
    "0rich.com 도메인을 판매합니다. 금융, 사업 분야에 특화된 영리치 (영앤리치) 도메인을 소유하세요.",
  keywords: "도메인 판매, 0rich.com, 프리미엄 도메인, 도메인 구매",
  openGraph: {
    title: "0rich.com - 영리치 도메인 판매",
    description:
      "0rich.com 도메인을 판매합니다. 비즈니스에 완벽한 프리미엄 도메인을 소유하세요.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
