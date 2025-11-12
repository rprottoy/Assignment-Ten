import React from "react";
import Hero from "../../Components/Common/Hero";
import FeaturedCars from "../../Components/Common/FeaturedCars";
import CarCard from "../../Components/Common/CarCard";
import WhyFromUs from "../../Components/Common/WhyFromUs";
import Testimonial from "../../Components/Common/Testimonial";

const featuredCarsPromise = fetch("http://localhost:3000/featured-cars").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <WhyFromUs></WhyFromUs>
      <FeaturedCars></FeaturedCars>
      <CarCard featuredCarsPromise={featuredCarsPromise}></CarCard>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
