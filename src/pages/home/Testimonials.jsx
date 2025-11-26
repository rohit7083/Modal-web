// src/components/TestimonialsSection.jsx
import React from "react";
// apne images import karo
import AliciaImg from "../../assets/her-section-one/60-instagram-1.webp";
import NamitaImg from "../../assets/her-section-one/60-instagram-2.webp";
import RodrigoImg from "../../assets/her-section-one/60-instagram-3.webp";
import GabiImg from "../../assets/her-section-one/60-instagram-3.webp";
import TanviImg from "../../assets/her-section-one/60-instagram-3.webp";

const testimonials = [
  {
    id: 1,
    name: "Alicia Testimonial",
    image: AliciaImg,
    text: `Embarking on a journey that took Alicia from diverse corners of the world to the enchanting heart of India has been nothing short of a transformative story. This blend of cultures and traditions has not only enriched her but also become the canvas on which Alicia’s modelling story has flourished.`,
  },
  {
    id: 2,
    name: "Namita Testimonial",
    image: NamitaImg,
    text: `In this exclusive testimonial video, we proudly present the incredible journey of Namita, who embarked on her modelling odyssey with Aurra Talents. From the moment she joined us as a fresh face, her story unfolded like a fairytale.`,
  },
  {
    id: 3,
    name: "Rodrigo Testimonial",
    image: RodrigoImg,
    text: `Here we are again with the super charming Rodrigo, on the hot seat this time, talking about his perspective on Aurra, his journey so far and his work experience. We’re glad to represent him with us.`,
  },
  {
    id: 4,
    name: "Gabi Testimonial",
    image: GabiImg,
    text: `A tale of growth and discovery of true potential! Step into the world of Gabi’s heartfelt testimonial about her journey in India with Aurra Talents – from celebrating festivals, visiting different cities for shoots, staying with models speaking different languages, forming friends, to immersing herself in the rich tapestry of Indian culture.`,
  },
  {
    id: 5,
    name: "Tanvi Testimonial",
    image: TanviImg,
    text: `“Modelling is just for pretty faces.” “No, it’s not.” It’s all about potential and hard work – says Tanvi, a dedicated and ambitious personality who shares her journey and experience at Aurra Talents.`,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}

        <h2 className="text-primary text-center text-3xl md:text-4xl font-semibold tracking-[0.25em] mb-10">
         Testimonials
        </h2>
        
        

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="flex flex-col">
              {/* Image with play icon */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                {/* play icon centre me */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                    <span className="inline-block ml-0.5 border-l-[10px] border-l-gray-800 border-y-[6px] border-y-transparent" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <h3 className="mt-4 text-base md:text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
