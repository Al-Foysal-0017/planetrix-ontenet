// import React from 'react'
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <div 
//     style={{
//         background: 'rgba(5, 7, 10, 0.4)', // Halka dark background overlay
//         backdropFilter: 'blur(3px) saturate(180%)', // Jhapsa effect
//         WebkitBackdropFilter: 'blur(30px) saturate(180%)', // Safari support er jonno
//         borderTop: '0.5px solid rgba(255, 255, 255, .3)' // Halka border top design er jonno
//       }} 
//       className='w-full px-3 sm:px-5 md:px-20 py-12'
//       >
//         <div className="w-full mx-auto max-w-[1920px flex justify-between items-end">
//             <div className="max-w-2xl">
//             <div className="relative w-80 h-16">
//                     <Image 
//                         src="/logo.svg"  
//                         alt="Planetrix Logo"
//                         fill
//                         className="object-contain"
//                     />
//             </div>
//             <p className="pt-4 text-[18px] text-gray-400 leading-relaxe tracking-wider">
//                 Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet curabitur eget quam. Tortor nam volutpat tincidunt nibh lacus vitae sed mi. Viverra eu commodo sed sed commodo commodo urna sed.
//             </p>
//             </div>

//             <div className=" flex flex-col gap-1 text-[20px] text-gray-300 tracking-[0.2em] cursor-pointer pointer-events-auto">
//                 <p className="hover:text-white transition-colors">About Us</p>
//                 <p className="hover:text-white transition-colors">Blog</p>
//                 <p className="hover:text-white transition-colors">Career</p>
//                 <p className="hover:text-white transition-colors">FAQ</p>
//                 <p className="hover:text-white transition-colors">Contact us</p>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default Footer




// import React from 'react'
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer 
//       style={{
//         background: 'rgba(5, 7, 10, 0.4)',
//         backdropFilter: 'blur(3px) saturate(180%)',
//         WebkitBackdropFilter: 'blur(30px) saturate(180%)',
//         // Border thickness-o viewport onujayi scale hobe
//         borderTop: 'calc(0.05vw + 0.5px) solid rgba(255, 255, 255, .3)' 
//       }} 
//       // py-12 soriye viewport relative padding logic
//       className='w-full px-[3vw] py-[2vw]'
//     >
//       <div className="w-full mx-auto flex justify-between items-end">
        
//         {/* Left Side: Logo & Description */}
//         <div className="max-w-[40vw]"> 
//           {/* Logo size zoom-proof kora hoyeche */}
//           <div className="relative w-[clamp(150px,18vw,350px)] h-[clamp(30px,4vw,70px)]">
//             <Image 
//               src="/logo.svg"  
//               alt="Planetrix Logo"
//               fill
//               className="object-contain object-left"
//             />
//           </div>
          
//           {/* Text size ebong spacing clamp logic */}
//           <p className="mt-[1vw] text-[clamp(0.8rem,1vw,1.1rem)] text-gray-400 leading-[1.6] tracking-[0.05vw]">
//             Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet curabitur eget quam. 
//             Tortor nam volutpat tincidunt nibh lacus vitae sed mi. Viverra eu commodo sed sed 
//             commodo commodo urna sed.
//           </p>
//         </div>

//         {/* Right Side: Navigation Links */}
//         <div className="flex flex-col gap-[0.5vw] text-[clamp(0.7rem,1.1vw,1.3rem)] text-gray-300 tracking-[0.2em cursor-pointer">
//           <p className="hover:text-white transition-colors duration-300">About Us</p>
//           <p className="hover:text-white transition-colors duration-300">Blog</p>
//           <p className="hover:text-white transition-colors duration-300">Career</p>
//           <p className="hover:text-white transition-colors duration-300">FAQ</p>
//           <p className="hover:text-white transition-colors duration-300">Contact us</p>
//         </div>

//       </div>
//     </footer>
//   )
// }

// export default Footer





import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <footer 
      style={{
        background: 'rgba(5, 7, 10, 0.4)',
        backdropFilter: 'blur(3px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        // Border thickness-o viewport onujayi scale hobe
        borderTop: 'calc(0.05vw + 0.5px) solid rgba(255, 255, 255, .3)' 
      }} 
      // py-12 soriye viewport relative padding logic
      className='w-full px-[3vw] py-[1vw]'
    >
      <div className="w-full mx-auto flex justify-between items-end">
        
        {/* Left Side: Logo & Description */}
        <div className="max-w-[40vw]"> 
          {/* Logo size zoom-proof kora hoyeche */}
          <div className="relative w-[clamp(150px,14vw,350px)] h-[clamp(30px,2vw,70px)]">
            <Image 
              src="/logo.svg"  
              alt="Planetrix Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          
          {/* Text size ebong spacing clamp logic */}
          <p className="mt-[0.8vw] text-[clamp(0.8rem,1vw,1.1rem)] text-gray-400 leading-[1.6] tracking-[0.05vw]">
            Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet curabitur eget quam. 
            Tortor nam volutpat tincidunt nibh lacus vitae sed mi. Viverra eu commodo sed sed 
            commodo commodo urna sed.
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex flex-col gap-[0.5vw] text-[clamp(0.7rem,1vw,1rem)] text-gray-300 cursor-pointer">
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