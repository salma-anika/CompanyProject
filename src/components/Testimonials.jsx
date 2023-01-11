import React from 'react'
import { feedback } from '../constants';
import { FeedbackCard } from './FeedbackCard';
export const Testimonials = () =>  (
  <section id='clients' className='sm:py-16 py-6 flex justify-center items-center flex-col relative'>
    <div className='w-[60%] h-[60%] absolute z-[0] -right-[50%] rounded-full blue__gradient'/>
    <div className='w-full justify-between items-center flex md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>What People are <br className='sm:block hidden'/>saying about us</h1>
      <div className='w-full md:mt-0 mt-6'>
      <p className='max-w-[450px] text-left font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
Software development methodology is a process or series of processes used in software development. Again,
 quite broad but that it is things like a design phase, a development phase. 
 It is ways of thinking about things like waterfall being a non iterative kind of process. Generally it takes the form of defined phases.
</p>
      </div>
    
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
       {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
       ))}
       </div>

  </section>
  )

