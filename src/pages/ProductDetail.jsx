import { useParams } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import ProductGallery from "../components/productdetail/ProductGallery";
import ProductInfo from "../components/productdetail/ProductInfo";
import ActionBar from "../components/productdetail/ActionBar";
import ProductDescription from "../components/productdetail/ProductDescription";
import BestsellerProducts from "../components/productdetail/BestSellerProducts"; 
import productDetailData from "../data/productdetails/ProductDetailData";
import LogoList from "../components/shop/Icons";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productDetailData.find((p) => p.id === Number(id));

  return (
    <main>
      <Breadcrumb productTitle={product?.title} />

        <section className="bg-[#FAFAFA] py-6 md:py-10">
        <div className="max-w-[1088px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[15px]">
            <ProductGallery />
            <div className="flex flex-col gap-6">
            <ProductInfo />
            <ActionBar className="mt-2" />
            </div>
        </div>
        </section>

      <ProductDescription />
      <BestsellerProducts />  
      <LogoList />
    </main>
  );
}
