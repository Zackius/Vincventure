import React  from 'react'
import { Link } from 'react-router-dom'

const CategoryProduct = ({category }) => {
  const {id, name, image } = category
  
  return (
    <section>
     <div className='border-[#e4e4e4] rounded-xl shadow-2xl  mb-2 relative overflow-hidden group transition '>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[100px]  mx-auto flex justify-center items-center'>
          <Link to={`/list/${id}`}>
            <img className='max-h-[100px]  pt-2 object-contain group-hover:scale-110 transition duration-300'
                src={image} alt="productImage" />
              </Link>
          </div>
          <p className='text-sm'>{name }</p>
        </div>
        </div>

    </section> 
  )
}

export default CategoryProduct