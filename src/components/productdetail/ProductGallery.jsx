import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productDetailData from "../../data/productdetails/ProductDetailData";

export default function ProductGallery() {
  const { id } = useParams();
  const product = productDetailData.find((p) => p.id === Number(id));

  const images = useMemo(() => {
    if (!product) return [];
    const rest = (product.gallery || []).filter((g) => g !== product.imgUrl);
    return [product.imgUrl, ...rest];
  }, [product]);

  const [active, setActive] = useState(0);
  const nextImg = () => setActive((i) => (i + 1) % images.length);
  const prevImg = () => setActive((i) => (i - 1 + images.length) % images.length);

  if (!product) {
    return (
      <div className="py-10 px-4 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <Link to="/shop" className="text-[#23856D] underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="md:w-[505px]">
      <div className="relative w-full h-[260px] md:h-[420px] overflow-hidden bg-[#F5F5F5] rounded-lg">
        <img
          src={images[active]}
          alt={`${product.title} main`}
          className="w-full h-full object-contain md:object-cover"
        />
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
                alt={`${product.title} ${i + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
