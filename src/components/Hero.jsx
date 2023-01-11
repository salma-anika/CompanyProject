import React from 'react'
import { discount, robot } from '../assets'
import { GetStarted } from '../components/GetStarted'
export const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col py-6 sm:py-16' id="home">
      <div className='justify-center items-start flex-1 flex-col xl:px-0 sm:px-16 px-6'>
        <div className='flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient'>
        <img src={discount}
      alt="discount"
      className="w-[32px] h-[32px]"/>
      <p className='ml-2 font-poppins font-normal text-white text-[18px] leading-[30.8px]'>
<span className='text-white'>20% </span>
Discount For {" "}
<span className='text-white'>1 Month </span> Account
      </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
<h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
  The Next <br className='sm:block hidden'/> {" "}
  <span className='text-gradient'>Generation</span>{" "}
  
</h1>
<div className='ss:flex hidden md:mr-4 mr-0'>
  <GetStarted/>
</div>
      </div>
      <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
  Payment Method.
</h1>
<p className='max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
Software development methodology is a process or series of processes used in software development. Again,
 quite broad but that it is things like a design phase, a development phase. 
 It is ways of thinking about things like waterfall being a non iterative kind of process. Generally it takes the form of defined phases.
</p>
      </div>
      <div className='flex flex-1 justify-center items-center md:my-0 my-10 relative'>
        <img src={robot} alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "/>
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient "/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "/>
      </div>
      <div className='ss:hidden flex justify-center items-start'>
        <GetStarted/>
      </div>
    </section>
  )
}
