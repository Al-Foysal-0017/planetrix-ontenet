// import Image from 'next/image'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className="mt-8 flex justify-center">
//     <div className="relative w-86 h-20">
//                         <Image 
//                             src="/logo.svg"  
//                             alt="Planetrix Logo"
//                             fill
//                             className="object-contain"
//                         />
//                 </div>
//     </div>
//   )
// }

// export default Navbar


import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="mt-[4vh] flex justify-center w-full z-50">
      <div className="relative w-[clamp(150px,15vw,250px)] h-[clamp(40px,4vw,60px)]">
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