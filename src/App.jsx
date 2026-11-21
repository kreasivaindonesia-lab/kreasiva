import { useEffect, useRef, useState } from 'react';
import kreasivaLogo from './assets/kreasiva-logo.jpg';
import ComingSoonCard from './components/ComingSoonCard';
import PlayfulBackdrop from './components/PlayfulBackdrop';
import GuruDashboard from './components/GuruDashboard';
import ParentDashboard from './components/ParentDashboard';
import StudentDashboard from './components/StudentDashboard';
import TransitionSparkles from './components/TransitionSparkles';
import { AGE_TIERS, getAgeTierId, ROLES } from './data/dashboardData';
import './App.css';

const EXIT_DURATION_MS = 260;
const SPARKLE_DURATION_MS = 780;

export default function App() {
  const [showComingSoon, setShowComingSoon] = useState(true);
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [transitionPhase, setTransitionPhase] = useState('entering');
  const [direction, setDirection] = useState('forward');
  const [burstKey, setBurstKey] = useState(0);

  const [studentAge, setStudentAge] = useState(9);
  const [studentTheme, setStudentTheme] = useState(AGE_TIERS.sd.themes[0]);

  const exitTimerRef = useRef(null);
  const sparkleTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
      if (sparkleTimerRef.current) window.clearTimeout(sparkleTimerRef.current);
    };
  }, []);

  const runTransition = (nextDirection, applyNextState) => {
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, EXIT_DURATION_MS);

    sparkleTimerRef.current = window.setTimeout(() => {
      setBurstKey(0);
    }, SPARKLE_DURATION_MS);
  };

  const handleSkipComingSoon = () => {
    if (!showComingSoon) return;
    runTransition('forward', () => {
      setShowComingSoon(false);
    });
  };

  const navigateToRole = (nextRoleId) => {
    if (nextRoleId === selectedRoleId) return;
    runTransition(nextRoleId ? 'forward' : 'backward', () => {
      setSelectedRoleId(nextRoleId);
    });
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

  const pageShellStyle = showComingSoon
    ? { backgroundColor: '#F2F9FF' }
    : selectedRoleId === 'murid'
      ? { backgroundColor: studentTheme.pageBg }
      : selectedRoleId === 'guru' || selectedRoleId === 'orang-tua'
        ? { backgroundColor: '#F8FAFC' }
        : undefined;

  return (
    <div className="page-shell" style={pageShellStyle}>
      <PlayfulBackdrop mode={backdropMode} ageTier={studentAgeTier} />
      <TransitionSparkles burstKey={burstKey} />

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

      <main className="main-stage">
        {showComingSoon ? (
          <ComingSoonCard
            key="coming-soon"
            transitionClass={transitionClass}
            onSkip={handleSkipComingSoon}
          />
        ) : selectedRoleId === 'guru' ? (
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
        ) : (
          <section
            key="landing"
            className={`hero-section ${transitionClass}`}
            aria-labelledby="landing-headline"
          >
            <div className="logo-frame stagger-item" style={{ '--stagger': '0ms' }}>
              <img
                src={kreasivaLogo}
                alt="KREASIVA Learning Institute — Create. Explore. Innovate."
                className="brand-logo"
              />
            </div>

            <h1
              id="landing-headline"
              className="hero-headline stagger-item"
              style={{ '--stagger': '45ms' }}
            >
              Belajar Seru Bersama{' '}
              <span className="headline-accent">KREASIVA</span>
            </h1>

            <p className="hero-desc stagger-item" style={{ '--stagger': '90ms' }}>
              Bimbingan belajar yang dirancang agar anak lebih percaya diri,
              eksploratif, dan senang bertumbuh setiap hari.
            </p>

            <div className="role-section stagger-item" style={{ '--stagger': '135ms' }}>
              <p className="role-prompt">Pilih peran Anda untuk memulai:</p>

              <div className="role-grid">
                {ROLES.map((role, index) => (
                  <button
                    key={role.id}
                    type="button"
                    className={`role-btn role-btn-${role.accent} role-pop-in`}
                    style={{ '--card-delay': `${170 + index * 55}ms` }}
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
            </div>
          </section>
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
