import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { LogoIcon, LogoIconWhite, ProfileIcon } from "./NavIcons";

const navItems = [
  { label: "OrthoFX Difference" },
  { label: "Smile Results" },
  { label: "Smile Quiz" },
];

const productItems = [
  {
    img: "/nav-1.jpg",
    title: "AirFlex™",
    detail:
      "The first FDA-cleared aligner system for at least 12 hours of continuous daily wear time.",
  },
  {
    img: "/nav-2.jpg",
    title: "FXBright™",
    detail:
      "Enjoy effortless whiter teeth from the start of your orthodontic treatment.",
  },
  {
    img: "/nav-3.jpg",
    title: "FXClear™",
    detail:
      "Combining advanced technology and remote monitoring to keep your treatment on track comfortably.",
  },
  {
    img: "/nav-4.jpg",
    title: "FXRetainers",
    detail: "Keep your smile straighter and brighter for long-lasting results.",
  },
];

const serviceItems = [
  {
    title: "FXPay™",
    detail: "Flexible payment plans to keep you covered.",
  },
  {
    title: "FXOnTrack™",
    detail:
      "AI-powered platform that enables your doctor to monitor your progress remotely.",
  },
];

const proItems = ["Patient Login", "Doctor Login"];

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

      // Background states
      if (currentScrollY <= 10) {
        setIsScrolled("transparent");
      } else if (currentScrollY > 10 && currentScrollY <= 900) {
        setIsScrolled("white");
      } else {
        setIsScrolled("black");
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
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
      className={`fixed top-0 z-50 w-full transition-all duration-500
      ${isScrolled === "transparent" ? "bg-transparent" : ""}
      ${isScrolled === "white" ? "bg-white" : ""}
      ${isScrolled === "black" ? "bg-[#15161a]" : ""}
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
<nav className="max-w-7xl 2xl:max-w-[68%] mx-auto px-6 md:px-12 lg:px-20 xl:px-8 2xl:px-0 [@media(min-width:1370px)]:px-0">
        <div className="flex items-center justify-between h-[66px] xl:h-[90px] xl:px-12 2xl:px-0 px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button>
              {isScrolled === "black" ? <LogoIconWhite /> : <LogoIcon />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center ml-6 space-x-6">
            {/* First Item */}
            <button
              key={navItems[0].label}
              className={`${
                isScrolled === "black"
                  ? "text-white hover:bg-[#38393c]"
                  : "text-[#15161a] hover:bg-[#d9edf7]"
              } rounded-full px-3 py-2 transition-all duration-300 tk-neue-haas-grotesk-display`}
            >
              {navItems[0].label}
            </button>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className={`${
                  isScrolled === "black"
                    ? "text-white hover:bg-[#38393c]"
                    : "text-[#15161a] hover:bg-[#d9edf7]"
                } flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-300 tk-neue-haas-grotesk-display`}
              >
                Products{" "}
                {openDropdown === "products" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {openDropdown === "products" && (
                <div className="absolute left-0 mt-2 w-[90vw] max-w-4xl bg-[#38393c] shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  {productItems.map((prod) => (
                    <button
                      key={prod.title}
                      className="block w-full text-left px-4 py-3 hover:bg-[#2a2a2a] rounded-lg transition"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          className="w-16 md:w-20 rounded-2xl"
                          src={prod.img}
                          alt={prod.title}
                        />
                        <div>
                          <p className="text-white text-[16px] md:text-[18px]">
                            {prod.title}
                          </p>
                          <p className="text-[#96a2a7] text-[13px] md:text-[14px]">
                            {prod.detail}
                          </p>
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
                className={`${
                  isScrolled === "black"
                    ? "text-white hover:bg-[#38393c]"
                    : "text-[#15161a] hover:bg-[#d9edf7]"
                } flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-300 tk-neue-haas-grotesk-display`}
              >
                Services{" "}
                {openDropdown === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {openDropdown === "services" && (
                <div className="absolute left-0 mt-2 w-72 bg-[#15161a] shadow-lg rounded-xl p-4 space-y-3">
                  {serviceItems.map((svc) => (
                    <button
                      key={svc.title}
                      className="block w-full text-left hover:bg-[#292930] px-3 py-2 rounded-lg transition"
                    >
                      <p className="text-white text-[16px] md:text-[18px]">{svc.title}</p>
                      <p className="text-[#96a2a7] text-[13px] md:text-[14px]">
                        {svc.detail}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining Nav Items */}
            {navItems.slice(1).map((item) => (
              <button
                key={item.label}
                className={`${
                  isScrolled === "black"
                    ? "text-white hover:bg-[#38393c]"
                    : "text-[#15161a] hover:bg-[#d9edf7]"
                } rounded-full px-3 py-2 transition-all duration-300 tk-neue-haas-grotesk-display`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Buttons (Desktop) */}
          <div className="hidden xl:flex items-center space-x-4 ml-auto [@media(min-width:1440px)_and_(max-width:1530px)]:mr-[-2%]">
            <button className="bg-[#292930] text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition tk-neue-haas-grotesk-display">
              Become a provider
            </button>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("profile")}
                className="text-white bg-[#292930] py-2 px-4 rounded-full hover:bg-white hover:text-black transition"
              >
                <ProfileIcon />
              </button>
              {openDropdown === "profile" && (
                <div className="absolute right-0 mt-2 w-40 bg-[#15161a] shadow-lg rounded-2xl">
                  {proItems.map((item, i) => (
                    <button
                      key={i}
                      className="block w-full text-center px-2 py-2 hover:bg-[#292930] transition"
                    >
                      <p className="text-white text-[14px] md:text-[16px] tk-neue-haas-grotesk-display">
                        {item}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${
                isScrolled === "black" ? "text-white" : "text-[#15161a]"
              } flex items-center gap-2`}
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
            className="xl:hidden fixed top-0 left-0 w-full h-screen bg-[#15161a] z-50 flex flex-col"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white flex items-center py-4 px-6 gap-2 tk-neue-haas-grotesk-display"
              >
                <FiX size={20} /> <p className="text-[#d9edf7]">Close</p>
              </button>
            </div>

            {/* Scrollable Items */}
            <div className="flex-1 overflow-y-auto px-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="text-[#d9edf7] text-left text-[18px] tk-neue-haas-grotesk-display"
                >
                  {item.label}
                </button>
              ))}

              {/* Products */}
              <p className="text-[#c8d7de] text-[18px]">Products</p>
              {productItems.map((prod) => (
                <button key={prod.title} className="w-full text-left">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-16 rounded-2xl"
                      src={prod.img}
                      alt={prod.title}
                    />
                    <div>
                      <p className="text-white text-[16px]">{prod.title}</p>
                      <p className="text-[#96a2a7] text-[14px]">{prod.detail}</p>
                    </div>
                  </div>
                </button>
              ))}

              {/* Services */}
              <p className="text-[#c8d7de] text-[18px]">Services</p>
              {serviceItems.map((svc) => (
                <button key={svc.title} className="w-full text-left">
                  <p className="text-white text-[16px]">{svc.title}</p>
                  <p className="text-[#96a2a7] text-[14px]">{svc.detail}</p>
                </button>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="flex items-center justify-between bg-[#38393c] p-4">
              <button className="bg-[#292930] text-[14px] md:text-[16px] text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition tk-neue-haas-grotesk-display">
                Become a provider
              </button>
              <button className="group relative overflow-hidden px-4 py-2 rounded-full bg-[#f0f0f0] text-black text-[14px] md:text-[16px] flex items-center gap-2 transition">
                <span className="absolute inset-0 bg-[#c8d7de] w-0 group-hover:w-full transition-all duration-500"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black tk-neue-haas-grotesk-display">
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
