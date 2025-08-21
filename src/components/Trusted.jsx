import React from 'react'
import WhyDifferent from './WhyDifferent'
import Aligned from './Aligned'
import WhyDifferentTwo from './WhyDifferentTwo'

const Trusted = () => {
  return (
    <div className="bg-[#15161a] mt-[10rem] py-10 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-[16%] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-8 max-w-7xl 2xl:max-w-[108rem] mx-auto">
        
        {/* Left Image */}
        <div className="w-full flex justify-start">
          <img
            className="w-40 sm:w-52 md:w-60 lg:w-72 rounded-2xl"
            src="/trusted-1.jpg"
            alt="not found"
          />
        </div>

        {/* Heading + Paragraph */}
        <div className="flex flex-col gap-6 items-center w-full px-2 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-[#d9edf7] text-center font-xxthin leading-tight">
            Trusted by patients and FDA-cleared —{" "}
            <span className="libre-baskerville-regular-italic">
              Innovation that keeps your smile journey on track.
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#c8d7de] text-center font-xxthin max-w-3xl">
            Our aligners deliver smoother, predictable progress – so you can
            enjoy life confidently, knowing your smile is on track.**
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-end">
          <img
            className="w-40 sm:w-52 md:w-60 lg:w-72 rounded-2xl"
            src="/trusted-2.jpg"
            alt="not found"
          />
        </div>
      </div>

      {/* Other Sections */}
      <WhyDifferent />
      <WhyDifferentTwo />
      <Aligned />
    </div>
  )
}

export default Trusted
