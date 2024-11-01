import React from 'react'
import Button from "./Button.jsx"

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w- [800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p>It's time to get fit</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>GET<span className='text-blue-400'>FIT</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>Your ultimate gym <span className='text-blue-400 font-medium '> workout planner</span> to stay on track, set goals, and <span className='text-blue-400 font-medium'>achieve</span>  your fitness journey with ease!</p>
      <Button func={()=>{
        window.location.href='#generate'
      }} text="Accept & begin"></Button>
      </div>
  )
}
