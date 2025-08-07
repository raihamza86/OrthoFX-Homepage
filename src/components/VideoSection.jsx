import React from "react";
import Button from "./Button";

const VideoSection = () => {
  return (
    <section className="flex flex-col gap-2 my-4">
    <div className="relative w-full h-[80vh] flex justify-center items-center px-4 overflow-hidden">
      {/* Video container that fills full screen on mobile */}
      <div className="relative w-full h-[80vh] rounded-4xl overflow-hidden md:max-w-[900px] md:h-auto md:aspect-video">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0 rounded-4xl"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Content over video */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between md:justify-start gap-4 p-4 text-white">
          <h1 className="text-[40px] md:text-[64px]">
            Ready to take the <br /> next step?
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Button text="Find a doctor" />
            <Button text="Smile quiz" />
          </div>
        </div>
      </div>

    </div>
      <p className="text-[#c8d7de] text-[18px] px-4 lg:px-24">*FDA-Cleared for at least 12 hours of continuous daily wear time.
**Data on file.
¹ These opinions are of patients treated. Results may vary.
² Opinions of OrthoFX providers mentioned. Clinicians should use their judgement in treating their patients.</p>
    </section>
  );
};

export default VideoSection;
