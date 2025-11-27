import React from "react";
import Hero_section from "../../assets/about-us/60-about-1.webp";

function HeroSectionOne() {
  return (
    <section className="w-full relative">
      <div className="relative w-full h-[90vh] flex flex-col md:flex-row">

        {/* Left Side Image */}
        <div className="w-full md:w-1/2 h-full">
          <img
            src={Hero_section}
            className="w-full h-full object-cover"
            alt="hero"
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 
                        bg-[#b9b9b9]/60 backdrop-blur-sm">

          <p className="text-sm tracking-wide text-gray-700 mb-3">
            [ ABOUT DRAKE ]
          </p>

          
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-pink-500 uppercase mb-10">
             Drake connects <br /> talent to opportunity.
          </h2>
          

          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            We're a two-pronged platform that helps people look, perform, and get discovered — 
            whether you're stepping onto the runway for the first time or hiring talent 
            for a global campaign.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HeroSectionOne;
