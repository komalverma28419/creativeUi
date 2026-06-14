import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData =[
        {
            title :"Brand Promotion",
            description :"Helping brands reach wider audiences through impactful campaigns.",
            icon: assets.ads_icon
        },
        {
            title: "Growth Marketing",
            description: "Driving growth through smart strategies and targeted campaigns.",
            icon: assets.marketing_icon
        },
        {
            title: "Web Development",
            description: "Building modern, responsive, and high-performing websites.",
            icon:assets.content_icon
        },
        {
            title: "Content Creation",
            description: "Crafting engaging content that connects with your audience.",
            icon: assets.social_icon
        },

    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 
    xl:px-40 pt-32 text-gray-700 dark:text-white'>
       <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
       <Title title="We’re here to help" desc="From concept to execution, we create smart digital solutions
        that move your business ahead."/>

        <div className='grid grid-cols-1 md:grid-cols-2 '>
            {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>))}
        </div>
    </div>
    
  )
}

export default Services
