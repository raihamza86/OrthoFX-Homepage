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
        className="relative min-h-screen bg-no-repeat bg-cover bg-center py-24 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-[16%] rounded-b-[3rem] bg-[url('/hero-bg.jpg')] md:bg-[url('/hero.jpg')]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-b-[3rem] z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:items-center justify-between gap-52 md:gap-40 lg:gap-28 xl:gap-80">
          {/* Left Content */}
          <motion.div className="flex-1 flex flex-col gap-0 box-border self-start lg:justify-start" variants={fadeUp}>

            <motion.h1
              className="tk-neue-haas-grotesk-display text-[40px] leading-[40px]  xl:text-[96px] text-[#15161a] xl:leading-[96px]"
              variants={fadeUp}
            >
              Be you.
            </motion.h1>
            <motion.h1
className="tk-baskerville-display-pt text-[46px] leading-[44px] md:text-[40px] lg:text-[70px] lg:leading-[70px] italic"
              variants={fadeUp}
            >
                Smile confidently.
            </motion.h1>
            
           
          </motion.div>

          {/* Right Side Content */}
           <div className="flex flex-row-reverse gap-4 lg:self-end">
            <div>
            <motion.p
              className="mt-6 text-[18px] text-white leading-[25px] tk-neue-haas-grotesk-display max-w-xl lg:max-w-sm"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              With AirFlex™ aligners, enjoy up to 50% less wear time compared to
              other brands. OrthoFX's cutting-edge aligners are designed to fit
              your unique lifestyle and treatment goals.*
            </motion.p>

            <motion.div
              className="mt-6"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <Button text="Find a doctor" bg="f0f0f0" />
            </motion.div>
            </div>
          <motion.div
            className="hidden lg:block"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <img
              className="w-50"
              src="/hero-img.png"
              alt="not found"
            />
          </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Hero;
