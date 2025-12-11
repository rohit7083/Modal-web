import React, { useState, useEffect, useRef } from "react";
import useJwt from "./../../endpoints/jwt/useJwt";

function Post() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(false);

  // Hidden file input reference
  const fileInputRef = useRef(null);

  // ==================== FETCH POSTS ====================
  const fetchPosts = async () => {
    try {
      // ✅ Axios / custom hook call
      const res = await useJwt.getMediaToProfile();

      // 👉 Axios me data yaha hota hai
      const data = res?.data;

      // Data agar array hai to as-is, agar single object hai to array bana do
      const normalized = Array.isArray(data) ? data : data ? [data] : [];

      setPosts(normalized);
      console.log("Fetched posts:", normalized);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ==================== HANDLE DIRECT FILE UPLOAD ====================
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      // 🔴 IMPORTANT: backend key = "photos"
      formData.append("photos", file);

      // ✅ useJwt se API call
      const res = await useJwt.addMediaToProfile(formData);

      // Axios response check
      if (!res || (res.status !== 200 && res.status !== 201)) {
        throw new Error("Upload failed");
      }

      // Upload ke baad list refresh
      await fetchPosts();
    } catch (err) {
      console.error("Error uploading file:", err);
    } finally {
      setLoading(false);
    }
  };

  // ==================== OPEN FILE PICKER ====================
  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // reset selection
      fileInputRef.current.click();
    }
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, posts.length));
  };

  return (
    <div className="p-3">
      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* SIMPLE LIST – SIRF VIDEO, NO MASONRY */}
      <div className="space-y-6">
        {posts.slice(0, visibleCount).map((post, i) => {
          // sirf video use kar rahe hain
          const hasVideo = !!post.video;

          if (!hasVideo) return null;

          return (
            <div
              key={post.id ?? i}
              className="rounded-xl overflow-hidden shadow-xl
                         hover:-rotate-1 hover:scale-[1.02] transition-all duration-300"
            >
              <video
                src={post.video}
                controls
                className="w-full h-auto max-h-[500px] object-contain bg-black"
              />
            </div>
          );
        })}
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
              hover:bg-pink-500 hover:text-white
              transition duration-300 active:scale-95
              shadow-sm
            "
          >
            View more
          </button>
        </div>
      )}

      {/* PLUS CARD (DIRECT FILE CHOOSE) */}
      <div className="rounded-xl overflow-hidden shadow-xl my-4">
        <button
          type="button"
          onClick={openFilePicker}
          className="w-full h-full min-h-[100px] flex flex-col items-center justify-center
                     bg-gray-100 hover:bg-gray-200 transition-all duration-300"
        >
          {loading ? (
            <span className="text-gray-600 text-sm">Uploading...</span>
          ) : (
            <>
              <span className="text-5xl font-bold">+</span>
              <span className="mt-2 text-sm text-gray-600">
                Add new post
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Post;
