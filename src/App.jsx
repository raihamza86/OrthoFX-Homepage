import React from "react";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import HowItWorks from "./components/HowItWorks";
import TestimonialSlider from "./components/TestimonialSlider";
import DoctorTestimonials from "./components/DoctorTestimonials";
import VideoSection from "./components/VideoSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-[#15161a]">
      <Navbar />
      <Hero />
      <Trusted />
      <HowItWorks />
      <TestimonialSlider />
      <DoctorTestimonials />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
