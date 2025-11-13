import React from "react";
import { useLoaderData } from "react-router";

const CarDetails = () => {
  const car = useLoaderData();
  // console.log(car);

  const currency = import.meta.env.VITE_CURRENCY;

  return (
    <div className="max-w-10/12 mx-auto">
      <div className="md:flex mt-30 gap-15 items-center mb-15">
        <img
          className="w-full md:w-[600px] md:h-[500px] object-center object-cover mb-8 md:mb-0 lg:mb-0 rounded-md"
          src={car.imageUrl}
          alt=""
        />
        <div className="text-[#253241] ">
          <div className="space-y-4 mb-16">
            <h2 className="font-extrabold font-primary text-xl">
              {car.carName}
            </h2>
            <p className="font-secondary">
              {" "}
              <span className="font-secondary font-semibold">
                {car.category}
              </span>
            </p>
            <p className=" text-lg font-secondary">
              <span className="font-bold">
                {currency}
                {car.rentPrice}
              </span>{" "}
              /Day
            </p>
          </div>
          <div className="space-y-4 font-secondary">
            <p>{car.providerName} </p>
            <p>{car.providerEmail}</p>
            <p className="font-secondary ">Location: {car.location}</p>
            <div className="mt-10 ">
              <button className="btn md:px-35 border-none font-primary text-white rounded-none font-semibold w-full bg-[#D01818] hover:bg-[#222222]">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <div className=" border-b-2 border-gray-300 "></div>
        <div className="mt-10 mb-15 font-secondary">
          <p>{car.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
