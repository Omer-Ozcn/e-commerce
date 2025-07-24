
import EditorsPick from "../components/EditorsPick";
import FeaturedProducts from "../components/FeaturedProducts";
import HomeTopSlider from "../components/HomeTopSlider";
import HomeBottomSlider from "../components/HomeBottomSlider";
import Container from "../components/Container";
import FeaturedPostCard from "../components/FeaturedPostCard";

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
