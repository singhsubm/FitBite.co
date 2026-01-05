import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', link: '/', icon: 'ri-home-smile-line' },
    { name: 'Story', link: '/story', icon: 'ri-book-open-line' },
    { name: 'Shop', link: '/shop', icon: 'ri-store-2-line' },
    { name: 'Blog', link: '/blog', icon: 'ri-article-line' },
    { name: 'New Launches', link: '/new', icon: 'ri-rocket-line' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/20 backdrop-blur-lg bg-white/10 shadow-sm">
        
        {/* 1. Logo */}
        <div className="text-xl md:text-2xl font-bold tracking-tighter text-black cursor-pointer z-50">
          FIT BITE.<span className="text-yellow-600">CO</span>
        </div>

        {/* 2. Desktop Navigation */}
        <div className="hidden md:flex items-center gap-20">
          {navLinks.map((item, index) => (
            <Link to={item.link} 
              key={index} 
              className="group relative text-sm font-medium text-black cursor-pointer"
            >
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-lg text-yellow-700 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <i className={item.icon}></i>
              </span>
              <span className="transition-colors duration-300 group-hover:text-yellow-700">
                {item.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 3. Right Side Icons & Button */}
        <div className="flex items-center gap-4 md:gap-6 z-50">
          
          {/* Cart Icon */}
          <div className="relative cursor-pointer group">
            <i className="ri-shopping-bag-3-line text-xl text-black hover:text-yellow-700 transition-colors"></i>
            <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
          </div>

          {/* --- NEW ANIMATED BUTTON STARTS HERE --- */}
          <button className="group hidden md:flex px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-gray-800 transition-all active:scale-95 items-center gap-2">
            
            {/* Left Arrow (Initially Hidden) */}
            <div className="w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <i className="ri-arrow-right-line"></i>
            </div>

            <span>Raise a Query</span>

            {/* Right Arrow (Initially Visible) */}
            <div className="w-4 overflow-hidden opacity-100 group-hover:w-0 group-hover:opacity-0 transition-all duration-300 ease-in-out">
              <i className="ri-arrow-right-line"></i>
            </div>
          
          </button>
          {/* --- NEW ANIMATED BUTTON ENDS HERE --- */}

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-4-line"}></i>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#fdfbf7] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((item, index) => (
          <Link 
            key={index} 
            to={item.link} 
            onClick={toggleMenu} 
            className="text-2xl font-semibold text-gray-800 hover:text-yellow-700 flex items-center gap-3 transition-all"
          >
            <i className={`${item.icon} text-yellow-600`}></i>
            {item.name}
          </Link>
        ))}
        <button className="mt-5 px-8 py-3 bg-black text-white font-bold rounded-full">
          Raise a Query
        </button>
      </div>
    </>
  );
};

export default Navbar;