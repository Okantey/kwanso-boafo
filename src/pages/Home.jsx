import React from "react";
import { Navbar, Hero, Prompt, Overview, Benefits } from "../components";

const Home = () => {
  return (
    <div className="container px-[2%]">
      <Navbar />
      <Hero />
      <Prompt />
      <Overview />
      <Benefits />
    </div>
  );
};

export default Home;
