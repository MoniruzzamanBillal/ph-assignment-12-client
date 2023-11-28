import axios from "axios";

const axiosPublicUrl = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://shop-ease-beta.vercel.app",
  withCredentials: true,
});

const UseAxiosPublic = () => {
  return [axiosPublicUrl];
};

export default UseAxiosPublic;
