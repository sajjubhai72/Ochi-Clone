import React from 'react'
import sajjad from '../image/Sajjad-Ansari.jpg'

const Client = () => {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[2px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-["NeueMontreals"] tracking-tight'>Clients’ reviews</h1>
        </div>

        <div className='w-full px-20 mt-5 flex justify-between font-["NeueMontreals"]'>
            <div className='heading-1'>
                <h1 className='underline text-2xl'>Karma Venturs</h1>
            </div>
            <div className='heading-2'>
                <h1 className='text-2xl'>Services:</h1>
                <div className='mt-20'>
                    <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>INVESTOR DECK</button><br />
                </div>
                <div className='pt-4'>
                <button className='px-5 py-2 border-[1px] uppercase border-zinc-400 rounded-full font-["NeueMontreals"] text-l cursor-pointer'>SALES DECK</button>
                </div>
            </div>
            <div className='heading-3'>
                <h1 className='text-2xl'>Sajjad Ansari</h1>
                <div className='mt-20'>
                    <img className='rounded-xl w-[8vw] h-[8vw] ' src={sajjad} alt="" />
                    <p className='w-[33.5vw] text-xl mt-5 font-["NeueMontreals"]'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                </div>
            </div>
            <div>
                <h1 className='text-[#CBCBCB] text-2xl'>READ</h1>
            </div>
        </div>

        <div className='w-full px-20 border-b-[2px] border-zinc-700 pb-20'></div>
        <div className='w-full px-20 border-b-[2px] flex justify-between border-zinc-700 pb-10'>
            <h1 className='text-2xl underline underline-offset-4 font-["NeueMontreals"] mt-5 tracking-tight'>Planty</h1>
            <h1 className='text-2xl font-["NeueMontreals"] mt-5 tracking-tight'>Nina Walloch</h1>
            <h1 className='text-2xl underline underline-offset-8 font-["NeueMontreals"] mt-5 uppercase tracking-tight'>Read</h1>
        </div>
        <div className='w-full px-20 border-b-[2px] flex justify-between border-zinc-700 pb-10'>
            <h1 className='text-2xl underline underline-offset-4 font-["NeueMontreals"] mt-5 tracking-tight'>Workiz Easy</h1>
            <h1 className='text-2xl font-["NeueMontreals"] mt-5 tracking-tight'>Tomer Levy</h1>
            <h1 className='text-2xl underline underline-offset-8 font-["NeueMontreals"] mt-5 uppercase tracking-tight'>Read</h1>
        </div>
        <div className='w-full px-20 border-b-[2px] flex justify-between border-zinc-700 pb-10'>
            <h1 className='text-2xl underline underline-offset-4 font-["NeueMontreals"] mt-5 tracking-tight'>Premium Blend</h1>
            <h1 className='text-2xl font-["NeueMontreals"] mt-5 tracking-tight'>Ellen Kim</h1>
            <h1 className='text-2xl underline underline-offset-8 font-["NeueMontreals"] mt-5 uppercase tracking-tight'>Read</h1>
        </div>
        <div className='w-full px-20 border-b-[2px] flex justify-between border-zinc-700 pb-10'>
            <h1 className='text-2xl underline underline-offset-4 font-["NeueMontreals"] mt-5 tracking-tight'>Hypercare Systems</h1>
            <h1 className='text-2xl font-["NeueMontreals"] mt-5 tracking-tight'>Brendan Goss</h1>
            <h1 className='text-2xl underline underline-offset-8 font-["NeueMontreals"] mt-5 uppercase tracking-tight'>Read</h1>
        </div>
        <div className='w-full px-20 border-b-[2px] flex justify-between border-zinc-700 pb-10'>
            <h1 className='text-2xl underline underline-offset-4 font-["NeueMontreals"] mt-5 tracking-tight'>Officevibe</h1>
            <h1 className='text-2xl font-["NeueMontreals"] mt-5 tracking-tight'>Raff Labrie</h1>
            <h1 className='text-2xl underline underline-offset-8 font-["NeueMontreals"] mt-5 uppercase tracking-tight'>Read</h1>
        </div>
        <div className='w-full px-20 border-b-[2px] flex justify-between border-zinc-700 pb-10'>
            <h1 className='text-2xl underline underline-offset-4 font-["NeueMontreals"] mt-5 tracking-tight'>Orderlion</h1>
            <h1 className='text-2xl font-["NeueMontreals"] mt-5 tracking-tight'>Stefan Strohmer</h1>
            <h1 className='text-2xl underline underline-offset-8 font-["NeueMontreals"] mt-5 uppercase tracking-tight'>Read</h1>
        </div>
        <div className='w-full px-20 border-b-[2px] flex justify-between border-zinc-700 pb-10'>
            <h1 className='text-2xl underline underline-offset-4 font-["NeueMontreals"] mt-5 tracking-tight'>Black Book</h1>
            <h1 className='text-2xl font-["NeueMontreals"] mt-5 tracking-tight'>Jaci Smith</h1>
            <h1 className='text-2xl underline underline-offset-8 font-["NeueMontreals"] mt-5 uppercase tracking-tight'>Read</h1>
        </div>
        <div className='w-full px-20 border-b-[2px] flex justify-between border-zinc-700 pb-10'>
            <h1 className='text-2xl underline underline-offset-4 font-["NeueMontreals"] mt-5 tracking-tight'>Trawa Energy</h1>
            <h1 className='text-2xl font-["NeueMontreals"] mt-5 tracking-tight'>David Budde</h1>
            <h1 className='text-2xl underline underline-offset-8 font-["NeueMontreals"] mt-5 uppercase tracking-tight'>Read</h1>
        </div>

        <div className='w-full mt-20 flex gap-5 px-20'>
            <div className='container w-1/2 h-[50vh]'>
                <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-2 border-[1px] uppercase border-[#C2E166] text-[#C2E166] rounded-full font-["NeueMontreals"] text-l cursor-pointer'>&copy;2022-2024</button>
                </div>
            </div>
            <div className='container w-1/2 h-[50vh] flex gap-5'>
                <div className='card relative rounded-xl w-1/2 h-full bg-zinc-500 flex justify-center items-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-2 border-[1px] uppercase border-zinc-100 text-zinc-100 rounded-full font-["NeueMontreals"] text-l cursor-pointer text-bold'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='card relative rounded-xl w-1/2 h-full bg-zinc-500 flex justify-center items-center'>
                    <img className='w-32 bg-zinc-500' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-2 border-[1px] uppercase border-zinc-100 text-zinc-100 rounded-full font-["NeueMontreals"] text-l cursor-pointer text-bold'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Client
