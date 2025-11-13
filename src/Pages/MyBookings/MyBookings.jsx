import React, { use, useEffect, useState } from "react";

import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);
  const currency = import.meta.env.VITE_CURRENCY;

  // fetch
  useEffect(() => {
    fetch(`http://localhost:3000/my-bookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-30 px-6 md:px-16 lg:px-24  text-sm md:max-w-10/12 mx-auto">
      <h1 className="text-3xl font-semibold font-primary text-[#253241] mb-2">
        My Bookings
      </h1>
      <p className="font-secondary text-[#253241]">
        View and manage your all car bookings
      </p>

      <div>
        {bookings?.map((booking, index) => (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12 mb-10 items-center">
            {/* Car image + info */}
            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  className="w-full h-auto aspect-video object-cover"
                  src={booking.imageUrl}
                  alt="Car image"
                />
              </div>
              <p className="text-lg font-medium mt-2 font-primary">
                {booking.carName}
              </p>

              <p className="text-gray-500 font-secondary">
                {booking.createdAt} | {booking.category} | {booking.location}
              </p>
            </div>

            {/* Booking Info */}
            <div className="md:col-span-2 font-secondary">
              <div className="flex items-center gap-2">
                <p px-3 py-2 bg-light rounded>
                  Booking #{index + 1}
                </p>

                <p className="{`px-3 py-1 text-xs rounded-full ${booking.availabilityStatus === 'Available' ? 'bg-green-400/15 text-green-600' : 'bg-red-400/15 text-red-600'}`}">
                  {booking.availabilityStatus}
                </p>
              </div>
            </div>
            {/* price */}
            <div className="md:col-span-1 flex flex-col justify-between gap-6">
              <div className="text-sm text-gray-500 text-right font-secondary">
                <p>Total Price</p>
                <h3 className="text-2xl font-semibold font-primary text-[#D01818] ">
                  {currency}
                  {booking.rentPrice}
                </h3>
                {/* <p classname="font-secondary">Booked on {bookings.createdAt}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
