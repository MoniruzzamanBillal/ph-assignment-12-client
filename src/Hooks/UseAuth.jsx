import React, { useContext } from "react";
import { AppContext } from "../Context/AuthContext";

const UseAuth = () => {
  return useContext(AppContext);
};

export default UseAuth;
