import React from 'react'
import { navItems } from '@/data/navItems'
export default function Footer() {

  return (
    <footer className='bg-black text-white overflow-hidden relative'>
        <div className='absolute left-0 flex gap-3 mt-10 ml-3'>{navItems.map((item,i)=>
          <a key={i} href={item.link}>{item.name}</a>
        )}</div>
        

        <div className='flex items-center w-full justify-between relative mt-5'>
            <h2 className='text-center flex-grow font-semibold text-xl'>Find your perfect stay on</h2>
            <button className='bg-primary text-white rounded-full px-6 py-3 mr-3'>Book Now</button>
        </div>
        <div className='flex justify-center w-fit relative m-auto'>
            <p className='font-stylish text-[122px] text-primary'>Srishty</p>
            <p className='font-stylish text-[32px] absolute bottom-0'>Garden Resorts</p>
        </div>
    </footer>
  )
}
