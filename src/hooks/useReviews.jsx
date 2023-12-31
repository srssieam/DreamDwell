import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = () => {
    const axiosPublic = useAxiosPublic();
    const {data: reviews = [], refetch} = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data
        }
    })
    return [reviews, refetch] // return data as an array
};

export default useReviews;