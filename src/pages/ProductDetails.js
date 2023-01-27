
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SameCateoryProduct from "../components/SameCateoryProduct";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { CategoryContext } from "../contexts/CategoryContext";



const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const {categories} = useContext(CategoryContext)

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
  const filteredCategory = products.filter((catP) => {
  return catP.catrgory_id === product.catrgory_id
})

  return (
    <section className=" pt-32 bg-slate-100 px-12">
       <div className=" container mx-auto h-[400px] w-[900px] ">
        <div className="flex flex-col  float-right  bg-white border shadow-md  lg:flex-row items-center">
          <div className="flex flex-1 border-r -4 justify-center items-center ">
            <img className="max-w-[200px]" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto">
          
              {name}
            </h1>
            <p className="text-md capitalize">{name}</p>
            <div className="text-xl text-blue-400  font-medium  mb-6">
            
              $ {price}
            </div>
            <div className="mb-8 px-4">{description}</div>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black py-4 px-8 text-white rounded-2xl"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <section className="pt-16">
        <div className="container mx-auto pt-80">
          <h1 className='text-2xl hover:underline  p-16 text-center capitalize font-semibold'>More products froms {product.category} category</h1>
        <div className="grid justify-center grid-cols-4 sm:max-w-xl  md:grid-cols-5  lg:grid-cols-7 xl:grid-cols-9 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
          {filteredCategory.map((product) => {
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
      <section className="pt-16 bg-white" >
        <div className="container mx-auto">
          <h1 className="text-center font-semibold"> Product Description</h1>

          <div className="mb-8 px-4">{description.split('.').map((descript) => {
              return (
                <ul className="list-disc">
                  <li>{ descript}</li>
                </ul>
              )
            })}</div>
   </div>
        
      </section>
    </section>
  );
};

export default ProductDetails;
