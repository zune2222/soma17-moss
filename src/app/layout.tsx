import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soma17-moss.vercel.app"),
  title: "Moss",
  description: "사용자는 가볍게, 우리는 집요하게 만들어요.",
  openGraph: {
    title: "Moss",
    description: "사용자는 가볍게, 우리는 집요하게 만들어요.",
    url: "/",
    siteName: "Moss",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moss",
    description: "사용자는 가볍게, 우리는 집요하게 만들어요.",
  },
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
