import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magazine from "./../../../src/assets/store/magzin.jpg"; // magazine image

const testimonials = [
  {
    type: "text",
    quote: `My daughter went from shy and unsure to standing taller, speaking up, and owning her presence like never before.`,
    highlight: ["shy and unsure", "owning her presence like never before"],
    author: "Danielle M., mom of 15-year-old",
  },
  {
    type: "text",
    quote: `Thank you Drake. I landed my first commercial! Learning to audition made the difference.`,
    highlight: ["Drake."],
    author: "Jasmine R., 17",
  },
  {
    type: "image",
    quote: `Thanks Drake. I got the cover.`,
    highlight: ["Drake."],
    author: "Jasmine R., 17",
    image: Magazine,
  },
];

// slide animation
const slideVariants = {
  enter: { opacity: 0, y: 40 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="w-full bg-white px-4 overflow-hidden pb-20">
      <div className="max-w-5xl mx-auto min-h-[420px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-center"
          >
            {/* Quote mark */}
            <div className="text-5xl font-black mb-6">“</div>

            {/* Image slide */}
            {active.type === "image" && (
              <div className="flex justify-center mb-8">
                <img
                  src={active.image}
                  alt="Magazine Cover"
                  className="w-36 sm:w-44 shadow-xl"
                />
              </div>
            )}

            {/* Quote text */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug max-w-4xl mx-auto">
              {active.quote.split(" ").map((word, i) => {
                const isHighlighted = active.highlight?.some((h) =>
                  active.quote.includes(h) && h.includes(word)
                );
                return (
                  <span
                    key={i}
                    className={isHighlighted ? "text-pink-500 italic" : ""}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </p>

            {/* Author */}
            <p className="mt-8 text-sm font-semibold text-black">
              ___ {active.author}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
