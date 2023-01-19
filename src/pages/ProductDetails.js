import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SameCateoryProduct from "../components/SameCateoryProduct";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";


const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
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
  const { title, price, category, description, image } = product;

  const filteredCategory = products.filter((category) => {
    return category.category === product.category
  })
  return (
    <section className=" pt-32 bg-slate-100">
      <div className=" md:container md:mx-auto ">
        <div className="flex flex-col  float-right  bg-white border shadow-md  lg:flex-row items-center">
          <div className="flex flex-1 border-r -4 justify-center items-center ">
            <img className="max-w-[300px]" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto">
          
              {title}
            </h1>
            <p className="text-md capitalize">{category}</p>
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
      <section className="pt-12">
        <div className="container mx-auto pt-80">
          <h1 className='text-2xl hover:underline  p-4 text-center capitalize font-semibold'>More products froms {product.category} category</h1>
        <div className="grid justify-center grid-cols-2 sm:max-w-xl  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-[80px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
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
    </section>
  );
};

export default ProductDetails;
