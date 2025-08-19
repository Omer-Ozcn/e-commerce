export default function ProductInfo({ product }) {
  if (!product) return null;

  const renderStars = (rating = 0) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full || (i === full && half);
          return (
            <span key={i} className={`text-lg mr-1 ${filled ? "text-[#F3CD03]" : "text-[#E0E0E0]"}`}>
              ★
            </span>
          );
        })}
      </div>
    );
  };

  const price = Number(product.price) || 0;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[#252B42]">
        {product.name}
      </h1>

      <div className="flex items-center gap-2">
        {renderStars(product.rating)}
        {}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl font-extrabold text-[#252B42]">
          ₺{price.toFixed(2)}
        </span>
      </div>

      <p className="text-sm">
        <span className="text-[#737373] font-semibold">Stock</span>
        <span className="text-[#737373]"> : </span>
        <span className="text-[#23856D] font-semibold">{product.stock}</span>
      </p>

      {product.description && (
        <p className="text-sm text-[#737373] leading-relaxed border-b border-[#E6E6E6] pb-4">
          {product.description}
        </p>
      )}
    </div>
  );
}
