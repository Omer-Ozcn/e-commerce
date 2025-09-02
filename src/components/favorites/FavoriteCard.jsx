import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../store/actions/favActions";
import { ShoppingCart, HeartOff } from "lucide-react";
import { addToCart } from "../../store/thunks/cartThunks"; 

const formatPrice = (v) =>
  typeof v === "number" && !Number.isNaN(v) ? `₺${v.toString()}` : "";

export default function FavoriteCard({ product }) {
  const dispatch = useDispatch();

  const {
    id,
    name,
    title,
    price,
    images = [],
    imgUrl,
    image,
  } = product || {};

  const img =
    images?.[0]?.url || imgUrl || image || "https://via.placeholder.com/400x500?text=No+Image";

  const handleRemove = () => dispatch(removeFavorite(id));
  const handleAddToCart = () => dispatch(addToCart(product, 1));

  return (
    <article className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <Link to={`/product/${id}`} className="block aspect-[4/5] bg-gray-50">
        <img
          src={img}
          alt={name || title || "Product"}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-4">
        <Link to={`/product/${id}`} className="block text-center">
          <h3 className="font-semibold text-base leading-snug line-clamp-2">
            {name || title}
          </h3>
        </Link>
        <p className="mt-1 text-center text-[#23A6F0] font-bold">
          {formatPrice(price)}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link
            to={`/product/${id}`}
            className="inline-flex justify-center items-center px-3 py-2 rounded-xl bg-[#23A6F0] text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Gör
          </Link>

          <button
            type="button"
            onClick={handleRemove}
            className="inline-flex justify-center items-center px-3 py-2 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
            title="Favorilerden kaldır"
          >
            <HeartOff className="w-4 h-4 mr-1" />
            Sil
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-3 w-full inline-flex justify-center items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold hover:bg-gray-50 transition"
          title="Sepete ekle"
        >
          <ShoppingCart className="w-4 h-4" />
          Sepete Ekle
        </button>
      </div>
    </article>
  );
}
