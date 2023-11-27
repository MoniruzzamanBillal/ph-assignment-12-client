import React from "react";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseRole = () => {
  const { user } = UseAuth();
  const [axiosSecure] = UseAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["findRole"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role/${user?.email}`);

      return res.data;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default UseRole;
