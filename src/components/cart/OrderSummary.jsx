import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TL = (n = 0) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 })
    .format(Number(n) || 0);

const SHIPPING_BASE = 29.99;
const FREE_SHIPPING_THRESHOLD = 150;

export default function OrderSummary() {
  const cart = useSelector((s) => s.cart?.cart || []);
  const [coupon, setCoupon] = useState("");
  const history = useHistory();

  const subtotal = useMemo(
    () =>
      cart.filter((it) => it.checked !== false).reduce(
        (sum, it) => sum + (Number(it.count) || 1) * (Number(it?.product?.price) || 0),
        0
      ),
    [cart]
  );

  const shippingDiscount = subtotal >= FREE_SHIPPING_THRESHOLD ? SHIPPING_BASE : 0;
  const shippingPayable = Math.max(0, SHIPPING_BASE - shippingDiscount);
  const grandTotal = subtotal + shippingPayable;

  const hasItems = cart.some((it) => it.checked !== false);
  const goCheckout = () => { if (hasItems) history.push("/checkout"); };

  return (
    <aside className="w-full">
      <button
        type="button"
        className="w-full h-12 rounded-md bg-[#252B42] text-white font-bold mb-4"
        disabled={!hasItems}
        title={!hasItems ? "Sepette seçili ürün yok" : "Sepeti Onayla"}
        onClick={goCheckout}
      >
        Sepeti Onayla
      </button>

      <div className="rounded-lg border border-[#E6E6E6] bg-white p-5">
        <h3 className="text-[20px] font-bold text-[#252B42] mb-4">Sipariş Özeti</h3>

        <div className="flex items-center justify-between py-2">
          <span className="text-[#737373]">Ürünün Toplamı</span>
          <span className="font-bold text-[#252B42]">{TL(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between py-2">
          <span className="text-[#737373]">Kargo Toplam</span>
          <span className="font-bold text-[#252B42]">{TL(SHIPPING_BASE)}</span>
        </div>

        {shippingDiscount > 0 && (
          <div className="flex items-center justify-between py-2">
            <span className="text-[#737373]">
              {FREE_SHIPPING_THRESHOLD} TL ve Üzeri Kargo Bedava (Satıcı Karşılar)
            </span>
            <span className="font-bold text-[#23856D]">-{TL(shippingDiscount)}</span>
          </div>
        )}

        <hr className="my-3 border-[#E6E6E6]" />

        <div className="flex items-center justify-between py-2">
          <span className="text-[#252B42] font-bold">Toplam</span>
          <span className="text-[#252B42] font-extrabold">{TL(grandTotal)}</span>
        </div>

        <div className="mt-4 flex">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="İndirim kodu gir"
            className="flex-1 h-10 px-3 border border-[#E6E6E6] rounded-l-md text-sm"
            disabled
          />
          <button
            type="button"
            className="h-10 px-4 bg-[#F5F5F5] border border-l-0 border-[#E6E6E6] rounded-r-md text-sm font-semibold cursor-not-allowed"
            title="Bu görev sonraki aşamada"
            disabled
          >
            Uygula
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full h-12 rounded-md bg-[#252B42] text-white font-bold mt-4"
        disabled={!hasItems}
        onClick={goCheckout}
      >
        Sepeti Onayla
      </button>
    </aside>
  );
}
