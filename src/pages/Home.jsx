import React from "react";
import { Navbar, Hero, Prompt } from "../components";

const Home = () => {
  return (
    <div className="container px-[2%]">
      <Navbar />
      <Hero />
      <Prompt />
    </div>
  );
};

export default Home;
