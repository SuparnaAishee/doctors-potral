import React from "react";
import intro from "../../assets/images/intro.jpg";

const Intro = () => {
  return (
    <div class="hero min-h-screen px-12 pt-50%">
      <div class="hero-content flex-row lg:flex-row...">
        <img src={intro} class="max-w-md rounded-lg shadow-2xl" />
        <div class="w-60% px-20">
          <h1 class="text-5xl font-bold">Exceptional Health Service</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
