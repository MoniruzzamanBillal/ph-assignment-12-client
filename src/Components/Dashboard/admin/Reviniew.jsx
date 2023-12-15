import React, { useEffect, useState } from "react";
import Statistics from "../../Statistics";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import CountUp from "react-countup";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Reviniew = () => {
  const [reviniew, setReviniew] = useState([]);
  const [axiosPublicUrl] = UseAxiosPublic();
  const [delivaryMan, setDelivaryMan] = useState([]);

  useEffect(() => {
    const UserReviniew = axiosPublicUrl.get("/reviniew").then((response) => {
      // console.log(response?.data);

      if (response?.data) {
        setReviniew(response?.data?.reviniew);
      }
    });
  }, []);

  // /admin/delivarymans

  useEffect(() => {
    axiosPublicUrl.get("/admin/delivarymans").then((response) => {
      // console.log(response.data);
      setDelivaryMan(response.data);
    });
  }, []);

  console.log(delivaryMan);
  // bar chart data
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 24000,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  // bar chart data

  return (
    // <div className="reviniewContainer bg-red-500 h-screen ">
    <div className="reviniewContainer bg-blue-300  ">
      <div className="reviniewWrapper  h-full flex flex-col  ">
        <Statistics />

        {/* reviniew card  */}
        <div className=" w-[50%] flex group flex-col items-center justify-center rounded-lg bg-blue-100  p-4 lg:p-8  cursor-pointer relative m-auto    hover:shadow-lg ">
          {/* top border  */}

          {/* top line  */}
          {/* top line  */}
          <div className="topBorder absolute top-0 left-0 bg-orange-500 w-[0rem] h-[6px] group-hover:w-[4rem]   xsm:group-hover:w-[6rem] origin-right  duration-500 group-hover:transition-all  "></div>
          {/* top line  */}
          {/* top line  */}

          {/* top left line  */}
          {/* top left line  */}
          <div className="topBorder absolute top-[1.6rem] xsm:top-[2.6rem] left-[0rem] transform -translate-x-1/2 -translate-y-1/2 rotate-90 bg-orange-500 origin-bottom w-[0rem] h-[6px] group-hover:w-[3rem] xsm:group-hover:w-[5rem] duration-500 group-hover:transition-all  "></div>
          {/* top left line  */}
          {/* top left line  */}

          {/* bottom line  */}
          {/* bottom line  */}
          <div className="topBorder absolute bottom-[0rem] right-[0rem] bg-orange-500  w-[0rem] h-[6px] group-hover:w-[3.5rem]  xsm:group-hover:w-[6rem]  duration-500 group-hover:transition-all  "></div>
          {/* bottom line  */}
          {/* bottom line  */}

          {/*  */}
          {/*  */}
          {/* bottom right line  */}
          {/* bottom right line  */}
          <div className="topBorder absolute bottom-[0rem] right-[0rem] bg-orange-500  w-[6px] h-[0rem] group-hover:h-[3rem] xsm:group-hover:h-[6rem] duration-500 group-hover:transition-all  "></div>
          {/* bottom right line  */}
          {/* bottom right line  */}

          <div className="  text-gray-800 group-hover:text-orange-500 dark:text-gray-400   pb-2 text-sm xsm:text-lg sm:text-xl md:text-2xl xmd:text-3xl font-semibold     ">
            <h3 className="counterNumber  "> Total Earnings - </h3>
          </div>
          <div className="  text-center text-gray-800 group-hover:text-orange-500 text-sm xsm:text-lg sm:text-xl md:text-xl xmd:text-2xl  font-semibold    ">
            <h4 className="counterTitle  ">
              <CountUp start={0} end={reviniew} duration={1.4} />$
            </h4>
          </div>
        </div>
        {/* reviniew card  */}

        {/* delivary man card , barchart  */}
        <div className="test  pt-6 w-full h-full m-auto flex justify-center items-center ">
          {delivaryMan && (
            <BarChart
              width={500}
              height={300}
              data={delivaryMan}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Legend />
              <Tooltip />
              <Bar
                dataKey="delivaryDone"
                fill="#8884d8"
                // shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          )}
        </div>
        {/* delivary man card , barchart  */}
      </div>
    </div>
  );
};

export default Reviniew;
