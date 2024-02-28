import React, { useContext} from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Category from "../components/Category";

function Home() {
  const { products } = useContext(ProductContext);

  
  console.log(products)
  // // const { categories } = useContext(CategoryContext);
  // const filteredLaptops = products.filter((product) => product.category === "laptops");
  // const limitedLaptops = filteredLaptops.slice(0, 4);
  // const filteredSmartphone = products.filter((product) => product.category === "smartphones");
  // const limitedSmartPhones = filteredSmartphone.slice(0, 4);
  // const filteredFregences = products.filter((product) => product.category === "fragrances");
  // const limitedFragrances = filteredFregences.slice(0, 4);

  const categories= [
     {
        id: 1,
        name: 'laptops'
    },
  {
        id: 2,
        name: 'smartphones'
    },
     {
        id: 3,
        name: 'fragrances'
    },
     {
        id: 4,
        name: 'skincare'
    },
     {
        id: 5,
        name: 'groceries'
    }
  ]
 


  // const filteredCategories = categories.filter((category) => {
  //   return (
  //     category.name === "laptops" || category.name === "smartphones" || category.name === "fragrances" || category.name === "skincare" || category.name === "groceries" 
  //   )
  // })

  return (
    <div className=" bg-slate-100">
      <Hero />
      <section className="">
        <div className="container mx-auto">
          <h1 className="font-bold text-center  text-2xl mb-4">Shop By Categories</h1>
          <div className=" bg-white grid grid-cols-3  sm:max-w-sm  md:grid-cols-5  lg:grid-cols-5 xl:grid-cols-5 gap-[10px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {categories.map((category) => {
              return <Category category={category.name} key={category.id}/>;
            })}
    
          </div>
          </div>
      </section>
      {/* <section className="pt-8">
        <div className="container mx-auto ">
          <h1 className="font-medium  text-2xl pb-5"> Laptops</h1>
            <div  className=" relative  grid grid-cols-2  sm:max-w-xl  md:grid-cols-4   lg:grid-cols-7 xl:grid-cols-8 gap-[8px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {limitedLaptops.map((product) => (
        <Product key={product.id} product={product} />
      ))}
              </div>

  
        </div>
      </section>
      <section className="pt-8">
        <div className="container mx-auto ">
          <h1 className="font-medium    text-2xl pb-5">Smartphones </h1>
          <div  className=" relative  grid grid-cols-2  sm:max-w-xl  md:grid-cols-4   lg:grid-cols-7 xl:grid-cols-8 gap-[8px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
          {limitedSmartPhones.map((product) => (
        <Product key={product.id} product={product} />
      ))}
          </div>
        </div>
      </section> */}
      <section className="pt-8 pb-8" >
        <div className="container mx-auto ">
          <h1 className="font-medium    text-2xl pb-5"> **** </h1>
          <div  className=" relative  grid grid-cols-2  sm:max-w-xl  md:grid-cols-4  lg:grid-cols-7 xl:grid-cols-8 gap-[8px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {products.map((product) => {
              return  (<Product key={product.id} product={product} /> )
            })}
          </div>
       
        </div>
      </section>
    </div>
  );
}

export default Home;
