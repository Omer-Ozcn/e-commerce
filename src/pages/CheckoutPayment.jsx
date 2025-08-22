import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import OrderSummary from "../components/cart/OrderSummary";
import CardItem from "../components/payment/CardItem";
import CardForm from "../components/payment/CardForm";
import { fetchCards, createCard, updateCard, deleteCard } from "../store/thunks/cardThunks";
import { selectCardId } from "../store/actions/cardActions";
import { createOrder } from "../store/thunks/orderThunks";

export default function CheckoutPayment() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { list, loading, selectedId } = useSelector((s) => s.card || {});
  const creating = useSelector((s) => s.order?.creating);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [cvv, setCvv] = useState("");

  useEffect(() => { dispatch(fetchCards()).catch(() => {}); }, [dispatch]);

  const onNew = () => { setEditItem(null); setShowForm(true); };
  const onEdit = (card) => { setEditItem(card); setShowForm(true); };

  const handleSubmit = async (data) => {
    try {
      if (data.id) {
        const saved = await dispatch(updateCard(data));
        dispatch(selectCardId(saved?.id));
      } else {
        const saved = await dispatch(createCard(data));
        dispatch(selectCardId(saved?.id));
      }
      setShowForm(false);
      setEditItem(null);
    } catch (e) {
      alert("Kart kaydedilemedi: " + (e?.response?.data?.message || e.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Kartı silmek istiyor musun?")) return;
    try { await dispatch(deleteCard(id)); }
    catch (e) { alert("Kart silinemedi: " + (e?.response?.data?.message || e.message)); }
  };

  const handlePay = async () => {
    try {
      await dispatch(createOrder({ cvv }));
      alert("Tebrikler! Siparişiniz başarıyla oluşturuldu.");
      history.push("/");
    } catch (e) {
      alert("Sipariş oluşturulamadı: " + (e?.response?.data?.message || e.message));
    }
  };

  return (
    <main className="bg-[#FAFAFA] min-h-[60vh]">
      <Breadcrumb title="Ödeme" />

      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
        <div className="lg:pr-2">
          <div className="bg-white border rounded-lg">
            <div className="px-5 py-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#252B42]">Kart ile Öde</h2>
              <button type="button" className="text-sm font-semibold text-[#23A6F0]" onClick={onNew}>+ Yeni Kart Ekle</button>
            </div>

            <div className="p-5 space-y-4">
              {showForm && (
                <CardForm
                  initial={editItem || {}}
                  onCancel={() => { setShowForm(false); setEditItem(null); }}
                  onSubmit={handleSubmit}
                />
              )}

              {loading && <p className="text-sm text-[#737373]">Yükleniyor…</p>}

              <div className="grid sm:grid-cols-2 gap-3">
                {list.map((c) => (
                  <CardItem
                    key={c.id}
                    card={c}
                    checked={c.id === selectedId}
                    onSelect={(id) => dispatch(selectCardId(id))}
                    onEdit={onEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>

              <div className="mt-4">
                <label className="text-sm font-semibold">CVV</label>
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength={4}
                  className="mt-1 w-40 h-11 px-3 border rounded"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D+/g, ""))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-2">
          <div className="lg:sticky lg:top-24">
            <OrderSummary />
            <button
              type="button"
              disabled={!selectedId || creating || !cvv}
              className="mt-4 w-full h-11 rounded bg-[#F97316] text-white font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
              onClick={handlePay}
            >
              {creating ? "İşlem Yapılıyor..." : "Ödeme Yap"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
