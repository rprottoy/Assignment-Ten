import React from "react";
import Hero from "../../Components/Common/Hero";
import FeaturedCars from "../../Components/Common/FeaturedCars";
import CarCard from "../../Components/Common/CarCard";

const featuredCarsPromise = fetch("http://localhost:3000/featured-cars").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <FeaturedCars></FeaturedCars>
      <CarCard featuredCarsPromise={featuredCarsPromise}></CarCard>
    </>
  );
};

export default Home;
