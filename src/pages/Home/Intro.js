import React from "react";
import intro from "../../assets/images/intro.jpg";

const Intro = () => {
  return (
    <div className="hero min-h-screen px-12 pt-50%">
      <div className="hero-content flex-row lg:flex-row...">
        <img src={intro} className="max-w-md rounded-lg shadow-2xl" />
        <div className="w-60% px-20">
          <h1 className="text-5xl font-bold">Exceptional Health Service</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
