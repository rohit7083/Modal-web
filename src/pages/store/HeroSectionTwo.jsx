import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import One from "./../../../src/assets/store/one.webp";
import two from "./../../../src/assets/store/two.webp";
import three from "./../../../src/assets/store/three.webp";
import four from "./../../../src/assets/store/four.webp";

const slides = [
  {
    lesson: "Lesson 1 and 2",
    title: "Orientation & Etiquette",
    subtitle: "PERFECT FOR BEGINNERS",
    description: `
Learn modeling’s most closely guarded trade secrets from our professional instructors.

You'll discover how many categories of modeling you can enter.
Being stage-ready is what lands the job.

Our practical etiquette lessons help you move, sit, walk, and present yourself with confidence.
    `,
    image: One,
  },
  {
    lesson: "Lesson 3 and 4",
    title: "Basic & Advanced Makeup",
    subtitle: "",
    description: `
Beauty begins with knowing how to play up your best features  and hide what doesn't work.  No one is flawless. Our team of experts demonstrates the step-by-step process of selecting and applying foundation, highlights, eye shadow and lipstick for a fresh yet polished look that forms the basis of any personal style.

Now that you've got the basics down, take your signature look to the next level!
    `,
    image: two,
  },
  {
    lesson: "Lesson 5, 6 & 7",
    title: "Hair, Skincare & Advanced Skincare",
    subtitle: "",
    description: `
Love your hair! Lenny King, Master Associate, John Paul Mitchel Systems, shows you how to determine the most flattering hair length and style for your hair texture, face, and body type.
    
Also, I'd like to point out the highlighting and color techniques that will best complement your complexion and features. And don't forget eyebrows! Learn how to achieve the perfect arch.
`,
    image: three,
  },
  {
    lesson: "Lesson 8, 9 & 10",
    title: "Fitness, Runway & Photo Modeling",
    subtitle: "",
    description: `
Modeling isn't just about standing in front of the camera or walking the runway while looking fabulous.You will learn the ABCs of photo modeling and never freeze.

Our fitness program is designed to build the stamina models need, while toning you up to be picture-perfect in any outfit.
Learn the requirements and techniques for the most popular types of modeling. From practical advice on how to work with runway, work with staff, and camera crews to projecting the desired image in "selling" the fashion look you're modeling, this insight into the real world of modeling gives you the insider's edge.
    `,
    image: four,
  },
];

// 🔮 Container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 📝 Text animation
const textItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ➡️ Slide direction animation
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    transition: { duration: 0.6 },
  }),
};

const CourseSlider = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex([
      (index + dir + slides.length) % slides.length,
      dir,
    ]);
  };

  const slide = slides[index];

  return (
    <section className="w-full bg-white pb-10 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto min-h-[520px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
          >
            {/* TEXT */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-center md:text-left"
            >
              <motion.p
                variants={textItem}
                className="text-xs font-semibold text-gray-400 uppercase mb-2"
              >
                {slide.lesson}
              </motion.p>

              <motion.h2
                variants={textItem}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-500 mb-2"
              >
                {slide.title}
              </motion.h2>

              {slide.subtitle && (
                <motion.p
                  variants={textItem}
                  className="text-sm font-bold text-black mb-4"
                >
                  {slide.subtitle}
                </motion.p>
              )}

              <motion.p
                variants={textItem}
                className="text-gray-700 leading-relaxed whitespace-pre-line mb-8 text-sm sm:text-base"
              >
                {slide.description}
              </motion.p>

              <motion.button
                variants={textItem}
                whileHover={{ scale: 1.05 }}
                className="px-6 sm:px-7 py-2 rounded-full bg-pink-500 text-white font-semibold"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex justify-center mt-10 md:mt-0"
            >
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] shadow-2xl"
                whileHover={{ scale: 1.04 }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-4 sm:gap-8 mt-4">
        <button
          onClick={() => paginate(-1)}
          className="px-5 sm:px-6 py-2 rounded-full border hover:bg-gray-100 text-sm sm:text-base"
        >
          ← Prev
        </button>
        <button
          onClick={() => paginate(1)}
          className="px-5 sm:px-6 py-2 rounded-full border hover:bg-gray-100 text-sm sm:text-base"
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default CourseSlider;
