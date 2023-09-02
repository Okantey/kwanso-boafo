import React from "react";

const Prompt = () => {
  return (
    <section className="bg-primary w-full m-auto flex justify-between items-center gap-4 px-6 py-3 rounded-lg shadow-lg md:p-4 md:w-[75%]">
      <div className="hidden flex-[30%] md:flex">
        <h2 className="text-white font-bold text-center hidden md:text-left md:flex">
          Let's go!, enter your email to sign up
        </h2>
      </div>
      <div className="flex items-center justify-between gap-2 flex-[70%]">
        <input
          type="email"
          placeholder="Enter email address"
          className="flex-[70%] py-3 px-2 rounded-md"
        />
        <button className="flex-[30%] text-white font-bold bg-black py-3 rounded-md shadow-lg">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Prompt;
