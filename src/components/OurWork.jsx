import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const OurWork = () => {
    const workData = [
        {
            title: "Business Dashboard",
            description: "A centralized platform for managing business and team activities.",
            image : assets.work_dashboard_management
        },
        {
            title: "Web Design",
            description: "Creating visually stunning and user-focused websites that drive results.",
            image : assets.work_mobile_app
        },
        {
            title: "Wellness App Growth",
            description: "A strategic campaign focused on expanding and building a loyal fitness community.",
            image : assets.work_fitness_app 
        }
    ]
  return (
    <motion.div 
      initial ="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{staggerChildren : 0.2}}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32
    text-gray-700 dark:text-white'>
        <Title title="Our Finest Creations" desc="Explore crafted digital experiences where creativity 
        and innovation deliver meaningful results."/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {workData.map((work,index) =>(
                <motion.div 
                  initial = {{opacity: 0, y: 30}}
                  whileInView = {{opacity: 1 , y: 0}}
                  transition={{duration: 0.6,delay: index * 0.2}}
                  viewport={{once: true}}
                key={index} className='hover:scale-105 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} alt="" className='w-full rounded-xl'/>
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-full'>{work.description}</p>
                </motion.div>
            ))}

        </div>
    </motion.div>
  )
}

export default OurWork
