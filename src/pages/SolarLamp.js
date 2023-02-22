import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Solar2 } from "../img";
import { Panel } from "../img";
import { Solar } from "../img";

const SolarLamp = () => {
  const form = useRef();

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
    <section className="py-32 content-center">
      <section>
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-4xl text-red-600 capitalize text-center underline">
            Solar street Lamp
          </h2>
          <p className="text-xl font-semibold">
            200w Solar LED Street lamp, All weather resistance, auto switch off
            during the day and on at night. Long lasting solar lamp.{" "}
          </p>
          <div className="hero container max-w-screen-lg mx-auto pb-10">
            <img className="mx-auto" src={Solar2} alt="/" />
          </div>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-red-600 capitalize p-3 underline ">
              Lamp Specification
            </h2>
            <ul className="font-semibold text-xl">
              <li>Battery type 8000MAH</li>
              <li>6-8 Hours Charging time.</li>
              <li>200w solar power.</li>
              <li>Water proof ip 65</li>
              <li>Solar Panels 6v, 8w</li>
              <li>Lighting time 20- 40 Hrs</li>
              <li>Use a height of 3.5-4M</li>
            </ul>
          </div>
        </div>
        <div className="py-6">
          <h2 className="text-2xl font-bold md:text-4xl text-red-600 capitalize text-center underline">
            Bright LEDS
          </h2>
          <div className="hero container max-w-screen-lg mx-auto pb-10">
            <img className="mx-auto" src={Solar} alt="/" />
          </div>
          <p className="text-lg font-semibold text-center">
            Super bright LEDS up to 200W
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-2xl font-bold md:text-4xl text-red-600 capitalize text-center underline">
            SOLAR PANEL
          </h2>
          <div className="hero container max-w-screen-lg mx-auto pb-10">
            <img className="mx-auto" src={Panel} alt="/" />
          </div>
          <p className="text-lg font-semibold text-center">
            Solar Panels 6v, 8w
          </p>
        </div>
      </section>
      <section className="py-8 hero container max-w-screen-lg mx-auto pb-10">
        <h2 className="text-2xl font-bold md:text-4xl text-red-600 capitalize text-center underline p-4">
          PRICING & DELIVERY
        </h2>
        <div className="grid grid-cols-2 gap-5 ">
          <div className="border-2 border-yellow-400 mx-auto md:w-[400px] md:h-[200px] md:p-20 ">
            <h1 className="text-center text-sm p-3 font-bold  line-through place-content-center md:text-2xl  ">
              Normal Price KES 4500
            </h1>
          </div>
          <div className="border-2 border-red-600 mx-auto md:w-[400px] md:h-[200px] md:p-12">
            <p className="text-center text-sm font-semibold  md:text-2xl  md:font-bold ">
              OFFER PRICE KES 2,999
              <br />
              OFFER PRICE 2pcs KES 5500
            </p>
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
          <div className="flex flex-col">
            <label className="text-xl font-bold">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              className="appearance-none block  w-[300px]  md:w-[500px] bg-gray-200 text-gray-500 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
              className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-gray-500 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
              className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-gray-500 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
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
                name="1piece_solar_lamp"
                value="1 PC AT KES. 2,999"
              />
              <p>1 PC AT KES. 2,999</p>
            </div>
            <div className="flex flex-rows gap-4">
              <input
                type="checkbox"
                name="2pieces_solar_lamp"
                value="2PC AT KES. 5,500"
              />
              <p>2PC AT KES. 5,500</p>
            </div>
          </div>
          <div>
            <label className="text-xl font-bold">Optional Note </label>
            <textarea
              className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-gray-500 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              type="text"
              name="optional_note"
            />
          </div>
          <div>
            <button className=" content-center bg-yellow-400 rounded-xl hover:bg-yellow-600">
              <input className="p-4" type="submit" value="Place Order" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default SolarLamp;
