import React from "react";
import StatisticsCard from "./StatisticsCard";

const CounterData = [
  {
    number: "5k",
    text: "Parcel Booked",
  },
  {
    number: "4.9k",
    text: "Parcel Delivered",
  },
  {
    number: "90",
    text: "Happy Customers",
  },
];

const Statistics = () => {
  return (
    <div className="CounterContainer bg-blue-200 py-8 ">
      <div className="counterWrapper ">
        <div className="counter   m-auto w-[98%]  sm:w-[96%] md:w-[94%] ">
          <div className="counterWrapper grid grid-cols-2 sm:grid-cols-3 gap-x-2 md:gap-x-3 gap-y-4  ">
            {CounterData.map((counter, index) => (
              <StatisticsCard key={index} counter={counter} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

{
  /* <h3 className="counterNumber mb-1.5 ">{ele.number}+</h3> */
}
{
  /* <h4 className="counterTitle  ">{ele.text}</h4> */
}
