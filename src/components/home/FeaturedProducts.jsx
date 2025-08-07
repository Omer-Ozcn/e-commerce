import ProductCards from "./FeaturedProductsCards";

export default function FeaturedProducts() {
  return (
    <section className="font-[Montserrat] my-20 text-center mx-auto">
      <div className="px-10 flex flex-col gap-3 w-[300px] mx-auto md:w-full justify-center content-center">
        <h4 className="text-[#737373] text-xl">Featured Products</h4>
        <h3 className="text-[#252B42] text-2xl font-bold">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <ProductCards />
    </section>
  );
}