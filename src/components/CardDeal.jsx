import React from 'react'
import { layout } from '../constants'
import { card } from '../assets'
import { Button } from './Button'
export const CardDeal = () =>  (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
        Find a better Card Deal <br className='sm:block hidden'/>in few easy steps</h2>
      <p className='max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
Software development methodology is a process or series of processes used in software development. Again,
 quite broad but that it is things like a design phase, a development phase. 
 It is ways of thinking about things like waterfall being a non iterative kind of process. Generally it takes the form of defined phases.
</p>
<Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
    <img className='w-[100%] h-[100%] ' src={card}/>
    </div>
   </section>
  )

