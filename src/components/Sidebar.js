import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full  bg-gray-200 fixed top-0 h-full  shadow-2xl md:w-[35vw] xl:max-w-[25vw] transition-all  duration-300 z-20 px-4 lg:px-[20px]`}
    >
      <div className="flex items-center justify-between py-2 border-b-4">
        <div className="uppercase text-sm font-semibold">Shopping Bag {itemAmount }</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
      <div className=" flex w-full justify-between items-center ">
        <div>
            <span className="font-bold">Total: </span> $ {parseFloat(total).toFixed(2)}
        </div>
        <div onClick={()=> clearCart()} className="cursor-pointer py-4 bg-red-600 text-white w-[40px] h-[40px] flex justify-center items-center text-xl">
<FiTrash2 />
        </div>
        </div>
      </div>
      <div className="flex">
        <Link className="bg-white justify-center flex p-4 items-center w-full font-medium " to={"/"}>View Cart</Link>
        <Link className="bg-black justify-center flex p-4 items-center w-full font-medium text-white">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
