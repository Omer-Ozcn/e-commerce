import { useState, useMemo } from "react";

export default function ProductGallery({ product }) {
  const images = useMemo(() => {
    if (!product) return [];
    const arr = Array.isArray(product.images) ? product.images : [];
    const urls = arr.map((x) => x?.url).filter(Boolean);
    return urls.length ? urls : [];
  }, [product]);

  const [active, setActive] = useState(0);
  const nextImg = () => setActive((i) => (i + 1) % images.length);
  const prevImg = () => setActive((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="md:w-[505px]">
      <div className="relative w-full h-[260px] md:h-[420px] overflow-hidden bg-[#F5F5F5] rounded-lg">
        {images[active] ? (
          <img
            src={images[active]}
            alt={product?.name || "product"}
            className="w-full h-full object-contain md:object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow grid place-items-center"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow grid place-items-center"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-4 mt-4 md:mt-[15px]">
          {images.slice(0, 3).map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-20 h-20 md:w-[100px] md:h-[100px] rounded border ${
                active === i ? "border-[#23856D]" : "border-[#E6E6E6]"
              }`}
              aria-label={`Switch to image ${i + 1}`}
            >
              <img
                src={img}
                alt={`${product?.name || "product"} ${i + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
