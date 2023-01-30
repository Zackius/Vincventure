import React, {useContext} from 'react'
import { CartContext } from "../contexts/CartContext";
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const Checkout = () => {
  const { cart, clearCart, total, itemAmount, removeCartItem, increaseAmount, decreaseAmount } = useContext(CartContext);
  const data = cart.map((item) => {
    return item
  })

 
  return (
    <div className='pt-32 px-12 flex-cols '>
      <form class="w-full max-w-lg border-solid border-1 ">
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-company-name">
     Company name(optional)
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"/>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grd-country">
        Country/Region 
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Kenya"/>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Street Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="House number/Street name"/>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
    Apartment, Suites, unit, etc. (optional)
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jacaranda "/>
    </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-company-name">
    Town/City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=''/>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grd-country">
     State/County
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Kiambu"/>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-company-name">
Postcode /ZIP *
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-postcode" type="text"/>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grd-country">
       Phone Number 
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-phone-number" type="integer" placeholder="+254"/>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-company-name">
Email 
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email"/>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grd-country">
 Additonal Information 
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text-area" placeholder="Pleace add any other inforamtion that will help us on delivering your product on time.  "/>
          </div>
        </div>
        <section>
<div className="flex gap-x-0.5  lg:px-2 border-b border-gray-200 w-full font-light text-gray-700">
      <div className="w-full min-h-[150px] flex items-center">
        <Link to={`/product/${data.id}`}>
          <img className="max-w-[90px]" src={data.image} alt="Product" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${data.id}`}
              className="text-sm uppercase max-w-[240px] hover:underline"
            >
              {data.title}
            </Link>
            <div onClick={()=>removeCartItem(data.id)} className="text-xl cursor-pointer">
              <RiDeleteBin5Line className="text-gray-400 hover:text-red-500 transition duration-150" />
            </div>
          </div>
          <div className=" flex  h-[30px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border  font-medium">
              <div onClick={()=>decreaseAmount(data.id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <AiOutlineMinus className="text-black hover:text-red-400 transition duration-100 items-center" />
              </div>
              <div className=" flex justify-center items-center px-2">{data.amount}</div>
              <div onClick={() =>increaseAmount(data.id)} className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                <AiOutlinePlus className=" text-black hover:text-blue-500 transition duration-150" />
              </div>
            </div>
            <div className=" flex flex-1 max-w-[100px]  items-center  font-sm">KES {data.price }</div>
            <div className=" flex flex-1 max-w-[120px]  items-center  font-bold "> KES {` ${parseFloat(data.price * data.amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
      </section>
      </form>
      

    </div>
  )
}

export default Checkout