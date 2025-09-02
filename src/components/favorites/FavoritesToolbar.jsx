import { Trash2 } from "lucide-react";

export default function FavoritesToolbar({ count = 0, onClear }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm md:text-base text-gray-500">
        {count} {count === 1 ? "ürün" : "ürün"}
      </span>

      {count > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 active:scale-[.99] transition"
        >
          <Trash2 className="w-4 h-4" />
          Tümünü Sil
        </button>
      )}
    </div>
  );
}
