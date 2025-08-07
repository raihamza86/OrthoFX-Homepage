import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "OrthoFX Difference", href: "#" },
  { label: "Smile Results", href: "#" },
  { label: "Smile Quiz", href: "#" },
];

const productItems = [
  "AirFlex™",
  "FXClear™",
  "FXBright™",
  "FXRetainers",
];

const serviceItems = [
  "FXPay™",
  "FXOnTrack™",
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold">OrthoFX</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Links */}
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-black">
                {item.label}
              </a>
            ))}

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-black flex items-center gap-1">
                Products ▼
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {productItems.map((prod) => (
                  <a key={prod} href="#" className="block px-4 py-2 hover:bg-gray-100">{prod}</a>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-black flex items-center gap-1">
                Services ▼
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {serviceItems.map((svc) => (
                  <a key={svc} href="#" className="block px-4 py-2 hover:bg-gray-100">{svc}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-black">Find a doctor</a>
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Become a provider
            </button>
          </div>

      
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800">
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <a key={item.label} href="#" className="text-gray-700 hover:text-black">{item.label}</a>
            ))}
            <hr />
            {productItems.map((prod) => (
              <a key={prod} href="#" className="text-gray-700 hover:text-black pl-2">{prod}</a>
            ))}
            <hr />
            {serviceItems.map((svc) => (
              <a key={svc} href="#" className="text-gray-700 hover:text-black pl-2">{svc}</a>
            ))}
            <hr />
            <a href="#" className="text-gray-700 hover:text-black">Find a doctor</a>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Become a provider
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
