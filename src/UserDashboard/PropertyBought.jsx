import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";


const PropertyBought = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const {data: properties = [], refetch} = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersOfferedProperties?email=${user?.email}`)
            return res.data
        }
    })
    return (
        <div className="lg:px-5">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Property bought</h1>
            <div className="mb-4">
                <p className="text-lg ">Total properties bought: {properties.length}</p>
            </div>
            {
                    properties?.map(property => {
                        return <div key={property._id} className="grid md:grid-cols-4 gap-6 border-b-2 border-t-2 items-center py-4">
                            <div>
                                <img src={property.property_image} className="w-full max-h-[200px] object-cover" alt="" />
                            </div>
                            <div>
                                <p><strong>Item:</strong> {property.property_title}</p>
                                <p><strong>Quantity:</strong> {property.property_location}</p>
                                <p><strong>Price:</strong> {property.price}</p>
                            </div>
                            <div>
                                <p><strong>Agent:</strong> {property.agent_name}</p>
                                <p><strong>Offered amount:</strong> {property.offered_amount}</p>
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <p className="p-2 bg-yellow-500 md:mx-7 font-playpen text-black font-semibold">{property.status}</p>
                            </div>
                        </div>
                    })
                }
        </div>
    );
};

export default PropertyBought;