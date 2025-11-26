// src/pages/home/WhoWeAre.jsx
import React from "react";
import collageImage from "./../../assets/her-section-one/Modals.png";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-20">
      {/* TOP ABOUT DRAKE + 2-COLUMN LAYOUT */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Top big heading */}
        

<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.25em] mb-10 text-primary">

  About Drake
</h2>

        {/* 2 column row */}
        <div className="flex flex-col lg:flex-row items-start justify-between ">
          {/* LEFT TEXT */}
          <div className="flex-1 lg:flex-[1.1]">
            <h3 className="text-[2.3rem] font-bold mb-6 text-gray-900">
              Who we are
            </h3>

            <p className="text-base leading-7 mb-4 text-gray-700">
              Drake is a modern talent ecosystem built for the way creators and brands work
              today. On one side, Drake Online is a curated, searchable marketplace where
              models, photographers, stylists and creative teams meet clients and casting
              directors. On the other, Drake Academy (the Drake Girl program) is a practical,
              confidence-first training experience that helps aspiring talent become
              camera-ready and career-ready — faster.
            </p>

            <h5 className="font-semibold text-[1.05rem] mb-2 text-gray-900">
              Our mission
            </h5>
            <p className="text-base leading-7 mb-4 text-gray-700">
              We believe great work starts with real people who feel empowered, prepared, and
              fairly represented. We make discovery simple, preparation practical, and bookings
              transparent so talent can focus on what matters: their craft.
            </p>

            <h5 className="font-semibold text-[1.05rem] mb-2 text-gray-900">
              Our promise
            </h5>
            <p className="text-base leading-7 mb-4 text-gray-700">
              We’ll help you be ready — and be seen. Whether you want to walk your first
              runway, build a professional portfolio, or cast a campaign with confidence,
              Drake brings the tools and the stage.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 lg:flex-[0.9] flex justify-center">
            <img
              src={collageImage}
              alt="Collage"
              className="
                block 
                rounded-md 
                object-contain 
                w-full 
                sm:w-4/5 
                md:w-3/5
              "
            />
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="w-4/5 max-w-[80%] mx-auto mt-5 px-4">
        <h3 className="text-[2.3rem] font-bold mb-6 text-gray-900">What we do</h3>

        <div className="flex items-start mb-4">
          <span className="text-[#ff0099] text-[20px] mr-3 mt-1 font-bold">✔</span>
          <p className="m-0 text-base leading-7 text-gray-600">
            For talent: Build a professional presence, learn the skills that get you booked,
            and get discovered by brands and agencies that match your look and goals.
          </p>
        </div>

        <div className="flex items-start mb-4">
          <span className="text-[#ff0099] text-[20px] mr-3 mt-1 font-bold">✔</span>
          <p className="m-0 text-base leading-7 text-gray-600">
            For brands &amp; casting directors: Find pre-vetted, diverse talent quickly,
            request portfolios and availability, and manage bookings in one streamlined place.
          </p>
        </div>

        <div className="flex items-start mb-4">
          <span className="text-[#ff0099] text-[20px] mr-3 mt-1 font-bold">✔</span>
          <p className="m-0 text-base leading-7 text-gray-600">
            For learners: Train with bite-sized, actionable modules — from runway and posing
            to makeup, skincare, and portfolio coaching — with tools that translate directly
            to real shoots and castings.
          </p>
        </div>
      </div>

      {/* WHY DRAKE */}
      <div className="w-4/5 max-w-[80%] mx-auto mt-5 px-4">
        <h3 className="text-[2.3rem] font-bold mb-6 text-gray-900">Why Drake?</h3>

        <div className="flex items-start mb-4">
          <span className="text-[#ff0099] text-[20px] mr-3 mt-1 font-bold">✔</span>
          <p className="m-0 text-base leading-7 text-gray-600">
            Real outcomes: We combine education + exposure so training leads to visibility,
            not just theory.
          </p>
        </div>

        <div className="flex items-start mb-4">
          <span className="text-[#ff0099] text-[20px] mr-3 mt-1 font-bold">✔</span>
          <p className="m-0 text-base leading-7 text-gray-600">
            Diversity &amp; quality: We champion creators from all backgrounds and body types,
            and place emphasis on genuine, professional representation.
          </p>
        </div>

        <div className="flex items-start mb-4">
          <span className="text-[#ff0099] text-[20px] mr-3 mt-1 font-bold">✔</span>
          <p className="m-0 text-base leading-7 text-gray-600">
            Transparent process: Clear listings, clear fees, and clear expectations —
            for talent and clients alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
