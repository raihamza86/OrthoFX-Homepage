import React from 'react'
import Button from './Button'
import AlignerSection from './AlignerSection'

const Aligned = () => {
  return (
    <div>
        <div className='flex gap-4 lg:flex-row flex-col justify-between'>
        <h2 className='text-[40px] xl:text-[96px] text-white'>Aligned <br /> <span className='text-[#c8d7de]'>to your lifestyle
</span></h2>
<div className='flex text-end xl:h-[250px] items-end'>
<Button text='Find a doctor' />
</div>
        </div>
        <AlignerSection />
    </div>
  )
}

export default Aligned