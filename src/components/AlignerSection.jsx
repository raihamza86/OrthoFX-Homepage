import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

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
  },
  {
    title: "FXClear™",
    subtitle: "aligners",
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
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {aligners.map((item, index) => (
        <motion.div
          key={index}
          className="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[500px] flex items-end"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
          variants={cardVariants}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 text-white p-6 justify-end items-start text-left flex flex-col h-full gap-4 md:gap-1">
            <h3 className="text-3xl font-semibold leading-tight">
              {item.title}
              <span className="font-light italic ml-2">{item.subtitle}</span>
            </h3>

            {item.description && (
              <p className="mt-4 text-sm max-w-sm">{item.description}</p>
            )}

            {item.points && (
              <ul className="mt-4 text-sm space-y-1">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-white text-lg">✓</span> {point}
                  </li>
                ))}
              </ul>
            )}

            <Button text={item.buttonText || "Learn more"} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AlignerSection;
