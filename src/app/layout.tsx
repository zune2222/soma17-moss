import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soma17-moss.vercel.app"),
  title: "Moss",
  description: "번거로움은 줄이고, 소중한 순간은 오래 남기는 팀",
  openGraph: {
    title: "Moss",
    description: "번거로움은 줄이고, 소중한 순간은 오래 남기는 팀",
    url: "/",
    siteName: "Moss",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moss",
    description: "번거로움은 줄이고, 소중한 순간은 오래 남기는 팀",
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
