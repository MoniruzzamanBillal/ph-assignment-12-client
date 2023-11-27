import React from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  axiosSecure.interceptors.request,
    use(
      (config) => {
        console.log("stoped by interceptor");
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

  return [axiosSecure];
};

export default UseAxiosSecure;
