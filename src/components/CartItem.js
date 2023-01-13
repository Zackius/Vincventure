import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const {removeCartItem, increaseAmount, decreaseAmount} =useContext(CartContext)
  return (
    <div className="flex gap-x-4 py-2 lg:px-2 border-b border-gray-200 w-full font-light text-gray-700">
      <div className="w-full min-h-[150px] flex items-center">
        <Link to={`/product/${id}`}>
          <img className="max-w-[90px]" src={image} alt="Product" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase max-w-[240px] hover:underline"
            >
              {title}
            </Link>
            <div onClick={()=>removeCartItem(id)} className="text-xl cursor-pointer">
              <RiDeleteBin5Line className="text-gray-400 hover:text-red-500 transition duration-150" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border  font-medium">
              <div onClick={()=>decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <AiOutlineMinus className="text-black hover:text-red-400 transition duration-100 items-center" />
              </div>
              <div className="-full flex justify-center items-center px-2">{amount}</div>
              <div onClick={() =>increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                <AiOutlinePlus className=" text-black hover:text-blue-500 transition duration-150" />
              </div>
            </div>
            
            <div className="flex-1 max-w-[100px] justify-around items-center  font-medium">$ {price }</div>
            <div className="flex-1 max-w-[100px] justify-around items-center  font-bold "> $ {` ${parseFloat(item.price * item.amount).toFixed(2)}`}</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
