import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="bg-[#15161a] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.section
        className="relative min-h-screen bg-no-repeat bg-cover bg-[center_top] md:bg-center py-20 px-6 lg:px-12 rounded-b-[3rem] bg-[url('/hero-bg.jpg')] md:bg-[url('/hero.jpg')]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-b-[3rem] z-0" />

        {/* Content */}
        <div className="relative z-10 h-[150vh] md:h-[120vh] flex flex-col justify-between">
          <motion.h1
            className="md:text-[70px] text-[40px] text-[#15161a]"
            variants={fadeUp}
          >
            Be you. <br /> <span className="italic">Smile confidently.</span>
          </motion.h1>

          <motion.div
            className="flex gap-4 justify-end xl:mb-[1rem] 2xl:mr-[30rem] 2xl:mb-[10rem]"
            variants={fadeUp}
          >
            <motion.img
              className="lg:block hidden w-52"
              src="/hero-img.png"
              alt="not found"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            />
            <motion.div
              className="flex flex-col items-start gap-4"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-[18px] text-white leading-relaxed">
                With AirFlex™ aligners, enjoy up to 50% less wear time <br />
                compared to other brands. OrthoFX's cutting-edge <br />
                aligners are designed to fit your unique lifestyle and <br />
                treatment goals.*
              </p>
              <Button text="Find a doctor" bg="f0f0f0" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Hero;
