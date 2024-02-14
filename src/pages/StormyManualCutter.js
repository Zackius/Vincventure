import React from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import {
  stormy1,
  stormy10,
  stormy2,
  stormy3,
  stormy4,
  stormy6,
  stormy7,
  stormy8,
  stormy9,
} from "../img";
import axios from "axios";

//

const StormyManualCutter = () => {
  // const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="py-32 content-center bg-slate-300">
      <section>
        <div className="text-center">
          <h2 className="text-2xl pb-4 font-bold md:text-4xl text-red-600 capitalize text-center underline">
            Stormy Manual Vagetable Cutter
          </h2>
          <p className="text-xl md:text-2xl p-6 font-semibold">
            Reduce your preparation and cooking time with a stormy manual
            vegatable cutter. <br />
            it is easy to clean, durable, has multiple blades for your needs,
            corrosion-ressistance, and rust proof.
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
              KES 2,199
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
          <h2 className="font-semibold"> Free Delivery within Nairobi CBD</h2>
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
          setIsSubmitting(true);
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
          setTimeout(() => {
            setIsSubmitting(false);
          }, 1000);
        }}
        loadingText={"Submitting Order"}
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
                      value="STORMY VAGETABLE CUTTER AT KES. 2,199"
                    />
                    <p className="font-bold text-red-700">
                      STORMY VAGETABLE CUTTER AT KES. 2,199
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
                  {isSubmitting ? "Submitting ..." : "Submit"}
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
