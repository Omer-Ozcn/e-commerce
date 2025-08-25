// src/components/pricing/PricingSection.jsx
import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";

const PLANS = [
  {
    id: "free",
    name: "FREE",
    tagline: "Organize across all apps by hand",
    monthly: 0,
    features: [
      ["Unlimited product updates", true],
      ["Unlimited product updates", true],
      ["Unlimited product updates", true],
      ["1GB  Cloud storage", false],
      ["Email and community support", false],
    ],
    cta: "Try for free",
  },
  {
    id: "standard",
    name: "STANDARD",
    tagline: "Organize across all apps by hand",
    monthly: 9.99,
    popular: true,
    features: [
      ["Unlimited product updates", true],
      ["Unlimited product updates", true],
      ["Unlimited product updates", true],
      ["1GB  Cloud storage", true],
      ["Email and community support", true],
    ],
    cta: "Try for free",
  },
  {
    id: "premium",
    name: "PREMIUM",
    tagline: "Organize across all apps by hand",
    monthly: 19.99,
    features: [
      ["Unlimited product updates", true],
      ["Unlimited product updates", true],
      ["Unlimited product updates", true],
      ["1GB  Cloud storage", true],
      ["Email and community support", true],
    ],
    cta: "Try for free",
  },
];

function PlanCard({ plan, cycle }) {
  // %25 indirimli yıllık (aylık bazda) gösterim
  const price = useMemo(() => {
    if (cycle === "monthly") return plan.monthly;
    return Number((plan.monthly * 0.75).toFixed(2));
  }, [plan, cycle]);

  const isDark = plan.popular;

  // H6 tipografisi (Montserrat varsayılarak)
  const H6 = "text-[14px] leading-6 tracking-[0.2px] font-bold";

  return (
    <div
      className={[
        "relative rounded-2xl border overflow-hidden transition-all",
        "shadow-sm hover:shadow-xl hover:-translate-y-0.5",
        isDark ? "bg-[#23303F] text-white border-transparent" : "bg-white border-slate-200",
      ].join(" ")}
    >
      {/* Üst kısım */}
      <div className="p-6 text-center font-[Montserrat]">
        <div className={`${H6} ${isDark ? "text-white" : "text-[#252B42]"} uppercase`}>
          {plan.name}
        </div>
        <p className={`mt-2 text-xs ${isDark ? "text-white/70" : "text-[#737373]"}`}>
          {plan.tagline}
        </p>

        <div className="mt-6 flex items-end justify-center gap-2">
          <span className={`text-4xl font-extrabold ${isDark ? "text-white" : "text-[#252B42]"}`}>
            {price.toLocaleString("en-US", { minimumFractionDigits: price % 1 ? 2 : 0 })}
          </span>
          <span className="text-[#23A6F0] font-bold mb-1">$</span>
        </div>
        <div className={`text-xs mt-1 ${isDark ? "text-white/70" : "text-[#737373]"}`}>
          Per Month
        </div>
      </div>

      {/* Özellikler */}
      <ul className={`px-6 pb-4 ${isDark ? "text-white/90" : "text-[#252B42]"} text-sm`}>
        {plan.features.map(([label, ok], i) => (
          <li key={i} className="flex items-start gap-3 py-2 font-[Montserrat]">
            {ok ? (
              <Check className="mt-0.5 w-5 h-5 text-[#2DC071]" />
            ) : (
              <X className={`mt-0.5 w-5 h-5 ${isDark ? "text-white/30" : "text-gray-300"}`} />
            )}
            <span
              className={[
                H6,
                ok ? (isDark ? "text-white" : "text-[#252B42]") : "line-through text-gray-400",
              ].join(" ")}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="p-6">
        <button
          className={[
            "w-full h-11 rounded-lg font-bold transition",
            isDark
              ? "bg-white text-[#23303F] hover:bg-slate-100"
              : "bg-[#23A6F0] text-white hover:bg-[#1f96db]",
          ].join(" ")}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [cycle, setCycle] = useState("monthly"); // "monthly" | "yearly"

  return (
    <section className="bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 font-[Montserrat]">
        {/* Başlık */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#252B42]">Pricing</h1>
          <p className="mt-2 text-xs md:text-sm text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical physics.
          </p>

          {/* Toggle */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${cycle === "monthly" ? "text-[#252B42]" : "text-[#737373]"}`}>
              Monthly
            </span>
            <button
              onClick={() => setCycle((c) => (c === "monthly" ? "yearly" : "monthly"))}
              className="relative w-12 h-6 rounded-full bg-white border border-slate-300 shadow-inner transition"
              aria-label="Toggle billing period"
            >
              <span
                className={[
                  "absolute top-0.5 w-5 h-5 rounded-full bg-[#23A6F0] transition-all",
                  cycle === "monthly" ? "left-0.5" : "left-[22px]",
                ].join(" ")}
              />
            </button>
            <span className={`text-sm font-semibold ${cycle === "yearly" ? "text-[#252B42]" : "text-[#737373]"}`}>
              Yearly
            </span>
            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-[#E9F6FF] text-[#23A6F0] font-bold">
              Save 25%
            </span>
          </div>
        </div>

        {/* Kartlar */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:mt-6">
            <PlanCard plan={PLANS[0]} cycle={cycle} />
          </div>

          <div>
            <PlanCard plan={PLANS[1]} cycle={cycle} />
          </div>

          <div className="md:mt-6">
            <PlanCard plan={PLANS[2]} cycle={cycle} />
          </div>
        </div>
      </div>
    </section>
  );
}
