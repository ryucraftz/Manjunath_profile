import React from "react";

const CALENDLY_URL = "https://cal.com/manjunath-getfitwithmac/manjunath-1-on-1-personalized-fitness-call-with-fitbharat";

const StickyBar = () => {
  const handleClick = (e) => {
    e.preventDefault();

    if (window.pagesense) {
      window.pagesense.push(["trackEvent", "cta_button_click"]);
    }

    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="
        fixed inset-x-0 bottom-0
        bg-white shadow-lg border-t border-gray-200
        z-[9999]
      "
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Button Section */}
      <div className="px-4 py-3 lg:px-20">
        <button
          onClick={handleClick}
          className="
              w-full              /* Mobile: 100% */
              lg:w-[40%]          /* Desktop: 60% */
              mx-auto             /* Center on desktop */
              bg-orange-600 text-white
              font-semibold
              text-sm sm:text-base md:text-lg
              rounded-3xl
              shadow-lg
              transition
              py-3
              block cursor-pointer
            "
        >
          Talk With Expert
        </button>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gray-200" />

      {/* Bottom Text */}
      <div className="px-4 py-2 lg:px-20">
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-800">
          Limited Slots Only !{" "}
         
        </p>
      </div>
    </div>
  );
};

export default StickyBar;
