import React from "react";
import cover1 from "../../Assets/banner_car_image.png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14  bg-light text-center">
      <h1 className="text-5xl md:text-7xl font-bold font-primary mb-[-40px] md:mt-50 lg:mt-50 text-[#253241]">
        Rent <span className="text-[#7D0125]">Your</span> <br />{" "}
        <span className="text-[#7D0125] ">Dream</span> Car
      </h1>
      <h2 className="font-secondary text-4xl md:text-5xl mb-8 text-[#253241]">
        Quick.Easy.Secure
      </h2>

      <img className="max-h-74" src={cover1} alt="" />
    </div>
  );
};

export default Hero;
