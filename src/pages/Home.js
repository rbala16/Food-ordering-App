import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import RestaurantList from "../components/Restaurants/RestaurantList";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RestaurantList />
    </div>
  );
};

export default Home;
