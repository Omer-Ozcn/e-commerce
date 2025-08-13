import { useParams, Link } from "react-router-dom";
import productDetailData from "../../data/productdetails/ProductDetailData";

export default function ProductInfo() {
  const { id } = useParams();
  const product = productDetailData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="py-10 px-4 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <Link to="/shop" className="text-[#23856D] underline">Back to Shop</Link>
      </div>
    );
  }

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
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[#252B42]">
        {product.title}
      </h1>

      <div className="flex items-center gap-2">
        {renderStars(product.rating)}
        <span className="text-sm text-[#737373]">{product.reviews} Reviews</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl font-extrabold text-[#252B42]">
          ${product.discountPrice.toFixed(2)}
        </span>
        {product.price !== product.discountPrice && (
          <span className="text-sm font-bold text-[#BDBDBD] line-through">
            ${product.price.toFixed(2)}
          </span>
        )}
      </div>

      <p className="text-sm">
        <span className="text-[#737373] font-semibold">Availability</span>
        <span className="text-[#737373]"> : </span>
        <span className="text-[#23856D] font-semibold">{product.availability}</span>
      </p>

      <p className="text-sm text-[#737373] leading-relaxed border-b border-[#E6E6E6] pb-4">
        {product.description}
      </p>

      <div className="flex items-center gap-3">
        {(product.colorOptions || []).map((c, i) => (
          <span
            key={i}
            style={{ backgroundColor: c }}
            className="w-5 h-5 rounded-full border"
            title={c}
          />
        ))}
      </div>
    </div>
  );
}
