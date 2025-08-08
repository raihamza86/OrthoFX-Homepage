import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";


const navItems = [
  { label: "Company" },
  { label: "OrthoFX Difference" },
  { label: "Smile Results" },
  { label: "Smile Quiz" },
];

const productItems = [
  {img: '/nav-1.jpg', title: "AirFlex™", detail: "The first FDA-cleared aligner system for at least 12 hours of continuous daily wear time."}, 
  {img: '/nav-2.jpg', title: "FXBright™", detail: "Enjoy effortless whiter teeth from the start of your orthodontic treatment."},
  {img: '/nav-3.jpg', title: "FXClear™", detail: "Combining advanced technology and remote monitoring to keep your treatment on track comfortably."},
  {img: '/nav-4.jpg', title: "FXRetainers", detail: "Keep your smile straighter and brighter for long-lasting results."},
];
const serviceItems = [{title: "FXPay™", detail: "Flexible payment plans to keep you covered."}, {title: "FXOnTrack™", detail: "AI-powered platform that enables your doctor to monitor your progress remotely."}];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
      const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

    // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change background after scrolling 50px
      setIsScrolled(currentScrollY > 50);

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNavbar(false); 
      } else {
        // scrolling up
        setShowNavbar(true); 
      }

      setLastScrollY(currentScrollY);
    };

      if (mobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  return (
   <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button className="text-xl font-bold">OrthoFX</button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">

              <button
    key={navItems[0].label}
    className="text-[#15161a] hover:bg-[#d9edf7] rounded-full p-2 hover:cursor-pointer transition-all duration-300 ease-in-out"
  >
    {navItems[0].label}
  </button>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="text-[#15161a] flex items-center gap-1 hover:bg-[#d9edf7] rounded-full p-2 transition-all duration-300 ease-in-out hover:cursor-pointer"
              >
                Products {openDropdown === "products" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {openDropdown === "products" && (
                <div className="absolute right-[-30rem] mt-1 w-[820px] bg-[#15161a] shadow-lg rounded-xl transition-all duration-300 ease-in-out grid grid-cols-2">
                  {productItems.map((prod) => (
                    <button
                      key={prod.title}
                      className="block w-full text-left px-8 py-4"
                    >
                      <div className="flex items-center gap-4">
                      <img className="w-20 rounded-2xl" src={prod.img} alt={prod.title} />
                      <div>
                      <p className="text-white text-[18px]">{prod.title}</p>
                      <p className="text-[#96a2a7] text-[14px]">{prod.detail}</p>
                      </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="text-[#15161a] flex items-center gap-1 hover:bg-[#d9edf7] rounded-full p-2 transition-all duration-300 ease-in-out hover:cursor-pointer"
              >
                Services {openDropdown === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {openDropdown === "services" && (
                <div className="absolute left-0 mt-1 w-[286px] bg-[#15161a] shadow-lg rounded-xl transition-all duration-300 ease-in-out">
                  {serviceItems.map((svc) => (
                    <button
                      key={svc.title}
                      className="block w-full text-left px-8 py-4"
                    >
                      <p className="text-white text-[18px]">{svc.title}</p>
                      <p className="text-[#96a2a7] text-[14px]">{svc.detail}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <button
                key={item.label}
                className="text-[#15161a] hover:bg-[#d9edf7] rounded-full p-2 hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                {item.label}
              </button>
            ))}

          </div>

          {/* Right Buttons */}
          <div className="hidden xl:flex items-center space-x-4">
            <button className="bg-[#292930] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:cursor-pointer">
              Become a provider
            </button>
            <button className="text-white hover:text-black hover:bg-white p-1 rounded-full bg-[#292930] transition-all duration-300 ease-in-out hover:cursor-pointer">
              <CgProfile size={30} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 flex items-center hover:cursor-pointer gap-2"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

{/* Mobile Menu */}
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
className="xl:hidden fixed top-0 left-0 w-full h-screen bg-[#15161a] shadow-md z-50 flex flex-col"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Close Button */}
  <div className="flex-shrink-0 w-full flex justify-end">
    <button
      onClick={() => setMobileMenuOpen(false)}
      className="text-white flex items-center hover:cursor-pointer py-4 px-12 gap-2"
    >
      <FiX size={20} /> <p className="text-[#d9edf7]">Close</p>
    </button>
  </div>

      {/* Scrollable Menu Items */}
  <div className="flex-1 flex flex-col overflow-y-auto scroll-hide px-4 pb-4 space-y-2">
    {navItems.map((item) => (
      <button
        key={item.label}
        className="text-[#d9edf7] text-left text-[18px] hover:cursor-pointer"
      >
        {item.label}
      </button>
    ))}

        {/* Products */}
        <button className="text-[#c8d7de] text-left text-[18px] hover:cursor-pointer">
          Products
        </button>
        {productItems.map((prod) => (
          <button key={prod.title} className="w-full text-left">
            <div className="flex items-center gap-4">
              <img className="w-20 rounded-2xl" src={prod.img} alt={prod.title} />
              <div>
                <p className="text-white text-[18px]">{prod.title}</p>
                <p className="text-[#96a2a7] text-[14px]">{prod.detail}</p>
              </div>
            </div>
          </button>
        ))}

        {/* Services */}
        <button className="text-[#c8d7de] text-left text-[18px] hover:cursor-pointer">
          Services
        </button>
        {serviceItems.map((svc) => (
          <button key={svc.title} className="w-full text-left">
            <p className="text-white text-[18px]">{svc.title}</p>
            <p className="text-[#96a2a7] text-[14px]">{svc.detail}</p>
          </button>
        ))}
      </div>

      {/* Bottom Buttons */}
  <div className="flex-shrink-0 w-full flex items-center justify-between bg-[#38393c] md:py-[12px] px-2 md:px-8 py-2">
    <button className="bg-[#292930] text-[14px] md:text-[18px] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
      Become a provider
    </button>
    <button className="group relative overflow-hidden px-4 py-2 rounded-full bg-[#f0f0f0] text-black text-[14px] md:text-[18px] flex items-center gap-2 transition-all duration-300">
      <span className="absolute inset-0 bg-[#c8d7de] w-0 group-hover:w-full transition-all duration-500 right-0 z-0"></span>
      <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
        Find a doctor
        <FaArrowRightLong />
      </span>
    </button>
  </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
};

export default Navbar;
