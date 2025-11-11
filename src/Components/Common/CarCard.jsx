import React, { use } from "react";

const CarCard = ({ featuredCarsPromise }) => {
  const featuredCars = use(featuredCarsPromise);

  const currency = import.meta.env.VITE_CURRENCY;

  return (
    <div className="w-full ">
      <div className="md:max-w-10/12 max-w-11/12 mx-auto ">
        <div className="md:grid md:grid-cols-3 lg:grid-col-3 md:gap-1">
          {featuredCars.map((car) => (
            <div className="overflow-hidden hover:-translate-y-1  transition-all duration-500 cursor-pointer md:w-[380px] w-full h-fit mb-10">
              {/* image div */}
              <div>
                <img
                  className="  object-center object-cover transition-transform duration-500 group-hover:scale-105 md:w-[380px] w-full h-[300px]"
                  src={car.imageUrl}
                  alt=""
                />
              </div>
              <div className="bg-[#253241] hover:bg-[#D01818]">
                {/* Name div */}
                <div className=" ">
                  <div>
                    <h3 className="py-3 text text-center text-white font-primary font-semibold">
                      {car.carName}
                    </h3>
                  </div>
                </div>
                {/* Details Div */}
                <div className="text-white py-2 px-4 flex justify-between font-secondary border-b border-gray-500">
                  <div>
                    <p>{car.category}</p>
                  </div>
                  <div>
                    <p>{car.providerName}</p>
                  </div>
                </div>
                {/* Price */}
                <div className="text-white py-3 text-center font-primary font-semibold">
                  <div>
                    <h3>
                      {currency}
                      {car.rentPrice} /Per Day
                    </h3>
                  </div>
                </div>
              </div>
              {/* Button  */}
              <div>
                <button className="btn border-none font-primary text-white rounded-none font-semibold w-full bg-[#D01818] hover:bg-[#222222]">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
