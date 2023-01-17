import React from 'react'
import { Link } from 'react-router-dom'
import { Kitchen } from '../img'

const Hero = () => {
  return (
    <section className=' h-[400px] bg-hero bg-no-repeat bg-cover bg-center py-24' >
      <div className=' bg-yellow-200 shadow-md container mx-auto flex justify-around '>
        <div className='flex flex-col justify-center'>
          <div className='flex items-center uppercase'>
            <div className='lg:text-[40px] md:text-[20px] sm:text-[20px] font-bold'>Vinc  Ventures.</div>
          </div>
          <h1 className='lg:text-[50px] md:text-[25px] sm:text-[15px] '>Sales!! Sales!! <br/>
<span className='lg:text-[20px] md:text-[15px] sm:text-[10px]'>Shop for all Home Accessories: Kitchen, Bedroom, Livingroom, <br/> Lighting Essentials, Power tools, Bathroom and many more</span>
          </h1>
          <Link className="self-start uppercase border-b-2 border-primary " to={'/'}>Shop Here</Link>
        </div>
        <div className='lg:'>
          <img className='h-[45vh] w-full pt-8 rounded-full' src={Kitchen} alt="cookeries" />
        </div>
      </div>
   </section>
  )
}

export default Hero