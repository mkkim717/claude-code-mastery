# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

---

## 프로젝트 개요

빌드 도구 없이 순수 HTML/CSS/JavaScript와 Tailwind CSS CDN을 사용하는 **정적 개발자 웹 이력서** 프로젝트입니다.

목표 구조:
```
resume/
├── index.html   # 전체 이력서 마크업 (단일 페이지)
├── style.css    # Tailwind로 처리하지 않는 커스텀 스타일
└── script.js   # 스크롤 애니메이션, 다크 모드 토글, 햄버거 메뉴
```

---

## 개발 환경 실행

별도의 빌드 과정 없이 브라우저에서 직접 파일을 열거나, 로컬 서버를 사용합니다.

```bash
# Python 내장 서버 (권장)
python -m http.server 8080 --directory resume

# Node.js가 있을 경우 (npx 필요)
npx serve resume
```

이후 브라우저에서 `http://localhost:8080` 접속.

---

## 아키텍처 핵심 사항

### Tailwind CSS 사용 방식
빌드 단계 없이 CDN 방식으로 사용합니다. `index.html` `<head>`에 아래 태그를 포함합니다.

```html
<script src="https://cdn.tailwindcss.com"></script>
```

커스텀 테마 설정이 필요하면 CDN 스크립트 이후에 `tailwind.config` 블록을 인라인으로 작성합니다.

```html
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: { extend: { /* 커스텀 색상 등 */ } }
  }
</script>
```

### 다크 모드
`darkMode: 'class'` 방식을 사용합니다. `<html>` 요소에 `dark` 클래스를 `script.js`에서 토글합니다.

### 섹션 구성 순서
`index.html`은 단일 페이지로 다음 순서로 섹션을 배치합니다:
`Hero → About → Skills → Experience → Projects → Education → Contact`

각 섹션은 `id` 속성으로 앵커 링크 및 스크롤 감지에 활용합니다.

### JavaScript 역할 (`script.js`)
- **IntersectionObserver**: 스크롤 진입 시 섹션 페이드인 및 네비게이션 활성화
- **다크 모드 토글**: `localStorage`로 사용자 설정 유지
- **햄버거 메뉴**: 모바일 전용 네비게이션 열기/닫기

---

## 개발 로드맵 참조

단계별 구현 체크리스트는 `ROADMAP.md`를 참고합니다.

---

## 배포

빌드 산출물이 없으므로 `resume/` 디렉토리를 그대로 배포합니다.

- **GitHub Pages**: `resume/` 폴더를 배포 소스로 지정
- **Netlify**: `resume/` 디렉토리를 드래그 앤 드롭으로 배포

완료 기준: Lighthouse 성능 점수 90점 이상, 모든 브라우저(Chrome / Firefox / Safari / Edge)에서 정상 렌더링.
