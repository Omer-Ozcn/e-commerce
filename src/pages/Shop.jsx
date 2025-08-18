import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../store/thunks/productThunks";

import Breadcrumb from "../components/common/Breadcrumb";
import CategoryCard from "../components/shop/CategoryCard";
import ShopFilter from "../components/shop/ShopFilter";
import ProductCard from "../components/shop/ProductCard";
import LogoList from "../components/shop/Icons";

export default function Shop() {
  const dispatch = useDispatch();
  const { categoryId: categoryIdFromUrl } = useParams(); 
  const { productList = [], fetchState = "NOT_FETCHED", total = 0 } =
    useSelector((s) => s.product || {});

  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("price:asc");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    dispatch(
      fetchProducts({
        limit: 12,
        offset: 0,
        categoryId: categoryIdFromUrl ? Number(categoryIdFromUrl) : undefined,
        sort: sortBy,
        filter: filterText,
      })
    );
  }, [dispatch, categoryIdFromUrl, sortBy, filterText]);

  const isLoading = fetchState === "LOADING";
  const isFailed = fetchState === "FAILED";

  const gridCls =
    viewMode === "grid"
      ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

  const shownProducts = useMemo(() => productList, [productList]);

  return (
    <main>
      <Breadcrumb />

      <CategoryCard />

      <ShopFilter
        totalResults={total}
        sortBy={sortBy}
        filterText={filterText}
        viewMode={viewMode}
        onSortChange={setSortBy}
        onFilterTextChange={setFilterText}
        onViewChange={setViewMode}
      />

      {isLoading && (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-[#23A6F0]" />
        </div>
      )}

      {isFailed && (
        <p className="text-center text-red-500 py-8">
          Ürünler yüklenirken bir sorun oluştu.
        </p>
      )}

      {!isLoading && !isFailed && (
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-4">Products ({total})</h2>
          <div className={gridCls}>
            {shownProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <LogoList />
    </main>
  );
}
