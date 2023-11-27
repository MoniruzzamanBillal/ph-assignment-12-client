import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { loading } = UseAuth();
  // console.log(loading);

  if (!loading) {
    axiosSecure.interceptors.request.use(
      (config) => {
        // console.log("stoped by interceptor in request");
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // for response
    axiosSecure.interceptors.response.use(
      (response) => {
        // console.log("stoped by interceptor in response  ");

        return response;
      },
      (error) => {
        const status = error?.response?.status;
        if (status == "401" || status == "403") {
          // logOut()
          //   .then((res) => console.log(res))
          //   .catch((err) => console.log(err));
          // navigate("/login");
          alert("logout the user ");
        }
        return Promise.reject(error);
      }
    );
  }

  return [axiosSecure];
};

export default UseAxiosSecure;
