import type { Metadata } from "next";

import { JuniProfilePage } from "@/widgets/profile";

export const metadata: Metadata = {
  title: "박준이 | Moss",
  description:
    "프론트엔드부터 AI 서비스 구현, 실사용자 유치까지 제품이 시장에 닿는 끝을 잡는 개발자입니다.",
  openGraph: {
    title: "박준이 | Moss",
    description:
      "프론트엔드부터 AI 서비스 구현, 실사용자 유치까지 제품이 시장에 닿는 끝을 잡는 개발자입니다.",
    url: "/juni",
    siteName: "Moss",
    locale: "ko_KR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "박준이 | Moss",
    description:
      "프론트엔드부터 AI 서비스 구현, 실사용자 유치까지 제품이 시장에 닿는 끝을 잡는 개발자입니다.",
  },
};

export default function JuniPage() {
  return <JuniProfilePage />;
}
