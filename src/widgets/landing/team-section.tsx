"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  profileHref?: string;
  oneLine: string;
  competencies: string[];
  detail: {
    lead: string;
    strengths: string[];
    workingStyle: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "박준이",
    role: "AI Service Builder",
    initials: "PJ",
    profileHref: "/juni",
    oneLine: "프론트엔드부터 AI 서빙, AI 에이전트, 실사용자 유치까지 서비스의 끝을 잡아요.",
    competencies: ["프론트엔드", "AI 서빙", "AI 에이전트", "실사용자 유치"],
    detail: {
      lead: "데모에 머무르지 않고, 실제 사람이 쓰는 AI 서비스를 만드는 쪽에 강해요.",
      strengths: ["프론트엔드와 AI 서빙 사이의 빈틈을 줄여요", "AI 에이전트를 실제 사용자 흐름에 붙여요", "초기 사용자를 데려오고 반응으로 서비스를 고쳐요"],
      workingStyle: "귀찮은 게 싫어서, 귀찮음을 없애는 더 귀찮은 일을 먼저 해요.",
    },
  },
  {
    name: "김동인",
    role: "Backend Diplomat",
    initials: "KD",
    oneLine: "백엔드를 단단히 깔고, 사람과 기회를 제품 쪽으로 연결하는 활동형 개발자예요.",
    competencies: ["백엔드", "관계 조율", "활동력", "기회 연결"],
    detail: {
      lead: "서버와 데이터 흐름을 챙기면서, 팀 밖의 사람과 기회를 자연스럽게 Moss 쪽으로 끌어와요.",
      strengths: ["백엔드 흐름을 설계하고 안정화해요", "파트너와 사용자 접점을 만들어요", "필요한 사람을 모으고 분위기를 살려요"],
      workingStyle: "사소한 순간에 진심을 다하고, 관계가 필요한 순간에는 먼저 움직여요.",
    },
  },
  {
    name: "김상호",
    role: "Backend Precision",
    initials: "KS",
    oneLine: "데이터 흐름과 예외를 차분히 따라가며, 작은 불안정성을 놓치지 않아요.",
    competencies: ["정교함", "데이터 흐름", "예외 처리", "안정성"],
    detail: {
      lead: "데이터가 오가는 길, 조건이 갈라지는 순간, 겉으로 잘 보이지 않는 예외를 꼼꼼히 챙겨요.",
      strengths: ["놓치기 쉬운 예외 조건을 발견해요", "데이터 흐름의 작은 불일치를 끝까지 따라가요", "조용하지만 오래 가는 안정성을 만들어요"],
      workingStyle: "사용자가 의식하지 못한 채 믿고 쓰는 상태를 좋아해요.",
    },
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="moss-section border-y border-[var(--line)] px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[120px_minmax(0,1fr)]">
          <div className="flex items-center gap-3 lg:block">
            <p className="moss-section-label">팀원 소개</p>
            <span className="h-px flex-1 bg-[var(--line-strong)] lg:mt-5 lg:block lg:w-12" />
          </div>
          <div>
            <h2 className="max-w-none text-4xl font-black leading-tight sm:text-5xl lg:whitespace-nowrap lg:text-[3rem]">
              사용자 만족? 묻고 매출로 가
            </h2>
          </div>
        </div>

        <div className="grid gap-px border-y border-[var(--line-strong)] bg-[var(--line-strong)] lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Dialog key={member.name}>
              <DialogTrigger asChild>
                <button className="moss-member-profile group flex h-full flex-col bg-[var(--paper)] p-5 text-left transition-colors hover:bg-[var(--paper-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--moss)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]">
                  <MemberPhoto member={member} />
                  <div className="mt-6 flex min-h-[74px] items-start justify-between gap-4">
                    <div>
                      <p className="text-3xl font-black leading-tight">{member.name}</p>
                      <p className="moss-display mt-2 text-xl text-[var(--moss)]">
                        {member.role}
                      </p>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 size-5 text-[var(--moss)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="mt-5 min-h-28 text-base leading-7 text-[var(--muted-ink)]">
                    {member.oneLine}
                  </p>
                  <div className="mt-auto grid min-h-[92px] grid-cols-2 content-start gap-2 pt-6">
                    {member.competencies.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-[8px] border border-[var(--line-strong)] px-2.5 py-1 text-center text-sm font-semibold text-[var(--moss)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent>
                <div className="grid max-h-[calc(100svh-2rem)] overflow-y-auto lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="border-b border-[var(--line-strong)] p-5 lg:border-r lg:border-b-0">
                    <MemberPhoto member={member} large />
                  </div>
                  <div className="p-6 pr-14 sm:p-8 sm:pr-16">
                    <DialogHeader>
                      <p className="moss-display text-2xl text-[var(--moss)]">
                        {member.role}
                      </p>
                      <DialogTitle className="text-5xl sm:text-6xl">
                        {member.name}
                      </DialogTitle>
                      <DialogDescription>{member.detail.lead}</DialogDescription>
                    </DialogHeader>

                    <div className="mt-8 border-y border-[var(--line-strong)] py-6">
                      <p className="moss-section-label">역량</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {member.competencies.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-[8px] border border-[var(--line-strong)] px-3 py-1.5 text-sm font-semibold text-[var(--moss)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="moss-section-label">잘하는 것</p>
                      <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted-ink)]">
                        {member.detail.strengths.map((strength) => (
                          <li key={strength} className="border-l border-[var(--line-strong)] pl-4">
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7">
                      <p className="moss-section-label">일하는 방식</p>
                      <p className="mt-4 text-base leading-7 text-[var(--muted-ink)]">
                        {member.detail.workingStyle}
                      </p>
                      {member.profileHref ? (
                        <Button
                          asChild
                          className="mt-6 h-11 rounded-[14px] bg-[var(--ink)] px-4 text-[var(--paper)] hover:bg-[var(--moss-dark)]"
                        >
                          <Link href={member.profileHref}>
                            자기소개 보기
                            <ArrowUpRight aria-hidden="true" />
                          </Link>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberPhoto({
  member,
  large = false,
}: {
  member: TeamMember;
  large?: boolean;
}) {
  return (
    <div
      className={[
        "relative grid w-full shrink-0 overflow-hidden rounded-[8px] border border-[var(--line-strong)] bg-[var(--paper-deep)]",
        large ? "aspect-[4/5]" : "aspect-[4/5]",
      ].join(" ")}
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`${member.name} 사진`}
          fill
          sizes={large ? "(min-width: 1024px) 360px, 90vw" : "(min-width: 1024px) 320px, 90vw"}
          className="object-cover"
        />
      ) : (
        <div className="moss-photo-placeholder grid h-full place-items-center">
          <div className="text-center">
            <p className="moss-display text-7xl leading-none text-[var(--moss)] sm:text-8xl">
              {member.initials}
            </p>
            <p className="mt-4 font-mono text-xs text-[var(--muted-ink)]">
              {member.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
