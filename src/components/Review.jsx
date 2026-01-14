import { Star } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });

    return controls.stop;
  }, [value, duration, count]);

  return <span>{display.toLocaleString()}+</span>;
};

const Review = () => {
  return (
    <div className="w-full flex justify-center bg-white py-4 px-3">
      <div
        className="
          flex flex-col sm:flex-row
          items-center
          gap-2 sm:gap-3
          px-4 py-3
          rounded-full
          bg-white
          shadow-[0_8px_24px_rgba(0,0,0,0.15)]
          text-center sm:text-left
        "
      >
        {/* ⭐ Star + Experience */}
        <div className="flex items-center gap-1 whitespace-nowrap">
          <Star
            className="text-yellow-600 fill-yellow-400 shrink-0"
            size={16}
            strokeWidth={2.2}
          />
          <span className="font-medium text-xs sm:text-sm text-black">
            <AnimatedNumber value={10} /> Years Experience
          </span>
        </div>

        {/* Content */}
        <div
          className="
            flex flex-wrap
            justify-center sm:justify-start
            items-center
            gap-x-2 gap-y-1
            text-xs sm:text-sm
            text-black
          "
        >
          <span className="hidden sm:inline mx-1">•</span>

          <span className="whitespace-nowrap">
            <AnimatedNumber value={2000} /> Transformations
          </span>

          <span className="hidden sm:inline mx-1">•</span>

          <span className="whitespace-nowrap">
            100kg+ Fat-Loss Specialist
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
