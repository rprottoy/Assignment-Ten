import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import CarNotFound from "../CarNotFound";
import CarCard from "../../Components/Common/CarCard";
import search from "../../Assets/search_icon.svg";
import { Suspense } from "react";
import BrowseCarsCard from "../../Components/Common/BrowseCarsCard";
const browseCarsPromise = fetch("http://localhost:3000/browse-cars").then(
  (res) => res.json()
);

const BrowseCars = () => {
  const browseCars = use(browseCarsPromise);
  const [cars, setCars] = useState(browseCars);
  // search
  const [filteredData, setFilteredData] = useState(browseCars);

  // search
  const handleInputData = (e) => {
    const searchTerm = e.target.value;
    // console.log(searchTerm);
    fetch(`http://localhost:3000/search?search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setFilteredData(data);
        // console.log(data);
      });

    // const result = browseCars.filter((f) =>
    //   f.carName.toLowerCase().includes(searchTerm.trim().toLowerCase())
    // );
    // setFilteredData(result);
  };

  const isEmpty = filteredData.length === 0;

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

      <div className="max-w-11/12   mx-auto mb-15">
        {/* Search Box */}
        <div className="flex items-center flex-col mt-10">
          <div className="flex items-center bg-white px-4  mt-6 max-w-140 w-full h-12 rounded-full shadow">
            <img className="w-4.5 h-4.5 mr-2" src={search} alt="search icon" />
            <input
              className=" w-full h-full outline-none text-gray-500"
              onChange={handleInputData}
              placeholder="Search by name"
              type="search"
              name="search"
            />
          </div>
        </div>

        {/* Car Cards */}

        {isEmpty ? (
          <CarNotFound></CarNotFound>
        ) : (
          <Suspense fallback={<span>Loading...</span>}>
            {/* Listings */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-primary py-15  text-center text-[#253241]">
                All Our <span className="text-[#D01818] ">Listings</span>
              </h2>
            </div>
            <div className="md:grid md:grid-cols-4 lg:grid-col-4 ">
              {cars.map((car) => (
                <BrowseCarsCard key={car._id} car={car}></BrowseCarsCard>
              ))}
            </div>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default BrowseCars;
