import React from 'react'
import { Kitchen } from '../img'

const Hero = () => {
  return (
    <section className='bg-blue-300 h-[750px] bg-hero bg-no-repeat bg-cover bg-center py-20'>
      <div className='container mx-auto flex justify-around '>
        <div className='flex flex-col justify-center'>
          <div className='flex items-center uppercase'>
            <div className='text-[40px]'>Vinc  Ventures.</div>
          </div>
          <h1 className='text-[50px] font-medium'>Sales!! Sales!! <br/>
<span className='text-[20px]'>Shop for all Home Accessories: Kitchen, Bedroom, Livingroom, <br/> Lighting Essentials, Power tools, Bathroom and many more</span>
          </h1>
        </div>
        <div className='hidden lg:block'>
          <img className='h-[70vh] w-full pt-8 rounded-full' src={Kitchen} alt="cookeries" />
        </div>
      </div>
   </section>
  )
}

export default Hero