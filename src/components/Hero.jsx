export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-5xl px-4 pt-10 pb-14 text-center">

        {/* Title */}
        <h1 className="mx-auto font-bold tracking-tight leading-tight
          text-xl sm:text-2xl md:text-3xl lg:text-4xl">

          {/* Mobile (exact lines preserved) */}
          <span className="block sm:hidden text-black">
            India’s Leading Coach for{" "}
            <span className="text-orange-600">100kg+</span> Men Reveals 
            the System That Helps
            <br />
            Men Over{" "}
            <span className="text-orange-600">30 Lose 12–25+ Kgs </span> Safely
          </span>

          {/* Desktop (unchanged) */}
          <span className="hidden sm:block text-black">
            <span className="block">
              India’s Leading Coach for
              <span className="text-orange-600"> 100kg+ </span> Men Reveals
            </span>
            <span className="block"> The System That Helps Men Over{" "}
              <span className="text-orange-600"> 30 Lose 12–25+ Kgs</span> Safely
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          Designed specifically for heavy bodies. No joint damage. No extreme
          diets. No gym dependency.
        </p>

      </div>
    </section>
  );
}
