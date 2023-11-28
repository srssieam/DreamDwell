import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { MdLocationPin } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";


const MyAddedProperty = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: properties = [] } = useQuery({
        queryKey: ['agentAddedProperties', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agentAddedProperties?email=${user?.email}`);
            return res.data;
        }
    })
    return (
        <div className="lg:px-5">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">My added properties</h1>
            <p className="text-lg mb-4">Total added properties: {properties.length}</p>
            <div className=" grid md:grid-cols-2 gap-6">
                {
                    properties.map(property => <div key={property._id} className="grid md:grid-cols-2 gap-3 border border-green-700">
                        <img src={property.property_image} className='h-[180px] md:h-[250px] w-full object-cover' alt="" />
                        <div className='space-y-2 px-2 md:px-0'>
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
                                <button className="p-2 rounded-md hover:bg-red-500 text-xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                <button className="p-2 rounded-md hover:bg-blue-500 text-xl text-white bg-blue-700"><GrEdit></GrEdit></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyAddedProperty;