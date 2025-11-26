// src/components/home/LatestWork.jsx
import { useState } from "react";

import imgPhilips from "../../assets/her-section-one/60-instagram-1.webp";
import imgAbuSandeep from "../../assets/her-section-one/60-instagram-2.webp";
import imgVivo from "../../assets/her-section-one/60-instagram-3.webp";
import imgCoke from "../../assets/her-section-one/60-instagram-4.webp";
// extra images bhi use kar sakte ho
// import imgCokeone from "../../assets/her-section-one/60-instagram-5.webp";
// import imgCoketwo from "../../assets/her-section-one/60-instagram-6.webp";

const slides = [
  { id: 1, src: imgPhilips, alt: "Philips Campaign" },
  { id: 2, src: imgAbuSandeep, alt: "Abu Jani Sandeep Khosla" },
  { id: 3, src: imgVivo, alt: "Vivo Campaign" },
  { id: 4, src: imgCoke, alt: "Coca Cola Campaign" },
];

const LatestWork = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [lastScrollTime, setLastScrollTime] = useState(0); // wheel ke liye throttle

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const getIndex = (offset) => {
    return (activeIndex + offset + slides.length) % slides.length;
  };

  // mouse wheel handler
  const handleWheel = (e) => {
    const now = Date.now();

    // thoda throttle (0.4 sec me ek hi change)
    if (now - lastScrollTime < 400) return;

    // page scroll rokna
    e.preventDefault();

    if (e.deltaY > 0) {
      // scroll down → next
      nextSlide();
    } else if (e.deltaY < 0) {
      // scroll up → prev
      prevSlide();
    }

    setLastScrollTime(now);
  };

  return (
   <section className="h-[50vh] bg-white">
      {/* yaha wheel event lagaya hai */}
      <div
        className="bg-gray-100 py-5"
        onWheel={handleWheel}
     
      >
       
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.25em] mb-10 text-primary">
            LATEST
          </h2>

          {/* Carousel */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-2xl text-gray-500 hover:bg-gray-100 transition"
            >
              &#8592;
            </button>

            {/* Slides */}
            <div className="flex items-center gap-4 md:gap-6 overflow-hidden select-none">
              {[-1, 0, 1].map((offset) => {
                const slide = slides[getIndex(offset)];
                const isActive = offset === 0;

                return (
                  <div
                    key={slide.id}
                    className={[
                      "relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300",
                      isActive
                        ? "w-60 md:w-80 lg:w-[340px] scale-100 z-20"
                        : "w-40 md:w-52 lg:w-60 scale-90 opacity-60 z-10",
                    ].join(" ")}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-2xl text-gray-500 hover:bg-gray-100 transition"
            >
              &#8594;
            </button>
          </div>

          {/* Mobile arrows (neeche center me) */}
          <div className="flex md:hidden justify-center gap-8 mt-6">
            <button
              onClick={prevSlide}
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 text-xl text-gray-500 hover:bg-gray-100 transition"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 text-xl text-gray-500 hover:bg-gray-100 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default LatestWork;
