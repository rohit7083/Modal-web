import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-xl bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm"
    >
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
        />
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="Search models, city, name..."
        className="flex-1 px-3 text-sm outline-none bg-transparent"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Button */}
      <button
        type="submit"
        className="ml-2 bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
