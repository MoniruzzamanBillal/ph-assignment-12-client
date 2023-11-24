import React from "react";

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
    text: "Happy Users",
  },
];

const Statistics = () => {
  return (
    <div className="CounterContainer bg-blue-400 py-8 ">
      <div className="container">
        <div className="counter w-[80%] m-auto ">
          <div className="counterWrapper flex justify-evenly ">
            {CounterData.map((ele, index) => (
              <div
                className="counterItem flex flex-col justify-end items-end   w-[25%] text-gray-50 text-3xl font-semibold  "
                key={index}
              >
                <h3 className="counterNumber  ">{ele.number}+</h3>
                <h4 className="counterTitle  ">{ele.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
