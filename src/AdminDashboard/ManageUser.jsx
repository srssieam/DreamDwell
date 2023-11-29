import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineStop } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth"

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const { user: currentUser } = useAuth();
    console.log('from manage user',currentUser)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDelete = (user) => {
        console.log('user to delete', user)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {    
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res =>{
                        // console.log(res);
                        refetch()
                        if(res.data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                })
            }
          });
    }

    const handleMakeAdmin = (user) => {
        console.log('user to update (admin)', user)

        Swal.fire({
            title: "Make Admin!",
            text: "Are you sure you want to make this user an admin?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#00ad00",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {    
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                        if(res.data.modifiedCount > 0){
                            Swal.fire({
                                title: "Promoted to Admin!",
                                text: `${user.name} is Admin Now!`,
                                icon: "success",
                                timer: 1500
                            }); 
                        }
                     })
            }
          });       
    }

    const handleMakeAgent = (user) => {
        console.log('user to update (agent)', user)

        Swal.fire({
            title: "Make Agent!",
            text: "Are you sure you want to make this user an agent?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#00ad00",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {    
                axiosSecure.patch(`/users/agent/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                        if(res.data.modifiedCount > 0){
                            Swal.fire({
                                title: "Promoted to Agent!",
                                text: `${user.name} is an Agent Now!`,
                                icon: "success",
                                timer: 1500
                            }); 
                        }
                     })
            }
          });
    }

    const handleMarkAsFraud = (user) => {
        console.log('user to mark as fraud', user)

        Swal.fire({
            title: "Mark as fraud!",
            text: "Are you sure you want to mark this user as fraud?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#00ad00",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {    
                axiosSecure.patch(`/users/fraud/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                        if(res.data.modifiedCount > 0){
                            Swal.fire({
                                title: "Marked as fraud!",
                                text: `${user.name} is marked as fraud!`,
                                icon: "success",
                                timer: 1500
                            }); 
                        }
                        axiosSecure.delete(`/fraudProperty/${user.email}`)
                     })
            }
          });
    }
    
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
                                    {
                                        user.role === 'admin'?
                                        <td className="flex justify-start"><p className="text-green-700 font-semibold text-lg p-1 border-2 border-green-700 flex gap-2 items-center"><MdAdminPanelSettings className="text-xl"></MdAdminPanelSettings>Admin</p></td>
                                        : user.role === 'agent'?
                                        <td className="flex justify-start gap-2">
                                            <p className="text-green-700 font-semibold text-lg p-1">Agent</p>
                                            <button onClick={()=>handleMarkAsFraud(user)} className="rounded-md hover:text-yellow-500 p-2 text-green-600 border border-green-600 bg-gray-950 font-semibold ">Mark as fraud</button>
                                        </td>
                                        : user.role === 'fraud'?
                                        <td className="flex justify-start">
                                            <p className="text-red-600 text-lg flex items-center gap-2"><AiOutlineStop className="text-xl"></AiOutlineStop> Fraud</p>
                                        </td>
                                        :
                                        <td className="flex gap-2">
                                            <button onClick={()=>handleMakeAdmin(user)} className="rounded-md hover:text-yellow-500 p-2 text-green-600 border border-green-600 bg-gray-950 font-semibold ">Make Admin</button>
                                            <button onClick={()=>handleMakeAgent(user)} className="rounded-md hover:text-yellow-500 p-2 text-green-600 border border-green-600 bg-gray-950 font-semibold ">Make Agent</button>
                                            <button onClick={()=>handleMarkAsFraud(user)} className="rounded-md hover:text-yellow-500 p-2 text-green-600 border border-green-600 bg-gray-950 font-semibold ">Mark as fraud</button>
                                        </td>         
                                    }
                                    
                                    <td>
                                        {
                                            currentUser.email === user.email ? 
                                            <button onClick={()=>handleDelete(user)} className="p-2 rounded-md bg-red-400 text-2xl text-white " disabled><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                            :
                                            <button onClick={()=>handleDelete(user)} className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                        }
                                        
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
        </div>
    );
};

export default ManageUser;