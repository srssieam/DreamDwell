import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MySoldProperty = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: properties = [] } = useQuery({
        queryKey: ['sold'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/soldProperties?agentName=${user?.displayName}`)
            return res.data
        }
    })
    return (
        <div className="lg:px-4">
            <Helmet>
                <title>DreamDwell | Sold properties</title>
            </Helmet>
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">My Sold Property</h1>
            <div className="mb-4">
                <p className="text-lg ">Total Sold properties: {properties.length}</p>
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
                            <p><strong>Sold price:</strong> {property.offered_amount} $</p>
                        </div>
                        <div>
                            <p><strong>Buyer:</strong> {property.buyer_name}</p>
                            <p><strong>Email:</strong> {property.buyer_email}</p>
                        </div>                                           
                    </div>
                })
            }
        </div>
    );
};

export default MySoldProperty;