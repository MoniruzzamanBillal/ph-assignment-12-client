import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Utilities/Firebase.config";
import UseInput from "../Hooks/UseInput";
import UseAuth from "../Hooks/UseAuth";
import {
  errorlogin,
  inputFieldError,
  loggedInSuccessfully,
} from "../ToastFunc/ToastFunction";
import Loading from "../Components/Loading/Loading";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const Login = () => {
  const [axiosPublicUrl] = UseAxiosPublic();
  const emailInput = UseInput();
  const passwordInput = UseInput();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loginFunction, loading } = UseAuth();

  // console.log("location in login = ", location);

  // email login
  const handleLogin = async () => {
    try {
      const email = emailInput.value;
      const password = passwordInput.value;

      if (!email.trim() || !password.trim()) {
        return inputFieldError();
      }

      const loginResponse = await loginFunction(email, password);

      if (loginResponse?.user) {
        loggedInSuccessfully();
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1200);
      }

      console.log(loginResponse);
    } catch (error) {
      console.log(error);
      errorlogin();
    }
  };

  // google sign in
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((response) => {
      const name = response?.user?.displayName;
      const email = response?.user?.email;
      const uid = response?.user?.uid;
      const role = "user";
      const userImg = response?.user?.photoURL;

      const userData = {
        name,
        email,
        uid,
        role,
        userImg,
      };

      axiosPublicUrl.post("/user", userData).then((userResponse) => {
        console.log(userResponse.data);

        loggedInSuccessfully();

        setTimeout(() => {
          navigate(navigate?.state ? navigate.state : "/");
        }, 1200);
      });
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen font-sans imageCenter   bg-[url('https://i.ibb.co/R0QzCGk/pexels-norma-mortenson-4393668-1.jpg')] ">
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="absolute w-full h-full opacity-60 top-0 left-0 bg-gray-600  "></div>

      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg  ">
          <div className="leading-loose">
            <div className=" w-[56%] xsm:w-[70%] sm:w-[80%] md:w-[85%] xmd:w-[90%] lg:w-[100%]  p-4 xsm:p-5 sm:p-7 md:p-10 m-auto rounded shadow-xl bg-gray-200 dark:bg-gray-700 backdrop-blur bg-opacity-60 dark:backdrop-blur dark:bg-opacity-60 ">
              <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl text-center font-semibold CormorantFont text-gray-700 dark:text-white  ">
                Login to your account
              </p>

              {/*  */}
              {/*  */}

              <div className="mb-3">
                <div className=" relative ">
                  <input
                    type="text"
                    {...emailInput}
                    id="login-with-bg-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 xsm:py-1.5 px-3 sm:py-2 sm:px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className=" relative ">
                  <input
                    type="password"
                    id="login-with-bg-password"
                    {...passwordInput}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 xsm:py-1.5 px-3 sm:py-2 sm:px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  onClick={() => handleLogin()}
                  className="py-1 xsm:py-1.5 px-3 sm:py-2 sm:px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Log in
                </button>
              </div>

              {/*  */}
              {/*  */}
              {/*  */}
              <div className="flex justify-center item-center  py-4">
                <button
                  onClick={() => handleGoogleLogin()}
                  type="button"
                  className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                  </svg>
                  Google
                </button>
              </div>
              {/*  */}
              {/*  */}
              {/*  */}

              <div className="text-center  ">
                <a className="right-0 inline-block text-sm font-light align-baseline text-gray-900 hover:text-gray-950 dark:text-gray-100 dark:hover:text-gray-200 ">
                  Don't have account ?{" "}
                  <span className=" text-blue-700 font-bold cursor-pointer ">
                    <Link to={`/register`}>Register</Link>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
