import React from "react";

const Prompt = () => {
  return (
    <section className="bg-primary w-full flex justify-between items-center gap-4 px-6 py-2 my-6 rounded-lg shadow-lg md:p-4">
      <div className="flex flex-[30%]">
        <h2 className="text-white font-bold text-center md:text-left">
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
