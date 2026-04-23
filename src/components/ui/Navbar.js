import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="mt-[4vh] flex justify-center w-full z-50">
      <div className="relative w-[clamp(150px,22vw,370px)] h-[clamp(40px,6vw,58px)]">
        <Image 
          src="/logo.svg"  
          alt="Planetrix Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </nav>
  )
}

export default Navbar