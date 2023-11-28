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
    axiosSecure
      .get(`/admin/userOnly?page=${currentPage}&pagePerItem=${perPageItem}`)
      .then((dataResponse) => {
        setUserData(dataResponse?.data);
      });
  }, [currentPage, perPageItem, user?.email, axiosPublicUrl, axiosSecure]);

  console.log(userData);

  // console.log(userCount);

  // console.log(users);

  // making user delivary man
  const makeDeliveryMan = (id) => {
    // console.log(" user id in delivary func =  ", id);
    // /delivaryman/user/:id
    axiosPublicUrl.patch(`/delivaryman/user/${id}`).then((response) => {
      console.log(response.data);
      if (response?.data?.acknowledged) {
        makeDelivarymanSuccessFully();

        setTimeout(() => {
          userRefetch();
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
          userRefetch();
        }, 800);
      }
    });
  };

  // console.log(users);

  return (
    <div>
      <div className=" bg-red-400 w-[95%] m-auto    ">
        <div className=" flex flex-col justify-center items-center h-screen  shadow  bg-gray-50  px-2 pt-3">
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
                        requested delivery date
                      </div>
                    </td>
                    <td className="py-2 px-2  text-left leading-4  border-b border-gray-500 ">
                      <div className="flex items-center justify-center">
                        approximate delivary date
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
    </div>
  );
};

export default AllUsers;
