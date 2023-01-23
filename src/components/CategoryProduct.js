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
          <div className='flex  gap-20 justify-center text-center'>
            {
              categories.map((items) => {
                return (
                  <Link to= {`/categorylist/${category}`}>
                  <div>
                  <div>
                    <div className=' capitalize font-bold'>
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