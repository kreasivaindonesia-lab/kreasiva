import { useEffect, useRef, useState } from 'react';
import { HERO_CTA_SLIDES } from '../data/websiteData';

/**
 * Seamless edge-to-edge clickable image carousel placed at the top of Home.
 * Slides continuously A -> B -> C -> D -> E -> A with swipe/drag and < > controls.
 */
export default function CtaBannerCarousel({ onSelectAction }) {
  const total = HERO_CTA_SLIDES.length;
  const extendedSlides = [
    { ...HERO_CTA_SLIDES[total - 1], cloneKey: 'clone-last' },
    ...HERO_CTA_SLIDES.map((s) => ({ ...s, cloneKey: s.id })),
    { ...HERO_CTA_SLIDES[0], cloneKey: 'clone-first' },
  ];

  const [trackIndex, setTrackIndex] = useState(1);
  const [animateTrack, setAnimateTrack] = useState(true);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartXRef = useRef(null);
  const wasDraggedRef = useRef(false);

  const activeDotIndex =
    trackIndex === 0
      ? total - 1
      : trackIndex === total + 1
        ? 0
        : trackIndex - 1;

  useEffect(() => {
    if (isPaused || dragOffsetPx !== 0) return undefined;
    const timer = window.setInterval(() => {
      setAnimateTrack(true);
      setTrackIndex((prev) => (prev >= total + 1 ? total + 1 : prev + 1));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused, dragOffsetPx, total]);

  const jumpToRealIndex = (realIndex) => {
    setAnimateTrack(true);
    setTrackIndex(realIndex + 1);
  };

  const goPrev = () => {
    setAnimateTrack(true);
    setTrackIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  const goNext = () => {
    setAnimateTrack(true);
    setTrackIndex((prev) => (prev >= total + 1 ? total + 1 : prev + 1));
  };

  const handleTransitionEnd = () => {
    if (trackIndex === total + 1) {
      setAnimateTrack(false);
      setTrackIndex(1);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setAnimateTrack(true));
      });
    } else if (trackIndex === 0) {
      setAnimateTrack(false);
      setTrackIndex(total);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setAnimateTrack(true));
      });
    }
  };

  const handlePointerDown = (event) => {
    dragStartXRef.current = event.clientX;
    wasDraggedRef.current = false;
    setAnimateTrack(false);
  };

  const handlePointerMove = (event) => {
    if (dragStartXRef.current === null) return;
    const delta = event.clientX - dragStartXRef.current;
    if (Math.abs(delta) > 8) {
      wasDraggedRef.current = true;
    }
    setDragOffsetPx(delta);
  };

  const finishDrag = () => {
    if (dragStartXRef.current === null) return;
    const delta = dragOffsetPx;
    dragStartXRef.current = null;
    setDragOffsetPx(0);
    setAnimateTrack(true);

    if (delta <= -45) {
      goNext();
    } else if (delta >= 45) {
      goPrev();
    }
  };

  const handleSlideClick = (targetPage) => {
    if (wasDraggedRef.current) {
      wasDraggedRef.current = false;
      return;
    }
    onSelectAction(targetPage);
  };

  return (
    <section
      className="cta-carousel-section stagger-item"
      style={{ '--stagger': '0ms' }}
      aria-label="Banner gambar interaktif KREASIVA"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        finishDrag();
      }}
    >
      <div
        className="carousel-viewport"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        <div
          className={`carousel-track ${animateTrack ? 'is-animated' : ''}`}
          style={{
            transform: `translate3d(calc(-${trackIndex * 100}% + ${dragOffsetPx}px), 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide) => (
            <div key={slide.cloneKey} className="carousel-slide">
              <button
                type="button"
                className="cta-image-btn"
                onClick={() => handleSlideClick(slide.targetPage)}
                aria-label={slide.alt}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="cta-banner-img"
                  draggable={false}
                />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel-overlay-arrow arrow-left"
          onClick={goPrev}
          aria-label="Geser banner ke kiri"
          title="Geser kiri"
        >
          <i className="ri-arrow-left-s-line" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="carousel-overlay-arrow arrow-right"
          onClick={goNext}
          aria-label="Geser banner ke kanan"
          title="Geser kanan"
        >
          <i className="ri-arrow-right-s-line" aria-hidden="true" />
        </button>
      </div>

      <div className="carousel-footer-row">
        <div className="carousel-dots" role="tablist" aria-label="Pilih banner">
          {HERO_CTA_SLIDES.map((slide, index) => {
            const isActive = index === activeDotIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`carousel-tab-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => jumpToRealIndex(index)}
              >
                <i className={slide.iconClass} aria-hidden="true" />
                <span>
                  {slide.code} • {slide.ctaLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
