import React from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAuth from "../../Hooks/UseAuth";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  cancelSuccessFully,
  reviewSuccessFully,
} from "../../ToastFunc/ToastFunction";

const MyParcel = () => {
  const navigate = useNavigate();
  const [axiosPublicUrl] = UseAxiosPublic();
  const [axiosSecure] = UseAxiosSecure();
  const { user } = UseAuth();

  const {
    data: parcelData,
    isLoading: dataLoading,
    refetch: myParcelRefetch,
  } = useQuery({
    queryKey: ["parcelData"],
    queryFn: async () => {
      // return axiosPublicUrl.get(`/parcels?email=${user?.email}`, {
      return axiosSecure.get(`/parcels?email=${user?.email}`);
    },
  });

  const userData = parcelData?.data;

  console.log(userData);

  const handleUpdate = (id) => {
    console.log("id on update = ", id);

    navigate(`/dashboard/updateparcel/${id}`);
  };

  // cancel parcel data
  const handleCancel = (id) => {
    console.log("cancel click ", id);
    axiosSecure.delete(`/parcel/delete/${id}`).then((deleteResponse) => {
      console.log(deleteResponse.data);

      if (deleteResponse?.data?.deletedCount > 0) {
        cancelSuccessFully();
        myParcelRefetch();
      }
    });
  };

  if (dataLoading) {
    return <Loading />;
  }

  return (
    <div className="MyParcelContainer">
      <div className="myParcelWrapper">
        {/*  */}
        {/*  */}

        {/* <!-- component --> */}

        <div className=" bg-red-400    ">
          {/* <div className="align-middle  inline-block min-w-full shadow overflow-hidden bg-gray-600 shadow-dashboard px-8 pt-3"> */}
          <div className=" flex flex-col justify-center items-center h-screen  shadow  bg-gray-50  px-2 pt-3">
            <table className=" ">
              <thead>
                <tr>
                  {/* parcel type  */}
                  <th className=" text-center px-2 py-2 border-b-2 border-gray-300 leading-4 text-blue-500 ">
                    Parcel type
                  </th>
                  {/* parcel type  */}

                  {/* requested deliveryc date  */}
                  <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Requested delivery date
                  </th>
                  {/* requested deliveryc date  */}

                  {/* approximate delivery date  */}
                  <th className=" text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Approximate delivery date
                  </th>
                  {/* approximate delivery date  */}

                  {/* Booking Date delivery date  */}
                  <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Booking Date
                  </th>
                  {/* Booking Date delivery date  */}

                  {/* Delivery Men ID  */}
                  <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Delivery Men ID
                  </th>
                  {/*Delivery Men ID  */}

                  {/* Booking Status */}
                  <th className="px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500 text-center">
                    Booking Status
                  </th>
                  {/*Booking Status  */}

                  {/* action Status */}
                  <th className="px-2 py-2 border-b-2 border-gray-300 text-center leading-4 text-blue-500">
                    Action
                  </th>
                  {/*action Status  */}

                  {/* cancel  */}
                  <th className="px-2 py-2 border-b-2 border-gray-300 text-center leading-4 text-blue-500">
                    Cancel
                  </th>
                  {/* cancel  */}
                </tr>
              </thead>
              <tbody className="bg-white">
                {userData &&
                  userData.map((data, ind) => (
                    <tr key={ind}>
                      <td className="  py-2 text-left leading-4    border-b border-gray-500">
                        <div className="flex items-center justify-center ">
                          <div>
                            <div className="text-sm leading-5 text-gray-800">
                              {data?.parcelType}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 text-left leading-4  border-b border-gray-500">
                        <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                          {data?.requestedDate}
                        </div>
                      </td>
                      <td className="py-2 text-left leading-4  border-b border-gray-500 ">
                        <div className="flex items-center justify-center">
                          approximate delivary date
                        </div>
                      </td>
                      <td className="py-2 text-left leading-4  border-b border-gray-500">
                        <div className="flex items-center justify-center">
                          {data?.bookingDate}
                        </div>
                      </td>
                      <td className="py-2 text-center leading-4  border-b border-gray-500">
                        <div className="flex items-center justify-center text-xs ">
                          {data?.delivartManId ? data?.delivartManId : "..."}
                        </div>
                      </td>
                      <td className="py-2 text-left leading-4  border-b border-gray-500">
                        <div
                          className={`flex items-center font-bold justify-center ${
                            data?.status === "delivered"
                              ? "text-green-500"
                              : data?.status === "canceled"
                              ? "text-red-500"
                              : "text-yellow-400"
                          } `}
                        >
                          {data?.status}
                        </div>
                      </td>

                      <td className="py-2 px-2 text-center leading-4 border-b border-gray-500">
                        <div className="flex items-center justify-center">
                          {data?.status === "delivered" ? (
                            <button className="bg-green-500 py-1.5 px-2 font-bold rounded-md text-gray-200 text-xs">
                              Review
                            </button>
                          ) : data?.status === "on the way" ? (
                            "."
                          ) : (
                            <button
                              className="bg-orange-500 py-1.5 px-2 font-bold rounded-md text-gray-200 text-xs"
                              onClick={() => handleUpdate(data?._id)}
                            >
                              update
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="py-2 px-2 text-center leading-4 border-b border-gray-500">
                        <div className="flex items-center justify-center">
                          {data?.status === "delivered" ||
                          data?.status === "on the way" ? (
                            "."
                          ) : (
                            <button
                              className="bg-red-500 py-1.5 px-2 font-bold rounded-md text-gray-200 text-xs"
                              onClick={() => handleCancel(data?._id)}
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}

                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
              </tbody>
            </table>
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
              <div>
                <p className="text-sm leading-5 text-blue-700">
                  Showing
                  <span className="font-medium">1</span>
                  to
                  <span className="font-medium">200</span>
                  of
                  <span className="font-medium">2000</span>
                  results
                </p>
              </div>
              <div>
                <div className="relative z-0 inline-flex shadow-sm">
                  <div>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                      aria-label="Previous"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                    >
                      3
                    </a>
                  </div>
                  <div v-if="pagination.current_page < pagination.last_page">
                    <a
                      href="#"
                      className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                      aria-label="Next"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyParcel;
