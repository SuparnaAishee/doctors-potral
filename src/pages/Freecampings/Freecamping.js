import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../shared/Footer";
import Camping from "./Camping";
const Freecamping = () => {
  const [campings, setCampings] = useState([]);

  useEffect(() => {
    fetch("freecampings.json")
      .then((res) => res.json())
      .then((data) => setCampings(data));
  }, []);
  console.log(campings);
  return (
    <div>
      <div className=" ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 mx-12  ">
          {campings.map((camping) => (
            <Camping key={camping._id} camping={camping}></Camping>
          ))}
          {/* <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
      <Footer className="pt-10"></Footer>
    </div>
  );
};

export default Freecamping;
