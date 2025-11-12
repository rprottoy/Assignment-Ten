import React from "react";
import booking from "../../Assets/Easy Booking.jpg";
import trusted from "../../Assets/trust.jpg";
import affordable from "../../Assets/Affordable.jpg";
import support from "../../Assets/support.jpg";

const WhyFromUs = () => {
  return (
    <div className="w-full bg-[#253241] mt-45">
      <div>
        <h2 className="text-white text-center font-primary font-bold text-4xl md:text-5xl py-10">
          Why Rent <span className="text-[#D01818]">With Us</span>
        </h2>
      </div>
      <div className="py-10 md:max-w-10/12 mx-auto text-white ">
        <div className="">
          <div className="  md:grid md:grid-cols-4">
            <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit border-r  border-gray-500">
              <img
                className="rounded-full w-25 brightness-90"
                src={booking}
                alt=""
              />
              <h3 className="font-primary font-semibold text-xl ">
                Easy Booking
              </h3>
              <p className="font-secondary">
                Book your car in minutes—simple search, transparent pricing,
                instant confirmation, and flexible pickup options.
              </p>
            </div>
            <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit border-r border-gray-500">
              <img
                className="rounded-full w-25 brightness-90"
                src={affordable}
                alt=""
              />
              <h3 className="font-primary font-semibold text-xl ">
                Affordable Rates
              </h3>
              <p className="font-secondary">
                Enjoy budget-friendly rates with no hidden fees—compare options,
                unlock discounts, and save on every rental.
              </p>
            </div>
            <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit border-r border-gray-500">
              <img
                className="rounded-full w-25 brightness-80"
                src={trusted}
                alt=""
              />
              <h3 className="font-primary font-semibold text-xl ">
                Trusted Providers
              </h3>
              <p className="font-secondary">
                Rent with confidence—vetted partners, verified reviews, and
                secure payments ensure reliable rides every time.
              </p>
            </div>
            <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit ">
              <img
                className="rounded-full w-25 brightness-90"
                src={support}
                alt=""
              />
              <h3 className="font-primary font-semibold text-xl ">
                24/7 Support
              </h3>
              <p className="font-secondary">
                Book your car in minutes—simple search, transparent pricing,
                instant confirmation, and flexible pickup options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFromUs;
