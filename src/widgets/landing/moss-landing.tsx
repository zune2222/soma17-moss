import Image from "next/image";
import { ArrowDown, ArrowUpRight, Leaf, Ruler, Sparkles } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { TeamSection } from "./team-section";

const values = [
  {
    title: "Less Hassle",
    label: "귀찮음을 끝까지 추적해요",
    body: "한 번 더 누르고, 입력하고, 확인하는 일을 줄여요. 쉬운 결과 뒤의 복잡함은 우리가 가져가요.",
    Icon: Leaf,
  },
  {
    title: "Tiny Delight",
    label: "사소한 순간에 진심을 다해요",
    body: "빈 화면, 로딩, 성공 문구처럼 지나치기 쉬운 곳에 작은 웃음과 다정함을 심어둬요.",
    Icon: Sparkles,
  },
  {
    title: "Fine Details",
    label: "작은 차이에 집착해요",
    body: "문구의 어미, 1px 간격, 0.2초의 리듬까지 의식하지 않아도 편한 상태로 다듬어요.",
    Icon: Ruler,
  },
];

export function MossLandingPage() {
  return (
    <main id="top" className="moss-paper min-h-screen overflow-hidden text-[var(--ink)]">
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#top" className="moss-nav-brand flex items-center gap-3">
            <Image
              src="/moss/moss-logo-transparent.png"
              alt="Moss 로고"
              width={42}
              height={42}
              className="size-10 rounded-[10px] mix-blend-multiply"
              loading="eager"
            />
            <span className="moss-display text-lg">Moss</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[var(--muted-ink)] sm:flex">
            <a className="moss-link" href="#team">
              팀
            </a>
            <a className="moss-link" href="#values">
              가치
            </a>
            <a className="moss-link" href="#name">
              이름
            </a>
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-[82svh] items-center px-5 pb-6 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.8fr)]">
          <div className="moss-hero-copy max-w-3xl">
            <p className="moss-display mb-6 text-lg text-[var(--moss)]">
              Less hassle · tiny delights · fine details
            </p>
            <h1 className="moss-display text-8xl leading-none sm:text-9xl lg:text-[10rem]">
              Moss
            </h1>
            <p className="mt-7 max-w-xl text-xl font-medium leading-9 text-[var(--muted-ink)] sm:text-2xl sm:leading-10">
              귀찮음은 끝까지 줄이고, 작은 순간은 오래 남게 만드는 팀이에요.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-[14px] bg-[var(--moss)] px-5 text-[var(--paper)] hover:bg-[var(--moss-dark)]"
              >
                <a href="#team">
                  팀 보기
                  <ArrowDown aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-[14px] border-[var(--line-strong)] bg-[var(--paper)] px-5 text-[var(--ink)] hover:bg-[var(--paper-deep)]"
              >
                <a href="#values">세 가치 보기</a>
              </Button>
            </div>
          </div>

          <div className="moss-hero-visual relative mx-auto aspect-square w-full max-w-[460px] xl:max-w-[520px]">
            <Image
              src="/moss/moss-motion-transparent.gif"
              alt="움직이는 Moss 캐릭터"
              width={1254}
              height={1254}
              className="moss-motion-image h-full w-full object-contain"
              unoptimized
              preload
            />
          </div>
        </div>
      </section>

      <TeamSection />

      <section id="values" className="moss-section px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="moss-section-label">세 가지 핵심 가치</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              덜 귀찮게, 더 다정하게, 더 정확하게.
            </h2>
          </div>
          <div className="divide-y divide-[var(--line-strong)] border-y border-[var(--line-strong)]">
            {values.map(({ title, label, body, Icon }) => (
              <article
                key={title}
                className="moss-value-row grid gap-6 py-8 sm:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr_48px]"
              >
                <p className="moss-display text-xl text-[var(--moss)]">{title}</p>
                <div>
                  <h3 className="text-2xl font-black leading-snug">{label}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted-ink)]">
                    {body}
                  </p>
                </div>
                <Icon
                  aria-hidden="true"
                  className="moss-value-icon hidden size-8 text-[var(--moss)] lg:block"
                  strokeWidth={1.8}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="name" className="moss-section border-y border-[var(--line)] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <Image
              src="/moss/moss-logo-transparent.png"
              alt="Moss 로고"
              width={1254}
              height={1254}
              className="h-full w-full object-contain mix-blend-multiply"
              loading="eager"
            />
          </div>
          <div>
            <p className="moss-section-label">왜 Moss인가</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              <span className="block">작아 보여도,</span>
              <span className="block">오래 남는 제품이에요.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">
              이끼처럼 요란하지 않지만 끈질긴 제품. 가까이서 보면 결이 살아있고,
              사용자의 일상에 조용히 남는 제품을 만들어요.
            </p>
          </div>
        </div>
      </section>

      <section className="moss-section px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="moss-display text-lg text-[var(--moss)]">
            Less hassle, tiny delights, fine details.
          </p>
          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
            끈질긴 결, 살아있는 디테일.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-ink)]">
            가까이 다가갈수록 좋아지는 제품. 우리는 그런 것들을 만들어요.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 h-12 rounded-[14px] bg-[var(--ink)] px-5 text-[var(--paper)] hover:bg-[var(--moss-dark)]"
          >
            <a href="#top">
              처음으로
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
