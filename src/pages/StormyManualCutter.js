import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import {
  stormy1,
  stormy10,
  stormy11,
  stormy12,
  stormy2,
  stormy3,
  stormy4,
  stormy5,
  stormy6,
  stormy7,
  stormy8,
  stormy9,
} from "../img";

const StormyManualCutter = () => {
  const form = useRef(null);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setName("");
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i8p94g6",
        "template_xnrtncd",
        form.current,
        "6gxyHKMnQ4EBbedJQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-32 content-center bg-slate-300">
      <section>
        <div className="text-center">
          <h2 className="text-2xl pb-4 font-bold md:text-4xl text-red-600 capitalize text-center underline">
            Stormy Manual Vagetable Cutter
          </h2>
          <p className="text-xl md:text-2xl p-6 font-semibold">
            Reduce your preparation and cooking time with a stormy manual vegatable cutter.  <br/>it is easy to clean, durable, has multiple blades for your needs, corrosion-ressistance, and rust proof. 
          </p>
          <div className="hero container max-w-screen-lg mx-auto   pb-10">
            <img className="mx-auto " src={stormy1} alt="/" />
            <p className="text-xl p-6  font-semibold">
              Rust-proof and corrosion-resistant
            </p>
            <img className="mx-auto" src={stormy4} alt="/" />
            <p className="text-xl p-6  font-semibold">Stainless steel blade</p>
            <img className="mx-auto" src={stormy6} alt="/" />
            <p className="text-xl p-6  font-semibold">Easy to clean</p>
            <img className="mx-auto" src={stormy7} alt="/" />
            <p className="text-xl p-6  font-semibold">Long Lasting</p>
            <img className="mx-auto" src={stormy8} alt="/" />
            <p className="text-xl p-6  font-semibold">High quality blades</p>
            <img className="mx-auto" src={stormy9} alt="/" />
            <p className="text-xl p-6  font-semibold">
              Strong Cutting Force and easy to clean and use
            </p>
            <img className="mx-auto" src={stormy10} alt="/" />
          </div>
        </div>
        <div className="py-6">
          <div className="hero container max-w-screen-lg mx-auto pb-10">
            <img className="mx-auto" src={stormy2} alt="/" />
          </div>
        </div>
        <div className="py-6">
          <div className="hero container max-w-screen-lg mx-auto pb-10">
            <img className="mx-auto" src={stormy3} alt="/" />
          </div>
        </div>
      </section>
      <section className="py-8 hero container max-w-screen-lg mx-auto pb-10">
        <h2 className="text-2xl font-bold md:text-4xl text-red-600 capitalize text-center underline p-4">
          PRICING & DELIVERY
        </h2>
        <div className="grid grid-cols-1 gap-5 ">
          <div className="border-2 border-yellow-400 mx-auto md:w-[400px] md:h-[200px] md:p-16 ">
            <h1 className="text-center text-sm p-3 font-bold   place-content-center md:text-2xl  ">
              KES 1999
            </h1>
          </div>
        </div>
        <div className="py-12 text-center  content-center">
          <p>
            We deliver countrywide, We do same day delivery, Outside Nairobi
            Metropolitan products are received the next day.{" "}
            <span className="font-bold">
              PAYMENTS For products are Done After Delivery but NOTE
            </span>
            : In some case you may be required pay Delivery fee before the
            Product is Dispatched. At G4S
          </p>
          <h2>DELIVERY FREE</h2>
          <p>Delivery fee Ranges from 200-500 Depending on your Location</p>
        </div>
      </section>

      <form
        className="flex flex-col hero container max-w-screen-lg mx-auto pb-10  border shadow-xl"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mx-auto">
          <div className="justify-center p-2 pl-16">
            <p className="font-bold text-lg text-red-600">
              Enter your Details below to place your Order
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-xl font-bold">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              className="appearance-none block  w-[300px]  md:w-[500px] bg-gray-200 text-black border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="user_name"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="text-xl font-bold">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-black border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="integer"
              name="phone_number"
              placeholder=" +254"
              required
            />
          </div>
          <div>
            <label className="text-xl font-bold">
              Delivery Location <span className="text-red-600">*</span>{" "}
            </label>
            <textarea
              className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-black  border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              name="delivery_location"
              placeholder="Nairobi, Kahawa west"
              required
            />
          </div>
          <div>
            <label className="text-xl font-bold">
              Select Your Offer <span className="text-red-600">*</span>{" "}
            </label>

            <div className="flex flex-rows gap-4">
              <input
                type="checkbox"
                name="200W_lamp@2999"
                value="STORMY VAGETABLE CUTTER AT KES. 1,999"
              />
              <p>STORMY VAGETABLE CUTTER AT KES. 1,999</p>
            </div>
          </div>
          <div>
            <label className="text-xl font-bold">Optional Note </label>
            <textarea
              className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-black border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              type="text"
              name="optional_note"
            />
          </div>
          <div>
            <button className=" content-center bg-yellow-400 rounded-xl hover:bg-yellow-600">
              <input className="p-4" type="submit" value="Place Order" />
              <Link to="/deliverynote"></Link>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default StormyManualCutter;
