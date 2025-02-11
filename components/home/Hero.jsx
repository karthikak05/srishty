"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="h-[600px] w-[100%] flex flex-col items-center justify-center mt-[5%]">
        <p className='text-2xl font-semibold pb-[100px]'>Stay in Harmony</p>
        <div className=' w-[80%] h-[90vh] rounded-xl relative grid place-items-center'>
        <div className='text-[112px] font-stylish teal-text p-0 absolute top-[-112px] z-10' ref={textRef}>with nature</div>
            <img src="/hero-1.png" alt="hero" className="z-[99]"/>
        </div>
    </div>
  )
}
