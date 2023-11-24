import React from "react";

const FeatureCard = ({ feature }) => {
  const { cardImg, cardTitle, cardSummery } = feature;
  return (
    <div className="flex group flex-col items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-600 p-4 lg:p-8  cursor-pointer relative m-auto w-[94%] xsm:w-full h-[13rem] xsm:h-[15rem] md:h-[16rem] xmd:h-[18rem] ">
      {/* top border  */}

      {/* top line  */}
      {/* top line  */}
      <div className="topBorder absolute top-0 left-0 bg-orange-500 w-[0rem] h-[6px] group-hover:w-[12rem] origin-right  duration-500 group-hover:transition-all  "></div>
      {/* top line  */}
      {/* top line  */}

      {/* top left line  */}
      {/* top left line  */}
      <div className="topBorder absolute top-[4.9rem] left-[0rem] transform -translate-x-1/2 -translate-y-1/2 rotate-90 bg-orange-500 origin-bottom w-[0rem] h-[6px] group-hover:w-[10rem]   duration-500 group-hover:transition-all  "></div>
      {/* top left line  */}
      {/* top left line  */}

      {/* bottom line  */}
      {/* bottom line  */}
      <div className="topBorder absolute bottom-[0rem] right-[0rem] bg-orange-500  w-[0rem] h-[6px] group-hover:w-[10rem]   duration-500 group-hover:transition-all  "></div>
      {/* bottom line  */}
      {/* bottom line  */}

      {/*  */}
      {/*  */}
      {/* bottom right line  */}
      {/* bottom right line  */}
      <div className="topBorder absolute bottom-[0rem] right-[0rem] bg-orange-500  w-[6px] h-[0rem] group-hover:h-[10rem] duration-500 group-hover:transition-all  "></div>
      {/* bottom right line  */}
      {/* bottom right line  */}

      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}

      {/* top imgge  */}
      <div className="topImg  ">
        <img
          src={cardImg}
          alt=""
          className=" w-[78%] xsm:w-[80%] sm:w-[84%] md:w-full h-full  "
        />
      </div>
      {/* top imgge  */}

      <div className="text-lg font-bold text-gray-800 group-hover:text-orange-500 dark:text-gray-400 sm:text-xl md:text-2xl ">
        {cardTitle}
      </div>
      <div className=" text-xs xsm:text-sm font-semibold text-center text-gray-800 group-hover:text-orange-500   ">
        {cardSummery}
      </div>
    </div>
  );
};

export default FeatureCard;
