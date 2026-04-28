import { useEffect, useMemo, useState } from "react";

const SLIDE_INTERVAL_MS = 30000;

export default function PhotoSlider({
  caption,
  image,
  imageAlt,
  interval = SLIDE_INTERVAL_MS,
  slides = [],
}) {
  const resolvedSlides = useMemo(() => {
    if (slides.length) {
      return slides;
    }

    return image
      ? [
          {
            alt: imageAlt,
            caption,
            image,
          },
        ]
      : [];
  }, [caption, image, imageAlt, slides]);

  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = resolvedSlides.length > 1;

  useEffect(() => {
    if (activeIndex >= resolvedSlides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, resolvedSlides.length]);

  useEffect(() => {
    if (!hasMultipleSlides) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % resolvedSlides.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [hasMultipleSlides, interval, resolvedSlides.length]);

  if (!resolvedSlides.length) {
    return null;
  }

  const safeActiveIndex = Math.min(activeIndex, resolvedSlides.length - 1);
  const activeSlide = resolvedSlides[safeActiveIndex];

  const showPreviousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? resolvedSlides.length - 1 : currentIndex - 1,
    );
  };

  const showNextSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % resolvedSlides.length);
  };

  return (
    <aside className="photo-card">
      <div className="photo-frame">
        {resolvedSlides.map((slide, index) => (
          <figure
            aria-hidden={index !== safeActiveIndex}
            className={`photo-slide${
              index === safeActiveIndex ? " photo-slide-active" : ""
            }`}
            key={slide.id ?? `${slide.image}-${index}`}
          >
            <img alt={slide.alt ?? ""} src={slide.image} />
          </figure>
        ))}

        {hasMultipleSlides ? (
          <>
            <button
              aria-label="Show previous group photo"
              className="photo-slider-control photo-slider-control-prev"
              onClick={showPreviousSlide}
              type="button"
            >
              &lsaquo;
            </button>
            <button
              aria-label="Show next group photo"
              className="photo-slider-control photo-slider-control-next"
              onClick={showNextSlide}
              type="button"
            >
              &rsaquo;
            </button>
          </>
        ) : null}
      </div>

      <div className="photo-caption-row">
        <p className="photo-caption">{activeSlide.caption}</p>

        {hasMultipleSlides ? (
          <div className="photo-slider-dots" aria-label="Choose group photo">
            {resolvedSlides.map((slide, index) => (
              <button
                aria-label={`Show group photo ${index + 1}`}
                aria-pressed={index === safeActiveIndex}
                className={`photo-slider-dot${
                  index === safeActiveIndex ? " photo-slider-dot-active" : ""
                }`}
                key={slide.id ?? `${slide.image}-dot-${index}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        ) : null}
      </div>
    </aside>
  );
}
