import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <footer 
      style={{
        background: 'rgba(5, 7, 10, 0.4)',
        // background: 'rgba(10, 16, 30, 0.1)',
        backdropFilter: 'blur(3px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        borderTop: 'calc(0.05vw + 0.5px) solid rgba(255, 255, 255, .3)' 
      }} 
      className='w-full px-[5vw] py-[4vw]'
    >
      <div className="w-full mx-auto flex justify-between items-center">
        
        {/* Left Side: Logo & Description */}
        <div className="max-w-[40vw]"> 
          {/* Logo size zoom-proof kora hoyeche */}
          <div className="relative w-[clamp(150px,18vw,350px)] h-[clamp(30px,4vw,70px)]">
            <Image 
              src="/logo.svg"  
              alt="Planetrix Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          
          {/* Text size ebong spacing clamp logic */}
          <p className="hidden sm:flex mt-[1vw] text-[clamp(0.8rem,1.1vw,1.2rem)] leading-[1.6] tracking-[0.05vw]">
            Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet curabitur eget quam. 
            Tortor nam volutpat tincidunt nibh lacus vitae sed mi. Viverra eu commodo sed sed 
            commodo commodo urna sed.
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex flex-col gap-[0.5vw] text-[clamp(0.7rem,1.1vw,1.2rem)] text-gray-300 tracking-[0.2em] cursor-pointer pointer-events-auto">
          <p className="hover:text-white transition-colors duration-300">About Us</p>
          <p className="hover:text-white transition-colors duration-300">Blog</p>
          <p className="hover:text-white transition-colors duration-300">Career</p>
          <p className="hover:text-white transition-colors duration-300">FAQ</p>
          <p className="hover:text-white transition-colors duration-300">Contact us</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
