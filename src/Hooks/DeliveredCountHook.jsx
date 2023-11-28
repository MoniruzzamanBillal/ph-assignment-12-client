import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAxiosPublic from "./UseAxiosPublic";

const DeliveredCountHook = () => {
  const [axiosPublicUrl] = UseAxiosPublic();

  const { data: deliveredCount } = useQuery({
    queryKey: ["deliveredCount"],
    queryFn: async () => {
      const response = await axiosPublicUrl.get("/delivered/count");
      return response.data;
    },
  });

  return [deliveredCount];
};

export default DeliveredCountHook;
