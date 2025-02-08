'use client'
import { navItems } from '@/data/navItems';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className='flex justify-center align-center px-2 relative sticky top-5 z-[999]'>
        <div className='font-modern pr-10 absolute top-0 left-[50px]'>
         <div className='font-stylish relative'>
          <h3 className='text-primary text-[32px]'>Srishty</h3>
          <p className='text-black text-xs absolute bottom-0'>Garden Resort</p>
         </div>
        </div>

        {/* NavBar */}
        {/* <HoverLight> */}
          <div className='flex gap-5 border-[#13384D] border-[1px] px-6 py-2 rounded-full backdrop-blur-[12px]'>
              {navItems.map((item,i)=>(
                <a key={i} href={item.link} className='text-primary'>{item.name}</a>
              ))}
          </div>
        {/* </HoverLight> */}

        {/* Button */}
        <div className='absolute right-2'>
          <Button>Book Now</Button>
        </div>
    </nav>
  )
}
