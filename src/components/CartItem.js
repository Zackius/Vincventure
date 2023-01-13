import React from 'react'
import { Link } from 'react-router-dom'


const CartItem = ({ item }) => {
  const {id, title, image, price, amount } = item
  return (
    <div className='flex'>
      <div className='w-full min-h-[150px] flex items-center'>
        <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} alt="Product" />
        </Link>
        <div> 
          n 
        </div>
      </div>
    </div>
  )
}

export default CartItem