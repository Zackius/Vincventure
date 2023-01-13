import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri"
import { AiOutlineMinus } from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center">
        <Link to={`/product/${id}`}>
          <img className="max-w-[90px]" src={image} alt="Product" />
        </Link>
        <div  className="w-full flex flex-col pl-4">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase max-w-[240px] hover:underline"
            >
              {title}
            </Link> 
            <div className="text-xl cursor-pointer">
              <RiDeleteBin5Line className="text-gray-400 hover:text-red-500 transition duration-150"/>
            </div>
          </div>
          <div className="bg-blue-200 flex gap-x-2 h-[36px] text-sm">
            <div >
              <div>
              <AiOutlineMinus className="text-black hover:text-red-400 transition duration-100 items-center" />
              </div>
              <div>
       {amount}
              </div>
              <div>
                <AiOutlinePlus className=" text-black hover:text-blue-500 transition duration-150" />
              </div>
             
          </div>
          <div>item Price</div>
          <div>Final Price</div>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default CartItem;
