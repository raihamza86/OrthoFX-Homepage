import React, { useRef } from 'react'
import './Why.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import ScrollingHeading from "./ScrollingHeading";

const Why = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);

  return (
        <div className="carousel" ref={targetRef}>
            <div className="scrolling-heading-wrapper">
                <ScrollingHeading />
            </div>
        <div className="contentContainer">
            <motion.div className="images" style={{ x }}>
            
            {/* --- Slide Group 1 --- */}
            <div className="slide-group">
                <div className="slide">
                    <h1 className="text-[#d9edf7] flex items-center gap-2 tk-baskerville-display-pt italic text-base sm:text-lg md:text-xl">
                    <div className="bg-[#6d6e70] w-16 sm:w-20 h-[2px] rounded-4xl"></div> 01
                    </h1>
                <h2 className="text-[56px] text-[#C8D7DE] tk-neue-haas-grotesk-display">
                    Comfort meets <br /> efficiency
                </h2>
                <img src="/trusted-3.jpg" alt="not found" />
                </div>

                <div className="slide slide-top">
                <h2 className="text-[22px] text-[#C8D7DE] tk-neue-haas-grotesk-display">
                    Our aligners apply optimal force with a gentle, consistent touch. While traditional aligners may use up to 8.4x more force, ours deliver precise control for a more comfortable experience.**
                </h2>
                <div className="slide-row">
                    <img src="/trusted-3-1.png" alt="not found" />
                    <img src="/trusted-3-2.jpg" alt="not found" />
                </div>
                </div>
            </div>

            {/* --- Slide Group 2 --- */}
            <div className="slide-group">
                <div className="slide">
                    <h1 className="text-[#d9edf7] flex items-center gap-2 tk-baskerville-display-pt italic text-base sm:text-lg md:text-xl">
                    <div className="bg-[#6d6e70] w-16 sm:w-20 h-[2px] rounded-4xl"></div> 02
                    </h1>
                <h2 className="text-[32px] text-[#C8D7DE] tk-neue-haas-grotesk-display">
                    AirFlex™ aligners, <br /> advanced material
                </h2>
                <div>
                    <Button text="OrthoFX Difference" bg="#292930" txt="#fff" border="#292930"/>
                </div>
                <img src="/trusted-4.jpg" alt="not found" />
                </div>

                <div className="slide slide-top">
                <p className="text-[18px] text-[#c8d7de] tk-neue-haas-grotesk-display">
                    AirFlex™ is the new generation of clear aligners, featuring patented HyperElastic™ polymer for sustained optimal force delivery. It supports natural bone remodeling and reduces daytime relapse when not wearing aligners.**
                </p>
                <div className="slide-row">
                    <img src="/trusted-4-1.jpg" alt="not found" />
                    <img src="/trusted-4-2.png" alt="not found" />
                </div>
                </div>
            </div>

            </motion.div>
        </div>
        </div>
  );
};

export default Why;
