import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosInstance";
import Breadcrumb from "../components/common/Breadcrumb";

const TL = (n = 0) =>
  (Number(n) || 0).toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  });

const fmtDate = (s) => {
  if (!s) return "-";
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return s;
  const pad = (x) => String(x).padStart(2, "0");
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};

const maskLast4 = (num) => {
  const s = String(num || "");
  const last4 = s.slice(-4).padStart(4, "•");
  return `•••• •••• •••• ${last4}`;
};

const mapProducts = (o = {}) => {
  const arr = Array.isArray(o.products) ? o.products : [];
  return arr.map((p) => ({
    id: p.id ?? p.product_id ?? `temp-${Math.random()}`,
    name: p.name || "Ürün",
    description: p.description || p.detail || "",
    count: Number(p.count || 0),
    price: Number(p.price || 0),
    img: p.images?.[0]?.url || "",
  }));
};

export default function Orders() {
  const token = useSelector((s) => s.user?.token) || localStorage.getItem("token");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/order", {
        headers: token ? { Authorization: token } : {},
      });
      const list = Array.isArray(res?.data) ? res.data : [];
      setOrders(list);
    } catch (e) {
      alert("Siparişler yüklenemedi: " + (e?.response?.data?.message || e.message));
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, []);

  const items = useMemo(() => {
    return (orders || [])
      .filter((o) => o && o.price != null && Array.isArray(o.products) && o.products.length > 0)
      .sort((a, b) => new Date(b.order_date || 0) - new Date(a.order_date || 0));
  }, [orders]);

  return (
    <main className="bg-[#FAFAFA] min-h-[60vh]">
      <Breadcrumb title="Siparişlerim" />

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-[#252B42]">
            Siparişlerim
            {items.length > 0 && (
              <span className="ml-2 text-base font-semibold text-[#737373]">
                ({items.length})
              </span>
            )}
          </h1>
          <button
            onClick={fetchOrders}
            className="h-10 px-4 rounded-lg bg-[#23A6F0] text-white font-semibold shadow hover:shadow-md active:scale-[0.99] transition"
            disabled={loading}
          >
            {loading ? "Yükleniyor…" : "Yenile"}
          </button>
        </div>

        <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-[1.2fr,1fr,0.8fr,0.8fr] gap-3 px-6 py-3 bg-gradient-to-r from-[#F8FAFC] to-white border-b text-[#737373] font-semibold">
            <div>Sipariş</div>
            <div>Tarih</div>
            <div className="text-right">Toplam</div>
            <div className="text-right">Ürün</div>
          </div>

          {items.map((o) => {
            const prods = mapProducts(o);
            const itemsCount =
              prods.reduce((s, p) => s + Number(p.count || 0), 0) || prods.length || 0;
            const isOpen = openId === o.id;

            return (
              <div key={`order-${o.id}`} className="border-b last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : o.id)}
                  className={`w-full grid grid-cols-[1.2fr,1fr,0.8fr,0.8fr] gap-3 px-6 py-4 text-[#252B42] items-center hover:bg-[#F9FAFB] transition text-left ${
                    isOpen ? "bg-[#F6FAFF]" : ""
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="font-bold">
                    <span className="inline-block mr-2 text-[#23A6F0]">●</span>
                    Sipariş #{o.id}
                  </div>
                  <div className="font-medium">{fmtDate(o.order_date)}</div>
                  <div className="font-extrabold text-right">{TL(o.price ?? 0)}</div>
                  <div className="text-right text-[#737373]">
                    {itemsCount} {itemsCount > 1 ? "ürün" : "ürün"}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="mt-2 rounded-xl border bg-white shadow-sm overflow-hidden">
                      <div className="px-4 py-3 border-b bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-2">
                        <div className="font-bold text-[#252B42]">Sipariş Detayları</div>
                        <div className="text-sm text-[#737373] flex gap-4">
                          <span>
                            Adres ID:{" "}
                            <span className="font-semibold text-[#252B42]">
                              {o.address_id ?? "-"}
                            </span>
                          </span>
                          <span>
                            Ödeme:{" "}
                            <span className="font-semibold text-[#252B42]">
                              {o.card_no ? maskLast4(o.card_no) : "—"}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-[1fr,90px,120px,120px] gap-3 px-4 py-2 text-sm font-semibold text-[#737373]">
                        <div>Ürün</div>
                        <div className="text-right">Adet</div>
                        <div className="text-right">Birim</div>
                        <div className="text-right">Ara Toplam</div>
                      </div>

                      <div className="divide-y">
                        {prods.map((p, idx) => {
                          const unit = Number(p.price) || 0;
                          const cnt = Number(p.count) || 0;
                          return (
                            <div
                              key={`${o.id}-${p.id}-${idx}`}
                              className="grid grid-cols-[1fr,90px,120px,120px] gap-3 px-4 py-3 items-center"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  src={p.img}
                                  alt={p.name}
                                  className="w-12 h-12 rounded border object-cover flex-shrink-0"
                                  onError={(e) => {
                                    e.currentTarget.src =
                                      "https://via.placeholder.com/48x48.png?text=%20";
                                  }}
                                />
                                <div className="min-w-0">
                                  <div className="font-semibold text-[#252B42] truncate">
                                    {p.name}
                                  </div>
                                  {!!p.description && (
                                    <div className="text-xs text-[#737373] truncate">
                                      {p.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">{cnt}</div>
                              <div className="text-right">{TL(unit)}</div>
                              <div className="text-right font-semibold">{TL(unit * cnt)}</div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-end gap-6 px-4 py-3 border-t bg-[#F8FAFC]">
                        <div className="text-base font-extrabold text-[#252B42]">
                          Toplam: {TL(o.price ?? 0)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {!loading && items.length === 0 && (
            <div className="px-6 py-10 text-center text-[#737373]">
              Henüz bir siparişiniz yok.
            </div>
          )}
          {loading && (
            <div className="px-6 py-10 text-center text-[#737373]">Yükleniyor…</div>
          )}
        </div>
      </section>
    </main>
  );
}
