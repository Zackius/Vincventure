import React from 'react'
import { useParams } from "react-router-dom"
import CategoryList from '../components/CategoryProduct'
import { ProductContext } from "../contexts/ProductContext";
// import { CategoryContext } from '../contexts/CategoryContext';


const CategoryDetails = () => {
    const { category } = useParams()
    // const {categories} = useContext(CategoryContext)
    const { products } = useContext(ProductContext);
    console


    const product = products.find((item) => {
        return item.category === category
    })
    if (!product) {
        return (
          <section className="h-screen flex justify-center bg-slate-100 items-center">
       <button type="button" disabled>
      <svg class="animate-spin bg-slate-400 h-16 w-16 mr-3 ..." viewBox="0 0 20 20">
      </svg>
    Loading ......
    </button>
          </section>
        );
    }
    console.log({product})
    return (
        <div className='px-12 bg-slate-300'>
          <section className='pt-16'>
              <div className='container mx-auto' >
                  <h1 className='font-bold text-center  text-2xl'>All Products</h1>
                  <div className='grid grid-cols-5 sm:max-w-xl  md:grid-cols-5  lg:grid-cols-5 xl:grid-cols-5 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                      {product.map((catItem) => {
                          return (
                              <CategoryList catItem={catItem} key={cat.id} />
                          )
                      })}
                  </div>
              </div>
          </section>
    </div>
       
  )
}

export default CategoryDetails