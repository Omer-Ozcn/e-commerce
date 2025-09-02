import FavoriteCard from "./FavoriteCard";

export default function FavoritesGrid({ items = [] }) {
  return (
    <section
      aria-label="favorite products"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {items.map((p) => (
        <FavoriteCard key={p.id} product={p} />
      ))}
    </section>
  );
}
