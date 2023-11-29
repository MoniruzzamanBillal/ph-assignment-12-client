import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://shop-ease-beta.vercel.app",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { loading, logoutFunction } = UseAuth();
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
          logoutFunction()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }

  return [axiosSecure];
};

export default UseAxiosSecure;
