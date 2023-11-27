import React from "react";
import UseDelivaryMan from "../../../Hooks/UseDelivaryMan";
import Loading from "../../Loading/Loading";

const AllDeliveryMan = () => {
  const [delivaryMans, delivaryManloading] = UseDelivaryMan();

  console.log(delivaryMans);

  if (delivaryManloading) {
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
                <th className=" text-center px-3 py-2 border-b-2 border-gray-300 leading-4 text-blue-500 ">
                  Name
                </th>
                {/* parcel type  */}

                {/* requested deliveryc date  */}
                <th className="text-center px-3 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Phone number
                </th>
                {/* requested deliveryc date  */}

                {/* approximate delivery date  */}
                <th className=" text-center px-3 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Total parcel delivered
                </th>
                {/* approximate delivery date  */}

                {/* Booking Date delivery date  */}
                <th className="text-center px-3 py-2 border-b-2 border-gray-300  leading-4 text-blue-500">
                  Average review
                </th>
                {/* Booking Date delivery date  */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {delivaryMans &&
                delivaryMans.map((delivaryman, ind) => (
                  <tr>
                    {/*  */}
                    <td className="  py-2 px-3 text-left leading-4    border-b border-gray-500">
                      <div className="flex items-center justify-center ">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            {delivaryman?.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  */}
                    {/*  */}
                    <td className="py-2 px-3 text-left leading-4  border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900 flex items-center justify-center">
                        phone number
                      </div>
                    </td>
                    {/*  */}
                    {/*  */}
                    <td className="py-2 px-3 text-left leading-4  border-b border-gray-500 ">
                      <div className="flex items-center justify-center">50</div>
                    </td>
                    {/*  */}
                    {/*  */}
                    <td className="py-2 px-3 text-left leading-4  border-b border-gray-500">
                      <div className="flex items-center justify-center">4</div>
                    </td>
                    {/*  */}
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

export default AllDeliveryMan;
