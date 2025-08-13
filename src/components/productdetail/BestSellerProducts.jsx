import { Link } from "react-router-dom";
import editorsPickProducts from "../../data/shop/EditorsPickData";

export default function BestsellerProducts() {
  // Mobilde 4, desktopta 8 ürün göstereceğiz
  const itemsMobile = editorsPickProducts.slice(0, 4);
  const itemsDesktop = editorsPickProducts.slice(0, 8);

  return (
    <section className="bg-[#FAFAFA]">
      {/* ===== Mobile (414px) — mevcut görünümün aynısı ===== */}
      <div className="md:hidden max-w-[414px] mx-auto px-0 py-12">
        <div className="w-[331px] mx-auto flex flex-col items-center gap-6">
          <h3 className="w-[324px] text-[24px] leading-8 font-bold text-center text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="w-[331px] border-[#ECECEC]" />
        </div>

        <div className="mt-6 w-[328px] mx-auto flex flex-col gap-[30px]">
          {itemsMobile.map((p) => (
            <article
              key={p.id}
              className="w-[348px] bg-white flex flex-col shadow-sm rounded-[6px] overflow-hidden"
            >
              <Link to={`/product/${p.id}`} className="block">
                <div className="w-[348px] h-[427px] overflow-hidden">
                  <img
                    src={p.imgUrl}
                    alt={p.title}
                    className="block w-full h-full object-cover"
                  />
                </div>
              </Link>

              <div className="px-[25px] pt-[25px] pb-[35px] flex flex-col gap-2">
                <h5 className="text-[16px] leading-6 font-bold text-[#252B42]">
                  {p.title}
                </h5>
                <span className="text-[14px] leading-6 font-bold text-[#737373]">
                  {p.subtitle}
                </span>

                <div className="mt-1 flex items-center gap-[5px] px-[3px] py-[5px]">
                  <span className="text-[16px] leading-6 font-bold text-[#BDBDBD] line-through">
                    ${p.price.toFixed(2)}
                  </span>
                  <span className="text-[16px] leading-6 font-bold text-[#23856D]">
                    ${p.discountPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ===== Desktop (>= md) — 4 sütun x 2 satır (8 kart) ===== */}
      <div className="hidden md:block">
        <div className="max-w-[1124px] mx-auto py-12">
          {/* Başlık + çizgi (soldan hizalı) */}
          <div className="w-[1040px] mx-auto">
            <h3 className="text-[24px] leading-8 font-bold text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
            <hr className="mt-4 border-[#ECECEC]" />
          </div>

          {/* Kartlar: 4 kolon, gap 30px */}
          <div className="w-[1049px] mx-auto mt-6 grid grid-cols-4 gap-[30px]">
            {itemsDesktop.map((p) => (
              <article
                key={p.id}
                className="w-[239px] h-[442px] bg-white flex flex-col rounded-[6px] overflow-hidden"
              >
                <Link to={`/product/${p.id}`} className="block">
                  <div className="w-[239px] h-[280px] overflow-hidden">
                    <img
                      src={p.imgUrl}
                      alt={p.title}
                      className="block w-full h-full object-cover"
                    />
                  </div>
                </Link>

                <div className="px-[25px] pt-[25px] pb-[35px] flex flex-col gap-2">
                  <h5 className="text-[16px] leading-6 font-bold text-[#252B42]">
                    {p.title}
                  </h5>
                  <span className="text-[14px] leading-6 font-bold text-[#737373]">
                    {p.subtitle}
                  </span>

                  <div className="mt-1 flex items-center gap-[5px] px-[3px] py-[5px]">
                    <span className="text-[16px] leading-6 font-bold text-[#BDBDBD] line-through">
                      ${p.price.toFixed(2)}
                    </span>
                    <span className="text-[16px] leading-6 font-bold text-[#23856D]">
                      ${p.discountPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
