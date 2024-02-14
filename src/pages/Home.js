import React, { useContext} from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CategoryContext } from "../contexts/CategoryContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Category from "../components/Category";

function Home() {
  const { products } = useContext(ProductContext);
  console.log(products)
  const { categories } = useContext(CategoryContext);
 


  const filteredCategories = products.filter((category) => {
    return (
      category.category ==="laptops" || category.category === "smartphones" || category.category === "fragrances" || category.category === "skincare" || category.category === "groceries" 
    )
  })

  return (
    <div className=" bg-slate-100">
      <Hero />
      <section className="">
        <div className="container mx-auto">
          <h1 className="font-bold text-center  text-2xl mb-4">Shop By Categories</h1>
          <div className=" bg-white grid grid-cols-3  sm:max-w-sm  md:grid-cols-5  lg:grid-cols-5 xl:grid-cols-5 gap-[10px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {filteredCategories.map((category) => {
              return <Category category={category.category} key={category.id}/>;
            })}
    
          </div>
          </div>
      </section>
      <section className="pt-8">
        <div className="container mx-auto ">
          <h1 className="font-medium  text-2xl pb-5"> Laptops</h1>
            <div  className=" relative  grid grid-cols-2  sm:max-w-xl  md:grid-cols-4   lg:grid-cols-7 xl:grid-cols-8 gap-[8px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
                {products
                  .filter((item) => {
                    console.log(item.category)
                    return item.category === "laptops";
                    
                  })
                  .slice(0, 8)
                  .map((product) => {
                    return <Product product={product} key={product.id} />;
                  })}
              </div>

  
        </div>
      </section>
      <section className="pt-8">
        <div className="container mx-auto ">
          <h1 className="font-medium    text-2xl pb-5">Living Room </h1>
          <div  className=" relative  grid grid-cols-2  sm:max-w-xl  md:grid-cols-4   lg:grid-cols-7 xl:grid-cols-8 gap-[8px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {products
              .filter((item) => {
                return item.category_id  === "smartphones";
              })
              .slice(0, 8)
              .map((product) => {
                return <Product product={product} key={product.id} />;
              })}
          </div>
        </div>
      </section>
      <section className="pt-8 pb-8" >
        <div className="container mx-auto ">
          <h1 className="font-medium    text-2xl pb-5">Gym & Fitness </h1>
          <div  className=" relative  grid grid-cols-2  sm:max-w-xl  md:grid-cols-4  lg:grid-cols-7 xl:grid-cols-8 gap-[8px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {products
              .filter((item) => {
                return item.category === "fragrances";
              }).slice(0, 8).map((product) => {
                return <Product  product={product} key={product.id} />;
              })}
          </div>
       
        </div>
      </section>
    </div>
  );
}

export default Home;
