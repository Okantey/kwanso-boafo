import React from "react";
import Brand from "./Brand";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-2 mb-4">
      <Brand />
      <div className="flex items-center gap-6">
        <Link className="text-base hover:text-primary">Home</Link>
        <Link className="text-base hover:text-primary">Service Provider</Link>
        <Link className="text-base hover:text-primary">About Us</Link>
        <Link>
          <Button title="Login" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
