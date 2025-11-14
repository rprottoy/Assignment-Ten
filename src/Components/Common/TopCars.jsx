import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";

const TopCars = ({ topCarsPromise }) => {
  const { user } = use(AuthContext);
  const topCars = use(topCarsPromise);

  const navigate = useNavigate();

  // const currency = import.meta.env.VITE_CURRENCY;

  const handleViewDetails = (id) => {
    if (user) {
      navigate(`/car-details/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="w-full bg-[#253241] mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-primary pb-15 pt-15  text-center text-white">
            Top Rated <span className="text-[#D01818] ">Vehicles</span>
          </h2>
        </div>
        {/* Car Card */}
        <div className="md:w-full max-w-11/12 mx-auto md:mx-2 ">
          <div className="md:grid md:grid-cols-5 lg:grid-col-5 md:gap-30 ">
            {topCars.map((car) => (
              <div
                key={car._id}
                className="overflow-hidden  cursor-pointer md:w-[285px] w-full h-fit mb-10"
              >
                {/* image div */}
                <div
                  onClick={() => handleViewDetails(car._id)}
                  className="overflow-hidden relative"
                >
                  <img
                    className="  object-center object-cover  md:w-[380px] w-full h-[290px] hover:brightness-50"
                    src={car?.imageUrl}
                    alt="Car Image"
                  />

                  {car?.availabilityStatus === "Available" ? (
                    <p className="absolute top-4 left-4 px-3 py-1 rounded-full text-white bg-[#003566] font-bold font-secondary">
                      Available
                    </p>
                  ) : (
                    <p className="absolute top-4 left-4 px-3 py-1 rounded-full text-white bg-[#D01818] font-bold font-secondary">
                      Booked
                    </p>
                  )}
                </div>
                <div className=" ">
                  <div>
                    <h3 className="py-3 text text-center text-white font-primary font-semibold">
                      {car?.carName}
                    </h3>
                  </div>
                </div>
                {/* Details Div */}
                {/* Price */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCars;
