import { useSelector, useDispatch } from "react-redux";
import { clearFavorites } from "../store/actions/favActions";
import { Link } from "react-router-dom";
import FavoritesToolbar from "../components/favorites/FavoritesToolbar";
import FavoritesGrid from "../components/favorites/FavoritesGrid";
import EmptyFavorites from "../components/favorites/EmptyFavorites";

export default function FavoritesPage() {
  const favorites = useSelector((s) => s.favorites.items);
  const dispatch = useDispatch();

  const handleClear = () => dispatch(clearFavorites());

  return (
    <main className="max-w-screen-xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Favorilerim</h1>
        <FavoritesToolbar
          count={favorites.length}
          onClear={handleClear}
        />
      </div>

      {!favorites.length ? (
        <EmptyFavorites />
      ) : (
        <FavoritesGrid items={favorites} />
      )}

      <div className="mt-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#23A6F0] text-white font-semibold hover:opacity-90 transition"
        >
          Alışverişe Devam Et
        </Link>
      </div>
    </main>
  );
}
