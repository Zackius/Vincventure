import React, {useContext} from 'react'
import { ProductContext } from '../contexts/ProductContext';


const CategoryList = () => {
  const { products } = useContext(ProductContext)


  const product = products.map((cat) => {
    return (
      cat.category
    )
  })
  console.log(product)
  return (
      <section className='bg-white  pt-12'>
          <div className='flex felx-cols'>
              <div className=''>
         {product}
              </div>
          </div>
    </section>
  )
}

export default CategoryList