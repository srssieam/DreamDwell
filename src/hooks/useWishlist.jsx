import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth";

const useWishlist = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async() => {
            const res = await axiosSecure.get(`wishlist?email=${user.email}`);
            return res.data;
        }
    })

    return [ wishlist, refetch ]
};

export default useWishlist;