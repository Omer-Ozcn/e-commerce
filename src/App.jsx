import { useState } from 'react';
import './App.css';
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import HomeSlider from "./components/HomeTopSlider.jsx"; 
import EditorsPick from "./components/EditorsPick.jsx";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <HomeSlider />
        <EditorsPick />
        <ProductCard /> 
      </main>
      <Footer />
    </>
  );
}

export default App;
