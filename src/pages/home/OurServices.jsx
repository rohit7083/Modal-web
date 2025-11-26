// src/components/home/OurServices.jsx
import React from "react";

// yaha apni real images import karo
import service1 from "../../assets/her-section-one/os-01.webp";
import service2 from "../../assets/her-section-one/os-2.webp";
import service3 from "../../assets/her-section-one/os-3.webp";
import service4 from "../../assets/her-section-one/os-4.webp";

const SERVICES = [
  {
    id: 1,
    title: "Model Management",
    desc: "End-to-end management for new and established talent across campaigns, editorials and runway.",
    image: service1,
  },
  {
    id: 2,
    title: "Casting Services",
    desc: "From brief to booking, we handle full-scale castings for brands, agencies and production houses.",
    image: service2,
  },
  {
    id: 3,
    title: "Production & Campaigns",
    desc: "Creative production support for photo and video campaigns, from moodboards to final delivery.",
    image: service3,
  },
  {
    id: 4,
    title: "Brand Collaborations",
    desc: "Strategic partnerships that align talent with brands, events and media for maximum impact.",
    image: service4,
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#f8f6f4] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: title + button */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-1">
              Our Services
            </p>
            <h2 className="text-primary text-2xl md:text-3xl font-semibold text-gray-900">
              What we offer for brands & talent
            </h2>
          </div>

          <button className="self-start md:self-auto mt-2 inline-flex items-center border border-gray-900 px-5 py-2 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gray-900 hover:text-white transition">
            View All Services
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-sm hover:shadow-md rounded-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold tracking-wide text-gray-900 mb-1 uppercase">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
