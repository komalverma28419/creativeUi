import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center 
    w-full overflow-hidden text-gray-700 dark:text-white'>
        <div className='inline-flex items-center gap-2 border border-gray-200 p-1.5 pr-4 rounded-full'>
            <img className='w-20' src={assets.group_profile} alt="" />
            <p className='text-xs font-medium'>Empowering 10K+ users worldwide</p>
        </div>
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-24
         max-w-5xl'>
            Elevating Ideas into <span className='bg-linear-to-r from-[#5044EF] to-[#4d8cea] 
            bg-clip-text text-transparent'>Lasting</span> value.
        </h1>
        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 sm:max-w-xl 
        pb-3'>Crafting impactful digital experiences that foster meaningful connections and inspire 
            lasting engagement
        </p>
        <div className='relative'>
            <img src={assets.hero_img} alt="" className='w-full max-w-6xl'/>
            <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 
            sm:-right-50 -z-1 dark:hidden'/>
        </div>
        
      
    </div>
  )
}

export default Hero
