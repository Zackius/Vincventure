import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { image1, image2, image3, image4, image5, image6, image7 } from "../img";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

const FoldableKitchenRack = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await emailjs.sendForm(
        "service_j3qd6md",
        "template_qqmg52e",
        form.current,
        "6gxyHKMnQ4EBbedJQ"
      );
      if (resp.status === 200) {
        console.log("Success");
        navigate("/deliverynote");
        // Handle success.
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the error
    }
    setLoading(false);
  };

  return (
    <section className="py-32 content-center">
      <section>
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-4xl text-red-600 capitalize text-center underline">
            Foldable Kitchen Storage Rack
          </h2>
          <p className="text-xl md:text-2xl font-semibold p-8">
            Kitchen Tableware Drain Rack Countertop Multi-layer for Dishes
            Storage Rack in the Kitchen. <br />
            Free Installation Foldable Kitchen Storage Rack Kitchenware Storage
            Shelf 2/ 3-layer Dish Plate Drain Organizers Carbon Steel{" "}
          </p>
          <div className="hero container max-w-screen-lg mx-auto pb-10">
            <img className="mx-auto" src={image3} alt="/" />
          </div>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-red-600 capitalize p-3 underline ">
              Features
            </h2>
            <div>
              <div className=" bg-gray-700 hero container max-w-screen-lg mx-auto pb-10 p-4">
                <h2 className="text-xl md:text-2xl text-white">
                  1. Wash drain save time and worry
                </h2>
                <ul className="p-4">
                  <li className="text-xl md:text-2xl text-white">
                    Follows ergonomic design to give you a handy storage
                    experience
                  </li>
                </ul>
              </div>
              <div className="hero container max-w-screen-lg mx-auto pb-10  pt-6">
                <img className="mx-auto" src={image2} alt="/" />
              </div>
            </div>
            <div>
              <div className=" bg-gray-700 hero container max-w-screen-lg mx-auto pb-10 p-4">
                <h2 className="text-xl md:text-2xl text-white">
                  2. Use space skillfully
                </h2>
                <ul className="p-4">
                  <li className="text-xl md:text-2xl text-white">
                    Its in a moderate shape hence does not occupy too much
                    space.
                  </li>
                </ul>
              </div>
              <div className="hero container max-w-screen-lg mx-auto pb-10  pt-6">
                <img className="mx-auto" src={image3} alt="/" />
              </div>
            </div>
            <div>
              <div className=" bg-gray-700 hero container max-w-screen-lg mx-auto pb-10 p-4">
                <h2 className="text-xl md:text-2xl text-white">
                  3. Double Protection
                </h2>
                <ul className="p-4">
                  <li className="text-xl md:text-2xl text-white">
                    No fading,no paint peeling and it is not easy to rust.
                  </li>
                </ul>
              </div>
              <div className="hero container max-w-screen-lg mx-auto pb-10  pt-6">
                <img className="mx-auto" src={image1} alt="/" />
              </div>
            </div>
            <div>
              <div className=" bg-gray-700 hero container max-w-screen-lg mx-auto pb-10 p-4">
                <h2 className="text-xl md:text-2xl text-white">
                  4. Strong load bearing and stable without titling forward
                </h2>
                <ul className="p-4">
                  <li className="text-xl md:text-2xl text-white">
                    It is made up of strong base that can support heavy weight
                    utensils.
                  </li>
                </ul>
              </div>
              <div className="hero container max-w-screen-lg mx-auto pb-10  pt-6">
                <img className="mx-auto" src={image6} alt="/" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-red-600 capitalize p-3 underline ">
              Product Description{" "}
            </h2>
            <div>
              {/* <div className=' bg-gray-700 hero container max-w-screen-lg mx-auto pb-10 p-4'>
              <h2 className='text-xl md:text-2xl text-white' >1.  Wash drain save time and worry</h2>
              <ul className='p-4'>
                <li   className='text-xl md:text-2xl text-white'>
                Follows ergonomic design to give you a handy storage experience
                </li>
              </ul>
        
            </div> */}
              <div className="hero container max-w-screen-lg mx-auto pb-10  pt-6">
                <img className="mx-auto" src={image4} alt="/" />
              </div>
            </div>
            <div className="hero container max-w-screen-lg mx-auto pb-10  pt-6">
              <img className="mx-auto" src={image5} alt="/" />
            </div>
            <div className="hero container max-w-screen-lg mx-auto pb-10  pt-6">
              <img className="mx-auto" src={image7} alt="/" />
            </div>
          </div>
          .
        </div>
      </section>
      <section className="py-8 hero container max-w-screen-lg mx-auto pb-10">
        <h2 className="text-2xl font-bold md:text-4xl text-red-600 capitalize text-center underline p-4">
          PRICING & DELIVERY
        </h2>
        <div className="grid grid-cols-2 gap-5 ">
          <div className="border-2 border-yellow-400 mx-auto md:w-[400px] md:h-[200px] md:p-12 ">
            <h1 className="text-center text-sm p-1 font-semibold place-content-center md:text-2xl  ">
              Foldable Kitchen Storage Rack 2 Layers <br />{" "}
              <span className="font-bold">Kshs 4500 </span>{" "}
            </h1>
          </div>
          <div className="border-2 border-red-600 mx-auto md:w-[400px] md:h-[200px] md:p-12">
            <p className="text-center text-sm font-semibold  md:text-2xl  md:font-bold ">
              Foldable Kitchen Storage Rack 3 Layers <br />{" "}
              <span className="font-bold">Kshs 5500 </span>
            </p>
          </div>
        </div>
        <div className="py-12 text-center  content-center">
          <p className="text-sm md:text-lg">
            We deliver countrywide, We do same day delivery, Outside Nairobi
            Metropolitan products are received the next day.{" "}
            <span className="font-bold">
              PAYMENTS For products are Done After Delivery but NOTE
            </span>
            : In some case you may be required pay Delivery fee before the
            Product is Dispatched. At{" "}
            <span className="text-red-600 font-bold text-lg">G4S</span>
          </p>
          <h2 className="font-bold p-4 text-xl">DELIVERY FREE</h2>
          <p className="text-lg">
            Delivery fee Ranges from{" "}
            <span className="font-bold text-lg">200 - 500</span> Depending on
            your Location
          </p>
        </div>
      </section>
      <Formik
        initialValues={{
          username: "",
          checked: [],
          phonenumber: "",
          delivery: "",
          note: "",
        }}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form
            className="flex flex-col hero container max-w-screen-lg mx-auto pb-10  border shadow-xl"
            ref={form}
            onSubmit={sendEmail}
            loadingText={"Sending Order"}
          >
            <div className="mx-auto">
              <div className="justify-center p-2 pl-16">
                <p className="font-bold text-lg text-red-600">
                  Enter your Details below to place your Order
                </p>
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-bold">
                  Full Names <span className="text-red-600">*</span>
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
                    name="2layers"
                    value="KITCHEN  RACK 2 LAYERS AT KES. 4,500"
                  />
                  <p> KITCHEN RACK 2 LAYERS AT KES. 4,500</p>
                </div>
                <div className="flex flex-rows gap-4">
                  <input
                    type="checkbox"
                    name="3layers"
                    value="KITCHEN RACK 3 LAYERS AT KES. 5,500"
                  />
                  <p>KITCHEN RACK 3 LAYERS AT KES. 5,500</p>
                </div>
              </div>
              <div>
                <label className="text-xl font-bold">Optional Note </label>
                <textarea
                  className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-gray-500 border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                  type="text"
                  name="optional"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className=" content-center p-4 font-bold bg-yellow-400 rounded-xl  hover:bg-yellow-600"
                >
                  {loading ? "Submitting ..." : "Submit"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default FoldableKitchenRack;
