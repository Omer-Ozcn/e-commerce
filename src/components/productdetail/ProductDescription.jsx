import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productDetailData from "../../data/productdetails/ProductDetailData";

export default function ProductDescription() {
  const { id } = useParams();
  const product = productDetailData.find((p) => p.id === Number(id));
  const [tab, setTab] = useState("desc");

  if (!product) {
    return (
      <div className="py-10 px-4 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <Link to="/shop" className="text-[#23856D] underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white">
      {/* Dış sarmalayıcı: mobil 414px, desktop 1056px */}
      <div className="mx-auto max-w-[414px] md:max-w-[1056px]">
        {/* Sekmeler */}
        <nav className="h-[91px] flex items-center justify-center md:justify-start">
          <ul className="flex items-center gap-6 md:gap-8">
            <li>
              <button
                onClick={() => setTab("desc")}
                className={`px-3 py-2 text-sm font-semibold ${
                  tab === "desc" ? "underline md:no-underline text-[#737373]" : "text-[#737373]"
                }`}
              >
                Description
              </button>
            </li>
            <li>
              <button
                onClick={() => setTab("info")}
                className="px-3 py-2 text-sm font-bold text-[#737373]"
              >
                Additional Information
              </button>
            </li>
            <li>
              <button
                onClick={() => setTab("reviews")}
                className="px-3 py-2 text-sm font-bold text-[#737373]"
              >
                Reviews <span className="text-[#23856D] font-bold">(0)</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Desktop: sekmelerin alt çizgisi */}
        <div className="hidden md:block w-full h-px bg-[#ECECEC]" />

        {/* İçerik: mobil tek kolon, desktop 3 kolon */}
        <div className="mx-auto w-[332px] md:w-full flex flex-col items-center gap-20 md:gap-[30px] md:py-6 md:pb-12">
          {tab === "desc" && (
            <div className="w-full flex flex-col gap-[30px] md:grid md:grid-cols-3">
              {/* Sol: Görsel kart */}
              <div className="w-[337px] h-[292px] relative rounded-[9px] md:w-[332px] md:h-[392px] md:rounded-[9px]">
                {/* Gri arka plan (Figma’daki hafif overlay) */}
                <div className="absolute left-0 top-0 w-[325px] h-[282px] bg-black/10 rounded-[5.6px] md:w-[325px] md:h-[382px]" />
                <div className="absolute left-0 top-0 bottom-0 w-[300px] h-[271px] md:w-[316px] md:h-[372px]">
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="block w-full h-full object-cover rounded-[5.4px]"
                  />
                </div>
              </div>

              {/* Orta: Başlık + paragraflar */}
              <section className="flex flex-col gap-[15px] md:w-[332px]">
                <h3 className="text-[24px] leading-8 font-bold text-[#252B42]">
                  the quick fox jumps over
                </h3>
                <p className="text-[14px] leading-5 text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
                  official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
                  nostrum met.
                </p>
                <p className="text-[14px] leading-5 text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
                  official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
                  nostrum met.
                </p>
                <p className="text-[14px] leading-5 text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
                  official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
                  nostrum met.
                </p>
              </section>

              {/* Sağ: İki liste bloğu */}
              <div className="flex flex-col gap-[30px] md:w-[332px]">
                <section className="flex flex-col gap-[15px]">
                  <h3 className="text-[24px] leading-8 font-bold text-[#252B42]">
                    the quick fox jumps over
                  </h3>
                  <ul className="flex flex-col gap-[10px]">
                    {[
                      "the quick fox jumps over the lazy dog",
                      "the quick fox jumps over the lazy dog",
                      "the quick fox jumps over the lazy dog",
                      "the quick fox jumps over the lazy dog",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-5 text-[#737373]">
                        <span className="mt-[2px]">›</span>
                        <span className="text-[14px] font-bold leading-6">{t}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="flex flex-col gap-[15px]">
                  <h3 className="text-[24px] leading-8 font-bold text-[#252B42]">
                    the quick fox jumps over
                  </h3>
                  <ul className="flex flex-col gap-[10px]">
                    {[
                      "the quick fox jumps over the lazy dog",
                      "the quick fox jumps over the lazy dog",
                      "the quick fox jumps over the lazy dog",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-5 text-[#737373]">
                        <span className="mt-[2px]">›</span>
                        <span className="text-[14px] font-bold leading-6">{t}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          )}

          {tab === "info" && (
            <div className="w-full md:w-[1056px]">
              <h3 className="text-[24px] leading-8 font-bold text-[#252B42] mb-3">
                Additional Information
              </h3>
              <p className="text-[14px] leading-5 text-[#737373]">
                Material: 100% Cotton
                <br />
                Fit: Regular
                <br />
                Care: Machine wash cold
              </p>
            </div>
          )}

          {tab === "reviews" && (
            <div className="w-full md:w-[1056px]">
              <h3 className="text-[24px] leading-8 font-bold text-[#252B42] mb-3">
                Reviews (0)
              </h3>
              <p className="text-[14px] leading-5 text-[#737373]">There are no reviews yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
