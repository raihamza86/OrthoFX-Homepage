import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import ScrollingHeading from "./ScrollingHeading";

const WhyDifferentTwo = () => {
  const sectionRef = useRef(null);

  // Track vertical scroll within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Horizontal movement:
  // 0 → 0.5 = Section 1 fully visible
  // 0.5 → 1 = Section 2 fully visible
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-36%"]);

  return (
    <div className="mt-8 hidden [@media(min-width:1902px)]:block">
    <ScrollingHeading />
    // Outer section needs 200vh so we have space to scroll between 2 screens
    <section ref={sectionRef} className="relative h-[120vh] flex items-center bg-[#15161a]">
      {/* Sticky wrapper fills 1 screen */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Horizontal scroll content */}
        <motion.div
          style={{ x }}
          className="flex w-[200%] h-full"
        >
          {/* Section 1 */}
          <div className="w-full flex gap-8 p-6">
            <div className="flex flex-col gap-5 w-1/2">
        <h1 className="text-[#d9edf7] flex items-center gap-2 tk-baskerville-display-pt italic text-base sm:text-lg md:text-xl">
          <div className="bg-[#6d6e70] w-16 sm:w-20 h-[2px] rounded-4xl"></div> 01
        </h1>
              <h2 className="text-[56px] text-[#C8D7DE] tk-neue-haas-grotesk-display">
                Comfort meets <br /> efficiency
              </h2>
              <motion.img
                className="rounded-2xl h-[300px] w-full object-cover"
                src="/trusted-3.jpg"
                alt="not found"
              />
            </div>
            <div className="flex flex-col gap-5 w-1/2 mt-[7rem]">
              <h2 className="text-[22px] text-[#C8D7DE] tk-neue-haas-grotesk-display">
Our aligners apply optimal force with a gentle, consistent touch. While traditional aligners may use up to 8.4x more force, ours deliver precise control for a more comfortable experience.**
              </h2>
              <div className="flex gap-4 w-full h-[300px]">
                <motion.img
                  className="rounded-2xl w-1/2 h-full object-cover"
                  src="/trusted-3-1.png"
                  alt="not found"
                />
                <motion.img
                  className="rounded-2xl w-1/2 h-full object-cover"
                  src="/trusted-3-2.jpg"
                  alt="not found"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full flex gap-8 p-6">
            <div className="flex flex-col gap-5 w-1/2">
        <h1 className="text-[#d9edf7] flex items-center gap-2 tk-baskerville-display-pt italic text-base sm:text-lg md:text-xl">
          <div className="bg-[#6d6e70] w-16 sm:w-20 h-[2px] rounded-4xl"></div> 02
        </h1>
              <h2 className="text-[32px] text-[#C8D7DE] tk-neue-haas-grotesk-display">
                AirFlex™ aligners, <br /> advanced material
              </h2>
              <div>
              <Button text="OrthoFX Difference" bg="#292930" txt="#fff" border="#292930"/>
              </div>
              <motion.img
                className="rounded-2xl h-[300px] w-full object-cover"
                src="/trusted-4.jpg"
                alt="not found"
              />
            </div>
            <div className="flex flex-col gap-5 w-1/2 mt-[9rem]">
              <p className="text-[18px] text-[#c8d7de] tk-neue-haas-grotesk-display">
AirFlex™ is the new generation of clear aligners, featuring patented HyperElastic™ polymer for sustained optimal force delivery. It supports natural bone remodeling and reduces daytime relapse when not wearing aligners.**
              </p>
              <div className="flex gap-4 w-full h-[300px]">
                <motion.img
                  className="rounded-2xl w-1/2 h-full object-cover"
                  src="/trusted-4-1.jpg"
                  alt="not found"
                />
                <motion.img
                  className="rounded-2xl w-1/2 h-full object-cover"
                  src="/trusted-4-2.png"
                  alt="not found"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default WhyDifferentTwo;
