import React, { useEffect, useState } from "react";
import UseDelivaryMan from "../../../Hooks/UseDelivaryMan";
import Loading from "../../Loading/Loading";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import DelivaryManCountHook from "../../../Hooks/DelivaryManCountHook";
import UseAuth from "../../../Hooks/UseAuth";

const AllDeliveryMan = () => {
  const { user } = UseAuth();
  const [delivaryManCount, delivaryManRefetch] = DelivaryManCountHook();
  const [delivaryMans, delivaryManloading] = UseDelivaryMan();
  const [axiosPublicUrl] = UseAxiosPublic();
  const [axiosSecure] = UseAxiosSecure();

  const [currentPage, setCurrentPage] = useState(1);
  const [productCount, setProductsCount] = useState(0);
  const [perPageItem, setPerPageItem] = useState(5);
  const Totalpage = Math.ceil(productCount / perPageItem);
  const [delivaryMandata, setDelivaryManData] = useState([]);
  const pages = [...Array(Totalpage).keys()];

  // page number click functionality
  const handlePageClick = (page) => {
    setCurrentPage(page + 1);
  };

  // function for handle previous button in pagination
  const handlePrev = () => {
    if (currentPage <= 1) {
      return setCurrentPage(1);
    }
    setCurrentPage(currentPage - 1);
  };

  // function for handle next button in pagination
  const handleNextCurrent = () => {
    if (currentPage >= Totalpage) {
      return setCurrentPage(Totalpage);
    }
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (delivaryManCount?.count) {
      setProductsCount(delivaryManCount?.count);
    }
  }, [delivaryManCount]);

  // effect for getting user data
  useEffect(() => {
    axiosSecure
      .get(`/admin/delivarymans?page=${currentPage}&pagePerItem=${perPageItem}`)
      .then((dataResponse) => {
        setDelivaryManData(dataResponse?.data);
      });
  }, [currentPage, perPageItem, user?.email, axiosPublicUrl, axiosSecure]);

  console.log(delivaryMandata);

  // console.log(delivaryManCount);

  // console.log(delivaryMans);

  return (
    <div>
      <div className=" bg-red-400 w-[95%] m-auto    ">
        <div className=" flex flex-col justify-center items-center h-screen  shadow  bg-gray-50  px-2 pt-3">
          <table className=" ">
            <thead>
              <tr>
                {/* parcel type  */}
                <th className=" text-center px-3 py-2 border-b-2 border-gray-300 leading-4 text-blue-500 ">
                  Name
                </th>
                {/* parcel type  */}

                {/* requested deliveryc date  */}
                <th className="text-center px-3 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Phone number
                </th>
                {/* requested deliveryc date  */}

                {/* approximate delivery date  */}
                <th className=" text-center px-3 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Total parcel delivered
                </th>
                {/* approximate delivery date  */}

                {/* Booking Date delivery date  */}
                <th className="text-center px-3 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Average review
                </th>
                {/* Booking Date delivery date  */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {delivaryMandata &&
                delivaryMandata.map((delivaryman, ind) => (
                  <tr>
                    {/*  */}
                    <td className="  py-2 px-3 text-left leading-4    border-b border-gray-500">
                      <div className="flex items-center justify-center ">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            {delivaryman?.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  */}
                    {/*  */}
                    <td className="py-2 px-3 text-left leading-4  border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                        {delivaryman?.phoneNumber
                          ? delivaryman?.phoneNumber
                          : "phoneNumber"}
                      </div>
                    </td>
                    {/*  */}
                    {/*  */}
                    <td className="py-2 px-3 text-left leading-4  border-b border-gray-500 ">
                      <div className="flex items-center justify-center">
                        {delivaryman?.delivaryDone
                          ? delivaryman?.delivaryDone
                          : "0"}
                      </div>
                    </td>
                    {/*  */}
                    {/*  */}
                    <td className="py-2 px-3 text-left leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {delivaryman?.averageRating
                          ? delivaryman?.averageRating
                          : "0"}
                      </div>
                    </td>
                    {/*  */}
                    {/*  */}
                  </tr>
                ))}

              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}

              {/*  */}
            </tbody>
          </table>
          {/*  */}
          <div className="pagination   mt-3 py-4 text-center text-xs xsm:text-sm sm:text-base  ">
            <button
              onClick={() => handlePrev()}
              className=" py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 border-r border-gray-600 text-white bg-gray-500  hover:bg-gray-700   "
            >
              Prev
            </button>
            {pages.map((page, ind) => (
              <button
                onClick={() => handlePageClick(page)}
                className={` py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 text-white   ${
                  currentPage - 1 === page
                    ? "bg-[#e4c590] hover:bg-amber-300 "
                    : "bg-gray-500  hover:bg-gray-700"
                } border-r border-gray-600 `}
              >
                {" "}
                {page + 1}{" "}
              </button>
            ))}
            <button
              onClick={() => handleNextCurrent()}
              className="py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 text-white bg-gray-500  hover:bg-gray-700   "
            >
              Next
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AllDeliveryMan;
