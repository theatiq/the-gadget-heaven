import React from "react";
import heroImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="">
      <div className="hero bg-purple-600 min-h-[400px] rounded-lg">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn rounded-3xl px-5">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="w-10/12 h-[300px] mx-auto border border-white rounded-lg -translate-y-20">
        <img className="w-full h-full object-cover p-3" src={heroImg} alt="Hero Image"/>
      </div>
    </div>
  );
};

export default Banner;
