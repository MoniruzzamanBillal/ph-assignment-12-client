import React, { useEffect, useState } from "react";
import Statistics from "../../Statistics";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import CountUp from "react-countup";

const Reviniew = () => {
  const [reviniew, setReviniew] = useState([]);
  const [axiosPublicUrl] = UseAxiosPublic();

  useEffect(() => {
    const UserReviniew = axiosPublicUrl.get("/reviniew").then((response) => {
      // console.log(response?.data);

      if (response?.data) {
        setReviniew(response?.data?.reviniew);
      }
    });
  }, []);

  console.log(reviniew);

  return (
    <div className="reviniewContainer bg-red-500 h-screen ">
      <div className="reviniewWrapper bg-lime-300 h-full flex flex-col  ">
        <Statistics />

        {/* reviniew card  */}
        <div className=" w-[50%] flex group flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-600 p-4 lg:p-8  cursor-pointer relative m-auto    hover:shadow-lg ">
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
      </div>
    </div>
  );
};

export default Reviniew;
