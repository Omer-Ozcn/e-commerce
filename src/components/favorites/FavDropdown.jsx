import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../store/actions/favActions";
import { Link } from "react-router-dom";

export default function FavDropdown({ onClose }) {
  const favorites = useSelector((s) => s.favorites.items);
  const dispatch = useDispatch();

  if (!favorites.length) {
    return (
      <div className="absolute right-0 top-full mt-2 w-80 bg-white border rounded shadow-md p-4 z-50">
        <p className="text-sm text-gray-500">Favoriler boş</p>
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white border rounded shadow-md p-4 z-50">
      <h3 className="font-bold mb-2">Favoriler ({favorites.length})</h3>
      <ul className="space-y-2">
        {favorites.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <Link to={`/product/${item.id}`} className="flex gap-2 items-center">
              <img
                src={item.images?.[0]?.url || item.imgUrl || item.image || ""}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <span className="text-sm">{item.name}</span>
            </Link>
            <button
              onClick={() => dispatch(removeFavorite(item.id))}
              className="text-red-500 text-xs"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
      <Link
        to="/favorites"
        onClick={onClose}
        className="block mt-3 text-center bg-[#23A6F0] text-white py-2 rounded"
      >
        Favorileri Gör
      </Link>
    </div>
  );
}
