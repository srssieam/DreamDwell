import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    
    return (
        <div>
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">All Users</h1>

        </div>
    );
};

export default ManageUser;