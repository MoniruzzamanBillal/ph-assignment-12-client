import React from "react";
import { Link } from "react-router-dom";

const DeliveryManCard = ({ delivaryman }) => {
  // console.log(Object.keys(delivaryman).join(","));

  // console.log(delivaryman);

  const { _id, email, uid, role, name, delivaryDone, averageRating, userImg } =
    delivaryman;

  return (
    <div className="max-w-sm m-auto xsm:m-0  group  bg-white   border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 overflow-hidden ">
      <div className="cardImg   flex justify-center items-center self-center group-hover:scale-105 duration-500 h-[18rem]   ">
        <img className="rounded-t-lg  w-full h-full " src={userImg} alt="" />
      </div>
      <div className=" cardBody  p-3 sm:p-2 md:p-3 bg-gray-100 dark:bg-gray-500 flex flex-col  ">
        {/* \ */}

        {/* card row 1  */}

        <div className="cardColumn1 mb-2 text-lg dark:text-gray-100 ">
          {name}
        </div>
        {/* card row 1  */}
        {/*  */}
        {/*  */}

        {/* card row 2  */}
        <div className="cardRow2 mb-4 flex justify-between items-center  font-semibold sansFont ">
          {" "}
          {/* row1 column1  */}
          <div className="cardColumn1  dark:text-gray-100 text-sm ">
            Parcel Delivered:{" "}
            <span className="text-[#FD5631]"> {delivaryDone} </span>{" "}
          </div>
          {/* row1 column1  */}
          {/* row12 column2  */}
          <div className="cardColumn1 CormorantFont font-semibold dark:text-gray-100  ">
            Rating: <span className="text-[#FD5631]"> {averageRating}/5</span>{" "}
          </div>
          {/* row2 column2  */}
        </div>
        {/* card row 2  */}
      </div>
    </div>
  );
};

export default DeliveryManCard;
