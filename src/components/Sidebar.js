import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose, setIsOpen } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  const handleSideBarOpen = () => {
    if (itemAmount === 0) {
      handleClose(true);
    }
  };

  handleSideBarOpen(setIsOpen);

  return (
    <section
      className={`${
        isOpen ? "right-0" : "-right-full"
      }   bg-slate-300 fixed top-0  shadow-2xl md:w-[35vw] xl:max-w-[25vw] transition-all  duration-300 z-20 px-4 lg:px-[20px]`}
    >
      <div className="flex items-center justify-between py-2 border-b-4">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag {itemAmount}
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-y-2 h-[500px] lg:h-[650px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex flex-col gap-y-3 py-4">
          <div>
            <div className=" flex w-full justify-between items-center ">
              <div className="text-black ">
                <span className="font-semibold ">Total: </span> KES{" "}
                {parseFloat(total).toFixed(2)}
              </div>
              <div
                onClick={() => clearCart()}
                className="cursor-pointer py-4 bg-red-600 text-white w-[40px] h-[40px] flex justify-center items-center text-xl"
              >
                <FiTrash2 />
              </div>
            </div>
          </div>
          <div className="">
            <Link
              onClick={handleClose}
              to="/checkoutform"
              className="bg-blue-300 rounded-xl justify-center flex p-2 items-center w-full font-medium text-black"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
