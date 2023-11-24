import React from "react";

const HomeBanner = () => {
  return (
    <div className="homeBannerContainer  ">
      <div className="homeBannerWraper">
        <section className="bg-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/NszxzGz/banner-2.jpg')] bg-gray-500 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 xsm:py-32 sm:py-36 md:py-40  xmd:py-48 lg:py-52 bg-lime-2000 ">
            <h1 className="mb-4 text-xl font-extrabold tracking-tight  text-white md:text-2xl lg:text-3xl">
              Track, Manage, and Receive: Your Parcel Solution Awaits!
            </h1>

            <div className="flex  space-y-4 sm:flex-row sm:justify-center sm:space-y-0   ">
              {/* form container  */}

              <div className=" w-[85%] xsm:w-[68%] sm:w-[58%] md:w-[52%] xmd:w-[45%] lg:w-[38%] m-auto  ">
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500"
                    placeholder="Search ...."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700  "
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* form container  */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeBanner;
