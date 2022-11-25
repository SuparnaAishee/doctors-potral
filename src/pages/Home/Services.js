import React from "react";
import flouride from "../../assets/images/fluoride.png";
import eye from "../../assets/images/eye.png";
import health from "../../assets/images/health.png";
import brain from "../../assets/images/brain.png";
import kidney from "../../assets/images/kidney.png";
import Cardic from "../../assets/images/Cardic.png";
import Service from "../Home/Service";
import PrimaryButton from "../shared/PrimaryButton";

const Services = () => {
  const services = [
    {
      id: "1",
      name: "Dentist",
      description: "",
      img: flouride,
    },
    {
      id: "2",
      name: "Eye specialist ",
      description: "",
      img: eye,
    },
    {
      id: "3",
      name: "General Surgeons",
      description: "",
      img: health,
    },
    {
      id: "4",
      name: "Neurologists",
      description: "",
      img: brain,
    },
    {
      id: "5",
      name: "Nephrologist",
      description: "",
      img: kidney,
    },
    {
      id: "6",
      name: "Cardiologists",
      description: "",
      img: Cardic,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center ">
        <h3 className="text-primary text-xl font-bold uppercase">
          Doctors Catagory
        </h3>
        <h2 className="text-3xl">Catagories We Have</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 mx-12">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="text-center pt-10">
        <PrimaryButton> See More</PrimaryButton>
      </div>
    </div>
  );
};

export default Services;
