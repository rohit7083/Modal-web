import React, { useState } from "react";

function Post() {
  const posts = [
    "https://picsum.photos/300/400",
    "https://picsum.photos/400/600",
    "https://picsum.photos/300/500",
    "https://picsum.photos/350/450",
    "https://picsum.photos/300/700",
    "https://picsum.photos/400/500",
    "https://picsum.photos/300/350",
    "https://picsum.photos/350/600",
    "https://picsum.photos/300/450",

    "https://picsum.photos/350/450",
    "https://picsum.photos/300/700",
    "https://picsum.photos/400/500",
    "https://picsum.photos/350/450",
    "https://picsum.photos/300/700",
    "https://picsum.photos/400/500",
    "https://picsum.photos/300/400",
    "https://picsum.photos/400/600",
    "https://picsum.photos/300/500",
    "https://picsum.photos/350/450",
    "https://picsum.photos/300/700",
    "httpsum.photos/400/500",
    "https://picsum.photos/300/350",
    "https://picsum.photos/350/600",
    "https://picsum.photos/300/450",
  ];

  const [visibleCount, setVisibleCount] = useState(9);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, posts.length));
  };

  return (
    <div className="p-3">
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {posts.slice(0, visibleCount).map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-xl overflow-hidden shadow-xl hover:-rotate-1 hover:scale-[1.04] transition-all duration-300"
          >
            <img src={src} className="w-full" alt={`Post ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < posts.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleViewMore}
            className="
              px-6 py-2.5 rounded-full
              border border-pink-500
              text-pink-500 font-semibold text-sm
             hover:text-white
              transition duration-300 active:scale-95
              shadow-sm
            ">
            View more
          </button>
        </div>
      )}
    </div>
  );
}

export default Post;
