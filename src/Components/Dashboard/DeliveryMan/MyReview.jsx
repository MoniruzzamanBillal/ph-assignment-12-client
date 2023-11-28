import React from "react";
import UseRole from "../../../Hooks/UseRole";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAuth from "../../../Hooks/UseAuth";
import Loading from "../../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReview = () => {
  const { loading } = UseAuth();
  const [isAdmin, isAdminLoading] = UseRole();
  const [axiosPublicUrl] = UseAxiosPublic();

  // console.log(isAdmin);

  const loggedInDelivaryManID = isAdmin?.id;

  const { data: myReview, isLoading: reviewLoading } = useQuery({
    queryKey: ["reviewData"],
    queryFn: async () => {
      const reviewResponse = await axiosPublicUrl.get(
        `/reviews/delivaryman/${loggedInDelivaryManID}`
      );
      return reviewResponse.data;
    },
  });

  console.log(myReview);

  if (loading || reviewLoading) {
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
                  Reviewer name
                </th>
                {/* parcel type  */}

                {/* requested deliveryc date  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Reviewer image
                </th>
                {/* requested deliveryc date  */}

                {/* approximate delivery date  */}
                <th className=" text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Review date
                </th>
                {/* approximate delivery date  */}

                {/* Booking Date delivery date  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  rating
                </th>
                {/* Booking Date delivery date  */}

                {/* Delivery Men ID  */}
                <th className="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Feedback
                </th>
                {/*Delivery Men ID  */}

                {/*  */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {myReview &&
                myReview.map((review, ind) => (
                  <tr key={ind}>
                    <td className="  py-2 px-2 text-center leading-4    border-b border-gray-500">
                      <div className="flex items-center justify-center ">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            {review?.userName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                        <img
                          className="w-10 h-10 rounded"
                          src={review?.userImg}
                          alt="Default avatar"
                        />
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500 ">
                      <div className="flex items-center justify-center">
                        {review?.reviewGivingDate}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {review?.rating}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        {review?.feedback}
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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyReview;
