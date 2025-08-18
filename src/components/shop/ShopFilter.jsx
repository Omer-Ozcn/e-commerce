import React, { useEffect, useState } from "react";

const SORT_OPTIONS_TR = [
  { value: "price:asc",  label: "Fiyat: Düşük → Yüksek" },
  { value: "price:desc", label: "Fiyat: Yüksek → Düşük" },
  { value: "rating:desc",label: "Puan: Yüksek → Düşük" },
  { value: "rating:asc", label: "Puan: Düşük → Yüksek" },
];

export default function ShopFilter({
  totalResults = 0,
  sortBy = "price:asc",
  filterText = "",
  viewMode = "grid",
  onSortChange,
  onFilterTextChange,
  onViewChange,
  onFilterClick, // istersen dışarıdan “Filtrele” butonuna extra davranış bağla
}) {
  // Props ile senkron local state
  const [localSort, setLocalSort] = useState(sortBy);
  const [localView, setLocalView] = useState(viewMode);
  const [localFilter, setLocalFilter] = useState(filterText);

  useEffect(() => setLocalSort(sortBy), [sortBy]);
  useEffect(() => setLocalView(viewMode), [viewMode]);
  useEffect(() => setLocalFilter(filterText), [filterText]);

  const handleSortChange = (e) => {
    const val = e.target.value; // "price:desc"
    setLocalSort(val);
    onSortChange && onSortChange(val);
  };

  const toGrid = () => {
    setLocalView("grid");
    onViewChange && onViewChange("grid");
  };
  const toList = () => {
    setLocalView("list");
    onViewChange && onViewChange("list");
  };

  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm font-bold text-[#737373] whitespace-nowrap">
          Showing all {totalResults} results
        </p>

        {/* Views */}
        <div className="flex items-center gap-3 justify-center w-full md:w-auto">
          <span className="text-sm font-bold text-[#737373] whitespace-nowrap">Views:</span>
          <button
            onClick={toGrid}
            className={`w-10 h-10 flex justify-center items-center border border-[#ECECEC] rounded-md ${
              localView === "grid" ? "bg-gray-100" : "bg-white"
            }`}
            aria-label="Grid view"
          >
            <svg className="w-4 h-4 text-[#252B42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
              <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
            </svg>
          </button>
          <button
            onClick={toList}
            className={`w-10 h-10 flex justify-center items-center border border-[#ECECEC] rounded-md ${
              localView === "list" ? "bg-gray-100" : "bg-white"
            }`}
            aria-label="List view"
          >
            <svg className="w-4 h-4 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" />
              <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" />
              <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Sort & Filter */}
        <div className="flex flex-wrap gap-3 items-center justify-center w-full md:w-auto">
          <select
            value={localSort}
            onChange={handleSortChange}
            className="h-10 px-3 border border-[#DDDDDD] bg-[#F9F9F9] rounded-md text-sm font-normal text-[#737373] min-w-[210px]"
          >
            {SORT_OPTIONS_TR.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <input
            value={localFilter}
            onChange={(e) => {
              setLocalFilter(e.target.value);
              onFilterTextChange && onFilterTextChange(e.target.value);
            }}
            placeholder="Ürün ara..."
            className="h-10 px-3 border border-[#DDDDDD] bg-white rounded-md text-sm text-[#252B42] min-w-[200px]"
          />

          <button
            onClick={() => onFilterClick && onFilterClick(localFilter)}
            className="bg-[#23A6F0] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 h-10 min-w-[80px]"
          >
            Filtrele
          </button>
        </div>
      </div>
    </div>
  );
}
