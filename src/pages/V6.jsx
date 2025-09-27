import React from 'react'
import crossing from '../assets/crossing.png'
import lanes from '../assets/lanes.png'
import car from '../assets/car.png'

const V6 = () => {
  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
        
       {/* Car 1: Moves Left to Right */}
{/* Parent DIV handles the MOVEMENT */}
<div className="absolute bottom-[calc(50%-60px)] w-48 z-10 animate-marquee-ltr top-45">
  
  {/* Child IMG handles the ROTATION */}
  <img
    src={car}
    alt="Car driving left to right"
    className="w-full rotate-270" 
  />

</div>

{/* Car 2: Moves Right to Left (flipped) */}
{/* Parent DIV handles the MOVEMENT */}
<div className="absolute bottom-50 w-48 z-10 animate-marquee-rtl">
  <img
    src={car}
    alt="Car driving right to left"
    className="w-full scale-x-[-1] rotate-90"
  />
</div>

        
        {/* --- ROAD (Your existing code) --- */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center px-4 space-x-4 left-50">
          <div className="flex flex-col items-start space-y-0">
            <img src={crossing} alt="Top" className="rotate-180 w-60" />
            <img src={crossing} alt="Bottom" className="rotate-180 w-60" />
          </div>
          <div className='absolute top-55 left-60 font-normal'>
            <p className='pl-10'>we warned you </p>
            <p>we were random !</p>
          </div>
          <img
            src={lanes}
            alt="lanes"
            className="w-full object-cover"
          />
        </div>

      </section>
    </>
  )
}

export default V6;