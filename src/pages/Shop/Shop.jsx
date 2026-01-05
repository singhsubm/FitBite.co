import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';

// 1. MOCK DATA (Products)
const allProducts = [
  { id: 1, name: "Premium Almonds", category: "Almonds", price: "₹899", rating: 4.8, img: "https://images.unsplash.com/photo-1596812179986-c78ad0debed8?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Royal Cashews", category: "Cashews", price: "₹1,299", rating: 4.9, img: "https://images.unsplash.com/photo-1626697556426-8a55a8af4999?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Salted Pistachios", category: "Pistachios", price: "₹1,499", rating: 4.7, img: "https://images.unsplash.com/photo-1615485737646-a0363aba01ec?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Kashmiri Walnuts", category: "Walnuts", price: "₹1,100", rating: 4.8, img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=500&auto=format&fit=crop" },
  { id: 5, name: "Dried Figs (Anjeer)", category: "Exotic", price: "₹999", rating: 4.6, img: "https://plus.unsplash.com/premium_photo-1661342486992-2a08d4b466ef?q=80&w=500&auto=format&fit=crop" },
  { id: 6, name: "Luxury Gift Box", category: "Gifts", price: "₹2,499", rating: 5.0, img: "https://images.unsplash.com/photo-1621470626377-dd2757ae6216?q=80&w=687&auto=format&fit=crop" },
  { id: 7, name: "Mamra Badam", category: "Almonds", price: "₹1,899", rating: 4.9, img: "https://imahttps://images.unsplash.com/photo-1601966915100-b217f1420977?q=80&w=688&auto=format&fit=crop" },
  { id: 8, name: "Roasted Cashews", category: "Cashews", price: "₹1,350", rating: 4.8, img: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=500&auto=format&fit=crop" },
];

const categories = ["All", "Almonds", "Cashews", "Pistachios", "Walnuts", "Gifts"];

const Shop = () => {
  const [products, setProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const container = useRef(null);

  // 2. FILTER LOGIC
  useEffect(() => {
    let filtered = allProducts;

    // Filter by Category
    if (activeCategory !== "All") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProducts(filtered);
    
    // Animation Re-trigger when filter changes
    gsap.fromTo(".product-card", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );

  }, [activeCategory, searchQuery]);


  // Initial Page Load Animation
  useGSAP(() => {
    gsap.from(".shop-header", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(".shop-sidebar", { x: -50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.3 });
  }, { scope: container });


  return (
    <div ref={container} className="w-full bg-[#fdfbf7] min-h-screen pt-32 pb-20 px-4 md:px-10">
      
      {/* HEADER */}
      <div className="shop-header text-center mb-16">
        <h1 className="text-5xl md:text-7xl playfair font-bold text-[#4a3b2a] mb-4">
          The Collection
        </h1>
        <p className="text-stone-500 uppercase tracking-widest text-xs md:text-sm">
          Pure. Organic. Handpicked.
        </p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="flex flex-col md:flex-row gap-10 max-w-[1600px] mx-auto">
        
        {/* === SIDEBAR (FILTERS) === */}
        {/* Mobile: Full width, Desktop: Sticky 1/4 width */}
        <aside className="shop-sidebar w-full md:w-1/4 h-fit md:sticky md:top-32 z-10">
          
          {/* Search Box */}
          <div className="bg-white p-6 rounded-[30px] shadow-sm mb-8 border border-[#4a3b2a]/5">
            <h3 className="font-playfair font-bold text-xl mb-4 text-[#4a3b2a]">Search</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Find your favorite..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#fdfbf7] rounded-full py-3 px-10 outline-none border border-transparent focus:border-[#d4a017] transition-all text-sm font-medium"
              />
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-8 rounded-[30px] shadow-sm border border-[#4a3b2a]/5">
            <h3 className="font-playfair font-bold text-xl mb-6 text-[#4a3b2a]">Categories</h3>
            <ul className="flex flex-col gap-3">
              {categories.map((cat) => (
                <li 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer flex justify-between items-center group ${activeCategory === cat ? 'text-[#d4a017] font-bold' : 'text-stone-500'}`}
                >
                  <span className="transition-all duration-300 group-hover:translate-x-2">{cat}</span>
                  {activeCategory === cat && <i className="ri-arrow-right-s-line"></i>}
                </li>
              ))}
            </ul>
          </div>
        </aside>


        {/* === PRODUCT GRID === */}
        <div className="w-full md:w-3/4">
          
          {/* Results Count */}
          <p className="text-sm text-stone-400 mb-6 font-medium">
            Showing {products.length} results
          </p>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {products.map((item) => (
                <div key={item.id} className="product-card group relative bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#4a3b2a]/5">
                  
                  {/* Image Area */}
                  <div className="h-64 md:h-72 w-full overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-[#4a3b2a]">
                      {item.category}
                    </span>

                    {/* Quick Add Button (Appears on Hover) */}
                    <div className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-md p-4 border-t border-[#4a3b2a]/10 flex justify-between items-center">
                        <span className="text-sm font-bold text-[#4a3b2a]">Quick Add</span>
                        <button className="w-8 h-8 rounded-full bg-[#d4a017] text-white flex items-center justify-center hover:bg-[#4a3b2a] transition-colors">
                            <i className="ri-add-line"></i>
                        </button>
                    </div>
                  </div>

                  {/* Details Area */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair font-bold text-xl text-[#4a3b2a] leading-tight group-hover:text-[#d4a017] transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex gap-1 text-xs text-[#d4a017]">
                        <i className="ri-star-fill"></i>
                        <span className="text-stone-400">{item.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                        Premium quality sourced directly from the best farms.
                    </p>

                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-xl font-bold text-[#4a3b2a]">{item.price}</span>
                        <button className="border border-[#4a3b2a]/20 px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-[#4a3b2a] hover:text-white transition-all duration-300">
                            View Details
                        </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            // EMPTY STATE (Agar search me kuch na mile)
            <div className="flex flex-col items-center justify-center h-64 text-center opacity-50">
                <i className="ri-shopping-basket-line text-6xl mb-4 text-stone-300"></i>
                <h3 className="text-2xl font-playfair font-bold text-[#4a3b2a]">No Products Found</h3>
                <p className="text-stone-500">Try adjusting your filters.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;