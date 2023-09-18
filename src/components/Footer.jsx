import React from "react";
import logo from "../assets/K.png";
import { Link } from "react-router-dom";
import Download from "./Download";

const Footer = () => {
  return (
    <footer className=" bg-black">
      <div className="container md:grid md:grid-cols-4 md:place-items-center">
        <div className="w-full">
          <img src={logo} alt="logo" className="md:w-full" />
        </div>
        <div className="text-white flex flex-col items-center gap-2">
          <h1 className="text-2xl md:text-3xl">Company</h1>
          <Link>Contact Us</Link>
          <Link>About Us</Link>
          <Link>Help Center</Link>
        </div>
        <div className="text-white flex flex-col items-center gap-2">
          <h1 className="text-2xl md:text-3xl">Products</h1>
          <Link>Mobile App</Link>
          <Link>Web App</Link>
          <Link>Business</Link>
        </div>
        <div className="flex flex-col gap-4 ">
          <Download buttonColor="white" iconColor="black" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
