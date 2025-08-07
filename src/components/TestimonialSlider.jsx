import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

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
    quote: "I was skeptical, but now I'm smiling every day.",
    author: "Anna S.",
  },
  {
    quote: "Quick, affordable, and amazing results!",
    author: "David P.",
  },
  {
    quote: "Highly recommend to anyone considering aligners.",
    author: "Samantha L.",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { quote, author } = testimonials[index];

  return (
    <section className="bg-[#121418] text-white py-16 px-4 md:px-[32px] flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-0">
      <div className="">
                    <h1 className='text-[#d9edf7] flex items-center gap-2 italic text-[20px]'><div className='bg-white md:w-20 w-8 h-[1px] rounded-4xl'></div> Customer testimonials</h1>
        <h2 className="text-[20px] md:text-[40px] text-left">
          Real people <br /> real results
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 relative">
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:text-black transition hover:cursor-pointer"
          >
            <IoIosArrowBack size={20} />
          </button>
          <span className="text-white/80 text-lg">{index + 1} / {testimonials.length}</span>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:text-black transition hover:cursor-pointer"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>

        {/* Animated Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-xl md:text-2xl italic max-w-2xl text-white mt-4"
          >
            “{quote}”
            <p className="mt-4 text-white/60 text-base italic">{author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialSlider;
