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
    <section className="w-full px-4 md:px-8 lg:px-16 py-10 overflow-hidden">
      <motion.div 
        className="flex flex-col lg:flex-row justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.h2 
          className="font-bold leading-tight text-white text-4xl sm:text-5xl lg:text-7xl xl:text-[96px]"
          variants={fadeUp}
        >
          Aligned <br />
          <span className="text-[#c8d7de]">to your lifestyle</span>
        </motion.h2>

        <motion.div 
          className="flex lg:items-end lg:justify-end"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <Button text="Find a doctor" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-10"
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
