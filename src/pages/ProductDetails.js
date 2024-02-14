
import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import SameCateoryProduct from "../components/SameCateoryProduct";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Button from '@mui/material/Button';





const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);


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
  const filteredCategory = products.filter((cartP) => {
  return cartP.category_id === product.category_id
})

  return (
    <section className=" pt-32 bg-slate-100 ">
   <div className=" grid md:grid-cols-2">
        <div className="flex flex-col gap-4   lg:flex-row items-center">
          <div className="flex flex-1 border-r -4 justify-center items-center ">
            <img className="md:max-w-[600px] max-w-[300px]" src={image} alt="" />
          </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-bold text-center underline mb-2 max-w-[45 0px] mx-auto">
              {name}
          </h1>
          <h3 class="text-lg font-medium italic"> Product Description</h3>
          <p className="text-md mb-8 px-4">{description}</p>
          <div className="text-xl text-blue-400  font-bold  mb-6">
          <h3 class="text-lg font-medium italic"> Product Price:</h3>
              KES  {price}
            </div>
            <div className="flex gap-5 container justify-center pb-3 ">
              <div className="justify-center">
              <Button onClick={() => addToCart(product, product.id)}
                variant="contained">Add To Cart</Button>
              </div>
            </div>
         
        </div>
      </div>
      <section>
        <div className="font-bold  text-1xl text-center p-6">Product Description</div>
        <div className="text-center">
          <>{description.split(".").map((list) => {
            return(
<ol class ="list-disc">
                    <li>{list} </li>
                      </ol>
            )
            
          }) }</>
        </div>
       </section>
      <section>
        <div className="container mx-auto">
          <h1 className='text-2xl hover:underline  p-16 text-center capitalize font-semibold'>Related Products</h1>
        <div className="grid justify-center grid-cols-2 sm:max-w-xl  md:grid-cols-5  lg:grid-cols-7 xl:grid-cols-9 gap-[5px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
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
