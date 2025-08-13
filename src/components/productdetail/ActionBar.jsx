import { Heart, ShoppingCart, Eye } from "lucide-react";

export default function ActionBar({
  className = "",
  onSelectOptions = () => {},
  onWishlist = () => {},
  onAddToCart = () => {},
  onQuickView = () => {},
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={onSelectOptions}
        aria-label="Select Options"
        className="px-5 py-3 rounded-lg font-semibold text-white bg-[#23A6F0] hover:opacity-90 transition md:px-[40px] md:py-[15px]"
      >
        Select Options
      </button>

      <button
        type="button"
        onClick={onWishlist}
        aria-label="Add to wishlist"
        className="w-10 h-10 grid place-items-center rounded-full border border-[#E6E6E6] bg-white hover:bg-[#F9FAFB] transition md:w-[50px] md:h-[50px]"
      >
        <Heart className="w-5 h-5 text-[#23A6F0]" />
      </button>

      <button
        type="button"
        onClick={onAddToCart}
        aria-label="Add to cart"
        className="w-10 h-10 grid place-items-center rounded-full border border-[#E6E6E6] bg-white hover:bg-[#F9FAFB] transition md:w-[50px] md:h-[50px]"
      >
        <ShoppingCart className="w-5 h-5 text-[#252B42]" />
      </button>

      <button
        type="button"
        onClick={onQuickView}
        aria-label="Quick view"
        className="w-10 h-10 grid place-items-center rounded-full border border-[#E6E6E6] bg-white hover:bg-[#F9FAFB] transition md:w-[50px] md:h-[50px]"
      >
        <Eye className="w-5 h-5 text-black" />
      </button>
    </div>
  );
}
