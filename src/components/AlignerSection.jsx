import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

const aligners = [
  {
    title: "AirFlex™",
    subtitle: "aligners",
    description:
      "Play, drink, snack and talk hassle-free throughout your day. AirFlex™ makes it possible to achieve a beautiful smile with shorter wear time.",
    points: [
      "FDA-cleared aligner",
      "At least 12 hours of continuous daily wear time*",
      "Delivers gentle, optimal forces**",
    ],
    image: "/aligner-1.jpg",
    buttonText: "Learn more",
  },
  {
    title: "FXBright™",
    subtitle: "aligners",
    image: "/aligner-2.jpg",
        description:
      "Enjoy  whiter teeth from the start of your orthodontic treatment",
    points: [
      "Chemical-free whitening effect",
      "Enhanced comfort",
      "Effortlessly straighter appearance**",
      "Standard 22-hour wear time",
    ],
  },
  {
    title: "FXClear™",
    subtitle: "aligners",
    image: "/aligner-3.jpg",
        description:
      "Custom-made for a precise, comfortable fit, FXClear Aligners align your teeth effortlessly, letting you go about your day with confidence",
    points: [
      "Enhanced comfort and fit",
      "Predictable results**",
      "Standard 22-hour wear time",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AlignerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      className="flex flex-col lg:grid lg:grid-cols-3 xl:flex xl:flex-row gap-6 my-6 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {aligners.map((item, index) => (
        <motion.div
          key={index}
          className="relative rounded-3xl overflow-hidden bg-no-repeat bg-cover bg-center min-h-[650px] flex items-end hover:cursor-pointer"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
          variants={cardVariants}
          onClick={() => setActiveIndex(index)}
          animate={{
            flex: activeIndex === index ? 3 : 1, 
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="flex flex-col xl:flex-row xl:items-end p-6">
          <div className="relative z-10 text-white justify-end items-start text-left flex flex-col h-full gap-4 md:gap-1">
            <h3 className="text-3xl font-semibold leading-tight">
              {item.title}
  {activeIndex === index ? " " : (
    <span className="hidden lg:inline">
      <br />
    </span>
  )}
              <span className="font-light italic ml-2">{item.subtitle}</span>
            </h3>

                          {activeIndex === index ? (" " ):(<div className="hidden w-full xl:flex justify-end"> <button className="bg-[#c8d7de] text-black rounded-full p-3 hover:bg-[#15161a] hover:text-[#c8d7de] hover:border-white hover:cursor-pointer border-1 border-[#c8d7de] transition-all duration-300"> <FaArrowRightLong /></button> </div>)}

                          {activeIndex === index ? (" " ):(<div className="xl:hidden hidden w-full lg:flex mt-2"> <Button text='Learn more'/></div>)}
                          
                          {/* Mobile / Tablet (always show) */}
<div className="block lg:hidden">
  {item.description && <p className="mt-4 text-sm">{item.description}</p>}
  {item.points && (
    <ul className="mt-4 text-sm space-y-1">
      {item.points.map((point, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-white text-lg">✓</span> {point}
        </li>
      ))}
    </ul>
  )}
</div>

{/* Desktop (only show for active card) */}
{activeIndex === index && (
  <div className="hidden lg:block">
    {item.description && <p className="mt-4 text-sm">{item.description}</p>}
    {item.points && (
      <ul className="mt-4 text-sm space-y-1">
        {item.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-white text-lg">✓</span> {point}
          </li>
        ))}
      </ul>
    )}
  </div>
)}

          </div>
            {activeIndex === index && (
              <div className="hidden lg:block">
              <Button text={item.buttonText || "Learn more"} />
              </div>
            )}
             <div className="block lg:hidden mt-2">
              <Button text={item.buttonText || "Learn more"} />
              </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AlignerSection;
