import React from "react";
import frame from "../assets/Frame.png";
import money from "../assets/money.png";
import help from "../assets/help.png";

const Benefits = () => {
  return (
    <div className="md:px-[5%]">
      <h1 className="text-2xl font-bold text-center">
        Benefits of working with
        <span className="text-primary"> KwansoBoafo</span>
      </h1>
      <div className=" shadow shadow-primary rounded-md my-10 md:p-8  md:flex md:justify-between  md:items-center md:w-[80%] ">
        <div className="w-full">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl text-primary md:text-6xl">01.</h1>
            <h2 className="text-2xl md:text-4xl">Convenient</h2>
          </div>
          <p className="text-gray">
            With our user-friendly web app, you can easily find mechanics and
            repairers in your area with just a few clicks. Say goodbye to
            endless phone calls and tedious searches – we bring the best options
            directly to you.
          </p>
        </div>
        <div className="w-full flex justify-center ">
          <img src={frame} alt="frame" className="w-[70%]" />
        </div>
      </div>
      {/* money */}
      <div className="shadow shadow-primary rounded-md my-10 md:p-8  md:flex md:justify-between md:gap-8 md:items-center md:w-[85%] md:m-auto ">
        <div className="w-full flex justify-center ">
          <img src={money} alt="frame" className="w-[70%]" />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl text-primary md:text-6xl">02.</h1>
            <h2 className="text-2xl md:text-4xl">Save Money</h2>
          </div>
          <p className="text-gray">
            We understand the importance of quality workmanship and customer
            satisfaction. We carefully vet our mechanics and repairers, ensuring
            they possess the necessary expertise, certifications, and experience
            to deliver exceptional service.
          </p>
        </div>
      </div>
      {/* help */}
      <div className="shadow shadow-primary rounded-md my-10 md:p-8  md:flex md:justify-between  md:items-center md:w-[80%] ">
        <div className="w-full">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl text-primary md:text-6xl">03.</h1>
            <h2 className="text-2xl md:text-4xl">24/7 Customer Support</h2>
          </div>
          <p className="text-gray">
            Kwansoboafo is a local service provider and we are proud to support
            you in your local language. We are proud to be at your service 24/7!
          </p>
        </div>
        <div className="w-full flex justify-center ">
          <img src={help} alt="frame" className="w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
