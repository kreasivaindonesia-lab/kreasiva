import { useCallback, useEffect, useRef, useState } from 'react';
import { HERO_CTA_SLIDES } from '../data/websiteData';

const AUTO_ADVANCE_MS = 4000;

/**
 * Seamless edge-to-edge clickable banner carousel placed at the top of Home,
 * aligned with src/assets/KREASIVA_Carousel_Auto_Slide.html (4s auto-slide,
 * swipe/drag, arrow & keyboard controls, internal dot status, and timing bar).
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
  const [isTabHidden, setIsTabHidden] = useState(() =>
    typeof document !== 'undefined' ? document.hidden : false
  );

  const dragStartXRef = useRef(null);
  const wasDraggedRef = useRef(false);
  const barFillRef = useRef(null);
  const elapsedMsRef = useRef(0);

  const activeDotIndex =
    trackIndex === 0
      ? total - 1
      : trackIndex === total + 1
        ? 0
        : trackIndex - 1;

  const resetTimingBar = useCallback(() => {
    elapsedMsRef.current = 0;
    if (barFillRef.current) {
      barFillRef.current.style.transform = 'scaleX(0)';
    }
  }, []);

  const jumpToRealIndex = useCallback(
    (realIndex) => {
      resetTimingBar();
      setAnimateTrack(true);
      setTrackIndex(realIndex + 1);
    },
    [resetTimingBar]
  );

  const goPrev = useCallback(() => {
    resetTimingBar();
    setAnimateTrack(true);
    setTrackIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  }, [resetTimingBar]);

  const goNext = useCallback(() => {
    resetTimingBar();
    setAnimateTrack(true);
    setTrackIndex((prev) => (prev >= total + 1 ? total + 1 : prev + 1));
  }, [resetTimingBar, total]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabHidden(document.hidden);
    };
    const handleKeyDown = (event) => {
      const tag = event.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [goPrev, goNext]);

  useEffect(() => {
    if (isPaused || isTabHidden || dragOffsetPx !== 0) return undefined;

    let frameId = null;
    let lastTimestamp = null;

    const stepTimingBar = (timestamp) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      } else {
        const delta = Math.min(timestamp - lastTimestamp, 100);
        lastTimestamp = timestamp;
        elapsedMsRef.current += delta;

        const progress = Math.min(elapsedMsRef.current / AUTO_ADVANCE_MS, 1);
        if (barFillRef.current) {
          barFillRef.current.style.transform = `scaleX(${progress})`;
        }

        if (elapsedMsRef.current >= AUTO_ADVANCE_MS) {
          elapsedMsRef.current = 0;
          if (barFillRef.current) {
            barFillRef.current.style.transform = 'scaleX(0)';
          }
          setAnimateTrack(true);
          setTrackIndex((prev) => (prev >= total + 1 ? total + 1 : prev + 1));
        }
      }

      frameId = window.requestAnimationFrame(stepTimingBar);
    };

    frameId = window.requestAnimationFrame(stepTimingBar);
    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isPaused, isTabHidden, dragOffsetPx, total]);

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
    if (event.target.closest('.carousel-overlay-arrow, .carousel-dots-inside')) {
      return;
    }
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
      aria-label="Banner promosi KREASIVA"
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
                aria-label={slide.ctaLabel}
                title={slide.ctaLabel}
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
          onClick={(event) => {
            event.stopPropagation();
            goPrev();
          }}
          aria-label="Slide sebelumnya"
          title="Slide sebelumnya"
        >
          <i className="ri-arrow-left-s-line" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="carousel-overlay-arrow arrow-right"
          onClick={(event) => {
            event.stopPropagation();
            goNext();
          }}
          aria-label="Slide berikutnya"
          title="Slide berikutnya"
        >
          <i className="ri-arrow-right-s-line" aria-hidden="true" />
        </button>

        <div className="carousel-dots-inside" role="tablist" aria-label="Status slide banner">
          {HERO_CTA_SLIDES.map((slide, index) => {
            const isActive = index === activeDotIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? 'true' : 'false'}
                aria-label={`Tampilkan slide ${index + 1}: ${slide.ctaLabel}`}
                title={slide.ctaLabel}
                className={`carousel-dot ${isActive ? 'is-active' : ''}`}
                onClick={(event) => {
                  event.stopPropagation();
                  jumpToRealIndex(index);
                }}
              />
            );
          })}
        </div>

        <div className="carousel-timing-bar" aria-hidden="true">
          <span ref={barFillRef} className="carousel-timing-fill" />
        </div>
      </div>
    </section>
  );
}
