import React from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const UseUser = () => {
  const [axiosPublicUrl] = UseAxiosPublic();

  const {
    data: users,
    isLoading: userLoading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const userData = await axiosPublicUrl.get("/userOnly");
      console.log(userData);
      return userData?.data;
    },
  });

  return [users, userLoading, userRefetch];
};

export default UseUser;
