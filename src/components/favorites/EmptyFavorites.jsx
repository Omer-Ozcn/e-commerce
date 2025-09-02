import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl bg-white">
      <div className="w-14 h-14 rounded-full border flex items-center justify-center mb-4">
        <Heart className="w-6 h-6 text-gray-500" />
      </div>
      <h3 className="text-xl font-semibold">Henüz favoriniz yok</h3>
      <p className="mt-2 text-gray-500 max-w-md">
        Ürün sayfalarındaki kalp ikonuna tıklayarak favorilerinize ekleyin.
      </p>
      <Link
        to="/shop"
        className="mt-5 inline-flex items-center px-4 py-2 rounded-xl bg-[#23A6F0] text-white font-semibold hover:opacity-90 transition"
      >
        Alışverişe Başla
      </Link>
    </div>
  );
}
