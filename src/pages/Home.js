import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { CategoryContext } from '../contexts/CategoryContext'
import Product from "../components/Product"
import Hero from '../components/Hero'
// import CategoryProduct from '../components/CategoryProduct'


function Home() {
    const { products } = useContext(ProductContext)
    const {categories} =useContext(CategoryContext)
    
  return (
      <div className='px-12 bg-slate-100'>
          <Hero />
          <section className='pt-44'>
              <div className='container mx-auto'>
                  <div className='grid grid-cols-2 sm:max-w-xl  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                      {products.map((product) => {
                          return (
                              <Product product={product} categories={categories} className="pt-44" key={product.id} />
                          )
                      })}
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Home