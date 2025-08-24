import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const WhyDifferent = () => {
  return (
    <motion.div
      className="my-8 max-w-screen-xl mx-auto block [@media(min-width:1902px)]:hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <motion.h2
        className="text-[#c8d7de] text-3xl sm:text-5xl md:text-6xl lg:text-7xl tk-neue-haas-grotesk-display leading-snug"
        variants={fadeUp}
      >
        Why are we{' '}
        <span className="tk-baskerville-display-pt italic">different?</span>
      </motion.h2>

      {/* Section 01 */}
      <motion.div className="flex flex-col gap-5 mt-6" variants={fadeUp}>
        <h1 className="text-[#d9edf7] flex items-center gap-2 tk-baskerville-display-pt italic text-base sm:text-lg md:text-xl">
          <div className="bg-white w-16 sm:w-20 h-[2px] rounded-4xl"></div> 01
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#d9edf7] tk-neue-haas-grotesk-display">
          Comfort meets <br /> efficiency
        </h2>
        <p className="text-base sm:text-lg text-[#c8d7de] tk-neue-haas-grotesk-display leading-relaxed max-w-3xl">
          Our aligners apply optimal force with a gentle, consistent touch.
          While traditional aligners may use up to 8.4x more force, ours deliver
          precise control for a more comfortable experience.**
        </p>
        <motion.img
          className="rounded-2xl w-full sm:w-3/4 md:w-1/2 lg:w-[45%]"
          src="/trusted-3.jpg"
          alt="not found"
          variants={fadeUp}
        />
      </motion.div>

      {/* Section 02 */}
      <motion.div className="flex flex-col gap-5 mt-12" variants={fadeUp}>
        <h1 className="text-[#d9edf7] flex items-center gap-2 tk-baskerville-display-pt italic text-base sm:text-lg md:text-xl">
          <div className="bg-white w-16 sm:w-20 h-[2px] rounded-4xl"></div> 02
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#d9edf7] tk-neue-haas-grotesk-display">
          AirFlex™ aligners, <br /> advanced material
        </h2>
        <p className="text-base sm:text-lg text-[#c8d7de] tk-neue-haas-grotesk-display leading-relaxed max-w-3xl">
          AirFlex™ is the new generation of clear aligners, featuring patented
          HyperElastic™ polymer for sustained optimal force delivery. It
          supports natural bone remodeling and reduces daytime relapse when not
          wearing aligners.**
        </p>
        <motion.div variants={fadeUp}>
          <Button
            text="OrthoFX Difference"
            bg="#292930"
            txt="#fff"
            border="#292930"
          />
        </motion.div>
        <motion.img
          className="rounded-2xl w-full sm:w-3/4 md:w-1/2 lg:w-[45%]"
          src="/trusted-4.jpg"
          alt="not found"
          variants={fadeUp}
        />
      </motion.div>
    </motion.div>
  );
};

export default WhyDifferent;
