import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {
  
  // const [result , setResult] = useState("")

  const onSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8e798726-8977-4caa-95f4-ca075642f9da");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thank you for your submission !")
      event.target.reset();
    } else {
      toast.error(data.message)
    }
      
    } catch (error) {
      toast.error(error.message)
    }
    
  }
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 
    pt-32 text-gray-800 dark:text-white'>
      <Title title="Start the Conversation" desc="Creating thoughtful digital products that 
      inspire, engage, and grow."/>
      <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
            <label className='m-2 text-sm font-medium'>Your name</label>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.person_icon} alt="" />
                <input type="text" name='name' placeholder='Enter your name' className='w-full p-3 text-sm 
                outline-none' required/>
            </div>
        </div>
        <div>
            <label className='m-2 text-sm font-medium'>Email id</label>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.email_icon} alt="" />
                <input type="email" name='email' placeholder='Enter your email' className='w-full p-3 text-sm 
                outline-none' required/>
            </div>
        </div>
        <div className='sm:col-span-2'>
            <p className='m-2 text-sm font-medium'>Message</p>
            <textarea rows={8} name='message' placeholder='Enter your message' className='w-full p-3 text-sm 
            outline-none rounded-lg border border-gray-300 dark:border-gray-600' required/>
        </div>
        <button type='submit'className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 
        rounded-full cursor-pointer hover:scale-105 transition-all'>
            Submit <img src={assets.arrow_icon} alt="" className='w-4'/>
        </button>
      </form>
    </div>
  )
}

export default ContactUs
