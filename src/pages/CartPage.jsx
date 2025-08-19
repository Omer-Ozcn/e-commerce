import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { addToCart, removeFromCart, toggleChecked, setAllChecked } from "../store/thunks/cartThunks";

const money = (n) => (Number(n) || 0).toLocaleString("tr-TR", { style: "currency", currency: "TRY" });

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart?.cart || []);
  const allChecked = items.length > 0 && items.every((i) => i.checked);
  const selected = items.filter((i) => i.checked);
  const total = selected.reduce(
    (sum, it) => sum + (Number(it.product?.price) || 0) * (Number(it.count) || 0),
    0
  );

  return (
    <main className="max-w-[1088px] mx-auto px-4 py-8 font-[Montserrat]">
      <h1 className="text-2xl font-bold text-[#252B42]">
        Sepetim <span className="text-[#737373] text-lg">({items.length} ürün)</span>
      </h1>

      {!items.length ? (
        <div className="mt-8 bg-white rounded-lg border p-8 text-center">
          <p className="text-[#737373]">Sepetiniz boş.</p>
          <Link to="/shop" className="inline-block mt-4 px-5 py-3 rounded bg-[#23A6F0] text-white font-semibold">
            Alışverişe Başla
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-6 bg-white rounded-lg border divide-y">
            <div className="flex items-center px-4 py-3 text-sm text-[#737373]">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={allChecked} onChange={(e) => dispatch(setAllChecked(e.target.checked))} />
                <span>Tümünü Seç</span>
              </label>
              <span className="ml-auto hidden md:block w-[120px] text-right">Adet</span>
              <span className="ml-6 hidden md:block w-[120px] text-right">Fiyat</span>
            </div>

            {items.map(({ product, count, checked }) => {
              const img = product.images?.[0]?.url || product.imgUrl;
              return (
                <div key={product.id} className="px-4 py-4 flex items-center gap-4">
                  <input type="checkbox" checked={!!checked} onChange={() => dispatch(toggleChecked(product.id))} className="mt-1" />

                  <img src={img} alt={product.name || product.title} className="w-16 h-16 rounded object-cover border" />

                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#252B42] line-clamp-2">{product.name || product.title}</div>
                    <div className="text-xs text-[#737373]">Stok: {product.stock ?? "—"}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded border hover:bg-gray-50" onClick={() => dispatch(addToCart(product, -1))}>–</button>
                    <span className="w-8 text-center">{count}</span>
                    <button className="w-8 h-8 rounded border hover:bg-gray-50" onClick={() => dispatch(addToCart(product, +1))}>+</button>
                  </div>

                  <div className="w-[100px] text-right font-bold text-[#f97316]">{money(product.price)}</div>

                  <button className="ml-3 text-gray-400 hover:text-red-500" title="Kaldır" onClick={() => dispatch(removeFromCart(product.id))}>
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-end gap-3">
            <div className="text-[#737373]">
              Seçili ürün sayısı: <span className="font-semibold">{selected.length}</span>
            </div>
            <div className="text-xl font-extrabold text-[#252B42]">Toplam: {money(total)}</div>
            <Link to="/checkout" className="px-5 py-3 rounded bg-[#23A6F0] text-white font-semibold">Devam Et</Link>
          </div>
        </>
      )}
    </main>
  );
}
