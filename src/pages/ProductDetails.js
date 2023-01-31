
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SameCateoryProduct from "../components/SameCateoryProduct";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { CategoryContext } from "../contexts/CategoryContext";
import Button from '@mui/material/Button';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";




const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { categories } = useContext(CategoryContext);
  const [items, setItems] =useState(1)


  const handleAddition = () => {
    setItems(items + 1)
  }
  const handleMinus = () => {
    if (items <= 1) {
      return 1
      
    } else {
      setItems(items -1)
}
  }
  const product = products.find((item) => {
return item.id === parseInt(id)
  });

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

  const { name,  description, image, price } = product;
  const filteredCategory = categories.filter((cartP) => {
  return cartP === products.category_id
})

  return (
    <section className=" pt-32 bg-slate-100">
       <div className=" container mx-auto ">
        <div className="flex flex-col  float-right  bg-white border shadow-md  lg:flex-row items-center">
          <div className="flex flex-1 border-r -4 justify-center items-center ">
            <img className="max-w-[300px]" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto">
          
              {name}
            </h1>
            <p className="text-md capitalize">{name}</p>
            <div className="text-xl text-blue-400  font-medium  mb-6">
              KES  {price}
            </div>
            <div className="mb-8 px-4">{description}</div>
            <div className="flex gap-5 container ">
              <div>
              <Button onClick={() => addToCart(product, product.id)}
                variant="contained">Add To Cart</Button>
              </div>
          <div className="flex flex-1 max-w-[200px] items-center h-8 border-2  font-bold">
                <div onClick={handleMinus}  className="flex-1 h-full flex justify-center items-center cursor-pointer text-2xl">
                <AiOutlineMinus className="text-black hover:text-red-400 transition duration-100 items-center" />
              </div>
                <div className=" flex justify-center items-center px-2">{items }</div>
              <div onClick={handleAddition}  className="flex-1 h-full flex justify-center items-center cursor-pointer text-2xl ">
                <AiOutlinePlus className=" text-black hover:text-blue-500 transition duration-300" />
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <section className="pt-16">
        <div className="container mx-auto pt-80">
          <h1 className='text-2xl hover:underline  p-16 text-center capitalize font-semibold'>More products froms {product.category} category</h1>
        <div className="grid justify-center grid-cols-4 sm:max-w-xl  md:grid-cols-5  lg:grid-cols-7 xl:grid-cols-9 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
          {filteredCategory.slice(0, 7).map((product) => {
            return (
              <SameCateoryProduct
                product={product}
                className="pt-44"
                key={product.id}
              />
            );
          })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
