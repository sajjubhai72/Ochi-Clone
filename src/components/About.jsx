import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" className='w-full rounded-t-3xl bg-[#CDEA68] text-black'>
        <div className='p-20'>
            <h1 className='font-["Neue Montreals"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds, sell products, explain complex ideas</u>, and <u>hire great peo-ple</u>.</h1>
        </div>

        <div className='w-full border-t-[2px] border-[#A9BF59] flex justify-between pt-10 pb-20 px-20 font-["NeueMontreal"]'>
            <h1 className='text-[1vw] w-[50vw]'>What you can expect:</h1>
            <h1 className='text-[1vw] w-[16vw] leading-[2vw]'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. <br /> <br />
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>

            <div className='pr-[9vw] pt-[7vw] text-[1.2vw] font-["NeueMontreal"]'>
                <h1>S:</h1>
                <ul>
                    <li className="hover:underline duration-5 cursor-pointer">Instagram</li>
                    <li className="hover:underline duration-5 cursor-pointer">Behance</li>
                    <li className="hover:underline duration-5 cursor-pointer">Facebook</li>
                    <li className="hover:underline duration-5 cursor-pointer">Linkedin</li>
                </ul>
            </div>             
        </div>

        <div className='w-full p-10 flex gap-5 border-t-[2px] border-[#A9BF59]'>
            <div className='w-1/2 '>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white uppercase'>read more
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#566032]'></div>
        </div>
      
    </div>
  )
}

export default About

        