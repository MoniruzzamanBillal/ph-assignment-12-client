import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { RiMenu3Fill, RiCloseFill, RiXingLine } from "react-icons/ri";

const navLink = [
  {
    item: "Home",
    link: "/",
  },
  {
    item: "Our Menu",
    link: "/",
  },
  {
    item: "Blog",
    link: "/",
  },

  {
    item: "My Cart",
    link: "/",
  },
];

const avatarItems = [
  {
    item: "My food",
    link: "/",
  },
  {
    item: "Add food",
    link: "/",
  },
  {
    item: "My order",
    link: "/",
  },
];

const NavBar = () => {
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [toggle, setToggle] = useState(false);

  // menu toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={` navContainer  z-50 py-2.5  bg-gray-100 dark:bg-gray-400  fixed w-full drop-shadow-lg `}
    >
      <div className="navWrapper flex justify-between w-[98%] xsm:w-[97%] lg:w-[96%] m-auto items-center ">
        {/* nav left  */}
        <div className="navLeft  ">
          <div className="navLeftImg  ">
            <Link
              to={`/`}
              className="self-center cursor-pointer  font-semibold whitespace-nowrap "
            >
              <div className=" flex justify-center items-center  ">
                <div className="logo w-[2.1rem] h-[2.1rem] xsm:w-[2.6rem] xsm:h-[2.5rem] sm:w-[2.8rem] sm:h-[2.7rem]  rounded-md overflow-auto ">
                  <img
                    src="https://i.ibb.co/phpJRMB/rocket-1976107-640.png"
                    className="  w-full h-full "
                    alt=""
                  />{" "}
                </div>
                <p
                  className={`   text-gray-900 dark:text-white text-sm xsm:text-base lg:text-xl  CormorantFont  `}
                >
                  ShipEase
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* nav left  */}

        {/* nav Middle   */}

        <div className="navLinks hidden md:flex ">
          {navLink.map((ele, ind) => (
            <NavLink
              key={ind}
              to={ele.link}
              className={`  ${
                navLink.length - 1 === ind ? "mr-0" : "mr-5"
              } relative group  text-base lg:text-lg   text-gray-700 dark:text-[#E4F1FF] hover:text-blue-500 hover:drop-shadow-md  `}
            >
              {ele.item}
              <span className="absolute -bottom-[.15rem] left-0 w-0 h-[.14rem] bg-blue-400 group-hover:w-full group-hover:transition-all"></span>
            </NavLink>
          ))}
        </div>

        {/* nav Middle   */}

        {/* nav right  */}
        <div className="navRight  flex justify-between items-center  ">
          {/* !mobile view  */}

          <div className="notMobile flex justify-center items-center ">
            {/* avatar image  */}
            <div
              className="avaterImg pr-2 relative  "
              onClick={() => setToggleAvatar(!toggleAvatar)}
            >
              {/* {user?.photoURL && (
              <div className="flex items-center gap-1 cursor-pointer ">
                <p className=" dancingFont font-semibold text-xs lg:text-sm">
                  {user?.displayName}
                </p>
                <img
                  className=" w-7 h-7 lg:w-9 lg:h-9  rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                  src={user?.photoURL}
                  alt="Bordered avatar"
                />
              </div>
            )} */}

              <div className="flex items-center gap-1 cursor-pointer ">
                <p className=" dancingFont font-semibold text-xs lg:text-sm">
                  displayName
                </p>
                <img
                  className=" w-7 h-7 lg:w-9 lg:h-9  rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                  // src={user?.photoURL}
                  alt="User photo"
                />
              </div>

              {/* avatar item  */}
              {toggleAvatar && (
                <div className="menuList text-center py-2 bg-[#183D3D] dark:bg-gray-300 absolute transform -translate-x-1/2 -translate-y-1/2 -right-[4.8rem] top-[5.7rem] xsm:top-[5.8rem] lg:top-[6.3rem] w-[10rem] ">
                  <div className="menuItem   ">
                    {avatarItems.map((ele, ind) => (
                      <div
                        key={ind}
                        className={` text-base ${
                          ind === navLink.length - 1 ? "pb-0" : "pb-3"
                        }  `}
                      >
                        <a
                          href={ele.link}
                          className="  cursor-pointer text-gray-50 dark:text-gray-900 "
                          onClick={() => handleToggle()}
                        >
                          {" "}
                          {ele.item}{" "}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* avatar item  */}
            </div>

            {/* avatar image  */}

            {/* {user ? (
            <Link
              className=" hidden md:block bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm  "
              onClick={() => handleLogout()}
            >
              Log out
            </Link>
          ) : (
            <Link
              to={`/login`}
              className=" hidden md:block bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm "
            >
              Log in
            </Link>
          )} */}
            <Link
              to={`/login`}
              className=" hidden md:block bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm "
            >
              Log in
            </Link>
          </div>

          {/* !mobile view  */}

          {/* toggle button  */}
          <div className="toggleMode  pl-0 md:pl-2 mr-3 md:pr-0 text-xl sm:text-2xl ">
            <BsFillMoonFill />
          </div>
          {/* toggle button  */}

          {/*  */}
          {/* mobile view  */}

          <div className="mobileView flex md:hidden relative ">
            {/* menu icon  */}
            <div
              className="menuIcon text-lg xsm:text-xl sm:text-2xl "
              onClick={() => handleToggle()}
            >
              {!toggle ? <RiMenu3Fill /> : <RiCloseFill />}
            </div>
            {/* menu icon  */}

            {/* menu list  */}

            {toggle && (
              <div className="menuList text-center py-2 bg-[#183D3D] dark:bg-gray-300 absolute transform -translate-x-1/2 -translate-y-1/2 -right-[4.8rem] top-[7.1rem] sm:top-[7.4rem] w-[10rem] ">
                <div className="menuItem mb-4  ">
                  {navLink.map((ele, ind) => (
                    <div
                      key={ind}
                      className={` text-base ${
                        ind === navLink.length - 1 ? "pb-0" : "pb-3"
                      }  `}
                    >
                      <a
                        href={ele.link}
                        className="  cursor-pointer text-gray-50 dark:text-gray-900 "
                        onClick={() => handleToggle()}
                      >
                        {" "}
                        {ele.item}{" "}
                      </a>
                    </div>
                  ))}
                </div>

                {/* {user ? (
                <Link
                  className=" bg-amber-300 dark:bg-violet-500 rounded  py-1.5 px-5 text-gray-700 dark:text-white "
                  onClick={() => {
                    handleToggle();
                  }}
                >
                  Log out
                </Link>
              ) : (
                <Link
                  to={`/login`}
                  className=" bg-amber-300 dark:bg-violet-500 rounded   py-1.5 px-5 text-gray-700 dark:text-white "
                  onClick={() => handleToggle()}
                >
                  Log in
                </Link>
              )} */}

                <Link
                  to={`/login`}
                  className=" bg-amber-300 dark:bg-violet-500 rounded   py-1.5 px-5 text-gray-700 dark:text-white "
                  onClick={() => handleToggle()}
                >
                  Log in
                </Link>
              </div>
            )}
            {/* menu list  */}
          </div>

          {/* mobile view  */}
        </div>
        {/* nav right  */}
      </div>
    </div>
  );
};

export default NavBar;
