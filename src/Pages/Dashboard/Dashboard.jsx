// importing libraries:
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// importing icons:
import { ImBook } from "react-icons/im";
import { BsCash, BsGraphUpArrow } from "react-icons/bs";
import { FaPiggyBank, FaBoxOpen } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { AiFillCreditCard, AiOutlineShop } from "react-icons/ai";
import { MdBusinessCenter, MdOutlineDiamond } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiProfileFill } from "react-icons/ri";

// global variables:

const bottomMenuItems = [
  {
    title: " Cash",
    icon: <BsCash />,
  },
  {
    title: "Credit card",
    icon: <AiFillCreditCard />,
  },
  {
    title: "Business",
    icon: <MdBusinessCenter />,
  },
  {
    title: "Loan",
    icon: <AiOutlineShop />,
    red: true,
  },

  {
    title: "Investment",
    icon: <BsGraphUpArrow />,
  },
  {
    title: "Asset",
    icon: <MdOutlineDiamond />,
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
    path: "/",
    icon: <BsGraphUpArrow />,
  },
  {
    title: "My review",
    path: "/",
    icon: <BsGraphUpArrow />,
  },
];

const Dashboard = () => {
  // states:
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <section className="relative flex justify-end">
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
                  src="https://static.theprint.in/wp-content/uploads/2021/06/Elon-Musk.jpg?compress=true&quality=80&w=376&dpr=2.6"
                  alt="Bordered avatar"
                />

                <div className=" font-medium dark:text-white sm:block">
                  <div>Jese Leos</div>
                </div>
              </div>
            </div>

            {/* top account container ends */}

            {/* top list items starts  */}
            {/* <ul className="pt-5 topList bg-red-500 ">
              {topMenuItems.map((ele, i) => (
                <li
                  key={i}
                  onClick={() => setIsSidebarActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? `flex rounded-md p-2 cursor-pointer bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 mb-1 
              `
                      : `flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 mb-1 
              `
                  }
                >
                  <div className="text-lg icon">{ele.src}</div>
                  <span className={` flex origin-left duration-200`}>
                    {ele.title}
                  </span>
                </li>
              ))}
            </ul> */}
            {/* top list items ends  */}

            {/* bottom list items start  */}
            {/* bottom list items start  */}
            <ul className="pt-4 bottomList mt-5 ">
              {/* <h1 className="text-gray-50 mb-2">Accounts</h1> */}

              {/* <li
                className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              `}
              >
                <div className="icon text-lg">
                  <ImBook />
                </div>
                <span className={` hidden origin-left duration-200 sm:flex `}>
                  All transactions
                </span>
              </li> */}
            </ul>

            <div className="sidebarList mt-2  ">
              {userMenu.map((ele, ind) => (
                <Link
                  to={ele.path}
                  key={ind}
                  className={`flex rounded-md py-4 px-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4`}
                >
                  <div className="icon text-lg">{ele.icon}</div>
                  <h1
                    className={`hidden gap-1  origin-left duration-200 w-full sm:flex`}
                  >
                    {ele.title}
                  </h1>
                </Link>
              ))}
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
        className="fixed bottom-[20px] h-[50px] right-[20px] md:hidden flex flex-col justify-center gap-2 bg-[#1a171733] p-2 rounded cursor-pointer z-[20] "
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

      {/* sidebar child components starts */}
      {/* <div className="h-screen p-5 ml-64 duration-300"> */}
      {/* child components starts  */}

      <div className="w-[100%] md:w-[calc(100%-16rem)]  bg-slate-400">
        <Outlet />
      </div>
      {/* sidebar child components ends */}
      {/* child components starts ends */}
    </section>
  );
};

export default Dashboard;
