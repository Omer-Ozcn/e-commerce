import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center items-center gap-0 mt-10 mb-20 font-montserrat">
      {/* Prev */}
      <li>         
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-[83px] h-[74px] px-[25px] border text-[14px] font-bold leading-[24px] ${
            currentPage === 1
              ? "bg-[#F3F3F3] text-[#BDBDBD] border-[#BDBDBD] cursor-not-allowed"
              : "bg-white text-[#23A6F0] border-[#E8E8E8] hover:bg-[#f0f0f0]"
          }`}
        >
          Prev
        </button>
      </li>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={`h-[74px] w-[49px] px-[20px] text-[14px] font-bold leading-[24px] border ${
              currentPage === page
                ? "bg-[#23A6F0] text-white border-[#E9E9E9]"
                : "bg-white text-[#23A6F0] border-[#E9E9E9] hover:bg-[#f5f5f5]"
            }`}
          >
            {page}
          </button>
        </li>
      ))}

      {/* Next */}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-[85px] h-[74px] px-[25px] border text-[14px] font-bold leading-[24px] ${
            currentPage === totalPages
              ? "bg-[#F3F3F3] text-[#BDBDBD] border-[#BDBDBD] cursor-not-allowed"
              : "bg-white text-[#23A6F0] border-[#E8E8E8] hover:bg-[#f0f0f0]"
          }`}
        >
          Next
        </button>
      </li>
    </ul>
  );
}
