import React from "react";

// ✅ add your team photos here
import souravImg from "../assets/team/Sourav.jpg";
import prashantImg from "../assets/team/Prashant.jpeg";

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs sm:text-sm font-semibold text-orange-700">
      {children}
    </span>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none">
        {value}
      </div>
      <div className="mt-1 text-[11px] sm:text-xs font-semibold text-gray-600 uppercase tracking-[0.12em]">
        {label}
      </div>
    </div>
  );
}

function TeamCard({ m }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Photo */}
        <div className="md:col-span-2 bg-gray-50">
          <div className="aspect-[4/5] md:aspect-auto md:h-full w-full overflow-hidden">
            <img
              src={m.photo}
              alt={m.name}
              className={`h-full w-full object-cover ${m.imgPos || ""}`}
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <Chip>{m.roleTitle}</Chip>
            {m.brand && <Chip>{m.brand}</Chip>}
          </div>

          <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
            {m.name}
          </h3>

          <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
            {m.bio}
          </p>

          {/* Stats */}
          {m.stats?.length ? (
            // ✅ FIX: 1 column on mobile, 2 columns on sm+
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {m.stats.map((s) => (
                <StatPill key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          ) : null}

          {/* Experience */}
          {m.experience?.length ? (
            <div className="mt-6 rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white p-5">
              <p className="font-semibold text-gray-900">
                Expertise &amp; Experience
              </p>

              <ul className="mt-3 space-y-2 text-sm sm:text-[15px] text-gray-700">
                {m.experience.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span className="leading-relaxed">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function HealthyNationTeam() {
  const team = [
    {
      name: "Manjunath",
      roleTitle: "Founder & CEO",
      brand: "HealthyNation",
      photo: souravImg,
      bio:
        "From struggle to success — I wasn’t born with a fit body — I BUILT it. After 7 years of trial, error, and learning, I finally cracked the code to sustainable fitness that works in real life.",
      stats: [
        { label: "Years of learning", value: "7+ yrs" },
        { label: "HealthyNation impact", value: "3+ yrs" },
      ],
      experience: [
        "Senior Fitness Coach at Fitelo",
        "Coach at Anytime Fitness & FITRR",
        "Nutritionist at Apollo Clinic",
        "Fitness & Health Consultant at HealthifyMe",
        "Founder of Healthynationonline — transforming lives for 3+ years",
      ],
    },
    {
      name: "Prashant Sharma",
      roleTitle: "Co-Founder",
      brand: "HealthyNation",
      photo: prashantImg,
      bio:
        "My physique isn’t inherited; it’s a product of 8 years dedication. I learned and applied fitness independently, enhancing my mental well-being too. Consistency and hard work showcase fitness’s holistic benefits on both body and mind.",
      stats: [
        { label: "Years dedicated", value: "8 yrs" },
        { label: "People transformed", value: "1100+" },
      ],
      experience: [
        "Self-taught fitness journey with real-world application",
        "Focused on consistency, discipline, and mental well-being",
        "Helped transform 1100+ people through sustainable habits",
      ],
      imgPos: "md:object-center",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* ✅ ONE FULL GRADIENT BOX (Heading + Cards) */}
        <div className="rounded-[40px] bg-gradient-to-br from-white via-orange-50 to-orange-100 p-6 sm:p-10 shadow-xl border border-orange-100">
          {/* Heading INSIDE box */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-orange-600">
              Our Team
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Meet the People Behind{" "}
              <span className="text-orange-500">HealthyNation</span>
            </h2>

            <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              Real coaches. Real experience. A system built from years of learning
              — designed for real life.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6">
            {team.map((m) => (
              <TeamCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
