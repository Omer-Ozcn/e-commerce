import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import HomeTopSlider from "../components/HomeTopSlider.jsx"; 
import EditorsPick from "../components/EditorsPick.jsx";
import ProductCard from "../components/ProductCard.jsx";
import HomeBottomSlider from '../components/HomeBottomSlider.jsx';
import Container from "../components/Container.jsx";
import FeaturedPostCard from "../components/FeaturedPostCard.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col max-w-[1280px] mx-auto px-4">
      <Header />
      <main className="flex flex-col flex-1 w-full">
        <HomeTopSlider />
        <EditorsPick />
        <ProductCard />
        <HomeBottomSlider />
        <Container />
        <FeaturedPostCard />
      </main>
      <Footer />
    </div>
  );
}
