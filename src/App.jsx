import { useState } from 'react';
import './App.css';
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import HomeTopSlider from "./components/HomeTopSlider.jsx"; 
import EditorsPick from "./components/EditorsPick.jsx";
import ProductCard from "./components/ProductCard.jsx";
import HomeBottomSlider from './components/HomeBottomSlider.jsx';


function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center flex-1 w-full">
        <HomeTopSlider />
        <EditorsPick />
        <ProductCard />
        <HomeBottomSlider /> 
      </main>
      <Footer />
    </>
  );
}

export default App;
