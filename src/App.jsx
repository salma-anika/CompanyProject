import React from 'react'

import  {Navbar}  from './components/Navbar';
import {Hero} from './components/Hero';
import {Stats} from './components/Stats';
import {Business} from './components/Business';
import { Billing } from './components/Billing';
import {CardDeal} from './components/CardDeal';
import { Clients } from './components/Clients';
import {Cta} from './components/Cta';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';


export const App = () => {
  return (
    
    <div className=" w-full overflow-hidden bg-black">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar/>
        </div>
      </div>

      <div className='bg-black flex justify-center items-start'>
<div className='xl:max-w-[1280px] w-full'>
<Hero/>
</div>
      </div>
      <div className='bg-black px-6 sm:px-16 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
<Stats/>
<Business/>
<Billing/>
<CardDeal/>
<Testimonials/>
<Clients/>
<Cta/>
<Footer/>
        </div>
      </div>
    </div>
  
  )
}
