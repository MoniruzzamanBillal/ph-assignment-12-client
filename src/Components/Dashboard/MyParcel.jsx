import React from "react";

const MyParcel = () => {
  return (
    <div className="MyParcelContainer">
      <div className="myParcelWrapper">
        {/*  */}
        {/*  */}

        {/* <!-- component --> */}

        <div class=" py-2 bg-red-400    ">
          <div class="align-middle  inline-block min-w-full shadow overflow-hidden bg-gray-100 shadow-dashboard px-8 pt-3">
            <table class="min-w-full">
              <thead>
                <tr>
                  {/* parcel type  */}
                  <th class=" text-center px-2 py-2 border-b-2 border-gray-300 leading-4 text-blue-500 ">
                    Parcel type
                  </th>
                  {/* parcel type  */}

                  {/* requested deliveryc date  */}
                  <th class="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Requested delivery date
                  </th>
                  {/* requested deliveryc date  */}

                  {/* approximate delivery date  */}
                  <th class=" text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Approximate delivery date
                  </th>
                  {/* approximate delivery date  */}

                  {/* Booking Date delivery date  */}
                  <th class="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Booking Date
                  </th>
                  {/* Booking Date delivery date  */}

                  {/* Delivery Men ID  */}
                  <th class="text-center px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                    Delivery Men ID
                  </th>
                  {/*Delivery Men ID  */}

                  {/* Booking Status */}
                  <th class="px-2 py-2 border-b-2 border-gray-300  leading-4 text-blue-500 text-center">
                    Booking Status
                  </th>
                  {/*Booking Status  */}

                  {/* Booking Status */}
                  <th class="px-2 py-2 border-b-2 border-gray-300 text-center leading-4 text-blue-500">
                    Action
                  </th>
                  {/*Booking Status  */}
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr>
                  <td class="  py-2 text-left leading-4    border-b border-gray-500">
                    <div class="flex items-center justify-center ">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">
                          parcel type
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="py-2 text-left leading-4  border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900 flex items-center justify-center">
                      requested delivery date
                    </div>
                  </td>
                  <td class="py-2 text-left leading-4  border-b border-gray-500 ">
                    <div className="flex items-center justify-center">
                      approximate delivary date
                    </div>
                  </td>
                  <td class="py-2 text-left leading-4  border-b border-gray-500">
                    <div className="flex items-center justify-center">
                      booking date
                    </div>
                  </td>
                  <td class="py-2 text-left leading-4  border-b border-gray-500">
                    <div className="flex items-center justify-center">
                      delivary man id
                    </div>
                  </td>
                  <td class="py-2 text-left leading-4  border-b border-gray-500">
                    <div className="flex items-center justify-center">
                      pending ...
                    </div>
                  </td>
                  <td class="py-2 text-left leading-4 border-b border-gray-500">
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
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">
                      Damilare Anjorin
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    damilareanjorin1@gmail.com
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    +2348106420637
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative text-xs">not active</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    September 12
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">
                      Damilare Anjorin
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    damilareanjorin1@gmail.com
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    +2348106420637
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative text-xs">active</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    September 12
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">
                      Damilare Anjorin
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    damilareanjorin1@gmail.com
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    +2348106420637
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative text-xs">disabled</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    September 12
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
              <div>
                <p class="text-sm leading-5 text-blue-700">
                  Showing
                  <span class="font-medium">1</span>
                  to
                  <span class="font-medium">200</span>
                  of
                  <span class="font-medium">2000</span>
                  results
                </p>
              </div>
              <div>
                <div class="relative z-0 inline-flex shadow-sm">
                  <div>
                    <a
                      href="#"
                      class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                      aria-label="Previous"
                    >
                      <svg
                        class="h-5 w-5"
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
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                    >
                      3
                    </a>
                  </div>
                  <div v-if="pagination.current_page < pagination.last_page">
                    <a
                      href="#"
                      class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                      aria-label="Next"
                    >
                      <svg
                        class="h-5 w-5"
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

        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default MyParcel;
