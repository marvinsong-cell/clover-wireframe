# Clover Wireframe Project

클로버 회원가입 와이어프레임 프로젝트입니다. React 18과 Vanilla CSS를 사용합니다.

## Project Structure

```
/
├── index.html           # 메인 HTML (React CDN, Babel 포함)
├── styles.css           # 디자인 시스템 CSS (모든 스타일 정의)
├── App.jsx              # 루트 컴포넌트 (화면 전환 로직)
└── components/
    ├── DesignSystem.jsx # UI 컴포넌트 라이브러리 (CloverUI)
    ├── Onboarding.jsx   # 온보딩 화면
    ├── PhoneAuth.jsx    # 휴대폰 인증 화면
    ├── BasicInfo.jsx    # 기본 정보 입력 화면
    ├── CloverInfo.jsx   # 클로버 정보 입력 화면
    └── Complete.jsx     # 가입 완료 화면
```

## Tech Stack

- React 18 (CDN via unpkg)
- Babel standalone (JSX 변환)
- Vanilla CSS with CSS Custom Properties
- Pretendard 폰트

---

# MCP Servers

## Figma MCP Server Rules

### Component Organization

- IMPORTANT: 모든 재사용 가능한 UI 컴포넌트는 `components/DesignSystem.jsx`에 정의
- 화면(Screen) 컴포넌트는 `components/` 디렉토리에 별도 파일로 생성
- 컴포넌트는 `window.*` 또는 `window.CloverUI.*`로 전역 노출

### Existing Component Library (CloverUI)

다음 컴포넌트들이 `CloverUI` 네임스페이스에 이미 존재합니다:

**Layout & Navigation:**
- `Header` - 헤더 (뒤로가기 버튼, 타이틀)
- `ProgressBar` - 진행률 표시
- `BottomButton` - 하단 고정 버튼

**Input Components:**
- `BorderInput` - 하단 보더 스타일 입력 (메인 입력)
- `BoxInput` - 박스 스타일 입력 (생년월일 등)
- `BorderTextarea` - 하단 보더 스타일 텍스트영역
- `SearchInput` - 검색 입력

**Selection Components:**
- `SelectionList` - 라디오 스타일 선택 리스트
- `ChipGroup` - 태그 그룹 (다중 선택)
- `InterestChip` - 관심사 칩
- `CardOptionGrid` - 카드형 옵션 그리드
- `SelectDropdown` - 드롭다운 셀렉트

**Data Display:**
- `SearchResultItem` - 검색 결과 항목
- `NoticeBox` - 안내 박스
- `HelperText` - 도움말 텍스트

**Form Components:**
- `PhotoUploadGrid` - 사진 업로드 그리드
- `AgreementList` - 약관 동의 리스트

**Icons:**
- `Icons.Back`, `Icons.Check`, `Icons.CheckSmall`
- `Icons.ChevronRight`, `Icons.Search`, `Icons.Plus`, `Icons.Clover`

### Design Tokens

IMPORTANT: 색상값을 절대 하드코딩하지 마세요. `styles.css`에 정의된 CSS 변수를 사용하세요.

**Colors:**
```css
--primary-1: #cef17b      /* 프라이머리 (라임 그린) */
--black: #000000
--white: #ffffff
--gray-1: #1a1a1a         /* 텍스트 진한 회색 */
--gray-2: #a09f9f         /* 보조 텍스트 */
--gray-3: #d8d7d7         /* 테두리 */
--gray-4: #f2f2f2         /* 배경 연한 회색 */
--gray-5: #f9f9f9         /* 배경 매우 연한 회색 */
--placeholder: #cccccc
--helper: #999999
--border-default: #e0e0e0
--border-light: #f5efea
--selected-bg: #e5dcd2
--error: #ff4d4d
--bg-gradient: linear-gradient(180deg, #fffdf8 0%, #ffffff 100%)
```

**Typography:**
```css
--font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif
```

**Transitions:**
```css
--transition-fast: 150ms ease
--transition-normal: 250ms ease
```

### Figma Implementation Flow

IMPORTANT: 다음 순서를 반드시 따르세요:

1. `get_design_context`를 먼저 실행하여 노드 구조 확인
2. `get_screenshot`으로 시각적 참조 확인
3. 필요한 에셋이 있다면 다운로드
4. 구현 시작 - 아래 규칙을 적용

### Styling Rules

- IMPORTANT: Tailwind 클래스를 사용하지 마세요. 이 프로젝트는 Vanilla CSS를 사용합니다.
- 모든 스타일은 `styles.css`에 정의된 클래스와 CSS 변수를 사용
- 인라인 스타일은 최소화하고, 필요시 CSS 변수 참조
- 새 컴포넌트 스타일은 `styles.css`에 추가

**Screen Layout Pattern:**
```jsx
<div className="screen">
  <CloverUI.Header title="화면 제목" onBack={handleBack} />
  <CloverUI.ProgressBar current={step} total={totalSteps} />
  <div className="screen-content">
    {/* 콘텐츠 */}
  </div>
  <CloverUI.BottomButton text="다음" isActive={isValid} onClick={handleNext} />
</div>
```

**Question Screen Pattern:**
```jsx
<div className="slide-up">
  <h2 className="question-title">질문 텍스트<br/>두 번째 줄</h2>
  {/* 입력 컴포넌트 */}
  <CloverUI.HelperText>도움말 텍스트</CloverUI.HelperText>
</div>
```

### Component Creation Rules

1. 새 UI 컴포넌트는 `components/DesignSystem.jsx`에 추가하고 `window.CloverUI`에 등록
2. 새 화면 컴포넌트는 `components/` 디렉토리에 별도 파일로 생성
3. 화면 컴포넌트는 `window.*Screen`으로 전역 등록
4. Props 패턴 준수:
   - `onComplete` - 화면 완료 콜백
   - `onBack` - 뒤로가기 콜백
   - `value`, `onChange` - 상태 제어
   - `isActive`, `onClick` - 버튼 활성화

### Asset Handling

- IMPORTANT: Figma MCP 서버가 localhost 소스를 반환하면 해당 소스를 직접 사용
- IMPORTANT: 새 아이콘 패키지를 설치하지 마세요. SVG 아이콘은 `Icons` 객체에 추가
- 이미지 에셋은 `screenshots/` 디렉토리에 저장

### Mobile Frame

- 모든 화면은 390x844px 모바일 프레임 기준
- `.mobile-frame` 클래스가 컨테이너 역할
- 스크롤 가능한 콘텐츠는 `.screen-content`에 배치

### Animation Classes

```css
.fade-in   /* 페이드 인 */
.slide-up  /* 슬라이드 업 */
```

### Code Style

- 한글 주석 사용
- 함수형 컴포넌트만 사용
- React Hooks (useState) 사용
- Arrow function 컴포넌트 형식

```jsx
const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = React.useState(initialValue);

  return (
    <div className="component-class">
      {/* 내용 */}
    </div>
  );
};

window.ComponentName = ComponentName;
```

### Validation Rules

구현 완료 전 체크리스트:
1. 기존 `CloverUI` 컴포넌트를 최대한 재사용했는지 확인
2. 색상이 CSS 변수로 참조되는지 확인
3. 화면 레이아웃이 `.screen` 패턴을 따르는지 확인
4. Figma 스크린샷과 1:1 시각적 일치 확인
5. 반응형 동작 (모바일 프레임 내) 확인
