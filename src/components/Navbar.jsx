import React from "react";
import Brand from "./Brand";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[whitesmoke] w-full flex justify-between items-center sticky top-0 left-0 right-0 z-10  ">
      <Brand />
      <div className="hidden md:flex md:items-center md:gap-6">
        <Link className="text-base hover:text-primary">Home</Link>
        <Link className="text-base hover:text-primary">Service Provider</Link>
        <Link className="text-base hover:text-primary">About Us</Link>
        <Link className="text-base hover:text-primary">Contact</Link>
        <Link>
          <Button title="Login" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
