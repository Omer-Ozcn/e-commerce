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

const productsOf = (o = {}) => {
  const arr = Array.isArray(o.products) ? o.products : [];
  return arr.map((p) => ({
    product_id: p.product_id ?? p.id ?? "-",
    count: Number(p.count || 0),
    detail: p.detail || "-",
  }));
};

export default function Orders() {
  const token =
    useSelector((s) => s.user?.token) || localStorage.getItem("token");

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
      list.sort((a, b) => new Date(b.order_date) - new Date(a.order_date));
      setOrders(list);
    } catch (e) {
      alert("Siparişler yüklenemedi: " + (e?.response?.data?.message || e.message));
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, []);

  const totalOrders = useMemo(() => orders.length, [orders]);

  return (
    <main className="bg-[#FAFAFA] min-h-[60vh]">
      <Breadcrumb title="Siparişlerim" />

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-[#252B42]">
            Siparişlerim
            {totalOrders > 0 && (
              <span className="ml-2 text-base font-semibold text-[#737373]">
                ({totalOrders})
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
            <div>Order</div>
            <div>Tarih</div>
            <div className="text-right">Toplam</div>
            <div className="text-right">Ürün</div>
          </div>

          {orders.map((o) => {
            const prods = productsOf(o);
            const itemsCount =
              prods.reduce((s, p) => s + Number(p.count || 0), 0) || prods.length || 0;

            return (
              <div key={`order-${o.id}`} className="border-b last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenId(openId === o.id ? null : o.id)}
                  className={`w-full grid grid-cols-[1.2fr,1fr,0.8fr,0.8fr] gap-3 px-6 py-4 text-[#252B42] items-center hover:bg-[#F9FAFB] transition text-left ${
                    openId === o.id ? "bg-[#F6FAFF]" : ""
                  }`}
                  aria-expanded={openId === o.id}
                >
                  <div className="font-bold">
                    <span className="inline-block mr-2 text-[#23A6F0]">●</span>
                    Sipariş #{o.id}
                  </div>
                  <div className="font-medium">{fmtDate(o.order_date)}</div>
                  <div className="font-extrabold text-right">
                    {TL(o.price ?? 0)}
                  </div>
                  <div className="text-right text-[#737373]">
                    {itemsCount} {itemsCount > 1 ? "ürün" : "ürün"}
                  </div>
                </button>

                {openId === o.id && (
                  <div className="px-6 pb-6">
                    <div className="mt-2 rounded-xl border bg-white shadow-sm overflow-hidden">
                      <div className="px-4 py-3 border-b bg-[#F8FAFC] font-bold text-[#252B42]">
                        Sipariş Detayları
                      </div>

                      <div className="px-4 pt-3 text-sm text-[#737373]">
                        Adres No: <span className="font-semibold text-[#252B42]">{o.address_id ?? "-"}</span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="px-4 py-2 text-left text-[#737373] font-semibold">Product ID</th>
                              <th className="px-4 py-2 text-left text-[#737373] font-semibold">Detay</th>
                              <th className="px-4 py-2 text-right text-[#737373] font-semibold">Adet</th>
                            </tr>
                          </thead>
                          <tbody>
                            {prods.length === 0 ? (
                              <tr>
                                <td colSpan={3} className="px-4 py-6 text-center text-[#737373]">
                                  Ürün bulunamadı.
                                </td>
                              </tr>
                            ) : (
                              prods.map((p, idx) => (
                                <tr key={`${o.id}-${p.product_id}-${idx}`} className="border-b last:border-b-0">
                                  <td className="px-4 py-3 font-semibold text-[#252B42]">
                                    {p.product_id}
                                  </td>
                                  <td className="px-4 py-3">{p.detail}</td>
                                  <td className="px-4 py-3 text-right font-semibold">
                                    {p.count}
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td className="px-4 py-3"></td>
                              <td className="px-4 py-3 text-right font-bold">Toplam:</td>
                              <td className="px-4 py-3 text-right font-extrabold text-[#252B42]">
                                {TL(o.price ?? 0)}
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {!loading && orders.length === 0 && (
            <div className="px-6 py-10 text-center text-[#737373]">Henüz bir siparişiniz yok.</div>
          )}
          {loading && (
            <div className="px-6 py-10 text-center text-[#737373]">Yükleniyor…</div>
          )}
        </div>
      </section>
    </main>
  );
}
