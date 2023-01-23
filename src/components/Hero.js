import React from "react";
import { Link } from "react-router-dom";
import { Kitchen } from "../img";

const Hero = () => {
  return (
    <section className=" py-24">
      <div className=" bg-yellow-200 shadow-md container mx-auto flex justify-evenly px-5 ">
        <div className="flex flex-col text-center  justify-center ">
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Vinc Ventures.</h1>
          <h2 className=" text-md  font-semibold">Sales!! Sales!! </h2>
          <p className="">
            Shop for all Home Accessories Here 
          </p>
          <p> 
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
