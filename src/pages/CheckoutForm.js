import React, {useContext} from 'react'
import { CartContext } from "../contexts/CartContext";


const CheckoutForm = () => {
  const { cart, total } = useContext(CartContext);


 
  return (
    <section className='pt-[140px] px-6 md:px-12 mb-12 '>
      <form>
        <div className=' flex flex-col md:flex-row  gap-12 '>
        <section className= 'shadow-lg flex-1  '>
        <div className='bg-yellow-400 p-4 font-bold m-4 rounded-xl'><h4 className='text-center text-xl bg'>Billing Details </h4></div>
  <div class="flex  mb-4">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" required/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required/>
    </div>
        </div>
        <div class="flex flex-wrap  mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-company-name">
     Company name(optional)
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"/>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grd-country">
        Country/Region 
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Kenya" required/>
          </div>
        </div>
        <div class="flex flex-wrap  mb-4">
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
        <div class="flex flex-wrap  mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-company-name">
    Town/City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder='Kiambu' required/>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grd-country">
     State/County
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Kiambu" required/>
          </div>
        </div>
        <div class="flex flex-wrap  mb-4">
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
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-phone-number" type="integer" placeholder="+254" required/>
          </div>
        </div>

       
        <div class="w-full md:w-1/8 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-company-name">
Email 
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder='email' />
        </div>
        <div class="w-full md:w-1/8 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grd-country">
 Additonal Information 
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text-area" placeholder="Pleace add any other inforamtion that will help us on delivering your product on time.  "/>
          </div>
   
        </section>
        {/* Cart products */}
    

      <section className=' px-8 shadow-lg flex-1 ' >
        <div className='bg-yellow-400 m-4 p-4 font-bold rounded-xl'><h4 className='text-center text-xl bg'>Your Order</h4></div>
        
        <div className='flex flex-row  justify-between  underline mb-4' >
          <div className='font-bold '>Products</div>
          <div className='font-bold '>Sub Total (KES)</div>
       

        </div>
        {
          cart.map((item) => {
            return (
              <div className="flex gap-x-2 px-8  lg:px-2 border-b border-gray-400 justify-between  container mx-auto font-sm text-black">  
          <div className="flex mb-2">
                      <ol class ="list-disc">
                    <li>{item.name} ( {item.price}) * {item.amount} </li>
                      </ol>
                    </div>
                <div className='font-semibold'> {` ${parseFloat(item.price * item.amount).toFixed(2)}`}</div>
          </div>               
            )
          })
        }
        <div className='flex flex-rows justify-between m-5'>
          <h1 class=" font-bold text-xl">Total</h1>
          <h3 className='font-bold text-2xl'> KES {total }</h3>
          </div>
          <div className='m-6'>
          <div>
            <h5 class="font-bold text-lg text-center p-3">Cash on Delivery</h5>
            <div className='bg-gray-200 p-4'>
              <p>Pay with Cash or M-pesa upon delivery</p>
            </div>
            <div className='p-4 '>
              <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            </div>
            <div className='flex gap-2 p-4'>
              <input type="checkbox" required /> <p>I have read and agree to the website terms and conditions *</p>
            </div>
            </div>
          </div>

        <div class="text-center p-4 ">
       <button className='bg-yellow-400 w-[20vh] md:w-[40vh] p-4 rounded-2xl font-bold  text-xl'>Place Order</button>
              </div>
          </section> 
          </div>
      </form>
    </section>

  )
}

export default CheckoutForm