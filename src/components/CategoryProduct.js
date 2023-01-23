import React, {useContext, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { CategoryContext } from '../contexts/CategoryContext'




const CategoryProduct = () => {
  const { categories } = useContext(CategoryContext)
  const { category } = useParams()
  

 
console.log(categories)
  return (
    <section>
      <div  className=''>
      <div className='container mx-auto'>
                  <div className='grid grid-cols-2  sm:max-w-xl  md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6  gap-[40px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
            {
              categories.map((items) => {
                return (
                  <Link to= {`/categorylist/${category}`}>
                  <div className='border bg-white  border-[#e4e4e4] h-[80px] shadow-2xl '>
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