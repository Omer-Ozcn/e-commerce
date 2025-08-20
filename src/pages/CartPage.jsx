import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, toggleChecked } from "../store/thunks/cartThunks";
import OrderSummary from "../components/cart/OrderSummary";
import Breadcrumb from "../components/common/Breadcrumb";

const TL = (n=0) => new Intl.NumberFormat("tr-TR",{style:"currency",currency:"TRY"}).format(n);

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart?.cart || []);

  return (
    <main className="bg-[#FAFAFA] min-h-[60vh]">
      <Breadcrumb title="Sepetim" />

      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
        <div className="lg:pr-2">
          <h1 className="text-2xl font-bold text-[#252B42] mb-4">
            Sepetim <span className="text-[#737373] font-normal">({cart.length} Ürün)</span>
          </h1>

          {cart.length === 0 ? (
            <div className="p-6 bg-white border rounded-lg text-center">
              <p className="text-[#737373] mb-4">Sepetiniz boş.</p>
              <Link to="/shop" className="inline-block px-4 h-10 leading-10 bg-[#23A6F0] text-white rounded-md font-semibold">
                Alışverişe Başla
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => {
                const id = item?.product?.id;
                const name = item?.product?.name || item?.product?.title || `#${id}`;
                const price = Number(item?.product?.price) || 0;
                const img = item?.product?.images?.[0]?.url || item?.product?.imgUrl;

                return (
                  <div key={id} className="bg-white rounded-lg border p-4 flex gap-4 items-center">
                    <input
                      type="checkbox"
                      checked={item.checked !== false}
                      onChange={() => dispatch(toggleChecked(id))}
                      className="w-4 h-4 accent-[#23A6F0]"
                    />
                    <img
                      src={img}
                      alt={name}
                      className="w-16 h-16 object-cover rounded border"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-[#252B42] line-clamp-2">{name}</p>
                      <p className="text-sm text-[#737373] mt-1">{TL(price)}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => dispatch(addToCart(item.product, -1))}
                        className="w-8 h-8 rounded border bg-white"
                        title="Azalt"
                      >
                        −
                      </button>
                      <div className="w-10 text-center font-semibold">{item.count}</div>
                      <button
                        type="button"
                        onClick={() => dispatch(addToCart(item.product, +1))}
                        className="w-8 h-8 rounded border bg-white"
                        title="Arttır"
                      >
                        +
                      </button>
                    </div>

                    <div className="w-24 text-right font-bold">{TL(price * (Number(item.count)||1))}</div>

                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(id))}
                      className="ml-2 text-[#e53e3e] font-bold"
                      title="Kaldır"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="lg:pl-2">
          <div className="lg:sticky lg:top-24">
            <OrderSummary />
          </div>
        </div>
      </section>
    </main>
  );
}
