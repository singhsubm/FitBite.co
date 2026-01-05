import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdfbf7] pt-16 md:pt-32 pb-8 px-6 md:px-10 border-t border-[#4a3b2a]/10 overflow-hidden relative">
      
      <div className="max-w-[1600px] mx-auto">
        
        {/* 1. TOP SECTION: Newsletter & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 mb-16 md:mb-32">
          
          {/* Newsletter (Left Side) */}
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-[#4a3b2a] mb-6 leading-tight">
              Stay in the loop.
            </h3>
            <div className="relative border-b border-[#4a3b2a]/30 pb-2 flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent outline-none text-[#4a3b2a] placeholder-stone-400 font-medium text-base md:text-lg"
              />
              <button className="text-[#4a3b2a] hover:text-[#d4a017] transition-colors p-2">
                <i className="ri-arrow-right-up-line text-2xl"></i>
              </button>
            </div>
            <p className="text-xs text-stone-400 mt-4 tracking-wide">
              *No spam, just healthy vibes.
            </p>
          </div>

          {/* Links (Right Side) - MOBILE GRID FIX */}
          {/* Mobile: Grid (2 cols), Desktop: Flex Row */}
          <div className="w-full md:w-auto grid grid-cols-2 md:flex gap-y-10 gap-x-4 md:gap-24">
            
            {/* Column 1: Shop */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#d4a017] mb-2">Shop</h4>
              {['Almonds', 'Cashews', 'Gift Boxes', 'Subscription'].map((link) => (
                <a key={link} href="#" className="text-[#4a3b2a] text-sm md:text-base font-medium hover:italic hover:translate-x-1 transition-all duration-300">
                  {link}
                </a>
              ))}
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#d4a017] mb-2">Company</h4>
              {['Our Story', 'Journal', 'Contact', 'FAQ'].map((link) => (
                <a key={link} href="#" className="text-[#4a3b2a] text-sm md:text-base font-medium hover:italic hover:translate-x-1 transition-all duration-300">
                  {link}
                </a>
              ))}
            </div>

            {/* Column 3: Socials */}
            {/* col-span-2: Mobile pe ye puri width lega niche */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4 mt-2 md:mt-0">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#d4a017] mb-2">Socials</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#4a3b2a]/20 flex items-center justify-center text-[#4a3b2a] hover:bg-[#4a3b2a] hover:text-white transition-all duration-300">
                  <i className="ri-instagram-line text-lg md:text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#4a3b2a]/20 flex items-center justify-center text-[#4a3b2a] hover:bg-[#4a3b2a] hover:text-white transition-all duration-300">
                  <i className="ri-twitter-x-line text-lg md:text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#4a3b2a]/20 flex items-center justify-center text-[#4a3b2a] hover:bg-[#4a3b2a] hover:text-white transition-all duration-300">
                  <i className="ri-youtube-line text-lg md:text-xl"></i>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. MASSIVE BRAND NAME (Bottom) */}
        {/* leading adjust kiya taaki mobile pe text ke beech gap kam rahe */}
        <div className="w-full border-t border-[#4a3b2a]/10 pt-8 md:pt-0 flex justify-center items-center overflow-hidden">
          <h1 className="text-[13vw] leading-[0.85] md:leading-[1.1] playfair font-black text-[#4a3b2a] uppercase tracking-tighter text-center whitespace-nowrap select-none opacity-90 hover:opacity-100 transition-opacity duration-500 cursor-default py-4 md:py-0">
            FIT BITE.<span className='text-[#d4a017]'>CO</span>
          </h1>
        </div>

        {/* 3. COPYRIGHT STRIP */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-8 text-[10px] md:text-xs font-bold text-[#4a3b2a]/50 uppercase tracking-widest text-center md:text-left gap-4 md:gap-0">
           <p>© 2026 FitBite. All Rights Reserved.</p>
           <div className="flex gap-6">
             <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;