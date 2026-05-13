"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

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
  oneLine: string;
  competencies: string[];
  detail: {
    lead: string;
  };
  selfIntro?: {
    basics: { label: string; value: string }[];
    soma: { title: string; body: string }[];
    careers: { title: string; meta: string; body: string }[];
    projects: { title: string; body: string; href?: string }[];
    awards: string[];
    education: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "김상호",
    role: "Backend Precision",
    initials: "KS",
    photo: "/team/kim-sangho.jpg",
    oneLine: "데이터 흐름과 예외를 차분히 따라가며, 작은 불안정성을 놓치지 않아요.",
    competencies: ["정교함", "데이터 흐름", "예외 처리", "안정성"],
    detail: {
      lead: "데이터가 오가는 길, 조건이 갈라지는 순간, 겉으로 잘 보이지 않는 예외를 꼼꼼히 챙겨요.",
    },
    selfIntro: {
      basics: [
        { label: "이름", value: "김상호" },
        { label: "나이", value: "23살" },
        { label: "학력", value: "단국대학교 소프트웨어학과 휴학" },
      ],
      soma: [
        {
          title: "소마에서 얻고 싶은 것",
          body: "실서비스 개발과 수익화 경험을 통해 기술을 실제 사용자 가치로 연결하는 방법을 배우고 싶어요. 팀 협업과 빠른 실행·검증 과정을 경험하며, 장기적으로는 창업까지 이어질 수 있는 역량을 만들고 싶어요.",
        },
        {
          title: "소마에 사용할 시간",
          body: "소마에 몰입하기 위해 휴학 중이고, 얼마 전 경기도 용인에서 부산 센터 인근으로 입주했어요. 센터까지 도보 10분이라 프로젝트와 협업에 우선순위를 두고 시간을 집중적으로 사용할 수 있어요.",
        },
      ],
      careers: [],
      projects: [
        {
          title: "THAD",
          body: "Talking Head AI Detector. AI로 생성된 talking head 영상을 탐지하는 프로젝트예요.",
        },
      ],
      awards: [],
      education:
        "단국대학교 경제학과 · 2024.03 - 2024.12 / 단국대학교 소프트웨어학과 · 2025.03 - 2025.12",
    },
  },
  {
    name: "박준이",
    role: "AI Service Builder",
    initials: "PJ",
    photo: "/team/park-juni.jpg",
    oneLine: "프론트엔드부터 AI 서빙, AI 에이전트, 실사용자 유치까지 서비스의 끝을 잡아요.",
    competencies: ["프론트엔드", "AI 서빙", "AI 에이전트", "실사용자 유치"],
    detail: {
      lead: "데모에 머무르지 않고, 실제 사람이 쓰는 AI 서비스를 만드는 쪽에 강해요.",
    },
    selfIntro: {
      basics: [
        { label: "이름", value: "박준이" },
        { label: "나이", value: "25세" },
        { label: "학력", value: "부산대학교, 2027년 2월 졸업 예정" },
      ],
      soma: [
        {
          title: "소마에서 얻고 싶은 것",
          body: "아이디어를 데모로 끝내지 않고, 실제 사용자 만족과 매출까지 이어지는 AI 서비스 성장 경험을 얻고 싶어요.",
        },
        {
          title: "소마에 사용할 시간",
          body: "4학년 재학 중이지만 2학기 수업이 거의 없어 소마에 많은 시간을 할애할 수 있어요.",
        },
      ],
      careers: [
        {
          title: "ABlock",
          meta: "Frontend Engineer · 2021.11 - 2022.06",
          body: "React Native 앱의 지도 렌더링과 네트워크 요청을 최적화했어요.",
        },
        {
          title: "에버스톤(EVST)",
          meta: "현장실습 · 2024.12 - 2025.07",
          body: "K-Lingo 한국어 학습 앱을 React Native와 Firebase로 개발하고 스토어 출시에 참여했어요.",
        },
      ],
      projects: [
        {
          title: "PNU Blace",
          body: "부산대 도서관 데이터 소통 플랫폼. 성능 최적화와 실시간 좌석 UX를 맡았어요.",
        },
        {
          title: "Katter",
          body: "군인과 연인을 위한 편지 서비스 앱. React Native와 Firebase로 출시까지 진행했어요.",
        },
        {
          title: "Glue",
          body: "언어 교환 모임 매칭 앱. 실시간 채팅과 백엔드 협업 구조를 경험했어요.",
        },
        {
          title: "eatPnu",
          body: "부산대 맛집 추천 웹서비스. 사용자 866명, 페이지뷰 8,414회를 기록했어요.",
        },
      ],
      awards: [
        "BNK 금융그룹 디지털 혁신 챌린지 해커톤 2025 최우수상",
        "2024 블록체인 ESG 해커톤 최우수상",
        "2021 부산 ICT 융합 해카톤 일반부 대상",
        "2019 한국 메이커 & 코딩 경진대회 메이커 부문 대상",
      ],
      education: "부산대학교 재학 · SW특기자 전형 입학 · 2027년 2월 졸업 예정",
    },
  },
  {
    name: "김동인",
    role: "Backend Diplomat",
    initials: "KD",
    photo: "/team/kim-dongin.jpg",
    oneLine: "백엔드를 단단히 깔고, 사람과 기회를 제품 쪽으로 연결하는 활동형 개발자예요.",
    competencies: ["백엔드", "관계 조율", "활동력", "기회 연결"],
    detail: {
      lead: "서버와 데이터 흐름을 챙기면서, 팀 밖의 사람과 기회를 자연스럽게 Moss 쪽으로 끌어와요.",
    },
    selfIntro: {
      basics: [
        { label: "이름", value: "김동인" },
        { label: "나이", value: "24살" },
        { label: "학력", value: "부산대학교 정보컴퓨터공학부 졸업" },
      ],
      soma: [
        {
          title: "소마에서 얻고 싶은 것",
          body: "취업을 안 해도 될 만큼의 용기, 그리고 부를 얻고 싶어요.",
        },
        {
          title: "소마에 사용할 시간",
          body: "병행하는 활동은 없습니다. 24/7, 올해는 소마에 올인합니다.",
        },
      ],
      careers: [
        {
          title: "백엔드 인턴",
          meta: "외주 및 스타트업 · 1년",
          body: "실제 요구사항을 받아 서버를 만들고 운영 흐름을 맞춰본 경험이 있어요.",
        },
        {
          title: "Apptive 회장",
          meta: "교내 최대 규모 IT 동아리 · 1년",
          body: "조직을 운영하고 사람을 모으며 프로젝트가 굴러가게 만드는 일을 맡았어요. https://apptive.notion.site/",
        },
      ],
      projects: [
        {
          title: "SpeakNote",
          body: "대학 수업에서 사용하는 학습 보조 플랫폼. 프론트엔드와 백엔드를 함께 개발했어요.",
          href: "https://speaknote.site/",
        },
        {
          title: "AI Company",
          body: "AI 에이전트로만 운영되는 회사 시스템을 구축했어요.",
          href: "https://github.com/PNU-attention/ai_company",
        },
      ],
      awards: [
        "제10회 AI·SW 융합 해커톤 일반부 최우수상(1등)",
        "PNU × Upstage: Document Challenge 2025 최우수상(1등)",
        "SW중심대학 마일스톤 SW전문인재S 장학생(1등) 선발",
      ],
      education: "2026년 2월 부산대학교 정보컴퓨터공학부 졸업",
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
              <DialogContent className="lg:max-w-[1120px] xl:max-w-[1200px]">
                <div className="grid max-h-[calc(100svh-2rem)] overflow-y-auto lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)]">
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

                    {member.selfIntro ? <SelfIntroContent intro={member.selfIntro} /> : null}
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

function SelfIntroContent({
  intro,
}: {
  intro: NonNullable<TeamMember["selfIntro"]>;
}) {
  return (
    <div className="mt-8 border-t border-[var(--line-strong)] pt-7">
      <p className="moss-section-label">자기소개</p>

      <div className="mt-4 grid gap-px overflow-hidden border-y border-[var(--line-strong)] bg-[var(--line-strong)] sm:grid-cols-3">
        {intro.basics.map((item) => (
          <div key={item.label} className="bg-[var(--paper)] p-4">
            <p className="moss-section-label">{item.label}</p>
            <p className="mt-2 text-base font-black leading-snug">{item.value}</p>
          </div>
        ))}
      </div>

      <IntroGroup title="SOMA에서">
        {intro.soma.map((item) => (
          <IntroItem key={item.title} title={item.title} body={item.body} />
        ))}
      </IntroGroup>

      {intro.careers.length > 0 ? (
        <IntroGroup title="경력">
          {intro.careers.map((career) => (
            <IntroItem
              key={career.title}
              title={career.title}
              meta={career.meta}
              body={career.body}
            />
          ))}
        </IntroGroup>
      ) : null}

      <IntroGroup title="프로젝트">
        {intro.projects.map((project) => (
          <IntroItem
            key={project.title}
            title={project.title}
            body={project.body}
            href={project.href}
          />
        ))}
      </IntroGroup>

      {intro.awards.length > 0 ? (
        <IntroGroup title="수상">
          <ul className="space-y-3 text-sm leading-6 text-[var(--muted-ink)]">
            {intro.awards.map((award) => (
              <li key={award} className="border-l border-[var(--line-strong)] pl-3">
                {award}
              </li>
            ))}
          </ul>
        </IntroGroup>
      ) : null}

      <IntroGroup title="학력">
        <p className="text-sm leading-6 text-[var(--muted-ink)]">{intro.education}</p>
      </IntroGroup>
    </div>
  );
}

function IntroGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-7 border-t border-[var(--line-strong)] pt-6">
      <p className="moss-section-label">{title}</p>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function IntroItem({
  title,
  meta,
  body,
  href,
}: {
  title: string;
  meta?: string;
  body: string;
  href?: string;
}) {
  return (
    <article className="grid gap-2 sm:grid-cols-[150px_minmax(0,1fr)]">
      <div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-black leading-snug text-[var(--ink)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--moss)]"
          >
            {title}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        ) : (
          <p className="font-black leading-snug">{title}</p>
        )}
        {meta ? (
          <p className="mt-1 text-xs font-semibold text-[var(--moss)]">{meta}</p>
        ) : null}
      </div>
      <p className="text-sm leading-6 text-[var(--muted-ink)]">{body}</p>
    </article>
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
