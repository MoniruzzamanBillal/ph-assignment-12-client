import React from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UserCountHook = () => {
  const [axiosPublicUrl] = UseAxiosPublic();

  const {
    data: userCount,
    isLoading: userCountLoading,
    refetch: userCountRefetch,
  } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const response = await axiosPublicUrl.get("/user/count");
      //   console.log(response);
      return response.data;
    },
  });

  return [userCount, userCountLoading, userCountRefetch];
};

export default UserCountHook;
