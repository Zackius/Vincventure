import React, { useContext } from "react";
import { useParams } from "react-router-dom"
import List from "../components/List"
import { ProductContext } from "../contexts/ProductContext";

const CategoryDetails = () => {
 
  const { id } = useParams()
  
  const { products } = useContext(ProductContext);


  const categoryProduct = products.filter((item) => {
    return item.category_id === parseInt(id)
  })

  console.log({categoryProduct})
  if (!categoryProduct) {
    return (
      <section className="h-screen flex justify-center bg-slate-100 items-center">
        <button type="button" disabled>
          <svg
            class="animate-spin bg-blue-400 h-16 w-16 mr-3 ..."
            viewBox="0 0 20 20"
          ></svg>
          Loading ......
        </button>
      </section>
    );
  }


  return (
    <div className="px-2 bg-slate-300">
      <section className="pt-32">
        <div className="container mx-auto">
          <h1 className="font-bold text-center text-2xl"></h1>
          <div className="grid grid-cols-3 sm:max-w-md  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {categoryProduct.map((catItem) => {
              return <List catItem={catItem} key={catItem.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetails;
