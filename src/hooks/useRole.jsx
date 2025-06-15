import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: userRole,isPending} = useQuery({
      queryKey: [user?.email, "userRole"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/${user?.email}`);
        return res.data.role;
      },
    });
    return [userRole,isPending];
}

export default useRole