import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full  bg-gray-200 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[25vw] transition-all  duration-300 z-20 px-4 lg:px-[25px]`}
    >
      <div className="flex items-center justify-between py-6 border-b-4">
        <div className="uppercase text-sm font-semibold">Shopping Bag {cart.length }</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="bg-pink-300  flex w-full justify-between items-center ">
        <div>
          <span>Total:</span>$ 
        </div>
        <div onClick={()=> clearCart()} className="cursor-pointer py-4 bg-red-600 text-white w-[40px] h-[40px] flex justify-center items-center text-xl">
<FiTrash2 />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
