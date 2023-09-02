import React from "react";
import overview from "../assets/steps.png";

const Overview = () => {
  return (
    <div className="my-12">
      <div className="w-full m-auto text-center md:w-[55%]">
        <h1 className="text-2xl font-bold">How KwansoBoafo Works.</h1>
        <p className="my-4 text-gray">
          Download and install the tere app. Enter your phone number and make
          your user account. when approved you may start requesting mechanics.
        </p>
      </div>
      <div className="w-[70%] m-auto">
        <img
          src={overview}
          alt="overview"
          className="w-full mix-blend-darken"
        />
      </div>
    </div>
  );
};

export default Overview;
