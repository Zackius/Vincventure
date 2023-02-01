import React from "react";
import { Link } from "react-router-dom";
import { Kitchen } from "../img";

const Hero = () => {
  return (
    <section className=" py-24">
      <div className=" bg-yellow-300 shadow-md container mx-auto flex justify-evenly px-5 ">
        <div className="flex flex-col text-center  justify-center pt-5 ">
          <h1 className="text-lg  md:text-4xl lg:text-6xl xl:text-8xl font-bold">Vinc Ventures <span className="text-blue-300">.</span></h1>
          <h2 className=" text-sm md:text-xl lg:text-3xl xl:text-5xl  font-semibold">Sales!! Sales!! </h2>
          <p className=" text-red-500 text-sm md:text-lg  lg:text-xl xl:text-3xl">
            Shop for all Home Accessories Here 
          </p>
          <p className="p-3 text-md"> 
          <Link
            className="self-start uppercase border-b-2 border-primary "
            to={"/"}
          >
            Shop Here
          </Link>
</p>
        </div>
        <div className="scale-75">
          <img
            className="h-[50v] w-[50vh] rounded-full"
            src={Kitchen}
            alt="cookeries"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
