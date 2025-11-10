import React from "react";
import car1 from "../../Assets/car_image1.png";

const CarCard = () => {
  return (
    <div className="w-full bg-[#253241]">
      <div className="max-w-10/12 mx-auto ">
        <div className="md:grid md:grid-cols-3 lg:grid-col-3 gap-4">
          <div>
            <img
              className="md:w-[400px] w-full h-[350px]"
              src={
                "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg"
              }
              alt=""
            />
          </div>
          <div>
            <img
              className="md:w-[400px] w-full h-[350px]"
              src={
                "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1259"
              }
              alt=""
            />
          </div>
          <div>
            <img
              className="md:w-[400px] w-full h-[350px]"
              src={
                "https://images.unsplash.com/photo-1612563893490-d86ed296e5e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1dnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
