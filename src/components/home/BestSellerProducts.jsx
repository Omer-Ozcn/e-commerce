import { useEffect, useState, useMemo } from "react";
import axiosInstance from "../../api/axiosInstance";
import ProductCard from "../shop/ProductCard";

export default function BestSellerProducts({ limit = 8, title = "BESTSELLER PRODUCTS" }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setErr("");

        // ✅ DÜZELTİLDİ: /products
        // Birçok back-end { products: [], total } döndürür.
        const res = await axiosInstance.get(`/products?limit=${limit}&offset=0`);
        const list = Array.isArray(res?.data?.products)
          ? res.data.products
          : Array.isArray(res?.data)
          ? res.data
          : [];

        // rating’e göre sıralama (backend desteklemiyorsa client’ta yap)
        list.sort((a, b) => (Number(b?.rating) || 0) - (Number(a?.rating) || 0));

        if (alive) setItems(list.slice(0, limit));
      } catch (e) {
        if (alive) setErr(e?.response?.data?.message || e.message || "Ürünler alınamadı.");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, [limit]);

  const grid = useMemo(
    () => items.map((p) => (
      <div key={p.id} className="w-full">
        <ProductCard product={p} />
      </div>
    )),
    [items]
  );

  return (
    <section className="font-[Montserrat] bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="text-center">
          <h2 className="text-[#252B42] font-extrabold text-[18px] md:text-[22px] tracking-[0.2px]">
            {title}
          </h2>
          <p className="mt-2 text-xs text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical physics.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {loading && [...Array(limit)].map((_, i) => (
            <div key={i} className="animate-pulse border rounded-lg overflow-hidden bg-white">
              <div className="bg-gray-200 aspect-[3/4]" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
              </div>
            </div>
          ))}
          {!loading && err && (
            <div className="col-span-full text-center text-red-600">{err}</div>
          )}
          {!loading && !err && grid}
        </div>
      </div>
    </section>
  );
}
