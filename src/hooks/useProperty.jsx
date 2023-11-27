import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProperty = () => {
    const axiosPublic = useAxiosPublic();

    const { data: properties = [], refetch } = useQuery({
        queryKey: ['properties', 'verified'],
        queryFn: async() => {
            const res = await axiosPublic.get('/properties?verification_status=verified');
            return res.data;
        }
    })

    return [ properties, refetch ]

};

export default useProperty;