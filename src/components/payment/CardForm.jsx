import { useState } from "react";

const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years  = Array.from({ length: 12 }, (_, i) => new Date().getFullYear() + i);

const digitsOnly = (s="") => s.replace(/\D+/g, "");
const maskCard   = (s="") => digitsOnly(s).slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ").trim();

export default function CardForm({ initial = {}, onCancel = () => {}, onSubmit = () => {} }) {
  const [form, setForm] = useState({
    id: initial.id ?? undefined,
    card_no: initial.card_no ?? "",
    name_on_card: initial.name_on_card ?? "",
    expire_month: initial.expire_month ?? "",
    expire_year: initial.expire_year ?? "",
    three_d: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : name === "card_no" ? maskCard(value) : value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      id: form.id,
      card_no: digitsOnly(form.card_no).slice(0, 16),
      name_on_card: form.name_on_card.trim(),
      expire_month: Number(form.expire_month),
      expire_year: Number(form.expire_year),
    };
    if (payload.card_no.length !== 16) { alert("Kart numarası 16 haneli olmalı."); return; }
    if (!payload.expire_month || !payload.expire_year) { alert("Son kullanma tarihini seçiniz."); return; }
    onSubmit(payload);
  };

  return (
    <form onSubmit={submit} className="p-4 border rounded-lg bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <label className="text-sm font-semibold">Kart Numarası</label>
        <input
          name="card_no"
          value={form.card_no}
          onChange={onChange}
          className="mt-1 w-full h-11 px-3 border rounded"
          placeholder="1234 1234 1234 1234"
          inputMode="numeric"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Son Kullanma (Ay)</label>
        <select name="expire_month" value={form.expire_month} onChange={onChange} className="mt-1 w-full h-11 px-3 border rounded">
          <option value="">Ay</option>
          {months.map((m) => <option key={m} value={m}>{String(m).padStart(2,"0")}</option>)}
        </select>
      </div>
      <div>
        <label className="text-sm font-semibold">Son Kullanma (Yıl)</label>
        <select name="expire_year" value={form.expire_year} onChange={onChange} className="mt-1 w-full h-11 px-3 border rounded">
          <option value="">Yıl</option>
          {years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="text-sm font-semibold">Kart Üzerindeki İsim</label>
        <input
          name="name_on_card"
          value={form.name_on_card}
          onChange={onChange}
          className="mt-1 w-full h-11 px-3 border rounded"
          placeholder="AD SOYAD"
        />
      </div>

      <div className="md:col-span-2 flex gap-3 justify-end">
        <button type="button" onClick={onCancel} className="h-10 px-4 border rounded">Vazgeç</button>
        <button type="submit" className="h-10 px-4 rounded bg-[#23A6F0] text-white font-semibold">
          {form.id ? "Kartı Güncelle" : "Kartı Kaydet"}
        </button>
      </div>
    </form>
  );
}
