import React from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";

const UseUser = () => {
  const [axiosPublicUrl] = UseAxiosPublic();
  const { user } = UseAuth();

  const {
    data: users,
    isLoading: userLoading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["users"],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const userData = await axiosPublicUrl.get("/userOnly");
      // console.log(userData);
      return userData?.data;
    },
  });

  return [users, userLoading, userRefetch];
};

export default UseUser;
