import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import UseDelivaryMan from "../../../Hooks/UseDelivaryMan";
import { dataAddedSuccessFully } from "../../../ToastFunc/ToastFunction";

const AllParcel = () => {
  const navigate = useNavigate();
  const [axiosPublicUrl] = UseAxiosPublic();
  const [axiosSecure] = UseAxiosSecure();
  const { user } = UseAuth();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [delivaryMans, delivaryManloading] = UseDelivaryMan();
  const [manageID, setManageId] = useState(null);
  const [delivartManId, setDeliveryManId] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [status, setStatus] = useState("on the way");

  // console.log(delivaryMans);

  const {
    data: Allparcel,
    isLoading: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ["allParcel"],
    queryFn: async () => {
      return axiosSecure.get(`/parcels`);
      // return axiosPublicUrl.get(`/parcels`);
    },
  });

  const handleManage = (id) => {
    setManageId(id);
    setOpenModal(true);
  };

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  // submit functionality of modal
  const handleSubmit = () => {
    const parcelID = manageID;
    const partDate = deliveryDate.split("-");

    const approximateDelivery = `${partDate[2]}-${partDate[1]}-${partDate[0]}`;

    const additionalData = {
      delivartManId,
      approximateDelivery,
      status,
    };

    axiosPublicUrl
      .patch(`/parcel/${parcelID}`, additionalData)
      .then((response) => {
        // console.log(response?.data);
        if (response?.data?.acknowledged) {
          refetch();
          dataAddedSuccessFully();
          onCloseModal();
        }
      })
      .catch((error) => console.log(error));
  };

  if (dataLoading || delivaryManloading) {
    return <Loading />;
  }

  // console.log(Allparcel.data);

  return (
    <div>
      <div className=" bg-red-400 w-[95%] m-auto    ">
        <div className=" flex flex-col justify-center items-center h-screen  shadow  bg-gray-50  px-2 pt-3">
          <table className=" ">
            <thead>
              <tr>
                {/* parcel type  */}
                <th className=" text-center px-2 py-2 border-b-2 border-gray-300 leading-4 text-blue-500 ">
                  Booked by
                </th>
                {/* parcel type  */}

                {/* requested deliveryc date  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  User image
                </th>
                {/* requested deliveryc date  */}

                {/* approximate delivery date  */}
                <th className=" text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Booking Date
                </th>
                {/* approximate delivery date  */}

                {/* Booking Date delivery date  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Requested Delivery Date
                </th>
                {/* Booking Date delivery date  */}

                {/* Delivery Men ID  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Cost
                </th>
                {/*Delivery Men ID  */}

                {/* Booking Status */}
                <th className="px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500 text-center">
                  Booking Status
                </th>
                {/*Booking Status  */}

                {/* Booking Status */}
                <th className="px-2 py-2 border-b-2 border-gray-300 text-center leading-4 text-blue-500">
                  Manage
                </th>
                {/*Booking Status  */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {Allparcel?.data &&
                Allparcel?.data.map((parcel, ind) => (
                  <tr key={ind}>
                    <td className="  py-2 text-left leading-4    border-b border-gray-500">
                      <div className="flex items-center justify-center ">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            {parcel?.parcelType}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 text-center leading-4  border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                        User image
                      </div>
                    </td>
                    <td className="py-2 text-center leading-4  border-b border-gray-500 ">
                      <div className="flex items-center justify-center">
                        {parcel?.bookingDate}
                      </div>
                    </td>
                    <td className="py-2 text-center leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {parcel?.requestedDate}
                      </div>
                    </td>
                    <td className="py-2 text-center leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {parcel?.parcelCharge}
                      </div>
                    </td>
                    <td className="py-2 text-center leading-4  border-b border-gray-500">
                      <div
                        className={`flex items-center justify-center font-bold  ${
                          parcel?.status === "delivered"
                            ? "text-green-500"
                            : parcel?.status === "canceled"
                            ? "text-red-600"
                            : "text-yellow-400"
                        }  `}
                      >
                        {parcel?.status}
                      </div>
                    </td>
                    <td className="py-2 text-center leading-4 border-b border-gray-500">
                      <div
                        className="flex items-center justify-center text-gray-700 cursor-pointer bg-blue-300 py-1.5 rounded active:scale-95 "
                        onClick={() => handleManage(parcel?._id)}
                      >
                        Manage
                      </div>
                      <Modal
                        show={openModal}
                        size="md"
                        onClose={onCloseModal}
                        popup
                      >
                        <Modal.Header />
                        <Modal.Body>
                          <div className="space-y-6">
                            <div>
                              <div className="mb-2 block">
                                <Label
                                  htmlFor="deliveryman"
                                  value="Select delivery man"
                                />
                              </div>
                              {/*  */}
                              {/*  */}
                              <select
                                id="deliveryman"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                onChange={(e) =>
                                  setDeliveryManId(e.target.value)
                                }
                              >
                                <option>select delivary man</option>
                                {delivaryMans &&
                                  delivaryMans.map((delivaryman, ind) => (
                                    <option key={ind} value={delivaryman?._id}>
                                      {delivaryman?.name}
                                    </option>
                                  ))}
                              </select>
                              {/*  */}
                              {/*  */}
                            </div>
                            <div>
                              <div className="mb-2 block">
                                <Label
                                  htmlFor="date"
                                  value="Approximate delivery date"
                                />
                              </div>
                              <input
                                type="date"
                                name=""
                                id="date"
                                onChange={(e) =>
                                  setDeliveryDate(e.target.value)
                                }
                              />
                            </div>

                            <div className="mb-2 block">
                              <Label
                                htmlFor="status"
                                value="delivery status : "
                              />

                              <input
                                type="text"
                                name=""
                                id="status"
                                value={status}
                                readOnly
                                className="border-none outline-none focus:outline-none "
                              />
                            </div>

                            <div className="w-full">
                              <Button onClick={() => handleSubmit()}>
                                Submit
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>
                ))}

              {/* modal  */}
              {/* modal  */}

              {/* modal  */}
              {/* modal  */}

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

export default AllParcel;
