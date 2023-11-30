import React from "react";
import StatisticsCard from "./StatisticsCard";
import UserCountHook from "../Hooks/UserCountHook";
import UseParcelCountHook from "../Hooks/UseParcelCountHook";
import DeliveredCountHook from "../Hooks/DeliveredCountHook";

const Statistics = () => {
  const [userCount] = UserCountHook();
  const [pacelCount] = UseParcelCountHook();
  const [deliveredCount] = DeliveredCountHook();

  // console.log(deliveredCount);

  const CounterData = [
    {
      number: `${pacelCount?.count}`,
      text: "Parcel Booked",
    },
    {
      number: `${deliveredCount?.count}`,
      text: "Parcel Delivered",
    },
    {
      number: `${userCount?.count}`,
      text: "Happy Customers",
    },
  ];

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
