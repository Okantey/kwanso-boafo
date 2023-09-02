import React from "react";

const Prompt = () => {
  return (
    <section className="bg-primary w-full flex justify-between items-center p-2 md:p-4">
      <div className="flex flex-[40%]">
        <h2>Let's go!, enter your email to sign up</h2>
      </div>
      <div className="flex items-center justify-between flex-[60%]">
        <input
          type="email"
          placeholder="Enter email address"
          className="flex-[70%]"
        />
        <button className="flex-[30%]">Sign Up</button>
      </div>
    </section>
  );
};

export default Prompt;
