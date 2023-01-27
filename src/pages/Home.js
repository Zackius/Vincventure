import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CategoryContext } from "../contexts/CategoryContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Category from "../components/Category";


function Home() {
  const { products } = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);

 
  return (
    <div className=" bg-slate-200 px-4">
      <Hero />
      <section className="">
        <div className="container mx-auto bg-white">
          <h1 className="font-bold text-center  text-xl">Shop By Categories</h1>
          <div className="grid grid-cols-4  sm:max-w-xl  md:grid-cols-6  lg:grid-cols-6 xl:grid-cols-8 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {categories.map((category) => {
              return <Category category={category} key={category.id} />;
            })}
          </div>
        </div>
      </section>
      <section className="pt-8">
        <div className="container mx-auto ">
          <h1 className="font-bold text-2xl"> Kitchen</h1>
          <div className=" grid grid-cols-3  sm:max-w-xl  md:grid-cols-5  lg:grid-cols-7 xl:grid-cols-8 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {products.filter((item) => {
              return item.category_id ===parseInt(1)
            }).slice(0, 8).map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <section className="pt-8">
        <div className="container mx-auto ">
          <h1 className="font-bold   text-2xl">Living Room </h1>
          <div className="grid grid-cols-3  sm:max-w-xl  md:grid-cols-5  lg:grid-cols-7 xl:grid-cols-8 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {products.filter((item) => {
              return  item.category_id === parseInt(5)
            }).slice(0, 8).map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <section className="pt-8">
        <div className="container mx-auto ">
          <h1 className="font-bold   text-2xl">Gym & Fitness </h1>
          <div className=" grid grid-cols-3  sm:max-w-xl  md:grid-cols-5  lg:grid-cols-7 xl:grid-cols-8 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {products.filter((item) => {
              return item.category_id === parseInt(11)
            }).slice(0, 8).map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
