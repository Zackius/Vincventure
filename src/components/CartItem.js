import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, name, image, price, amount } = item;
  const {removeCartItem, increaseAmount, decreaseAmount} =useContext(CartContext)
  return (
    <div className="flex gap-x-0.5  lg:px-2 border-b border-gray-200 w-full font-light text-gray-700">
      <div className="w-full min-h-[150px] flex items-center">
        <Link to={`/product/${id}`}>
          <img className="max-w-[90px]" src={image} alt="Product" />
        </Link>
        <div className="w-full flex flex-col p-2">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm font-bold text-black  max-w-[240px] hover:underline"
            >
              {name}
            </Link>
            <div onClick={()=>removeCartItem(id)} className="text-xl cursor-pointer">
              <RiDeleteBin5Line className="text-black hover:text-red-500 transition duration-150" />
            </div>
          </div>
          <div className=" flex  h-[30px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border  font-medium">
              <div onClick={()=>decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <AiOutlineMinus className="text-black hover:text-red-400 transition duration-100 items-center" />
              </div>
              <div className=" flex justify-center items-center px-2">{amount}</div>
              <div onClick={() =>increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                <AiOutlinePlus className=" text-black hover:text-blue-500 transition duration-150" />
              </div>
            </div>
            <div className=" flex flex-1 max-w-[100px]  items-center  font-sm">KES {price }</div>
            <div className=" flex flex-1 max-w-[120px]  items-center  font-bold "> KES {` ${parseFloat(item.price * item.amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
