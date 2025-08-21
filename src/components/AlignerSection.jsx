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
    description:
      "Enjoy whiter teeth from the start of your orthodontic treatment",
    points: [
      "Chemical-free whitening effect",
      "Enhanced comfort",
      "Effortlessly straighter appearance**",
      "Standard 22-hour wear time",
    ],
    image: "/aligner-2.jpg",
  },
  {
    title: "FXClear™",
    subtitle: "aligners",
    description:
      "Custom-made for a precise, comfortable fit, FXClear Aligners align your teeth effortlessly, letting you go about your day with confidence",
    points: [
      "Enhanced comfort and fit",
      "Predictable results**",
      "Standard 22-hour wear time",
    ],
    image: "/aligner-3.jpg",
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
      className="flex flex-col lg:flex-row gap-6 my-6 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {aligners.map((item, index) => (
        <motion.div
          key={index}
          className="relative rounded-4xl overflow-hidden bg-no-repeat bg-cover bg-center min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex items-end cursor-pointer flex-1 [@media(min-width:1024px)_and_(max-width:1100px)]:min-w-[25vw]"
          style={{ backgroundImage: `url(${item.image})` }}
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
          <div className="relative z-10 flex flex-col p-4 sm:p-6 lg:p-8 w-full text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight font-xxthin">
              {item.title}
              {activeIndex === index ? " " : (
                <span className="hidden lg:inline">
                  <br />
                </span>
              )}
              <span className="font-light libre-baskerville-regular-italic ml-2">{item.subtitle}</span>
            </h3>

            {/* Arrow / Small Button */}
            {activeIndex !== index && (
              <>
                <div className="hidden xl:flex justify-end mt-2">
                  <button className="bg-[#c8d7de] text-black rounded-full p-3 hover:bg-[#15161a] hover:text-[#c8d7de] hover:border-white border border-[#c8d7de] transition-all duration-300 hover:cursor-pointer">
                    <FaArrowRightLong />
                  </button>
                </div>
                <div className="hidden lg:flex xl:hidden mt-2">
                  <Button text="Learn more" />
                </div>
              </>
            )}

            {/* Mobile / Tablet (always show description + points) */}
            <div className="block lg:hidden mt-4 text-sm space-y-3">
              {item.description && <p>{item.description}</p>}
              {item.points && (
                <ul className="space-y-1">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white text-lg">✓</span> {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Desktop (show description only for active card) */}
            {activeIndex === index && (
              <div className="hidden lg:block mt-6 text-sm space-y-3 max-w-md font-xxthin leading-[22px]">
                {item.description && <p>{item.description}</p>}
                {item.points && (
                  <ul className="space-y-1">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-xxthin">
                        <span className="text-white text-lg">✓</span> {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Action Button */}
            {activeIndex === index && (
              <div className="hidden lg:block mt-6">
                <Button text={item.buttonText || "Learn more"} />
              </div>
            )}
            <div className="block lg:hidden mt-4">
              <Button text={item.buttonText || "Learn more"} />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AlignerSection;
