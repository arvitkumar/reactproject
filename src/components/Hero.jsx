import React from "react";
import IMAGE from "../assets/images/png/heroone.png";
import BACKGROUND from "../assets/images/png/heroback.png";

const Hero = () => {
  return (
    <div className="px-[148px] relative">
      <img className="absolute -z-10 top-0 right-0" src={BACKGROUND} alt="" />
      <div className="container mx-auto relative">
        <div className="flex justify-between  text-center items-center h-20">
          <div>
            <h2 className="font-bold font-poppins text-2xl">Coding Campus</h2>
          </div>
          <div className="flex gap-[51px] items-center ">
            <h2 className="font-normal text-2xl text-center font-poppins">
              Home
            </h2>
            <h2 className="font-normal font-poppins text-2xl">About</h2>
            <h2 className="font-normal font-poppins text-2xl">Services</h2>
            <h2 className="font-normal font-poppins text-2xl">Training</h2>
            <button className="font-normal  text-2xl border-[2px] rounded-[23px] py-[3px] px-[23px] border-black font-poppins ">
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-normal font-bakbak text-[46px] mt-10 leading-[112%] min-h-[227px]">
            Smart digital marketing <br />
            solutions to boost your online <br /> presence and grow your <br />
            business.
          </h1>
          <p className="font-poppins text-xl font-extralight">
            Build Your Online Presence with Proven Marketing <br /> Tactics
          </p>
          <button class="rounded-[50px] border-none shadow-[9px_0px_0px_8px_#031464] h-[50px] w-[234px] text-2xl leading-[160.5%] mt-[33px]">
            Read More
          </button>
        </div>
        <img className="absolute right-[-50px] top-[80px]" src={IMAGE} alt="" />
      </div>
    </div>
  );
};

export default Hero;
