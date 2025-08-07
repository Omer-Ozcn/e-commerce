import React, { useState } from "react";

export default function ShopFilter({ totalResults = 12, onSortChange }) {
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState("grid");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    if (onSortChange) onSortChange(e.target.value);
  };

  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm font-bold text-[#737373] whitespace-nowrap">
          Showing all {totalResults} results
        </p>
        <div className="flex items-center gap-3 justify-center w-full md:w-auto">
          <span className="text-sm font-bold text-[#737373] whitespace-nowrap">Views:</span>
          <button
            onClick={() => setViewMode("grid")}
            className={`w-10 h-10 flex justify-center items-center border border-[#ECECEC] rounded-md ${
              viewMode === "grid" ? "bg-gray-100" : "bg-white"
            }`}
            aria-label="Grid view"
          >
            <svg
              className="w-4 h-4 text-[#252B42]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
              <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`w-10 h-10 flex justify-center items-center border border-[#ECECEC] rounded-md ${
              viewMode === "list" ? "bg-gray-100" : "bg-white"
            }`}
            aria-label="List view"
          >
            <svg
              className="w-4 h-4 text-[#737373]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" />
              <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" />
              <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Sort & Filter */}
        <div className="flex flex-wrap gap-3 items-center justify-center w-full md:w-auto">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="h-10 px-3 border border-[#DDDDDD] bg-[#F9F9F9] rounded-md text-sm font-normal text-[#737373] min-w-[150px]"
          >
            <option value="popular">Popularity</option>
            <option value="newest">Newest</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
          <button className="bg-[#23A6F0] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 h-10 min-w-[80px]">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
