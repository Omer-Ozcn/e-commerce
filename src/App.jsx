import { useState } from 'react';
import './App.css';
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import HomeSlider from "./components/Home-top-slider.jsx"; 
import EditorsPick from "./components/EditorsPick.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <HomeSlider />
        <EditorsPick />
      </main>
      <Footer />
    </>
  );
}

export default App;
