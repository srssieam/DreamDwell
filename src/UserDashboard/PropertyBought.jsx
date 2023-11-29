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
                                <p><strong>Property:</strong> {property.property_title}</p>
                                <p><strong>Location:</strong> {property.property_location}</p>
                            </div>
                            <div>
                                <p><strong>Agent:</strong> {property.agent_name}</p>
                                <p><strong>Offered amount:</strong> {property.offered_amount}</p>
                            </div>
                            <div className="flex md:flex-col justify-center gap-3">
                                <p className="p-1 bg-yellow-500 md:mx-7 text-center font-playpen text-black font-semibold">{property.status}</p>
                                {
                                    property.status === "accepted" && <button className="p-2 rounded bg-green-500 hover:bg-green-600 md:mx-7 font-playpen text-black font-semibold">Pay</button>
                                }
                            </div>
                        </div>
                    })
                }
        </div>
    );
};

export default PropertyBought;