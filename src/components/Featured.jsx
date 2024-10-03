import { motion, useAnimation } from 'framer-motion';
import React from 'react'
import { MdOutlineKeyboardVoice } from 'react-icons/md';

const Featured = () => {
    const card = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()]; // Added 6 animation controllers
    const containerAnimation = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()]; // Added 6 container animation controllers


    const handleHover = (index) => {
        // Animate both the text and the container simultaneously
        card[index].start({ y: "0%" });
        containerAnimation[index].start({ scale: 1.05 });
    }

    const handleHoverEnd = (index) => {
        // Reset both the text and the container
        card[index].start({ y: "100%" });
        containerAnimation[index].start({ scale: 1 });
    }
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[2px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-["NeueMontreals"] tracking-tight'>Featured projects</h1>
        </div>

        <div className='w-full flex gap-10 px-20 pt-20'>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                <h1 className='font-["NeueMontreals"] text-[20px]'>Cardboard Spaceship</h1>
            </div>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                <h1 className='font-["NeueMontreals"] text-[20px]'>AH2 & Matt Horn</h1>
            </div>
        </div>
        <div className='card px-20 flex gap-10 mt-4 w-full'>
            <motion.div onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    animate={containerAnimation[0]} className='cardcontainer relative w-1/2 h-[80vh] rounded-xl'>
                <motion.h1 className='absolute flex overflow-hidden w-full text-[#CDEA68] right-0 z-[20] leading-none tracking-tight text-6xl font-["NeueMontreals"] left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"CARDBOARD SPACESHIO".split('').map((items, index)=><motion.span initial={{ y: "100%" }}
                                animate={card[0]}
                                transition={{ ease: [0.22, 1, 0.35, 1], delay: index * 0.03 }} className='inline-block'>{items}</motion.span>)}
                </motion.h1>
                <div className='card w-full rounded-xl h-full  overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                </div>
            </motion.div>
            <motion.div onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    animate={containerAnimation[1]} className='cardcontainer relative w-1/2 h-[80vh] rounded-xl bg-red-400'>
            <h1 className='absolute flex overflow-hidden w-full text-[#CDEA68] z-[20] leading-none tracking-tight text-6xl font-["NeueMontreals"] right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"AH2 & MATT HORN".split('').map((items, index)=><motion.span initial={{ y: "100%" }}
                                animate={card[1]}
                                transition={{ ease: [0.22, 1, 0.35, 1], delay: index * 0.03}} className='inline-block'>{items}</motion.span>)}
                </h1>
                <div className='card w-full rounded-xl h-full  overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                </div>
            </motion.div>
        </div>
        <div className='w-full flex gap-10 px-20 pt-8'>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>BRANDED TEMPLATE</button>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>SALES DECK</button>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>SOCIAL MEDIA TEMPLATES</button>
            </div>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>PITCH DECK</button>
            </div>
        </div>

        <div className='w-full flex gap-10 px-20 pt-20'>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                <h1 className='font-["NeueMontreals"] uppercase text-[20px]'>Fyde</h1>
            </div>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                <h1 className='font-["NeueMontreals"] uppercase text-[20px]'>Vise</h1>
            </div>
        </div>
        <div className='card px-20 flex gap-10 mt-4 w-full'>
            <motion.div onHoverStart={() => handleHover(2)}
                    onHoverEnd={() => handleHoverEnd(2)}
                    animate={containerAnimation[2]} className='cardcontainer relative w-1/2 h-[80vh] rounded-xl'>
                <motion.h1 className='absolute flex overflow-hidden text-[#CDEA68] z-[9] leading-none tracking-tight text-8xl font-["NeueMontreals"] left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"FYDE".split('').map((items, index)=><motion.span initial={{ y: "100%" }}
                                animate={card[2]}
                                transition={{ ease: [0.22, 1, 0.35, 1], delay: index * 0.03}} className='inline-block'>{items}</motion.span>)}
                </motion.h1>
                <div className='card w-full rounded-xl h-full  overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </motion.div>
            <motion.div onHoverStart={() => handleHover(3)}
                    onHoverEnd={() => handleHoverEnd(3)}
                    animate={containerAnimation[3]} className='cardcontainer relative w-1/2 h-[80vh] rounded-xl bg-red-400'>
                <motion.h1 className='absolute flex overflow-hidden text-[#CDEA68] z-[9] leading-none tracking-tight text-8xl font-["NeueMontreals"] right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"VISE".split('').map((items, index)=><motion.span initial={{ y: "100%" }}
                                animate={card[3]}
                                transition={{ ease: [0.22, 1, 0.35, 1], delay: index * 0.03}} className='inline-block'>{items}</motion.span>)}
                </motion.h1>               
                <div className='card w-full rounded-xl h-full  overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </motion.div>
        </div>
        <div className='w-full flex gap-10 px-20 pt-8'>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>AUDIT</button>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>COPYWRITING</button>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>SALES DECK</button>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>SLIDES DESIGN</button>
            </div>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>AGENCY</button>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>COMPANY PRESENTATION</button>
            </div>
        </div>

        <div className='w-full flex gap-10 px-20 pt-20'>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                <h1 className='font-["NeueMontreals"] uppercase text-[20px]'>Trawa</h1>
            </div>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                <h1 className='font-["NeueMontreals"] uppercase text-[20px]'>Premium Blend</h1>
            </div>
        </div>
        <div className='card px-20 flex gap-10 mt-4 w-full'>
            <motion.div onHoverStart={() => handleHover(4)}
                    onHoverEnd={() => handleHoverEnd(4)}
                    animate={containerAnimation[4]} className='cardcontainer relative w-1/2 h-[80vh] rounded-xl'>
            <motion.h1 className='absolute flex overflow-hidden text-[#CDEA68] z-[20] leading-none tracking-tight text-8xl font-["NeueMontreals"] left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
            {"TRAWA".split('').map((items, index)=><motion.span initial={{ y: "100%" }}
                                animate={card[4]}
                                transition={{ ease: [0.22, 1, 0.35, 1], delay: index * 0.03}} className='inline-block'>{items}</motion.span>)}
                </motion.h1>
                <div className='card w-full rounded-xl h-full  overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                </div>
            </motion.div>
            <motion.div onHoverStart={() => handleHover(5)}
                    onHoverEnd={() => handleHoverEnd(5)}
                    animate={containerAnimation[5]} className='cardcontainer relative w-1/2 h-[80vh] rounded-xl bg-red-400'>
                <motion.h1 className='absolute flex overflow-hidden w-full text-[#CDEA68] z-[20] leading-none tracking-tight text-8xl font-["NeueMontreals"] right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"PREMIUM BLEND".split('').map((items, index)=><motion.span initial={{ y: "100%" }}
                                animate={card[5]}
                                transition={{ ease: [0.22, 1, 0.35, 1], delay: index * 0.03}} className='inline-block'>{items}</motion.span>)}
                </motion.h1> 
                <div className='card w-full rounded-xl h-full  overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                </div>
            </motion.div>
        </div>
        <div className='w-full flex gap-10 px-20 pt-8'>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>BRAND IDENTITY</button>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>DESIGN RESEARCH</button>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>INVESTORS DECK</button>
            </div>
            <div className='w-1/2 flex gap-3 justify-start items-center'>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>BRANDED TEMPLATE</button>
            </div>
        </div>

        <div className='w-full mt-20 flex justify-center'>
            <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-4xl cursor-pointer flex justify-center items-center gap-5'>VIEW ALL CASE STUDIES
                <div className='w-4 h-4 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
      
    </div>
  )
}

export default Featured
