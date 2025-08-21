import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="flex flex-col gap-12 my-8 md:my-16 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-[16%]">
      {/* Video Container */}
      <motion.div
        className="relative w-full flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative w-full h-[600px] md:aspect-video overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-xl max-w-screen-2xl [@media(min-width:1768px)_and_(max-width:1868px)]:min-w-[99vw] 2xl:min-w-[80vw] 2xl:max-w-full mx-auto 2xl:h-[70vh] 2xl:aspect-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Background Video */}
          <div className="w-full h-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden">
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
          <div className="absolute inset-0 flex flex-col justify-between xl:justify-start items-start gap-6 p-6 sm:p-10 z-20 text-white">
            <motion.h1
              className="text-3xl md:text-[40px] font-xxthin leading-snug drop-shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to take the <br className="hidden xl:block" /> next step?
            </motion.h1>

            <motion.div
              className="flex flex-col xl:flex-row items-start xl:items-center gap-4"
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
                <Button
                  text="Smile quiz"
                  bg="#292930"
                  txt="white"
                  border="#292930"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        className=" max-w-screen-lg font-xxthin my-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-[#c8d7de] text-sm sm:text-base md:text-lg leading-relaxed">
          *FDA-Cleared for at least 12 hours of continuous daily wear time.
          <br />
          **Data on file.
          <br />
          ¹ These opinions are of patients treated. Results may vary.
          <br />
          ² Opinions of OrthoFX providers mentioned. Clinicians should use their
          judgement in treating their patients.
        </p>
      </motion.div>
    </section>
  );
};

export default VideoSection;
