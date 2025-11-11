import React from "react";
import { useLoaderData } from "react-router";

const CarDetails = () => {
  const car = useLoaderData();
  console.log(car);

  const currency = import.meta.env.VITE_CURRENCY;

  return (
    <div className="max-w-10/12 mx-auto">
      <div className="md:flex mt-30 gap-15 items-center mb-15">
        <img
          className="w-full md:w-[600px] h-[500px] object-center object-cover"
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
          alt=""
        />
        <div className="text-[#253241] ">
          <div className="space-y-4 mb-16">
            <h2 className="font-extrabold font-primary text-xl">BMW M5</h2>
            <p className="font-secondary">Category- Sedan</p>
            <p className="font-bold text-lg font-secondary">
              {currency}75 /Per Day
            </p>
            <p className="font-secondary ">Location</p>
          </div>
          <div className="space-y-4 font-secondary">
            <p>Provider Name: </p>
            <p>Provider Email:</p>
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <div className=" border-b-2 border-gray-300 "></div>
        <div className="mt-10 mb-15 font-secondary">
          <p>
            Plug-in hybrid hatchback seating five, ~640 mi combined range
            (electric + gas), 0-60 mph ~6.6s, excellent fuel economy, versatile
            cargo and green credentials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
