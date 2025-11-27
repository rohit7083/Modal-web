import React from "react";
import Hero_section from "../../assets/contactUs/60-contacts-1.webp";
import { Link } from "react-router-dom";

function HeroSectionOne() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Image */}
      <img
        src={Hero_section}
        className="w-full h-full object-cover"
        alt="contact hero"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* LEFT SIDE TEXT */}
      <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 text-white max-w-xl">
      
        <h2 className="text-4xl md:text-5xl font-serif leading-tight text-pink-500 uppercase mb-10">
             CONTACT US  <br /> EASILY ONLINE
          </h2>

        <p className="mt-6 text-lg leading-relaxed opacity-90">
          Drake bridges training and opportunity — empowering aspiring talent with
          industry-grade skills while connecting brands to diverse, ready-to-work
          creatives. Learn. Prepare. Book.
        </p>

        {/* Button */}
       <Link to="/about-us">
  <button className="mt-8 px-8 py-3 border border-white !text-white tracking-wide hover:bg-white hover:!text-primary transition">
    MORE ABOUT US
  </button>
</Link>
      </div>

      {/* BOTTOM-RIGHT INFO */}
      <div className="absolute bottom-10 right-10 md:right-20 text-white text-sm opacity-90 text-right">
        <p className="font-medium">Drake</p>
        <p>Casting breakdowns. Proud</p>
        <p>partner of drakegirl.com</p>

        <p className="mt-4 font-semibold">INFO@DRAKEGIRL.COM</p>
      </div>

    </section>
  );
}

export default HeroSectionOne;
