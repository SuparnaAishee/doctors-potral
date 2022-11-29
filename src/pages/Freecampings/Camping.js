import React from "react";
import { Link } from "react-router-dom";

const Camping = ({ camping }) => {
  console.log(camping);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl  ">
      <figure>
        <img className="w-45" src={camping.image} alt="" />
      </figure>

      <div className="card-body ">
        <h2 className="card-title">{camping.name}</h2>
        <h3>{camping.Date}</h3>
        <h3>{camping.time}</h3>
        <h3>{camping.location}</h3>
        <div className="card-actions justify-end">
          <Link to="/healthdetails">
            <button className="justify-start btn btn-outline btn-primary">
              Details
            </button>
          </Link>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-blue-500">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Camping;
