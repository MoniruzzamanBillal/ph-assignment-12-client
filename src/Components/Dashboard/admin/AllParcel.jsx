import React from "react";

const AllParcel = () => {
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
              <tr>
                <td className="  py-2 text-left leading-4    border-b border-gray-500">
                  <div className="flex items-center justify-center ">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">
                        parcel type
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2 text-left leading-4  border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                    requested delivery date
                  </div>
                </td>
                <td className="py-2 text-left leading-4  border-b border-gray-500 ">
                  <div className="flex items-center justify-center">
                    approximate delivary date
                  </div>
                </td>
                <td className="py-2 text-left leading-4  border-b border-gray-500">
                  <div className="flex items-center justify-center">
                    booking date
                  </div>
                </td>
                <td className="py-2 text-left leading-4  border-b border-gray-500">
                  <div className="flex items-center justify-center">
                    delivary man id
                  </div>
                </td>
                <td className="py-2 text-left leading-4  border-b border-gray-500">
                  <div className="flex items-center justify-center">
                    pending ...
                  </div>
                </td>
                <td className="py-2 text-left leading-4 border-b border-gray-500">
                  <div className="flex items-center justify-center">
                    update or cancel
                  </div>
                </td>
              </tr>
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">
                    Damilare Anjorin
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  damilareanjorin1@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  +2348106420637
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative text-xs">not active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  September 12
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">
                    Damilare Anjorin
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  damilareanjorin1@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  +2348106420637
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  September 12
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">
                    Damilare Anjorin
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  damilareanjorin1@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  +2348106420637
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative text-xs">disabled</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  September 12
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
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
    </div>
  );
};

export default AllParcel;
