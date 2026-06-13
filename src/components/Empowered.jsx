import React from 'react'
import { company_logos } from '../assets/assets'


const Empowered = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 test-gray-700 
    dark:text-white/80'>
      <h3 className='font-semibold'>Relied on by Leading Brands</h3>
      <div className='flex items-center justify-center gap-10 m-4'>
        {company_logos.map((logo, index)=>(
            <img src={logo} alt="" key={index} className='max-h-5 sm:max-h-6 dark:drop-shadow-xl w-24'/>
        ))}
      </div>
    </div>
  )
}

export default Empowered
