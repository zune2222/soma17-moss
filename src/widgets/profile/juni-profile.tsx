import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Button } from "@/shared/ui/button";

const basics = [
  { label: "이름", value: "박준이" },
  { label: "나이", value: "24세" },
  { label: "소속", value: "부산대학교, 2027년 2월 졸업 예정" },
  { label: "강점", value: "프론트엔드, AI 서비스 구현, 실사용자 유치" },
];

const careers = [
  {
    title: "ABlock",
    meta: "Frontend Engineer · 2021.11 - 2022.06",
    body: "React Native 기반 앱에서 지도 렌더링과 네트워크 요청을 최적화했습니다.",
  },
  {
    title: "에버스톤(EVST)",
    meta: "현장실습 · 2024.12 - 2025.07",
    body: "K-Lingo 한국어 학습 앱을 React Native와 Firebase로 개발하고 스토어 출시에 참여했습니다.",
  },
];

const projects = [
  {
    title: "PNU Blace",
    body: "부산대 도서관 데이터 소통 플랫폼. 성능 최적화, SSR 데이터 흐름, 실시간 좌석 UX를 맡았습니다.",
  },
  {
    title: "Katter",
    body: "군인과 연인을 위한 편지 서비스 앱. React Native와 Firebase로 출시까지 진행했습니다.",
  },
  {
    title: "Glue",
    body: "언어 교환 모임 매칭 앱. 실시간 채팅과 백엔드 협업 구조를 경험했습니다.",
  },
  {
    title: "부산대 정보생명공학대 학생회 웹사이트",
    body: "학과 공식 웹사이트를 제작하고 실제 사용자 유입을 운영했습니다.",
  },
  {
    title: "eatPnu",
    body: "부산대 맛집 추천 웹서비스. 사용자 866명, 페이지뷰 8,414회를 기록했습니다.",
  },
];

const awards = [
  "BNK 금융그룹 디지털 혁신 챌린지 해커톤 2025 최우수상",
  "2024 블록체인 ESG 해커톤 최우수상",
  "2021 부산 ICT 융합 해카톤 일반부 대상",
  "Smarteen App+ Challenge 2020 미래산업부문 우수상",
  "2019 한국 메이커 & 코딩 경진대회 메이커 부문 대상",
];

export function JuniProfilePage() {
  return (
    <main className="moss-paper min-h-screen text-[var(--ink)]">
      <header className="px-5 py-5 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted-ink)] transition-colors hover:text-[var(--moss)]"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Moss
          </Link>
          <p className="moss-display text-lg text-[var(--moss)]">SOMA 17</p>
        </nav>
      </header>

      <section className="px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="moss-hero-copy">
            <p className="moss-section-label">자기소개</p>
            <h1 className="mt-5 text-6xl font-black leading-none sm:text-8xl">
              박준이
            </h1>
            <p className="mt-7 max-w-3xl text-2xl font-black leading-tight sm:text-4xl">
              데모에 머무르지 않고, 실제 사람이 쓰는 AI 서비스를 만들고 싶습니다.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">
              프론트엔드부터 AI 서빙, 사용자 유치까지 제품이 시장에 닿는 끝을 잡는 개발자입니다.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[260px] lg:max-w-none">
            <Image
              src="/moss/moss-favicon.png"
              alt="Moss 캐릭터"
              width={512}
              height={512}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgb(251_250_244_/_0.62)] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-px border-y border-[var(--line-strong)] bg-[var(--line-strong)] md:grid-cols-4">
          {basics.map((item) => (
            <div key={item.label} className="bg-[var(--paper)] p-5">
              <p className="moss-section-label">{item.label}</p>
              <p className="mt-3 text-xl font-black leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="moss-section-label">SOMA에서</p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              얻고 싶은 것과 쓸 시간
            </h2>
          </div>
          <div className="divide-y divide-[var(--line-strong)] border-y border-[var(--line-strong)]">
            <ProfileRow
              title="얻고 싶은 것"
              body="아이디어를 데모로 끝내지 않고, 실제 사용자 만족과 매출까지 이어지는 AI 서비스 성장 경험을 얻고 싶습니다."
            />
            <ProfileRow
              title="사용할 시간"
              body="SOMA 기간에는 제품 검증, 개발, 사용자 유치에 시간을 우선 배치하겠습니다. 출시와 운영 경험을 바탕으로 빠르게 만들고, 반응을 보고, 다시 고치겠습니다."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgb(251_250_244_/_0.62)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="moss-section-label">경력</p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              앱을 만들고 출시했습니다.
            </h2>
          </div>
          <div className="divide-y divide-[var(--line-strong)] border-y border-[var(--line-strong)]">
            {careers.map((career) => (
              <ProfileRow
                key={career.title}
                title={career.title}
                meta={career.meta}
                body={career.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="moss-section-label">프로젝트</p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              만들고 운영한 것들
            </h2>
          </div>
          <div className="divide-y divide-[var(--line-strong)] border-y border-[var(--line-strong)]">
            {projects.map((project) => (
              <ProfileRow
                key={project.title}
                title={project.title}
                body={project.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgb(251_250_244_/_0.62)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="moss-section-label">수상 · 학력</p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              검증된 실행력
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="border-y border-[var(--line-strong)] py-6">
              <p className="text-xl font-black">대표 수상</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[var(--muted-ink)]">
                {awards.map((award) => (
                  <li key={award} className="border-l border-[var(--line-strong)] pl-4">
                    {award}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-y border-[var(--line-strong)] py-6">
              <p className="text-xl font-black">학력</p>
              <p className="mt-5 text-base leading-7 text-[var(--muted-ink)]">
                부산대학교 재학
                <br />
                2021.03 입학, 2027.02 졸업 예정
                <br />
                SW특기자 전형 입학
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 border-y border-[var(--line-strong)] py-10 sm:flex-row sm:items-center">
          <div>
            <p className="moss-display text-lg text-[var(--moss)]">
              Build, ship, learn.
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight">
              빠르게 만들고, 실제 반응으로 증명하겠습니다.
            </h2>
          </div>
          <Button
            asChild
            className="h-12 rounded-[14px] bg-[var(--ink)] px-5 text-[var(--paper)] hover:bg-[var(--moss-dark)]"
          >
            <Link href="/">
              Moss 보기
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function ProfileRow({
  title,
  meta,
  body,
}: {
  title: string;
  meta?: string;
  body: string;
}) {
  return (
    <article className="grid gap-4 py-6 sm:grid-cols-[220px_minmax(0,1fr)]">
      <div>
        <h3 className="text-2xl font-black leading-tight">{title}</h3>
        {meta ? (
          <p className="mt-2 text-sm font-semibold text-[var(--moss)]">{meta}</p>
        ) : null}
      </div>
      <p className="text-base leading-7 text-[var(--muted-ink)]">{body}</p>
    </article>
  );
}
