import React, {useContext, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { CategoryContext } from '../contexts/CategoryContext'




const CategoryProduct = () => {
  const { categories } = useContext(CategoryContext)
  const { id} = useParams()

  return (
    <section>
      <div  className=''>
      <div className='container mx-auto'>
          <div className='flex  justify-center text-center'>
            {
              categories.map((items) => {
                return (
                  <Link to= {`/categorylist/${id}`}>
                  <div>
                  <div>
                    <div className=' pl-4 capitalize font-semibold'>
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