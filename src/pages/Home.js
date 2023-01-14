import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from "../components/Product"
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'


function Home() {
    const { products } = useContext(ProductContext)

    const filteredProducts = products.filter((item) => {
        return (
            item.category ==="men's clothing" || item.category === "women's clothing"
        )
    })
 
  return (
      <div className='px-12'>
          <Hero />
          <CategoryList/>
          <section className='py-16'>
              <div className='container mx-auto'>
                  <div className='grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                      {filteredProducts.map((product) => {
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