import React from 'react'
import {  layout } from '../constants'
import { features } from '../constants'
import {Button} from '../components/Button'



const FeatureCard =({icon,title,content,index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" :"mb-0"} feature-card `}>
    <div className='w-[64px] h-[64px] flex justify-center items-center rounded-full bg-dimBlue'>
      <img src={icon} alt="feature" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className='flex flex-1 flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
  </div>
)
export const Business = () => {
  return (
    <section id="features" className={layout.section}>
       <div className={layout.sectionInfo}>
        <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
          You do the business <br className='sm:block hidden'/>We'll handle money
        </h2>
        <p className='max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
Software development methodology is a process or series of processes used in software development. Again,
 quite broad but that it is things like a design phase, a development phase. 
 It is ways of thinking about things like waterfall being a non iterative kind of process. Generally it takes the form of defined phases.
</p>
<Button styles="mt-10"/>
       </div>
       <div className={`${layout.sectionImg} flex-col`}>
       {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
       ))}
       </div>
    </section>
  )
}
