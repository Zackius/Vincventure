import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { CategoryContext } from '../contexts/CategoryContext'
import Product from "../components/Product"
import Hero from '../components/Hero'
import CategoryProduct from '../components/CategoryProduct'
// import CategoryProduct from '../components/CategoryProduct'


function Home() {
    const { products } = useContext(ProductContext)
    const { categories } = useContext(CategoryContext)

   
  return (
      <div className='px-12 bg-slate-300'>
          <Hero />
          <CategoryProduct/>
          <section className='pt-24'>
              <div className='container mx-auto' >
                  <h1 className='font-bold text-center  text-2xl'>All Products</h1>
                  <div className='grid grid-cols-5 sm:max-w-xl  md:grid-cols-5  lg:grid-cols-5 xl:grid-cols-5 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                      {products.map((product) => {
                          return (
                              <Product product={product} categories={categories}  key={product.id} />
                          )
                      })}
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Home