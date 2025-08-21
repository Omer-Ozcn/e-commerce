import { useState } from "react";

const CITIES = [
  "adana","adiyaman","afyonkarahisar","agri","amasya","ankara","antalya","artvin","aydin",
  "balikesir","bilecik","bingol","bitlis","bolu","burdur","bursa","canakkale","cankiri",
  "corum","denizli","diyarbakir","edirne","elazig","erzincan","erzurum","eskisehir","gaziantep",
  "giresun","gumushane","hakkari","hatay","isparta","mersin","istanbul","izmir","kars","kastamonu",
  "kayseri","kirklareli","kirsehir","kocaeli","konya","kutahya","malatya","manisa","kahramanmaras",
  "mardin","mugla","mus","nevsehir","nigde","ordu","rize","sakarya","samsun","siirt","sinop","sivas",
  "tekirdag","tokat","trabzon","tunceli","sanliurfa","usak","van","yozgat","zonguldak","aksaray",
  "bayburt","karaman","kirikkale","batman","sirnak","bartin","ardahan","igdir","yalova","karabuk",
  "kilis","osmaniye","duzce"
];

export default function AddressForm({ initial = {}, onCancel = () => {}, onSubmit = () => {} }) {
  const [form, setForm] = useState({
    id: initial.id ?? undefined,
    title: initial.title ?? "",
    name: initial.name ?? "",
    surname: initial.surname ?? "",
    phone: initial.phone ?? "",
    city: (initial.city || "istanbul").toLowerCase(),
    district: initial.district ?? "",
    neighborhood: initial.neighborhood ?? "",
    address: initial.address ?? "",
  });

  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      id: form.id,
      title: form.title.trim(),
      name: form.name.trim(),
      surname: form.surname.trim(),
      phone: form.phone.trim(),
      city: (form.city || "").toLowerCase(),
      district: form.district.trim(),
      neighborhood: (form.neighborhood || form.address || "").trim(),
    };
    onSubmit(payload);
  };

  return (
    <form onSubmit={submit} className="p-4 border rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
      <div className="md:col-span-2">
        <label className="text-sm font-semibold">Adres Başlığı</label>
        <input name="title" value={form.title} onChange={change} className="mt-1 w-full border rounded h-10 px-3" required />
      </div>

      <div>
        <label className="text-sm font-semibold">Ad</label>
        <input name="name" value={form.name} onChange={change} className="mt-1 w-full border rounded h-10 px-3" required />
      </div>
      <div>
        <label className="text-sm font-semibold">Soyad</label>
        <input name="surname" value={form.surname} onChange={change} className="mt-1 w-full border rounded h-10 px-3" required />
      </div>

      <div>
        <label className="text-sm font-semibold">Telefon</label>
        <input name="phone" value={form.phone} onChange={change} className="mt-1 w-full border rounded h-10 px-3" required />
      </div>
      <div>
        <label className="text-sm font-semibold">İl (Şehir)</label>
        <select name="city" value={form.city} onChange={change} className="mt-1 w-full border rounded h-10 px-3">
          {CITIES.map((c) => <option key={c} value={c}>{c.toUpperCase()}</option>)}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold">İlçe</label>
        <input name="district" value={form.district} onChange={change} className="mt-1 w-full border rounded h-10 px-3" required />
      </div>
      <div>
        <label className="text-sm font-semibold">Mahalle</label>
        <input name="neighborhood" value={form.neighborhood} onChange={change} className="mt-1 w-full border rounded h-10 px-3" required />
      </div>

      <div className="md:col-span-2">
        <label className="text-sm font-semibold">Adres (Sokak, No, Daire…)</label>
        <textarea name="address" value={form.address} onChange={change} rows={3} className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <div className="md:col-span-2 flex gap-3 justify-end">
        <button type="button" onClick={onCancel} className="h-10 px-4 border rounded">Vazgeç</button>
        <button type="submit" className="h-10 px-4 rounded bg-[#23A6F0] text-white font-semibold">
          {form.id ? "Adresi Güncelle" : "Adresi Kaydet"}
        </button>
      </div>
    </form>
  );
}
