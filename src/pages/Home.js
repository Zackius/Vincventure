import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from "../components/Product"
import Hero from '../components/Hero'
// import CategoryProduct from '../components/CategoryProduct'


function Home() {
    const { products } = useContext(ProductContext)
    
  return (
      <div className='px-12'>
          <Hero />
          <section className='py-16'>
              <div className='container mx-auto'>
                  <div className='grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                      {products.map((product) => {
                          return (
                              <Product product={product} key={product.id} />
                          )
                      })}
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Home