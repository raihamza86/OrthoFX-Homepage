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
    const inView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
    if (!inView) return;

    const atStart = isMobile ? el.scrollLeft === 0 : el.scrollTop === 0;
    const atEnd = isMobile
      ? el.scrollLeft + el.clientWidth >= el.scrollWidth
      : el.scrollTop + el.clientHeight >= el.scrollHeight;

    if ((e.deltaY > 0 && atEnd) || (e.deltaY < 0 && atStart)) {
      // ✅ let page scroll if at edges
      return;
    }

    e.preventDefault();
    const step = isMobile ? el.clientWidth * 0.3 : el.clientHeight * 0.3;

    if (e.deltaY > 0) {
      isMobile
        ? el.scrollBy({ left: step, behavior: "smooth" })
        : el.scrollBy({ top: step, behavior: "smooth" });
    } else {
      isMobile
        ? el.scrollBy({ left: -step, behavior: "smooth" })
        : el.scrollBy({ top: -step, behavior: "smooth" });
    }
  };

const handleKey = (e) => {
  const rect = section.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * 0.5 &&
    rect.bottom > window.innerHeight * 0.5;
  if (!inView) return;

  const atStart = isMobile ? el.scrollLeft === 0 : el.scrollTop === 0;
  const atEnd = isMobile
    ? el.scrollLeft + el.clientWidth >= el.scrollWidth
    : el.scrollTop + el.clientHeight >= el.scrollHeight;

  let step = isMobile ? el.clientWidth * 0.9 : el.clientHeight * 0.9;

  if (["ArrowDown", "PageDown", " "].includes(e.key)) {
    if (atEnd) return; // ✅ allow page scroll when at end
    e.preventDefault(); // only block when scrolling inside
    isMobile
      ? el.scrollBy({ left: step, behavior: "smooth" })
      : el.scrollBy({ top: step, behavior: "smooth" });
  }

  if (["ArrowUp", "PageUp"].includes(e.key)) {
    if (atStart) return; // ✅ allow page scroll when at start
    e.preventDefault(); // only block when scrolling inside
    isMobile
      ? el.scrollBy({ left: -step, behavior: "smooth" })
      : el.scrollBy({ top: -step, behavior: "smooth" });
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
      className="min-h-screen w-full bg-[url('/howitworks-bg.png')] bg-cover bg-no-repeat bg-center relative overflow-hidden rounded-[2rem]"
    >
      {/* Left Text */}
      <motion.div
        className="absolute top-8 md:top-1/2 2xl:top-[70%] md:-translate-y-1/2 left-6 md:left-16 lg:left-20 xl:left-42 2xl:left-[16%] z-10 text-white max-w-[220px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[420px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-white flex items-center gap-2 tk-baskerville-display-pt italic text-[18px] sm:text-[20px]">
          <div className="bg-white w-8 sm:w-12 md:w-20 h-[1px] rounded-4xl"></div> How it works
        </h1>
        <h2 className="text-[30px] leading-[40px] 2xl:leading-[70px] sm:text-[28px] md:text-[40px] lg:text-[45px] 2xl:text-[50px] tk-neue-haas-grotesk-display mb-4">
          3 easy steps <span className="tk-baskerville-display-pt italic font-light">to a confident smile</span>
        </h2>
        <Button text="Find a doctor" />
      </motion.div>

      {/* Cards Scroll Section */}
      <motion.div
        className="absolute mt-18 md:mt-0 top-0 right-0 lg:right-4 xl:right-[12%] 2xl:right-[20%] h-full w-full lg:w-[55%] xl:w-[50%] flex justify-end z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          ref={scrollRef}
          className={`scroll-hide h-full flex ${
            isMobile ? "flex-row overflow-x-auto snap-x" : "flex-col overflow-y-auto snap-y"
          } py-12 md:py-20 px-6 md:px-10 gap-6 items-end md:pr-12 lg:pr-16`}
          style={{
            scrollSnapType: isMobile ? "x mandatory" : "y mandatory",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-[#c8d7de] min-w-[60vw] min-h-[60vw] max-h-[60vw] md:max-w-[300px] md:min-w-[300px] md:min-h-[300px] md:max-h-[300px] lg:min-h-[300px] lg:max-h-[300px] xl:min-w-[400px] p-4 md:p-6 lg:p-8 rounded-3xl shadow-md flex flex-col gap-2 justify-center snap-center"
              variants={cardVariants}
            >
              <p className="tk-baskerville-display-pt italic text-[#15161a] text-[16px] sm:text-[18px] md:text-[20px] xl:leading-[24px]">
                {step.step}
              </p>
              <h3 className="text-[#15161a] text-[18px] md:text-[22px] xl:text-[32px] xl:leading-[38px] tk-neue-haas-grotesk-display leading-[20px] lg:leading-[24px]">
                {step.title}
              </h3>
              <p className="mt-2 text-[#15161a] text-[14px] md:text-[14px] leading-[20px] xl:leading-[25px] xl:text-[18px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
