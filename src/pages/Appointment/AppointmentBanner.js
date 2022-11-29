import React from "react";
import chair from "../../assets/images/chair.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

//  const AppointmentBanner = ({ date, setDate }) => {
//    return (
//      <div className="hero min-h-screen ">
//        <div className="hero-content flex-col lg:flex-row-reverse">
//          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
//          <div>
//            <DayPicker mode="single" selected={date} onSelect={setDate} />
//          </div>
//        </div>
//      </div>
//    );
//  };
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      // style={{
      //   background: `url(${bg})`,
      // }}
      className="hero min-h-screen "
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={chair} alt="" className="max-w-md  rounded-lg shadow-2xl" />
        <div className="mx-10">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
