
import EditorsPick from "../components/home/EditorsPick";
import BestSellerProducts from "../components/home/BestSellerProducts";
import HomeTopSlider from "../components/home/HomeTopSlider";
import HomeBottomSlider from "../components/home/HomeBottomSlider";
import Container from "../components/home/Container";
import FeaturedPostCard from "../components/home/FeaturedPostCard";

export default function Home() {
  return (
    <main>
      <HomeTopSlider />
      <EditorsPick />
      <BestSellerProducts limit={8} />
      <HomeBottomSlider />
      <Container />
      <FeaturedPostCard />
    </main>
  );
}
