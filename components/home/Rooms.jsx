import React from 'react'
import Bed from '../icons/Bed'
import Persons from '../icons/Persons'
import Plane from '../icons/Plane'
import { Sparkles } from '../Reusables/Particles'
import { ArrowDownRight } from 'lucide-react'

export default function Rooms() {
    const rooms = [
        {
            name : "Maharaja Premium",
            price: "7500 /night",
            image : "maharaja"
        },
        {
            name : "Tree Suites",
            price: "4000 /night",
            image : "tree-suites"
        },
        {
            name : "Myoora",
            price: "3500 /night",
            image : "/myoora"
        },
    ]
  return (
    <div className='mb-10'>
        <h2 className='text-[42px] text-bold text-center mb-10'>Choose Your <span className='font-stylish text-gradient'>Perfect</span> Room</h2>
        <div className='flex gap-4 mx-10 border-box'>
            {rooms.map((room,i)=>(
                <div className='rounded-2xl h-[400px] teal-gradient flex flex-col items-center text-white flex-1' key={i}>
                    <div className='img-container rounded-t-2xl border-b-2 border-orange-400 h-[70%] w-[100%] smooth'><img src={`/rooms/${room.image}.webp`} alt={room.image} /></div>
                    <div className='flex flex-col items-center justify-center gap-2 h-[30%]'>
                        <p>{room.name}</p>
                        <span className='flex gap-4'>
                            <Bed size={20}/>
                            <Persons size={20}/>
                        </span>
                        <p>{room.price}</p>
                    </div>
                </div>
            ))}
            <div className='bg-secondary rounded-2xl flex-1 relative'>
                <div className='px-5 text-white mt-5'><h3 className='text-xl font-semibold'>Reserve Paradise Now</h3>
                <p>Book your dream escape with us—luxury rooms and suites awaits for you.</p></div>
                <div className='bg-white rounded-full h-[50px] w-[50px] absolute right-10 bottom-10 flex items-center justify-center rotate-[270deg]'>
                    <ArrowDownRight size={30}/>
                </div>
                <div className='absolute bottom-0'><Plane/></div>
                <div className='relative h-[90%] overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 '>
                    <Sparkles
                        density={800}
                        speed={1}
                        size={1.5}
                        direction='top'
                        opacitySpeed={2}
                        color='#32A7FF'
                        className='absolute inset-x-0 bottom-0 h-full w-full '
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
