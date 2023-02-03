import React, { useContext } from 'react'
import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'


const SameCateoryProduct = ({ product }) => {
  const { id, image, name, price } = product


    const{addToCart} = useContext(CartContext)
  return (
      <div>
      <div className='border bg-white border-[#e4e4e4] shadow-2xl justify-center mb-2 relative overflow-hidden group transition '>
        <div className='container mx-auto'>
        <div className='  w-full flex justify-center items-center'>
          <div className='  w-[150]flex justify-center items-center'>
          <Link to={`/product/${id}`}>
            <img className='max-h-[200px] pt-4 object-contain group-hover:scale-110 transition duration-300'
                src={image} alt="productImage" />
              </Link>
          </div>
          <div className='absolute top-6  -right-11 group-hover:right-5  p-1  flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
            <button onClick={() =>addToCart(product, id)}>
              <div className='flex justify-center  items-center text-white w-8 h-8 bg-blue-500 '>
                <BsPlus className='text-3xl ' />
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-8 h-8 bg-white items-center  flex justify-center  '>
              <BsEyeFill />
            </Link>
          </div> 
        </div>
        </div>
        <div className = ' text-center mt-2'>
        <Link to={`/product/${id}` }>
          <h2 className='font-normal object-contain  text-xs'>{name}</h2>
          </Link>
        <div className='font-bold text-sm '> $   {price }</div>
        </div>
      </div>       
    </div>
  )
}

export default SameCateoryProduct