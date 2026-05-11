# Moss

SOMA 17기 팀 Moss의 랜딩 페이지입니다.

**Live:** [soma17-moss.vercel.app](https://soma17-moss.vercel.app)

Moss는 귀찮음을 끝까지 줄이고, 사소한 순간을 오래 남게 만드는 제품 팀입니다. 사용자는 가볍게 쓰고, 우리는 집요하게 만드는 태도를 담아 크레용과 종이 질감의 조용한 웹 경험으로 풀어냈습니다.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- lucide-react

## Highlights

- Moss 로고와 움직이는 캐릭터 GIF를 활용한 첫 화면
- Pretendard와 Americus Sans Aged를 함께 쓰는 브랜드 타이포그래피
- 종이 질감과 격자 배경 기반의 절제된 비주얼 시스템
- 팀원별 역량 카드와 상세 모달
- FSD 스타일의 `app`, `widgets`, `shared` 구조

## Getting Started

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 됩니다.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

```text
src/
  app/
  shared/
    lib/
    ui/
  widgets/
    landing/
public/
  fonts/
  moss/
```

## Deployment

이 프로젝트는 Vercel에 배포되어 있습니다.

- Production: [https://soma17-moss.vercel.app](https://soma17-moss.vercel.app)
