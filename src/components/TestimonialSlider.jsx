import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "I love how simple and pain free this system is! I remember pain from my original Ortho but OrthoFX is so much better!¹",
    author: "Amy L.",
  },
  {
    quote: "The process is easier than I thought and nobody notices I’m wearing them.¹",
    author: "Brenda D.",
  },
  {
    quote: "I love how the smile I’ve always been looking for is finally coming and in a short amount of time!¹",
    author: "Andre W.",
  },
  {
    quote: "I love that you can actually do monthly payment installments because previously I couldn’t pay that whole out-of-pocket amount and I didn’t have insurance, so this is a lot easier!¹",
    author: "Ky N.",
  },
  {
    quote: "What a great deal for superior service.¹",
    author: "Lisa D.",
  },
  {
    quote: "Having a professional orthodontist as part of the treatment program gave me the peace of mind I needed. I chose OrthoFX over other brands because of this key differentiator!¹",
    author: "Tony W.",
  },
  {
    quote: "We wholeheartedly loved AirFlex for our son. The results have truly exceeded our expectations! The alignment process was swift, and within a short period, we began to see dramatic improvements. Compared to traditional braces and Invisalign treatments our other two children underwent, OrthoFX’s AirFlex provided superior results in a much faster timeline.¹",
    author: "Omero M.",
  },
];

const variants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 50 : -50,
    scale: 0.95,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -50 : 50,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeIn" },
  }),
};

const TestimonialSlider = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const handleNext = () => {
    setIndex(([prev]) => [(prev + 1) % testimonials.length, 1]);
  };

  const handlePrev = () => {
    setIndex(([prev]) => [(prev - 1 + testimonials.length) % testimonials.length, -1]);
  };

  const { quote, author } = testimonials[index];

  return (
    <section className="bg-[#121418] text-white py-16 px-4 md:px-[32px] 2xl:px-[30rem] flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-0">
      {/* Left Title */}
      <div className="">
        <h1 className="text-[#d9edf7] flex items-center gap-2 libre-baskerville-regular-italic text-nowrap text-[20px]">
          <div className="bg-white md:w-20 w-8 h-[1px] rounded-4xl"></div> Customer testimonials
        </h1>
        <h2 className="text-[20px] text-[#d9edf7] font-xxthin leading-[40px] md:text-[40px] 2xl:text-[64px] 2xl:leading-[70px] text-left mt-2">
          Real people <br /> real results
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-3xl flex flex-col lg:items-center gap-6 relative md:w-[800px] md:h-[250px] xl:h-[280px] 2xl:h-[450px] md:mt-16 lg:mt-8">
        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition hover:cursor-pointer"
          >
            <IoIosArrowBack size={20} />
          </motion.button>

          <span className="text-[#d9edf7] libre-baskerville-regular-italic text-lg">
            {index + 1} / {testimonials.length}
          </span>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition hover:cursor-pointer"
          >
            <IoIosArrowForward size={20} />
          </motion.button>
        </div>

        {/* Animated Quote */}
<AnimatePresence custom={direction} mode="wait">
  <motion.div
    key={index}
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.5 }}
    layout
    className="text-xl md:text-2xl font-xxthin leading-[30px] text-[#d9edf7] max-w-2xl mt-4 2xl:text-[28px] lg:w-[430px] xl:w-[630px] 2xl:w-[450px]"
  >
   <span className="flex items-start gap-2">
      {/* Fixed icon size */}
      <FaQuoteLeft className="text-[1rem] flex-shrink-0" />
      <span>{quote}</span>
    </span>
    <p className="mt-4 text-[#d9edf7] text-base italic ml-6">{author}</p>
  </motion.div>
</AnimatePresence>

      </div>
    </section>
  );
};

export default TestimonialSlider;
