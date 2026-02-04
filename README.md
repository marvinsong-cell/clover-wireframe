# Clover - 프리미엄 소개팅 웹앱

검증된 프로필 기반의 프리미엄 소개팅 서비스입니다.

## Features

- **클로버 점수 시스템** - 직업, 학력, 자산, 외모, 성격 5가지 영역으로 프로필 검증
- **스마트 매칭** - 클로버 점수 기반 매칭 알고리즘
- **실시간 채팅** - 매칭 성공 시 즉시 대화 가능
- **프로필 인증** - 신뢰할 수 있는 만남을 위한 검증 시스템

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 18, TypeScript, Vite |
| Backend | Supabase (Auth, Database, Storage, Realtime) |
| Styling | Vanilla CSS, CSS Custom Properties |
| State | Zustand (Client), React Query (Server) |
| Font | Pretendard |

## Project Structure

```
src/
├── app/                 # 앱 진입점 & Providers
├── pages/               # 페이지 컴포넌트
│   ├── auth/           # 로그인, 회원가입, 온보딩
│   ├── main/           # 피드, 채팅, 매칭, 프로필
│   └── profile/        # 프로필 수정/조회
├── components/
│   ├── ui/             # 디자인 시스템 컴포넌트
│   ├── layout/         # 레이아웃 (Header, BottomNav)
│   └── features/       # 기능별 컴포넌트
├── lib/
│   ├── supabase/       # Supabase 클라이언트
│   ├── hooks/          # 커스텀 훅
│   ├── api/            # API 함수
│   └── utils/          # 유틸리티
├── stores/              # Zustand 스토어
├── types/               # TypeScript 타입
└── styles/              # 글로벌 스타일
```

## Wireframe

현재 `/wireframe` 디렉토리에 회원가입 플로우 와이어프레임이 구현되어 있습니다.

```
wireframe/
├── index.html
├── styles.css
├── App.jsx
└── components/
    ├── DesignSystem.jsx   # UI 컴포넌트 라이브러리
    ├── Onboarding.jsx     # 온보딩 (3단계)
    ├── PhoneAuth.jsx      # 휴대폰 인증
    ├── BasicInfo.jsx      # 기본 정보 (8단계)
    ├── CloverInfo.jsx     # 클로버 정보 (5단계)
    └── Complete.jsx       # 가입 완료
```

### 와이어프레임 실행

```bash
# 로컬 서버로 실행
npx serve .

# 또는 Live Server 등 사용
```

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--primary-1` | `#cef17b` | 프라이머리 (라임 그린) |
| `--black` | `#000000` | 텍스트, 버튼 |
| `--gray-1` | `#1a1a1a` | 진한 텍스트 |
| `--gray-2` | `#a09f9f` | 보조 텍스트 |
| `--gray-3` | `#d8d7d7` | 테두리 |
| `--gray-4` | `#f2f2f2` | 배경 (연한) |
| `--error` | `#ff4d4d` | 에러 |

### Components (CloverUI)

**Layout:** Header, ProgressBar, BottomButton

**Input:** BorderInput, BoxInput, BorderTextarea, SearchInput

**Selection:** SelectionList, ChipGroup, InterestChip, CardOptionGrid

**Display:** SearchResultItem, NoticeBox, HelperText

## Database Schema

```
profiles        # 사용자 프로필
match_actions   # 좋아요/패스 액션
matches         # 매칭 (양쪽 좋아요)
chat_rooms      # 채팅방
messages        # 메시지
```

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase 프로젝트

### Installation

```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env.local
# VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY 설정

# 개발 서버 실행
npm run dev
```

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## License

Private - All rights reserved
