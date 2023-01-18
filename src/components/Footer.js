import React, { useContext } from 'react'
import { CategoryContext } from '../contexts/CategoryContext'
import {AiOutlineFacebook, AiOutlineTwitter,AiOutlineInstagram, AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { Logo } from '../img'

const Footer = () => {
  const {categories} = useContext(CategoryContext)
  return (
    <footer className='bg-white border-t-2 pt-8 px-16  '>
  <div className='flex flex-cols justify-evenly'>
        <div>
          <img className='h-[80px] md:h-[50px] sm:h-[30px]' src={Logo} alt="Vinc Ventures" />
          
          <p className='text-2xl font-light'>Got any Question?  Call us 24/7 </p>
          <p className='text-xl  font-semibold'>+254 742 347444</p>
        </div>
        <div>
          <h1 className='text-2xl  font-semibold'>Product Categories</h1>
          {
            categories.map((category) => {
              return(
                <ul className='text-center '>
                  <li>{category }</li>
                </ul>
              )
            })
          }
        </div>

        <div>

        </div>
        <div className='flex flex-col gap-2'>
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
      <div className='flex flex-col text-center pt-2'>
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