import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { MdOutlineVerified } from "react-icons/md";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdvertisement from "../hooks/useAdvertisement";


const AdvertiseProperty = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const [advertisement] = useAdvertisement();
    console.log(advertisement, 'from useAdvertise')

    const { data: properties = [], refetch } = useQuery({
        queryKey: ['verifiedProperty'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allVerifiedProperties');
            return res.data;
        }
    });

    const handleAdvertise = property => {
        console.log('property to be advertised', property)

        if(advertisement.length >= 6){
            Swal.fire({
                title: "Denied!",
                text: "You can't advertise more then 6 properties.",
                icon: "error",
            });
            return;
        }

        axiosSecure.post('/advertisement', property)
            .then(res => {
                console.log(res.data);
                refetch()
                if (res.data.insertedId) {
                    refetch();
                    Swal.fire({
                        title: "Property Advertised!",
                        text: "The property has been successfully advertised.",
                        icon: "success",
                        timer: 1500
                    });
                }
            })
    }

    const handleRemove = property => {
        console.log('property to be removed', property)
        axiosSecure.delete(`/advertisement/${property._id}`)
                    .then(res =>{
                        console.log(res.data);
                        refetch();
                        if(res.data.deletedCount > 0){
                            Swal.fire({
                                title: "removed!",
                                text: "Advertisement has been removed.",
                                icon: "success"
                            });
                        }
                })
    }


    return (
        <div className="px-5">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Manage Properties</h1>
            <p className="text-red-600 font-semibold text-xl mb-4">You can advertise at most 6 properties</p>
            <p className="text-lg mb-4">Total verified Properties: {properties.length}</p>

            <div className="border-2 border-green-700 p-4 grid md:grid-cols-2 gap-6">
                {
                    properties.map((property, idx) => <div key={idx} className="p-4 border flex flex-col justify-between">
                        <div className='flex flex-col gap-4'>
                            <img src={property.property_image} className='w-full h-56 object-cover rounded-md' alt="" />
                            <div className=''>
                                <div className="flex items-center justify-between">
                                    <h5 className="font-sans text-xl font-medium">
                                        {property.property_title}
                                    </h5>
                                    <p className="flex items-center gap-1.5 font-sans text-green-700 ">
                                        <MdOutlineVerified className="text-xl "></MdOutlineVerified> verified
                                    </p>
                                </div>
                                <p className='text-[#368a2b]'>Agent: {property.agent_name}</p>
                                <p>$ ({property.price_range.lower_price} - {property.price_range.upper_price})</p>
                            </div>
                        </div>
                        <div className="text-center flex gap-4 justify-center mt-6">
                            <button onClick={() => handleAdvertise(property)} className="text-white bg-green-700 hover:bg-green-600 rounded-md p-2">Advertise</button>
                            <button onClick={() => handleRemove(property)} className="text-white bg-red-700 hover:bg-red-600 rounded-md p-2">Remove Advertise</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AdvertiseProperty;