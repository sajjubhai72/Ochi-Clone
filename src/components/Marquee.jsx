import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-t-3xl bg-[#004D43]'>
        <div className='text mt-20 mb-20 border-t-2 border-b-2 border-zinc-300 overflow-hidden flex pr-10 whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 6}}  className='text-[15vw] leading-none font-["Founder_Grotesk"] font-semibold uppercase pt-1 -mb-1'>We are Ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 6}} className='text-[15vw] leading-none font-["Founder_Grotesk"] font-semibold uppercase pt-1 -mb-1'>We are Ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
