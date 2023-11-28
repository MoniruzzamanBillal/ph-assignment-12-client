import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosPublic from "./UseAxiosPublic";

const DelivaryManCountHook = () => {
  const [axiosPublicUrl] = UseAxiosPublic();

  const { data: delivaryManCount, refetch: delivaryManRefetch } = useQuery({
    queryKey: ["delivaryManCount"],
    queryFn: async () => {
      const response = await axiosPublicUrl.get("/delivaryman/count");
      //   console.log(response);
      return response.data;
    },
  });

  return [delivaryManCount, delivaryManRefetch];
};

export default DelivaryManCountHook;
