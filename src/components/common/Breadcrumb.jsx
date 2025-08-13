
import { Link } from "react-router-dom";

export default function Breadcrumb({ productTitle }) {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="max-w-[1088px] mx-auto px-4">
        <div className="py-8 md:py-10 flex items-center justify-center md:justify-start">
          <nav aria-label="Breadcrumb" className="text-sm text-center md:text-left">
            <ol className="flex items-center gap-2 md:gap-[15px]">
              <li className="flex items-center gap-2">
                <Link to="/" className="font-bold text-[#252B42] hover:underline">
                  Home
                </Link>
                <span className="text-[#BDBDBD]">›</span>
              </li>

              {productTitle ? (
                <>
                  <li className="flex items-center gap-2">
                    <Link to="/shop" className="font-bold text-[#252B42] hover:underline">
                      Shop
                    </Link>
                    <span className="text-[#BDBDBD]">›</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium text-[#737373]">{productTitle}</span>
                  </li>
                </>
              ) : (
                <li className="flex items-center gap-2">
                  <span className="font-medium text-[#737373]">Shop</span>
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
