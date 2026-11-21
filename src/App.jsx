import kreasivaLogo from './assets/kreasiva-logo.jpg';
import './App.css';

function PlayfulBackdrop() {
  return (
    <div className="playful-backdrop" aria-hidden="true">
      <div className="blob blob-blue" />
      <div className="blob blob-orange" />
      <div className="blob blob-green" />

      {/* Paper airplane & dashed flight path (top-left) */}
      <svg className="doodle doodle-plane" viewBox="0 0 180 120" fill="none">
        <path
          d="M14 96 C 46 84, 62 42, 108 50 C 128 54, 136 38, 142 30"
          stroke="#1CA8FF"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M164 18 L128 32 L144 39 L150 53 L164 18 Z"
          fill="#FFB800"
          stroke="#FF7A00"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M144 39 L164 18" stroke="#FF7A00" strokeWidth="1.8" />
      </svg>

      {/* Playful floating stars & sparks (top-right) */}
      <svg className="doodle doodle-stars" viewBox="0 0 140 140" fill="none">
        <path
          d="M68 24 L73 36 L86 37 L76 46 L79 59 L68 52 L57 59 L60 46 L50 37 L63 36 Z"
          fill="#FFB800"
          stroke="#FF8A00"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="105" cy="40" r="6" fill="#7AC943" opacity="0.85" />
        <circle cx="34" cy="72" r="5" fill="#1CA8FF" opacity="0.8" />
        <path
          d="M98 86 L101 93 L108 94 L103 99 L104 106 L98 102 L92 106 L93 99 L88 94 L95 93 Z"
          fill="#1CA8FF"
          opacity="0.65"
        />
      </svg>

      {/* Crayon / pencil creative accent (bottom-left) */}
      <svg className="doodle doodle-crayon" viewBox="0 0 120 120" fill="none">
        <g transform="rotate(-24 60 60)">
          <rect
            x="28"
            y="42"
            width="58"
            height="22"
            rx="6"
            fill="#FF981A"
            stroke="#004E9E"
            strokeWidth="2.5"
          />
          <path
            d="M86 42 L102 53 L86 64 Z"
            fill="#FFE0A3"
            stroke="#004E9E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M96 49 L102 53 L96 57 Z" fill="#004E9E" />
          <rect x="42" y="42" width="8" height="22" fill="#005CB9" opacity="0.22" />
          <rect x="66" y="42" width="8" height="22" fill="#005CB9" opacity="0.22" />
        </g>
        <circle cx="88" cy="86" r="5" fill="#7AC943" opacity="0.75" />
        <circle cx="24" cy="34" r="4" fill="#FFB800" opacity="0.85" />
      </svg>

      {/* Soft playful blocks / sparkles (bottom-right) */}
      <svg className="doodle doodle-blocks" viewBox="0 0 130 130" fill="none">
        <rect
          x="36"
          y="42"
          width="36"
          height="36"
          rx="10"
          transform="rotate(-12 36 42)"
          fill="#E6F4FF"
          stroke="#1CA8FF"
          strokeWidth="2.5"
        />
        <rect
          x="64"
          y="64"
          width="32"
          height="32"
          rx="9"
          transform="rotate(14 64 64)"
          fill="#EEFCE4"
          stroke="#7AC943"
          strokeWidth="2.5"
        />
        <circle cx="52" cy="30" r="4.5" fill="#FF8A00" opacity="0.85" />
      </svg>

      {/* Soft clouds along bottom edge */}
      <svg className="bottom-clouds" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,120 L0,82 Q75,40 165,78 Q255,34 360,72 Q465,30 570,74 Q685,32 790,74 Q900,36 1015,76 Q1130,32 1245,74 Q1345,42 1440,76 L1440,120 Z"
          fill="#FFFFFF"
          opacity="0.72"
        />
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="ig-icon" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5.5"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <PlayfulBackdrop />

      <main className="main-stage">
        <section className="coming-card" aria-labelledby="coming-headline">
          {/* Playful top color dots matching logo palette */}
          <div className="card-dots" aria-hidden="true">
            <span className="dot dot-blue" />
            <span className="dot dot-sky" />
            <span className="dot dot-orange" />
            <span className="dot dot-gold" />
            <span className="dot dot-green" />
          </div>

          <div className="logo-frame">
            <img
              src={kreasivaLogo}
              alt="KREASIVA Learning Institute — Create. Explore. Innovate."
              className="brand-logo"
            />
          </div>

          <div className="headline-wrap">
            <h1 id="coming-headline" className="hero-headline">
              <em>Something Creative Is Coming!</em>
            </h1>
            <svg
              className="headline-swoosh"
              viewBox="0 0 260 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 11 Q 130 2 254 10"
                stroke="url(#swooshGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="swooshGrad" x1="6" y1="11" x2="254" y2="10" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FF7A00" />
                  <stop offset="55%" stopColor="#FFB800" />
                  <stop offset="100%" stopColor="#7AC943" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="hero-desc">
            Kami sedang mempersiapkan sesuatu yang menarik untuk perjalanan belajar
            yang lebih kreatif, interaktif, dan menyenangkan.
          </p>

          <div className="callout-badge">
            <span className="callout-star" aria-hidden="true">
              ★
            </span>
            <strong>We Are Preparing Something Better!</strong>
            <span className="callout-spark" aria-hidden="true" />
          </div>

          <p className="stay-tuned">
            Stay Tuned. Something Exciting Is on Its Way!
          </p>

          <div className="social-section">
            <p className="follow-label">Follow our journey:</p>
            <a
              href="https://www.instagram.com/kreasivaindonesia/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-pill"
            >
              <InstagramIcon />
              <span>Instagram: @kreasivaindonesia</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-tagline">KREASIVA — Create. Explore. Innovate.</p>
        <p className="footer-copy">
          © 2026 KREASIVA Learning Institute. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
