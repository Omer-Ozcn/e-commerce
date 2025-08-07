
import EditorsPick from "../components/home/EditorsPick";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HomeTopSlider from "../components/home/HomeTopSlider";
import HomeBottomSlider from "../components/home/HomeBottomSlider";
import Container from "../components/home/Container";
import FeaturedPostCard from "../components/home/FeaturedPostCard";

export default function Home() {
  return (
    <main>
      <HomeTopSlider />
      <EditorsPick />
      <FeaturedProducts />
      <HomeBottomSlider />
      <Container />
      <FeaturedPostCard />
    </main>
  );
}
