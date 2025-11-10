import React from "react";

const CarCard = () => {
  return (
    <div className="w-full bg-[#253241]">
      <div className="max-w-10/12 mx-auto ">
        <div className="md:grid md:grid-cols-3 lg:grid-col-3 gap-4">
          <div className="overflow-hidden hover:-translate-y-1 transition-all duration-500 cursor-pointer">
            <div>
              <img
                className="md:w-[400px] w-full h-[350px]  object-center object-cover transition-transform duration-500 group-hover:scale-105"
                src={
                  "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
