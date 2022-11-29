import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../shared/PrimaryButton";
import { Link } from "react-router-dom";

const makeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make An Appointment Today</h2>
        <p className="text-white pb-5">
          An occupational health checkup offers several benefits to every
          organization. With such check-ups, it becomes possible to identify the
          health status of existing and new staff. In order to save the valuable
          time of your workforce, we have the facility of conducting health
          check-ups on client’s premises. Asilia provides the preventive health
          check-up and routine health check-up onsite and offsite as per
          client’s convenience.
        </p>
        <Link to="/appointment">
          <PrimaryButton>Book Now</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default makeAppointment;
