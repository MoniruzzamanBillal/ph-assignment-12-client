// importing libraries:
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

// importing icons:

import { BsGraphUpArrow } from "react-icons/bs";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiProfileFill } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import UseAuth from "../../Hooks/UseAuth";
import Loading from "../../Components/Loading/Loading";
import { IoStatsChart } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa6";
import UseRole from "../../Hooks/UseRole";
import { Helmet } from "react-helmet";

// global variables:

const adminMenu = [
  {
    title: "Statistics",
    path: "/dashboard/statistics",
    icon: <IoStatsChart />,
  },
  {
    title: "All parcel",
    path: "/dashboard/parcels",
    icon: <CiBookmarkCheck />,
  },
  {
    title: "All users",
    path: "/dashboard/users",
    icon: <FaUsers />,
  },
  {
    title: "All delivery man",
    path: "/dashboard/deliverymans",
    icon: <FaUserAstronaut />,
  },
];

// users menu
const userMenu = [
  {
    title: "Book parcel",
    path: "/dashboard/bookparcel",
    icon: <CiBookmarkCheck />,
  },
  {
    title: "My parcels",
    path: "/dashboard/myparcel",
    icon: <FaBoxOpen />,
  },
  {
    title: "My profile",
    path: "/dashboard/myprofile",
    icon: <RiProfileFill />,
  },
];

// delivery man menu
const deliveryManMenu = [
  {
    title: "My delivery",
    path: "/dashboard/mydelivery",
    icon: <BsGraphUpArrow />,
  },
  {
    title: "My review",
    path: "/dashboard/myreview",

    icon: <BsGraphUpArrow />,
  },
];

const Dashboard = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { user, loading } = UseAuth();
  const [isAdmin, isAdminLoading] = UseRole();

  if (loading || isAdminLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex justify-end">
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {/* sidebar container starts  */}
      <div
        className={`fixed top-0 ${
          isSidebarActive ? "left-[0%]" : "left-[-100%]"
        } z-20 SideBarContainer md:left-0 duration-200`}
      >
        <div className="flex">
          <div className="relative w-64 h-screen p-5 pt-5 duration-300 bg-gray-600 mainContainer sm:w-64">
            {/* top account container starts */}
            <div className="topContainer AccountContainer mb-2 ">
              <div className="flex items-center space-x-4 ">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
                  src={`${user?.photoURL}`}
                  alt="Bordered avatar"
                />

                <div className=" font-medium dark:text-white sm:block">
                  <div>{user?.displayName} </div>
                </div>
              </div>
            </div>

            {/* top account container ends */}

            {/* bottom list items start  */}

            <Link
              to={"/"}
              className={`flex rounded-md mt-10 py-3 px-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
            >
              <div className="icon text-lg">
                {" "}
                <IoIosHome />{" "}
              </div>
              <h1 className={` gap-1  origin-left duration-200 w-full `}>
                Home
              </h1>
            </Link>

            <div className="sidebarList mt-2  ">
              {/*  */}
              {/*  */}
              {/* admin menu  */}

              {isAdmin?.role === "admin" &&
                adminMenu.map((ele, ind) => (
                  <NavLink
                    to={ele.path}
                    key={ind}
                    className={`flex rounded-md py-3 px-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
                  >
                    <div className="icon text-lg">{ele.icon}</div>
                    <h1 className={` gap-1  origin-left duration-200 w-full `}>
                      {ele.title}
                    </h1>
                  </NavLink>
                ))}

              {/* admin menu  */}
              {/*  */}

              {/* normal user side links  */}

              {isAdmin?.role === "user" &&
                userMenu.map((ele, ind) => (
                  <NavLink
                    to={ele.path}
                    key={ind}
                    className={`flex rounded-md py-3 px-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
                  >
                    <div className="icon text-lg">{ele.icon}</div>
                    <h1 className={` gap-1  origin-left duration-200 w-full `}>
                      {ele.title}
                    </h1>
                  </NavLink>
                ))}

              {/* normal user side links ends  */}
              {/*  */}
              {/*  */}

              {/* delivary man menu  */}

              {isAdmin?.role === "deliveryman" &&
                deliveryManMenu.map((ele, ind) => (
                  <NavLink
                    to={ele.path}
                    key={ind}
                    className={`flex rounded-md py-3 px-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
                  >
                    <div className="icon text-lg">{ele.icon}</div>
                    <h1 className={` gap-1  origin-left duration-200 w-full `}>
                      {ele.title}
                    </h1>
                  </NavLink>
                ))}

              {/* delivary man menu  */}

              {/*  */}
            </div>

            {/* bottom list items end  */}

            {/* bottom list items end  */}
          </div>
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* hamburger menu */}
      {/* hamburger menu */}
      <div
        onClick={() => setIsSidebarActive(!isSidebarActive)}
        className="fixed bottom-[20px] h-[50px] right-[20px] md:hidden flex flex-col justify-center gap-2 bg-gray-500 p-2 rounded cursor-pointer z-[20] "
      >
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "-rotate-45 translate-y-[13px]" : ""
          }`}
        ></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "rotate-45 translate-y-[-13px]" : ""
          }`}
        ></div>
      </div>
      {/* hamburger emnu ends  */}
      {/* hamburger emnu ends  */}

      <div className="w-[100%] md:w-[calc(100%-16rem)]  bg-slate-400">
        <Outlet />
      </div>
      {/* sidebar child components ends */}
      {/* child components starts ends */}
    </section>
  );
};

export default Dashboard;
