import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../shared/Footer";
import Food from "../HealthAdvice/Food";

const HealthAdvice = () => {
   const [food, setFood] = useState([]);
    useEffect(() => {
      fetch("food.json")
        .then((res) => res.json())
        .then((data) => setFood(data));
    }, []);
    console.log(food);
    return (
      <div>
        <div>
          <div className="grid grid-cols-3">
            {food.map((food) => (
              <Food key={food._id} food={food}></Food>
            ))}
            
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default HealthAdvice;