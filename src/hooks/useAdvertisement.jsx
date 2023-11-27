import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAdvertisement = () => {
    const axiosPublic = useAxiosPublic();
    const { data: advertisement = [], refetch } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await axiosPublic.get('/advertisement');
            return res.data;
        }
    });
    return [ advertisement, refetch ]
};

export default useAdvertisement;