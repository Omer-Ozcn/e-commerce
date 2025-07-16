import { useState } from 'react';
import './App.css';
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import HomeSlider from "./components/Home-top-slider.jsx"; 

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center my-10">
        <HomeSlider />
      </main>
      <Footer />
    </>
  );
}

export default App;
