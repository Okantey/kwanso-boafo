import React from "react";
import {
  Navbar,
  Hero,
  Prompt,
  Overview,
  Benefits,
  Footer,
} from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container px-[2%] md:px-0">
        <Navbar />
        <Hero />
        <Prompt />
        <Overview />
        <Benefits />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
