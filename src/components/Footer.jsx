import React from "react";

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

const Footer = () => (
  <footer className="bg-[#121418] text-white py-12 px-6 md:px-20">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
      {/* Company Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-sm">
          {companyLinks.map((link) => (
            <li key={link}>
              <a href="#" className="hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Products</h3>
        <ul className="space-y-2 text-sm">
          {productLinks.map((link) => (
            <li key={link}>
              <a href="#" className="hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-2 text-sm">
          {resourceLinks.map((link) => (
            <li key={link}>
              <a href="#" className="hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 mt-8" />

    {/* Contact & Legal */}
    <div className="mt-8 flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-4 md:space-y-0">
      <div className="text-sm space-y-1">
        <p>
          Call Us: <a href="tel:4159360006" className="hover:underline">415‑936‑0006</a>
        </p>
        <p>
          Email: <a href="mailto:support@care.orthofx.com" className="hover:underline">support@care.orthofx.com</a>
        </p>
      </div>
      <p className="text-sm">©2025 OrthoFX. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
