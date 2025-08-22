import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardForm from "./CardForm";
import CardItem from "./CardItem";
import {
  fetchCards,
  createCard,
  updateCard,
  deleteCard,
} from "../../store/thunks/cardThunks";
import { selectCardId } from "../../store/actions/cardActions";

export default function PaymentMethods({ showInstallments = true }) {
  const dispatch = useDispatch();
  const { list, loading, selectedId } = useSelector((s) => s.card || {});
  const subtotal = useSelector((s) =>
    (s.cart?.cart || []).filter((i) => i.checked !== false)
      .reduce((sum, it) => sum + (Number(it?.product?.price)||0) * (Number(it?.count)||1), 0)
  );

  const computeInstallments = (cardNo = "") => {
    const last = Number(cardNo?.toString().slice(-1)) || 0;
    const plans = [
      { count: 1, label: "Tek Çekim" },
      { count: 3, label: "3 Taksit" },
      { count: 6, label: "6 Taksit" },
    ];
    return last % 2 === 0 ? plans : plans.slice(0, 2);
  };

  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(null);

  const selectedCard = useMemo(
    () => list.find((c) => c.id === selectedId) || null,
    [list, selectedId]
  );

  const installments = useMemo(
    () => (showInstallments && selectedCard ? computeInstallments(selectedCard.card_no) : []),
    [showInstallments, selectedCard]
  );

  useEffect(() => { dispatch(fetchCards()); }, [dispatch]);

  const onSaveNew = async (payload) => {
    const saved = await dispatch(createCard(payload));
    setShowForm(false); setEdit(null);
    if (saved?.id) dispatch(selectCardId(saved.id));
  };

  const onSaveEdit = async (payload) => {
    const saved = await dispatch(updateCard(payload));
    setShowForm(false); setEdit(null);
    if (saved?.id) dispatch(selectCardId(saved.id));
  };

  const onDelete = async (id) => {
    if (!window.confirm("Kartı silmek istiyor musun?")) return;
    await dispatch(deleteCard(id));
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-[#252B42]">Kart ile Öde</h3>
        <button
          type="button"
          className="text-[#23A6F0] font-bold"
          onClick={() => { setShowForm(true); setEdit(null); }}
        >
          Başka bir Kart ile Ödeme Yap
        </button>
      </div>

      {showForm && (
        <CardForm
          initial={edit || {}}
          onCancel={() => { setShowForm(false); setEdit(null); }}
          onSubmit={edit ? onSaveEdit : onSaveNew}
        />
      )}

      {loading && <p className="text-sm text-[#737373]">Kartlar yükleniyor…</p>}

      {!loading && !showForm && (
        <>
          {list.length === 0 ? (
            <div className="p-4 border rounded bg-white">
              <p className="text-[#737373] mb-3">Kayıtlı kartınız yok.</p>
              <button
                className="h-10 px-4 rounded bg-[#23A6F0] text-white font-semibold"
                onClick={() => setShowForm(true)}
              >
                Yeni Kart Ekle
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-3">
              {list.map((c) => (
                <CardItem
                  key={c.id}
                  card={c}
                  checked={c.id === selectedId}
                  onSelect={(id) => dispatch(selectCardId(id))}
                  onEdit={(card) => { setEdit(card); setShowForm(true); }}
                  onDelete={onDelete}
                />
              ))}
            </div>
          )}
        </>
      )}

      {showInstallments && !!selectedCard && installments.length > 0 && (
        <div className="mt-5 border rounded bg-white">
          <div className="px-4 py-3 border-b font-semibold">Taksit Seçenekleri</div>
          <div className="p-4">
            {installments.map((p) => {
              const per = subtotal / p.count;
              return (
                <label key={p.count} className="flex items-center justify-between p-3 border rounded mb-2 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <input type="radio" name="installment" defaultChecked={p.count === 1} />
                    {p.label}
                  </span>
                  <span className="font-semibold">
                    {per.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
