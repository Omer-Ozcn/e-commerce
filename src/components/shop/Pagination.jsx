import React from "react";

const DOTS = "…";

function range(start, end) {
  const out = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
}

function buildPages(currentPage, totalPages, { boundaryCount = 1, siblingCount = 1 } = {}) {
  const totalNumbers = boundaryCount * 2 + siblingCount * 2 + 3; 
  if (totalPages <= totalNumbers) return range(1, totalPages);

  const startRange = range(1, boundaryCount);
  const endRange = range(totalPages - boundaryCount + 1, totalPages);

  const leftSibling  = Math.max(currentPage - siblingCount, boundaryCount + 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages - boundaryCount);

  const showLeftDots  = leftSibling  > boundaryCount + 2;                 // boşluk 2+ ise …
  const showRightDots = rightSibling < totalPages - boundaryCount - 1;

  const leftFill  = showLeftDots  ? [DOTS] : range(boundaryCount + 1, leftSibling - 1);
  const middle    = range(leftSibling, rightSibling);
  const rightFill = showRightDots ? [DOTS] : range(rightSibling + 1, totalPages - boundaryCount);

  return [...startRange, ...leftFill, ...middle, ...rightFill, ...endRange];
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = buildPages(currentPage, totalPages, { boundaryCount: 1, siblingCount: 1 });

  const btnBase =
    "min-w-10 h-10 px-3 border rounded text-sm font-bold transition";
  const btnDefault =
    "bg-white text-[#23A6F0] border-[#E9E9E9] hover:bg-[#f5f5f5]";
  const btnActive = "bg-[#23A6F0] text-white border-[#E9E9E9]";
  const btnDisabled =
    "bg-[#F3F3F3] text-[#BDBDBD] border-[#BDBDBD] cursor-not-allowed";

  return (
    <ul className="flex flex-wrap justify-center items-center gap-2 mt-10 mb-20 font-montserrat">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${btnBase} ${currentPage === 1 ? btnDisabled : btnDefault} w-[72px]`}
          aria-label="Previous page"
        >
          Prev
        </button>
      </li>

      {pages.map((p, idx) =>
        p === DOTS ? (
          <li key={`dots-${idx}`}>
            <span className="min-w-10 h-10 px-3 flex items-center justify-center text-[#BDBDBD] select-none">
              {DOTS}
            </span>
          </li>
        ) : (
          <li key={p}>
            <button
              onClick={() => onPageChange(p)}
              className={`${btnBase} ${p === currentPage ? btnActive : btnDefault}`}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </button>
          </li>
        )
      )}

      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${btnBase} ${currentPage === totalPages ? btnDisabled : btnDefault} w-[72px]`}
          aria-label="Next page"
        >
          Next
        </button>
      </li>
    </ul>
  );
}
