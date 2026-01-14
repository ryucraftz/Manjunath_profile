import React, { useEffect, useRef, useState } from "react";

// ✅ import your 5 images exactly like your folder structure
import img1 from "../assets/Newspaper-Img/1.jpeg";
import img2 from "../assets/Newspaper-Img/2.jpeg";
import img3 from "../assets/Newspaper-Img/3.jpeg";
import img4 from "../assets/Newspaper-Img/4.jpeg";
import img5 from "../assets/Newspaper-Img/5.jpeg";

function NewspaperMarquee({
  title = "Featured In",
  speed = 22,       // desktop duration (seconds)
  mobileSpeed = 12, // mobile duration (seconds)
  reverse = false,
}) {
  const images = [
    { src: img1, alt: "Newspaper 1" },
    { src: img2, alt: "Newspaper 2" },
    { src: img3, alt: "Newspaper 3" },
    { src: img4, alt: "Newspaper 4" },
    { src: img5, alt: "Newspaper 5" },
  ];

  const groupRef = useRef(null);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    if (!groupRef.current) return;
    const el = groupRef.current;

    const update = () => setShift(el.scrollWidth);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-[12px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-orange-600">
            {title}
          </p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">
            HealthyNation in the news<span className="text-orange-500">.</span>
          </h3>
        </div>

        {/* Marquee */}
        {/* ✅ CHANGE #1: Desktop only - make the marquee box narrower */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm md:max-w-4xl md:mx-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-16 bg-gradient-to-l from-white to-transparent" />

          <div
            className="marquee py-5"
            style={{
              ["--duration"]: `${speed}s`,
              ["--mobileDuration"]: `${mobileSpeed}s`,
              ["--direction"]: reverse ? "reverse" : "normal",
              ["--shift"]: `${shift}px`,
            }}
          >
            <div className="marquee__track">
              {/* Set 1 */}
              <div ref={groupRef} className="marquee__group">
                {images.map((img, idx) => (
                  <div key={`s1-${idx}`} className="marquee__item">
                    <div className="marquee__card">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="marquee__img"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Set 2 */}
              <div className="marquee__group" aria-hidden="true">
                {images.map((img, idx) => (
                  <div key={`s2-${idx}`} className="marquee__item">
                    <div className="marquee__card">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="marquee__img"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500" />
        </div>
      </div>

      <style>{`
        .marquee { overflow: hidden; }

        .marquee__track{
          display:flex;
          width:max-content;
          animation: marquee var(--duration, 22s) linear infinite;
          animation-direction: var(--direction, normal);
          will-change: transform;
        }

        @media (max-width: 640px){
          .marquee__track{ animation-duration: var(--mobileDuration, 12s); }
        }

        .marquee__group{
          display:flex;
          align-items:center;
          gap: 12px;
          padding-inline: 12px;
          flex-wrap: nowrap;
        }

        /* Desktop stays same as your working version */
        .marquee__item{
          flex: 0 0 auto;
          height: 120px;
          aspect-ratio: 3 / 4;
        }

        /* ✅ CHANGE #2: Mobile bigger (height + width increases automatically via aspect-ratio) */
        @media (max-width: 640px){
          .marquee__item{
            height: 210px;          /* was 170px */
            aspect-ratio: 3 / 4;
          }
        }

        .marquee__card{
          height: 100%;
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(255, 165, 0, 0.18);
          background: #fff;
          padding: 6px;
          box-sizing: border-box;
        }

        .marquee__img{
          height: 100%;
          width: 100%;
          object-fit: contain;
          opacity: 0.96;
          transition: opacity 160ms ease;
          display:block;
        }
        .marquee__card:hover .marquee__img{ opacity: 1; }

        .marquee:hover .marquee__track { animation-play-state: paused; }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--shift))); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee__track { animation: none; transform: none; }
        }
      `}</style>
    </section>
  );
}

export default NewspaperMarquee;
export { NewspaperMarquee };
