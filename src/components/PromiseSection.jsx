import React, { useMemo, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

const PROMISE = {
  heading: "OUR PROMISE",
  l1: "We coach you until you hit your goal.",
  l2: "No extra charge.",
  l3: "No time limit.",
  l4: "Most programs stop when time ends.",
  l5: "We stop when results happen.",
  note: "*As long as you stay consistent with check-ins and follow the plan.",
};

function seededRand(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function CardTopRain({ active }) {
  const pieces = useMemo(() => {
    const rnd = seededRand(202501);
    const count = 52;

    return Array.from({ length: count }, (_, i) => {
      const left = rnd() * 100;
      const delay = rnd() * 1.4;
      const duration = 2.4 + rnd() * 2.6;
      const size = 6 + rnd() * 14;
      const drift1 = (rnd() - 0.5) * 140;
      const drift2 = (rnd() - 0.5) * 160;
      const rot1 = rnd() * 360;
      const rot2 = rot1 + 360 + rnd() * 360;
      const blur = rnd() * 1.2;
      const op = 0.18 + rnd() * 0.28;
      const type = ["dot", "ring", "spark", "pill"][i % 4];
      return {
        id: i,
        left,
        delay,
        duration,
        size,
        drift1,
        drift2,
        rot1,
        rot2,
        blur,
        op,
        type,
      };
    });
  }, []);

  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden rounded-[34px]">
      {pieces.map((p) => (
        <span
          key={p.id}
          className={[
            "absolute -top-16 hn-fall2",
            p.type === "dot" ? "rounded-full bg-orange-500/45" : "",
            p.type === "ring" ? "rounded-full border border-orange-500/40" : "",
            p.type === "spark" ? "hn-spark2" : "",
            p.type === "pill" ? "hn-pill2" : "",
          ].join(" ")}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height:
              p.type === "pill" ? `${Math.max(10, p.size * 1.6)}px` : `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            filter: `blur(${p.blur}px)`,
            opacity: p.op,
            ["--dx1"]: `${p.drift1}px`,
            ["--dx2"]: `${p.drift2}px`,
            ["--r1"]: `${p.rot1}deg`,
            ["--r2"]: `${p.rot2}deg`,
          }}
        />
      ))}
    </div>
  );
}

export default function PromiseRollReveal3D_CardTopFX() {
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();
  const [open, setOpen] = useState(false);
  const [rolling, setRolling] = useState(false);

  const isBackDataVisible = open;

  const rollTo = async (targetOpen) => {
    if (rolling) return;

    const spins = Math.random() < 0.5 ? 2 : 3;

    if (reduceMotion) {
      setOpen(targetOpen);
      controls.set({ rotateY: targetOpen ? 180 : 0, rotateX: 0 });
      return;
    }

    setRolling(true);
    if (!targetOpen) setOpen(false);

    const start = targetOpen ? 0 : 180;
    const end = targetOpen ? 180 : 0;
    const total = 360 * spins + end;

    await controls.start({
      rotateY: [start, total],
      rotateX: [0, 7, -7, 0],
      transition: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
    });

    controls.set({ rotateY: end, rotateX: 0 });
    setOpen(targetOpen);
    setRolling(false);
  };

  const onTap = () => {
    if (rolling) return;
    rollTo(!open);
  };

  const shouldBounce = !reduceMotion && !open && !rolling;

  return (
    <section className="relative overflow-hidden bg-white">
      <style>{`
        .hn-stage { perspective: 1200px; }
        .hn-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; will-change: transform; }
        .hn-face {
          position: absolute; inset: 0;
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
          transform-style: preserve-3d; -webkit-transform-style: preserve-3d;
        }
        .hn-front { transform: rotateY(0deg) translateZ(1px); }
        .hn-back  { transform: rotateY(180deg) translateZ(1px); }

        .hn-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(17,24,39,0.10) 1px, transparent 1px);
          background-size: 18px 18px;
          opacity: 0.18;
        }
        .hn-edge {
          background: linear-gradient(135deg,
            rgba(249,115,22,0.42),
            rgba(251,191,36,0.12),
            rgba(255,255,255,0.70));
        }
        .hn-shine {
          background: radial-gradient(520px circle at 30% 25%,
            rgba(255,255,255,0.85),
            rgba(255,255,255,0.18) 40%,
            rgba(255,255,255,0) 62%);
          mix-blend-mode: soft-light;
          opacity: 0.9;
        }

        @keyframes hnFall2 {
          0%   { transform: translate3d(var(--dx1), -80px, 0) rotate(var(--r1)); opacity: 0; }
          10%  { opacity: 1; }
          100% { transform: translate3d(var(--dx2), 120vh, 0) rotate(var(--r2)); opacity: 0; }
        }
        .hn-fall2 { animation-name: hnFall2; animation-timing-function: linear; animation-iteration-count: infinite; }

        .hn-spark2{
          background: linear-gradient(180deg, rgba(249,115,22,0.65), rgba(251,191,36,0.42));
          clip-path: polygon(50% 0%, 62% 35%, 100% 50%, 62% 65%, 50% 100%, 38% 65%, 0% 50%, 38% 35%);
        }
        .hn-pill2{
          background: linear-gradient(180deg, rgba(249,115,22,0.42), rgba(251,191,36,0.22));
          border-radius: 9999px;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-orange-200/55 blur-3xl" />
        <div className="absolute -bottom-44 right-40 h-130 w-130 rounded-full bg-amber-100/90 blur-3xl" />
        <div className="absolute inset-0 hn-grid" />
      </div>

      <div className="relative mx-auto max-w-xl px-4 py-12 sm:max-w-2xl sm:px-6 sm:py-16">
        <div className="hn-stage">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-[34px] bg-orange-100/60 blur-[0.5px]" />
            <div className="pointer-events-none absolute inset-0 -z-20 translate-x-4 translate-y-4 rounded-[34px] bg-amber-100/60 blur-[1px]" />

            <CardTopRain active={isBackDataVisible} />

            <motion.button
              type="button"
              onClick={onTap}
              animate={
                shouldBounce
                  ? {
                    y: [0, -32, 0, -40, 0],
                    scale: [1, 1.08, 0.98, 1.05, 1],
                    rotateZ: [0, -2.5, 2.5, -1.5, 0],
                  }
                  : { y: 0, scale: 1, rotateZ: 0 }
              }
              transition={
                shouldBounce
                  ? {
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                    repeat: Infinity,
                    repeatDelay: 0.9,
                  }
                  : { duration: 0.1 }
              }

              className={[
                "relative w-full overflow-hidden rounded-[34px] border border-gray-200",
                "bg-white/85 backdrop-blur shadow-[0_30px_110px_-85px_rgba(0,0,0,0.55)]",
                "active:scale-[0.99] select-none",
                "transition-all duration-300 transition-[min-height]",
                rolling ? "cursor-wait" : "cursor-pointer",
                open ? "min-h-105 sm:min-h-100" : "min-h-60 sm:min-h-67.5",
              ].join(" ")}
              style={{ touchAction: "manipulation" }}
              aria-expanded={open}
            >
              <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-500/80 to-transparent" />

              <div className="pointer-events-none absolute inset-0">
                <div className="hn-edge absolute inset-0 opacity-55" />
                <div className="absolute inset-px rounded-[33px] bg-white/70" />
                <div className="hn-shine absolute inset-0" />
              </div>

              <motion.div
                animate={controls}
                initial={{ rotateY: 0, rotateX: 0 }}
                className={[
                  "hn-3d relative",
                  open ? "min-h-115 sm:min-h-105" : "min-h-65 sm:min-h-72.5",
                ].join(" ")}
              >
                {/* ✅ FRONT */}
                <div className="hn-face hn-front grid place-items-center p-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xl font-semibold text-orange-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                      {PROMISE.heading}
                    </div>

                    {/* ✅ ADDED: Click me! */}
                    <div className="mt-3 text-xl font-semibold text-gray-700">
                      Tap to Reveal !
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="hn-face hn-back p-6 sm:p-8">
                  {!isBackDataVisible ? (
                    <div className="grid h-full place-items-center">
                      <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                        {PROMISE.heading}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                        {PROMISE.heading}
                      </div>

                      <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                        {PROMISE.l1}
                      </h2>

                      <div className="mt-4 grid gap-2">
                        <div className="rounded-2xl bg-orange-50 px-4 py-3 text-base font-semibold text-orange-700 ring-1 ring-orange-200">
                          {PROMISE.l2}
                        </div>
                        <div className="rounded-2xl bg-orange-50 px-4 py-3 text-base font-semibold text-orange-700 ring-1 ring-orange-200">
                          {PROMISE.l3}
                        </div>
                      </div>

                      <div className="mt-5 space-y-2 text-sm leading-relaxed text-gray-800 sm:text-base">
                        <p>{PROMISE.l4}</p>
                        <p className="font-semibold text-gray-900">{PROMISE.l5}</p>
                      </div>

                      <p className="mt-5 text-xs leading-relaxed text-gray-600">
                        {PROMISE.note}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-200/55 blur-3xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
