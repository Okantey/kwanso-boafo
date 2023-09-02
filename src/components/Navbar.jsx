import React from "react";
import Brand from "./Brand";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center ">
      <Brand />
      <div className="hidden md:flex md:items-center md:gap-6">
        <Link className="text-base hover:text-primary">Home</Link>
        <Link className="text-base hover:text-primary">Service Provider</Link>
        <Link className="text-base hover:text-primary">About Us</Link>
        <Link>
          <Button title="Login" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
