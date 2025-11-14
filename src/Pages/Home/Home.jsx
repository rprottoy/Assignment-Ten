import React from "react";
import Hero from "../../Components/Common/Hero";
import FeaturedCars from "../../Components/Common/FeaturedCars";
import CarCard from "../../Components/Common/CarCard";
import WhyFromUs from "../../Components/Common/WhyFromUs";
import Testimonial from "../../Components/Common/Testimonial";
import TopCars from "../../Components/Common/TopCars";

const featuredCarsPromise = fetch(
  "https://rent-wheels-server-olive.vercel.app/featured-cars"
).then((res) => res.json());

const topCarsPromise = fetch(
  "https://rent-wheels-server-olive.vercel.app/top-rated"
).then((res) => res.json());

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <WhyFromUs></WhyFromUs>
      <FeaturedCars></FeaturedCars>
      <CarCard featuredCarsPromise={featuredCarsPromise}></CarCard>
      <Testimonial></Testimonial>
      <TopCars topCarsPromise={topCarsPromise}></TopCars>
    </>
  );
};

export default Home;
