import React from "react";
import { Link } from "react-router";

const CarNotFound = () => {
  return (
    <div className="text-center">
      {/* Listings */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold font-primary pb-15 pt-5 text-[#253241]">
          Car Not <span className="text-[#D01818] ">Found</span>
        </h2>
      </div>
      <p className="mb-10 font-secondary text-[#253241] text-xl">
        The car you are looking for is not in our listing
      </p>
      <Link to="/">
        <button className="px-10 py-3  bg-[#D01818] text-white font-semibold border-0 hover:bg-[#253241] text-center rounded-none">
          BACK HOME
        </button>
      </Link>
    </div>
  );
};

export default CarNotFound;
