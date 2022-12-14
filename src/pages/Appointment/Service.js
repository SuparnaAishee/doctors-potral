import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500"> No Slots Avaiable</span>
          )}{" "}
        </p>
        <p>
          {slots.length}
          {slots.length > 1 ? "spaces" : "space"} Availabble
        </p>
        <div className="card-actions justify-center">
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-blue-500"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
