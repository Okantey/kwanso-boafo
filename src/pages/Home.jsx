import React from "react";
import { Navbar, Hero, Prompt, Overview } from "../components";

const Home = () => {
  return (
    <div className="container px-[2%]">
      <Navbar />
      <Hero />
      <Prompt />
      <Overview />
    </div>
  );
};

export default Home;
