import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-[#15161a] overflow-hidden">
      <section
        className="relative min-h-screen bg-no-repeat bg-cover bg-[center_top] md:bg-center py-20 px-6 lg:px-12 rounded-b-[3rem] bg-[url('/hero-bg.jpg')] md:bg-[url('/hero.jpg')]"
      >

        <div className="absolute inset-0 bg-black/20 rounded-b-[3rem] z-0" />

        <div className="relative z-10 h-screen flex flex-col justify-between">
          <h1 className="md:text-[70px] text-[40px] text-[#15161a]">
            Be you. <br /> <span className="italic"> Smile confidently.</span>
          </h1>

          <div className="flex gap-4 justify-end">
            <img className="lg:block hidden w-52" src="/hero-img.png" alt="not found" />
            <div className="flex flex-col items-start gap-4">
              <p className="text-[18px] text-white">
                With AirFlex™ aligners, enjoy up to 50% less wear time <br />
                compared to other brands. OrthoFX's cutting-edge <br />
                aligners are designed to fit your unique lifestyle and <br />
                treatment goals.*
              </p>
              <Button text='Find a doctor' bg='f0f0f0'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
