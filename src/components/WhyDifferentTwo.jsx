import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const headings = [
  "Why we are different?",
  "Why we are different?",
  "Why we are different?",
];


const headingVariants = {
  hidden: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.6 } }
};



const WhyDifferentTwo = () => {
  const containerRef = useRef(null);
  const componentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isComponentActive, setIsComponentActive] = useState(false);
  const totalSections = 2;

   // Calculate section width including margins
  const sectionWidth = useRef(0);
  useEffect(() => {
    if (containerRef.current) {
      sectionWidth.current = containerRef.current.offsetWidth + 20 * 16; // 20rem in pixels
    }
  }, []);

   // track horizontal scroll progress (0 → 1)
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  // Transform scroll progress to heading position
  const x = useTransform(
    scrollXProgress,
    [0, 1],
    [0, -sectionWidth.current * (headings.length - 1)]
  );




  // Enhanced visibility tracking with multiple thresholds
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Activate when at least 90% visible, deactivate when less than 10% visible
        setIsComponentActive(entry.intersectionRatio >= 0.9);
      },
      {
        threshold: [0, 0.1, 0.9, 1],
        rootMargin: "0px 0px -100px 0px" // 100px bottom margin to trigger earlier
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Scroll to active section with improved timing
const scrollToSection = (index) => {
  if (!containerRef.current || isScrolling) return;

  setIsScrolling(true);
  setActiveIndex(index);

  const container = containerRef.current;
  const target = container.offsetWidth * index;
  const start = container.scrollLeft;
  const distance = target - start;
  const duration = 1000; // 👈 slow scroll (adjust speed)

  let startTime = null;

  const animate = (time) => {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);

    // Ease in-out cubic
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    container.scrollLeft = start + distance * ease;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      setIsScrolling(false);
    }
  };

  requestAnimationFrame(animate);
};

useEffect(() => {
  const handleWheel = (e) => {
    if (!isComponentActive) return;

    if (isScrolling) {
      e.preventDefault(); // block while animating
      return;
    }

    const atFirst = activeIndex === 0;
    const atLast = activeIndex === totalSections - 1;

    if (e.deltaY > 0 && !atLast) {
      // Scroll forward inside component
      e.preventDefault();
      scrollToSection(activeIndex + 1);
    } else if (e.deltaY < 0 && !atFirst) {
      // Scroll backward inside component
      e.preventDefault();
      scrollToSection(activeIndex - 1);
    } else {
      // ✅ RELEASE: don’t preventDefault when at edges
      return;
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, [activeIndex, isScrolling, isComponentActive]);



  // Enhanced wheel handling with edge detection
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollCooldown = 600; // ms

    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;
      
      if (!isComponentActive) return;
      
      // Check if we're at the edge and should release
      const atBottomEdge = activeIndex === totalSections - 1 && e.deltaY > 0;
      const atTopEdge = activeIndex === 0 && e.deltaY < 0;
      
      if (atBottomEdge || atTopEdge) {
        // Allow one normal scroll before releasing
        if (Math.abs(e.deltaY) > 5) { // Threshold to ignore small wheel movements
          return;
        }
      }

      e.preventDefault();
      if (isScrolling) return;

      lastScrollTime = now;
      
      if (e.deltaY > 0 && activeIndex < totalSections - 1) {
        scrollToSection(activeIndex + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        scrollToSection(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, isScrolling, isComponentActive]);

  return (
    <motion.div 
      ref={componentRef}
      className="relative my-4 hidden 2xl:block snap-start snap-always"
      style={{ scrollSnapAlign: 'start' }}
    >

      {/* Headings container */}
      <div className="overflow-hidden h-[120px] relative">
        <motion.div
          className="flex absolute top-0 left-0"
          style={{ 
            x,
            width: `${sectionWidth.current * headings.length}px`
          }}
        >
          {headings.map((text, i) => (
            <h2
              key={i}
              className="text-[#c8d7de] text-[96px] whitespace-nowrap"
              style={{ width: `${sectionWidth.current}px` }}
            >
              {text}
            </h2>
          ))}
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="w-full flex overflow-hidden snap-x snap-mandatory scrollbar-hide"
                style={{ 
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory'
        }}
      >
        {/* Section 01 - with increased right margin */}
        <div className="min-w-full flex gap-8 p-6 snap-start mr-[10rem]" style={{ scrollSnapAlign: 'start' }}>
          <div className="flex flex-col gap-5 w-1/2">
            <h1 className="text-[#d9edf7] flex items-center gap-2 italic">
              <div className="bg-[#d9edf7] w-20 h-[2px] rounded-4xl"></div> 01
            </h1>
            <h2 className="text-[56px] text-[#C8D7DE]">
              Comfort meets <br /> efficiency
            </h2>
            <div className="h-[300px] w-full">
              <motion.img
                className="rounded-2xl h-full w-full object-cover"
                src="/trusted-3.jpg"
                alt="not found"
                variants={fadeUp}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-1/2 mt-[7rem]">
            <h2 className="text-[22px] text-[#C8D7DE]">
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

        {/* Section 02 - with increased left margin */}
        <div className="min-w-full flex gap-8 p-6 snap-start ml-[10rem]" style={{ scrollSnapAlign: 'start' }}>
          <div className="flex flex-col gap-5 w-1/2">
            <h1 className="text-[#d9edf7] flex items-center gap-2 italic">
              <div className="bg-[#d9edf7] w-20 h-[2px] rounded-4xl"></div> 02
            </h1>
            <h2 className="text-[32px] text-[#C8D7DE]">
              AirFlex™ aligners, <br /> advanced material
            </h2>
            <div>
              <Button text="OrthoFX Difference" />
            </div>
            <div className="h-[300px] w-full">
              <motion.img
                className="rounded-2xl h-full w-full object-cover"
                src="/trusted-4.jpg"
                alt="not found"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-1/2 mt-[8rem]">
            <p className="text-[18px] text-[#c8d7de]">
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
      </div>
    </motion.div>
  );
};

export default WhyDifferentTwo;