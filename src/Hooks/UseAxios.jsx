import axios from "axios";

const axiosUrl = axios.create([
  { baseURL: "http://localhost:5000", withCredentials: true },
]);

const UseAxios = () => {
  return [axiosUrl];
};

export default UseAxios;
