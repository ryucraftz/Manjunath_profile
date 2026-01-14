import React, { useMemo, useState } from "react";

const Star = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M12 2l1.6 5.8L19 10l-5.4 2.1L12 18l-1.6-5.9L5 10l5.4-2.2L12 2z"
      fill="currentColor"
    />
  </svg>
);

const Mark = ({ ok, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    {ok ? (
      <path
        d="M20 7L10 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    )}
  </svg>
);

const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className={[
      "h-5 w-5 transition-transform duration-300",
      open ? "rotate-180 text-orange-600" : "rotate-0 text-neutral-500",
    ].join(" ")}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function FoldedSheet({ current, activeKey }) {
  return (
    <div className="relative mt-4">
      <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-br from-orange-300/35 via-white/10 to-transparent blur-xl" />

      <div className="relative">
        <div
          className="relative bg-white/65 backdrop-blur border border-white/70 shadow-[0_55px_140px_-110px_rgba(0,0,0,0.75)]"
          style={{
            borderRadius: "30px",
            clipPath:
              "polygon(0% 6%, 88% 0%, 100% 12%, 100% 100%, 12% 100%, 0% 88%)",
          }}
        >
          {/* fold corner */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-24 w-28"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)" }}
          >
            <div className="h-full w-full bg-orange-100/70 border-l border-b border-orange-200/60" />
          </div>

          {/* sheet content */}
          <div
            key={activeKey}
            className="p-7 sm:p-9"
            style={{ animation: "hnIn 220ms ease-out" }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              {current.heading}
            </h3>

            <div className="mt-6 space-y-4">
              {current.free.map((t, idx) => (
                <div key={`f-${idx}`} className="flex gap-3">
                  <span className="mt-0.5 text-neutral-400">
                    <Mark ok={false} />
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-500 line-through decoration-neutral-400/60">
                    {t}
                  </p>
                </div>
              ))}

              {current.hn.map((t, idx) => (
                <div key={`h-${idx}`} className="flex gap-3">
                  <span className="mt-0.5 text-orange-600">
                    <Mark ok />
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-800">
                    {t}
                  </p>
                </div>
              ))}

              {current.bullets?.length ? (
                <div className="mt-2 pt-2">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {current.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                        <span className="text-sm sm:text-base font-semibold text-neutral-900">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300/70 to-transparent" />
          </div>
        </div>

        {/* anchor triangle */}
        <div className="pointer-events-none absolute -bottom-3 left-10 text-neutral-900/60">
          <svg viewBox="0 0 24 24" className="w-10 h-10" aria-hidden="true">
            <path d="M12 20L2 4h20L12 20z" fill="currentColor" opacity="0.9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseHealthyNation_Unique() {
  const SECTIONS = useMemo(
    () => [
      {
        heading: "Custom-Built For You",
        free: ["Free plans assume everyone is the same."],
        hn: ["HealthyNation is built around your body, lifestyle, and health markers."],
      },
      {
        heading: "Real Accountability",
        free: ["Free plans don’t follow up."],
        hn: ["We do — daily.", "Accountability is the difference between trying and transforming."],
      },
      {
        heading: "Structured, Proven System",
        free: [],
        hn: [
          "You don’t figure things out alone.",
          "You follow a step-by-step system that has worked for 7,000+ people.",
        ],
      },
      {
        heading: "Long-Term Commitment",
        free: [],
        hn: ["We’re not here for a quick win.", "We’re here to:"],
        bullets: ["Fix habits", "Improve health", "Make results permanent"],
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(0); // ✅ mobile accordion open index

  const current = SECTIONS[active];

  return (
    <section className="bg-white">
      <style>{`
        @keyframes hnIn { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-[34px] bg-[#FAF3EE] px-6 sm:px-10 py-10 sm:py-14">
          {/* background accents */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.20] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.10)_1px,transparent_0)] [background-size:18px_18px]" />
          </div>

          <h2 className="relative text-center text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.12]">
            Why Choose HealthyNation Over Free Plans &amp; Generic Programs
          </h2>

          {/* ✅ MOBILE: accordion (all 4 visible) */}
          <div className="relative mt-10 lg:hidden">
            <div className="space-y-4">
              {SECTIONS.map((s, i) => {
                const isOpen = open === i;

                return (
                  <div key={s.heading}>
                    <button
                      type="button"
                      onClick={() => {
                        setActive(i);
                        setOpen(i);
                      }}
                      className="w-full text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/55 backdrop-blur px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={[
                              "h-9 w-9 rounded-full border flex items-center justify-center",
                              isOpen
                                ? "border-orange-200 bg-white text-orange-600"
                                : "border-neutral-300/60 bg-white/55 text-neutral-400",
                            ].join(" ")}
                          >
                            <Star className="w-4 h-4" />
                          </div>

                          <div className="flex items-baseline gap-3">
                            <span
                              className={[
                                "text-xl font-extrabold tabular-nums",
                                isOpen ? "text-orange-600" : "text-neutral-400",
                              ].join(" ")}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>

                            <span className="text-base sm:text-lg font-extrabold text-neutral-900">
                              {s.heading}
                            </span>
                          </div>
                        </div>

                        <Chevron open={isOpen} />
                      </div>
                    </button>

                    {isOpen ? <FoldedSheet current={s} activeKey={i} /> : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ✅ DESKTOP: your original layout */}
          <div className="relative mt-10 hidden lg:grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            {/* LEFT: vertical navigator */}
            <div className="relative">
              <div className="pointer-events-none absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-orange-300/70 via-orange-200/35 to-transparent" />

              <div className="space-y-7">
                {SECTIONS.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={s.heading}
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="group w-full text-left"
                      aria-label={s.heading}
                    >
                      <div className="relative pl-12">
                        <div
                          className={[
                            "absolute left-0 top-1.5 h-8 w-8 rounded-full border",
                            "flex items-center justify-center",
                            isActive
                              ? "border-orange-200 bg-white text-orange-600 shadow-[0_22px_70px_-55px_rgba(249,115,22,0.95)]"
                              : "border-neutral-300/60 bg-white/55 text-neutral-400",
                          ].join(" ")}
                        >
                          <Star className="w-4 h-4" />
                        </div>

                        <div className="flex items-baseline gap-3">
                          <span
                            className={[
                              "text-2xl font-extrabold tabular-nums",
                              isActive ? "text-orange-600" : "text-neutral-400",
                            ].join(" ")}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={[
                              "text-lg font-extrabold leading-tight",
                              isActive ? "text-neutral-900" : "text-neutral-800",
                            ].join(" ")}
                          >
                            {s.heading}
                          </span>
                        </div>

                        <div
                          className={[
                            "mt-3 h-px w-full bg-gradient-to-r from-transparent to-transparent",
                            isActive ? "via-orange-300/80" : "via-neutral-300/70",
                          ].join(" ")}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: folded sheet */}
            <div className="relative">
              <FoldedSheet current={current} activeKey={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
