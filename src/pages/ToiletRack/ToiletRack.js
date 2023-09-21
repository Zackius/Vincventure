import React, { useRef } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { rack, rack1, rack2, toilet1, desgin } from "./Images";

const validate = Yup.object({
  username: Yup.string().required("Your Username is required"),
  phonenumber: Yup.string().required("Phone number required"),
  delivery: Yup.string().required("Delivery location required"),
});

const StormyManualCutter = () => {
  const playerRef = useRef(null);
  return (
    <section className="py-32 content-center bg-slate-300">
      <section>
        <div className="hero container max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl pb-4 font-bold md:text-4xl text-red-600 capitalize text-center underline">
            Toliet Rack
          </h2>
          <p className="text-sm md:text-lg p-8">
            The rack designed for use over the toilet is constructed with steel
            and features an oiled bronze finish. Its steel construction, with a
            classic chrome coating, ensures that it is durable and able to
            withstand the humid conditions present in bathrooms. Additionally,
            the elegant oil-rubbed bronze finish will complement the modern
            aesthetic of your bathroom, while also complementing most of the
            existing decor in your home.
          </p>

          <div className="hero container max-w-screen-lg mx-auto   pb-10">
            <img className="mx-auto " src={rack} alt="/" />
            <p className="text-xl p-6  font-semibold">Enhance Space</p>
            <p className="text-sm md:text-lg   p-8">
              You can enhance the organization of your small bathroom without
              consuming much of your floor space or compromising your workspace.
              The Over The Toilet Rack provides a practical solution by offering
              three spacious shelves to store various bathroom essentials,
              including toiletries and paper rolls. Additionally, the elegant
              design and construction of the rack can add a touch of modernity
              and sophistication to any home.
            </p>
            <img className="mx-auto" src={rack1} alt="/" />
            <p className="text-xl p-6  font-semibold">Stainless steel blade</p>
            <p className="p-8 text-sm md:text-lg ">
              The design of the Over The Toilet Rack with its trapezoidal shape
              on the sides provides greater stability and safety. Additionally,
              the toilet storage shelf features a bottom bar that can be
              adjusted to heights of either 6.3 or 9.3 inches from the ground,
              making it suitable for different toilet sizes. To ensure even more
              stability and protection, self-tapping screws and wall anchors are
              included.
            </p>
            <img className="mx-auto" src={rack2} alt="/" />
            <p className="text-xl p-6  font-semibold">Easy to clean</p>
            <p className="text-sm md:text-lg ">
              Elevate your bathroom organization by utilizing these three open
              space-saving Over The Toilet Racks to store crucial items like
              paper rolls, towels, shampoo, makeup, magazines, candles, and
              other essentials at eye level. This setup allows for easy access
              and convenient storage, as the open shelves enable you to quickly
              locate and retrieve any item you need.
            </p>
            <img className="mx-auto" src={toilet1} alt="Toilet Rack" />
            <p className="text-xl p-6  font-semibold">Long Lasting</p>
            <img className="mx-auto" src={desgin} alt="Toilet" />
          </div>
          <p className=" text-sm md:text-lg font-bold underline">
            You need not worry about feeling lightheaded when installing the
            Over The Toilet Rack shelf since it can be easily assembled with the
            help of numbered parts and comprehensive instructions. With just a
            screwdriver as the necessary tool, the assembly process is
            straightforward and hassle-free.
          </p>
        </div>
      </section>
      <section className="py-8 hero container max-w-screen-lg mx-auto pb-10">
        <h2 className="text-2xl font-bold md:text-4xl text-red-600 capitalize text-center underline p-4">
          PRICING & DELIVERY
        </h2>
        <div className="grid grid-cols-1 gap-5 ">
          <div className="border-2 h-22 w-44 items-center border-yellow-400 mx-auto md:w-[400px] md:h-[200px] md:p-16 ">
            <h1 className="text-center text-lg p-6 font-bold  place-content-center md:text-2xl">
              KES 3499
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
            : In some cases you may be required to pay a Delivery fee before the
            Product is Dispatched.
          </p>
          <p className="p-6 text-lg font-bold">
            We use G4S Delivery Services to ensure that your order is quickly
            fast delivered and safe.{" "}
          </p>
          <h2 className="font-semibold"> Free Delivery within Nairobi CBD </h2>
          <p className="font-bold text-red-600">
            Delivery fee Ranges from 200-500 Depending on your Location
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
        onSubmit={({ username, checked, phonenumber, delivery, note }) => {
          console.log(username, checked, phonenumber, delivery, note);
          axios
            .post("https://node-email-ug9d.onrender.com/api/sendemail", {
              username: username,
              checked: checked,
              phonenumber: phonenumber,
              delivery: delivery,
              note: note,
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col hero container max-w-screen-lg mx-auto pb-10  bg-white border shadow-xl rounded-xl">
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
                <Field
                  className="appearance-none block  w-[300px]  md:w-[500px] bg-gray-200 text-black border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  name="username"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="text-xl font-bold">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <Field
                  className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-black border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="integer"
                  name="phonenumber"
                  placeholder=" +254"
                  required
                />
              </div>
              <div>
                <label className="text-xl font-bold">
                  Delivery Location <span className="text-red-600">*</span>{" "}
                </label>
                <Field
                  className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-black  border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                  name="delivery"
                  placeholder="Nairobi, Kahawa west"
                  required
                />
              </div>
              <div>
                <label className="text-xl font-bold">
                  Select Your Offer <span className="text-red-600">*</span>{" "}
                </label>
                <div role="group" aria-labelledby="checkbox-group">
                  <label className="flex gap-4 p-6">
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Toilet Rack AT KES 3,499"
                    />
                    <p className="font-bold text-red-700">
                      Toilet Rack AT KES 3,499
                    </p>
                  </label>
                </div>
              </div>
              <div>
                <label className="text-xl font-bold">Optional Note </label>
                <Field
                  className="appearance-none block w-[300px] md:w-[500px] bg-gray-200 text-black border  rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                  type="text"
                  name="note"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" content-center p-4 bg-yellow-400 rounded-xl  hover:bg-yellow-600"
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                  <Link to="/deliverynote"></Link>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default StormyManualCutter;
