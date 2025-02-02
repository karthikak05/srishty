import React from 'react'

export default function Button({children}) {
  return (
    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
        <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffcc80_0%,#ff6600_50%,#ffcc80_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#ffb347_0%,#cc4400_50%,#ffb347_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 py-1  text-sm font-medium text-black backdrop-blur-[30px]">
            {children}
        </span>
    </button>
  )
}
