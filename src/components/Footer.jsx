import React from 'react'
import { logo } from '../assets'
import { footerLinks , socialMedia } from '../constants'
export const Footer = () =>  (
    <section className='flex justify-center items-center sm:py-16 py-6 flex-col'>
<div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
<div className=' flex flex-1 flex-col justify-start mr-10'>
  <img src={logo} className="w-[266px] h-[72px] object-contain"/>
<p className='max-w-[310px] mt-4 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
A new way to make the payments easy , reliable and secure.
</p>
</div>
<div className="flex flex-row w-full justify-between flex-wrap flex-[1.5] md:mt-0 mt-10">

        {footerLinks.map((footerLink) => (
          <div key={footerLink.id} 
          className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className=' font-poppins font-medium text-white text-[18px] leading-[27px]'>{footerLink.title}</h4>
            <ul>
            {footerLink.links.map((link,index) => (
            <li key={link.name} 
            className={`font-poppins font-normal text-[16px] leading-[24px] cursor-pointer text-dimWhite hover:text-secondary ${index !== footerLink.links.length -1 ?'mb-4':'mb-0'}`}>
              {link.name}
            </li>
            
        ))}
      </ul>
      
  </div>
        ))}
</div>
</div>
    </section>
  )

