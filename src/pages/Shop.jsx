import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../store/thunks/productThunks";

import Breadcrumb from "../components/common/Breadcrumb";
import CategoryCard from "../components/shop/CategoryCard";
import ShopFilter from "../components/shop/ShopFilter";
import ProductCard from "../components/shop/ProductCard";
import Pagination from "../components/shop/Pagination";
import LogoList from "../components/shop/Icons";

export default function Shop() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();    

  const { productList = [], fetchState = "NOT_FETCHED", total = 0, limit:limitFromStore } =
    useSelector((s) => s.product || {});

  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy]     = useState("price:asc"); 
  const [filterText, setFilterText] = useState("");
  const [limit, setLimit]       = useState(limitFromStore || 12);
  const [page, setPage]         = useState(1);

  const offset = (page - 1) * limit;
  const catId  = categoryId ? Number(categoryId) : undefined;

  useEffect(() => {
    dispatch(fetchProducts({
      limit,
      offset,
      categoryId: catId,
      sort: sortBy,
      filter: filterText,
    }));
  }, [dispatch, limit, offset, catId, sortBy, filterText]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((Number(total) || 0) / limit)),
    [total, limit]
  );

  const handleApply = () => setPage(1);

  const isLoading = fetchState === "LOADING";
  const isFailed  = fetchState === "FAILED";

  const gridCls =
    viewMode === "grid"
      ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

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
        onFilterChange={setFilterText}
        onViewChange={setViewMode}
        onApply={handleApply}
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Products ({total})</h2>
            <select
              value={limit}
              onChange={(e) => { setPage(1); setLimit(Number(e.target.value) || 12); }}
              className="h-9 px-2 border rounded text-sm text-[#737373]"
              title="Items per page"
            >
              <option value={8}>8 / page</option>
              <option value={12}>12 / page</option>
              <option value={16}>16 / page</option>
              <option value={24}>24 / page</option>
            </select>
          </div>

          <div className={gridCls}>
            {productList.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(p) => {
                if (p >= 1 && p <= totalPages) setPage(p);
              }}
            />
          )}
        </section>
      )}

      <LogoList />
    </main>
  );
}
