import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const CarDetails = () => {
  const car = useLoaderData();
  const { _id } = car;

  const { user } = use(AuthContext);

  const currency = import.meta.env.VITE_CURRENCY;

  const handleBooking = () => {
    fetch(`http://localhost:3000/myBookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...car, booked_by: user.email }),
    })
      .then((res) => res.json())
      .then();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Car has been booked, thank you",
      showConfirmButton: false,
      timer: 1500,
    }).catch((err) => {
      console.log(err);
    });
  };

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
              <button
                onClick={handleBooking}
                className="btn md:px-35 border-none font-primary text-white rounded-none font-semibold w-full bg-[#D01818] hover:bg-[#222222] disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={car?.availabilityStatus === "Booked"}
              >
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
