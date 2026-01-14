import React from "react";

const INCLUSIONS = [
  { label: "12 Weeks of 1:1 Coaching", price: "₹25,000/-" },
  { label: "Personalized Diet & Training System", price: "₹15,000/-" },
  { label: "Daily Accountability & Support", price: "₹9,999/-" },
];

export default function PricingTrustCard() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-orange-600">
            PRICE
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Simple, transparent investment.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            No confusion. No surprise charges. Just clear value and real support.
          </p>
        </div>

        {/* Card */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Value breakdown */}
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    What This Normally Costs
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    If sold separately:
                  </p>
                </div>

                <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                  Total value breakdown
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {INCLUSIONS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-900 text-sm">
                        ✓
                      </span>
                      <p className="text-sm sm:text-base font-medium text-gray-900">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-700">Total Value</p>
                  {/* <p className="text-lg font-extrabold text-gray-900">₹49,999/-</p> */}
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  This shows the full value of what you’re getting.
                </p>
              </div>
            </div>

            {/* Trust strip */}
            <div className="border-t border-gray-200 bg-white px-6 sm:px-8 py-4">
              <div className="flex flex-wrap items-center justify-around gap-2 text-xs sm:text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 border border-gray-200 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  Clear pricing
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 border border-gray-200 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  Support included
                </span>
              </div>
            </div>
          </div>

          {/* Right: Today's investment */}
          <div className="rounded-3xl border border-orange-200 bg-linear-to-b from-orange-50 to-white shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Today’s Investment
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    One-time payment for the full 12 weeks.
                  </p>
                </div>

                <span className="inline-flex items-center rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                  Limited-time offer
                </span>
              </div>

              <div className="mt-6 rounded-3xl border border-orange-200 bg-white p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-orange-600">
                      Pay today
                    </p>
                    <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
                      ₹9,999/-
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500">You save</p>
                    <p className="text-lg font-extrabold text-orange-700">
                      ₹40,000/-
                    </p>
                    <p className="text-xs text-gray-500">
                      (vs ₹49,999/- value)
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <TrustItem text="No subscriptions" />
                  <TrustItem text="No hidden charges" />
                  <TrustItem text="No upsells later" />
                </div>

                <button className="mt-6 w-full rounded-2xl bg-gray-900 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:opacity-95 active:scale-[0.99] transition">
                  Start My 12-Week Coaching
                </button>

                <p className="mt-3 text-center text-xs text-gray-500">
                  Secure checkout • Instant onboarding details
                </p>
              </div>

              {/* Reassurance note */}
              <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Built for trust:
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  You get the full plan + ongoing support. No “unlock this later”
                  nonsense.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function TrustItem({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-gray-200 text-orange-600 font-bold">
        ✓
      </span>
      <p className="text-sm sm:text-base font-medium text-gray-900">{text}</p>
    </div>
  );
}
