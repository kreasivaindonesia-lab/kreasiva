import kreasivaLogo from '../assets/kreasiva-logo.jpg';

/** Initial Coming Soon card with a prominent button to skip into the main landing page. */
export default function ComingSoonCard({ onSkip, transitionClass = '' }) {
  return (
    <section
      className={`coming-card ${transitionClass}`}
      aria-labelledby="coming-headline"
    >
      <div className="coming-dots" aria-hidden="true">
        <span className="dot dot-blue" />
        <span className="dot dot-sky" />
        <span className="dot dot-orange" />
        <span className="dot dot-gold" />
        <span className="dot dot-green" />
      </div>

      <div className="coming-logo-frame stagger-item" style={{ '--stagger': '0ms' }}>
        <img
          src={kreasivaLogo}
          alt="KREASIVA Learning Institute — Create. Explore. Innovate."
          className="brand-logo"
        />
      </div>

      <div className="coming-headline-wrap stagger-item" style={{ '--stagger': '45ms' }}>
        <h1 id="coming-headline" className="coming-headline">
          <em>Something Creative Is Coming!</em>
        </h1>
        <svg
          className="coming-swoosh"
          viewBox="0 0 260 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 11 Q 130 2 254 10"
            stroke="url(#comingSwooshGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="comingSwooshGrad"
              x1="6"
              y1="11"
              x2="254"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="55%" stopColor="#FFB800" />
              <stop offset="100%" stopColor="#7AC943" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <p className="coming-desc stagger-item" style={{ '--stagger': '90ms' }}>
        Kami sedang mempersiapkan sesuatu yang menarik untuk perjalanan belajar
        yang lebih kreatif, interaktif, dan menyenangkan.
      </p>

      <div className="coming-callout stagger-item" style={{ '--stagger': '130ms' }}>
        <i className="ri-sparkling-fill" aria-hidden="true" />
        <strong>We Are Preparing Something Better!</strong>
      </div>

      <p className="coming-stay-tuned stagger-item" style={{ '--stagger': '165ms' }}>
        Stay Tuned. Something Exciting Is on Its Way!
      </p>

      <div className="coming-skip-wrap stagger-item" style={{ '--stagger': '200ms' }}>
        <button type="button" className="skip-coming-btn" onClick={onSkip}>
          <i className="ri-rocket-2-line" aria-hidden="true" />
          <span>Abaikan &amp; Masuk ke Website</span>
          <i className="ri-arrow-right-circle-fill" aria-hidden="true" />
        </button>
      </div>

      <div className="coming-social stagger-item" style={{ '--stagger': '235ms' }}>
        <p className="coming-follow-label">Follow our journey:</p>
        <a
          href="https://www.instagram.com/kreasivaindonesia/"
          target="_blank"
          rel="noopener noreferrer"
          className="coming-ig-pill"
        >
          <i className="ri-instagram-line" aria-hidden="true" />
          <span>Instagram: @kreasivaindonesia</span>
        </a>
      </div>
    </section>
  );
}
