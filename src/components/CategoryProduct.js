import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CategoryContext } from '../contexts/CategoryContext'


const CategoryProduct = () => {
  const {categories} = useContext(CategoryContext)

  return (
    <section>
      <div  className='pt-44'>
      <div className='container mx-auto justify-evenly'>
                  <div className='grid grid-cols-5  sm:max-w-xl  md:grid-cols-5  lg:grid-cols-5 xl:grid-cols-5 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
            {
              categories.map((items) => {
                return (
                  <Link to={`/`}>
                  <div className='border bg-white  border-[#e4e4e4] h-[80px] shadow-2xl justify-center  '>
                  <div className='w-full  flex justify-center items-center'>
                    <div className='mx-auto flex justify-center text-center items-center pt-6 capitalize font-bold  group-hover:scale-110 transition duration-300'>
                   {items}
                          </div>
                        </div>
                    </div>
                    </Link>
                )
              })
                  }
                  </div>
              </div>
      </div>
    </section> 
  )
}

export default CategoryProduct