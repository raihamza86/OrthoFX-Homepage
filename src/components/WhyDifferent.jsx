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
      className="my-4 xl:block 2xl:hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <motion.h2
        className="text-[#c8d7de] text-[40px] md:text-[96px]"
        variants={fadeUp}
      >
        Why are we different?
      </motion.h2>

      {/* Section 01 */}
      <motion.div className="flex flex-col gap-5" variants={fadeUp}>
        <h1 className="text-white flex items-center gap-2 italic">
          <div className="bg-white w-20 h-[2px] rounded-4xl"></div> 01
        </h1>
        <h2 className="text-[32px] text-white">
          Comfort meets<br />efficiency
        </h2>
        <p className="text-[18px] text-[#c8d7de]">
          Our aligners apply optimal force with a gentle, consistent touch. While traditional aligners may use up to 8.4x more force, ours deliver precise control for a more comfortable experience.**
        </p>
        <motion.img
          className="rounded-2xl md:w-[50%]"
          src="/trusted-3.jpg"
          alt="not found"
          variants={fadeUp}
        />
      </motion.div>

      {/* Section 02 */}
      <motion.div className="flex flex-col gap-5 mt-8" variants={fadeUp}>
        <h1 className="text-white flex items-center gap-2 italic">
          <div className="bg-white w-20 h-[2px] rounded-4xl"></div> 02
        </h1>
        <h2 className="text-[32px] text-white">
          AirFlex™ aligners,<br />advanced material
        </h2>
        <p className="text-[18px] text-[#c8d7de]">
          AirFlex™ is the new generation of clear aligners, featuring patented HyperElastic™ polymer for sustained optimal force delivery. It supports natural bone remodeling and reduces daytime relapse when not wearing aligners.**
        </p>
        <motion.div variants={fadeUp}>
          <Button text="OrthoFX Difference" />
        </motion.div>
        <motion.img
          className="rounded-2xl md:w-[50%]"
          src="/trusted-4.jpg"
          alt="not found"
          variants={fadeUp}
        />
      </motion.div>
    </motion.div>
  );
};

export default WhyDifferent;
