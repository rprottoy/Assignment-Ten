import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router";
const browseCarsPromise = fetch("http://localhost:3000/browse-cars").then(
  (res) => res.json()
);

const BrowseCars = () => {
  const { user } = use(AuthContext);
  const browseCars = use(browseCarsPromise);
  const navigate = useNavigate();

  const currency = import.meta.env.VITE_CURRENCY;

  const handleViewDetails = () => {
    if (user) {
      navigate(`/car-details/${browseCars._id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full ">
      {/* Browse Cars hero */}
      <div>
        <div
          className="relative"
          style={{
            backgroundImage: "",
          }}
        >
          <img
            className="h-[400px] w-full object-cover object-center bg-center flex items-center justify-center mt-20 brightness-50"
            src="https://images.unsplash.com/photo-1587580945215-5d4aabb2c8ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1114"
            alt=""
          />
          <div className="absolute  inset-0 text-center mt-30 md:mt-15 lg:mt:15 brightness-150">
            <h1 className="text-5xl md:text-7xl font-bold font-primary mb-2.5  text-[#253241]">
              Never <span className="text-[#7D0125]">Stop</span> <br />{" "}
              <span className="text-[#7D0125] ">Chasing</span> Dreams
            </h1>
            <h2 className="font-secondary text-4xl md:text-5xl mb-8">
              Quick.Easy.Secure
            </h2>
          </div>
        </div>
      </div>

      <div className="md:max-w-11/12 lg:max-w-11/12 max-w-11/12 mx-auto mb-15">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-primary py-15  text-center text-[#253241]">
            All Our <span className="text-[#D01818] ">Listings</span>
          </h2>
        </div>
        {/* Car Cards */}
        <div className="md:grid md:grid-cols-4 lg:grid-col-4 ">
          {browseCars.map((car) => (
            <div
              key={car._id}
              className="overflow-hidden hover:-translate-y-1  transition-all duration-500 cursor-pointer md:w-[320px] w-full h-fit mb-10"
            >
              {/* image div */}
              <div>
                <img
                  className="  object-center object-cover transition-transform duration-500 group-hover:scale-105 md:w-[320px] w-full h-[250px]"
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
                <div className="text-white py-2 px-4 flex md:flex-col lg:flex-col justify-between font-secondary border-b border-gray-500">
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
                      {car.rentPrice}
                    </h3>
                  </div>
                </div>
              </div>
              {/* Button  */}
              <div>
                <button
                  onClick={handleViewDetails}
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

export default BrowseCars;
