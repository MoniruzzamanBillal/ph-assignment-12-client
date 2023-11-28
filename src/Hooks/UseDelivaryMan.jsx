import React from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";

const UseDelivaryMan = () => {
  const { user, loading } = UseAuth();
  const [axiosPublicUrl] = UseAxiosPublic();
  // delivarymens

  const { data: delivaryMans, isLoading: delivaryManloading } = useQuery({
    queryKey: ["delivaryman"],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const delivaryManData = await axiosPublicUrl.get("/delivarymens");
      return delivaryManData?.data;
    },
  });

  return [delivaryMans, delivaryManloading];
};

export default UseDelivaryMan;
