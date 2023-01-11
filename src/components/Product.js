import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import {BsPlus, BsEyeFill} from 'react-icons/bs'

const Product = ({ product }) => {
  const{id, image, category, title, price} = product
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] shadow-2xl  mb-4 relative overflow-hidden group transition '>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300'
            src={image} alt = "productImage" />
          </div>
          <div className='absolute top-6  -right-11 group-hover:right-5  p-1  flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
            <button>
              <div className='flex justify-center  items-center text-white w-8 h-8 bg-blue-500 '>
                <BsPlus className='text-3xl ' />
              </div>
            </button>
            <Link to={'/'} className='w-8 h-8 bg-white  flex justify-center  '>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product