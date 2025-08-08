import React from "react";
import { motion } from "framer-motion";

const companyLinks = ["About", "OrthoFX Difference"];
const productLinks = [
  "AirFlex™",
  "FXClear™",
  "FXBright™",
  "FXRetainers",
  "FXPay™",
  "FXOnTrack™",
  "Directions for Use",
];
const resourceLinks = [
  "Find a Doctor",
  "FXOnTrack Photo Guide",
  "Blog",
  "FAQ",
  "Press",
  "Events & Webinars",
  "Terms & Conditions",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

const Footer = () => (
  <footer className="bg-[#121418] text-white overflow-hidden">
    {/* Divider */}
    <motion.div
      className="border-t border-[#c8d7de] mb-8"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ originX: 0 }}
    />

    <div className="py-4 px-6 md:px-20 max-w-[1200px] grid grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Company Section */}
      <motion.div
        custom={0}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-lg mb-4 text-[#d9edf7] text-[20px] italic">
          Company
        </h3>
        <ul className="space-y-2 text-sm">
          {companyLinks.map((link, i) => (
            <motion.li
              key={link}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#"
                className="hover:cursor-pointer text-[#d9edf7] text-[16px]"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Products Section */}
      <motion.div
        custom={1}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-lg mb-4 text-[#d9edf7] text-[20px] italic">
          Products
        </h3>
        <ul className="space-y-2 text-sm">
          {productLinks.map((link, i) => (
            <motion.li
              key={link}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#"
                className="hover:cursor-pointer text-[#d9edf7] text-[16px]"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Resources Section */}
      <motion.div
        custom={2}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-lg mb-4 text-[#d9edf7] text-[20px] italic">
          Resources
        </h3>
        <ul className="space-y-2 text-sm">
          {resourceLinks.map((link, i) => (
            <motion.li
              key={link}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#"
                className="hover:cursor-pointer text-[#d9edf7] text-[16px]"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* Contact & Legal */}
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true }}
    >
      <img src="/footer.png" alt="not found" />
    </motion.div>
  </footer>
);

export default Footer;
