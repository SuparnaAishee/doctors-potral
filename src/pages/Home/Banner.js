import React from "react";
import chairs from "../../assets/images/chairs.jpg";
import PrimaryButton from "../shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chairs} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">The Spirit To Care</h1>
          <p className="py-6 w-50 ">
            SEBA is here to make your life little more easier.We hope to provide
            a good health service and reach in every single corner of our
            country.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
