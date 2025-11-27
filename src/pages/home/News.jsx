// src/components/LatestNews.jsx
import React from "react";

const newsItems = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/167404/pexels-photo-167404.jpeg",
    tag: "PREMIUM",
    category: "MODELLING",
    date: "January 1, 2025",
    title: "Model Agency Walk-in and Casting Guide",
    excerpt:
      "Learn the best practices to prepare for a model agency walk-in and casting call.",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/6311579/pexels-photo-6311579.jpeg",
    tag: "FASHION",
    category: "FASHION",
    date: "January 2, 2025",
    title: "Why Portfolios Matter for Models",
    excerpt:
      "A strong portfolio elevates your chances during casting and commercial shoots.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/6985329/pexels-photo-6985329.jpeg",
    tag: "PREMIUM",
    category: "MODELLING",
    date: "January 3, 2025",
    title: "How To Nail A Modeling Agency Interview",
    excerpt:
      "Learn how to get ready before appearing for any top modeling agency interview.",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/6311587/pexels-photo-6311587.jpeg",
    tag: "STYLE",
    category: "FASHION",
    date: "January 4, 2025",
    title: "Runway Trends Every Model Should Know",
    excerpt:
      "Essential runway trends and walk styles that agencies expect from new faces.",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/6311569/pexels-photo-6311569.jpeg",
    tag: "EDITORIAL",
    category: "FASHION",
    date: "January 5, 2025",
    title: "Building Editorial Confidence",
    excerpt:
      "Tips to feel confident and deliver stunning expressions in editorial shoots.",
  },
];

function LatestNews() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif tracking-[0.35em] text-pink-500 uppercase">
            LATEST NEWS
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Stay updated with the latest trends in the fashion and modeling industry.
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="-mx-4">
          <div
            className="
              flex gap-6 px-4 pb-4
              overflow-x-auto
              snap-x snap-mandatory
              scrollbar-thin
            "
          >
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="
                  snap-start
                  min-w-[180px]
                  sm:min-w-[190px]
                  md:min-w-[200px]
                  lg:min-w-[220px]
                  flex-shrink-0
                "
              >
                <div className="bg-white border rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2">

                  {/* Bigger Image Height */}
                  <div className="w-full h-56 md:h-60 overflow-hidden relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="px-5 py-5 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50">

                    {/* Tag + Date */}
                    <div className="flex items-center text-[10px] uppercase tracking-wide mb-3 gap-2">
                      <span className="flex items-center gap-1 text-pink-500 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        {item.tag}
                      </span>

                      <span className="text-gray-400">|</span>

                      <span className="text-gray-700">{item.category}</span>

                      <span className="ml-auto text-gray-500 normal-case">
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base md:text-lg leading-snug mb-2 cursor-pointer hover:text-pink-500 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-auto pt-4">
                      <span className="text-xs font-semibold text-pink-500 hover:text-pink-600 cursor-pointer inline-flex items-center gap-1 group">
                        READ MORE
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default LatestNews;