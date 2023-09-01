import React from "react";
import { LogoAppleAppstore, LogoGooglePlaystore } from "react-ionicons";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-extrabold mt-10 leading-tight text-center px-5 md:text-4xl md:text-left md:px-0 lg:text-6xl lg:leading-tight lg:text-left">
          Level Up Your Ride. The{" "}
          <span className="text-primary">Ultimate Online</span> Auto Repair
          Workshop.
        </h1>
        <p className="my-4 text-gray">
          Finding reliable mechanics and repairers for your vehicle just got
          easier with Kwansoboafo. Our app(web/mobile) is designed to connect
          you with skilled professionals who can efficiently handle all your
          automotive needs. Say goodbye to the hassle of searching for
          trustworthy service providers and let us streamline the process for
          you.
        </p>
        <div className="flex items-center justify-center gap-2 my-6 lg:justify-start">
          <button className="flex items-center gap-2 bg-black text-white py-3 px-4 rounded-md">
            <LogoGooglePlaystore color="#fff" />
            <p className="font-bold"> Get it on Google Play</p>
          </button>
          <button className="flex items-center gap-2 bg-black text-white py-3 px-4 rounded-md">
            <LogoAppleAppstore color="#fff" />
            <p className="font-bold">Download on the App Store</p>
          </button>
        </div>
      </div>
      <div className="w-full">
        <img
          src="https://img.freepik.com/free-vector/auto-mechanicconcept-illustration_114360-16748.jpg?w=740&t=st=1693488590~exp=1693489190~hmac=f9804c009ddfde0f2cc5072a36af4f72f1390464cf3594c0e32cf71f4847e202"
          alt="hero"
          className="w-full rounded-2xl mix-blend-darken"
        />
      </div>
    </section>
  );
};

export default Hero;
