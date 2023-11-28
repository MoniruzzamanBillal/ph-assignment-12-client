import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseParcelCountHook = () => {
  const [axiosSecure] = UseAxiosSecure();

  const {
    data: pacelCount,
    isLoading: parcelCountLoading,
    refetch: parcelCountRefetch,
  } = useQuery({
    queryKey: ["parcelCount"],
    queryFn: async () => {
      const response = await axiosSecure.get("/parcel/count");

      return response.data;
    },
  });

  return [pacelCount, parcelCountLoading, parcelCountRefetch];
};

export default UseParcelCountHook;
