import React, { useEffect, useMemo, useRef, useState } from "react";

// ✅ your folder: ../assets/whatsapp/w1.jpeg ...
import w1 from "../assets/whatsapp/w1.jpeg";
import w2 from "../assets/whatsapp/w2.jpeg";
import w3 from "../assets/whatsapp/w3.jpeg";
import w4 from "../assets/whatsapp/w4.jpeg";
import w5 from "../assets/whatsapp/w5.jpeg";
import w6 from "../assets/whatsapp/w6.jpeg";
import w7 from "../assets/whatsapp/w7.jpeg";
import w8 from "../assets/whatsapp/w8.jpeg";
import w9 from "../assets/whatsapp/w9.jpeg";
import w10 from "../assets/whatsapp/w10.jpeg";
import w11 from "../assets/whatsapp/w11.jpeg";

function WhatsAppProofCarousel({
  eyebrow = "WHATSAPP PROOF",
  title = "Real client messages (screenshots)",
}) {
  const images = useMemo(
    () => [
      { src: w1, alt: "WhatsApp screenshot 1" },
      { src: w2, alt: "WhatsApp screenshot 2" },
      { src: w3, alt: "WhatsApp screenshot 3" },
      { src: w4, alt: "WhatsApp screenshot 4" },
      { src: w5, alt: "WhatsApp screenshot 5" },
      { src: w6, alt: "WhatsApp screenshot 6" },
      { src: w7, alt: "WhatsApp screenshot 7" },
      { src: w8, alt: "WhatsApp screenshot 8" },
      { src: w9, alt: "WhatsApp screenshot 9" },
      { src: w10, alt: "WhatsApp screenshot 10" },
      { src: w11, alt: "WhatsApp screenshot 11" },
    ],
    []
  );

  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);
  const rafRef = useRef(null);

  const [active, setActive] = useState(0);

  const scrollToIndex = (i) => {
    const idx = (i + images.length) % images.length;
    const el = itemRefs.current[idx];
    if (el?.scrollIntoView) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
    setActive(idx);
  };

  const prev = () => scrollToIndex(active - 1);
  const next = () => scrollToIndex(active + 1);

  // Detect active (center) card on scroll
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const computeActive = () => {
      const center = scroller.scrollLeft + scroller.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const itemCenter = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(center - itemCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });

      setActive(bestIdx);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        computeActive();
      });
    };

    computeActive();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:py-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.30em] uppercase text-orange-600">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Frame */}
        <div className="mt-10 rounded-3xl border border-orange-100 bg-white shadow-sm overflow-hidden">
          {/* top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500" />

          {/* Controls (desktop) */}
          <div className="hidden sm:flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="text-sm font-semibold text-gray-900">
              {active + 1} / {images.length}
              <span className="ml-2 text-gray-500 font-medium">
                • WhatsApp screenshots
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="rounded-full border border-orange-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-orange-50"
              >
                ← Prev
              </button>
              <button
                onClick={next}
                className="rounded-full border border-orange-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-orange-50"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* ✅ REMOVED edge fades that were causing white effect */}

            <div
              ref={scrollerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 py-6 snap-x snap-mandatory scroll-smooth no-scrollbar"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {images.map((img, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={img.alt}
                    ref={(el) => (itemRefs.current[i] = el)}
                    className="snap-center shrink-0"
                    aria-label={img.alt}
                  >
                    <div
                      className={[
                        "transition-all duration-300",
                        isActive ? "scale-100" : "scale-[0.92] opacity-80",
                      ].join(" ")}
                    >
                      <PhoneShot active={isActive}>
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          draggable="false"
                        />
                      </PhoneShot>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile mini controls */}
            <div className="sm:hidden px-4 pb-5">
              <div className="flex items-center justify-between">
                <button
                  onClick={prev}
                  className="rounded-full border border-orange-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900"
                >
                  ←
                </button>
                <div className="text-xs font-semibold text-gray-700">
                  {active + 1} / {images.length}
                </div>
                <button
                  onClick={next}
                  className="rounded-full border border-orange-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900"
                >
                  →
                </button>
              </div>

              {/* dots */}
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      i === active ? "bg-orange-500" : "bg-orange-200",
                    ].join(" ")}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnails (desktop) */}
          <div className="hidden sm:block border-t border-orange-100 bg-white">
            <div className="flex gap-3 overflow-x-auto px-6 py-4 no-scrollbar">
              {images.map((img, i) => (
                <button
                  key={`thumb-${img.alt}`}
                  onClick={() => scrollToIndex(i)}
                  className={[
                    "shrink-0 overflow-hidden rounded-2xl border bg-white transition",
                    i === active
                      ? "border-orange-600 ring-2 ring-orange-200"
                      : "border-orange-100 hover:border-orange-300",
                  ].join(" ")}
                  style={{ width: 88 }}
                  aria-label={`Select ${img.alt}`}
                >
                  <div className="aspect-[9/16] w-full">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

function PhoneShot({ children, active = false }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px] border bg-white shadow-sm",
        active ? "border-orange-300 ring-2 ring-orange-200" : "border-orange-100",
      ].join(" ")}
      style={{
        width: "min(78vw, 360px)",
      }}
    >
      <div className="absolute left-1/2 top-2 -translate-x-1/2 h-5 w-28 rounded-full bg-gray-900/10" />
      <div className="aspect-[9/16] w-full">{children}</div>
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500" />
    </div>
  );
}

export default WhatsAppProofCarousel;
export { WhatsAppProofCarousel };
