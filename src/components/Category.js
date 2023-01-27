import React  from 'react'
import { Link, useParams } from 'react-router-dom'
// import { CartContext } from '../contexts/CartContext'






const CategoryProduct = ({category }) => {
  const {id, name, image } = category
  // const{addToCart} =useContext(CartContext)




  return (
    <section>
     <div className='borderborder-[#e4e4e4] rounded-xl shadow-2xl  mb-2 relative overflow-hidden group transition '>
        <div className=' flex flex-col h-[80px] justify-center items-center'>
          <div className='w-[100px] mx-auto flex justify-center items-center'>
          <Link to={`/list/${id}`}>
            <img className='max-h-[60px] pt-4 object-contain group-hover:scale-110 transition duration-300'
                src={image} alt="productImage" />
              </Link>
          </div>
          <p>{name }</p>
        </div>
        </div>

    </section> 
  )
}

export default CategoryProduct