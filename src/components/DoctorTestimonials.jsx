import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import Button from "./Button";

const testimonials = [
  {
    quote:
      "Gamechanger! The most exciting thing about OrthoFX is the exceptional aligner materials and financing options, all put together in an integrated system.²",
    name: "Dr. Conroy",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "OrthoFX aligners reduce refinements and treatment time, making my patients happy with faster results! ²",
    name: "Dr. Lowe",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote:
      "The greatest impact OrthoFX has had in my practice is the flexibility of offering diverse and affordable payment options for my patients.²",
    name: "Dr. Battle",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    quote:
      "OrthoFX has been a fantastic addition to our practice, delivering terrific results for my patients.²",
    name: "Dr. Brilliant",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    quote:
      "I have seen OrthoFX patients have half the refinements, fewer aligner stages and better results than other brands.²",
    name: "Dr. Sellke",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    quote:
      "My favorite features about OrthoFX are the predictable outcomes and financing options which help patients start treatment with little upfront costs.²",
    name: "Dr. Block",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const DoctorTestimonials = () => {
  const scrollRef = useRef();

  const scroll = (offset) => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const newScrollLeft = container.scrollLeft + offset;

    if (offset > 0 && newScrollLeft >= maxScrollLeft) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else if (offset < 0 && container.scrollLeft <= 0) {
      container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#121418] text-white py-16 px-4 md:px-20 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-[#d9edf7] flex items-center gap-2 italic text-[20px]">
          <div className="bg-white md:w-20 w-8 h-[1px] rounded-4xl"></div> Doctor testimonials
        </h1>
        <h2 className="text-[20px] md:text-[40px]">Trusted by experts</h2>
        <div>
          <Button text="Become a provider" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex justify-end gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll(-400)}
          className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <IoIosArrowBack size={20} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll(400)}
          className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <IoIosArrowForward size={20} />
        </motion.button>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="scroll-hide overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <motion.div
          className="flex gap-6 w-max px-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              className="flex-shrink-0 w-[250px] md:w-[380px] bg-[#c8d7de] text-black p-6 rounded-2xl"
            >
              <div className="text-3xl text-black mb-4">“</div>
              <p className="text-sm mb-6">{item.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="italic font-medium text-black">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorTestimonials;
