// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Product from './pages/SecondPage/Product';
import Hero from './pages/Home/Hero';
import ShopCategories from './pages/ThirdPage/ShopCategories';
import MarqueeSection from './pages/FourthPage/MarqueeSection';
import BlogStack from './pages/FifthPage/BlogStack';
import FlavorPalette from './components/FlavorPalette';
import HighlightText from './components/HighlightText';
import Footer from './pages/Footer/Footer';
import Shop from './pages/Shop/Shop';
import Story from './pages/Story/Story';

const Home = () => {
  return (
    <div className="bg-[rgb(255, 219, 165)]">
      <section id='home'><Hero /></section>
      <section id='product'><Product/></section>
      <section id='category'><ShopCategories/></section>
      <section id='marquee'><MarqueeSection/></section>
      <section id='text'><HighlightText/></section>
      <section id='flavour'><FlavorPalette/></section>
      <section id='blog'><BlogStack/></section>

      
    </div>
  )
}
function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#fdfbf7]">
        <CustomCursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;