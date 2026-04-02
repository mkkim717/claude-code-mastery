# 개발자 웹 이력서 개발 로드맵

## 기술 스택
- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS (CDN)

---

## 프로젝트 구조

```
resume/
├── index.html
├── style.css
└── script.js
```

---

## 개발 단계

### Phase 1 — 기본 구조 설계
- [ ] `index.html` 생성 및 Tailwind CSS CDN 연결
- [ ] 전체 레이아웃 섹션 정의 (Header, Nav, Main, Footer)
- [ ] 반응형 기준 설정 (모바일 우선)

### Phase 2 — 콘텐츠 섹션 구현
- [ ] **Hero 섹션** — 이름, 직함, 한 줄 소개, 연락처 링크
- [ ] **About 섹션** — 간단한 자기소개 및 강점 요약
- [ ] **Skills 섹션** — 기술 스택 목록 (프론트엔드 / 백엔드 / 기타)
- [ ] **Experience 섹션** — 경력 타임라인 (회사명, 기간, 담당 업무)
- [ ] **Projects 섹션** — 주요 프로젝트 카드 (이름, 설명, 기술 스택, 링크)
- [ ] **Education 섹션** — 학력 정보
- [ ] **Contact 섹션** — 이메일, GitHub, LinkedIn 링크

### Phase 3 — 스타일링
- [ ] Tailwind CSS 유틸리티 클래스로 각 섹션 스타일 적용
- [ ] 컬러 테마 정의 (primary, secondary, accent)
- [ ] 다크 모드 지원 (`dark:` 클래스 활용)
- [ ] 반응형 레이아웃 검증 (모바일 / 태블릿 / 데스크탑)

### Phase 4 — 인터랙션 (JavaScript)
- [ ] 스크롤 시 네비게이션 활성 섹션 하이라이트
- [ ] 부드러운 스크롤(Smooth Scroll) 구현
- [ ] 스크롤 진입 시 요소 페이드인 애니메이션
- [ ] 다크 모드 토글 버튼 구현
- [ ] 모바일 햄버거 메뉴 구현

### Phase 5 — 마무리 및 배포
- [ ] 크로스 브라우저 테스트 (Chrome, Firefox, Safari, Edge)
- [ ] 모바일 기기 실기기 테스트
- [ ] HTML 시맨틱 마크업 및 접근성(a11y) 검토
- [ ] 이미지 최적화 (프로필 사진 등)
- [ ] GitHub Pages 또는 Netlify 배포

---

## 이력서 콘텐츠 (샘플)

### 기본 정보
| 항목 | 내용 |
|------|------|
| 이름 | 홍길동 |
| 직함 | Frontend Developer |
| 이메일 | hong@example.com |
| GitHub | github.com/honggildong |
| LinkedIn | linkedin.com/in/honggildong |

### Skills
- **Frontend**: HTML, CSS, JavaScript, React, Vue.js, Tailwind CSS
- **Backend**: Node.js, Express, Python
- **Database**: MySQL, MongoDB
- **Tools**: Git, Docker, Figma, VS Code

### Experience (예시)
- **ABC 테크** — Frontend Developer (2022.03 ~ 현재)
  - React 기반 SPA 개발 및 유지보수
  - 성능 최적화로 LCP 40% 개선
- **XYZ 스타트업** — Web Developer (2020.06 ~ 2022.02)
  - 반응형 웹사이트 10개 이상 개발
  - REST API 연동 및 상태 관리

### Projects (예시)
- **포트폴리오 웹사이트** — HTML/CSS/JS, Tailwind CSS ([GitHub](#))
- **날씨 앱** — JavaScript, OpenWeather API ([GitHub](#))
- **Todo 앱** — React, LocalStorage ([GitHub](#))

---

## 디자인 참고 방향
- 깔끔하고 미니멀한 디자인
- 읽기 쉬운 타이포그래피 (Inter 또는 Noto Sans KR)
- 색상: 다크 네이비 + 흰색 조합 또는 화이트 + 포인트 컬러
- 카드 기반 프로젝트 레이아웃

---

## 완료 기준
- 모든 섹션이 모바일/데스크탑에서 올바르게 렌더링
- 다크 모드 토글 정상 작동
- 외부 링크(GitHub, LinkedIn 등) 정상 연결
- Lighthouse 성능 점수 90점 이상
