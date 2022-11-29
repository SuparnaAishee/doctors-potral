import React, { useState } from "react";
import Footer from "../shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailabbleAppointments from "./AvailabbleAppointments";

 const Appointment = () => {
  // const [date, setDate] = useState(new Date());

  // return (
  //   <div>
  //     <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
  //     <AvailabbleAppointments date={date}></AvailabbleAppointments>
  //     <Footer></Footer>
  //   </div>
  // );
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailabbleAppointments
        date={date}
        setDate={setDate}
      ></AvailabbleAppointments>
      <Footer></Footer>
    </div>
  );

};

export default Appointment;
