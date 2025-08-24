import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollingHeading = () => {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Move heading group from right (100%) to left (-100%)
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden text-white"
    >
      <motion.div
        style={{ x }}
        className="flex gap-24 whitespace-nowrap"
      >
        {/* Repeat text 3 times */}
        {[...Array(3)].map((_, i) => (
          <h1
            key={i}
            className="text-[#c8d7de] text-[128px] tk-neue-haas-grotesk-display leading-snug"
          >
            Why are we{" "}
            <span className="tk-baskerville-display-pt italic">
              different?
            </span>
          </h1>
        ))}
      </motion.div>
    </section>
  );
};

export default ScrollingHeading;
