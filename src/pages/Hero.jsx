import React from "react";
import backgroundImg from "../assets/ImagePlaceholder.png";
import InputGrups from "../Components/InputGrups";

const Hero = () => {
  return (
    <section className="flex flex-col    md:flex-row ">
      {/* left side section */}
      <div className=" ">
        <img
          src={backgroundImg}
          className=" w-full h-screen object-cover  h-54"
        />
      </div>
      {/* right side section */}
      <div className="bg-[#2B2B2B] text-white">
        <div className="py-8 px-4">
          <div className="flex flex-col gap-4 justify-start items-center start">
            <h1 className="text-3xl uppercase px-0  font-sans">
              Create Account
            </h1>
            <p className="px-0 ">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>
        </div>
        <InputGrups />
      </div>
    </section>
  );
};

export default Hero;
