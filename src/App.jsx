import { useEffect, useRef, useState } from 'react';
import heroKidsPhoto from './assets/hero-kids-laptop.jpg';
import CtaBannerCarousel from './components/CtaBannerCarousel';
import GuruDashboard from './components/GuruDashboard';
import ParentDashboard from './components/ParentDashboard';
import PlayfulBackdrop from './components/PlayfulBackdrop';
import PublicPages from './components/PublicPages';
import SiteHeader from './components/SiteHeader';
import StudentDashboard from './components/StudentDashboard';
import TransitionSparkles from './components/TransitionSparkles';
import { AGE_TIERS, getAgeTierId, ROLES } from './data/dashboardData';
import { PROGRAMS_LIST } from './data/websiteData';
import './App.css';

const EXIT_DURATION_MS = 260;
const SPARKLE_DURATION_MS = 780;

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [transitionPhase, setTransitionPhase] = useState('entering');
  const [direction, setDirection] = useState('forward');
  const [burstKey, setBurstKey] = useState(0);

  const [studentAge, setStudentAge] = useState(9);
  const [studentTheme, setStudentTheme] = useState(AGE_TIERS.sd.themes[0]);

  const exitTimerRef = useRef(null);
  const sparkleTimerRef = useRef(null);
  const portalSectionRef = useRef(null);

  useEffect(() => {
    return () => {
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
      if (sparkleTimerRef.current) window.clearTimeout(sparkleTimerRef.current);
    };
  }, []);

  const runTransition = (nextDirection, applyNextState, shouldScrollTop = true) => {
    if (transitionPhase === 'exiting') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      applyNextState();
      setTransitionPhase('entering');
      return;
    }

    setDirection(nextDirection);
    setTransitionPhase('exiting');
    setBurstKey((prev) => prev + 1);

    if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
    if (sparkleTimerRef.current) window.clearTimeout(sparkleTimerRef.current);

    exitTimerRef.current = window.setTimeout(() => {
      applyNextState();
      setTransitionPhase('entering');
      if (shouldScrollTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, EXIT_DURATION_MS);

    sparkleTimerRef.current = window.setTimeout(() => {
      setBurstKey(0);
    }, SPARKLE_DURATION_MS);
  };

  const navigateToPage = (nextPageId) => {
    if (!selectedRoleId && nextPageId === activePage) return;
    const isGoingHome = nextPageId === 'home';
    runTransition(isGoingHome ? 'backward' : 'forward', () => {
      setSelectedRoleId(null);
      setActivePage(nextPageId);
    });
  };

  const navigateToRole = (nextRoleId) => {
    if (nextRoleId === selectedRoleId) return;
    runTransition(nextRoleId ? 'forward' : 'backward', () => {
      setSelectedRoleId(nextRoleId);
    });
  };

  const handleOpenPortalMenu = () => {
    if (selectedRoleId || activePage !== 'home') {
      runTransition(
        'backward',
        () => {
          setSelectedRoleId(null);
          setActivePage('home');
          window.setTimeout(() => {
            portalSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 120);
        },
        false
      );
      return;
    }

    portalSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const transitionClass =
    transitionPhase === 'exiting'
      ? `page-exit-${direction}`
      : `page-enter-${direction}`;

  const studentAgeTier = getAgeTierId(studentAge);
  const backdropMode =
    selectedRoleId === 'guru' || selectedRoleId === 'orang-tua'
      ? 'pro'
      : selectedRoleId === 'murid'
        ? 'student'
        : 'landing';

  const pageShellStyle =
    selectedRoleId === 'murid'
      ? { backgroundColor: studentTheme.pageBg }
      : selectedRoleId === 'guru' || selectedRoleId === 'orang-tua'
        ? { backgroundColor: '#F8FAFC' }
        : undefined;

  return (
    <div className="page-shell" style={pageShellStyle}>
      <PlayfulBackdrop mode={backdropMode} ageTier={studentAgeTier} />
      <TransitionSparkles burstKey={burstKey} />

      {selectedRoleId ? (
        <header className="site-header">
          <div className="header-inner">
            <div className="header-dots" aria-hidden="true">
              <span className="dot dot-blue" />
              <span className="dot dot-sky" />
              <span className="dot dot-orange" />
              <span className="dot dot-gold" />
              <span className="dot dot-green" />
            </div>
            <span className="les-pill">Tempat Les Kreatif &amp; Interaktif</span>
          </div>
        </header>
      ) : (
        <SiteHeader
          activePage={activePage}
          onNavigatePage={navigateToPage}
          onOpenPortalMenu={handleOpenPortalMenu}
        />
      )}

      <main className="main-stage">
        {selectedRoleId === 'guru' ? (
          <GuruDashboard
            key="guru-dash"
            transitionClass={transitionClass}
            onBack={() => navigateToRole(null)}
          />
        ) : selectedRoleId === 'orang-tua' ? (
          <ParentDashboard
            key="parent-dash"
            transitionClass={transitionClass}
            onBack={() => navigateToRole(null)}
          />
        ) : selectedRoleId === 'murid' ? (
          <StudentDashboard
            key="student-dash"
            transitionClass={transitionClass}
            age={studentAge}
            onAgeChange={setStudentAge}
            onThemeChange={setStudentTheme}
            onBack={() => navigateToRole(null)}
          />
        ) : activePage !== 'home' ? (
          <PublicPages
            key={`page-${activePage}`}
            pageId={activePage}
            transitionClass={transitionClass}
            onBackHome={() => navigateToPage('home')}
            onNavigatePage={navigateToPage}
            onSelectRole={navigateToRole}
          />
        ) : (
          <div key="home" className={`home-shell ${transitionClass}`}>
            {/* Hero Section */}
            <section className="hero-split" aria-labelledby="hero-main-title">
              <div className="hero-copy-col stagger-item" style={{ '--stagger': '0ms' }}>
                <h1 id="hero-main-title" className="hero-headline-main">
                  Create. <span className="headline-accent">Explore.</span> Innovate.
                </h1>

                <p className="hero-subheadline">
                  Belajar teknologi sejak dini, tumbuhkan kreativitas untuk masa depan.
                </p>

                <div className="hero-quick-btns">
                  <button
                    type="button"
                    className="hero-btn-primary"
                    onClick={() => navigateToPage('daftar')}
                  >
                    <i className="ri-user-add-line" aria-hidden="true" />
                    <span>Daftar Sekarang</span>
                  </button>
                  <button
                    type="button"
                    className="hero-btn-secondary"
                    onClick={() => navigateToPage('program')}
                  >
                    <i className="ri-apps-2-line" aria-hidden="true" />
                    <span>Jelajahi Program</span>
                  </button>
                </div>
              </div>

              <div className="hero-visual-col stagger-item" style={{ '--stagger': '70ms' }}>
                <div className="hero-photo-frame">
                  <img
                    src={heroKidsPhoto}
                    alt="Anak-anak sedang belajar kreatif menggunakan laptop bersama di kelas KREASIVA"
                    className="hero-photo"
                  />
                  <div className="hero-photo-badge">
                    <i className="ri-computer-line" aria-hidden="true" />
                    <span>Kelas Interaktif SD &amp; Anak</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Slideable Right/Left 5-CTA Banner */}
            <CtaBannerCarousel onSelectAction={navigateToPage} />

            {/* Compact Featured Programs Preview */}
            <section
              className="home-block stagger-item"
              style={{ '--stagger': '200ms' }}
              aria-labelledby="home-programs-heading"
            >
              <div className="home-block-head">
                <div>
                  <h2 id="home-programs-heading">Program Unggulan KREASIVA</h2>
                  <p>Materi bertahap dari dasar komputer hingga logika coding kreatif.</p>
                </div>
                <button
                  type="button"
                  className="home-link-btn"
                  onClick={() => navigateToPage('program')}
                >
                  <span>Lihat Semua</span>
                  <i className="ri-arrow-right-s-line" aria-hidden="true" />
                </button>
              </div>

              <div className="home-programs-grid">
                {PROGRAMS_LIST.map((program) => (
                  <button
                    key={program.id}
                    type="button"
                    className="home-program-card"
                    onClick={() => navigateToPage('program')}
                  >
                    <span className={`public-icon-badge tone-${program.tone}`} aria-hidden="true">
                      <i className={program.iconClass} />
                    </span>
                    <strong>{program.title}</strong>
                    <small>{program.level}</small>
                  </button>
                ))}
              </div>
            </section>

            {/* Three Role Portals */}
            <section
              ref={portalSectionRef}
              id="portal-section"
              className="role-section stagger-item"
              style={{ '--stagger': '230ms' }}
              aria-labelledby="portal-heading"
            >
              <h2 id="portal-heading" className="role-section-heading">
                Masuk Portal KREASIVA
              </h2>
              <p className="role-prompt">Pilih peran Anda untuk langsung melihat dashboard:</p>

              <div className="role-grid">
                {ROLES.map((role, index) => (
                  <button
                    key={role.id}
                    type="button"
                    className={`role-btn role-btn-${role.accent} role-pop-in`}
                    style={{ '--card-delay': `${180 + index * 50}ms` }}
                    onClick={() => navigateToRole(role.id)}
                  >
                    <span
                      className={`role-icon-box role-icon-${role.accent}`}
                      aria-hidden="true"
                    >
                      <i className={`${role.iconClass} role-cdn-icon`} />
                    </span>
                    <span className="role-text">
                      <span className="role-title">{role.label}</span>
                      <span className="role-caption">{role.caption}</span>
                    </span>
                    <span className="role-arrow" aria-hidden="true">
                      <i className="ri-arrow-right-s-line" />
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <svg
          className="footer-wave"
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,72 L0,36 Q180,0 360,34 Q540,68 720,30 Q900,-4 1080,32 Q1260,64 1440,28 L1440,72 Z"
            fill="#EEF7FF"
          />
        </svg>
        <div className="footer-inner">
          <p className="footer-tagline">KREASIVA — Create. Explore. Innovate.</p>
          <p className="footer-copy">
            © 2026 KREASIVA Learning Institute. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
