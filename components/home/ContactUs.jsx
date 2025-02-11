import React from 'react'
import ContactForm from './ContactForm'
import Point from '../icons/Point'

export default function ContactUs() {
    const attractions = ["Old Courtallam","Main Falls","Five Falls","Tiger Falls","Agasthiyar Hills"]
  return (
    <div className='mx-4 relative grid place-items-center pb-10'>
        <div className='img-container h-[600px] w-[60%] rounded-2xl'>
          <img src="/contact/slide-1.png" alt="slide-1" />
        </div>

        <div className='absolute top-0 right-10 border-[1px] border-gray-200 backdrop-blur-[5px] p-4 py-2 w-[40%] rounded-xl'>
          <ContactForm/>
        </div>

        {/* Attractions */}
        <div className='absolute left-[10%] backdrop-blur-[10px] p-4 rounded-md h-[400px]'>
            <h2 className='text-2xl text-primary font-stylish letter tracking-wide '>Near By Attractions</h2>
            <div className='h-[90%] flex flex-col justify-center items-start gap-2'>
              {attractions.map((item,i)=>(
                  <p className='text-white text-xl my-1 text-gradient flex gap-1' key={i}>
                    <span><Point color="#FF9100"/></span>{item}
                  </p>
              ))}
            </div>
        </div>
    </div>
  )
}
