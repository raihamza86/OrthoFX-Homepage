import React from 'react'
import WhyDifferent from './WhyDifferent'
import Aligned from './Aligned'
import WhyDifferentTwo from './WhyDifferentTwo'

const Trusted = () => {
  return (
    <div className='bg-[#15161a] py-[40px] px-4 md:px-[32px] lg:px-[2rem] 2xl:px-[35rem] overflow-hidden'>
        <div className='flex flex-col items-center justify-center gap-4'>
        <div className='w-full flex justify-start'>
        <img className='w-46 rounded-2xl' src="/trusted-1.jpg" alt="not found" />
        </div>
        <div className='flex flex-col gap-4 items-center w-full px-4 xl:px-[270px]'>
        <h2 className='md:text-[56px] text-[32px] text-[#c8d7de] w-full text-center'>Trusted by patients and FDA-cleared — <span>Innovation that keeps your smile journey on track.</span></h2>
        <p className='md:text-[18px] text-[#c8d7de] w-full 2xl:w-[90%] text-center'>Our aligners deliver smoother, predictable progress – so you can enjoy life confidently, knowing your smile is on track.**</p>
        </div>
        <div className='w-full flex justify-end'>
        <img className='w-46 rounded-2xl' src="/trusted-2.jpg" alt="not found" />
        </div>
        </div>
        <WhyDifferent />
        <WhyDifferentTwo />
        <Aligned />
    </div>
  )
}

export default Trusted