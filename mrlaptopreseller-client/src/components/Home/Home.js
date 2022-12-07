import React from "react";
import Advertise from "../Advertise/Advertise";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import "./Home.css";

const Home = () => {
   return (
      <div className="space-y-24 lg:space-y-48">
         <Hero></Hero>
         <Advertise></Advertise>
         <Categories></Categories>
      </div>
   );
};

export default Home;
