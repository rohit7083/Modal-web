import React, { useState } from "react";
import VideoOne from "../../assets/her-section-one/3917524-hd_2048_1080_25fps-2.mp4";

function Videos() {
  const videos = [
    {
      src: VideoOne,
      title: "Model Portrait Shoot",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/beer.mp4",
      title: "Fashion Walk Model",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/river.mp4",
      title: "Outdoor Travel Shoot",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      title: "Studio Pose Model",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/beer.mp4",
      title: "Urban Fashion Actor",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/river.mp4",
      title: "Lifestyle B-Roll",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      title: "Beauty Shoot Model",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/beer.mp4",
      title: "Street Style Actor",
    },
    {
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/river.mp4",
      title: "Cinematic Closeup",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, videos.length));
  };

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="p-3">
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {videos.slice(0, visibleCount).map((video, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-xl overflow-hidden shadow-xl hover:-rotate-1 hover:scale-[1.04] transition-all duration-300 cursor-pointer"
            onClick={() => openModal(video)}
          >
            <div className="relative group">
              <video
                src={video.src}
                muted
                loop
                playsInline
                controls={false}
                preload="auto"
                className="w-full h-full object-cover"
                onMouseEnter={(e) => {
                  e.currentTarget.currentTime = 0;
                  e.currentTarget.play();
                }}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />

              {/* Overlay + Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="absolute bottom-2 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs font-medium truncate">
                  {video.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < videos.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleViewMore}
            className="
              px-6 py-2.5 rounded-full
              border border-pink-500
              text-pink-500 font-semibold text-sm
              hover:bg-pink-500 hover:text-white
              transition duration-300 active:scale-95
              shadow-sm
            "
          >
            View more
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // modal ke andar click par close na ho
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 px-3 py-1 text-xs font-semibold rounded-full bg-white/80 hover:bg-white text-pink-600 shadow"
            >
              ✕ Close
            </button>

            {/* Big Video */}
            <video
              key={selectedVideo.src} // modal open hote hi reset/play
              src={selectedVideo.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full max-h-[80vh] object-contain bg-black"
            />

            {/* Title */}
            <div className="px-4 py-3 border-t border-white/10">
              <p className="text-sm text-white/90 font-medium">
                {selectedVideo.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos;
