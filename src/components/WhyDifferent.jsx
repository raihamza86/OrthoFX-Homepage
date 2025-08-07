import React from 'react'
import Button from './Button'

const WhyDifferent = () => {
  return (
    <div className='my-4'>
        <h2 className='text-[#c8d7de] text-[40px] md:text-[96px]'>Why are we different?
</h2>
<div className='flex flex-col gap-5'>
    <h1 className='text-white flex items-center gap-2 italic'><div className='bg-white w-20 h-[2px] rounded-4xl'></div> 01</h1>
    <h2 className='text-[32px] text-white'>Comfort meets<br />efficiency</h2>
    <p className='text-[18px] text-[#c8d7de]'>Our aligners apply optimal force with a gentle, consistent touch. While traditional aligners may use up to 8.4x more force, ours deliver precise control for a more comfortable experience.**</p>
    <img className='rounded-2xl md:w-[80%]' src="/trusted-3.jpg" alt="not found" />
</div>
<div className='flex flex-col gap-5 mt-8'>
    <h1 className='text-white flex items-center gap-2 italic'><div className='bg-white w-20 h-[2px] rounded-4xl'></div> 02</h1>
    <h2 className='text-[32px] text-white'>AirFlex™ aligners,<br />advanced material</h2>
    <p className='text-[18px] text-[#c8d7de]'>AirFlex™ is the new generation of clear aligners, featuring patented HyperElastic™ polymer for sustained optimal force delivery. It supports natural bone remodeling and reduces daytime relapse when not wearing aligners.**</p>
    <div>
    <Button text='OrthoFX Difference'/>
    </div>
    <img className='rounded-2xl md:w-[80%]' src="/trusted-4.jpg" alt="not found" />
</div>
    </div>
  )
}

export default WhyDifferent