import { useEffect, useState } from "react";

export default function Certifications({ certs = [] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const close = () => setOpen(false);
  const next = () => setActive((i) => (i + 1) % certs.length);
  const prev = () => setActive((i) => (i - 1 + certs.length) % certs.length);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, certs.length]);

  return (
    <section className="border-t border-gray-100 bg-white px-6 sm:px-10 py-7">
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-base sm:text-lg font-extrabold text-gray-900">
            Coach Background
          </p>
          <p className="text-xs sm:text-sm text-gray-500">Verified credentials</p>
        </div>

        <span className="shrink-0 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
          {certs.length} certificates
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {certs.map((c, i) => (
          <button
            key={`${c.alt}-${i}`}
            type="button"
            onClick={() => {
              setActive(i);
              setOpen(true);
            }}
            className="group text-left rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
          >
            {/* fixed thumbnail canvas */}
            <div className="aspect-4/3 bg-gray-50 flex items-center justify-center p-3">
              <img
                src={c.src}
                alt={c.alt}
                className="max-h-full max-w-full object-contain transition group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* label */}
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                {c.alt}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">Click to preview</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {open && certs[active] && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="w-full max-w-4xl rounded-3xl bg-white overflow-hidden shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100">
              <p className="text-sm sm:text-base font-extrabold text-gray-900 line-clamp-1">
                {certs[active].alt}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  {active + 1}/{certs.length}
                </span>

                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Image preview */}
            <div className="bg-gray-50 p-4 sm:p-6">
              <div className="h-[60vh] sm:h-[70vh] rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-4">
                <img
                  src={certs[active].src}
                  alt={certs[active].alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Controls */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  ← Prev
                </button>

                <p className="text-xs sm:text-sm text-gray-500">
                  Tip: Use ← → keys, Esc to close
                </p>

                <button
                  type="button"
                  onClick={next}
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
