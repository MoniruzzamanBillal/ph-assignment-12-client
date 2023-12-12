import React, { useEffect, useState } from "react";
import UseUser from "../../../Hooks/UseUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Loading/Loading";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import {
  makeAdminSuccessFully,
  makeDelivarymanSuccessFully,
} from "../../../ToastFunc/ToastFunction";
import UserCountHook from "../../../Hooks/UserCountHook";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Helmet } from "react-helmet";
import { AnimatePresence, motion } from "framer-motion";

const AllUsers = () => {
  const { user } = UseAuth();
  const [users, userLoading, userRefetch] = UseUser();
  const [axiosPublicUrl] = UseAxiosPublic();
  const [axiosSecure] = UseAxiosSecure();
  const [userCount, userCountLoading, userCountRefetch] = UserCountHook();

  const [currentPage, setCurrentPage] = useState(1);
  const [productCount, setProductsCount] = useState(0);
  const [perPageItem, setPerPageItem] = useState(5);
  const Totalpage = Math.ceil(productCount / perPageItem);

  const [userData, setUserData] = useState([]);
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
    if (userCount?.count) {
      setProductsCount(userCount?.count);
    }
  }, [userCount]);

  // effect for getting user data
  useEffect(() => {
    getAllUsers();
  }, [currentPage, perPageItem, user?.email, axiosPublicUrl, axiosSecure]);

  const getAllUsers = () => {
    axiosSecure
      .get(`/admin/userOnly?page=${currentPage}&pagePerItem=${perPageItem}`)
      .then((dataResponse) => {
        setUserData(dataResponse?.data);
      });
  };

  console.log(userData);

  // making user delivary man
  const makeDeliveryMan = (id) => {
    axiosPublicUrl.patch(`/delivaryman/user/${id}`).then((response) => {
      console.log(response.data);
      if (response?.data?.acknowledged) {
        makeDelivarymanSuccessFully();

        setTimeout(() => {
          getAllUsers();
        }, 800);
      }
    });
  };

  // make admin function
  const makeAdmin = (id) => {
    console.log(" user id in admin func =  ", id);
    // /delivaryman/user/:id
    axiosPublicUrl.patch(`/admin/user/${id}`).then((response) => {
      console.log(response.data);
      if (response?.data?.acknowledged) {
        makeAdminSuccessFully();

        setTimeout(() => {
          getAllUsers();
        }, 800);
      }
    });
  };

  // console.log(users);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "-1000" }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "1000",
          transition: {
            duration: 0.2,
          },
        }}
        transition={{ duration: 1 }}
      >
        <Helmet>
          <title>All Users</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className=" bg-red-400 w-[95%] m-auto   ">
          <div className=" flex flex-col justify-center items-center h-screen  shadow   bg-gray-50  px-2 pt-3">
            <table className=" ">
              <thead>
                <tr>
                  {/* parcel type  */}
                  <th className=" text-center px-2 py-2 border-b-2 border-gray-300 leading-4 text-blue-500 ">
                    User name
                  </th>
                  {/* parcel type  */}

                  {/* requested deliveryc date  */}
                  <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Phone numbere
                  </th>
                  {/* requested deliveryc date  */}

                  {/* approximate delivery date  */}
                  <th className=" text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Number of parcel booked
                  </th>
                  {/* approximate delivery date  */}

                  {/* Booking Date delivery date  */}
                  <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Make delivery man
                  </th>
                  {/* Booking Date delivery date  */}

                  {/* Delivery Men ID  */}
                  <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Make admin
                  </th>
                  {/*Delivery Men ID  */}
                </tr>
              </thead>
              <tbody className="bg-white">
                {userData &&
                  userData.map((user, ind) => (
                    <tr key={ind}>
                      <td className="  py-2 px-2 text-left leading-4    border-b border-gray-500">
                        <div className="flex items-center justify-center ">
                          <div>
                            <div className="text-sm leading-5 text-gray-800">
                              {user?.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-2  text-left leading-4  border-b border-gray-500">
                        <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                          {user?.phoneNumber}
                        </div>
                      </td>
                      <td className="py-2 px-2  text-left leading-4  border-b border-gray-500 ">
                        <div className="flex items-center justify-center">
                          {user?.parcelBook ? user?.parcelBook : "0"}
                        </div>
                      </td>
                      <td className="py-2 px-2 text-left leading-4  border-b border-gray-500">
                        <div
                          className="flex items-center justify-center bg-violet-500 py-2 rounded-md text-sm font-semibold cursor-pointer active:scale-95 "
                          onClick={() => makeDeliveryMan(user?._id)}
                        >
                          Make delivery man
                        </div>
                      </td>
                      <td className="py-2 px-2  text-left leading-4  border-b border-gray-500">
                        <div
                          className="flex items-center justify-center bg-green-500 py-2 rounded-md text-sm font-semibold  cursor-pointer active:scale-95 "
                          onClick={() => makeAdmin(user?._id)}
                        >
                          Make Admin
                        </div>
                      </td>
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
          </div>
        </div>
        <ToastContainer />
      </motion.div>
    </AnimatePresence>
  );
};

export default AllUsers;
