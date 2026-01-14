// TestimonialsSection.jsx
import TestimonialCard from "./TestimonialCard";
import Sandeep from "../assets/testimonials/Sandeep.jpg";
import Manoj from "../assets/testimonials/Manoj.jpg";
import Naushad from "../assets/testimonials/Naushad.jpg";
import Ayush from "../assets/testimonials/Ayush.jpg";
import Keerthi from "../assets/testimonials/Keerthi.jpg";
import vinay from "../assets/testimonials/vinay.jpg";
import richard from "../assets/testimonials/richard.jpg";
import raksha from "../assets/testimonials/raksha.jpg";


// import manoj from "../assets/testimonials/trans5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sandeep Daniel",
      subtitle: "Software Engineer • Age 39",
      result: "Lost 16 kgs in 20 weeks",
      img: Sandeep,
      
     
    },
    {
      name: "Naushad",
      subtitle: "CTO • Age 35",
      result: "Lost 9 kgs & Gained 5kg muscle in 8 weeks",
      img: Naushad,
      
    },
    {
      name: "Manoj ",
      subtitle: "Lawyer • Age 29",
      result: "Lost 10 kgs in 10 weeks",
      img: Manoj,
      
    },
    {
      name: "Ayush",
      subtitle: "Buisnees Owner • Age 30 ",
      result: "Lost 11 kgs in 16 weeks",
      img: Ayush,
     
    },
    {
      name: "Keerthi",
      subtitle: "Government Job • Age 37",
      result: "Lost 19 kgs in 18 weeks",
      img: Keerthi,
      
    },
    {
      name: "Vinay",
      subtitle: "Bankerr • Age 41",
      result: "Lost 11 kgs in 12 weeks",
      img: vinay,
      
    },
    {
      name: "Richard",
      subtitle: "Buisness Owner • Age 41" ,
      result: "Lost 5 kgs in 6weeks",
      img: richard,
      
    },
    {
      name: "Raksha",
      subtitle: "Multiple Business owner",
      result: "Lost 8 kgs 10 weeks",
      img: raksha,
     
    },
    
  ];

  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.12em] uppercase text-orange-600">
            Watch how real transformations happens.
          </p>

          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-gray-900">
          These Men Were Over 100kg.
            <br />
            <span className="inline-block mt-2 px-3 py-1 rounded-xl bg-orange-50 border border-orange-100 text-gray-900">
            Stuck. Tired. Losing Control.
            </span>
            <br />
            <span className="block mt-2 text-orange-600">Just Like You.</span>
          </h2>
        </div>

        {/* Cards */}
        {/* <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-7">
            {testimonials.map((t, idx) => (
              <div key={`${t.name || "anon"}-${idx}`} className="w-full">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div> */}

<Swiper
  modules={[Autoplay, Pagination, Navigation]}
  spaceBetween={24}
  slidesPerView={1}
  loop={true}
  grabCursor={true}
  autoplay={{
    delay: 3000,               // time between slides (ms)
    disableOnInteraction: false // keep sliding after swipe
  }}
  pagination={{ clickable: true }}
  navigation
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>

          {testimonials.map((t, idx) => (
            <SwiperSlide key={`${t.name || "anon"}-${idx}`}>
              <TestimonialCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
