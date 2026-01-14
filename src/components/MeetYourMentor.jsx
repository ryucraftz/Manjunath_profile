import React from "react";
import { motion } from "framer-motion";
import mentorImg from "../assets/coachprofile.jpeg";

// assets imports stay same…

/* ---------- Animation Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function MeetYourMentor() {
  return (
    <section className="relative bg-white py-4 px-6 md:px-16 lg:px-24">
      <div className="mt-3 max-w-6xl mx-auto border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* Image */}
          <motion.div
            variants={imageAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 md:order-2 h-full flex items-stretch bg-white"
          >
            <img
              src={mentorImg}
              alt="Manjunath - Coach"
              className="w-full h-96 sm:h-112 md:h-full object-contain md:rounded-l-none md:rounded-r-3xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 md:order-1 p-8 md:p-14"
          >

            {/* Heading */}
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-orange-600">
                Meet your coach
              </p>

              <h4 className=" text-center mt-3 text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                Helping Men Over 30 Fix Fat Gain{" "}
                <span className="text-orange-600">Not Just Lose Weight</span>
              </h4>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-5 grid grid-cols-5 gap-3 mb-8"
            >
              <div className="col-span-2 rounded-2xl border border-orange-100 bg-orange-50 px-3 py-3 text-center">
                <p className="text-xl font-extrabold">10+ yrs</p>
                <p className="text-xs font-semibold text-orange-600">
                  Experience
                </p>
              </div>

              <div className="col-span-3 rounded-2xl border border-orange-100 bg-orange-50 px-5 py-3 text-center">
                <p className="text-2xl font-extrabold">2,000+</p>
                <p className="text-xs font-semibold text-orange-600">
                  Transformations
                </p>
              </div>
            </motion.div>

            {/* Body */}
            <motion.div
              variants={stagger}
              className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed"
            >
              {/* Intro */}
              <motion.div variants={fadeUp} className="space-y-4">
                <p className="text-xl md:text-2xl font-extrabold text-gray-900">
                  I’m Manjunath.
                </p>

                <p>
                  For <strong>10+ years</strong>, I’ve worked with men over 30 —
                  especially those weighing{" "}
                  <span className="text-orange-600 font-semibold">
                    100kg or more
                  </span>.
                </p>

                <p>
                  I’ve helped <strong>2,000+ men</strong> lose fat by fixing{" "}
                  <strong>metabolism and lifestyle</strong>, not by pushing
                  generic diets or hard workouts.
                </p>
              </motion.div>

              {/* Credentials */}
              <motion.div variants={fadeUp} className="rounded-3xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white p-6">
                <p className="mb-4 text-lg font-semibold text-gray-900">
                  Credentials
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    ["10+", "Years Experience"],
                    ["2,000+", "Men Transformed"],
                    ["Fat-Loss", "Metabolism & Lifestyle"],
                  ].map(([a, b], i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm"
                    >
                      <p className="text-2xl font-extrabold">{a}</p>
                      <p className="text-sm font-semibold text-orange-600">
                        {b}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Core Truth */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm space-y-3"
              >
                <p className="font-semibold">Core Truth</p>
                <p className="font-bold">
                  Big fitness companies make one mistake:
                </p>
                <p className="text-xl font-extrabold">
                  They give everyone the same plan.
                </p>
                <p>
                  But{" "}
                  <span className="text-orange-600 font-semibold">
                    100kg bodies
                  </span>{" "}
                  don’t work like normal bodies.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              className="mt-10"
            >
              <button className="px-10 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-md hover:bg-orange-500 transition">
                Start Your Fitness Journey
              </button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
