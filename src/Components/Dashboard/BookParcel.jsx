import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import InputField from "../InputField";
import UseAxios from "../../Hooks/UseAxios";

const BookParcel = () => {
  const navigate = useNavigate();
  const { user } = UseAuth();
  const [axiosUrl] = UseAxios();

  return (
    <div className=" py-4 relative mainContiner flex flex-col  w-full items-center justify-center  bg-no-repeat bg-cover bg-center ">
      <h1 className="   robotoFont font-semibold text-4xl mb-4 text-[#e4c590]  ">
        Book your parcel
      </h1>

      {/* sepoerator image  */}

      <div className="seperatorImg  w-[10rem] flex justify-center items-center mb-6 ">
        <img
          src="https://i.ibb.co/pr3Ryq7/separator.png"
          className="  w-full h-full "
          alt=""
        />
      </div>
      {/* sepoerator image  */}

      {/* form  */}
      <div className="formContainer w-[85%] rounded bg-gray-200 bg-opacity-60  shadow-lg backdrop-blur px-4 py-5 sm:px-5 sm:py-7 md:px-6 md:py-8 ">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-6">
          {/* user name  name  */}
          <div className="w-full">
            <label
              htmlFor="user_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              User name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              // value={foodName}
              // onChange={(e) => setfoodName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="User name"
              required=""
              readOnly
            />
          </div>
          {/* user name  */}

          {/* user email   */}
          <div className="w-full">
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              User email
            </label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              // value={foodImage}
              // onChange={(e) => setfoodImage(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="user email"
              required=""
            />
          </div>
          {/* user email   */}

          {/* user phone number   */}

          <div className="w-full">
            <label
              htmlFor="user_number"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone number
            </label>
            <input
              type="text"
              name="user_number"
              id="user_number"
              // value={foodOrigin}
              // onChange={(e) => setfoodOrigin(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter phone number"
              required=""
            />
          </div>

          {/* user phone number   */}

          {/* parcel type  */}
          <div className="w-full">
            <label
              htmlFor="parcel_type"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Parcel type
            </label>
            <input
              type="text"
              name="parcel_type"
              id="parcel_type"
              // value={foodOrigin}
              // onChange={(e) => setfoodOrigin(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Parcel type"
              required=""
            />
          </div>

          {/* parcel type  */}

          {/* parcel weight in number  */}
          <div className="w-full">
            <label
              htmlFor="parcel_weight"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Parcel weight
            </label>
            <input
              onWheel={(e) => e.target.blur()}
              name="parcel_weight"
              type="number"
              id="parcel_weight"
              // value={price}
              // onChange={(e) => setprice(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm remove-arrow rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter weight"
              required=""
            />
          </div>
          {/* parcel weight in number  */}

          {/* receiver name  */}
          <div className="w-full">
            <label
              htmlFor="receiver_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Receiver name
            </label>
            <input
              type="text"
              name="receiver_name"
              id="receiver_name"
              // value={foodName}
              // onChange={(e) => setfoodName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="receiver name"
              required=""
            />
          </div>
          {/* receiver name  */}

          {/* receiver phone number  */}

          <div className="w-full">
            <label
              htmlFor="receiver_number"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Receiver Phone number
            </label>
            <input
              type="text"
              name="receiver_number"
              id="receiver_number"
              // value={foodOrigin}
              // onChange={(e) => setfoodOrigin(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Receiver phone number"
              required=""
            />
          </div>

          {/* receiver phone number  */}

          {/* parcel delivery date  */}

          <div className="  ">
            <label
              htmlFor="delivery_address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Delivery date
            </label>
            <input type="date" id="delivery_date" name="delivery_date" />
          </div>

          {/* parcel delivery date  */}

          {/* delivery address latitude  */}

          <div className="w-full">
            <label
              htmlFor="address_latitude"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address latitude
            </label>
            <input
              type="text"
              name="address_latitude"
              id="address_latitude"
              // value={foodOrigin}
              // onChange={(e) => setfoodOrigin(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Address latitude"
              required=""
            />
          </div>

          {/* delivery address latitude  */}

          {/* delivery address longitude  */}

          <div className="w-full">
            <label
              htmlFor="address_longitude"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address longitude
            </label>
            <input
              type="text"
              name="address_longitude"
              id="address_longitude"
              // value={foodOrigin}
              // onChange={(e) => setfoodOrigin(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Address longitude"
              required=""
            />
          </div>

          {/* delivery address longitude  */}

          {/* parcel delivery address  */}

          <div className="deviveryAddress">
            <label
              htmlFor="delivery_address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Delivery address
            </label>
            <textarea
              id="delivery_address"
              rows="3"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Delivery address"
            ></textarea>
          </div>

          {/* parcel delivery address  */}

          {/*  */}
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-violet-800"
          //   onClick={() => handleSubmit()}
        >
          Book now
        </button>
      </div>
      {/* form  */}
      <ToastContainer />
    </div>
  );
};

export default BookParcel;
