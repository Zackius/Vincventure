import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)
  
  const product = products.find((item) => {
    return item.id === parseInt(id)
  })
  if (!product) {
    return <section className='h-screen flex justify-center items-center'>Loading ....</section>
  }
  const { title, price, description, image } = product

  const filteredCategory = products.filter((category) => {
    return category.category === product.category
  })
  console.log(filteredCategory)
  return (
    <section className='  pt-24 float-right mr-32  flex items-center border shadow-2xl  border-[#b4afaf]'>
  <div className='w-[500px] h-[300px]'>
        <div className='flex flex-col  lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
           <img className='max-w-[200px]' src={image} alt =''/> 
          </div>
          <div className='flex-1 text-center lg:text-left'>
      <h1 className='text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto'> {title}</h1>
        <div className='text-xl text-blue-400  font-medium  mb-6'> $ {price} </div>
          <p  className='mb-8 px-4'>{description}</p>
            <button onClick={() => addToCart(product, product.id)} className='bg-black py-4 px-8 text-white'>Add to Cart</button>
            </div>
        </div>
        
</div>
    </section>
  
  )
}

export default ProductDetails