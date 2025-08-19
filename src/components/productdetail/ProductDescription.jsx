import { useState } from "react";

export default function ProductDescription({ product }) {
  if (!product) return null;

  const [tab, setTab] = useState("desc"); 
  const reviewCount =
    typeof product.reviews_count === "number"
      ? product.reviews_count
      : Array.isArray(product.reviews)
      ? product.reviews.length
      : 0;

  const renderStars = (rating = 0) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full || (i === full && half);
          return (
            <span
              key={i}
              className={`text-lg mr-1 ${
                filled ? "text-[#F3CD03]" : "text-[#E0E0E0]"
              }`}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[414px] md:max-w-[1056px]">
        <nav
          className="h-[91px] flex items-center justify-center md:justify-start"
          role="tablist"
          aria-label="Product information"
        >
          <ul className="flex items-center gap-6 md:gap-8">
            <li>
              <button
                role="tab"
                aria-selected={tab === "desc"}
                aria-controls="tab-desc"
                id="tab-desc-btn"
                onClick={() => setTab("desc")}
                className={`px-3 py-2 text-sm font-semibold ${
                  tab === "desc"
                    ? "text-[#737373] underline md:no-underline"
                    : "text-[#737373]"
                }`}
              >
                Description
              </button>
            </li>
            <li>
              <button
                role="tab"
                aria-selected={tab === "info"}
                aria-controls="tab-info"
                id="tab-info-btn"
                onClick={() => setTab("info")}
                className={`px-3 py-2 text-sm font-bold ${
                  tab === "info" ? "text-[#252B42]" : "text-[#737373]"
                }`}
              >
                Additional Information
              </button>
            </li>
            <li>
              <button
                role="tab"
                aria-selected={tab === "reviews"}
                aria-controls="tab-reviews"
                id="tab-reviews-btn"
                onClick={() => setTab("reviews")}
                className={`px-3 py-2 text-sm font-bold ${
                  tab === "reviews" ? "text-[#252B42]" : "text-[#737373]"
                }`}
              >
                Reviews{" "}
                <span className="text-[#23856D] font-bold">
                  ({reviewCount})
                </span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block w-full h-px bg-[#ECECEC]" />

        <div className="mx-auto w-[332px] md:w-full flex flex-col items-center gap-20 md:gap-[30px] md:py-6 md:pb-12">
          {tab === "desc" && (
            <div
              id="tab-desc"
              role="tabpanel"
              aria-labelledby="tab-desc-btn"
              className="w-full md:w-[1056px]"
            >
              <h3 className="text-[24px] leading-8 font-bold text-[#252B42] mb-3">
                {product.name}
              </h3>
              <p className="text-[14px] leading-5 text-[#737373]">
                {product.description || "—"}
              </p>
            </div>
          )}

          {tab === "info" && (
            <div
              id="tab-info"
              role="tabpanel"
              aria-labelledby="tab-info-btn"
              className="w-full md:w-[1056px]"
            >
              <h3 className="text-[24px] leading-8 font-bold text-[#252B42] mb-3">
                Additional Information
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[320px] w-full border border-[#E6E6E6] text-sm">
                  <tbody>
                    <tr className="border-b border-[#E6E6E6]">
                      <td className="px-3 py-2 font-semibold text-[#737373]">
                        Category ID
                      </td>
                      <td className="px-3 py-2">{product.category_id ?? "—"}</td>
                    </tr>
                    <tr className="border-b border-[#E6E6E6]">
                      <td className="px-3 py-2 font-semibold text-[#737373]">
                        Store ID
                      </td>
                      <td className="px-3 py-2">{product.store_id ?? "—"}</td>
                    </tr>
                    <tr className="border-b border-[#E6E6E6]">
                      <td className="px-3 py-2 font-semibold text-[#737373]">
                        Stock
                      </td>
                      <td className="px-3 py-2">{product.stock ?? "—"}</td>
                    </tr>
                    <tr className="border-b border-[#E6E6E6]">
                      <td className="px-3 py-2 font-semibold text-[#737373]">
                        Rating
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-2">
                          {renderStars(product.rating)}
                          <span className="text-[#737373]">
                            {product.rating ?? "—"}/5
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-[#737373]">
                        Sold
                      </td>
                      <td className="px-3 py-2">{product.sell_count ?? "—"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "reviews" && (
            <div
              id="tab-reviews"
              role="tabpanel"
              aria-labelledby="tab-reviews-btn"
              className="w-full md:w-[1056px]"
            >
              <h3 className="text-[24px] leading-8 font-bold text-[#252B42] mb-3">
                Reviews ({reviewCount})
              </h3>

              {reviewCount === 0 ? (
                <p className="text-[14px] leading-5 text-[#737373]">
                  There are no reviews yet.
                </p>
              ) : (
                <ul className="flex flex-col gap-4">
                  {(product.reviews || []).map((rv, i) => (
                    <li key={i} className="border-b border-[#E6E6E6] pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        {renderStars(rv.rating || 0)}
                        <span className="text-xs text-[#737373]">
                          {rv.author || "Anonymous"}
                        </span>
                      </div>
                      <p className="text-sm text-[#252B42]">
                        {rv.comment || ""}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
