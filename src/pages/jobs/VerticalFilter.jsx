import React from "react";

export default function JobFilterSidebar() {
  return (
    <div className="w-64 bg-gradient-to-b from-pink-50 to-white border-r px-5 py-6 rounded-xl shadow-sm">

      {/* Title */}
      <h3 className="text-xl font-semibold text-pink-600 mb-6">
        Filter Jobs
      </h3>

      {/* Search */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-600">
          Job Title
        </label>
        <input
          type="text"
          placeholder="Search job…"
          className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-pink-400"
        />
      </div>

      {/* Job Type Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-600">
          Job Type
        </label>

        <div className="flex flex-col mt-2 gap-2 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" /> Full Time
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" /> Part Time
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" /> Freelance
          </label>
        </div>
      </div>

      {/* Salary Range */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-600">
          Salary Range
        </label>

        <select className="mt-2 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-pink-400">
          <option>All</option>
          <option>$500 - $1000</option>
          <option>$1000 - $3000</option>
          <option>$3000 - $7000</option>
          <option>$7000+</option>
        </select>
      </div>

      {/* Country Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-600">
          Location
        </label>

        <select className="mt-2 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-pink-400">
          <option>All</option>
          <option>USA</option>
          <option>UK</option>
          <option>India</option>
          <option>Canada</option>
        </select>
      </div>

      {/* Apply Button */}
      <button className="w-full py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-medium text-sm transition">
        Apply Filters
      </button>
    </div>
  );
}
