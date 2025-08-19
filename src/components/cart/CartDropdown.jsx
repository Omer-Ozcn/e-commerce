import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, toggleChecked } from "../../store/thunks/cartThunks";

const fmt = (n) =>
  (Number(n) || 0).toLocaleString("tr-TR", { style: "currency", currency: "TRY" });

export default function CartDropdown({ onClose = () => {} }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart?.cart || []);

  const total = items.reduce(
    (sum, it) => sum + (Number(it?.product?.price) || 0) * (Number(it.count) || 1),
    0
  );

  // === Overlay: hem mobil hem desktop (mobilde karartma, desktop'ta transparan) ===
  const Overlay = () => (
    <button
      className="fixed inset-0 z-[55] bg-black/20 md:bg-transparent"
      aria-label="Kapat"
      onClick={onClose}
    />
  );

  // ==== Boş sepet ====
  if (!items.length) {
    return (
      <>
        <Overlay />
        <div
          className="
            fixed left-1/2 -translate-x-1/2 top-[68px] w-[94vw] max-w-[420px]
            md:absolute md:translate-x-0 md:left-auto md:right-0 md:top-full md:mt-2 md:w-[360px]
            bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[60]
          "
        >
          <p className="text-sm text-gray-600">Sepetiniz boş.</p>
        </div>
      </>
    );
  }

  // ==== Ürünlü sepet ====
  return (
    <>
      <Overlay />
      <div
        className="
          fixed left-1/2 -translate-x-1/2 top-[68px] w-[94vw] max-w-[420px]
          md:absolute md:translate-x-0 md:left-auto md:right-0 md:top-full md:mt-2 md:w-[360px]
          bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-[60]
        "
      >
        <h4 className="text-base font-bold text-[#252B42] mb-3">
          Sepetim ({items.length} Ürün)
        </h4>

        <div className="max-h-[60vh] md:max-h-[360px] overflow-auto divide-y">
          {items.map((it) => {
            const p = it.product || {};
            const img = p.images?.[0]?.url || p.imgUrl;
            return (
              <div key={p.id} className="py-3 flex gap-3">
                <img
                  src={img}
                  alt={p.name || p.title}
                  className="w-16 h-16 rounded object-cover border flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-sm font-semibold text-[#252B42] line-clamp-2">
                      {p.name || p.title}
                    </div>
                    <button
                      className="text-xs text-gray-400 hover:text-red-500"
                      onClick={() => dispatch(removeFromCart(p.id))}
                      aria-label="Kaldır"
                      title="Kaldır"
                    >
                      ✕
                    </button>
                  </div>

                  <label className="mt-1 inline-flex items-center gap-2 text-xs text-gray-500">
                    <input
                      type="checkbox"
                      checked={!!it.checked}
                      onChange={() => dispatch(toggleChecked(p.id))}
                    />
                    <span>Seçili</span>
                  </label>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 rounded border hover:bg-gray-50"
                        onClick={() => dispatch(addToCart(p, -1))}
                        aria-label="Azalt"
                      >
                        –
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">{it.count}</span>
                      <button
                        className="w-8 h-8 rounded border hover:bg-gray-50"
                        onClick={() => dispatch(addToCart(p, +1))}
                        aria-label="Arttır"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-sm font-bold text-[#f97316] shrink-0">
                      {fmt(p.price)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-600">Toplam</div>
          <div className="text-base font-extrabold text-[#252B42]">{fmt(total)}</div>
        </div>

        <div className="mt-3 flex gap-3">
          <Link
            to="/cart"
            onClick={onClose}
            className="flex-1 h-11 grid place-items-center rounded border hover:bg-gray-50 text-sm font-semibold"
          >
            Sepete Git
          </Link>
          <Link
            to="/checkout"
            onClick={onClose}
            className="flex-1 h-11 grid place-items-center rounded bg-[#F97316] text-white text-sm font-semibold hover:opacity-95"
          >
            Siparişi Tamamla
          </Link>
        </div>
      </div>
    </>
  );
}
