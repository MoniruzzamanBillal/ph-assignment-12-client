import React from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const UseDelivaryMan = () => {
  const [axiosPublicUrl] = UseAxiosPublic();
  // delivarymens

  const { data: delivaryMans, isLoading: delivaryManloading } = useQuery({
    queryKey: ["delivaryman"],
    queryFn: async () => {
      const delivaryManData = await axiosPublicUrl.get("/delivarymens");
      return delivaryManData?.data;
    },
  });

  return [delivaryMans, delivaryManloading];
};

export default UseDelivaryMan;
