import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchProductById } from "../store/thunks/productThunks";

import Breadcrumb from "../components/common/Breadcrumb";
import ProductGallery from "../components/productdetail/ProductGallery";
import ProductInfo from "../components/productdetail/ProductInfo";
import ActionBar from "../components/productdetail/ActionBar";
import ProductDescription from "../components/productdetail/ProductDescription";
import BestsellerProducts from "../components/productdetail/BestSellerProducts";
import LogoList from "../components/shop/Icons";

export default function ProductDetail() {
  const { productId: pidA, id: pidB } = useParams();
  const productId = pidA || pidB;

  const dispatch = useDispatch();
  const history  = useHistory();
  const loading  = useSelector((s) => s.product.productLoading);
  const product  = useSelector((s) => s.product.currentProduct);

  useEffect(() => {
    if (productId && (!product || String(product.id) !== String(productId))) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (!product || loading || String(product.id) !== String(productId)) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <main>

      <Breadcrumb productTitle={product?.name} />

      <section className="bg-[#FAFAFA] py-6 md:py-10">
        <div className="max-w-[1088px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[15px]">
          <ProductGallery product={product} />
          <div className="flex flex-col gap-6">
            <ProductInfo product={product} />
            <ActionBar className="mt-2" />
          </div>
        </div>
      </section>

      <ProductDescription product={product} />
      <BestsellerProducts />
      <LogoList />
    </main>
  );
}
