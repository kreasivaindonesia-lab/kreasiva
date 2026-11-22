import { useEffect, useRef, useState } from 'react';
import { HERO_CTA_SLIDES } from '../data/websiteData';

/**
 * Interactive horizontal right/left CTA Banner Carousel for the Home Hero.
 * Supports button navigation (< / >), pagination dots, touch/mouse swipe, and auto-advance.
 */
export default function CtaBannerCarousel({ onSelectAction }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragStartXRef = useRef(null);

  const total = HERO_CTA_SLIDES.length;

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePointerDown = (event) => {
    dragStartXRef.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (dragStartXRef.current === null) return;
    const delta = event.clientX - dragStartXRef.current;
    dragStartXRef.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  return (
    <section
      className="cta-carousel-section stagger-item"
      style={{ '--stagger': '160ms' }}
      aria-label="Banner ajakan eksplorasi KREASIVA"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-header-row">
        <div className="carousel-label-wrap">
          <span className="carousel-eyebrow">
            <i className="ri-sparkling-fill" aria-hidden="true" />
            <span>Jelajahi KREASIVA</span>
          </span>
          <span className="carousel-counter">
            {activeIndex + 1} / {total}
          </span>
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            className="icon-circle-btn carousel-arrow-btn"
            onClick={goPrev}
            aria-label="Geser banner ke kiri"
            title="Geser kiri"
          >
            <i className="ri-arrow-left-s-line" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="icon-circle-btn carousel-arrow-btn"
            onClick={goNext}
            aria-label="Geser banner ke kanan"
            title="Geser kanan"
          >
            <i className="ri-arrow-right-s-line" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="carousel-viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {HERO_CTA_SLIDES.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <article className={`cta-banner-card cta-tone-${slide.tone}`}>
                <div className="cta-banner-left">
                  <span className={`cta-banner-icon cta-icon-${slide.tone}`} aria-hidden="true">
                    <i className={slide.iconClass} />
                  </span>

                  <div className="cta-banner-copy">
                    <span className="cta-banner-eyebrow">{slide.eyebrow}</span>
                    <h2 className="cta-banner-title">{slide.title}</h2>
                    <p className="cta-banner-desc">{slide.description}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`cta-banner-btn cta-btn-${slide.tone}`}
                  onClick={() => onSelectAction(slide.targetPage)}
                >
                  <i className={slide.iconClass} aria-hidden="true" />
                  <span>{slide.ctaLabel}</span>
                  <i className="ri-arrow-right-s-line" aria-hidden="true" />
                </button>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-footer-row">
        <div className="carousel-dots" role="tablist" aria-label="Pilih slide CTA">
          {HERO_CTA_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`carousel-tab-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <i className={slide.iconClass} aria-hidden="true" />
                <span>{slide.ctaLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
