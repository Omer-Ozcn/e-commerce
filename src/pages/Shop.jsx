import Breadcrumb from "../components/common/Breadcrumb";
import CategoryCard from "../components/shop/CategoryCard";
import ShopFilter from "../components/shop/ShopFilter";
import EditorsPickCard from "../components/shop/EditorsPickCard";
import LogoList from "../components/shop/Icons";

export default function Shop() {
  return (
    <main>
      <Breadcrumb />
      <CategoryCard />
      <ShopFilter />
      <EditorsPickCard />
      <LogoList />
    </main>
  );
}
