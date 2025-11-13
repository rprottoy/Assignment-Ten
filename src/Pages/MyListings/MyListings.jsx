import React from "react";

const MyListings = () => {
  return (
    <div className="mt-30 px-6 md:px-16 lg:px-24  text-sm md:max-w-10/12 mx-auto">
      <div>
        <h1 className="text-3xl font-semibold font-primary text-[#253241] mb-2">
          My Listings
        </h1>
        <p className="font-secondary text-[#253241]">
          View and manage all your car listings
        </p>
      </div>
      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6 font-secondary">
        <table className="w-full border-collapse text-left text-sm text-[#253241]">
          <thead className="text-[#253241] ">
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium">Category</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium max-md:hidden">Availability</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
