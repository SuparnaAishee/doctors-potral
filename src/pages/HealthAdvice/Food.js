import React from "react";

const Food = ({ food }) => {
  console.log(food);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl my-15 ">
      <div className="card-body">
        <h2 className="card-title">{food.subject}</h2>
      </div>
    </div>
  );
};

export default Food;
