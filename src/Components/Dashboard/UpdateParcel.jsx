import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAuth from "../../Hooks/UseAuth";
import {
  inputFieldError,
  updatedSuccessFully,
} from "../../ToastFunc/ToastFunction";

const UpdateParcel = () => {
  const { id } = useParams();
  const { user, loading } = UseAuth();
  const [axiosPublicUrl] = UseAxiosPublic();
  const date2 = new Date();
  const orderDate = date2.getDate();
  const orderMonth = date2.getMonth() + 1;
  const orderYear = date2.getFullYear();

  // !  states

  const [phoneNumber, setPhoneNumber] = useState("");
  const [parcelType, setParcelType] = useState("");
  const [parcelWeight, setParcelWeigt] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhoneNumber, setReceiverNumber] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongtide] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [parcelCharge, setParcelCharge] = useState("");
  const [status, setStatus] = useState("pending");

  const userName = user?.displayName;
  const userEmail = user?.email;
  const uid = user?.uid;
  // !  states

  useEffect(() => {
    axiosPublicUrl
      .get(`/parcel/${id}`)
      .then((response) => {
        const result = response?.data;
        console.log(result);

        setPhoneNumber(response?.data?.phoneNumber);
        setParcelType(response?.data?.parcelType);
        setParcelWeigt(response?.data?.parcelWeight);
        setReceiverName(response?.data?.receiverName);
        setReceiverNumber(response?.data?.receiverPhoneNumber);
        const formatDate = response?.data?.requestedDate;
        const scatterDate = formatDate.split("-");

        const unformatDate = `${scatterDate[2]}-${scatterDate[1]}-${scatterDate[0]}`;
        // console.log(unformatDate);
        setDeliveryDate(unformatDate);
        setLatitude(response?.data?.latitude);
        setLongtide(response?.data?.longitude);
        setDeliveryAddress(response?.data?.deliveryAddress);
        setParcelCharge(response?.data?.parcelCharge);
        setStatus(response?.data?.status);
      })
      .catch((error) => console.log(error));
  }, []);

  //   update function
  const handleUpdate = async () => {
    console.log("update click");
    // console.log(deliveryDate);

    if (
      !userName.trim() ||
      !userEmail.trim() ||
      !phoneNumber.toString().trim() ||
      !parcelType.trim() ||
      !parcelWeight.toString().trim() ||
      !receiverName.trim() ||
      !receiverPhoneNumber.trim() ||
      !deliveryDate.trim() ||
      !latitude.trim() ||
      !longitude.trim() ||
      !deliveryAddress.trim() ||
      !parcelCharge.toString().trim() ||
      !status.trim()
    ) {
      return inputFieldError();
    }

    const partDate = deliveryDate.split("-");

    const requestedDate = `${partDate[2]}-${partDate[1]}-${partDate[0]}`;
    const bookingDate = `${orderDate}-${orderMonth}-${orderYear}`;

    const parcelObj = {
      userName,
      userEmail,
      phoneNumber,
      parcelType,
      parcelWeight,
      receiverName,
      receiverPhoneNumber,
      requestedDate,
      latitude,
      longitude,
      deliveryAddress,
      parcelCharge,
      status,
      uid,
      bookingDate,
    };

    const updateResponse = await axiosPublicUrl.patch(
      `/parcel/${id}`,
      parcelObj
    );

    console.log(updateResponse?.data);
    if (updateResponse?.data?.acknowledged) {
      updatedSuccessFully();
    }

    // console.log("--------------------------");
    // console.log(parcelObj);
    // console.log("--------------------------");

    // console.log(requestedDate);
    // console.log(bookingDate);

    //
  };

  // calculating parcel charge function
  const calculateCharge = (e) => {
    const weight = parseFloat(e.target.value);

    setParcelWeigt(weight);

    if (weight > 0 && weight <= 1) {
      setParcelCharge(50);
    } else if (weight > 1 && weight <= 2) {
      setParcelCharge(100);
    } else {
      setParcelCharge(150);
    }
  };

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
              value={userName}
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
              value={userEmail}
              readOnly
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
              type="number"
              name="user_number"
              id="user_number"
              onWheel={(e) => e.target.blur()}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              value={parcelType}
              onChange={(e) => setParcelType(e.target.value)}
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
              Parcel weight (in kg)
            </label>
            <input
              onWheel={(e) => e.target.blur()}
              name="parcel_weight"
              type="number"
              id="parcel_weight"
              value={parcelWeight}
              onChange={(e) => calculateCharge(e)}
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
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
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
              type="number"
              onWheel={(e) => e.target.blur()}
              name="receiver_number"
              id="receiver_number"
              value={receiverPhoneNumber}
              onChange={(e) => setReceiverNumber(e.target.value)}
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
            <input
              type="date"
              id="delivery_date"
              name="delivery_date"
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
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
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
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
              value={longitude}
              onChange={(e) => setLongtide(e.target.value)}
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
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Delivery address"
            ></textarea>
          </div>

          {/* parcel delivery address  */}

          {/* parcel charger  */}
          <div className="w-full">
            <label
              htmlFor="parcel_charge"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Parcel charge
            </label>
            <input
              type="text"
              name="parcel_charge"
              id="parcel_charge"
              value={parcelCharge}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Parcel charge"
              required=""
              readOnly
            />
          </div>
          {/* parcel charger  */}

          {/*  */}
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-violet-800"
          onClick={() => handleUpdate()}
        >
          Update
        </button>
      </div>
      {/* form  */}
      <ToastContainer />
    </div>
  );
};

export default UpdateParcel;
