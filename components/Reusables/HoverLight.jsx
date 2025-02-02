'use client'
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { MouseEvent, useEffect, useRef, useState } from 'react';

export default function HoverLight({children}) {
  const boxWrapper = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouemove = ({ currentTarget, clientX, clientY }) => {
    let { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };

  return (
    <div className='relative h-fit bg-white p-[1px] rounded-full'>
      <div
        onMouseMove={handleMouemove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={boxWrapper}
        className={cn(
          'group relative rounded-full  p-[1px] bg-[#3131313a] overflow-hidden w-fit mx-auto'
        )}
      >
        {/* Cursor Flow Gradient  */}

        {isHovered && (
          <div
            className='pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 '
            style={{
              background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgba(255, 255, 255, 0.068),
              transparent 80%
            )
          `,
            }}
          />
        )}

        {/* Hover Spotlight  */}
        <div
          className='absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-full'
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #1740d1 0%,transparent 20%,transparent) fixed `,
          }}
        ></div>
        <div className="relative text-center z-10 px-8 py-2 rounded-full w-fit bg-cover bg-white backdrop-blur-10 h-full mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}