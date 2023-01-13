import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import {BsBag} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { Logo } from '../img'


const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white-300'  : 'py-4 shadow-xl'} fixed w-full h-[60px] z-10 px-12 transition-all `}>
      <div className='container mx-auto flex items-center  justify-between h-full '>
      <Link to={'/'}>
        <div>
          <img className='h-[40px] ' src={Logo} alt="Vinc Ventures"/>
</div>
      </Link>
      <div onClick={() => setIsOpen(!isOpen)} className= 'cursor-pointer flex relative'>
        <BsBag className='text-2xl' />
        <div className='bg-red-500 absolute  -right-2-bottom-2 text-[14px] w-[18px]  h-[18px] text-white rounded-full  flex justify-center items-center'> {itemAmount}</div>
      </div>
      </div>
  
    </header>
  )
}

export default Header