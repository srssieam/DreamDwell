import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";


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
        <div className="px-5">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">All Users</h1>
            <p className="text-lg mb-4">Total User: {users.length}</p>

            <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-black">
                            <tr className="text-xl text-yellow-400 font-semibold ">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((user, idx) => <tr key={users._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>{user.email}</td>
                                    <th className="flex gap-2">
                                        <button className="rounded-md hover:text-yellow-500 p-2 text-green-600 border border-green-600 bg-black ">Make Admin</button>
                                        <button className="rounded-md hover:text-yellow-500 p-2 text-green-600 border border-green-600 bg-black ">Make Agent</button>
                                        <button className="rounded-md hover:text-yellow-500 p-2 text-green-600 border border-green-600 bg-black ">Mark as fraud</button>
                                    </th>
                                    <th>
                                        <button className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
        </div>
    );
};

export default ManageUser;