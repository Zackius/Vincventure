import React from 'react'
import {AiOutlineFacebook, AiOutlineTwitter,AiOutlineInstagram, AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { Logo } from '../img'

const Footer = () => {

  return (
    <footer className='bg-white border-t-2   px-16 '>
      <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row  justify-center gap-2 sm:flex-col-1'>
        <div>
          <img className='h-[80px] md:h-[50px] sm:h-[30px]' src={Logo} alt="Vinc Ventures" />
          <p className='text-2xl font-light'>Got any Question?  Call us 24/7 </p>
          <p className='text-xl  font-semibold'>+254 717 409 566</p>
        </div>
        <div> 

        </div>
        <div className='flex flex-col sm:text-sm  md:text-md'>
          <p className='text-2xl font-semibold'>Social Account</p>
          <div className='flex justify-evenly text-4xl'>
            <Link to={'/'}>
              <AiOutlineFacebook />
            </Link>
            <Link to={'/'}>
            <AiOutlineTwitter />
            </Link>
            <Link to={'/'}>
            <AiOutlineInstagram/>
            </Link>
          </div>
        <p className='text-sm font-light'>At Vinc Ventures we are social and we  always<br/>ensure there is maximum integration   to customers <br/> in all accessible platforms.</p>
        </div>
      </div>
      </div>
      <div className='flexl text-center pt-2'>
      <div className=" flex  justify-center">
          <AiOutlineCopyrightCircle size={20} />
        <p >
          Vinc Ventures .
        </p>
        </div>
        <div className=" flex  justify-center">
          <AiOutlineCopyrightCircle size={20} />
        <p >
     All Right Reserved
        </p>
      </div>
        <p className='text-md font-semibold md:text-sm te'>Privacy | Cookies Policy | Terms and Conditions | Website Accessibility</p>
      </div>
    </footer>
  )
}

export default Footer