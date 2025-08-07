
import CategoryCard from "../components/shop/CategoryCard";
import EditorsPickCard from "../components/shop/EditorsPickCard";
import ShopFilter from "../components/shop/ShopFilter";
import LogoList from "../components/shop/Icons";

export default function Shop() {
  return (
    <main>
      <CategoryCard/>
      <ShopFilter />
      <EditorsPickCard />
      <LogoList />
    </main>
  );
}