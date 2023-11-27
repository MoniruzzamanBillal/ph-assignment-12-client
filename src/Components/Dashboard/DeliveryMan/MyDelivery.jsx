import React from "react";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseRole from "../../../Hooks/UseRole";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuth from "../../../Hooks/UseAuth";
import Loading from "../../Loading/Loading";
import { Avatar } from "flowbite-react";
import {
  cancelDelivary,
  deliveredSuccessFully,
} from "../../../ToastFunc/ToastFunction";
const MyDelivery = () => {
  const { user, loading } = UseAuth();
  const [axiosPublicUrl] = UseAxiosPublic();
  const [isAdmin, isAdminLoading] = UseRole();

  // console.log(isAdmin?.id);

  const {
    data: myDelivary,
    isLoading: myDelivaryLoading,
    refetch: myDelivaryReFetch,
  } = useQuery({
    queryKey: ["myDelivary"],

    queryFn: async () => {
      const res = await axiosPublicUrl.get(`/mydelivery/${isAdmin?.id}`);

      return res.data;
    },
  });

  // console.log(myDelivary);

  // delivery function
  const handleDelivery = (id) => {
    console.log("delivery  click");
    console.log(id);

    const additionalData = { status: "delivered" };

    axiosPublicUrl
      .patch(`/parcel/${id}`, additionalData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data?.acknowledged) {
          myDelivaryReFetch();
          deliveredSuccessFully();
        }
      })
      .catch((error) => console.log(error));
  };

  // cancel function
  const handleCancel = (id) => {
    console.log("cancel  click");
    console.log(id);

    const additionalData = { status: "canceled" };

    axiosPublicUrl
      .patch(`/parcel/${id}`, additionalData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data?.acknowledged) {
          myDelivaryReFetch();
          cancelDelivary();
        }
      })
      .catch((error) => console.log(error));
  };

  if (loading || myDelivaryLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className=" bg-red-400 w-[95%] m-auto    ">
        <div className=" flex flex-col justify-center items-center h-screen  shadow  bg-gray-50  px-2 pt-3">
          <table className=" ">
            <thead>
              <tr>
                {/* parcel type  */}
                <th className=" text-center px-2 py-2 border-b-2 border-gray-300 leading-4 text-blue-500 ">
                  Booked user
                </th>
                {/* parcel type  */}

                {/* requested deliveryc date  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Receiver name
                </th>
                {/* requested deliveryc date  */}

                {/* approximate delivery date  */}
                <th className=" text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Booked user number
                </th>
                {/* approximate delivery date  */}

                {/* Booking Date delivery date  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Requested Delivery Date
                </th>
                {/* Booking Date delivery date  */}

                {/* Delivery Men ID  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Approximate delivery date
                </th>
                {/*Delivery Men ID  */}

                {/* Booking Status */}
                <th className="px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500 text-center">
                  Recievers phone number
                </th>
                {/*Booking Status  */}

                {/* Booking Status */}
                <th className="px-2 py-2 border-b-2 border-gray-300 text-center leading-4 text-blue-500">
                  Receivers Address
                </th>
                {/*Booking Status  */}

                {/* cancel button  */}

                <th className="px-2 py-2 border-b-2 border-gray-300 text-center leading-4 text-blue-500">
                  Cancel Button
                </th>
                {/* cancel button  */}

                {/* delivery botton  */}

                <th className="px-2 py-2 border-b-2 border-gray-300 text-center leading-4 text-blue-500">
                  Deliver Button
                </th>
                {/* delivery botton  */}

                {/*  */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {myDelivary &&
                myDelivary.map((delivary, ind) => (
                  <tr key={ind}>
                    <td className="  py-2 px-2 text-center leading-4    border-b border-gray-500">
                      <div className="flex items-center justify-center ">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            {delivary?.userName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                        {delivary?.receiverName}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500 ">
                      <div className="flex items-center justify-center">
                        {delivary?.phoneNumber}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {delivary?.requestedDate}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {delivary?.approximateDelivery}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {delivary?.receiverPhoneNumber}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4 border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {delivary?.deliveryAddress}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4 border-b border-gray-500">
                      {delivary?.status === "canceled" ? (
                        <div className="flex items-center justify-center font-bold text-red-600 ">
                          Canceled
                        </div>
                      ) : (
                        <div className={`flex items-center justify-center    `}>
                          {delivary?.status === "delivered" ? (
                            "."
                          ) : (
                            <button
                              onClick={() => handleCancel(delivary?._id)}
                              className={`py-2 px-2 bg-violet-500 rounded-md text-sm font-semibold text-gray-100  active:scale-95 ${
                                delivary?.status === "delivered"
                                  ? "cursor-not-allowed"
                                  : "cursor-pointer"
                              }   `}
                              disabled={
                                delivary?.status === "delivered" ? true : false
                              }
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="py-2 px-2 text-center leading-4 border-b border-gray-500">
                      {delivary?.status === "delivered" ? (
                        <div className="flex items-center justify-center font-bold text-green-500 ">
                          delivered
                        </div>
                      ) : (
                        <div className="flex items-center justify-center py-2 ">
                          {delivary?.status === "canceled" ? (
                            "."
                          ) : (
                            <button
                              onClick={() => handleDelivery(delivary?._id)}
                              className={`py-2 px-2 bg-orange-500 rounded-md text-sm font-semibold text-gray-100  active:scale-95 ${
                                delivary?.status === "canceled"
                                  ? "cursor-not-allowed"
                                  : "cursor-pointer"
                              }   `}
                              disabled={
                                delivary?.status === "canceled" ? true : false
                              }
                            >
                              make delivart
                            </button>
                          )}
                        </div>
                      )}
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
      <ToastContainer />
    </div>
  );
};

export default MyDelivery;
