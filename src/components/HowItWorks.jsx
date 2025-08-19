import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const steps = [
  { step: "Step 01", title: "Schedule a consultation", description: "Meet your doctor for a 3D scan and preview of your new smile." },
  { step: "Step 02", title: "See your smile transform", description: "Start your journey with customized aligners and expert guidance from your doctor." },
  { step: "Step 03", title: "Retain your smile", description: "Keep your smile straight with our personalized aligners." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();
      const fullyInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!fullyInView) return; // only hijack when section is fully visible

      if (isMobile) {
        // Horizontal hijack
        if (
          (e.deltaY > 0 && el.scrollLeft + el.clientWidth < el.scrollWidth) ||
          (e.deltaY < 0 && el.scrollLeft > 0)
        ) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      } else {
        // Vertical hijack
        if (
          (e.deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight) ||
          (e.deltaY < 0 && el.scrollTop > 0)
        ) {
          e.preventDefault();
          el.scrollTop += e.deltaY;
        }
      }
    };

    const handleKey = (e) => {
      const rect = section.getBoundingClientRect();
      const fullyInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!fullyInView) return;

      let step = isMobile ? el.clientWidth * 0.9 : el.clientHeight * 0.9;

      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        isMobile ? (el.scrollLeft += step) : (el.scrollTop += step);
      }
      if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        isMobile ? (el.scrollLeft -= step) : (el.scrollTop -= step);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="h-[110vh] md:h-screen w-full bg-[url('/howitworks-bg.png')] bg-cover bg-no-repeat bg-center relative overflow-hidden rounded-[2rem]"
    >
      {/* Left Text */}
      <motion.div
        className="absolute top-6 md:top-1/2 md:-translate-y-1/2 left-6 md:left-16 z-10 text-white w-[200px] md:max-w-[400px] lg:min-w-[400px] 2xl:left-[30rem] 2xl:bottom-[30rem]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-white flex items-center gap-2 libre-baskerville-regular-italic text-[20px]">
          <div className="bg-white md:w-20 w-8 h-[1px] rounded-4xl"></div> How it works
        </h1>
        <h2 className="text-[20px] font-xxthin md:text-[45px] 2xl:text-[50px] mb-4">
          3 easy steps <span className="libre-baskerville-regular-italic font-light">to a confident smile</span>
        </h2>
        <Button text="Find a doctor" />
      </motion.div>

      {/* Cards Scroll Section */}
      <motion.div
        className="absolute top-0 right-0 h-full w-full lg:w-[50%] flex justify-end z-10  2xl:right-[40rem]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          ref={scrollRef}
          className={`scroll-hide h-full flex ${
            isMobile ? "flex-row overflow-x-auto snap-x" : "flex-col overflow-y-auto snap-y"
          } py-12 md:py-24 px-6 md:px-10 gap-6 md:items-end items-end md:pr-16 md:snap-mandatory`}
          style={{
            scrollSnapType: isMobile ? "x mandatory" : "y mandatory",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-[#c8d7de] min-w-[65vw] min-h-[65vw] md:max-w-[400px] md:min-w-[400px] md:min-h-[400px] p-2 md:p-8 rounded-3xl shadow-md flex flex-col md:gap-2 justify-center"
              variants={cardVariants}
            >
              <p className="libre-baskerville-regular-italic text-[#15161a] text-[18px] md:text-[20px]">{step.step}</p>
              <h3 className="text-[#15161a] text-[18px] md:text-[32px] font-xxthin">{step.title}</h3>
              <p className="mt-2 text-[#15161a] text-[14px] md:text-[18px] ">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
