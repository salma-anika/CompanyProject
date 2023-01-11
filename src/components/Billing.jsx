import React from 'react'
import { apple, bill, google } from '../assets'
import { layout } from '../constants'
export const Billing = () =>  (
   <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} className="h-[100%] w-[100%] relative z-[5]"/>
      <div className="absolute w-[50%] h-[50%] top-0 z-[3] -left-1/2 rounded-full white__gradient"/>
      <div className="absolute w-[50%] h-[50%] top-0 z-[3] -left-1/2 rounded-full pink__gradient"/>
      
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Easily Control your <br className='sm:block hidden'/>invoicing and billing</h2>
      <p className='max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
Software development methodology is a process or series of processes used in software development. Again,
 quite broad but that it is things like a design phase, a development phase. 
 It is ways of thinking about things like waterfall being a non iterative kind of process. Generally it takes the form of defined phases.
</p>
<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
  <img className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' src={apple}/>
  <img className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' src={google}/>

</div>
    </div>

   </section>
  )

