import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const {
    id,
    name,
    price,
    images = [],
    rating,
    category_id,
    category = {},
    gender, 
  } = product || {};

  const img =
    images?.[0]?.url ||
    images?.[0] ||
    "https://via.placeholder.com/400x400?text=Product";

  const genderPath = (gender === "k" && "women") || (gender === "e" && "men") || "unisex";
  const categorySlug =
    (category?.slug ||
      (category?.title || "")
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")) || "category";

  const detailHref = `/product/${id}`;

  return (
    <article className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition">
      <Link to={detailHref} className="block aspect-square overflow-hidden bg-gray-50">
        <img src={img} alt={name} className="w-full h-full object-cover" loading="lazy" />
      </Link>

      <div className="p-3 md:p-4">
        <Link to={detailHref} className="block font-semibold text-[#252B42] line-clamp-2">
          {name}
        </Link>

        <div className="mt-1 text-sm text-[#737373] flex items-center gap-2">
          {rating ? `★ ${Number(rating).toFixed(1)}` : "★ 0.0"}
          {category_id && (
            <>
              <span>·</span>
              <Link
                to={`/shop/${genderPath}/${categorySlug}/${category_id}`}
                className="hover:underline"
              >
                {category?.title || "Category"}
              </Link>
            </>
          )}
        </div>

        <div className="mt-2 font-bold text-[#23856D]">${Number(price || 0).toFixed(2)}</div>

        <div className="mt-3">
          <Link
            to={detailHref}
            className="inline-block w-full text-center px-4 py-2 rounded bg-[#23A6F0] text-white text-sm font-semibold hover:bg-[#1b8ed6] transition"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
