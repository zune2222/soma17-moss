import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moss | Less hassle, tiny delights, fine details",
  description:
    "귀찮음을 끝까지 추적하고, 사소한 순간에 진심을 다하는 제품 팀 Moss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
