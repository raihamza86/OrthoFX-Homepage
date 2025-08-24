import React, { useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import Button from "./Button";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Gamechanger! The most exciting thing about OrthoFX is the exceptional aligner materials and financing options, all put together in an integrated system.²",
    name: "Dr. Conroy",
    image: "/d-1.png",
  },
  {
    quote:
      "OrthoFX aligners reduce refinements and treatment time, making my patients happy with faster results! ²",
    name: "Dr. Lowe",
    image: "/d-2.jpg",
  },
  {
    quote:
      "The greatest impact OrthoFX has had in my practice is the flexibility of offering diverse and affordable payment options for my patients.²",
    name: "Dr. Battle",
    image: "/d-3.png",
  },
  {
    quote:
      "OrthoFX has been a fantastic addition to our practice, delivering terrific results for my patients.²",
    name: "Dr. Brilliant",
    image: "/d-4.png",
  },
  {
    quote:
      "I have seen OrthoFX patients have half the refinements, fewer aligner stages and better results than other brands.²",
    name: "Dr. Sellke",
    image: "/d-5.png",
  },
  {
    quote:
      "My favorite features about OrthoFX are the predictable outcomes and financing options which help patients start treatment with little upfront costs.²",
    name: "Dr. Block",
    image: "/d-6.png",
  },
];

// Repeat testimonials 6x for infinite scroll illusion
const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

const DoctorTestimonials = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Jump to the middle set on mount
      const cardWidth = container.querySelector(".card")?.offsetWidth || 380;
      container.scrollLeft = cardWidth * testimonials.length;
    }
  }, []);

  const scroll = (offset) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.querySelector(".card")?.offsetWidth || 380;
    const totalCards = loopedTestimonials.length;
    const maxScrollLeft = container.scrollWidth;

    container.scrollBy({ left: offset, behavior: "smooth" });

    // After scroll ends, check if we're near the edges
    setTimeout(() => {
      if (container.scrollLeft <= cardWidth) {
        // Jump to the same position in the middle set
        container.scrollLeft =
          cardWidth * (testimonials.length + 1);
      } else if (container.scrollLeft >= maxScrollLeft - cardWidth * 2) {
        // Jump back to middle
        container.scrollLeft =
          cardWidth * (testimonials.length - 1);
      }
    }, 500); // wait until smooth scroll ends
  };

  return (
    <section className="bg-[#121418] text-white py-16  relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-6 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-[16%]">
        <h1 className="text-[#d9edf7] flex items-center gap-2 tk-baskerville-display-pt italic text-[20px]">
          <div className="bg-white md:w-20 w-8 h-[1px] rounded-4xl"></div>{" "}
          Doctor testimonials
        </h1>
        <h2 className="text-[20px] md:text-[40px] text-[#d9edf7] tk-neue-haas-grotesk-display">
          Trusted by experts
        </h2>
        <div>
          <Button text="Become a provider" bg="#292930" txt="#fff" border="#292930"/>
        </div>
      </div>

      {/* Arrows */}
      <div className="hidden xl:flex justify-end mt-[-3rem] gap-4 mb-6 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-[10%]">
        <motion.button
          whileHover={{ scale: 1.2, opacity: 0.7 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll(-400)}
          className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:cursor-pointer transition"
        >
          <IoIosArrowBack size={20} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.2, opacity: 0.7 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll(400)}
          className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:cursor-pointer transition"
        >
          <IoIosArrowForward size={20} />
        </motion.button>
      </div>

      {/* Carousel */}
<div
  ref={scrollRef}
  className="
    scroll-hide overflow-x-auto scroll-smooth scrollbar-hide
    px-[5%]   /* default padding for peek */
    snap-x snap-mandatory
  "
>
  <div className="flex gap-6 w-full">
    {loopedTestimonials.map((item, index) => (
      <div
        key={index}
        className="
          card flex-shrink-0
          w-[80%] sm:w-[90%] lg:w-[33%] xl:w-[33%] 2xl:w-[20%]
          bg-[#c8d7de] p-6 rounded-4xl sm:min-h-[360px] md:min-h-[300px]
          snap-center flex flex-col justify-between
        "
      >
        <div>
        <div className="md:text-xl text-[#15161A] md:mb-4"><FaQuoteLeft/></div>
        <p className="text-[17px] md:text-[18px] tk-neue-haas-grotesk-display mb-6 text-[#15161A]">
          {item.quote}
        </p>
        </div>
        <div className="flex items-center gap-3 mt-auto">
          <img
            src={item.image}
            alt={item.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="italic font-medium text-black">{item.name}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default DoctorTestimonials;
