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
    text: "Happy Customers",
  },
];

const Statistics = () => {
  return (
    <div className="CounterContainer bg-blue-200 py-8 ">
      <div className="counterWrapper ">
        <div className="counter  m-auto w-[99%] xsm:w-[95%] sm:w-[92%] ">
          <div className="counterWrapper flex justify-between  m-auto ">
            {CounterData.map((ele, index) => (
              <div
                className="counterItem flex flex-col items-center m-auto  w-[32%] text-gray-900 text-sm xsm:text-lg sm:text-xl md:text-2xl xmd:text-3xl font-semibold   "
                key={index}
              >
                <h3 className="counterNumber mb-1.5 ">{ele.number}+</h3>
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
