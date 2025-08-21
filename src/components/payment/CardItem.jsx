const maskLast4 = (num="") => {
  const s = String(num).replace(/\s+/g, "");
  const last4 = s.slice(-4);
  return `**** **** **** ${last4}`;
};

export default function CardItem({ card, checked, onSelect = () => {}, onEdit = () => {}, onDelete = () => {} }) {
  return (
    <label
      className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer bg-white ${
        checked ? "ring-2 ring-[#23A6F0]" : ""
      }`}
      onClick={() => onSelect(card.id)}
    >
      <input
        type="radio"
        checked={!!checked}
        onChange={() => onSelect(card.id)}
        className="mt-1 w-4 h-4 accent-[#23A6F0]"
      />
      <div className="flex-1">
        <div className="font-semibold">{card.name_on_card}</div>
        <div className="text-sm text-[#737373]">{maskLast4(card.card_no)}</div>
        <div className="text-sm text-[#737373]">SKT: {String(card.expire_month).padStart(2,"0")}/{card.expire_year}</div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className="text-[#23A6F0] font-semibold"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onEdit(card); }}
        >
          Düzenle
        </button>
        <button
          type="button"
          className="text-[#e53e3e] font-semibold"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDelete(card.id); }}
        >
          Sil
        </button>
      </div>
    </label>
  );
}
