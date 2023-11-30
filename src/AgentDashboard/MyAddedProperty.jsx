import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { MdLocationPin } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const MyAddedProperty = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: properties = [], refetch } = useQuery({
        queryKey: ['agentAddedProperties', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agentAddedProperties?email=${user?.email}`);
            return res.data;
        }
    })

    const handleDeleteProperty = property => {
        console.log('property to delete', property);
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
                axiosSecure.delete(`/agentAddedProperties/${property._id}`)
                    .then(res => {
                        // console.log(res.data);
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Property has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="lg:px-5">
            <Helmet>
                <title>DreamDwell | My added properties</title>
            </Helmet>
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">My added properties</h1>
            <div className="mb-4 md:flex justify-between">
                <p className="text-lg ">Total added properties: {properties.length}</p>
                <Link to='/dashboard/addNewProperty'><button className="text-black bg-yellow-500 hover:bg-green-500 px-2 py-1 rounded">+ Add new</button></Link>
            </div>
            <div className=" grid md:grid-cols-2 gap-6">
                {
                    properties.map(property => <div key={property._id} className="grid md:grid-cols-2 gap-3 border border-green-700">
                        <img src={property.property_image} className='h-[180px] md:h-[250px] w-full object-cover' alt="" />
                        <div className='space-y-2 px-2 md:px-0 h-full flex flex-col justify-between py-2'>
                            <h5 className="font-sans font-medium">
                                {property.property_title}
                            </h5>
                            <p className="flex text-sm"><MdLocationPin className="text-xl"></MdLocationPin>{property.property_location}</p>
                            <div className='flex items-center gap-4'>
                                <img src={property.agent_image} className='w-11 h-11 object-cover rounded-full' alt="" />
                                <div className='text-center lg:text-left'>
                                    <h3 className='text-sm'>{property.agent_name}</h3>
                                </div>
                            </div>
                            <p className="text-sm">$ ({property.price_range.lower_price} - {property.price_range.upper_price})</p>
                            <p className="flex items-center gap-1.5 font-sans text-green-700 ">
                                status: {property?.verification_status ? property.verification_status : "pending"}
                            </p>
                            <div className="flex gap-3">
                                <button onClick={() => handleDeleteProperty(property)} className="p-2 rounded-md hover:bg-red-500 text-xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                <Link to={`/dashboard/updateProperty/${property._id}`}>
                                    <button className="p-2 rounded-md hover:bg-blue-500 text-xl text-white bg-blue-700"><GrEdit></GrEdit></button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyAddedProperty;