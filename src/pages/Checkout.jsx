// src/pages/Checkout.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/common/Breadcrumb";
import OrderSummary from "../components/cart/OrderSummary";
import AddressCard from "../components/address/AddressCard";
import AddressForm from "../components/address/AddressForm";
import {
  fetchAddresses,
  createAddress as addAddress,
  updateAddress,
  deleteAddress,
} from "../store/thunks/addressThunks";
import { selectBilling, selectShipping } from "../store/actions/addressActions";

export default function Checkout() {
  const dispatch = useDispatch();

  // reducer alan adlarıyla birebir
  const { list, loading, shippingId, billingId } = useSelector(
    (s) => s.address || {}
  );

  const [sameBill, setSameBill] = useState(true);
  const [showFormFor, setShowFormFor] = useState(null); // "new-shipping" | "edit-shipping" | "new-billing" | "edit-billing"
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    dispatch(fetchAddresses()).catch(() => {});
  }, [dispatch]);

  // Fatura aynı adrese gönder ayarı
  useEffect(() => {
    if (sameBill) dispatch(selectBilling(shippingId));
  }, [sameBill, shippingId, dispatch]);

  const shippingSelected = useMemo(
    () => list.find((a) => a.id === shippingId) || null,
    [list, shippingId]
  );
  const billingSelected = useMemo(
    () => list.find((a) => a.id === billingId) || null,
    [list, billingId]
  );

  const handleNew = (which) => {
    setShowFormFor(which);
    setEditItem(null);
  };

  const handleEdit = (which, addr) => {
    setShowFormFor(which.includes("billing") && sameBill ? "edit-shipping" : which);
    setEditItem(addr);
  };

  const submitNew = async (data) => {
    try {
      const saved = await dispatch(addAddress(data));
      const id = saved?.id;

      // yeni ekleneni seçili yap
      if (id) {
        if (showFormFor === "new-shipping" || showFormFor === "edit-shipping") {
          dispatch(selectShipping(id));
          if (sameBill) dispatch(selectBilling(id));
        } else if (showFormFor === "new-billing" || showFormFor === "edit-billing") {
          dispatch(selectBilling(id));
        }
      }

      setShowFormFor(null);
      setEditItem(null);
    } catch (e) {
      alert("Adres kaydedilemedi: " + (e?.response?.data?.message || e.message));
    }
  };

  const submitUpdate = async (data) => {
    try {
      await dispatch(updateAddress(data));
      setShowFormFor(null);
      setEditItem(null);
    } catch (e) {
      alert("Adres güncellenemedi: " + (e?.response?.data?.message || e.message));
    }
  };

  return (
    <main className="bg-[#FAFAFA] min-h-[60vh]">
      <Breadcrumb title="Sipariş Oluştur" />

      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
        {/* SOL: Adresler */}
        <div className="lg:pr-2">
          <div className="bg-white border rounded-lg">
            <div className="px-5 py-4 border-b">
              <h2 className="text-xl font-bold text-[#252B42]">1. Adres Bilgileri</h2>
            </div>

            <div className="p-5 space-y-6">
              {/* Teslimat Adresi */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#252B42]">Teslimat Adresi</h3>
                  <button
                    type="button"
                    className="text-sm font-semibold text-[#23A6F0]"
                    onClick={() => handleNew("new-shipping")}
                  >
                    + Yeni Adres Ekle
                  </button>
                </div>

                {showFormFor === "new-shipping" && (
                  <AddressForm onCancel={() => setShowFormFor(null)} onSubmit={submitNew} />
                )}

                {loading && <p className="text-sm text-[#737373]">Yükleniyor…</p>}

                <div className="grid gap-3">
                  {list.map((a) => (
                    <AddressCard
                      key={a.id}
                      address={a}
                      checked={a.id === shippingId}
                      onSelect={(id) => dispatch(selectShipping(id))}
                      onEdit={(addr) => handleEdit("edit-shipping", addr)}
                      onDelete={(id) => dispatch(deleteAddress(id)).catch(() => {})}
                    />
                  ))}
                </div>

                {showFormFor === "edit-shipping" && editItem && (
                  <div className="mt-3">
                    <AddressForm
                      initial={editItem}
                      onCancel={() => {
                        setShowFormFor(null);
                        setEditItem(null);
                      }}
                      onSubmit={(data) => submitUpdate({ ...data, id: editItem.id })}
                    />
                  </div>
                )}
              </div>

              {/* Fatura aynı adrese mi? */}
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="accent-[#23A6F0]"
                  checked={sameBill}
                  onChange={(e) => setSameBill(e.target.checked)}
                />
                Faturamı Aynı Adrese Gönder
              </label>

              {/* Fatura Adresi (ayrı ise) */}
              {!sameBill && (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#252B42]">Fatura Adresi</h3>
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#23A6F0]"
                      onClick={() => handleNew("new-billing")}
                    >
                      + Yeni Adres Ekle
                    </button>
                  </div>

                  {showFormFor === "new-billing" && (
                    <AddressForm onCancel={() => setShowFormFor(null)} onSubmit={submitNew} />
                  )}

                  <div className="grid gap-3">
                    {list.map((a) => (
                      <AddressCard
                        key={a.id}
                        address={a}
                        checked={a.id === billingId}
                        onSelect={(id) => dispatch(selectBilling(id))}
                        onEdit={(addr) => handleEdit("edit-billing", addr)}
                        onDelete={(id) => dispatch(deleteAddress(id)).catch(() => {})}
                      />
                    ))}
                  </div>

                  {showFormFor === "edit-billing" && editItem && (
                    <div className="mt-3">
                      <AddressForm
                        initial={editItem}
                        onCancel={() => {
                          setShowFormFor(null);
                          setEditItem(null);
                        }}
                        onSubmit={(data) => submitUpdate({ ...data, id: editItem.id })}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 2. adım (placeholder) */}
          <div className="bg-white border rounded-lg mt-6">
            <div className="px-5 py-4 border-b">
              <h2 className="text-xl font-bold text-[#252B42]">2. Ödeme Seçenekleri</h2>
            </div>
            <div className="p-5 text-[#737373]">
              Ödeme adımı bir sonraki görevde yapılacak. (Kart / Havale vs.)
            </div>
          </div>
        </div>

        {/* SAĞ: Sipariş Özeti */}
        <div className="lg:pl-2">
          <div className="lg:sticky lg:top-24">
            <OrderSummary />
            <button
              type="button"
              className="mt-4 w-full h-11 rounded bg-[#F97316] text-white font-semibold"
              onClick={() => alert("Ödeme adımı sonraki görevde yapılacak.")}
            >
              Kaydet ve Devam Et
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
