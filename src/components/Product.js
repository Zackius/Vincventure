import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'



const Product = ({ product }) => {
  const { id, title, price, image } = product
  const { addToCart } = useContext(CartContext)

  const priceCut = (price) => {
    return price * 0.1
  } 
  return (
    <div>
      <div className='border bg-white border-[#e4e4e4] rounded-lg h-[250px] shadow-2xl  mb-3 relative overflow-hidden group transition '>
        <div className='w-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
          <Link to={`/product/${id}`}>
            <img className='max-h-[180px] pt-4 object-contain group-hover:scale-110 transition duration-300'
                src={image} alt="productImage" />
              </Link>
          </div>
          <div className='absolute top-6  -left-8 right-16  p-1  flex flex-col items-center justify-center gap-y-2 opacity-100 transition-all duration-300 '>
              <div className='flex justify-center  items-center text-white w-16 h-6 bg-red-500 '>
         <p>on sale</p>
              </div>
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
        <div className = ' text-center mt-2'>
  
        <Link to={`/product/${id}` }>
          <h2 className='font-normal object-contain  text-xs'>{title}</h2>
          </Link>
          <div>
            <div>{priceCut }</div>
          </div>
        <div className='font-bold text-sm  text-red-600'>${price}</div>
        </div>
      </div>       
    </div>

  )
}

export default Product