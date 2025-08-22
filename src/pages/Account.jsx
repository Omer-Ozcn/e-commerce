import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Breadcrumb from "../components/common/Breadcrumb";
import AddressCard from "../components/address/AddressCard";
import AddressForm from "../components/address/AddressForm";
import PaymentMethods from "../components/payment/PaymentMethods"; 
import {
  fetchAddresses, createAddress, updateAddress, deleteAddress,
} from "../store/thunks/addressThunks";
import { logoutUser } from "../store/actions/userActions";
import md5 from "md5";

const TL = (n = 0) =>
  (Number(n) || 0).toLocaleString("tr-TR", { style: "currency", currency: "TRY" });

const authHeaders = (token) => (token ? { Authorization: token } : {});

export default function Account() {
  const dispatch = useDispatch();
  const history  = useHistory();

  const user  = useSelector((s) => s.user?.user);
  const email = (user?.email || "").toLowerCase();
  const token = useSelector((s) => s.user?.token) || localStorage.getItem("token");
  const avatar = user?.avatar || `https://www.gravatar.com/avatar/${md5(email)}?s=96&d=identicon&r=g`;

  const cart = useSelector((s) => s.cart?.cart || []);
  const cartCount = cart.reduce((sum, it) => sum + (Number(it.count) || 1), 0);

  const { list: addresses, loading: addrLoading } = useSelector((s) => s.address || {});
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);

  const [tab, setTab] = useState("overview");

  useEffect(() => { dispatch(fetchAddresses()).catch(()=>{}); }, [dispatch]);

  useEffect(() => {
    const load = async () => {
      try {
        setOrdersLoading(true);
        const res = await axiosInstance.get("/order", { headers: authHeaders(token) });
        const arr = Array.isArray(res?.data) ? res.data : [];
        arr.sort((a,b)=>new Date(b.order_date)-new Date(a.order_date));
        setOrders(arr);
      } finally { setOrdersLoading(false); }
    };
    load();
  }, [token]);

  const ordersCount = orders.length;
  const lastOrderId  = orders[0]?.id;

  const onSaveAddress = async (payload) => {
    try {
      if (payload.id) await dispatch(updateAddress(payload));
      else await dispatch(createAddress(payload));
      setShowForm(false); setEditItem(null);
    } catch (e) {
      alert(e?.response?.data?.message || e.message || "Adres kaydedilemedi.");
    }
  };

  const onDeleteAddress = async (id) => {
    if (!window.confirm("Adresi silmek istiyor musun?")) return;
    try { await dispatch(deleteAddress(id)); }
    catch (e) { alert(e?.response?.data?.message || e.message || "Silinemedi."); }
  };

  return (
    <main className="bg-[#FAFAFA] min-h-[60vh]">
      <Breadcrumb title="Profil" />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between rounded-2xl border bg-white shadow-sm px-5 py-4">
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full border object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name||user?.email||"User")}&background=23A6F0&color=fff&size=96`;
              }}
            />
            <div>
              <div className="text-2xl font-extrabold text-[#252B42]">{user?.name || "someone"}</div>
              <div className="text-[#737373]">{user?.email || "someone@example.com"}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => { dispatch(logoutUser()); history.push("/"); }}
            className="h-10 px-4 rounded-lg border font-semibold text-[#252B42] hover:bg-gray-50"
          >
            Logout
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {[
            ["overview","Overview"],
            ["addresses","Addresses"],
            ["payments","Payment Methods"],
            ["orders","Orders"],
          ].map(([k,label])=>(
            <button
              key={k}
              onClick={()=>setTab(k)}
              className={`h-10 px-4 rounded-lg border text-sm font-semibold ${
                tab===k ? "bg-[#23A6F0] text-white border-[#23A6F0]" : "bg-white text-[#252B42] hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-[#737373]">Cart Items</div>
              <div className="text-4xl font-extrabold text-[#252B42] mt-1">{cartCount}</div>
            </div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-[#737373]">Favorites</div>
              <div className="text-4xl font-extrabold text-[#252B42] mt-1">0</div>
            </div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-[#737373]">Orders</div>
              <div className="text-4xl font-extrabold text-[#252B42] mt-1">{ordersCount}</div>
              <div className="text-sm text-[#737373] mt-1">Son: {lastOrderId ? `#${lastOrderId}` : "-"}</div>
              <Link to="/orders" className="inline-block mt-3 text-[#23A6F0] font-semibold hover:underline">
                Tüm siparişleri gör
              </Link>
            </div>
          </div>
        )}

        {tab === "addresses" && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-[#252B42]">Adreslerim</h3>
              <button
                type="button"
                onClick={()=>{ setShowForm(true); setEditItem(null); }}
                className="h-10 px-4 rounded bg-[#23A6F0] text-white font-semibold"
              >
                + Yeni Adres Ekle
              </button>
            </div>

            {showForm && (
              <div className="mb-4">
                <AddressForm
                  initial={editItem || {}}
                  onCancel={()=>{ setShowForm(false); setEditItem(null); }}
                  onSubmit={onSaveAddress}
                />
              </div>
            )}

            {addrLoading && <p className="text-[#737373]">Yükleniyor…</p>}

            <div className="grid md:grid-cols-2 gap-3">
              {addresses.map((a, idx)=>(
                <AddressCard
                  key={a.id ?? idx}
                  address={a}
                  checked={false}
                  onSelect={()=>{}}
                  onEdit={(addr)=>{ setEditItem(addr); setShowForm(true); }}
                  onDelete={onDeleteAddress}
                />
              ))}
              {!addresses.length && !addrLoading && (
                <div className="text-[#737373]">Kayıtlı adresiniz yok.</div>
              )}
            </div>
          </div>
        )}

        {tab === "payments" && (
        <div className="mt-6 rounded-2xl border bg-white shadow-sm">
            <div className="px-5 py-4 border-b text-lg font-bold text-[#252B42]">Kartlarım</div>
            <PaymentMethods showInstallments={false} />
        </div>
        )}

        {tab === "orders" && (
          <div className="mt-6 rounded-2xl border bg-white shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b text-lg font-bold text-[#252B42]">Son Siparişler</div>
            {ordersLoading ? (
              <div className="px-5 py-6 text-[#737373]">Yükleniyor…</div>
            ) : orders.length === 0 ? (
              <div className="px-5 py-6 text-[#737373]">Henüz siparişiniz yok.</div>
            ) : (
              <div className="divide-y">
                {orders.slice(0,6).map((o)=>(
                  <div key={o.id} className="px-5 py-3 grid grid-cols-3 gap-3 hover:bg-[#F9FAFB]">
                    <div className="font-semibold text-[#252B42]">#{o.id}</div>
                    <div className="text-[#737373]">{new Date(o.order_date).toLocaleString("tr-TR")}</div>
                    <div className="text-right font-bold">{TL(o.price)}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="px-5 py-4 border-t bg-[#F8FAFC] text-right">
              <Link to="/orders" className="text-[#23A6F0] font-semibold hover:underline">Tüm siparişleri görüntüle →</Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
