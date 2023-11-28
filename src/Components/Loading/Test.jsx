import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
// import { Data } from "./Data";
import { Data } from "../../Components/Test/ChartData";
import BarChart from "../Test/BarChart";

Chart.register(CategoryScale);

// utils/Data.js

const Test = () => {
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["red", "green", "yellow"],
      },
    ],
  });

  return (
    <div>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Tests</h1>
      {/*  */}
      {/*  */}

      <div className="chart bg-blue-100 w-[65%] ">
        <BarChart chartData={userData} />
      </div>

      {/*  */}
      {/*  */}
    </div>
  );
};

export default Test;
