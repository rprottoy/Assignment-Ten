import React from "react";
import Hero from "../../Components/Common/Hero";
import FeaturedCars from "../../Components/Common/FeaturedCars";
import CarCard from "../../Components/Common/CarCard";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <FeaturedCars></FeaturedCars>
      <CarCard></CarCard>
    </>
  );
};

export default Home;
