import React from "react";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading/Loading";

const UseRole = () => {
  const { user, loading } = UseAuth();
  const [axiosSecure] = UseAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["findRole"],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role/${user?.email}`);

      return res.data;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default UseRole;
