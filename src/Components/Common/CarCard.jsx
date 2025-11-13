import React, { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const CarCard = ({ featuredCarsPromise }) => {
  const { user } = use(AuthContext);
  const featuredCars = use(featuredCarsPromise);
  console.log(featuredCars);

  const navigate = useNavigate();

  const currency = import.meta.env.VITE_CURRENCY;

  const handleViewDetails = (id) => {
    if (user) {
      navigate(`/car-details/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full ">
      <div className="md:max-w-10/12 max-w-11/12 mx-auto ">
        <div className="md:grid md:grid-cols-3 lg:grid-col-3 md:gap-1">
          {featuredCars.map((car) => (
            <div
              key={car._id}
              className="overflow-hidden hover:-translate-y-1  transition-all duration-500 cursor-pointer md:w-[380px] w-full h-fit mb-10"
            >
              {/* image div */}
              <div className="overflow-hidden relative">
                <img
                  className="  object-center object-cover transition-transform duration-500 group-hover:scale-105 md:w-[380px] w-full h-[300px] hover:brightness-50"
                  src={car?.imageUrl}
                  alt="Car Image"
                />

                {/* {car?.isAvailable && ( */}
                <p className="absolute top-4 left-4 px-3 py-1 rounded-full text-white bg-[#D01818] font-bold">
                  Available
                </p>
                {/* )} */}
              </div>
              <div className="bg-[#253241] hover:bg-[#D01818]">
                {/* Name div */}
                <div className=" ">
                  <div>
                    <h3 className="py-3 text text-center text-white font-primary font-semibold">
                      {car?.carName}
                    </h3>
                  </div>
                </div>
                {/* Details Div */}
                <div className="text-white py-2 px-4 flex justify-between font-secondary border-b border-gray-500">
                  <div>
                    <p>{car?.category}</p>
                  </div>
                  <div>
                    <p>{car?.providerName}</p>
                  </div>
                </div>
                {/* Price */}
                <div className="text-white py-3 text-center font-primary font-semibold">
                  <div>
                    <h3>
                      {currency}
                      {car?.rentPrice} /Per Day
                    </h3>
                  </div>
                </div>
              </div>
              {/* Button  */}
              <div>
                <button
                  onClick={() => handleViewDetails(car._id)}
                  className="btn border-none font-primary text-white rounded-none font-semibold w-full bg-[#D01818] hover:bg-[#222222]"
                >
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
