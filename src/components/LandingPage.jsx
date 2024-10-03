import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-10'>
            {["We create", "eye-opening", "presentations"].map((item, index)=>{
                return (
                <div className='masker overflow-hidden'>
                    <div className='w-fit flex items-center gap-5'>
                        {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[7.5vw] h-[5vw] bg-red-300'> </motion.div>)}
                        <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Founder_Grotesk"] font-medium'>{item}</h1>
                    </div>
                </div>);
            })}
        </div>
        <div className='border-t-[2px] border-zinc-600 mt-40 flex justify-between items-center py-5 px-20 font-light text-[20px] capitalize font-["NeueMontreal"]'>
            {["For public and private companies", "From the first pitch to IPO", ].map((item, index)=>(
                <a className='text-md font-light tracking-tight leading-none'>{item}</a>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full cursor-pointer'>start the project</div>
                <div className='w-10 h-10 border-[2px] border-zinc-500 flex items-center justify-center rounded-full'>
                    <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage
