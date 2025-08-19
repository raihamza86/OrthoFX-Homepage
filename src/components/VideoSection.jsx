import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="flex flex-col gap-12 my-8 md:my-16">
      <motion.div
        className="relative w-full flex justify-center items-center px-0"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative w-full h-[120vh] md:h-[120vh] 2xl:h-[65vh] overflow-hidden rounded-2xl sm:rounded-[2.5rem] xl:max-w-[90%] xl:h-auto md:aspect-video shadow-xl px-4 md:px-8 lg:h-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Background Video */}
<div className="w-full h-full rounded-4xl sm:rounded-[2.5rem] overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 z-10" />

          {/* Text + Buttons */}
          <div className="absolute inset-0 flex flex-col xl:justify-start justify-between items-start gap-6 p-6 sm:p-10 z-20 text-white">
            <motion.h1
              className="text-3xl md:text-[40px] ml-6 md:ml-4 font-xxthin leading-[64px] drop-shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to take the <br className="hidden xl:block" /> next step?
            </motion.h1>

            <motion.div
              className="flex flex-col xl:flex-row items-start xl:items-center gap-4 ml-6 md:ml-4"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.4 },
                },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Button text="Find a doctor" bg="white" txt="black" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Button text="Smile quiz" bg="#292930" txt="white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        className="px-4 md:mt-[6rem] md:mb-[3rem] md:px-6 lg:px-24 xl:ml-[-2rem] font-xxthin xl:mt-[3rem] xl:mb-[2rem] 2xl:ml-[20rem] 2xl:mt-[6rem] 2xl:mb-[3rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-[#c8d7de] text-sm sm:text-base md:text-lg leading-[22px]">
          *FDA-Cleared for at least 12 hours of continuous daily wear time.
          <br className="" />
          **Data on file.
          <br className="" />
          ¹ These opinions are of patients treated. Results may vary.
          <br className="" />
          ² Opinions of OrthoFX providers mentioned. Clinicians should use their
          judgement in treating their patients.
        </p>
      </motion.div>
    </section>
  );
};

export default VideoSection;
