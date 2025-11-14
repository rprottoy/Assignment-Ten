import React from "react";
// import car1 from "../../Assets/main_car.png";
import car2 from "../../Assets/banner_car_image.png";

const Hero = () => {
  // const [slider, setSlider] = useState([0, 1, 2]);

  // const images = [car1, car2];

  // const positions = ["center", "right"];

  // const handleNext = () => {
  //   setSlider((prevIndexes) => {
  //     const updatedIndexes = prevIndexes.map(
  //       (prevIndex) => (prevIndex + 1) % 3
  //     );
  //     return updatedIndexes;
  //   });

  // const imageVarients = {

  // }
  // };
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14  bg-light text-center">
      <h1 className="text-5xl md:text-7xl font-bold font-primary mb-[-40px] md:mt-50 lg:mt-50 text-[#253241]">
        Rent <span className="text-[#7D0125]">Your</span> <br />{" "}
        <span className="text-[#7D0125] ">Dream</span> Car
      </h1>
      <h2 className="font-secondary text-4xl md:text-5xl mb-8 text-[#253241]">
        Quick.Easy.Secure
      </h2>

      <img className="max-h-74" src={car2} alt="" />
    </div>
  );
};

export default Hero;
