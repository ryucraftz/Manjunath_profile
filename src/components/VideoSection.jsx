// VideoSection.jsx
import React from "react";
import vslPic from '../assets/vsl.jpeg';
import { motion } from "framer-motion";

const imageAnim = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function VideoSection() {
  return (
    <section className="bg-white flex flex-col items-center mt-0 relative z-10">
  <div className="w-full max-w-3xl aspect-video px-2 sm:px-0">
  <motion.div
            variants={imageAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 md:order-2 h-full flex items-stretch bg-white"
          >
            <img
              src={vslPic}
              alt="Manjunath - Coach"
              className="w-full h-96 sm:h-112 md:h-full object-contain md:rounded-l-none md:rounded-r-3xl"
            />
          </motion.div>
  </div>
</section>


  );
}
