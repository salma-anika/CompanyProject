import React from 'react'
import { clients } from '../constants'

export const Clients = () =>  (
   <section className='flex justify-center items-center my-4' id='clients'>
    <div className='flex justify-center items-center flex-wrap w-full'>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
       {clients.map((client) => (
          <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]">
            <img className='sm:min-w-[192px] w-[100px] object-contain' src={client.logo}/>
          </div>
       ))}
       </div>
    </div>

   </section>
  )

