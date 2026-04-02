/* =============================================
   개발자 웹 이력서 — 인터랙션 스크립트
   ============================================= */

/* ─── 다크 모드 ─── */

const themeToggleBtn = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

// 테마 적용 (기본값: dark)
function applyTheme(theme) {
  if (theme === 'dark') {
    htmlEl.classList.add('dark');
  } else {
    htmlEl.classList.remove('dark');
  }
  updateToggleIcon(theme);
}

// 토글 아이콘 업데이트
function updateToggleIcon(theme) {
  const sunIcon  = document.getElementById('iconSun');
  const moonIcon = document.getElementById('iconMoon');
  if (!sunIcon || !moonIcon) return;

  if (theme === 'dark') {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
}

// 페이지 로드 시 저장된 테마 적용 (없으면 dark 기본값)
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

// 토글 클릭
themeToggleBtn?.addEventListener('click', () => {
  const isDark  = htmlEl.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});

/* ─── 햄버거 메뉴 ─── */

const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

/* ─── 스크롤 감지 — 페이드인 ─── */

const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach(el => fadeObserver.observe(el));

/* ─── 네비게이션 활성 섹션 감지 ─── */

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => navObserver.observe(section));
