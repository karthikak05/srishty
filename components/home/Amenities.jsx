import React from 'react'
import { amenityRows } from '@/data/amenities'
import AmenityCard from './AmenityCard'

export default function Amenities() {
  return (
    <div className='bg-gray-200 pb-[100px]'>
      <h2 className='text-[42px] text-center py-[70px]'>Enjoy our wide varitey of <span className='text-gradient'>amenities</span></h2>
      {amenityRows.map((row, rowIndex) => (
          <div className='flex gap-10 w-full px-[10%] justify-center' key={rowIndex}>
            {row.map((card,inx)=>(
              <AmenityCard title={card.title} icon={card.icon} key={inx}/>
            ))}
          </div>
      ))}
    </div>
  )
}
