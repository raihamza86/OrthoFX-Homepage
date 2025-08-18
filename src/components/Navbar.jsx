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
      className={`fixed top-0 z-50 w-full transition-all py-4 duration-500 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button className="text-black"><svg width="139" height="22" viewBox="0 0 139 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M113.465 0H99.9567L95.302 22H101.407L103.697 11.1808H103.734C105.305 11.1808 106.529 11.3364 107.406 11.6489C108.283 11.9615 108.811 12.3696 108.993 12.8733H109.053L109.838 9.18679H109.778C109.395 9.65005 108.71 10.0079 107.723 10.2592C106.736 10.5116 105.446 10.6366 103.855 10.6366H103.812L105.949 0.544148H106.484C107.773 0.544148 108.967 0.780681 110.065 1.25375C111.163 1.72804 112.175 2.45847 113.102 3.44504H113.162L113.465 0ZM19.2437 1.32479C21.0919 2.20842 22.5307 3.4683 23.5369 5.11177C24.543 6.75524 25.0504 8.72717 25.0504 11.0079C25.0504 13.2887 24.5345 15.2606 23.5209 16.9041C22.5074 18.5402 21.06 19.8074 19.1788 20.6825C17.3061 21.5575 15.0486 21.9987 12.4639 21.9987C9.87923 21.9987 7.66342 21.5575 5.8067 20.6825C3.9512 19.8074 2.51975 18.5402 1.51356 16.9041C0.507381 15.2606 0 13.3059 0 11.0079C0 8.71001 0.507381 6.75524 1.52214 5.11177C2.53568 3.46707 3.99164 2.20842 5.8643 1.32479C7.7443 0.442393 10.0104 0.00854492 12.5865 0.00854492C15.1626 0.00854492 17.387 0.441167 19.2437 1.32479ZM12.5215 16.9053C14.4015 16.9053 15.8661 16.382 16.9127 15.3427V15.3452C17.9508 14.3145 18.4741 12.8916 18.4741 11.0104C18.4741 9.12915 17.952 7.67319 16.9127 6.65107C15.8661 5.62038 14.3942 5.113 12.5215 5.113C10.6489 5.113 9.18434 5.62896 8.14629 6.667C7.09108 7.70505 6.56777 9.13651 6.56777 11.0092C6.56777 12.8818 7.09108 14.3292 8.14629 15.3599C9.18434 16.3906 10.6415 16.9053 12.5215 16.9053ZM84.4117 5.60938C87.4143 5.60938 89.7441 6.30549 91.3802 7.71979V7.71856C93.0237 9.1255 93.8497 11.1293 93.8497 13.7299C93.8497 15.431 93.4575 16.9029 92.6805 18.1297C91.8949 19.3565 90.7907 20.2977 89.3433 20.9595C87.9131 21.6139 86.1875 21.9412 84.1751 21.9412C81.1566 21.9412 78.8341 21.2377 77.1907 19.8308C75.546 18.4238 74.7285 16.42 74.7285 13.8194C74.7285 12.0938 75.1207 10.6305 75.9063 9.4037C76.6833 8.1855 77.7961 7.24427 79.2435 6.58247C80.6909 5.92802 82.4079 5.60938 84.4117 5.60938ZM80.7411 13.7569C80.7411 16.3085 81.9189 17.5757 84.2903 17.5757V17.577C86.6532 17.577 87.8395 16.3342 87.8395 13.79C87.8395 11.2457 86.6618 9.97849 84.2903 9.97849C81.9189 9.97849 80.7411 11.2053 80.7411 13.7569ZM73.5935 11.4381V21.4644H67.6483V12.5583C67.6483 10.8976 66.7978 10.0557 65.0882 10.0557C64.6053 10.0557 64.1396 10.1537 63.7057 10.3425C63.2559 10.5312 62.8711 10.7763 62.5439 11.0864C61.8821 11.6587 61.5463 12.3377 61.5463 13.1478V21.4644H55.5925V0.528198H61.5463V8.12544C62.3233 7.32392 63.1983 6.70256 64.1714 6.26871C65.136 5.81893 66.2328 5.60691 67.4425 5.60691C69.3727 5.60691 70.885 6.10571 71.9648 7.12783C73.0604 8.14259 73.5923 9.5814 73.5923 11.4381H73.5935ZM49.265 2.02832H43.3112H43.31V6.07511H40.3735V10.3278H43.31V16.5806C43.31 16.5806 43.3088 20.9755 47.4156 21.576C51.5224 22.1765 54.4577 21.0343 54.4577 21.0343V17.0647C49.2478 18.5378 49.265 15.4323 49.265 15.4323V10.329H54.4577V6.07634H49.265V2.02832ZM39.2399 10.329V5.99419C39.2399 5.99419 34.9983 4.78089 32.0251 8.27618V6.0763H26.1853V21.4681H32.0251V15.0033C32.0251 15.0033 31.7101 9.17942 39.2399 10.329ZM113.479 18.691C114.738 17.5328 116.254 15.9359 118.028 13.9015L120.242 11.3544L113.798 0H120.566L124.667 7.24009C126.269 5.36919 127.421 3.92851 128.12 2.91805C128.865 1.84078 129.328 0.867691 129.51 0.0012207H132.895C131.646 0.989021 130.391 2.09693 129.132 3.32494C127.911 4.5167 126.525 6.00106 124.973 7.78026L133.027 22H126.283L120.541 11.8821L118.51 14.2349C117.382 15.5241 116.556 16.637 116.032 17.5745C115.508 18.5108 115.187 19.3025 115.065 19.9472C114.944 20.5918 114.924 21.2769 115.005 22.0024H109.414C110.864 20.9546 112.22 19.8516 113.478 18.6934L113.479 18.691ZM134.667 0H136.494L136.437 0.270848H135.682L135.359 1.85795H135.042L135.367 0.270848H134.612L134.667 0ZM137.147 0H136.772L136.392 1.85795H136.689L136.983 0.424043L137.37 1.85795H137.626L138.6 0.424043L138.301 1.85795H138.602L138.982 0H138.589L137.555 1.51724L137.147 0Z" fill="#000"></path></svg></button>
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
            <button className="bg-[#292930] text-white py-[12px] px-[18px] rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:cursor-pointer">
              Become a provider
            </button>
            <button className="text-white hover:text-black hover:bg-white py-[12px] px-[18px] rounded-full bg-[#292930] transition-all duration-300 ease-in-out hover:cursor-pointer">
  <svg width="12" height="17" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300"
  >
    <path
      d="M0 12.602C0 10.6127 1.61266 9 3.60198 9H8.39802C10.3873 9 12 10.6127 12 12.602V15.6493C12 16.3953 11.3953 17 10.6493 17H1.35074C0.604749 17 0 16.3953 0 15.6493V12.602Z"
      fill="currentColor"
    />
    <circle cx="6" cy="4" r="4" fill="currentColor" />
  </svg>
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
      <div className="flex-1 overflow-y-auto scroll-hide px-4 pb-4 space-y-2">
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

      {/* Sticky Bottom Buttons */}
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
