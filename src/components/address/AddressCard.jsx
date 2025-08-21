export default function AddressCard({
  address,
  checked,
  onSelect = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) {
  const line = `${address.name} ${address.surname} • ${address.phone}`;
  const addr = `${(address.neighborhood || "").trim()} • ${address.city?.toUpperCase()} / ${address.district?.toUpperCase()}`;

  return (
    <label
      className={`flex items-start gap-3 p-4 border rounded-lg bg-white cursor-pointer ${
        checked ? "ring-2 ring-[#23A6F0]" : ""
      }`}
      onClick={() => onSelect(address.id)} // kartın boşuna tıklayınca da seç
    >
      <input
        type="radio"
        checked={!!checked}
        onChange={() => onSelect(address.id)} // her zaman id gönder
        className="mt-1 accent-[#23A6F0]"
      />

      <div className="flex-1">
        <div className="font-semibold text-[#252B42]">{address.title}</div>
        <div className="text-sm text-[#737373]">{line}</div>
        <div className="text-sm text-[#737373]">{addr}</div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onEdit(address); }}
          className="text-[#23A6F0] font-semibold"
        >
          Düzenle
        </button>
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDelete(address.id); }}
          className="text-[#e53e3e] font-semibold"
        >
          Sil
        </button>
      </div>
    </label>
  );
}
