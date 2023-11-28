import React, { useEffect, useState } from "react";
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
import UseParcelCountHook from "../../../Hooks/UseParcelCountHook";

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
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [pacelCount, parcelCountLoading, parcelCountRefetch] =
    UseParcelCountHook();
  const [currentPage, setCurrentPage] = useState(1);
  const [productCount, setProductsCount] = useState(0);
  const [perPageItem, setPerPageItem] = useState(5);
  const Totalpage = Math.ceil(productCount / perPageItem);

  const [parcelsData, setParcelsData] = useState([]);
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
    if (pacelCount?.count) {
      setProductsCount(pacelCount?.count);
    }
  }, [pacelCount]);

  // console.log(delivaryMans);

  // effect for getting parcel data
  useEffect(() => {
    axiosSecure
      .get(`/admin/parcels?page=${currentPage}&pagePerItem=${perPageItem}`)
      .then((dataResponse) => {
        setParcelsData(dataResponse?.data);
      });
  }, [currentPage, perPageItem, user?.email, axiosSecure, status]);

  // console.log(parcelsData);

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

  const handleSearch = () => {
    console.log(fromDate);
    console.log(toDate);
  };

  if (delivaryManloading) {
    return <Loading />;
  }

  // console.log(Allparcel.data);

  return (
    <div>
      <div className=" bg-red-400 w-[95%] m-auto    ">
        <div className=" flex flex-col justify-center items-center h-screen  shadow  bg-gray-50  px-2 pt-3">
          <div className="search  pb-2 ">
            <h1 className="font-semibold text-xl mb-2 ">
              Search requested delivary :{" "}
            </h1>

            {/*  */}
            {/* requested date from  */}
            <div className=" flex justify-center items-center gap-x-2 mb-2 ">
              <label
                htmlFor="delivery_address"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                From
              </label>
              <input
                type="date"
                id="delivery_date"
                name="delivery_date"
                className="text-xs"
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            {/* requested date from  */}
            {/*  */}

            {/*  */}
            {/* requested date to  */}
            <div className=" flex justify-center items-center gap-x-2 mb-2 ">
              <label
                htmlFor="delivery_address"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                To
              </label>
              <input
                type="date"
                id="delivery_date"
                name="delivery_date"
                className="text-xs"
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
            {/* requested date to  */}
            {/*  */}

            {/* search button  */}
            <div className="searchBtn  text-center ">
              <button
                className=" py-2 px-4 bg-gray-400 font-semibold rounded "
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>
            {/* search button  */}
          </div>
          {/*  */}
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
              {parcelsData &&
                parcelsData.map((parcel, ind) => (
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
      <ToastContainer />
    </div>
  );
};

export default AllParcel;
