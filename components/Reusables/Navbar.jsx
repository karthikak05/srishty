'use client'
import { navItems } from '@/data/navItems';
import HoverLight from './HoverLight';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className='flex justify-center align-center  py-4 px-2 relative'>
        <div className='font-modern pr-10  absolute top-0 left-[50px]'>
         <div className='img-container h-[90px] w-[120px]'><img src='/logo.png' alt='logo' className='object-contain'/></div>
        </div>

        {/* NavBar */}
        <HoverLight className="sticky top-5">
          <div className='flex gap-5'>
              {navItems.map((item,i)=>(
                <a key={i} href={item.link} className='text-[#070e41]'>{item.name}</a>
              ))}
          </div>
        </HoverLight>

        {/* Button */}
        <div className='absolute right-2'>
          <Button>Book Now</Button>
        </div>
    </nav>
  )
}
