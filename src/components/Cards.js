import React from "react";

const Cards = () => {
  return (
    <div>
      <section>
        <div className="border-[#e4e4e4] rounded-xl shadow-2xl  mb-2 relative overflow-hidden group transition ">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[100px]  mx-auto flex justify-center items-center">
              {/* <Link to={`/list/${id}`}>
                <img
                  className="max-h-[100px]  pt-2 object-contain group-hover:scale-110 transition duration-300"
                  src={image}
                  alt="productImage"
                />
              </Link> */}
            </div>
            {/* <p className="text-sm">{name}</p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
