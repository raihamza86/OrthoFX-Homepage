import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import AlignerSection from './AlignerSection';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Aligned = () => {
  return (
    <section className="w-full mt-16 sm:mt-20 md:mt-24 overflow-hidden">
      {/* Heading + Button */}
      <motion.div 
        className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Responsive Heading */}
        <motion.h2 
          className="leading-tight sm:leading-[60px] md:leading-[72px] lg:leading-[84px] xl:leading-[96px] 
                     font-xxthin text-[#d9edf7] 
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[96px]"
          variants={fadeUp}
        >
          Aligned <br />
          <span className="libre-baskerville-regular-italic">to your lifestyle</span>
        </motion.h2>

        {/* Button aligned responsively */}
        <motion.div 
          className="w-full sm:w-auto flex justify-start lg:justify-end"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <Button text="Find a doctor" bg="#fff" />
        </motion.div>
      </motion.div>

      {/* Aligner Section */}
      <motion.div 
        className="mt-8 sm:mt-10 md:mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ delay: 0.3 }}
      >
        <AlignerSection />
      </motion.div>
    </section>
  );
};

export default Aligned;
