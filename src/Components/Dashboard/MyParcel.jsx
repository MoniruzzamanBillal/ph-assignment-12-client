import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAuth from "../../Hooks/UseAuth";
import Loading from "../Loading/Loading";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseParcelCountHook from "../../Hooks/UseParcelCountHook";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

import {
  cancelSuccessFully,
  paymentSuccessFully,
  reviewSuccessFully,
} from "../../ToastFunc/ToastFunction";
import { Helmet } from "react-helmet";

const MyParcel = () => {
  const navigate = useNavigate();
  const [axiosPublicUrl] = UseAxiosPublic();
  const [axiosSecure] = UseAxiosSecure();
  const { user } = UseAuth();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  // parcel count hook
  const [pacelCount, parcelCountLoading, parcelCountRefetch] =
    UseParcelCountHook();
  // parcel count hook

  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [rating, setRating] = useState(null);
  const [feedback, setFeedBack] = useState("");
  const [productCount, setProductsCount] = useState(0);
  const [perPageItem, setPerPageItem] = useState(5);
  const Totalpage = Math.ceil(productCount / perPageItem);
  const [userData, setuserData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  console.log(userData);

  const pages = [...Array(Totalpage).keys()];

  const handleUpdate = (id) => {
    console.log("id on update = ", id);

    navigate(`/dashboard/updateparcel/${id}`);
  };

  // review functionality
  const handleReview = (data) => {
    setOpenModal(true);
    console.log("review click");
    setSelectedData(data);
  };

  // console.log(selectedData);

  // submit review
  const submitReview = () => {
    console.log("review submit click");
    // console.log(selectedData);

    const userName = selectedData?.userName;
    const userImg = selectedData?.userImg;
    const delivartManId = selectedData?.delivartManId;
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const reviewGivingDate = `${date}-${month}-${year}`;

    // console.log(reviewGivingDate);

    const reviewData = {
      userName,
      userImg,
      rating,
      feedback,
      delivartManId,
      reviewGivingDate,
    };

    // console.log(reviewData);
    axiosPublicUrl.post("/review", reviewData).then((reviewResponse) => {
      console.log(reviewResponse.data);

      if (reviewResponse?.data?.acknowledged) {
        axiosPublicUrl
          .patch(`/averagerating/rating/${delivartManId}`)
          .then((ratingResponse) => {
            console.log(ratingResponse.data);
          })
          .catch((error) => console.log(error));
        reviewSuccessFully();
        setOpenModal(false);
      }
    });
  };

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  // cancel parcel data
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcel/delete/${id}`).then((deleteResponse) => {
          console.log(deleteResponse?.data);
          if (deleteResponse?.data?.deletedCount > 0) {
            cancelSuccessFully();
            fetchParcelData();
          }
        });
      }
    });
  };

  const handlePay = () => {
    paymentSuccessFully();
  };

  const handlePageClick = (page) => {
    console.log("page without mod = ", page);
    setCurrentPage(page + 1);
    console.log("current page = ", currentPage);
  };

  // function for handle previous button in pagination
  const handlePrev = () => {
    if (currentPage <= 1) {
      console.log("previous page = ", currentPage);
      return setCurrentPage(1);
    }
    setCurrentPage(currentPage - 1);

    console.log("previous page = ", currentPage);
  };

  // function for handle next button in pagination
  const handleNextCurrent = () => {
    if (currentPage >= Totalpage) {
      console.log("next page = ", currentPage);
      return setCurrentPage(Totalpage);
    }
    setCurrentPage(currentPage + 1);

    // console.log(currentPage);
    console.log("next page = ", currentPage);
  };

  // console.log(status);

  useEffect(() => {
    if (pacelCount?.count) {
      setProductsCount(pacelCount?.count);
    }
  }, [pacelCount]);

  //
  useEffect(() => {
    fetchParcelData();
  }, [currentPage, perPageItem, user?.email, axiosSecure, status]);

  // get parcel data
  const fetchParcelData = () => {
    axiosSecure
      .get(
        `/parcels?email=${user?.email}&page=${currentPage}&pagePerItem=${perPageItem}&status=${status}`
      )
      .then((dataResponse) => {
        // console.log(dataResponse?.data);
        setuserData(dataResponse?.data);
      });
  };

  return (
    <div className="MyParcelContainer">
      <Helmet>
        <title>my parcel</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="myParcelWrapper">
        {/*  */}
        {/*  */}

        {/* <!-- component --> */}

        <div className=" bg-red-400    ">
          {/* <div className="align-middle  inline-block min-w-full shadow overflow-hidden bg-gray-600 shadow-dashboard px-8 pt-3"> */}
          <div className=" flex flex-col justify-center items-center shadow  bg-gray-50  px-2 pt-3">
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
                    {/* booking status  */}
                    <div>
                      <select
                        id="category"
                        onChange={(e) => setStatus(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      >
                        <option value="null">Status</option>
                        <option value="on the way">on the way</option>
                        <option value="delivered">delivered</option>
                        <option value="canceled">canceled</option>
                      </select>
                    </div>
                    {/* booking status  */}
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

                  {/* pay button  */}
                  <th className="px-2 py-2 border-b-2 border-gray-300 text-center leading-4 text-blue-500">
                    Pay
                  </th>
                  {/* pay button  */}
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
                          {data?.approximateDelivery
                            ? data?.approximateDelivery
                            : ".."}
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
                            <button
                              className="bg-green-500 py-1.5 px-2 font-bold rounded-md text-gray-200 text-xs"
                              onClick={() => handleReview(data)}
                            >
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
                      {/* modal  */}
                      {/* modal  */}
                      <Modal
                        show={openModal}
                        size="md"
                        onClose={onCloseModal}
                        popup
                      >
                        <Modal.Header />
                        <Modal.Body>
                          <div className="space-y-6">
                            {/* user name field  */}
                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="userName" value="User name" />
                              </div>
                              <TextInput
                                id="userName"
                                readOnly
                                placeholder="username"
                                value={selectedData?.userName}
                                required
                              />
                            </div>
                            {/* user name field  */}

                            {/* user image field  */}
                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="userImage" value="User image" />
                              </div>
                              <img
                                className="w-10 h-10 rounded"
                                src={selectedData?.userImg}
                                alt="Default avatar"
                              />
                            </div>
                            {/* user image field  */}

                            {/* rating field  */}

                            <div>
                              <div className="mb-2 block">
                                <Label
                                  htmlFor="rating"
                                  value="Give rating between 1-5 "
                                />
                              </div>
                              <TextInput
                                id="rating"
                                type="number"
                                required
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                onWheel={(e) => e.target.blur()}
                              />
                            </div>

                            {/* rating field  */}

                            {/* feedback field  */}
                            <div>
                              <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your message
                              </label>
                              <textarea
                                id="message"
                                rows="3"
                                value={feedback}
                                onChange={(e) => setFeedBack(e.target.value)}
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Leave a comment..."
                              ></textarea>
                            </div>
                            {/* feedback field  */}

                            {/* delivary man id  */}

                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="id" value="Delivary man id " />
                              </div>
                              {/*  */}

                              <TextInput
                                id="delivaryMan"
                                readOnly
                                placeholder="delivary man id "
                                value={selectedData?.delivartManId}
                                required
                              />

                              {/*  */}
                            </div>

                            {/* delivary man id  */}

                            <div className="w-full">
                              <Button onClick={() => submitReview()}>
                                Submit review
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                      {/* modal  */}
                      {/* modal  */}

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

                      {/* payment button  */}
                      <td className="py-2 px-2 text-center leading-4 border-b border-gray-500">
                        <div className="flex items-center justify-center">
                          <button
                            className="bg-green-500 py-1.5 px-2 font-bold rounded-md text-gray-200 text-xs"
                            onClick={() => handlePay()}
                          >
                            Pay
                          </button>
                        </div>
                      </td>
                      {/* payment button  */}
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
              {/*  */}
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
