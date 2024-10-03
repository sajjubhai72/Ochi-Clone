import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Calculate the center of the screen
      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      // Calculate the delta between mouse position and center
      let deltaX = mouseX - centerX;
      let deltaY = mouseY - centerY;

      // Calculate the angle using Math.atan2 and convert it to degrees
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Set the rotation state to angle - 180 degrees (to align properly)
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full mt-30 overflow-hidden bg-[#CDEA68] font-['Founder_Grotesk']">
      <div className="relative w-full h-full bg-cover justify-center bg-center">
        <div className="px-20 h-full flex items-center justify-center">
          <h1 className="text-zinc-900 text-[10vw] text-center tracking-tighter font-[1000]">Ready <br /> to start <br /> the project?</h1>
        </div>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* First Circle */}
          <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              {/* Inner Circle that rotates based on mouse movement */}
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Second Circle */}
          <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              {/* Inner Circle that rotates based on mouse movement */}
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='button mb-20 flex flex-col items-center'>
         <div className='button-1 text-2xl'>
        <button className='flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white uppercase'>start the project
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        <h1 className='text-center mt-8 text-zinc-900'>or</h1>
        <button className='flex gap-10 items-center px-10 py-6 mt-10 border-[1px] border-zinc-900 rounded-full text-zinc-900 uppercase'>hello@ochi.design
          <div className='w-2 h-2 bg-zinc-900 rounded-full'></div>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Eyes;
