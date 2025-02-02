import React from 'react'
import Point from '../icons/Point'

export default function AboutUs() {
    const list = [
        "Old Courtallam's first resort (1995), nestled in lush mango forests for serenity.",
        "A symbol of luxury, elegance, and unforgettable hospitality.",
        "World-class amenities blending nature’s beauty with impeccable service.",
        "Your magical escape for tranquility and timeless memories."
    ]
  return (
    <div className='flex justify-between'>
        <div className='h-[300px] w-[600px] flex blue-gradient rounded-2xl'>
            <div className='img-container h-[100%] w-[50%] rounded-2xl'><img src="/pool.jpg" alt="swimming-pool" className='object-cover ro'/></div>
            <div className='flex items-end justify-end w-[50%] pr-4 pb-4'><p className='text-white font-semibold'>Srishty's Serene Forest <br/>Retreat awaits</p></div>
        </div>

        <div className='w-[50%] flex flex-col justify-center'>
            <h1 className='text-[42px] text-bold mb-5'>About Us</h1>
            <div className='flex flex-col gap-2'>
            {list.map((item,i)=>(
               <div className='flex gap-2' key={i}>
                <Point/>
                <p>{item}</p>
               </div>
            ))}
        </div>
        </div>
    </div>
  )
}
